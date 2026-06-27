# PRD: Aevo
**Cloudflare slug:** `aevo-byes`
**Reference:** triwa.com
**Stack:** Astro + Cloudflare Pages

---

## Brand Overview

Aevo is a Stockholm-rooted watch brand that believes design should have a reason to exist beyond looking good. Every collection has a story — a material choice, a collab, a cause. The watches are wearable daily, built for people who move, who travel, who have opinions about things.

The name is short, phonetically light, memorable. Designed to look good on a strap tag and even better in a search bar.

**Tagline:** Designed for a life in motion.

**Price range:** $220 to $850

**Audience:** 24 to 35 year olds who know what TRIWA and Uniform Wares are. Lifestyle-first buyers. They dress with intention. They care about origin, not heritage.

---

## Visual Direction

Inspired by TRIWA's bold lifestyle photography and Scandinavian cleanliness. Where Nocte goes dark and editorial, Aevo goes bright and full of life. White dominates, but product imagery carries rich seasonal color.

**Color palette:**
- Background: `#FFFFFF`
- Text primary: `#111111`
- Text secondary: `#888888`
- Accent primary: `#2D4A3E` (deep forest green — brand anchor)
- Accent warm: `#E8C97E` (harvest gold — seasonal)
- Surface soft: `#F4F4F0`
- Error / highlight: `#D94F3D`

**Typography:**
- Display: A geometric sans-serif (like Neue Haas Grotesk or DM Sans Bold), all-lowercase for brand voice
- Body: DM Sans Regular 15px / 1.65 line-height
- Labels / tags: Letter-spaced 11px uppercase

**Photography style:** Natural outdoor light. People wearing watches doing real things — cycling, sitting at a café table, boarding a train. Product flats against textured surfaces (concrete, stone, wood). Color is a central character in every image.

---

## Homepage Structure

### 1. Announcement Bar
- Rotating 3 messages: "Free shipping on orders over $200" / "New: Summer 2026 collection" / "1% of every sale goes to ocean cleanup"
- Slim bar, `#2D4A3E` background, white text, 13px

### 2. Nav
- Left: Logo (bold lowercase wordmark, green)
- Center: Watches | Straps | About | Collabs
- Right: Search | Bag
- White background, sticky on scroll

### 3. Hero
- Full-viewport video or large lifestyle image (outdoor, daylight, movement)
- Overlaid text — centered or bottom-left
- Heading: "Watches for wherever you end up."
- Sub-copy: "Designed in Stockholm. Built to last longer than the season."
- CTA: "Shop now" (filled green button)
- Text on dark overlay at bottom third of image

### 4. Trust Bar
- 4 icons in a row: "Designed in Stockholm" / "2-year warranty" / "Free returns" / "1,500,000+ sold"
- Light grey strip, centered, 14px
- Inspired directly by TRIWA's ticker strip — subtle but converts

### 5. New Arrivals
- Section heading: "Just dropped" — left-aligned, bold lowercase
- 4-card horizontal scroll on mobile, grid on desktop
- Each card: square product image (lifestyle or flat), watch name, price, optional "New" tag
- CTA below grid: "See all new watches"

### 6. Editorial Feature — Collab Block
- Full-width image block with dark overlay
- Dedicated to one active collab or cause story
- Example: "Aevo x Marine Conservation Society"
- Heading: "Made from recycled ocean plastic. For real."
- Short paragraph (3 sentences max): what the collab is, why it exists, what happens to proceeds
- CTA: "Explore the collab"

### 7. Icons — Bestsellers
- Section heading: "The ones everyone keeps buying."
- 4 bestseller watches in a row with slow hover zoom
- Each: product name, price, quick color variant switcher (dot swatches)
- CTA: "All bestsellers"

### 8. Press Strip
- Media logos: GQ · Forbes · NY Times · Hodinkee · Wired
- SVG logos, greyscale, single row, centered

### 9. Customer Reviews
- Star average + review count at top ("4.7 stars from 2,400+ customers")
- 3 reviews visible, carousel on mobile
- Reviews: first name + city only (no last names) + 2-3 sentences
- Background: `#F4F4F0`

### 10. About Teaser
- 2-column layout: large lifestyle photo left, text right
- Heading: "We've been at it since 2007. Still haven't gotten bored."
- 2-sentence brand story summary
- CTA: "Read our story"

### 11. Strap Builder Teaser
- Section: "Same watch. Different mood."
- 3 images showing the same watch with 3 different strap colors
- CTA: "Browse straps"

