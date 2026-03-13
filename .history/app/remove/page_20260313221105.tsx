"use client";

import { FormEvent, useState } from "react";

export default function RemovePage() {
  const [form, setForm] = useState({
    itemRef: "",
    creator: "",
    reason: "",
  });
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const res = await fetch("/api/remove", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("remove failed");

      setMessage("已成功送出移除申請。");
      setForm({
        itemRef: "",
        creator: "",
        reason: "",
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
        <h1 className="text-2xl font-bold text-neutral-900">申請移除</h1>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="text"
            value={form.itemRef}
            onChange={(e) => setForm({ ...form, itemRef: e.target.value })}
            placeholder="作品 ID 或連結"
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none"
          />
          <input
            type="text"
            value={form.creator}
            onChange={(e) => setForm({ ...form, creator: e.target.value })}
            placeholder="Threads 帳號"
            className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none"
          />
          <textarea
            value={form.reason}
            onChange={(e) => setForm({ ...form, reason: e.target.value })}
            placeholder="請簡單說明移除原因"
            className="min-h-[180px] w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm outline-none"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className={`rounded-xl px-4 py-2 text-sm text-white ${
              isSubmitting ? "bg-neutral-400" : "bg-black"
            }`}
          >
            {isSubmitting ? "送出中…" : "送出申請"}
          </button>
        </form>

        {message && <p className="mt-4 text-sm text-neutral-700">{message}</p>}
      </div>
    </main>
  );
}