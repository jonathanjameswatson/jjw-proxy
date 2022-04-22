import { defineNitroConfig } from 'nitropack'

export default defineNitroConfig({
  storage: {
    '/cloudflare-kv': {
      driver: 'cloudflare-kv',
      binding: 'ENTRIES'
    }
  }
})
