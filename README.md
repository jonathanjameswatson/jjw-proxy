# jjw-proxy

> Customisable Cloudflare Workers proxy

## Features

- Easily modifiable options using Cloudflare KV
- The ability to add headers and URL parameters
- Development with Miniflare

## Cloudflare KV

To define the proxies' mappings from paths to URLs, add entries in the `ENTRIES` KV namespace with the keys being the paths and the values being JSON object matching the [`Entry`](./utils.ts) interface.

For example, an entry with key `path` and value `{ "destination": "https://google.com", "headers": { "a": "b" } }` will result in `/path/test` proxying `https://google.com/test` with header `a` being set to `b`.

## Development

- Install dependencies with `yarn install`
- Run in Miniflare with `yarn dev`
- Build for Cloudflare workers with `yarn build`
- Lint code with `yarn lint`

### License

[MIT license](https://choosealicense.com/licenses/mit/)
