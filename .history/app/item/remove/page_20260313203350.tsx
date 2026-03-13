export default function RemovePage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-neutral-900">申請移除</h1>
        <p className="mt-2 text-sm text-neutral-600">
          若創作者不希望相關資訊被收錄，可在此提出申請。後續可再補 Threads
          帳號驗證流程。
        </p>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="作品 ID 或連結"
            className="w-full rounded-xl border border-neutral-300 px-4 py-3"
          />
          <input
            type="text"
            placeholder="Threads 帳號"
            className="w-full rounded-xl border border-neutral-300 px-4 py-3"
          />
          <textarea
            placeholder="補充說明"
            className="min-h-[140px] w-full rounded-xl border border-neutral-300 px-4 py-3"
          />
          <button className="rounded-xl bg-black px-4 py-2 text-sm text-white">
            送出申請
          </button>
        </div>
      </div>
    </main>
  );
}