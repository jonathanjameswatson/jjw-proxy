import type { H3Response } from 'h3'

import { getEntry, fetchProxy } from '../../utils'

export default eventHandler(async (event) => {
  const { proxy: name } = event.context.params
  const entry = await getEntry(name)

  const originalUrl = event.req.originalUrl ?? ''
  const endpointIndex = originalUrl.indexOf(`${name}/`)
  const endpoint =
    endpointIndex === -1
      ? ''
      : originalUrl.slice(endpointIndex + name.length + 1)

  return fetchProxy(entry, endpoint, event) as unknown as Promise<H3Response>
})
