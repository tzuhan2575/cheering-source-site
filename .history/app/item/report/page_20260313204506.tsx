export default function ReportPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-neutral-900">提交異議</h1>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          若資料有誤、來源可疑，或疑似有盜圖、冒名情況，可在此提交說明。
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
              聯絡方式（選填）
            </label>
            <input
              type="text"
              placeholder="例如：Threads 帳號"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              異議內容
            </label>
            <textarea
              placeholder="請說明你認為資料有誤的原因，或補充來源與證據"
              className="min-h-[180px] w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none transition focus:border-neutral-500"
            />
          </div>

          <button
            type="button"
            className="rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:opacity-90"
          >
            送出異議
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-neutral-200 bg-neutral-50 p-4 text-sm leading-6 text-neutral-600">
          <p className="font-medium text-neutral-900">說明</p>
          <p className="mt-2">
            本平台僅提供資訊整理與查找，收到異議後，未來可再設計人工確認或補充標註流程。
          </p>
        </div>
      </div>
    </main>
  );
}