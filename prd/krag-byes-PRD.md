# PRD: Krag
**Cloudflare slug:** `krag-byes`
**Reference:** maenwatches.com
**Stack:** Astro + Cloudflare Pages

---

## Brand Overview

Krag builds watches for people who use them. Not display-case collectors, not office commuters. People who take watches into the field, up the ridge, across a time zone. The name comes from a rocky cliff face — the kind of landscape the watches are built for.

The design ethos is borrowed from MAEN: serious build quality, clean technical aesthetics, and collection naming that carries geography in it. Every collection at Krag is named after terrain.

**Tagline:** Built for where roads end.

**Price range:** $390 to $1,200

**Audience:** 28 to 42 year old men and women with active outdoors lives who want a watch that can handle the same things they do. They respect specs. They read Worn and Wound. They think a $400 field watch beats a $4,000 dress watch for daily use.

---

## Visual Direction

Inspired by MAEN's clean, technical, collection-first layout. Product photography is precise and structured — no lifestyle distractions in the primary images, just the watch against a controlled neutral. Secondary imagery brings terrain and context.

**Color palette:**
- Background: `#FFFFFF`
- Text primary: `#0D0D0D`
- Text secondary: `#5A5A5A`
- Accent: `#3B5E3A` (deep field green — used for CTAs and active states)
- Surface mid: `#EDEDEA`
- Surface dark: `#1A1A18`
- Detail warm: `#B07D45` (bronze/copper — for dial accents and icons)

**Typography:**
- Display: All-caps geometric sans (like Neue Haas Grotesk Display or Space Grotesk Bold) — technical, no nonsense
- Body: Space Grotesk Regular 15px / 1.6 line-height
- Collection labels: all-caps, letter-spaced, 12px

**Photography style:** Product flat on stone, brushed metal, or dark fabric — controlled, technical. Lifestyle images are secondary: the watch in context of terrain, gear, or expedition. No studio glamour.

---

## Homepage Structure

### 1. Announcement Bar
- "Free worldwide shipping on orders over €150 · 2-year warranty on every watch"
- Single line, small text, `#1A1A18` background, white text

### 2. Nav
- Left: Logo (bold uppercase, tightly kerned)
- Center: Watches | Collections | Reviews | About | Stores
- Right: Currency selector | Cart | Account
- White sticky nav

### 3. Hero
- Full-width image: hero product shot, dramatic terrain in background (mountain, valley, coastal cliff)
- Dark gradient overlay, bottom-third
- Heading (all-caps): "RIDGE 40 GMT MKII"
- Sub: "Dual timezone. 200m water resistance. Built to leave the city behind."
- 2 CTAs: "Discover" (ghost) + "Buy now" ($680)
- Hero image changes on collection drop

### 4. Featured Collections Grid
- Section heading: "OUR COLLECTIONS" — uppercase, letter-spaced, small
- 2x3 grid on desktop (2x2 + scroll on mobile)
- Each card: square product image + collection name + "Discover" link
- Collections: Ridge 40 GMT | Cairn 38 Field | Summit 36 Dress | Traverse 39 Dive | Plateau 37 | Crag 38 GMT
- Hover: second product variant image fades in
- Inspired by MAEN's featured collections block

### 5. Hero Product Block (Repeated for Second Key Collection)
- Alternating layout: image right on first instance, image left on second
- Same structure: headline (all-caps product name), short spec-forward description, price, CTA
- "CAIRN 38 FIELD"
- "Swiss mechanical movement, 80-hour power reserve, anti-reflective sapphire crystal. The watch you pack first."

### 6. Boutique / Limited Editions Row
- Section: "BOUTIQUE EXCLUSIVES"
- 3–4 cards, slightly elevated visual treatment (dark card background)
- "Available only here. Not on the shelf anywhere."
- Small batch numbers shown on each card

### 7. Showroom Block
- Full-width image: showroom interior or in-person event
- Heading: "We have a place you can visit."
- Copy: "Our showroom in [City] is open Tuesday to Saturday. Come see the watches before you buy."
- CTA: "Find us"
- Background: dark section

### 8. Press Wall
- Media logos: Hodinkee · WornAndWound · Fratello · A Blog to Watch · Watchfinder
- Below logos: 2 rotating pull quotes from actual watch media (fabricated but plausible)
- Example: "The Cairn 38 hits all the basics without trying too hard. A rare thing." — WornAndWound
- White background, medium section

### 9. Newsletter
- Section heading: "STAY IN THE FIELD"
- Copy: "New collection launches, limited drops, and shipping updates. That's it."
- Dark background (`#1A1A18`), white text, email input

