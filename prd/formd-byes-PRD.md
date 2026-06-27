# PRD: Formd
**Cloudflare slug:** `formd-byes`
**Reference:** nomos-glashuette.com
**Stack:** Astro + Cloudflare Pages

---

## Brand Overview

Formd makes watches the way the Bauhaus school made objects: nothing ornamental, nothing wasted. The name is a compression of "formed" — a word about process and intent, not decoration. Every decision in the design has a reason. The case proportions, the dial layout, the typography on the watch face: all of it follows rules.

Inspired by NOMOS's model-family structure and German manufacture storytelling, Formd is organized around a small number of rigorously designed families. Each family has one clear purpose. The website reflects the watches: grid-based, typographic, clean.

**Tagline:** Form is the argument.

**Price range:** $480 to $1,800

**Audience:** 30 to 50 year old architects, graphic designers, engineers, and anyone who finds beauty in systems. They appreciate restraint. They know what a DIN typeface is. They'd buy a Braun alarm clock over a nest.

---

## Visual Direction

Inspired by NOMOS's white-dominant, typographic, structurally rigorous website. The grid is the design. Text is large and confident. Product imagery is precise and flat, always showing the full watch face clearly.

**Color palette:**
- Background: `#FFFFFF`
- Text primary: `#0A0A0A`
- Text secondary: `#666666`
- Accent: `#CC2200` (Bauhaus red — single bold accent, used on CTAs and active state only)
- Surface soft: `#F5F5F5`
- Surface dark: `#0A0A0A`
- Grid lines / dividers: `#E0E0E0`

**Typography:**
- Display: A grotesque sans-serif (like Aktiv Grotesk, DM Sans Bold, or Neue Haas Grotesk) — large, confident, structured
- Body: DM Sans Regular 15px / 1.6 line-height
- Labels / model names: Letter-spaced caps, 11px, black or grey
- Numbers: tabular figures, monospace preferred for specs

**Photography style:** Watch face forward. White or near-white background. No props, no lifestyle, no hands. Product 2D front on white. Secondary lifestyle imagery used sparingly and only in editorial contexts. Every image should look like it could belong in a design museum catalog.

---

## Homepage Structure

### 1. Nav
- Left: Logo (wordmark in bold grotesque, lowercase, tight)
- Center: Watches | Watchmaking | Topics | Shop
- Right: Search | Wishlist | Account | Language
- White background, thin `#E0E0E0` border bottom, sticky

### 2. Hero — Editorial Feature
- Full-width, white or near-white background
- Large headline (64px+): "Bringing one idea further: [Collection Name] Update"
- Sub: "A mechanical movement redesigned from the ground up. Available now."
- CTA: "Discover now"
- Right side: large, clean product image (2D front + slight angle)
- This section rotates with new releases, not a lifestyle photo

### 3. Model Family Grid
- Section heading: "Thirteen families. One design language." (adapted for Formd: fewer families)
- Subtitle: "Each Formd family starts from a single formal question. They are not variations — they are distinct answers."
- Grid: 4 columns desktop, 2 mobile
- Each cell: product image (white bg, 2D front) + family name + model count
- Formd families: Linie (dress, thin case) | Punkt (minimalist field) | Raster (grid-dial sport) | Fuge (dress GMT) | Block (bold case, technical)
- Hover: subtle grey bg change, "Explore" link appears

### 4. New Releases Strip
- Smaller section between model grid and manufacture story
- Heading: "Just released"
- Horizontal scroll: 3 product cards, clean white, product name + price + "New" tag

### 5. Manufacture Story
- Full-width dark section (`#0A0A0A`)
- Heading: "Made in [City]. Not assembled."
- Copy (2 paragraphs): What happens inside the Formd manufacture. What it means to make a caliber in-house vs. sourcing one. Specific, honest.
- CTA: "How we make them" (ghost button, white border)
- Background image: workshop macro detail (gears, dial, movement) — dark and textured

### 6. Watchmaking Teaser (Video or Image Series)
- 3-column grid: Watchmaking tradition | Research + Development | In-house calibers
- Each: one image + small heading + one sentence + link
- Clean, no-frills section. Inspired by NOMOS's "Our watches are made in our manufacture" block.

### 7. Bestsellers
- Section: "The ones people keep coming back to"
- 4 products, horizontal row
- Cleaner than the family grid: just image + name + price
- CTA: "Shop bestsellers"

### 8. Press Quote
- Single large pull quote, centered, large type
- "Getting every small detail right to come together into an exceptional overall package."
- Attribution: watch publication name + small logo if available
- Section is purely typographic — no imagery

### 9. Retailer / Store Finder
- Section: "Find a Formd retailer near you."
- Short copy: "We work with a small network of selected partners worldwide."
- CTA: "Find a retailer" + "Visit our online shop"
- Background: `#F5F5F5`

### 10. Newsletter
- Heading: "Our newsletter. One email per release."
- Copy: "No monthly updates. No lifestyle content. Just a note when something new is ready."
- Email input, language selector, legal checkbox
- Background: white, thin border top

