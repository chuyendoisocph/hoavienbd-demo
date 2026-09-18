# Cremation Imagery Specification

## Overview
- **Target files:** `src/components/cremation/CremationHero.tsx`, `CremationIntro.tsx`, `ColumbariaTypes.tsx`
- **Interaction model:** Static hero and intro; click-driven image carousels in the service blocks.
- **Source:** Nine user-supplied photographs stored with the shared Hoa Viên assets in `public/images/hvbd`.

## Image Placement
- Hero: wide courtyard view showing both temple and landscaped grounds.
- Intro: centered frontal view of Chùa Thiên Phước.
- Temple block: exterior garden, path, blossom, and courtyard views.
- Columbarium blocks: symmetrical hall, altar, and wall-of-niches interiors.
- Care block: Buddhist ceremony plus a quiet landscaped exterior.
- Reception block: altar, main hall, and ceremony images.
- Related information cards: ceremony, main hall, and yellow-blossom temple views.

## Computed Layout Values
- Hero height: 460px mobile, 565px desktop; image fills the section with `object-cover`.
- Intro media: 16:10 mobile, 4:3 desktop; max content width 1200px.
- Feature media: 4:3 at all widths; one-column mobile and two-column desktop.
- Carousel transition: opacity, 500ms.

## Responsive Behavior
- Mobile: full-width imagery inside 24px page gutters; text stacks below/above each image.
- Desktop: alternating two-column rows; images keep a consistent 4:3 presentation.
- Hero and headings use fluid sizing to avoid overflow.

## Accessibility and Performance
- Images use descriptive alternative text derived from their section title.
- Hero image is prioritized; all other images use Next.js image optimization and responsive `sizes`.
