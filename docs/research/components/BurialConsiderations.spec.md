# BurialConsiderations Specification

## Overview
- **Target file:** `src/components/burial/BurialConsiderations.tsx`
- **Interaction model:** click-driven accordion (toggle items). Client component (`"use client"`).

## DOM Structure
1. **Banner**: an indigo gradient band `linear-gradient(131deg, #4453C4 0%, #49497A 100%)` containing, in 2 columns: LEFT = H2 "8 considerations when choosing a place of burial" (white, font-heading, 52px); RIGHT = a photo (`1660a.jpg`, family kissing) that overlaps/sits to the right (rounded corners optional, slight downward offset). On mobile stack.
2. **Accordion**: below the banner on white bg, a 2-column grid of 8 toggle items. Each item: a left indigo accent bar (`border-l-4 border-[#4453C4]`), the title (indigo `#4453C4`, ~17px, medium) on the left + a circular "+" icon (PlusIcon in indigo circle) on the right. Clicking toggles the body description (collapses/expands with height/opacity transition). First item may be open by default.
3. **Cemeteries note** (below accordion, centered, white bg): H2 "The difference between memorial parks and cemeteries" (font-heading, ~40px, #333 or #4453C4, centered) + body paragraph (#666, centered, max-width ~820px) + centered "READ MORE +" link (blue `#0C71C3` + indigo "+" badge).

## Computed Styles
- Banner: gradient above; padding ~60px 24px; min-height ~340px; H2 white 52px font-heading; photo max-width ~620px, object-cover, rounded ~4px.
- Considerations heading (consH): fontSize 52px; color #fff (on gradient).
- Accordion grid: max-width ~1140px; mx-auto; grid grid-cols-1 md:grid-cols-2; gap-x ~40px gap-y ~16px; padding ~60px 24px.
- Toggle item: bg white; border-left 4px solid #4453C4; padding 18px 20px; box-shadow subtle; display flex; justify-between; align-items center; cursor pointer.
- Toggle title: color #4453C4; fontSize 17px; font-weight 500; line-height 1.3.
- Toggle "+" icon: PlusIcon, ~22px, color #4453C4 (rotate to "−"/45deg when open).
- Toggle body: color #666; fontSize 14px; line-height 1.7; padding-top 12px; shown only when open.
- Cemeteries H2: font-heading; clamp(28px,4vw,40px); color #4453C4; text-center; margin-top ~50px.
- Cemeteries body: #666; 15px; line-height 1.9; text-center; max-width 820px; mx-auto.

## Assets
- Banner image `/images/1660a.jpg`. PlusIcon from `@/components/icons`.

## Per-State Content
- Accordion items: `CONSIDERATIONS.items` (8 × {title, body}).
- Cemeteries: `CEMETERIES` ({title, body, cta}).
- Banner title: `CONSIDERATIONS.title`, image `CONSIDERATIONS.bannerImage`.

## States & Behaviors
- Accordion: each item independently toggles open/closed on click (useState array or set of open indices). Transition: max-height + opacity ~300ms ease. "+" rotates 45° to look like "×"/"−".

## Responsive
- Banner: desktop 2-col (heading left, photo right); mobile stack.
- Accordion: desktop 2-col; mobile 1-col.
- Breakpoint: md (768px).

## Notes
- `"use client"`; useState for open indices. Import `cn`, `CONSIDERATIONS`, `CEMETERIES` from `@/lib/burial-content`, `PlusIcon` from `@/components/icons`. Named export `BurialConsiderations`. tsc clean.
