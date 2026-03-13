export default function RemovePage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-neutral-900">申請移除</h1>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          若創作者不希望相關資訊被收錄，可在此提出申請。
        </p>

        <div className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              作品 ID 或連結
            </label>
            <input
              type="text"
              placeholder="例如：item_001 或作品頁連結"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
            />
          </div>

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
              申請原因
            </label>
            <textarea
              placeholder="請簡單說明希望移除的原因"
              className="min-h-[180px] w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
            />
          </div>

          <button
            type="button"
            className="rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:opacity-90"
          >
            送出申請
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-600">
          <p className="font-medium text-neutral-900">說明</p>
          <p className="mt-2">
            本頁目前僅為靜態表單展示，後續可再加入 Threads 帳號驗證等流程，以確認申請者是否為對應創作者本人。
          </p>
        </div>
      </div>
    </main>
  );
}