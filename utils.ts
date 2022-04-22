import type { CompatibilityEvent } from 'h3'
import { stringifyQuery } from 'ufo'

export interface Entry {
  destination: string;
  headers?: {
    [key: string]: string;
  }
  params?: {
    [key: string]: string;
  };
}

export type Entries = { [key: string]: Entry };

export const getEntry = async (name: string) => {
  const entry = await useStorage().getItem(`/cloudflare-kv/${name}`)

  if (entry === null) {
    throw new Error('Proxy not found')
  }

  return entry
}

export const fetchProxy = async (
  entry: Entry,
  endpoint: string | undefined,
  event: CompatibilityEvent
) => {
  const query = useQuery(event)
  const queryString = Object.keys(query).length > 0 ? `?${stringifyQuery(query)}` : ''
  const body = useBody(event) as any
  const result = await globalThis.fetch(
    `${endpoint === undefined
      ? entry.destination
      : `${entry.destination}/${endpoint}`}${queryString}`,
    {
      headers: entry.headers,
      method: useMethod(event),
      ...(body || {})
    }
  )
  return result.json()
}
