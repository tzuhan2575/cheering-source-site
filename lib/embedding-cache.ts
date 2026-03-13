const EMBEDDING_CACHE_KEY = "twice_item_embeddings";

type EmbeddingMap = Record<string, number[]>;

export async function getEmbeddingCache(): Promise<EmbeddingMap> {
  if (typeof window === "undefined") return {};

  try {
    const raw = window.localStorage.getItem(EMBEDDING_CACHE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch (error) {
    console.error("Failed to read embedding cache from localStorage", error);
    return {};
  }
}

export async function saveEmbeddingCache(data: EmbeddingMap) {
  if (typeof window === "undefined") return;

  try {
    window.localStorage.setItem(EMBEDDING_CACHE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error("Failed to save embedding cache to localStorage", error);
  }
}