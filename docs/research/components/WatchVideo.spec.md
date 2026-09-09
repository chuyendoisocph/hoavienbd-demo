# WatchVideo Specification

## Overview
- **Target file:** `src/components/WatchVideo.tsx`
- **Interaction model:** click-driven video through `VideoFeature`.

## DOM Structure
- White section with centered uppercase eyebrow and a 16:9 media player.
- Media is constrained to 1180px and uses the shared poster/play/video component.

## Computed Styles
- Desktop padding: 60px top, 90px bottom, 24px horizontal.
- Mobile padding: 30px top, 114px bottom, 15px horizontal.
- Eyebrow: 15px, uppercase, 6px letter-spacing, #999, 30px bottom margin.

## States & Behaviors
- Poster state shows a centered outlined play control and shadow.
- Click switches to a controlled autoplay video.

## Assets
- Video and poster are sourced from `WATCH_VIDEO` in `src/lib/content.ts`.

## Text Content
- “XEM VIDEO”.

## Responsive Behavior
- Together with `PreplanCards`, the source group measures 1308px desktop and 1196px mobile.
- Player remains 16:9 at all viewports.
