import type { H3Response } from 'h3'

import { getEntry, fetchProxy } from '../utils'

export default eventHandler(async (event) => {
  const { proxy: name } = event.context.params
  const entry = await getEntry(name)
  return fetchProxy(entry, undefined, event) as unknown as Promise<H3Response>
})
