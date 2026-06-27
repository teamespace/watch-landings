# PRD: Nocte
**Cloudflare slug:** `nocte-byes`
**Reference:** nacrewatches.com
**Stack:** Astro + Cloudflare Pages

---

## Brand Overview

Nocte is a minimalist watch brand built around the quiet language of night. The name comes from the Latin for "night" — not dramatic darkness, but the kind of stillness that comes after the day. Each watch is a small, deliberate object. Nothing flashy, nothing loud. Just something you reach for every morning without thinking twice.

**Tagline:** Made for the hours that matter most.

**Price range:** $580 to $1,400

**Audience:** 27 to 38 year old urban professionals. They buy less, but buy better. They care about materials and provenance. They'd rather explain a watch than wear one that explains itself.

---

## Visual Direction

Inspired by Nacre's lunar, pearl-toned minimalism — clean white ground, generous whitespace, product photography against soft grey. Nocte leans slightly darker and more editorial.

**Color palette:**
- Background: `#F7F5F2` (warm off-white, almost paper)
- Text primary: `#1A1A1A`
- Text secondary: `#6B6B6B`
- Accent: `#C9A96E` (antique gold, used sparingly — only on CTAs and product details)
- Surface dark: `#111111` (used in hero and footer sections)

**Typography:**
- Display: A high-contrast serif (like Cormorant Garamond or Playfair Display) — used only for hero headings and section titles, large and airy
- Body + UI: Inter or DM Sans at 15px/1.7 line-height
- Product names: Letter-spaced uppercase DM Sans

**Photography style:** Product on grey or off-white flat lay. Wrist shots on natural skin tones in ambient light, never studio flash. Lookbook imagery should feel personal, not commercial.

---

## Homepage Structure

### 1. Nav
- Left: Logo (wordmark only, lowercase, serif)
- Center: Collections | Lookbook | About
- Right: Search | Cart (item count)
- Transparent on scroll-top, white on scroll

### 2. Hero
- Full-viewport split layout: product image left (60%), text right (40%)
- Heading: "Something you'll wear for the next ten years."
- Subtext: "Nocte watches are designed with one question in mind: does it still make sense in a decade?"
- CTA: "Shop the collection" (ghost button, gold border)
- Hero background: `#111` with slight grain texture
- Typography: Large serif headline, 72px+, white

### 3. Announcement bar (below hero, subtle)
- "Free worldwide shipping on orders over $300 · 2-year warranty included"
- Single line, small text, background `#F0EDE8`

### 4. Collection Grid
- Section title: "The collections" — left-aligned, serif
- 4 columns on desktop, 2 on mobile
- Each card: product image (square, grey bg) + collection name + starting price
- Hover: slight image zoom + "Explore" label appears
- Collections: Nox 36 | Nox 40 | Vigil GMT | Vigil Date

### 5. Featured Product — Editorial Block
- Full-width, dark background (`#111`)
- Left: large product image (no bg), casually composed
- Right: product name, 2-sentence description (specific — material, movement, case size), price, "Add to cart" + "View details"
- This block should read like a page from a product catalog, not a banner ad

### 6. Build Your Watch
- Inspired by Nacre's configurator
- Section heading: "Make it yours."
- 3-step visual: Choose case → Choose strap → See the result
- CTA: "Start building" → links to configurator page
- Background: warm off-white, full width

### 7. Lookbook Teaser
- 3 landscape editorial photos, titled by location: "Tokyo, January" / "Oslo, March" / "Cape Town, August"
- Click opens Lookbook page
- Layout: 1 large left + 2 stacked right

### 8. Press Strip
- Logos only (monochrome): Hodinkee · WornAndWound · Esquire · Forbes
- Single row, centered, `#6B6B6B`
- Optional pull quote below: one real-feeling sentence, no attribution to avoid fabrication issues — or leave as logos only

### 9. Customer Reviews
- 4 reviews in a horizontal scroll
- Each: star rating + name + 2–3 sentence review
- No generic copy. Reviews should feel like something a real person typed at midnight.
- Background: `#F7F5F2`

### 10. Strap Accessories
- Section: "Change it up."
- Product row: 4–6 strap swatches shown as product cards
- CTA: "Shop straps"

### 11. Newsletter
- Heading: "Get in early."
- Copy: "New releases, quiet drops, and the occasional invite. No filler."
- Email input + "Join" button
- Background: `#111`, white text

### 12. Footer
- 3 columns: Collections / Info / Follow
- Small copyright line
- Payment icons row

