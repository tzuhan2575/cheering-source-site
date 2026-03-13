export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-neutral-900">新增應援物資料</h1>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          目前先保留為靜態表單，之後可再串接資料儲存功能。
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Threads 帳號
            </label>
            <input
              type="text"
              placeholder="@creator_account"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              類型
            </label>
            <input
              type="text"
              placeholder="例如：貼紙、胸章"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              原始貼文連結
            </label>
            <input
              type="text"
              placeholder="https://www.threads.com/..."
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              圖片連結或圖片資訊
            </label>
            <input
              type="text"
              placeholder="目前先保留欄位，之後可改成圖片上傳"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              原始發文內容
            </label>
            <textarea
              placeholder="請貼上原始發文內容"
              className="min-h-[160px] w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
            />
          </div>

          <button
            type="button"
            className="rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:opacity-90"
          >
            送出
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-600">
          <p className="font-medium text-neutral-900">提醒</p>
          <p className="mt-2">
            本頁目前僅為靜態表單展示，尚未真正儲存資料。後續可再串接資料庫或表單提交流程。
          </p>
        </div>
      </div>
    </main>
  );
}