import { pipeline, RawImage } from "@huggingface/transformers";

type ItemLike = {
  id: string;
  images: string[];
};

type SearchResult = {
  id: string;
  score: number;
};

let extractorPromise: Promise<any> | null = null;

// 懶載入模型，避免每次搜尋都重新下載/初始化
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

export async function searchSimilarItems(
  uploadedFile: File,
  items: ItemLike[],
  topK = 3,
  threshold = 0.25
): Promise<SearchResult[]> {
  const queryEmbedding = await getImageEmbeddingFromBlob(uploadedFile);

  const scored: SearchResult[] = [];

  for (const item of items) {
    const cover = item.images?.[0];
    if (!cover) continue;

    try {
      const candidateEmbedding = await getImageEmbeddingFromUrl(cover);
      const score = cosineSimilarity(queryEmbedding, candidateEmbedding);

      scored.push({
        id: item.id,
        score,
      });
    } catch (error) {
      console.error(`Failed to process image for ${item.id}`, error);
    }
  }

  return scored
    .filter((result) => result.score >= threshold)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}