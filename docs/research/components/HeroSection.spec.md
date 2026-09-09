# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Interaction model:** time-driven (autoplay looping background video). Client component (video element ok in server too, but keep simple — plain tags, can be server component).

## DOM Structure
- Fixed-height hero media area: 558px at desktop and 414px at mobile. Background `<video>` is centered and cropped by the section, muted autoplay loop playsinline. Dark overlay on top.
- Centered content (flex col, items-center, justify-center): 
  - H1 "Nirvana Asia"
  - Subtitle "Rest. Assured."
- Below the hero video area sits a **Careline bar**: 78px desktop / 60px mobile, pulled upward 36px so it overlaps the hero. Its gradient capsule is about 48% wide on desktop and 92% on mobile, with rounded right corners.

## Computed Styles (exact)
- Media section: position relative; height 558px desktop, 414px mobile; overflow hidden; background #000.
- video: absolute inset-0; width/height 100%; object-fit cover; z-index 0.
- overlay: absolute inset-0; background rgba(0,0,0,0.35); z-index 1.
- content wrapper: relative z-10; text-align center; color #fff.
- H1 "Nirvana Asia": font-family var(--font-heading) Didact Gothic; font-size 100px (desktop); font-weight 500; color #fff; letter-spacing 1px; line-height ~1.1. Responsive: clamp down to ~48px on mobile.
- Subtitle "Rest. Assured.": Didact Gothic; font-size 40px; font-weight 500; color #fff; letter-spacing 3px. Mobile ~24px.
- Careline: outer height 78px desktop / 60px mobile, margin-top -36px. Gradient from translucent white through pale indigo to #4453C4. Capsule width 48% desktop / 92% mobile, rounded-tr/br 70px. Text 18px, weight 700, letter-spacing 5px, no wrapping. Align toward the right on desktop, centered on mobile.

## States & Behaviors
- Video autoplays, loops, muted. No controls.
- N/A hover.

## Assets
- Video: `/videos/22222.mp4` (from HERO.video). No poster needed (or use first frame).

## Text Content (verbatim)
- Title: "Nirvana Asia"
- Subtitle: "Rest. Assured."
- Careline: "CARELINE : 1800-88-1818"

## Responsive Behavior
- **Desktop (1440px):** media height 558px; H1 100px/120px; subtitle 40px; careline overlaps from y=522 to 600.
- **Mobile (390px):** media height 414px; H1 30px/36px, bold; subtitle about 20px; careline overlaps from y=378 to 438.
- **Breakpoint:** use `clamp()` for font sizes so it scales fluidly.

## Implementation notes
- Import `HERO, CARELINE` from `@/lib/content`.
- `<video autoPlay loop muted playsInline>` with `<source src={HERO.video} type="video/mp4" />`; use `/videos/22222.mp4`.
- Export named `HeroSection`. Verify `npx tsc --noEmit`.
