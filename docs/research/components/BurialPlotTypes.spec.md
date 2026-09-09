# BurialPlotTypes Specification

## Overview
- **Target file:** `src/components/burial/BurialPlotTypes.tsx`
- **Interaction model:** click-driven image carousels (dots) per plot. Client component (`"use client"`).

## DOM Structure
1. Heading block (centered): eyebrow "EXPLORE" (grey, letter-spaced, uppercase) + H2 "Burial Plot Types" (font-heading, 52px, weight 500, color #4453C4, centered).
2. Two 2-column rows of PlotBlocks (4 plots total):
   - Row 1 (white bg): Royal Family (col 1) + Family (col 2).
   - Row 2 (indigo bg `#4453C4`, white text): Double And Single (col 1) + Christian (col 2).

### PlotBlock (sub-component, render inline)
Each plot = a vertical stack of an **image carousel** + a **text block**, ordered by `imageFirst`:
- If `imageFirst` true → carousel on top, text below.
- If `imageFirst` false → text on top, carousel below.
Text block: eyebrow (uppercase, letter-spaced, centered) + title (font-heading, 25px, weight 700, color #4453C4 on white blocks / #fff on dark blocks, centered) + body paragraph + buttons.
Buttons:
- "READ MORE" → blue link `#0C71C3` (on white) / white (on dark) with circular "+" badge (PlusIcon), right/center aligned.
- "GET QUOTE" → outline button: border 1px, rounded-none, letter-spacing 2px, padding 14px 34px; on white blocks border `#4453C4`/text `#4453C4`; on dark blocks border white/text white; centered. Hover: faint bg.

### Image carousel
Stacked images, show one at a time, **dots** below (count = images.length). Click dot to switch. Cross-fade (opacity transition 500ms). Active dot filled (`#4453C4` on white / white on dark), inactive faint. Image: `w-full aspect-[4/3] object-cover`. Optional auto-advance every 5s.

## Computed Styles
- Heading H2: font-heading; 52px; weight 500; color #4453C4; letter-spacing ~2px.
- Plot title: font-heading; 25px; weight 700; color #4453C4 (white block) or #fff (dark block).
- Eyebrow: ~14px; letter-spacing ~3px; uppercase; color #888 (white block) / rgba(255,255,255,0.85) (dark block).
- Body: 15px; line-height 1.8; color #666 (white) / rgba(255,255,255,0.95) (dark); text-align left.
- Row container: max-width ~1200px; margin auto; grid grid-cols-1 lg:grid-cols-2; gap ~60px; padding ~70px 24px.
- Row 2 section bg: `#4453C4` full-bleed; the two columns text white.
- White-block text cards have subtle shadow `shadow-[0_20px_50px_-30px_rgba(0,0,0,0.3)]` + padding ~40px.

## Assets
- Plot images from PLOT_TYPES[i].images (already in /images/). PlusIcon from `@/components/icons`.

## Per-State Content
Import `PLOT_TYPES`, `PLOT_TYPES_HEADING` from `@/lib/burial-content`. Each item: {eyebrow,title,body,images[],buttons[],imageFirst,dark}.

## Text (verbatim)
All from PLOT_TYPES / PLOT_TYPES_HEADING.

## Responsive
- Desktop (≥1024px): 2-col rows. Mobile (<1024px): single column, each plot stacked full width. Row 2 stays indigo bg.
- Breakpoint: `grid-cols-1 lg:grid-cols-2`.

## Notes
- `"use client"`; useState per-carousel (track active index keyed by plot index). Import `cn`, `PLOT_TYPES`, `PLOT_TYPES_HEADING`, `PlusIcon`. Named export `BurialPlotTypes`. Keep code DRY with an inner `PlotBlock` function + `Carousel` function. tsc clean. KEEP UNDER COMPLEXITY: render the indigo row as a wrapping `<div className="bg-brand">`.
