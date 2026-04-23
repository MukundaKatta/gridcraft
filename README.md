# Gridcraft

> An Instagram grid that actually looks good.

Plan six months of posts visually. See your grid before you post it. Never break the aesthetic again.

**Status:** v0 skeleton — landing page + grid preview route. Full drag-and-drop and scheduling not yet wired.

**Landing:** https://gridcraft.vercel.app

---

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict) |
| Styling | Tailwind v4 |
| Fonts | Inter via `next/font/google` |
| Hosting | Vercel (zero config) |
| Waitlist | https://waitlist-api-sigma.vercel.app |

## Run locally

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Deploy

Push to `main` — Vercel picks it up automatically. No environment variables required.

## Routes

| Route | Description |
|---|---|
| `/` | Landing page (original copy + design preserved) |
| `/try` | v0 grid preview — enter 6 captions + pick 6 color swatches, see a live 3×2 IG-style grid |
| `/api/waitlist` | `POST { email, product: "gridcraft" }` → forwards to waitlist-api-sigma |

## What's next

- Real image upload per grid cell
- Drag-and-drop reordering
- Auto color-match suggestions
- Native Meta Business Suite scheduling
