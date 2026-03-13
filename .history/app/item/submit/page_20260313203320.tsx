export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-neutral-900">新增應援物資料</h1>
        <p className="mt-2 text-sm text-neutral-600">
          目前先保留為靜態表單，之後可再串接資料儲存。
        </p>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Threads 帳號"
            className="w-full rounded-xl border border-neutral-300 px-4 py-3"
          />
          <input
            type="text"
            placeholder="類型（例如：貼紙、胸章）"
            className="w-full rounded-xl border border-neutral-300 px-4 py-3"
          />
          <input
            type="text"
            placeholder="原始貼文連結"
            className="w-full rounded-xl border border-neutral-300 px-4 py-3"
          />
          <textarea
            placeholder="原始發文內容"
            className="min-h-[140px] w-full rounded-xl border border-neutral-300 px-4 py-3"
          />
          <button className="rounded-xl bg-black px-4 py-2 text-sm text-white">
            送出
          </button>
        </div>
      </div>
    </main>
  );
}