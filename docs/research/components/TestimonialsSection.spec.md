# TestimonialsSection Specification

## Overview
- **Target file:** `src/components/TestimonialsSection.tsx`
- **Interaction model:** static with link hover. Server component.

## DOM Structure
White section, centered, padding ~80px 0. 
- H2 "Our Customers' Testimonials" (centered).
- Subtitle paragraph (centered, #666, max ~760px).
- A 3-column grid of testimonial cards. Each card: italic serif quote excerpt + a blue "read more" link. (The bold title line appears at the start of the excerpt in the original; render the testimonial `title` as a bold lead-in line, then the `excerpt` in italic serif, then "read more".)
- Below grid: a centered outline "Read More" button.
- Optional: a faint `Stars.png` decoration — skip or place subtly; not essential.

## Computed Styles (exact)
- H2: Didact Gothic; fontSize 52px; fontWeight 700; color #333; text-align center; margin-bottom 20px.
- Subtitle: #666; fontSize 16px; line-height 1.7; text-align center; max-width 760px; margin 0 auto 50px.
- Grid: max-width ~1140px; margin auto; display grid; grid-template-columns repeat(3,1fr); gap ~40px.
- Card: background transparent (no card bg in original — subtle); padding 0 0 10px. (Original cards have a faint drop shadow on a white block — apply `bg-white shadow-[0_20px_40px_-25px_rgba(0,0,0,0.25)] p-7` for a clean look.)
- Card title (bold lead-in): fontWeight 700; color #333; fontSize ~17px; font Open Sans; margin-bottom 12px.
- Card excerpt: font-style italic; font-family Georgia, 'Times New Roman', serif; color #555; fontSize ~16px; line-height 1.7.
- "read more" link: color #0C71C3; font-style italic; fontSize ~15px; margin-top 12px; display inline-block.
- Bottom "Read More" button: outline (1px solid rgba(0,0,0,0.15)); color #333; padding 14px 34px; letterSpacing 2px; border-radius 0; margin-top 50px; display block; margin-inline auto; width fit. Hover: bg #f5f5f5.

## States & Behaviors
- "read more" / "Read More" hover: color → #4453C4. Card hover: subtle lift (optional).

## Assets
- Optional `/images/Stars.png` (decorative; skip if awkward).

## Text Content (verbatim)
From `TESTIMONIALS_INTRO` (title, body) and `TESTIMONIALS` (3 items {title, excerpt, href}).

## Responsive Behavior
- **Desktop (≥980px):** 3 columns.
- **Mobile (<768px):** 1 column stacked, gap 32px.
- **Breakpoint:** `grid-cols-1 md:grid-cols-3`.

## Implementation notes
- Import `TESTIMONIALS_INTRO, TESTIMONIALS` from `@/lib/content`, `cn`.
- Export named `TestimonialsSection`. Verify `npx tsc --noEmit`.

## 2026-09-07 source re-extraction
- Source height: 1183px desktop and 1619px mobile.
- H1: 52px/62.4px desktop; 32.5px/39px mobile. Desktop bottom padding: 240px.
