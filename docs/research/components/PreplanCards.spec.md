# PreplanCards Specification

## Overview
- **Target file:** `src/components/PreplanCards.tsx`
- **Interaction model:** static link cards with subtle hover. Server component.

## DOM Structure
White section, centered container (max ~1100px), padding ~70px 0. A 3-column grid of cards. Each card: a landscape image on top (16:9-ish) + a heading below (dark, left-aligned). The whole card is a link.

## Computed Styles (exact)
- Container: max-width ~1100px; margin auto; padding 70px 24px; display grid; grid-template-columns repeat(3, 1fr); gap ~50px.
- Card image: width 100%; aspect-ratio ~ 16/9; object-fit cover; border-radius 0.
- Card title: Didact Gothic; fontSize ~28px; fontWeight 500; color #333; line-height 1.2; margin-top 18px.

## States & Behaviors
- Hover: title color → #4453C4 and/or image slight zoom (`scale(1.03)`, transition 400ms ease). Keep subtle.

## Assets
From `PREPLAN_CARDS` in `@/lib/content` (3 items):
1. "5 main advantages of pre-planning" — `/images/45.jpg`
2. "When is the best time to pre-plan?" — `/images/920.jpg`
3. "Who should pre-plan ?" — `/images/1661.jpg`

## Text Content (verbatim)
Titles exactly as above (note "Who should pre-plan ?" has a space before ?).

## Responsive Behavior
- **Desktop (≥980px):** 3 columns.
- **Tablet (768px):** 3 columns or 2 — keep 3 if it fits, else stack.
- **Mobile (<768px):** 1 column, stacked, gap 32px.
- **Breakpoint:** `grid-cols-1 md:grid-cols-3`.

## Implementation notes
- Import `PREPLAN_CARDS` from `@/lib/content`, `cn` from `@/lib/utils`.
- Use `group` on each card link; image wrapper `overflow-hidden`; image `transition-transform group-hover:scale-105`; title `group-hover:text-brand transition-colors`.
- Export named `PreplanCards`. Verify `npx tsc --noEmit`.

## 2026-09-07 source re-extraction
- Source groups this component with the WATCH media section: combined height 1308px desktop and 1196px mobile.
- Mobile uses one column, 15px page gutters, 150px image crops, 20px headings and compact 24px gaps.
