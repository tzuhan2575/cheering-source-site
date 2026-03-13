type EmbeddingMap = Record<string, number[]>;

export async function getEmbeddingCache(): Promise<EmbeddingMap> {
  const res = await fetch("/api/embeddings", { cache: "no-store" });
  if (!res.ok) throw new Error("failed to load embeddings");
  return res.json();
}

export async function saveEmbeddingCache(data: EmbeddingMap) {
  const res = await fetch("/api/embeddings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("failed to save embeddings");
}