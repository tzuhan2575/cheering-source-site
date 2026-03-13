"use client";

import Link from "next/link";
import { useState } from "react";

const mockItems = [
  {
    id: "1",
    type: "小卡",
    creator: "@creator_a",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    status: "已附來源",
  },
  {
    id: "2",
    type: "徽章",
    creator: "@creator_b",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    status: "尚待確認",
  },
  {
    id: "3",
    type: "其他",
    creator: "@creator_c",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    status: "有異議",
  },
  {
    id: "4",
    type: "小卡",
    creator: "@creator_d",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    status: "尚待確認",
  },
];

const typeOptions = ["全部", "小卡", "徽章", "其他"];

export default function Home() {
  const [selectedType, setSelectedType] = useState("全部");

  const filteredItems =
    selectedType === "全部"
      ? mockItems
      : mockItems.filter((item) => item.type === selectedType);

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-neutral-900">應援物查詢站</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-neutral-600">
          協助整理應援物來源資訊，降低盜圖與冒名造成的混亂。
        </p>

        <div className="mt-8 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-neutral-900">以圖搜圖</h2>
          <p className="mt-2 text-sm leading-6 text-neutral-600">
            上傳應援物圖片，查找平台內已收錄的相似圖片與來源資訊。
          </p>

          <div className="mt-4 rounded-2xl border-2 border-dashed border-neutral-300 bg-neutral-50 p-8 text-center">
            <p className="text-sm text-neutral-500">
              拖曳圖片到這裡，或點擊上傳
            </p>
            <button className="mt-4 rounded-xl bg-black px-4 py-2 text-sm text-white">
              選擇圖片
            </button>
          </div>
        </div>

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
                    src={item.image}
                    alt={item.creator}
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