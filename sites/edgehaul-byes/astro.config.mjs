import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  output: 'static',
  adapter: cloudflare({
    platformProxy: { enabled: true }
  }),
  server: { port: 4326 },
  site: 'https://edgehaul-byes.pages.dev',
  devToolbar: { enabled: false },
  integrations: [],
})
