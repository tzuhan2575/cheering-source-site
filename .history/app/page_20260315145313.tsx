"use client";

import Link from "next/link";
import { Suspense, ChangeEvent, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { items, TYPE_OPTIONS, type ItemType } from "../data/items";
import { prebuildItemEmbeddings, searchBestMatch } from "../lib/image-search";
import ItemCard from "../components/ItemCard";

const ITEMS_PER_PAGE = 12;

function isValidItemType(value: string | null): value is ItemType {
  if (!value) return false;
  return TYPE_OPTIONS.includes(value as ItemType);
}

function HomeContent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const initialType = isValidItemType(searchParams.get("type"))
    ? (searchParams.get("type") as ItemType)
    : "全部";

  const initialKeyword = searchParams.get("keyword") ?? "";
  const initialPage = Math.max(1, Number(searchParams.get("page") ?? "1") || 1);

  const [selectedType, setSelectedType] = useState<ItemType>(initialType);
  const [keyword, setKeyword] = useState(initialKeyword);
  const [currentPage, setCurrentPage] = useState(initialPage);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [bestMatchId, setBestMatchId] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

  const isMobileDevice =
    typeof navigator !== "undefined" &&
    /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  useEffect(() => {
    if (isMobileDevice) return;

    let isMounted = true;

    const runPrebuild = async () => {
      try {
        if (!isMounted) return;
        await prebuildItemEmbeddings(items);
      } catch (error) {
        console.warn("Failed to prebuild item embeddings.", error);
      }
    };

    runPrebuild();

    return () => {
      isMounted = false;
    };
  }, [isMobileDevice]);

  const filteredItems = useMemo(() => {
    const query = keyword.trim().toLowerCase();

    return items.filter((item) => {
      const matchType =
        selectedType === "全部" || item.types.includes(selectedType);

      const matchKeyword =
        query === "" ||
        item.creator.toLowerCase().includes(query) ||
        item.title.toLowerCase().includes(query);

      return matchType && matchKeyword;
    });
  }, [selectedType, keyword]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredItems.length / ITEMS_PER_PAGE),
  );

  const paginatedItems = useMemo(() => {
    const safePage = Math.min(currentPage, totalPages);
    const start = (safePage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return filteredItems.slice(start, end);
  }, [filteredItems, currentPage, totalPages]);

  const bestMatch = useMemo(() => {
    if (!bestMatchId) return null;
    return items.find((item) => item.id === bestMatchId) || null;
  }, [bestMatchId]);

  useEffect(() => {
    const params = new URLSearchParams();

    if (selectedType !== "全部") {
      params.set("type", selectedType);
    }

    if (keyword.trim()) {
      params.set("keyword", keyword.trim());
    }

    if (currentPage > 1) {
      params.set("page", String(currentPage));
    }

    const queryString = params.toString();
    const nextUrl = queryString ? `${pathname}?${queryString}` : pathname;

    router.replace(nextUrl, { scroll: false });
  }, [selectedType, keyword, currentPage, pathname, router]);

  useEffect(() => {
    const urlType = isValidItemType(searchParams.get("type"))
      ? (searchParams.get("type") as ItemType)
      : "全部";
    const urlKeyword = searchParams.get("keyword") ?? "";
    const urlPage = Math.max(1, Number(searchParams.get("page") ?? "1") || 1);

    if (urlType !== selectedType) setSelectedType(urlType);
    if (urlKeyword !== keyword) setKeyword(urlKeyword);
    if (urlPage !== currentPage) setCurrentPage(urlPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(1);
    }
  }, [currentPage, totalPages]);

  const resetSearchState = () => {
    setSelectedType("全部");
    setKeyword("");
    setCurrentPage(1);
    setSelectedFile(null);
    setSelectedFileName("");
    setPreviewUrl("");
    setHasSearched(false);
    setBestMatchId(null);
    setIsSearching(false);
    setSearchError("");
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    const objectUrl = URL.createObjectURL(file);

    setSelectedFile(file);
    setSelectedFileName(file.name);
    setPreviewUrl(objectUrl);
    setHasSearched(false);
    setBestMatchId(null);
    setSearchError("");
  };

  const handleSearch = async () => {
    if (isMobileDevice) {
      setHasSearched(false);
      setBestMatchId(null);
      setSearchError("手機版目前暫不開放以圖搜圖，建議改用電腦版操作。");
      return;
    }

    if (!selectedFile) {
      setSearchError("請先選擇一張圖片。");
      return;
    }

    try {
      setIsSearching(true);
      setHasSearched(false);
      setSearchError("");
      setBestMatchId(null);

      const result = await searchBestMatch(selectedFile, items, 0.25);

      if (!result) {
        setHasSearched(true);
        setBestMatchId(null);
        setSearchError("目前找不到相似度足夠高的站內資料。");
        return;
      }

      setHasSearched(true);
      setBestMatchId(result.id);
    } catch (error) {
      console.error(error);
      setHasSearched(true);
      setBestMatchId(null);
      setSearchError("搜尋時發生問題，請稍後再試一次。");
    } finally {
      setIsSearching(false);
    }
  };

  const renderPageNumbers = () => {
    if (totalPages <= 1) return null;

    const pages: number[] = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      if (start > 2) pages.push(-1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (end < totalPages - 1) pages.push(-2);

      pages.push(totalPages);
    }

    return pages.map((page, index) =>
      page < 0 ? (
        <span
          key={`ellipsis-${index}`}
          className="px-2 py-2 text-sm text-neutral-400"
        >
          …
        </span>
      ) : (
        <button
          key={page}
          type="button"
          onClick={() => setCurrentPage(page)}
          className={`min-w-10 rounded-xl px-3 py-2 text-sm transition ${
            currentPage === page
              ? "bg-black text-white"
              : "border border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400"
          }`}
        >
          {page}
        </button>
      ),
    );
  };

  return (
    <main className="min-h-screen bg-neutral-50 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <button
              type="button"
              onClick={resetSearchState}
              className="text-left text-2xl font-bold text-neutral-900 transition hover:opacity-80 sm:text-3xl"
            >
              TWICE THIS IS FOR in TAIPEI 應援物查詢站
            </button>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
              協助整理演唱會應援物資訊，並提供平台內部以圖搜圖功能，方便查找原始發文與創作者。
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-600">
              如果你有看到尚未收錄的台北場應援資訊，也歡迎協助補充，讓更多 ONCE
              能更快找到原始發文與創作者資訊。
            </p>
          </div>

          <Link
            href="/submit"
            className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:opacity-90"
          >
            協助新增應援資訊
          </Link>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-900">
          <p className="font-medium">公告</p>
          <p className="mt-2">
            本平台資料仍在持續補充中，若目前尚未找到相關應援物，可晚些再回來查看。
          </p>
          <p className="mt-2">
            本平台僅整理 TWICE《THIS IS
            FOR》台北場相關應援資訊，預計使用至本次台北場活動結束。
          </p>
          <p className="mt-2">
            若在 Threads 或 IG
            內建瀏覽器中開啟時出現黑畫面、卡住或其他異常，建議改用 Safari 或
            Chrome 開啟。
          </p>
        </div>

        <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">以圖搜圖</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            上傳應援物圖片，查找平台內已收錄的相似圖片與來源資訊。
          </p>

          <div className="mt-4 rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-6">
            <div className="grid gap-4 lg:grid-cols-[2fr_1fr]">
              <div className="flex min-h-[260px] items-center justify-center rounded-2xl border border-neutral-200 bg-white p-4">
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="預覽圖片"
                    className="max-h-[320px] rounded-xl object-contain"
                  />
                ) : (
                  <p className="text-sm text-neutral-400">
                    尚未選擇圖片，請先上傳
                  </p>
                )}
              </div>

              <div className="rounded-2xl border border-neutral-200 bg-white p-5">
                <p className="text-sm font-medium text-neutral-900">搜尋狀態</p>

                <div className="mt-4 space-y-3 text-sm text-neutral-600">
                  <div>
                    <p className="font-medium text-neutral-800">已選擇圖片：</p>
                    <p className="mt-1 break-all">
                      {selectedFileName || "尚未選擇"}
                    </p>
                  </div>

                  <div>
                    <p className="font-medium text-neutral-800">搜尋範圍：</p>
                    <p className="mt-1">平台內已收錄資料</p>
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <label className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 transition hover:border-neutral-400 disabled:cursor-not-allowed disabled:opacity-50">
                    選擇圖片
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                      disabled={isMobileDevice}
                    />
                  </label>

                  <button
                    type="button"
                    onClick={handleSearch}
                    disabled={!selectedFile || isSearching || isMobileDevice}
                    className="inline-flex w-full items-center justify-center rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {isMobileDevice
                      ? "手機版暫不開放搜圖"
                      : isSearching
                        ? "搜尋中..."
                        : "開始搜尋"}
                  </button>
                </div>

                <p className="mt-3 text-xs leading-5 text-neutral-500">
                  以圖搜圖目前建議使用電腦版操作。手機瀏覽器可能因模型載入造成頁面異常或重新整理。
                </p>

                {isMobileDevice ? (
                  <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                    手機版目前暫不開放以圖搜圖，建議改用電腦版操作。
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {searchError ? (
          <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {searchError}
          </div>
        ) : null}

        {hasSearched && bestMatch ? (
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-neutral-900">搜尋結果</h2>
            <p className="mt-2 text-sm text-neutral-600">
              目前找到站內最接近的一筆資料。
            </p>

            <div className="mt-4 max-w-sm">
              <ItemCard item={bestMatch} />
            </div>
          </div>
        ) : null}

        <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">文字搜尋</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            可搜尋創作者帳號或應援物標題。
          </p>

          <div className="mt-4">
            <input
              type="text"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="搜尋創作者帳號或應援物標題"
              className="w-full rounded-2xl border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-800 outline-none transition focus:border-black"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {TYPE_OPTIONS.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => {
                setSelectedType(type);
                setCurrentPage(1);
              }}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                selectedType === type
                  ? "border-black bg-black text-white"
                  : "border-neutral-300 bg-white text-neutral-700 hover:border-neutral-400"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-col gap-2 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>目前顯示 {filteredItems.length} 筆資料</p>
          <p>
            第 {currentPage} / {totalPages} 頁
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {paginatedItems.map((item) => (
            <ItemCard key={item.id} item={item} compact />
          ))}
        </div>

        {totalPages > 1 ? (
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            <button
              type="button"
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 transition hover:border-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              上一頁
            </button>

            {renderPageNumbers()}

            <button
              type="button"
              onClick={() =>
                setCurrentPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={currentPage === totalPages}
              className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 transition hover:border-neutral-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              下一頁
            </button>
          </div>
        ) : null}
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-neutral-50 px-4 py-8 sm:px-6 sm:py-10" />
      }
    >
      <HomeContent />
    </Suspense>
  );
}
