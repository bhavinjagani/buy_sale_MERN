import { QdrantClient } from '@qdrant/js-client-rest';

export const COLLECTION = 'listings';
export const DENSE_DIMS = 768;

export const client = new QdrantClient({
  url: process.env.QDRANT_URL ?? 'http://localhost:6333',
  apiKey: process.env.QDRANT_API_KEY, // required for Qdrant Cloud, omit locally
  checkCompatibility: false,
}) 

export async function ensureCollection() {
    const { collections } = await client.collections();
    if(collections.some((c)=>c.name === COLLECTION)) return false

    await client.createCollection(COLLECTION,{
        vectors : {
         dense :{
        size: DENSE_DIMS,
        distance: 'Cosine',
        on_disk: false,
         }
        },
        sparse_vectors: {
      sparse: {
        modifier: 'idf',
      },
    },
     optimizers_config: {
      default_segment_number: 2,
    },
      hnsw_config: {
      m: 16,
      ef_construct: 100,
    }
    });

    await Promise.all([
    client.createPayloadIndex(COLLECTION, {
      field_name: 'status',
      field_schema: 'keyword',
      wait: true,
    }),
    client.createPayloadIndex(COLLECTION,{
        field_name:'category',
        field_schema: 'keyword',
        wait: true,
    }),
     client.createPayloadIndex(COLLECTION, {
      field_name: 'condition',
      field_schema: 'keyword',
      wait: true,
    }),
    client.createPayloadIndex(COLLECTION, {
      field_name: 'price',
      field_schema: 'float',
      wait: true,
    }),
    client.createPayloadIndex(COLLECTION, {
      field_name: 'updated_at_ms',
      field_schema: 'integer',
      wait: true,
    }),
    ]);
    return true;
} 
export function toPointId(listingId) {
  if (typeof listingId === 'number') return listingId;
  const s = String(listingId);
  if (/^\d+$/.test(s)) return Number(s);
  if (/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(s)) return s;
  throw new Error(`listing id ${s} is neither an integer nor a UUID -- add a mapping`);
}
export async function healthy() {
  try {
    await client.getCollections();
    return true;
  } catch {
    return false;
  }
}