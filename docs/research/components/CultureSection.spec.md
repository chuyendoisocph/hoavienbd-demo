# CultureSection Specification

## Overview
- **Target file:** `src/components/CultureSection.tsx`
- **Interaction model:** TIME-DRIVEN auto-rotating carousel (left) + static text (right). Client component (`"use client"`).

## DOM Structure
2-column layout on a white section (max-width container ~1200px, centered, padding ~80px 0):
- **Left column (~40%):** a single carousel **card** (~410px tall, ~410px wide). Each slide: a dark card with a background photo + dark navy gradient overlay, centered white content: TITLE (bold), optional SUBTITLE, BODY paragraph, and an outline "Read more" button. Below the card: a row of 7 small **dots** (active dot = filled/wider, inactive = faint). Auto-advances every ~5s; clicking a dot jumps to that slide. Slides cross-fade (opacity transition ~600-800ms).
- **Right column (~55%):** 
  - Eyebrow "NIRVANA" — letter-spaced uppercase, color #999/grey, ~15px, letter-spacing wide, centered or left.
  - H2 "Our Culture Our Future" — Didact Gothic, 52px, font-weight 500, color #4453C4, letter-spacing 3px.
  - Body paragraph (#666, 14px/1.7). Note: "Established in 1990," and "Nirvana Asia Group" may be bold — render the paragraph with those phrases in `<strong>` (font-weight 700, color #333).
  - "READ MORE" link: blue `#0C71C3`, 18px, weight 500, letter-spacing 2px, with a circular indigo "+" badge to its right (PlusIcon inside a `#4453C4` filled circle, white icon, ~28px).

## Computed Styles (exact)
- H2: fontFamily var(--font-heading); fontSize 52px; fontWeight 500; color #4453C4; letterSpacing 3px.
- Eyebrow: ~15px; color #999; letterSpacing ~6px; textTransform uppercase; fontWeight 400.
- Body: color #666; fontSize 14px; lineHeight 1.7.
- READ MORE link: color #0C71C3; fontSize 18px; fontWeight 500; letterSpacing 2px; textTransform none.
- Card: borderRadius 0; overflow hidden; the card content text-align center; padding ~40px 30px; color #fff.
- Card overlay: linear-gradient(rgba(10,12,40,0.78), rgba(10,12,40,0.85)).
- Card title: ~24px bold white. Card subtitle: ~16px white. Card body: ~14px rgba(255,255,255,0.9).
- Slider "Read more" button: transparent bg, 1px solid rgba(255,255,255,0.8), white text, padding 10px 26px, letter-spacing 1px, radius 0.
- Dots: 7 dots, gap 8px, each ~8px circle; inactive `rgba(0,0,0,0.2)`, active `#4453C4`.

## States & Behaviors
- **Carousel auto-rotate:** `setInterval` 5000ms advancing index mod 7. Cross-fade via stacked absolutely-positioned slides with `opacity` + `transition: opacity 700ms ease`; active slide opacity 1, others 0.
- **Dot click:** sets active index, resets interval.
- INTERACTION MODEL: time-driven + click dots. NOT scroll-driven.
- Hover on "Read more": bg fades to rgba(255,255,255,0.15).

## Per-State Content
Import `CAROUSEL_SLIDES` (7 slides, each {title, subtitle?, body, image, cta}) and `CULTURE` from `@/lib/content`. Render all 7 slides; map dots to them.

## Assets
- Slide background images: from CAROUSEL_SLIDES[i].image (already in /images/).
- Icon: PlusIcon from `@/components/icons`.

## Text Content (verbatim)
- Eyebrow: "NIRVANA"; Title: "Our Culture Our Future"
- Body & READ MORE: from CULTURE.
- Slides: from CAROUSEL_SLIDES.

## Responsive Behavior
- **Desktop (≥980px):** 2-col, card left ~40%, text right.
- **Mobile (<980px):** stack — card on top (full width, ~360px tall), text below, centered.
- **Breakpoint:** ~980px. Use `md:`/`lg:` grid.

## Implementation notes
- `"use client"`, `useState`, `useEffect`. Import `cn`, `CAROUSEL_SLIDES`, `CULTURE`, `PlusIcon`.
- Slide images via plain `<img className="absolute inset-0 w-full h-full object-cover" />`.
- Export named `CultureSection`. Verify `npx tsc --noEmit`.

## 2026-09-07 source re-extraction
- Source height: 547px desktop, 1043px mobile.
- Desktop row: 1282px wide and 493px high with 27px vertical padding.
- Mobile section padding: 30px top / 25px bottom; row padding 15px.
