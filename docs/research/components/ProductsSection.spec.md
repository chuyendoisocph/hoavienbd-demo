# ProductsSection Specification

## Overview
- **Target file:** `src/components/ProductsSection.tsx`
- **Interaction model:** static with button hovers. Server component.

## DOM Structure
White section, centered container (max ~1200px), padding ~80px 0. 2-column layout:
- **Left (~45%):** H2 "Our Products" + a bulleted list of products + two buttons stacked ("READ MORE" outline, then "360 SITE VIEW" solid indigo).
- **Right (~55%):** a single tall photo (columbarium interior with gold chairs) `/images/85_Weba.jpg`, object-cover.

## Computed Styles (exact)
- H2 "Our Products": Didact Gothic; fontSize 52px; fontWeight 600; color #333; margin-bottom 24px.
- Product list: `<ul>` with disc bullets, color #666; each item fontSize ~22px; line-height ~40px; font-family Open Sans; color #666. (Bullets are grey discs.)
- Buttons wrapper: margin-top 30px; flex col; gap 16px; align-items flex-start; max-width ~300px.
- **READ MORE button (outline):** transparent bg; border 1px solid rgba(0,0,0,0.15); color #0C71C3 OR #333 (use #0C71C3 to match read-more blue); fontSize 18px; letterSpacing 2px; padding 14px 30px; border-radius 0; box-shadow subtle; text-align center; full width of wrapper. Hover: bg #f5f5f5.
- **360 SITE VIEW button (solid):** background #4453C4; color #fff; fontSize 18px; fontWeight 800; letterSpacing 2px; padding 15px 30px; border-radius 0; box-shadow `0 10px 20px rgba(65,84,125,0.24)`; full width. Hover: brightness 1.08 / slight lift (translateY(-2px)), transition 300ms.
- Right image: width 100%; height ~620px; object-fit cover.

## States & Behaviors
- 360 SITE VIEW hover: translateY(-2px), shadow deepens. transition 300ms ease.
- Outline button hover: bg light grey.

## Assets
- Right image: `/images/85_Weba.jpg` (PRODUCTS.image).

## Text Content (verbatim)
From `PRODUCTS` in `@/lib/content`:
- Title "Our Products"
- Items: Burial Plots, Columbaria, Funeral Service, Ancestral Tablet, Eternal Blessing Light, Pet Memorial Garden, NV Seed
- Buttons: "READ MORE", "360 SITE VIEW"

## Responsive Behavior
- **Desktop (≥980px):** 2-col (text left, image right).
- **Mobile (<980px):** stack — text first, then image (full width, height ~360px). Buttons full width.
- **Breakpoint:** ~980px. `grid-cols-1 lg:grid-cols-[45%_55%]` or flex.

## Implementation notes
- Import `PRODUCTS` from `@/lib/content`, `cn` from `@/lib/utils`.
- Export named `ProductsSection`. Verify `npx tsc --noEmit`.

## 2026-09-07 source re-extraction
- Products + 360 media group: 1638px desktop and 1085px mobile.
- Mobile title: 30px/45px, centered; list and CTAs centered as a group.
