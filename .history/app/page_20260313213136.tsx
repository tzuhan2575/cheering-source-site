"use client";

import Link from "next/link";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { items } from "../data/items";
import { searchSimilarItems } from "../lib/image-search";

const typeOptions = ["全部", "貼紙", "胸章", "鑰匙圈", "杯套", "其他"];

export default function Home() {
  const [selectedType, setSelectedType] = useState("全部");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [previewUrl, setPreviewUrl] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [searchResultIds, setSearchResultIds] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchError, setSearchError] = useState("");

  useEffect(() => {
    const savedPreviewUrl = sessionStorage.getItem("searchPreviewUrl");
    const savedFileName = sessionStorage.getItem("searchFileName");
    const savedHasSearched = sessionStorage.getItem("hasSearched");
    const savedResultIds = sessionStorage.getItem("searchResultIds");

    if (savedPreviewUrl) setPreviewUrl(savedPreviewUrl);
    if (savedFileName) setSelectedFileName(savedFileName);
    if (savedHasSearched === "true") setHasSearched(true);
    if (savedResultIds) setSearchResultIds(JSON.parse(savedResultIds));
  }, []);

  const filteredItems =
    selectedType === "全部"
      ? items
      : items.filter((item) => item.types.includes(selectedType));

  const searchResults = useMemo(() => {
    if (!hasSearched) return [];
    return searchResultIds
      .map((id) => items.find((item) => item.id === id))
      .filter(Boolean);
  }, [hasSearched, searchResultIds]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result as string;

      setSelectedFile(file);
      setSelectedFileName(file.name);
      setPreviewUrl(result);
      setHasSearched(false);
      setSearchResultIds([]);
      setSearchError("");

      sessionStorage.setItem("searchFileName", file.name);
      sessionStorage.setItem("searchPreviewUrl", result);
      sessionStorage.setItem("hasSearched", "false");
      sessionStorage.setItem("searchResultIds", JSON.stringify([]));
    };

    reader.readAsDataURL(file);
  };

  const handleSearch = async () => {
    if (!selectedFile) return;

    try {
      setIsSearching(true);
      setSearchError("");

      const results = await searchSimilarItems(selectedFile, items, 3);
      const ids = results.map((result) => result.id);

      setSearchResultIds(ids);
      setHasSearched(true);

      sessionStorage.setItem("hasSearched", "true");
      sessionStorage.setItem("searchResultIds", JSON.stringify(ids));
    } catch (error) {
      console.error(error);
      setSearchError("搜尋失敗，請稍後再試一次。");
      setHasSearched(false);
      setSearchResultIds([]);
      sessionStorage.setItem("hasSearched", "false");
      sessionStorage.setItem("searchResultIds", JSON.stringify([]));
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
    setSearchResultIds([]);
    setSearchError("");
    setIsSearching(false);

    sessionStorage.removeItem("searchFileName");
    sessionStorage.removeItem("searchPreviewUrl");
    sessionStorage.removeItem("hasSearched");
    sessionStorage.removeItem("searchResultIds");
  };

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
              應援物查詢站
            </button>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
              協助整理應援物來源資訊，降低盜圖與冒名造成的混亂。
            </p>
          </div>

          <Link
            href="/submit"
            className="inline-flex items-center justify-center rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:opacity-90"
          >
            新增資料
          </Link>
        </div>

        <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">以圖搜圖</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            上傳應援物圖片，查找平台內已收錄的相似圖片與來源資訊。
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
                  className={`mt-6 w-full rounded-xl px-4 py-2 text-sm text-white transition ${
                    selectedFile && !isSearching
                      ? "bg-black hover:opacity-90"
                      : "cursor-not-allowed bg-neutral-300"
                  }`}
                >
                  {isSearching ? "搜尋中…" : "開始搜尋"}
                  {isSearching && (
  <div className="mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-600">
    正在分析圖片並比對平台內資料，請稍候…
  </div>
)}
                </button>

                <p className="mt-3 text-xs leading-5 text-neutral-500">
                  第一次搜尋會先下載模型，可能會稍微久一點。
                </p>

                {searchError && (
                  <p className="mt-3 text-sm text-red-600">{searchError}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {hasSearched && (
          <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-neutral-900">搜尋結果</h2>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              以下為平台內可能相關的已收錄資料。
            </p>

            {searchResults.length > 0 ? (
              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {searchResults.map((item) => {
                  if (!item) return null;

                  return (
                    <Link key={item.id} href={`/item/${item.id}`}>
                      <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                        <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
                          <p className="font-medium text-neutral-900">
                            {item.creator}
                          </p>
                          <span
                            className={`rounded-full px-3 py-1 text-xs ${
                              item.status === "有異議"
                                ? "bg-red-100 text-red-700"
                                : item.status === "已附來源"
                                ? "bg-emerald-100 text-emerald-700"
                                : "bg-neutral-100 text-neutral-600"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>

                        <div className="aspect-square w-full overflow-hidden bg-neutral-100">
                          <img
                            src={item.images[0]}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </article>
                    </Link>
                  );
                })}
              </div>
            ) : (
              <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-6 text-sm text-neutral-600">
                目前沒有找到相關結果。
              </div>
            )}
          </div>
        )}

        <div className="mt-8">
          <div className="flex flex-wrap gap-3">
            {typeOptions.map((type) => (
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
            <Link key={item.id} href={`/item/${item.id}`}>
              <article className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
                  <p className="font-medium text-neutral-900">{item.creator}</p>
                  <span
                    className={`rounded-full px-3 py-1 text-xs ${
                      item.status === "有異議"
                        ? "bg-red-100 text-red-700"
                        : item.status === "已附來源"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-neutral-100 text-neutral-600"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <div className="aspect-square w-full overflow-hidden bg-neutral-100">
                  <img
                    src={item.images[0]}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-neutral-200 bg-white p-5 text-sm leading-6 text-neutral-600 shadow-sm">
          <p className="font-medium text-neutral-900">平台說明</p>
          <p className="mt-2">
            本平台僅提供應援物圖片與來源資訊整理，協助使用者查找可能對應的原始發文與創作者。
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