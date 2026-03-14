"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { items, TYPE_OPTIONS, type ItemType } from "../data/items";
import { prebuildItemEmbeddings, searchBestMatch } from "../lib/image-search";
import ItemCard from "../components/ItemCard";

export default function Home() {
  const [selectedType, setSelectedType] = useState<ItemType>("全部");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [bestMatchId, setBestMatchId] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

  const filteredItems =
    selectedType === "全部"
      ? items
      : items.filter((item) => item.types.includes(selectedType));

  const bestMatch = useMemo(() => {
    if (!bestMatchId) return null;
    return items.find((item) => item.id === bestMatchId) || null;
  }, [bestMatchId]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);

    setSelectedFile(file);
    setSelectedFileName(file.name);
    setPreviewUrl(objectUrl);
    setHasSearched(false);
    setBestMatchId(null);
    setSearchError("");
  };

  const handleSearch = async () => {
    if (!selectedFile) return;

    try {
      setIsSearching(true);
      setSearchError("");

      const result = await searchBestMatch(selectedFile, items, 0.25);

      setHasSearched(true);
      setBestMatchId(result ? result.id : null);
    } catch (error) {
      console.error(error);
      setSearchError("搜尋失敗，請稍後再試一次。");
      setHasSearched(false);
      setBestMatchId(null);
    } finally {
      setIsSearching(false);
    }
  };

  const resetSearchState = () => {
    setSelectedType("全部");
    setSelectedFile(null);
    setSelectedFileName("");
    setPreviewUrl("");
    setHasSearched(false);
    setBestMatchId(null);
    setSearchError("");
    setIsSearching(false);
  };

  useEffect(() => {
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
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <button
              type="button"
              onClick={resetSearchState}
              className="text-left text-3xl font-bold text-neutral-900 transition hover:opacity-80"
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
            上傳應援物圖片，查找平台內最接近的一筆已收錄資料。
          </p>

          <div className="mt-4 rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-6">
            <div className="flex flex-col gap-4 lg:flex-row">
              <div className="flex-1">
                <label
                  htmlFor="image-upload"
                  className="flex min-h-[220px] cursor-pointer flex-col items-center justify-center rounded-2xl border border-neutral-200 bg-white px-6 py-8 text-center"
                >
                  {previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="預覽圖片"
                      className="max-h-[260px] rounded-xl object-contain"
                    />
                  ) : (
                    <>
                      <p className="text-sm text-neutral-500">
                        拖曳圖片到這裡，或點擊上傳
                      </p>
                      <span className="mt-4 rounded-xl bg-black px-4 py-2 text-sm text-white">
                        選擇圖片
                      </span>
                    </>
                  )}
                </label>

                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </div>

              <div className="w-full rounded-2xl border border-neutral-200 bg-white p-5 lg:max-w-xs">
                <p className="text-sm font-medium text-neutral-900">搜尋狀態</p>

                <div className="mt-4 space-y-3 text-sm text-neutral-600">
                  <div>
                    <p className="text-sm text-neutral-600">已選擇圖片：</p>
                    <p className="mt-1 break-all text-sm text-neutral-900">
                      {selectedFileName || "尚未選擇"}
                    </p>
                  </div>

                  <p>
                    搜尋範圍：
                    <span className="ml-1 text-neutral-900">
                      平台內已收錄資料
                    </span>
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleSearch}
                  disabled={!selectedFile || isSearching}
                  className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm text-white transition ${
                    selectedFile && !isSearching
                      ? "bg-black hover:opacity-90"
                      : "cursor-not-allowed bg-neutral-300"
                  }`}
                >
                  {isSearching && (
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/50 border-t-white" />
                  )}
                  <span>{isSearching ? "搜尋中…" : "開始搜尋"}</span>
                </button>

                <p className="mt-3 text-xs leading-5 text-neutral-500">
                  第一次搜尋會先下載模型，可能會稍微久一點。若在 Threads 或 IG
                  內建瀏覽器中出現異常，建議改用 Safari 或 Chrome 開啟。
                </p>

                {isSearching && (
                  <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-5 w-5 animate-spin rounded-full border-2 border-neutral-300 border-t-black" />
                      <div>
                        <p className="text-sm font-medium text-neutral-900">
                          搜尋中
                        </p>
                        <p className="mt-1 text-sm leading-6 text-neutral-600">
                          正在分析上傳圖片，並與平台內已收錄資料比對，請稍候…
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {searchError && (
                  <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4">
                    <p className="text-sm font-medium text-red-700">搜尋失敗</p>
                    <p className="mt-1 text-sm leading-6 text-red-600">
                      {searchError}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {hasSearched && (
          <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900">搜尋結果</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              以下為平台內最接近的一筆資料。
            </p>

            {bestMatch ? (
              <div className="mt-6 max-w-sm">
                <ItemCard item={bestMatch} />
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-600">
                目前沒有找到相似度足夠高的結果。
              </div>
            )}
          </div>
        )}

        <div className="mt-8">
          <div className="flex flex-wrap gap-3">
            {TYPE_OPTIONS.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setSelectedType(type)}
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
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-5 text-sm leading-6 text-neutral-600 shadow-sm">
          <p className="font-medium text-neutral-900">平台說明</p>
          <p className="mt-2">
            本平台僅提供演唱會應援物資訊整理與平台內部以圖搜圖功能，協助使用者查找可能對應的原始發文與創作者。
          </p>
          <p className="mt-2">
            平台不負責各創作者之應援物發放細節、實物內容、數量、品質、交換方式或後續聯繫，也不保證圖片與實際物品完全一致。
          </p>
          <p className="mt-2">
            如需確認詳細資訊，請直接與原始發文之創作者聯繫。
          </p>
        </div>
      </div>
    </main>
  );
}
