"use client";

import Link from "next/link";

const SUBMIT_FORM_URL = process.env.NEXT_PUBLIC_SUBMIT_FORM_URL || "#";

export default function SubmitPage() {
  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <div className="mb-5">
          <Link
            href="/"
            className="inline-flex rounded-xl border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-700 transition hover:border-neutral-400"
          >
            返回首頁
          </Link>
        </div>

        <h1 className="text-2xl font-bold text-neutral-900">
          協助新增應援資訊
        </h1>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          如果你有看到尚未收錄的 TWICE《THIS IS
          FOR》台北場應援資訊，歡迎透過下列表單協助補充。
        </p>

        <div className="mt-6 rounded-2xl border border-neutral-200 bg-neutral-50 p-5 text-sm leading-6 text-neutral-600">
          <p>表單將於新分頁開啟，提交後可再返回本站查看。</p>
        </div>

        <div className="mt-6">
          <a
            href={SUBMIT_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex rounded-xl bg-black px-4 py-2 text-sm text-white transition hover:opacity-90"
          >
            開啟提交表單
          </a>
        </div>
      </div>
    </main>
  );
}