---

## Other Pages (Scoped, Not Primary Focus)

**Shop / Collection page:** Filter by collection, case size, strap type. Grid layout, 3 columns desktop.

**Product Detail page:** Full-width top image, technical specs in a clean table (case diameter, movement, water resistance, crystal, strap material), add to cart, strap selector, size guide link.

**About:** Brand story in long-form prose. No bullet points. One or two photos. Ends with "How we make them" section linking to materials page.

**Cart + Checkout:** Minimal. Order summary sidebar. Guest checkout available.

**Contact:** Simple form + email + response time expectation ("We reply within 1 business day, usually faster.")

---

## Tone of Voice

- Write short sentences. Not choppy — deliberate.
- Specific over vague. "Swiss ETA 2824 movement, 38-hour power reserve" beats "precision timekeeping."
- No words: "curate," "elevate," "crafted for," "timepiece journey," "perfect for any occasion."
- No em-dashes. Use periods or commas instead.
- The brand knows what it is. It doesn't oversell.

---

## Interactions & Animation (Skiper UI)

All components run as Astro React islands (`client:load` or `client:visible`). Dependencies: `framer-motion`, `gsap` where noted.

| Section | Component | Skiper UI | Why |
|---|---|---|---|
| Page transition | Double Stairs Preloader | [#10](https://skiper-ui.com/v1/skiper10) | Dark columns from both sides — matches Nocte's editorial darkness |
| Nav | Nike Menu | [#13](https://skiper-ui.com/v1/skiper13) | Full-screen overlay nav, cinematic feel |
| Hero | Mouse Follow Animations | [#61](https://skiper-ui.com/v1/skiper61) | Cursor tracks product image — luxury editorial signature |
| Hero | Parallax Image | [#55](https://skiper-ui.com/v1/skiper55) | Watch face depth on scroll |
| Hero headline | Text Reveal Box | [#70](https://skiper-ui.com/v1/skiper70) | Words reveal behind a sliding mask on load |
| Hero headline | Horizontal Text Reveal | [#72](https://skiper-ui.com/v1/skiper72) | Secondary tagline animates in left to right |
| Collection grid | Scroll Images Reveal 001 | [#32](https://skiper-ui.com/v1/skiper32) | Product images reveal as user scrolls into section |
| Collection grid | ExpandOnHover | [#52](https://skiper-ui.com/v1/skiper52) | Collection cards expand on hover to show variant |
| Featured product | 3D Rolling Text on Scroll | [#88](https://skiper-ui.com/v1/skiper88) | Product name rolls in 3D as section enters viewport |
| Build Your Watch | Minimal Card Expand | [#23](https://skiper-ui.com/v1/skiper23) | Step cards expand on selection |
| Lookbook teaser | Image Cursor Trail | [#18](https://skiper-ui.com/v1/skiper18) | Hovering lookbook section leaves image trail — pure editorial |
| Press strip | Rolling Text | [#27](https://skiper-ui.com/v1/skiper27) | Infinite marquee of press logo names |
| Customer reviews | Card Stack Scroll | [#16](https://skiper-ui.com/v1/skiper16) | Reviews stack on scroll, one at a time |
| Scroll depth | Scroll with Fade Effect | [#87](https://skiper-ui.com/v1/skiper87) | Sections fade in progressively on scroll |
| Scroll depth | Progressive Blur | [#41](https://skiper-ui.com/v1/skiper41) | Previous section blurs as next comes into view |
| Drawing effect | Drawing Cursor Effect | [#59](https://skiper-ui.com/v1/skiper59) | Used optionally on about/story page, not homepage |

**Implementation notes:**
- `#10` Double Stairs: stair color `#111111`, triggers on all internal page navigations
- `#61` Mouse follow: subtle — product image shifts ±12px max, not full parallax
- `#18` Image cursor trail: only active on lookbook section hover zone, not global
- `#88` 3D Rolling Text: used on product name in featured block, one word at a time
- `#16` Card stack: reviews section, stacks on scroll down, unstacks on scroll up

---

## Tech Notes (Astro)

- Static site generation with Astro
- Product data via JSON files or Shopify Storefront API (to be wired later)
- Image optimization via Astro's `<Image>` component
- Configurator: client-side interactive island (Astro islands pattern)
- Skiper UI components: each as a React island, `client:visible` for scroll-triggered, `client:load` for nav/transition
- Deploy target: Cloudflare Pages (`nocte-byes`)
