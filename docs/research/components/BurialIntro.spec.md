# BurialIntro Specification

## Overview
- **Target file:** `src/components/burial/BurialIntro.tsx`
- **Interaction model:** static. Server component.

## DOM Structure
Centered white section. Eyebrow "INTRODUCTION" (centered, grey, letter-spaced) + H2 centered indigo heading + body paragraph + right-aligned "READ MORE +" link.

## Computed Styles
- Section: bg white; padding ~70px 0; container max-width ~1100px; margin auto; padding-inline 24px.
- Eyebrow "INTRODUCTION": ~15px; color #999; letter-spacing ~6px; text-transform uppercase; text-align center; font-weight 400; margin-bottom 12px.
- H2 "Exceptional resting places of unrivalled distinction": font-heading (Didact Gothic); fontSize ~40px (use clamp(28px,4vw,40px)); fontWeight 500; color #4453C4 (brand); text-align center; line-height 1.2; margin-bottom 40px.
- Body paragraph: color #666; fontSize 15px; line-height 1.9; text-align left; max-width none (full container width).
- "READ MORE" link: blue #0C71C3; fontSize 18px; fontWeight 500; letter-spacing 2px; with circular indigo "+" badge (PlusIcon in `#4453C4` filled circle, white icon, ~28px) to its right; right-aligned (justify-end) with margin-top 30px.

## Assets
- Icon: PlusIcon from `@/components/icons`.

## Text (verbatim)
From `BURIAL_INTRO` (eyebrow, title, body, cta.label) in `@/lib/burial-content`.

## Responsive
- Desktop: as above. Mobile: H2 ~28px, READ MORE may center.

## Notes
- Import `BURIAL_INTRO` from `@/lib/burial-content`, `PlusIcon` from `@/components/icons`. Named export `BurialIntro`. tsc clean.
