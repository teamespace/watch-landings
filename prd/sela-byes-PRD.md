# PRD: Sela
**Cloudflare slug:** `sela-byes`
**Reference:** limawatch.com
**Stack:** Astro + Cloudflare Pages

---

## Brand Overview

Sela is a watch brand with its roots in tropical design culture. The name means "between" in several Southeast Asian languages — a nod to transitions: between time zones, between morning and evening, between the functional and the beautiful.

Inspired by Lima Watch's approach to naming (Pa:Gi = morning, So:Re = afternoon in Indonesian), Sela names its collections after parts of the day and natural phenomena. The watches are GMT-capable, designed for people who live across time zones and want a watch that reflects that.

**Tagline:** For the hours between here and there.

**Price range:** $290 to $650

**Audience:** 25 to 38 year old travelers, remote workers, designers, and creatives in Southeast Asia and globally. They appreciate distinctive design that doesn't mimic European watch brands. They want something that feels original.

---

## Visual Direction

Inspired by Lima Watch's clean, warm, contemporary Indonesian brand identity. Full-width hero banners with warm editorial photography. Simple product grid. The design process and the designer are featured prominently — this is a brand with a face and a story.

**Color palette:**
- Background: `#FAF8F4` (warm cream)
- Text primary: `#1C1C1A`
- Text secondary: `#7A7A72`
- Accent primary: `#C4573A` (warm terracotta — used in CTAs and active states)
- Accent secondary: `#3A7A6E` (deep teal — secondary accents, watch face colors)
- Surface soft: `#EFEDE8`
- Surface dark: `#1C1C1A`

**Typography:**
- Display: A warm humanist serif (like Lora or Freight Display) for section headings and brand moments
- Body: Plus Jakarta Sans (Indonesian-designed typeface — a deliberate choice) at 15px / 1.65
- Labels: Plus Jakarta Sans, letter-spaced uppercase, 11px

**Photography style:** Warm-toned natural light. Wrist shots on warm skin tones. Product photography with earthy props: clay pots, woven textiles, smooth river stones. No cold studio lighting.

---

## Homepage Structure

### 1. Nav
- Left: Logo (wordmark in warm terracotta or black, humanist serif)
- Center: Shop (dropdown) | About | Publication | Contact
- Right: Login | Cart
- White/cream sticky nav, thin underline on active item

### 2. Hero — Full-Width Banner
- Inspired by Lima's banner slider — full bleed, no text overlay on the image itself
- 3 slides auto-rotating: each is a lifestyle photograph with a watch
- Below the image (not on top): collection name + brief tagline + CTA button
- Heading for first slide: "GMT Transit Dusk"
- Copy: "A watch that knows what time it is wherever you are."
- CTA: "Discover" (terracotta button)

### 3. Featured Products Grid
- Section heading: "New arrivals" — small, left-aligned, letter-spaced
- Grid: 3 columns desktop, 2 columns mobile, 1 column on small
- Each card: product image (square, warm grey bg) + product name + price
- Sold out handled gracefully: "Coming back soon" badge instead of greyout
- Products lead with watch name in all-caps, collection in lowercase below

### 4. Collections Navigation Block
- Section: "What we make"
- Horizontal scroll of collection tiles with category names
- Collections: GMT Transit | Kronosprinter | Meca | Astronomer | Zenga | Pa:Gi | So:Re
- Each tile: collection name (large) + one product image
- Simple, tactile, finger-scroll friendly

### 5. Brand Story Teaser
- 2-column: left is warm lifestyle photo (workshop, designer at work), right is text
- Heading: "Every watch starts with a question."
- Copy (2 short paragraphs): what motivates the design process, what makes a Sela watch different. Specific, not generic.
- CTA: "Meet the designer" + "See our process"
- Background: `#EFEDE8`

### 6. Design Process Callout
- Inspired by Lima's About > Design Process page being surfaced on homepage
- Small horizontal strip with 3 icons or illustrations: Sketch → Prototype → Production
- Copy: "From first sketch to finished watch, we show our work."
- CTA: "Our design process"

### 7. GMT Collection Feature
- Full-width dark section (`#1C1C1A`)
- Hero product image: GMT Transit watch, well-lit, against a dark background
- Heading: "Two cities. One wrist."
- Sub-copy: "The GMT Transit reads two time zones simultaneously. No extra push. No extra complication."
- Price + CTA

### 8. Event and Publication
- Section: "What we've been up to"
- 2 or 3 cards: event photo + event name + date + brief note
- Could be watch fairs, pop-up events, press features, collaborations
- CTA: "See all publications"

### 9. Accessories Row
- Section: "The details"
- Horizontal product row: straps, bezels, accessories
- Clean and simple — no lifestyle imagery here, just product

