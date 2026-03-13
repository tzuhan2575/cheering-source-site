export default function ReportPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-neutral-900">提交異議</h1>
        <p className="mt-2 text-sm text-neutral-600">
          若資料有誤或疑似盜圖，可在此提交說明。
        </p>

        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="作品連結或 ID"
            className="w-full rounded-xl border border-neutral-300 px-4 py-3"
          />
          <textarea
            placeholder="請說明異議內容"
            className="min-h-[120px] w-full rounded-xl border border-neutral-300 px-4 py-3"
          />
          <button className="rounded-xl bg-black px-4 py-2 text-sm text-white">
            送出異議
          </button>
        </div>
      </div>
    </main>
  );
}