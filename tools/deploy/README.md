# Cloudflare Pages Deploy

Each brand site deploys independently to its own Cloudflare Pages project.

## Site slugs

| Brand | Git directory | Cloudflare project name | Build command | Output dir |
|-------|--------------|------------------------|--------------|------------|
| Aevo  | `sites/aevo` | `aevo-byes` | `pnpm --filter @brands/aevo build` | `sites/aevo/dist` |
| Formd | `sites/formd` | `formd-byes` | `pnpm --filter @brands/formd build` | `sites/formd/dist` |
| Krag  | `sites/krag` | `krag-byes` | `pnpm --filter @brands/krag build` | `sites/krag/dist` |
| Nocte | `sites/nocte` | `nocte-byes` | `pnpm --filter @brands/nocte build` | `sites/nocte/dist` |
| Sela  | `sites/sela` | `sela-byes` | `pnpm --filter @brands/sela build` | `sites/sela/dist` |

## Option A: Deploy via Wrangler CLI

```bash
# Install wrangler
pnpm add -g wrangler

# Navigate to site and deploy
cd sites/aevo
pnpm build
npx wrangler pages deploy dist/ --project-name aevo-byes
```

## Option B: Deploy via Cloudflare Dashboard

1. Go to **Cloudflare Dashboard > Workers & Pages > Create > Pages > Connect to Git**
2. Connect your repository
3. For each project:

```
Project name: aevo-byes
Build command: cd sites/aevo && pnpm build
Build output: sites/aevo/dist
Root directory: / (monorepo root)
```

Repeat for each brand with its slug.

## Environment variables

- `NODE_VERSION`: `18` (or current)
- `PNPM_VERSION`: `8`

## After deploy

Tell the user the URLs so they can set custom domains.
