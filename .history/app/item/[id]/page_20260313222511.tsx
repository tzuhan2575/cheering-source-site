import Link from "next/link";
import { items } from "../../../data/items";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ItemDetailPage({ params }: PageProps) {
  const { id } = await params;
  const item = items.find((entry) => entry.id === id);

  if (!item) {
    return (
      <main className="min-h-screen bg-neutral-50 px-6 py-10">
        <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <h1 className="text-2xl font-bold text-neutral-900">找不到資料</h1>
          <p className="mt-3 text-neutral-600">這筆應援物資料不存在。</p>
          <Link href="/" className="mt-6 inline-block text-sm text-blue-600">
            返回首頁
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
          <p className="text-sm text-neutral-500">{item.creator}</p>

          <h1 className="mt-2 text-2xl font-bold text-neutral-900">
            {item.title}
          </h1>

          <div className="mt-4 flex flex-wrap gap-2">
            {item.types.map((type) => (
              <span
                key={type}
                className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600"
              >
                {type}
              </span>
            ))}
          </div>

          <div className="mt-5 mb-8">
            <Link
              href="/"
              className="inline-flex rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 transition hover:border-neutral-400"
            >
              返回首頁
            </Link>
          </div>

          <div className="space-y-3 text-sm leading-6 text-neutral-700">
            <p>
              Threads 帳號：
              <a
                href={item.creatorUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-1 text-blue-600 underline"
              >
                {item.creator}
              </a>
            </p>
            <p>
              原始貼文：
              <a
                href={item.postUrl}
                target="_blank"
                rel="noreferrer"
                className="ml-1 text-blue-600 underline"
              >
                查看原文
              </a>
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {item.images.map((image, index) => (
              <div
                key={image}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-100"
              >
                <img
                  src={image}
                  alt={`${item.title} ${index + 1}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-neutral-900">原始發文內容</h2>
            <p className="mt-3 whitespace-pre-line text-sm leading-7 text-neutral-700">
              {item.postContent}
            </p>
          </div>

          <div className="mt-8 flex gap-3">
            <Link
              href="/remove"
              className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 transition hover:border-neutral-400"
            >
              申請移除
            </Link>
          </div>

          <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-6 text-neutral-600">
            <p className="font-medium text-neutral-900">平台說明</p>
            <p className="mt-2">
              本平台僅提供演唱會應援物資訊整理與平台內部以圖搜圖功能，協助使用者查找可能對應的原始發文與創作者。
            </p>
            <p className="mt-2">
              平台不負責各創作者之應援物發放細節、實物內容、數量、品質、交換方式或後續聯繫，也不保證圖片與實際物品完全一致。
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}