### 12. Newsletter
- Heading: "Get first dibs."
- Copy: "New drops, behind-the-scenes stuff, and offers that don't go on the main site."
- Email input + CTA
- Note: "(No spam. Unsubscribe anytime.)" in 11px grey below

### 13. Footer
- 4 columns: Watches / Straps / About / Help
- Social icons row (Instagram, TikTok, YouTube)
- Payment icons
- Copyright + "Designed in Stockholm"

---

## Other Pages (Scoped, Not Primary Focus)

**Shop page:** Filter by collection, color, strap type, price range. Grid with lifestyle images.

**Product Detail:** Large hero image carousel, tabbed specs, strap color selector, "Customers also bought" row.

**Collabs page:** Archive of past and current collabs with story paragraphs and imagery.

**About:** Brand timeline, founding story, sustainability commitments. Conversational tone throughout.

**Cart + Checkout:** Cross-sell one strap in the cart. Clean, minimal checkout.

---

## Tone of Voice

- Conversational but not try-hard. Write like a person, not a brand.
- Short sentences where it counts. Longer where the story needs room.
- Humor is allowed, sparingly. A dry observation beats an exclamation mark.
- No em-dashes. Use periods or commas.
- Never say: "elevate your style," "for the modern man/woman," "luxury at every price point," "a timepiece for all occasions."
- Do say: what the watch is made from, where it comes from, why the design decision was made.

---

## Interactions & Animation (Skiper UI)

All components run as Astro React islands. Dependencies: `framer-motion`.

| Section | Component | Skiper UI | Why |
|---|---|---|---|
| Page transition | Stairs Preloader | [#09](https://skiper-ui.com/v1/skiper9) | Single staircase, clean — fits Aevo's Scandi lightness |
| Nav | Vercel Navigation Bar | [#57](https://skiper-ui.com/v1/skiper57) | Clean dropdown nav, feels modern without theatrics |
| Nav hover | Text Roll Navigation | [#58](https://skiper-ui.com/v1/skiper58) | Nav items roll on hover, subtle and playful |
| Trust bar | Animated Number | [#37](https://skiper-ui.com/v1/skiper37) | "1,500,000+ sold" counts up when entering viewport |
| New arrivals | Scroll Reveal Grid Cards | [#104](https://skiper-ui.com/v1/skiper104) | Cards reveal staggered as user scrolls into grid |
| New arrivals | Gradient Hover Cards | [#90](https://skiper-ui.com/v1/skiper90) | Product cards get a gradient follow on hover |
| Collab block | Scroll Images Reveal 002 | [#33](https://skiper-ui.com/v1/skiper33) | Collab lifestyle images reveal on scroll |
| Bestsellers | Perspective Carousel | [#47](https://skiper-ui.com/v1/skiper47) | Bestseller products in a 3D perspective scroll |
| Bestsellers | ExpandOnHover | [#52](https://skiper-ui.com/v1/skiper52) | Card expands to show color variants on hover |
| Press strip | Rolling Text | [#27](https://skiper-ui.com/v1/skiper27) | Infinite marquee: GQ · Forbes · NY Times · Hodinkee · Wired |
| About teaser | Oliver Parallax | [#30](https://skiper-ui.com/v1/skiper30) | Lifestyle image has parallax depth as user scrolls |
| Strap builder | Creative Carousel 001 | [#50](https://skiper-ui.com/v1/skiper50) | Same watch, different straps shown in creative carousel |
| Scroll rhythm | Scroll with Fade Effect | [#87](https://skiper-ui.com/v1/skiper87) | Sections fade in as user moves down |
| Stats section | Vercel Scroll with Blur | [#44](https://skiper-ui.com/v1/skiper44) | Previous section blurs on scroll transition |

**Implementation notes:**
- `#09` Stairs: white columns on dark background, single direction (down), triggers on page load only
- `#37` Animated number: trigger on `IntersectionObserver`, count from 0 to 1,500,000 over 1.5s
- `#90` Gradient hover: gradient follows mouse position within card bounds, color shifts to match strap color
- `#47` Perspective carousel: 4 bestsellers, auto-advance pauses on hover
- `#27` Rolling text: speed 40px/s, pause on hover, logos as SVG inline

---

## Tech Notes (Astro)

- Astro with View Transitions for smooth page changes
- Product data: JSON or Shopify Storefront API
- Collab section: CMS-driven (Astro Content Collections or simple JSON)
- Video hero: lazy-loaded `<video>` with poster fallback
- Strap color switcher: Astro island (React or Preact)
- Skiper UI components: React islands, `client:visible` for scroll-triggered, `client:load` for nav/preloader
- Deploy: Cloudflare Pages (`aevo-byes`)
