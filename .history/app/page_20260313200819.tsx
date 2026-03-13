iconst mockItems = [
  {
    id: 1,
    type: "小卡",
    creator: "@creator_a",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop",
    status: "已驗證",
  },
  {
    id: 2,
    type: "徽章",
    creator: "@creator_b",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    status: "未驗證",
  },
  {
    id: 3,
    type: "其他",
    creator: "@creator_c",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    status: "有異議",
  },
  {
    id: 4,
    type: "小卡",
    creator: "@creator_d",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop",
    status: "未驗證",
  },
];

export default function Home() {
  const selectedType = "全部";
  const filteredItems =
    selectedType === "全部"
      ? mockItems
      : mockItems.filter((item) => item.type === selectedType);

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-neutral-900">應援物查詢站</h1>
        <p className="mt-3 text-sm leading-6 text-neutral-600">
          協助整理應援物來源資訊，降低盜圖與冒名造成的混亂。
        </p>

        <div className="mt-8 flex gap-3">
          {["全部", "小卡", "徽章", "其他"].map((type) => (
            <button
              key={type}
              className={`rounded-full border px-4 py-2 text-sm ${
                selectedType === type
                  ? "border-black bg-black text-white"
                  : "border-neutral-300 bg-white text-neutral-700"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <article
              key={item.id}
              className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm"
            >
              <div className="flex items-center justify-between border-b border-neutral-100 px-4 py-3">
                <p className="font-medium text-neutral-900">{item.creator}</p>
                <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs text-neutral-600">
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
          ))}
        </div>
      </div>
    </main>
  );
}