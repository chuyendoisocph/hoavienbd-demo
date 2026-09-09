# CommitmentSection Specification

## Overview
- **Target file:** `src/components/burial/CommitmentSection.tsx`
- **Interaction model:** click-to-play video. Client (uses VideoFeature which is client).

## DOM Structure
Section on light/white bg, padding ~40px 0. 2-column overlap layout:
- LEFT (~62%): a VideoFeature (poster `video-commit.jpg` + circular play button) — wide.
- RIGHT (~38%): an indigo panel (`#4453C4`, white text) that overlaps slightly, containing: eyebrow "WATCH" (letter-spaced, white/translucent), H3 "The Commitment" (font-heading, ~30px, white, bold), body paragraph (white), and an outline "EXPLORE" button (transparent, white border, white text).

Simplest faithful layout: a flex row; the video on the left, the indigo panel on the right vertically centered, overlapping the video's right edge by ~40px (use negative margin or grid overlap). On mobile: stack (video on top, panel below full width).

## Computed Styles
- Video container: VideoFeature with `aspect-[4/3]` or height ~520px; box-shadow drop.
- Indigo panel: bg `#4453C4`; color #fff; padding ~50px 40px; max-width ~440px; align-self center; z-10 (above video). Margin-left ~-60px on desktop (overlap).
- Eyebrow "WATCH": ~14px; letter-spacing ~6px; uppercase; color rgba(255,255,255,0.85); margin-bottom 16px.
- H3 "The Commitment": font-heading; fontSize 30px; fontWeight 700; color #fff; margin-bottom 16px.
- Body: 15px; line-height 1.8; color rgba(255,255,255,0.95).
- EXPLORE button: border 1px solid rgba(255,255,255,0.8); color #fff; padding 12px 30px; letter-spacing 2px; bg transparent; rounded-none; margin-top 24px; hover bg rgba(255,255,255,0.15).

## Assets
- VideoFeature from `@/components/VideoFeature`. Poster/video from COMMITMENT.

## Text (verbatim)
From `COMMITMENT` (eyebrow, title, body, cta.label) in `@/lib/burial-content`.

## Responsive
- Desktop: 2-col overlap. Mobile (<768px): stack, panel full width, no negative margin.

## Notes
- `"use client"` (or server importing client VideoFeature is fine; keep it a plain component). Import `COMMITMENT` from `@/lib/burial-content`, `VideoFeature` from `@/components/VideoFeature`. Named export `CommitmentSection`. tsc clean.
