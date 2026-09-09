# BurialHero Specification

## Overview
- **Target file:** `src/components/burial/BurialHero.tsx`
- **Interaction model:** time-driven (autoplay looping bg video). Server component OK.

## DOM Structure
Fixed-height section (~765px, NOT full viewport). Background `<video>` cover + dark overlay. Centered white title + subtitle.

## Computed Styles
- Section: position relative; height ~765px (use `min-h-[600px] h-[80vh] max-h-[765px]` or simply `h-[765px]` desktop, shorter on mobile); overflow hidden; bg #000.
- video: absolute inset-0; w/h 100%; object-cover; z-0; autoplay loop muted playsInline.
- overlay: absolute inset-0; bg-black/30; z-[1].
- content: relative z-10; flex col; items-center justify-center; h-full; text-center; text-white.
- H1 "Burial Plots": font-heading (Didact Gothic); fontSize clamp(44px,9vw,100px); fontWeight 500; color #fff; textShadow `8px 8px 8px #242424`.
- Subtitle "Natural tranquility and serene beauty": font-heading; fontSize clamp(20px,3vw,36px); fontWeight 400; color #fff; textShadow `4px 4px 8px #242424`; margin-top ~10px.

## Assets
- Video: `/videos/14444444.mp4` (BURIAL_HERO.video).

## Text (verbatim)
Title "Burial Plots"; Subtitle "Natural tranquility and serene beauty".

## Responsive
- Desktop: h-[765px], H1 100px. Mobile: shorter (~h-[520px]), H1 ~44px.

## Notes
- Import `BURIAL_HERO` from `@/lib/burial-content`. Named export `BurialHero`. tsc clean.
