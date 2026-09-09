# CremationRead Specification

## Overview
- **Target file:** `src/components/cremation/CremationRead.tsx`
- **Interaction model:** static link cards with subtle hover. Server component.

## DOM Structure
White section, centered, padding ~70px 0. Centered heading group: eyebrow "READ" (grey, uppercase, letter-spaced) + H2 "Cremation" (font-heading, 52px, weight 500, #4453C4). Below: a 3-column grid of image link cards. Each card: a landscape image on top + a title below (dark). Whole card is a link.

## Computed Styles
- Container: max-width ~1100px; mx-auto; px-6; py-[70px].
- Heading: eyebrow ~15px #999 tracking-[6px] uppercase centered; H2 font-heading 52px weight 500 text-brand centered; mb-[50px].
- Grid: grid grid-cols-1 md:grid-cols-3 gap-[40px].
- Card image: w-full aspect-[16/10] object-cover.
- Card title: font-heading; ~22px; weight 500; color #333; line-height 1.3; margin-top 16px; text-center or left (use center).

## States & Behaviors
- Hover: image slight zoom (`group-hover:scale-105`, transition 400ms) and/or title → text-brand. Keep subtle.

## Assets
From `CREMATION_READ.cards` (3 items):
1. "Columbaria and cremation niches" — `/images/New_04.jpg`
2. "Memorial options for cremations" — `/images/NA1S2_S.jpg`
3. "The difference between columbarium and mausoleum" — `/images/NRV01553b_web.jpg`

## Text (verbatim)
From `CREMATION_READ` (eyebrow "READ", title "Cremation", 3 card titles).

## Responsive
- Desktop (≥768px): 3 columns. Mobile: 1 column stacked.
- Breakpoint: `md`.

## Notes
- Import `CREMATION_READ` from `@/lib/cremation-content`, `cn`. Plain `<img>` in an `overflow-hidden` wrapper with `group`. Named export `CremationRead`. tsc clean.
