# AdvantagesSection Specification

## Overview
- **Target file:** `src/components/AdvantagesSection.tsx`
- **Interaction model:** static server component; only the appointment CTA is interactive.

## Source Layout
- Background: `#F7F9FC`.
- Desktop section padding: 4vw top and bottom (50.6px at the 1264.8px reference viewport).
- Main row: 80% viewport width, max 1080px.
- Desktop grid: two equal columns with a 5.5% gutter. At the reference viewport both columns measure 478.1px and the gutter is 55.6px.
- Left column: heading, subtitle and CTA; 28px vertical inset.
- Right column: three stacked bands in a `1–2–2` composition. The first benefit fills the width; the next four form two two-column rows.
- Desktop band minimum heights: 330px, 355px and 411px. Each band has 27.8px vertical padding.
- Two-benefit rows use equal columns with an 11.64% gutter.

## Typography and Assets
- H2: Didact Gothic, 52px, weight 600, line-height 78px, color `#333`.
- Subtitle: 25px, weight 500, line-height 37.5px, letter-spacing 1px, color `#666`.
- CTA: `#4453C4`, white 18px/800 text, letter-spacing 2px, padding 18px 30px, square corners.
- Benefit icon: source PNG rendered at 100×100px.
- Icon-to-copy spacing: 27.8px.
- Benefit heading: 18px, weight 700, line-height 27px, letter-spacing 1px, 10px bottom padding, color `#333`.
- Benefit body: 18px, weight 500, line-height 27px, letter-spacing 1px, color `#666`.

## Content
Render all Vietnamese title, subtitle, CTA and five benefit records verbatim from `ADVANTAGES` in `src/lib/content.ts`.

## Responsive Behavior
- At `lg` and above, use the exact desktop 1–2–2 layout and reference dimensions.
- Below `lg`, stack the heading block and every benefit naturally; do not retain fixed band heights.
- On mobile, use 24px/36px centered heading, 18px subtitle, 88px icons and 52px vertical spacing between benefits.
