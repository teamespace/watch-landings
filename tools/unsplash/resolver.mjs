/**
 * Unsplash Source API URL resolver
 * 
 * Generates placeholder image URLs using Unsplash Source.
 * Usage:  node tools/unsplash/resolver.mjs <brand> <slot> [width] [height]
 * Example: node tools/unsplash/resolver.mjs aevo hero 1920 1080
 */

import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const manifest = JSON.parse(readFileSync(join(__dirname, 'manifest.json'), 'utf-8'))

const fallbackImages = {
  hero: 'watch+minimal',
  product: 'watch+product',
  lifestyle: 'watch+lifestyle',
  default: 'watch+photography',
}

export function resolveImage(brand, slot, width = 800, height = 800) {
  const brandSlots = manifest[brand]
  let keyword = brandSlots?.[slot]
  if (!keyword) {
    keyword = fallbackImages[slot] || fallbackImages.default
  }
  const encoded = encodeURIComponent(keyword)
  return `https://source.unsplash.com/${width}x${height}/?${encoded}&sig=${brand}-${slot}`
}

export function getAllSlots(brand) {
  return manifest[brand] || {}
}

// CLI mode
if (process.argv[1] && (process.argv[1].includes('resolver.mjs') || process.argv[1].endsWith('resolver.mjs'))) {
  const brand = process.argv[2]
  const slot = process.argv[3]
  const width = parseInt(process.argv[4]) || 800
  const height = parseInt(process.argv[5]) || 800

  if (!brand || !slot) {
    console.log('Usage: node tools/unsplash/resolver.mjs <brand> <slot> [width] [height]')
    console.log('Available brands:', Object.keys(manifest).join(', '))
    console.log('Slots for a brand:', Object.keys(manifest[brand] || {}).join(', '))
    process.exit(1)
  }

  const url = resolveImage(brand, slot, width, height)
  console.log(url)
}
