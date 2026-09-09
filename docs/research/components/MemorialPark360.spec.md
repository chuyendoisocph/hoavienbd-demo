# MemorialPark360 Specification

## Overview
- **Target file:** `src/components/burial/MemorialPark360.tsx`
- **Interaction model:** click-to-play. Uses VideoFeature (client).

## DOM Structure
Section on periwinkle/blue-grey bg `rgb(140,163,209)` (#8CA3D1), padding ~70px 0. Centered heading block: eyebrow "WATCH" + H3 "Nirvana Memorial Park" + subtitle "360 Site View". Below: a large VideoFeature (aerial memorial-park poster `NV-Lanscaping.jpg` + circular play button), constrained max-width ~1180px, centered, aspect ~16/8.

## Computed Styles
- Section bg: #8CA3D1.
- Eyebrow "WATCH": ~14px; letter-spacing ~6px; uppercase; color rgba(255,255,255,0.9); text-center; margin-bottom 10px.
- H3 "Nirvana Memorial Park": font-heading; ~30px; weight 700; color #fff; text-center.
- Subtitle "360 Site View": font-heading; ~22px; color #fff; text-center; margin-bottom 30px. (Or render as one heading group.)
- VideoFeature: max-width 1180px; mx-auto; aspect-[16/8] (or height ~600px); drop shadow.

## Assets
- VideoFeature from `@/components/VideoFeature`. poster/video from MEMORIAL_360.

## Text (verbatim)
From `MEMORIAL_360` (eyebrow, title, subtitle) in `@/lib/burial-content`.

## Responsive
- Desktop: as above. Mobile: full width, aspect preserved.

## Notes
- Import `MEMORIAL_360` from `@/lib/burial-content`, `VideoFeature` from `@/components/VideoFeature`. Named export `MemorialPark360`. tsc clean.
