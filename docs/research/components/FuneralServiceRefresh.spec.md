# Funeral Service Refresh Specification

## Overview
- **Route:** `/planning-options/funeral-service`
- **Target files:** funeral-service page, funeral content, hero, intro, parlours, reasons, guide, and about components.
- **Interaction model:** Original page structure with video facades and a click-driven four-image ceremony carousel.

## Content Direction
- Replace generic family and overseas showroom imagery with real Hoa Viên Bình Dương photographs.
- Preserve the original section order, spacing, video facades, and casket/urn catalogue.
- Only replace contextual photography with real Hoa Viên Bình Dương imagery.

## Approved Reference Content Refresh
- **Sources reviewed:** `https://cphaco.vn/dich-vu-tang-le/` and `https://hoavienchanhphuhoa.com/dich-vu-tang-le-binh-duong/`.
- **Layout constraint:** Do not add, remove, reorder, or restyle sections. Update copy only.
- **Intro service list:** Clarify the concrete service scope: consultation; khâm liệm and nhập quan; lễ viếng and altar preparation; mourning attire and ceremonial music; hearse/procession coordination; supporting equipment and services.
- **Four-step process:** Present the four principal ceremony stages: khâm liệm, nhập quan, lễ viếng, and di quan with burial or cremation.
- **Reasons:** Emphasize prompt support, complete service coordination, respect for customs and beliefs, experienced staff, appropriate facilities, and transparent consultation.
- **Care team:** Explain support across preparation, ritual coordination, transport, and final disposition while respecting each family's beliefs.
- **Excluded:** Outdated price packages, unverified claims about facility counts or years of operation, and old/conflicting telephone numbers.

## Image Placement
- Hero: `hvbd/dich-vu-tang-le-3.jpg`.
- Intro video poster: `hvbd/dich-vu-tang-le-1.jpg`.
- Ceremony carousel: Cầu Siêu – Cầu An, Vu Lan, procession, and service-team photographs.
- Care team: `hvbd/dich-vu-tang-le-1.jpg`.
- Guide: `hvbd/family-walk.jpg`.
- Related content: four contextual Hoa Viên photographs.

## Responsive Behavior
- Hero: 520px mobile, 765px desktop, image uses `object-cover`.
- Intro video retains its original 16:7 responsive frame.
- Ceremony carousel: stacked on mobile and two columns on desktop.
- All new content images use Next.js Image with responsive sizes.

## States & Behaviors
- Carousel buttons switch the visible image using a 500ms opacity transition.
- Card images scale slightly on hover.
