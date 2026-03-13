type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ItemDetailPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-3xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <p className="text-sm text-neutral-500">作品 ID：{id}</p>

        <h1 className="mt-2 text-2xl font-bold text-neutral-900">
          應援物詳細資訊
        </h1>

        <div className="mt-6 space-y-3 text-neutral-700">
          <p>Threads 帳號：@creator_a</p>
          <p>Threads 連結：@creator_a</p>
          <p>原始發文內容：這裡之後放原始貼文內容。</p>
          <p>狀態：已驗證</p>
        </div>

        <div className="mt-8 flex gap-3">
          <a
            href="/report"
            className="rounded-xl bg-black px-4 py-2 text-sm text-white"
          >
            提交異議
          </a>
          <a
            href="/remove"
            className="rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700"
          >
            申請移除
          </a>
        </div>
      </div>
    </main>
  );
}