### 10. Footer
- 4 columns: Watches / About / Support / Follow
- Currency selector repeat
- Payment icons
- Legal links

---

## Other Pages (Scoped, Not Primary Focus)

**Shop page:** Collection-first navigation (dropdown by watch series). Filter: case size, complication, material. Product cards show front + alt image on hover.

**Product Detail:** Top-half split: large image left, specs + buy right. Spec table: case size, movement, power reserve, water resistance, crystal, crown, strap. "Also in this collection" row below.

**Reviews:** Dedicated page with customer reviews + press reviews as two tabs. Inspired by MAEN's split.

**About:** Founding vision, quality manifesto, materials sourcing. Serious, direct tone. No fluff.

**Stores / Showroom:** Map embed + store details.

---

## Tone of Voice

- Technical and precise. If the spec matters, say the spec.
- No warmth theater. No "crafted with love" or "passion for horology."
- Short sentences. Active voice. Confident.
- No em-dashes. Use a period instead.
- The brand trusts the customer to understand. It doesn't over-explain.
- Forbidden words: "curated," "luxury," "elevate," "for the discerning," "statement piece."
- Allowed: specific movement names, case diameter in mm, strap material, water resistance in meters.

---

## Interactions & Animation (Skiper UI)

All components run as Astro React islands. Dependencies: `framer-motion`, `gsap` where noted.

| Section | Component | Skiper UI | Why |
|---|---|---|---|
| Page transition | Words Preloader | [#08](https://skiper-ui.com/v1/skiper8) | Collection names cycle: "RIDGE · CAIRN · SUMMIT · TRAVERSE" — technical and on-brand |
| Hero | Interactive 3D Hero | [#36](https://skiper-ui.com/v1/skiper36) | Watch rotates subtly with mouse position — shows off the product |
| Hero text | 3D Perspective Text | [#28](https://skiper-ui.com/v1/skiper28) | "RIDGE 40 GMT" headline has 3D perspective tilt on load |
| Collections grid | Scroll Images Reveal 003 | [#34](https://skiper-ui.com/v1/skiper34) | Collection images reveal with a directional wipe |
| Collections grid | Card Stack with GSAP | [#17](https://skiper-ui.com/v1/skiper17) | Collection cards stack and rotate on scroll — layered depth |
| Second hero block | Horizontal Text Reveal | [#72](https://skiper-ui.com/v1/skiper72) | "CAIRN 38 FIELD" headline sweeps in horizontally |
| Spec callouts | Expandable Tabs Navigation | [#96](https://skiper-ui.com/v1/skiper96) | Watch specs (movement, water resistance, crystal) in expandable tabs |
| Scroll | Vercel Scroll with Blur | [#44](https://skiper-ui.com/v1/skiper44) | Outgoing section blurs as next slides in |
| Scroll | Progressive Blur | [#41](https://skiper-ui.com/v1/skiper41) | Content above fold blurs as user scrolls deeper |
| Press wall | Card Stack Scroll | [#16](https://skiper-ui.com/v1/skiper16) | Press quotes stack on scroll |
| Nav | Text Roll Navigation | [#58](https://skiper-ui.com/v1/skiper58) | Nav items roll on hover, restrained but technical |
| Scroll progress | Scroll Progress 001 | [#89](https://skiper-ui.com/v1/skiper89) | Thin progress bar at top of page — suits the precision brand |
| Section reveal | Scroll with Fade Effect | [#87](https://skiper-ui.com/v1/skiper87) | Sections fade in cleanly |

**Implementation notes:**
- `#08` Words preloader: dark background, white text, collection names in all-caps, no multi-language — pure product vocabulary
- `#36` Interactive 3D hero: mouse movement shifts watch image ±8deg X/Y, subtle depth — not a full 3D scene
- `#17` Card stack + GSAP: collection cards stack at 3-4 degree rotation, unstack on scroll
- `#96` Expandable tabs: used on PDP (product detail page) for specs, not homepage — note for dev
- `#89` Scroll progress: line color `#3B5E3A` (field green), 2px height, fixed to top of viewport

---

## Tech Notes (Astro)

- Collection-based routing: `/collections/[name]`
- Product cards with dual-image hover using CSS transitions only
- Currency switcher: Astro island
- Press quote carousel: pure CSS or minimal JS
- Showroom page: static + embedded map
- Skiper UI components: React islands, `client:visible` for scroll-triggered, `client:load` for preloader/nav
- Deploy: Cloudflare Pages (`krag-byes`)
