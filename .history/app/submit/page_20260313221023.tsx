"use client";

import { FormEvent, useState } from "react";

export default function SubmitPage() {
  const [form, setForm] = useState({
    creator: "",
    types: "",
    postUrl: "",
    imageInfo: "",
    postContent: "",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("submit failed");

      setMessage("已成功送出資料。");
      setForm({
        creator: "",
        types: "",
        postUrl: "",
        imageInfo: "",
        postContent: "",
      });
    } catch (error) {
      console.error(error);
      setMessage("送出失敗，請稍後再試。");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-50 px-6 py-10">
      <div className="mx-auto max-w-2xl rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-neutral-900">新增應援物資料</h1>
        <p className="mt-2 text-sm leading-6 text-neutral-600">
          目前會先儲存在本地資料檔中，方便後續整理。
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              Threads 帳號
            </label>
            <input
              type="text"
              value={form.creator}
              onChange={(e) => setForm({ ...form, creator: e.target.value })}
              placeholder="@creator_account"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              類型
            </label>
            <input
              type="text"
              value={form.types}
              onChange={(e) => setForm({ ...form, types: e.target.value })}
              placeholder="例如：貼紙、胸章"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              原始貼文連結
            </label>
            <input
              type="text"
              value={form.postUrl}
              onChange={(e) => setForm({ ...form, postUrl: e.target.value })}
              placeholder="https://www.threads.com/..."
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              圖片資訊
            </label>
            <input
              type="text"
              value={form.imageInfo}
              onChange={(e) => setForm({ ...form, imageInfo: e.target.value })}
              placeholder="目前先填圖片說明或檔名"
              className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-neutral-700">
              原始發文內容
            </label>
            <textarea
              value={form.postContent}
              onChange={(e) =>
                setForm({ ...form, postContent: e.target.value })
              }
              placeholder="請貼上原始發文內容"
              className="min-h-[160px] w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`rounded-xl px-4 py-2 text-sm text-white ${
              isSubmitting ? "bg-neutral-400" : "bg-black"
            }`}
          >
            {isSubmitting ? "送出中…" : "送出"}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-neutral-700">{message}</p>}
      </div>
    </main>
  );
}
