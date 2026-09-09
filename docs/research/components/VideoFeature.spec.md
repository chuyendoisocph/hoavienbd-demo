# VideoFeature Specification (shared) + WatchVideo + SiteView360

## Overview
- **Target files:**
  - `src/components/VideoFeature.tsx` — reusable click-to-play video player.
  - `src/components/WatchVideo.tsx` — "WATCH" eyebrow + contained VideoFeature.
  - `src/components/SiteView360.tsx` — full-width VideoFeature.
- **Interaction model:** click-to-play. Client component (`"use client"`).

## VideoFeature (reusable)
Props: `{ video: string; poster: string; className?: string }`.
DOM: a relative container. Initially shows the `poster` image (object-cover) + a centered circular **play button**: a ~80px circle with 2px white border, transparent fill, containing a white triangle (PlayIcon). On click, replace poster+button with a `<video controls autoPlay>` that plays `video`. Use React state `playing`.
Styles:
- Container: position relative; width 100%; overflow hidden; box-shadow `0 30px 40px -20px rgba(0,0,0,0.35)` (drop shadow under player); cursor pointer.
- Poster img: w-full h-full object-cover.
- Play circle: absolute centered; width 80px; height 80px; border 2px solid #fff; border-radius 9999px; display grid place-items-center; PlayIcon ~28px white (translate-x ~2px for optical centering). Hover: bg rgba(255,255,255,0.15), scale 1.05, transition 300ms.
- When playing: render `<video src={video} controls autoPlay className="w-full h-full object-cover" />`.

## WatchVideo
- White section, centered. Eyebrow "WATCH" (uppercase, letter-spacing ~6px, color #999, ~15px, centered, margin-bottom 30px).
- Below: VideoFeature constrained to max-width ~1180px, centered, aspect-ratio ~ 32/9 (wide banner — original is a wide short player). Use `aspect-[32/9]` or height ~360px.
- video `/videos/resize-eng.mp4`, poster `/images/alexandru-tudorache-JdjdIjzJl94-unsplash-scaled.jpg` (from WATCH_VIDEO).
- Section padding ~60px 24px 90px.

## SiteView360
- Full-width (edge to edge) VideoFeature, no eyebrow. Aspect ratio ~ 16/6 (wide). height ~600px max.
- video `/videos/22222.mp4`, poster `/images/NV-Lanscaping.jpg` (from SITE_VIEW_360).
- No horizontal padding (full-bleed). 

## Assets
- Icons: PlayIcon from `@/components/icons`.
- WATCH_VIDEO, SITE_VIEW_360 from `@/lib/content`.

## Text Content (verbatim)
- Eyebrow: "WATCH"

## Responsive Behavior
- Desktop: as above. Mobile: players keep aspect ratio, full width; play circle shrinks to ~60px on small screens.

## Implementation notes
- VideoFeature is `"use client"` with `useState`.
- WatchVideo and SiteView360 import VideoFeature and the content constants.
- Export named `VideoFeature`, `WatchVideo`, `SiteView360` respectively.
- Verify `npx tsc --noEmit`.
