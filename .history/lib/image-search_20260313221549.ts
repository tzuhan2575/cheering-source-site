import { pipeline, RawImage } from "@huggingface/transformers";
import { getEmbeddingCache, saveEmbeddingCache } from "./embedding-cache";

type ItemLike = {
  id: string;
  images: string[];
};

type SearchResult = {
  id: string;
  score: number;
};

type EmbeddingMap = Record<string, number[]>;

let extractorPromise: Promise<any> | null = null;

// 懶載入模型，避免每次搜尋都重新初始化
async function getExtractor() {
  if (!extractorPromise) {
    extractorPromise = pipeline(
      "image-feature-extraction",
      "Xenova/clip-vit-base-patch32"
    );
  }
  return extractorPromise;
}

function toAbsoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${window.location.origin}${path}`;
}

function flattenDeep(value: unknown): number[] {
  if (Array.isArray(value)) {
    return value.flat(Infinity).map((v) => Number(v));
  }

  if (
    value &&
    typeof value === "object" &&
    "data" in value &&
    ArrayBuffer.isView((value as { data: unknown }).data)
  ) {
    return Array.from((value as { data: ArrayLike<number> }).data);
  }

  return [];
}

async function outputToVector(output: any): Promise<number[]> {
  if (output?.tolist) {
    const list = await output.tolist();
    return flattenDeep(list);
  }
  return flattenDeep(output);
}

async function getImageEmbeddingFromBlob(blob: Blob): Promise<number[]> {
  const extractor = await getExtractor();
  const image = await RawImage.fromBlob(blob);

  const output = await extractor(image, {
    pooling: "mean",
    normalize: true,
  });

  return outputToVector(output);
}

async function getImageEmbeddingFromUrl(url: string): Promise<number[]> {
  const extractor = await getExtractor();
  const image = await RawImage.fromURL(toAbsoluteUrl(url));

  const output = await extractor(image, {
    pooling: "mean",
    normalize: true,
  });

  return outputToVector(output);
}

function cosineSimilarity(a: number[], b: number[]) {
  if (!a.length || !b.length || a.length !== b.length) return -1;

  let dot = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }

  if (normA === 0 || normB === 0) return -1;
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}

function getCoverImage(item: ItemLike) {
  return item.images?.[0] || "";
}

async function getOrCreateItemEmbedding(
  item: ItemLike,
  cache: EmbeddingMap
): Promise<number[] | null> {
  if (cache[item.id]?.length) {
    return cache[item.id];
  }

  const cover = getCoverImage(item);
  if (!cover) return null;

  try {
    const embedding = await getImageEmbeddingFromUrl(cover);
    cache[item.id] = embedding;
    return embedding;
  } catch (error) {
    console.error(`Failed to process image for ${item.id}`, error);
    return null;
  }
}

export async function searchSimilarItems(
  uploadedFile: File,
  items: ItemLike[],
  topK = 3,
  threshold = 0.25
): Promise<SearchResult[]> {
  const queryEmbedding = await getImageEmbeddingFromBlob(uploadedFile);

  let cache: EmbeddingMap = {};
  let cacheUpdated = false;

  try {
    cache = await getEmbeddingCache();
  } catch (error) {
    console.warn("Failed to load embedding cache, fallback to fresh compute.", error);
    cache = {};
  }

  const scored: SearchResult[] = [];

  for (const item of items) {
    const candidateEmbedding = await getOrCreateItemEmbedding(item, cache);
    if (!candidateEmbedding) continue;

    if (!cache[item.id]) {
      cache[item.id] = candidateEmbedding;
      cacheUpdated = true;
    }

    const score = cosineSimilarity(queryEmbedding, candidateEmbedding);

    scored.push({
      id: item.id,
      score,
    });
  }

  // 如果是第一次建立 cache，或有新資料補進來，就回存
  const currentIds = new Set(Object.keys(cache));
  for (const item of items) {
    if (currentIds.has(item.id)) continue;
    if (cache[item.id]) {
      cacheUpdated = true;
    }
  }

  if (cacheUpdated || Object.keys(cache).length > 0) {
    try {
      await saveEmbeddingCache(cache);
    } catch (error) {
      console.warn("Failed to save embedding cache.", error);
    }
  }

  return scored
    .filter((result) => result.score >= threshold)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}