# ColumbariaTypes Specification

## Overview
- **Target file:** `src/components/cremation/ColumbariaTypes.tsx`
- **Interaction model:** click-driven image carousels (dots) per type. Client component (`"use client"`).

## DOM Structure
1. Centered heading: eyebrow "EXPLORE" (grey, uppercase, letter-spaced) + H2 "Columbaria types" (font-heading, 52px, weight 500, color #4453C4).
2. SIX full-width alternating feature blocks (one per COLUMBARIA_TYPES item). Each block = a 2-column row: an **image carousel** on one side + a **text block** on the other. Side controlled by `type.imageLeft`. Background controlled by `type.dark` (white block = white bg + dark text; dark block = indigo `#4453C4` full-bleed bg + white text).

### Feature block (render inline, reusable)
- Row: `max-w-[1200px] mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`. For dark blocks, wrap the whole block in a full-bleed `bg-brand` div (the row inside stays max-w).
- Image carousel: stacked `<img aspect-[4/3] object-cover>`, one visible (opacity cross-fade 500ms), dots below (count = images.length, click to switch). Active dot `#4453C4` on white blocks / white on dark blocks. Use `order` classes so the image is left or right per `imageLeft` on desktop (`lg:order-1`/`lg:order-2`); on mobile image always first.
- Text block: eyebrow (uppercase, tracking, #888 white-block / white-85 dark-block) + title (font-heading, ~25px, weight 700, #4453C4 white-block / #fff dark-block) + body (15px line-height 1.8, #666 / white) + buttons.
- Buttons: "READ MORE" → link (blue #0C71C3 white-block / white dark-block) with circular "+" PlusIcon badge. "EXPLORE MORE" (Rhyme only) → solid indigo button (bg #4453C4 white text, or white/indigo on dark blocks), rounded-none, tracking-[2px], padding 14px 30px.

## Computed Styles
- Heading H2: font-heading; 52px; weight 500; color #4453C4; letter-spacing ~2px; centered. Eyebrow: ~15px; #999; tracking ~6px; uppercase; centered.
- Type title: font-heading; 25px; weight 700.
- Body: 15px; line-height 1.8.

## Per-State Content
Import `COLUMBARIA_TYPES` (6 items: {eyebrow,title,body,images[],dark,imageLeft,buttons[]}) and `COLUMBARIA_HEADING` from `@/lib/cremation-content`.

Block config (for reference): Luxury(white,img-left), Modern(dark,img-right), Ancient(white,img-left), Christian(dark,img-right), Rhyme(white,img-left,+EXPLORE MORE), Urn(dark,img-left).

## Text (verbatim)
All from COLUMBARIA_TYPES / COLUMBARIA_HEADING.

## Responsive
- Desktop (≥1024px): 2-col rows with alternating image side. Mobile (<1024px): single column, image on top then text. Dark blocks keep indigo bg.
- Breakpoint: `lg`.

## Notes
- `"use client"`; per-block carousel index via `useState<number[]>` keyed by block index. Inner `FeatureBlock` + `Carousel` functions for DRY. Import `cn`, `COLUMBARIA_TYPES`, `COLUMBARIA_HEADING`, `PlusIcon`. Plain `<img>`. Named export `ColumbariaTypes`. tsc clean.
