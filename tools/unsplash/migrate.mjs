import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..', '..')

function findFiles(dir, ext, list = []) {
  const entries = readdirSync(dir, { withFileTypes: true })
  for (const e of entries) {
    const p = join(dir, e.name)
    if (e.isDirectory() && !e.name.startsWith('.')) findFiles(p, ext, list)
    else if (e.name.endsWith(ext)) list.push(p)
  }
  return list
}

const brands = ['aevo', 'formd', 'krag', 'nocte', 'sela']
let total = 0

for (const brand of brands) {
  const dir = join(root, 'sites', brand, 'src')
  if (!statSync(dir, { throwIfNoEntry: false })) continue

  const files = findFiles(dir, '.astro').concat(findFiles(dir, '.tsx'))
  console.log(`${brand}: ${files.length} files`)

  for (const fp of files) {
    let content = readFileSync(fp, 'utf-8')
    const orig = content

    // Pattern: source.unsplash.com/WxH/?keywords[&sig=X]
    content = content.replace(
      /https:\/\/source\.unsplash\.com\/(\d+)x(\d+)\/\?([a-zA-Z0-9+%-]+)(?:&sig=[a-zA-Z0-9-]+)?/g,
      (_, w, h, kw) => {
        total++
        return `https://picsum.photos/seed/${kw}/${w}/${h}`
      }
    )

    // Pattern: template literal with ${...}
    content = content.replace(
      /`https:\/\/source\.unsplash\.com\/(\d+)x(\d+)\/\?([^`]*?)\$\{([^}]+)\}([^`]*?)`/g,
      (_, w, h, pre, varExpr, post) => {
        total++
        const seed = pre ? pre : 'watch'
        return `\`https://picsum.photos/seed/${seed}\${${varExpr}}${post}/${w}/${h}\``
      }
    )

    // Pattern: template literal with encodeURIComponent
    content = content.replace(
      /`https:\/\/source\.unsplash\.com\/(\d+)x(\d+)\/\?([^`]*?)encodeURIComponent\(([^)]+)\)([^`]*?)`/g,
      (_, w, h, pre, varExpr, post) => {
        total++
        const seed = pre ? pre.replace(/\+$/, '') : 'watch'
        return `\`https://picsum.photos/seed/${seed}+\${${varExpr}}${post}/${w}/${h}\``
      }
    )

    if (content !== orig) {
      writeFileSync(fp, content)
      console.log(`  ✓ ${fp.replace(dir, '')}`)
    }
  }
}

console.log(`\n✅ Done! Replaced ${total} image URLs total.`)
