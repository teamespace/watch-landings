/**
 * Image URL resolver — replaces source.unsplash.com with picsum.photos
 * Uses seed parameter for deterministic images per keyword.
 * Swap to GPT-image-2 later by replacing this module.
 */
export function resolveImage(slot, width = 800, height = 800) {
  const seed = encodeURIComponent(slot.replace(/[^a-zA-Z0-9]/g, '').toLowerCase())
  return `https://picsum.photos/seed/${seed}/${width}/${height}`
}