### 11. Footer
- 4 columns: Information / Watches / Shop / About Formd
- Legal links row: Privacy / Terms / Cookie settings
- Small "Handmade in [City]" line at bottom

---

## Other Pages (Scoped, Not Primary Focus)

**Watches page:** Browse by model family. Filter by complication, diameter, movement type. Each family has its own sub-page with all variants listed.

**Watchmaking page:** Long-form editorial section. Glashutte-style storytelling about craft, caliber production, research. 4 to 5 sub-pages.

**Topics page:** Editorial content — interviews, essays, behind-the-scenes pieces. Not a blog with dates. Timeless pieces.

**Shop:** Product listing with filter. Very clean grid. 3 columns.

**Product Detail:** 2D front image + side angle. Full technical specification table. Caliber page link. "Add to cart" + "Find a retailer."

**Find Retailer:** Map interface + list of approved retailers.

---

## Tone of Voice

- Precise and direct. No filler. No warmth theater.
- Use specific numbers and terms: 28,800 vph, 42-hour power reserve, feuilles d'acier, sapphire glass.
- The brand writes like it designs: nothing unnecessary.
- Short sentences for declarative statements. Longer only for technical explanation.
- No em-dashes. Use periods.
- Forbidden: "luxury," "timeless elegance," "for the discerning collector," "crafted with passion," "a masterpiece."
- Allowed: "The dial has three parts. They were designed separately. They work as one."

---

## Interactions & Animation (Skiper UI)

All components run as Astro React islands. Formd uses the fewest animations of the five brands — every interaction must feel structural, not decorative. Dependencies: `framer-motion`.

| Section | Component | Skiper UI | Why |
|---|---|---|---|
| Page transition | Double Stairs Preloader | [#10](https://skiper-ui.com/v1/skiper10) | Geometric columns from both sides — pure Bauhaus grid logic |
| Nav | Apple Navbar V002 | [#75](https://skiper-ui.com/v1/skiper75) | Clean minimal navbar, structured, no gimmicks |
| Hero headline | 3D Rolling Text on Scroll | [#88](https://skiper-ui.com/v1/skiper88) | Hero title rolls in 3D on page load — single motion, stops cleanly |
| Hero headline | Horizontal Text Reveal | [#72](https://skiper-ui.com/v1/skiper72) | Sub-headline sweeps in left to right, precise |
| Model family grid | Scroll Reveal Grid Cards | [#104](https://skiper-ui.com/v1/skiper104) | Family cards reveal in strict grid order, top-left to bottom-right |
| Model family grid | ExpandOnHover | [#52](https://skiper-ui.com/v1/skiper52) | Card expands to show model count and one-line description |
| New releases | Text Reveal Box | [#70](https://skiper-ui.com/v1/skiper70) | Release name reveals from behind a sliding mask |
| Manufacture story | Scroll Images Reveal 002 | [#33](https://skiper-ui.com/v1/skiper33) | Workshop images reveal on scroll with strict directional wipe |
| Feature block | Apple Feature Block | [#76](https://skiper-ui.com/v1/skiper76) | Structured feature reveal for manufacture story section |
| Bestsellers | Inverted Perspective Carousel | [#49](https://skiper-ui.com/v1/skiper49) | Clean 3D perspective — inverted gives a precise, controlled feel |
| Scroll progress | Scroll Progress 002 | [#94](https://skiper-ui.com/v1/skiper94) | Minimal scroll indicator, structural not decorative |
| Model families nav | Expandable Tabs Navigation | [#96](https://skiper-ui.com/v1/skiper96) | Families expand in tabs: Linie / Punkt / Raster / Fuge / Block |
| Typography strip | Rolling Text | [#27](https://skiper-ui.com/v1/skiper27) | "Form is the argument · Made in [City] · Since 2020" — slow, typographic |
| Scroll rhythm | Vercel Scroll with Blur | [#44](https://skiper-ui.com/v1/skiper44) | Section transitions blur out cleanly |

**Implementation notes:**
- `#10` Double stairs: columns must be white `#FFFFFF`, not dark — the white columns over white background disappear cleanly, leaving a flash of red `#CC2200` (accent) at the midpoint before resolving. Requires custom color logic.
- `#88` 3D rolling text: one rotation only, no loop — stops at final position. Bauhaus discipline: nothing moves without a reason to stop.
- `#104` Scroll reveal grid: stagger delay must be uniform (60ms per card), top-left to bottom-right order strictly. No randomness.
- `#96` Expandable tabs: used on homepage for model family overview, one tab open at a time, smooth height animation only — no slide from side.
- `#94` Scroll progress: line color `#CC2200` (Bauhaus red), 1px height — thinner than default.

---

## Tech Notes (Astro)

- Heavy static generation — all product and editorial pages pre-rendered
- Model family pages: nested routes `/watches/families/[family]/`
- Watchmaking editorial: Astro Content Collections (Markdown)
- Topics section: Content Collections, filterable by tag
- Grid layout: CSS Grid throughout, no frameworks
- All typography: system grotesque stack with web font fallback
- Skiper UI components: React islands, `client:visible` for scroll-triggered, `client:load` for nav/transition
- Deploy: Cloudflare Pages (`formd-byes`)
