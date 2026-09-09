# CremationHero Specification

## Overview
- **Target file:** `src/components/cremation/CremationHero.tsx`
- **Interaction model:** static (background IMAGE, not video). Server component.

## DOM Structure
Fixed-height section (~565px). Background image cover + dark overlay. Centered white title + subtitle.

## Computed Styles
- Section: relative; height ~565px (use `h-[460px] md:h-[565px]`); overflow hidden; bg #000.
- Background: `<img src={CREMATION_HERO.background}>` absolute inset-0 w/h-full object-cover z-0 (NRV01561.jpg — a columbarium interior).
- Overlay: absolute inset-0 bg-black/35 z-[1].
- Content: relative z-10; flex col items-center justify-center h-full text-center text-white.
- H1 "Columbaria": font-heading; clamp(44px,9vw,100px); weight 500; #fff; textShadow `8px 8px 8px #242424`.
- Subtitle "World-class magnificence": font-heading; clamp(20px,3vw,36px); weight 400; #fff; textShadow `4px 4px 8px #242424`; mt-[10px].

## Assets
- Background image `/images/NRV01561.jpg` (CREMATION_HERO.background).

## Text (verbatim)
Title "Columbaria"; Subtitle "World-class magnificence".

## Responsive
- Desktop h-[565px], H1 100px; mobile h-[460px], H1 ~44px.

## Notes
- Import `CREMATION_HERO` from `@/lib/cremation-content`. Plain `<img>`. Named export `CremationHero`. tsc clean.
