# Watch Brands — 5 Commerce Websites

Monorepo with 5 independent watch brand e-commerce sites built on Astro + Cloudflare Pages.

## Brands

| Brand | Slug | Port | Reference |
|---|---|---|---|
| Aevo | `aevo-byes` | 4321 | TRIWA |
| Formd | `formd-byes` | 4322 | NOMOS |
| Krag | `krag-byes` | 4323 | MAEN |
| Nocte | `nocte-byes` | 4324 | Nacre |
| Sela | `sela-byes` | 4325 | Lima Watch |

## Setup

```bash
pnpm install
```

## Dev (all sites)

```bash
pnpm dev
```

## Dev (single site)

```bash
pnpm --filter @brands/aevo dev
```

## Build single site

```bash
pnpm --filter @brands/aevo build
```

## Build all

```bash
pnpm build
```

## Deploy (Cloudflare Pages)

Each site deploys to its own Pages project using the slug name.
Follow-up docs in `tools/deploy/README.md`.

## Toolkit

- **Stack:** Astro 5 + React 18 + Tailwind CSS 3 + framer-motion
- **Animations:** Skiper UI component wrappers in `packages/skiper-islands/`
- **Images:** Unsplash Source API placeholders (swap to GPT-image-2 later)
- **Fonts:** Self-hosted via @fontsource
