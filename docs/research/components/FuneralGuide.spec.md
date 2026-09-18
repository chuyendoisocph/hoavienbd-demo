# FuneralGuide Specification

## Overview
- **Target file:** `src/components/funeral/FuneralGuide.tsx`
- **Reference:** user-provided desktop screenshot `codex-clipboard-cdd61493-df9d-43e9-afdc-223e38466b99.png`
- **Interaction model:** static

## DOM Structure
- White section wrapper.
- Indigo feature band containing a two-column inner container.
- Large left image overlaps the lower edge of the indigo band.
- White guide title is aligned near the top of the right column.
- Existing guide body and five-item checklist continue below the feature band.

## Reference Measurements
- Reference viewport: 1920px wide.
- Indigo band: approximately 529px tall, from y=23 to y=552.
- Inner content width: approximately 1564px, centered (178px side margins).
- Image: x=178, y=130, width=722px, height=481px.
- Image overlap below band: approximately 59px.
- Title: x=982, y=142, maximum width approximately 650px.
- Title font: white sans-serif, approximately 54px, medium weight, 1.35 line height.
- Horizontal image/title gap: approximately 82px.

## States & Behaviors
- N/A; this feature block is static.

## Assets
- Banner image: `public/images/hvbd/family-walk.jpg`.

## Text Content
- Title comes from `GUIDE.title`.
- Remaining body, CTA, and checklist content continue to use the existing `GUIDE` data.

## Responsive Behavior
- **Desktop (>=1024px):** 722px/remaining-width two-column feature band; image overlaps the lower band edge by about 58px.
- **Tablet/mobile (<1024px):** image and title stack within the indigo band; no negative overlap, preserving readable spacing and full-width imagery.

