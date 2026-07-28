import { EmbedContentResponse, GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
export const EMBEDDING_MODEL = 'gemini-embedding-001';
export const EMBEDDING_DIMS = 768;

const MAX_CHARS = 6000;

export const TaskType = {
  DOCUMENT: 'RETRIEVAL_DOCUMENT',
  QUERY: 'RETRIEVAL_QUERY',
};

function l2Normalize(values){
    const norm = Math.hypot(...values);
    return values.map(x => x / norm);
}
export function toPgVector(values) {
  return `[${values.join(',')}]`;
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function withRetry(fn,{attempts = 3, delay = 1000 }) {
let lasterr;
for(let i = 0; i < attempts; i++) {
    try {
        return await fn();
    } catch (err) {
        lasterr = err;
        if (i < attempts - 1) {
            await sleep(delay);
        }
    }
}
throw lasterr;

}

export async function embedContent(content,taskType = TaskType.DOCUMENT) {
if (texts.length === 0) return [];
 
  const trimmed = texts.map((t) => (t ?? '').slice(0, MAX_CHARS));
 
  const res = await withRetry(() =>
    ai.models.embedContent({
      model: EMBEDDING_MODEL,
      contents: trimmed,
      config: {
        outputDimensionality: EMBEDDING_DIMS,
        taskType,
      },
    })
  );
 
  return res.embeddings.map((e) => l2Normalize(e.values));
    
}
export async function embedOne(text,taskType =TaskType.QUERY) {
    const res = embedContent([text], taskType);
    return res[0];
}
export function buildListingDocument(listing) {
  const priceBand = bandPrice(listing.price);
  return [
    listing.title,
    listing.category && `Category: ${listing.category}`,
    listing.condition && `Condition: ${listing.condition}`,
    listing.price != null && `Price: $${listing.price} (${priceBand})`,
    listing.location && `Location: ${listing.location}`,
    listing.description,
  ]
    .filter(Boolean)
    .join('\n');
}
 
function bandPrice(price) {
  if (price == null) return 'unpriced';
  if (price < 25) return 'budget';
  if (price < 100) return 'affordable';
  if (price < 500) return 'mid-range';
  if (price < 2000) return 'premium';
  return 'high-end';
}
export async function documentHash(text) {
  const { createHash } = await import('node:crypto');
  return createHash('sha256').update(text).digest('hex');
}
 