import { defineConfig } from 'astro/config'
import react from '@astrojs/react'
import tailwind from '@astrojs/tailwind'
import cloudflare from '@astrojs/cloudflare'

export default defineConfig({
  output: 'static',
  integrations: [react(), tailwind()],
  adapter: cloudflare(),
  site: 'https://krag-byes.pages.dev',
  devToolbar: { enabled: false },
})
