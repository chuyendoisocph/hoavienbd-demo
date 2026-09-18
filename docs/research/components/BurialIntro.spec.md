# BurialIntro Specification

## Overview
- **Target file:** `src/components/burial/BurialIntro.tsx`
- **Interaction model:** static. Server component.

## DOM Structure
Centered white section. Eyebrow "INTRODUCTION" (centered, grey, letter-spaced) + H2 centered indigo heading + body paragraph + right-aligned "READ MORE +" link.

## Computed Styles
- Reference measurement at 1280px viewport: section begins at y=840 and ends at y=1381 (about 541px tall). Content starts 76px below the section top.
- Section: bg white; desktop padding-top ~76px and padding-bottom ~102px. Container width 85%, max-width 1080px, margin auto.
- Eyebrow "INTRODUCTION": 20px; 30px line-height plus 10px bottom padding; color #333; letter-spacing ~8px; text-transform uppercase; centered; max-width 800px; margin auto.
- H2 "Exceptional resting places of unrivalled distinction": font-heading; 40px; 60px line-height plus 10px bottom padding; fontWeight 500; color #4453C4; centered; margin-top 2px; margin-bottom ~30px.
- Body paragraph: black; 18px; 27px line-height; text-align left; small horizontal inset (~17px left, ~38px right). On the reference it occupies 135px at desktop.
- "READ MORE" link: blue #0C71C3; fontSize 18px; line-height 27px; letter-spacing 2px; with circular indigo "+" badge to its right; right-aligned in a 58px row beginning about 6px after the body.

## Assets
- Icon: PlusIcon from `@/components/icons`.

## Text (verbatim)
From `BURIAL_INTRO` (eyebrow, title, body, cta.label) in `@/lib/burial-content`.

## Responsive
- Desktop: exact measurements above. Mobile keeps generous white space but uses 15px eyebrow, 32px heading/1.25 line-height, 16px body/1.8 line-height, and 24px horizontal gutters. CTA remains right-aligned.

## Notes
- Import `BURIAL_INTRO` from `@/lib/burial-content`, `PlusIcon` from `@/components/icons`. Named export `BurialIntro`. tsc clean.
