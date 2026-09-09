# CremationIntro Specification

## Overview
- **Target file:** `src/components/cremation/CremationIntro.tsx`
- **Interaction model:** click-to-play video. Client (uses VideoFeature).

## DOM Structure
White section, padding ~70px 0. 2-column layout:
- LEFT (~58%): a VideoFeature (poster `IMG_9472a.jpg` + circular play button), with a "360 SITE VIEW" indigo badge overlapping its bottom-left corner.
- RIGHT (~42%): H2 "Redefining reverence through architectural magnificence" (font-heading, ~36px, weight 500, color #4453C4) + body paragraph (#666) + "READ MORE +" link (blue #0C71C3 + circular indigo "+" badge).

## Computed Styles
- Container: max-width ~1200px; mx-auto; px-6; grid grid-cols-1 lg:grid-cols-[58%_42%]; gap-12; items-center.
- VideoFeature: aspect-[4/3] or h-[520px]; drop shadow.
- "360 SITE VIEW" badge: bg #4453C4; color #fff; uppercase; letter-spacing ~3px; font-weight 700; padding 18px 28px; position absolute; bottom ~24px; left ~-10px (overlap); z-10; font-size ~18px; line-height 1.2 (stacked "360" over "SITE VIEW").
- H2: font-heading; clamp(28px,3.5vw,36px); weight 500; color #4453C4; line-height 1.25; mb-6.
- Body: #666; 15px; line-height 1.9.
- READ MORE link: blue #0C71C3; 18px; weight 500; tracking-[2px]; with circular indigo "+" PlusIcon badge (white icon, ~28px); margin-top 24px.

## Assets
- VideoFeature from `@/components/VideoFeature`; PlusIcon from `@/components/icons`. poster/video from CREMATION_INTRO.

## Text (verbatim)
From `CREMATION_INTRO` (badge, title, body, cta.label).

## Responsive
- Desktop: 2-col. Mobile (<lg): stack, video first then text; badge stays on video.

## Notes
- `"use client"`. Import `CREMATION_INTRO` from `@/lib/cremation-content`, `VideoFeature`, `PlusIcon`, `cn`. Named export `CremationIntro`. tsc clean.
