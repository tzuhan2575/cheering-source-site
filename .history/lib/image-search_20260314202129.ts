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
): Promise<{ embedding: number[] | null; isNew: boolean }> {
  if (cache[item.id]?.length) {
    return { embedding: cache[item.id], isNew: false };
  }

  const cover = getCoverImage(item);
  if (!cover) {
    return { embedding: null, isNew: false };
  }

  try {
    const embedding = await getImageEmbeddingFromUrl(cover);
    cache[item.id] = embedding;
    return { embedding, isNew: true };
  } catch (error) {
    console.error(`Failed to process image for ${item.id}`, error);
    return { embedding: null, isNew: false };
  }
}

/** 先把模型載入好 */
export async function warmupImageModel() {
  await getExtractor();
}

/** 背景預建平台內圖片 embedding cache */
export async function prebuildItemEmbeddings(items: ItemLike[]) {
  let cache: EmbeddingMap = {};
  let cacheUpdated = false;

  try {
    cache = await getEmbeddingCache();
  } catch (error) {
    console.warn("Failed to load embedding cache, fallback to empty cache.", error);
    cache = {};
  }

  await warmupImageModel();

  for (const item of items) {
    const { isNew } = await getOrCreateItemEmbedding(item, cache);
    if (isNew) {
      cacheUpdated = true;
    }
  }

  if (cacheUpdated) {
    try {
      await saveEmbeddingCache(cache);
    } catch (error) {
      console.warn("Failed to save prebuilt embedding cache.", error);
    }
  }
}

export async function searchBestMatch(
  uploadedFile: File,
  items: ItemLike[],
  threshold = 0.25
): Promise<SearchResult | null> {
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
    const { embedding, isNew } = await getOrCreateItemEmbedding(item, cache);
    if (!embedding) continue;

    if (isNew) {
      cacheUpdated = true;
    }

    const score = cosineSimilarity(queryEmbedding, embedding);

    scored.push({
      id: item.id,
      score,
    });
  }

  if (cacheUpdated) {
    try {
      await saveEmbeddingCache(cache);
    } catch (error) {
      console.warn("Failed to save embedding cache.", error);
    }
  }

  const filtered = scored
    .filter((result) => result.score >= threshold)
    .sort((a, b) => b.score - a.score);

  return filtered[0] || null;
}