### 10. Newsletter
- Heading: "Stay close."
- Copy: "New releases, upcoming events, and occasional stories from the studio."
- Email input + CTA
- Warm background: `#EFEDE8`

### 11. Footer
- 3 columns: Shop / About / Contact
- Social links
- Copyright line: "© 2026 Sela Watch. Designed with attention."

---

## Other Pages (Scoped, Not Primary Focus)

**Shop page:** Filter by collection. Grid layout with warm imagery. Sold-out items visible but tagged.

**Product Detail:** Large image carousel at top. Below: watch name, short story sentence, specs table, "Add to cart." Strap selector where applicable.

**Designer page:** Long-form profile of the (fictional) designer. Photo, background, design philosophy. Personal, written in first person.

**Design Process page:** Step-by-step with images. How a Sela watch goes from idea to finished product.

**Event and Publication page:** Blog-style archive. Watch community events, press mentions, pop-ups.

**Contact:** Simple form + studio address + response time.

---

## Tone of Voice

- Warm but not saccharine. Direct but gentle.
- Story-driven. A Sela product page tells you something about the watch before it sells it to you.
- Specific references to time, place, and context.
- No em-dashes. Use periods and commas.
- Indonesian design vocabulary is welcome where it adds meaning, but always explained.
- Forbidden: "luxury," "crafted with passion," "for the modern explorer," "elevate."
- Allowed: "We designed this while watching the ferry leave the harbor." Honest moments.

---

## Interactions & Animation (Skiper UI)

All components run as Astro React islands. Dependencies: `framer-motion`.

| Section | Component | Skiper UI | Why |
|---|---|---|---|
| Page transition | Words Preloader | [#08](https://skiper-ui.com/v1/skiper8) | Words cycle in Indonesian time vocabulary: "Pagi · Siang · Sore · Senja · Malam" — deeply on-brand |
| Hero banner | Oliver Parallax | [#30](https://skiper-ui.com/v1/skiper30) | Hero images have a warm parallax depth on scroll |
| Hero banner | Siena Parallax | [#29](https://skiper-ui.com/v1/skiper29) | Alternative parallax style for second banner slide |
| Featured products | Scroll Reveal Grid Cards | [#104](https://skiper-ui.com/v1/skiper104) | Product cards reveal staggered from bottom |
| Featured products | Gradient Hover Cards | [#90](https://skiper-ui.com/v1/skiper90) | Warm terracotta gradient follows mouse on product cards |
| Collections nav | ExpandOnHover Vertical | [#53](https://skiper-ui.com/v1/skiper53) | Collection list expands vertically on hover to show watch image |
| Featured product | Apple Carousel | [#77](https://skiper-ui.com/v1/skiper77) | GMT Transit showcase in Apple-style scrollable carousel |
| GMT feature block | Creative Carousel 001 | [#50](https://skiper-ui.com/v1/skiper50) | Two timezone display transitions creatively |
| Designer section | Team Showcase Scroll | [#79](https://skiper-ui.com/v1/skiper79) | Designer profile scrolls in with horizontal reveal |
| Brand story | Image Reveal | [#71](https://skiper-ui.com/v1/skiper71) | Workshop/studio images reveal with a warm wipe |
| Scroll rhythm | Scroll with Fade Effect | [#87](https://skiper-ui.com/v1/skiper87) | Sections breathe in gently on scroll |
| Publication section | Scroll Images Reveal 001 | [#32](https://skiper-ui.com/v1/skiper32) | Event photos reveal as user scrolls into section |
| Text animation | Rolling Text | [#27](https://skiper-ui.com/v1/skiper27) | Marquee strip: "GMT Transit · Kronosprinter · Astronomer · Pa:Gi · So:Re" |

**Implementation notes:**
- `#08` Words preloader: warm cream background `#FAF8F4`, text in `#1C1C1A`, words in both Indonesian and their English meaning alternating: "Pagi / Morning · Sore / Dusk"
- `#30` Oliver parallax: image moves at 0.4x scroll speed, keeps foreground sharp
- `#53` ExpandOnHover vertical: used in collections nav, height animates from 48px to 200px, revealing a product thumbnail
- `#79` Team showcase: designer photo and name animate in from left, bio from right
- `#90` Gradient hover: use terracotta `#C4573A` as gradient origin color, low opacity (0.08) so it stays warm not garish

---

## Tech Notes (Astro)

- Content Collections for products and publications (Markdown + JSON)
- Hero banner: Astro island for slider
- GMT feature section: animated two-timezone display (lightweight JS)
- Warm image optimization via Astro `<Image>` with custom quality settings
- Event/Publication section: content-collection driven, easy to update
- Skiper UI components: React islands, `client:visible` for scroll-triggered, `client:load` for preloader
- Deploy: Cloudflare Pages (`sela-byes`)
