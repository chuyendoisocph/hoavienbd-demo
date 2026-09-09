# CaringSection Specification

## Overview
- **Target file:** `src/components/CaringSection.tsx`
- **Interaction model:** static. Server component.

## DOM Structure
Full-bleed section with a background family photo. Dark overlay. Centered white content: H2 "Caring for Life" + body paragraph (constrained width ~820px).

## Computed Styles (exact)
- Section: position relative; min-height ~560px; display flex; align-items center; justify-content center; background image cover center; overflow hidden.
- Overlay: rgba(0,0,0,0.35) full cover.
- Content: relative z-10; text-align center; color #fff; max-width 860px; padding 0 24px.
- H2 "Caring for Life": Didact Gothic; fontSize 60px; fontWeight 700; color #fff; line-height 1.2; margin-bottom 24px.
- Body: color #fff; fontSize 16px; lineHeight 1.9; font-family Open Sans.

## States & Behaviors
N/A (static). No hover.

## Assets
- Background: `/images/83609s.jpg` (CARING.background). Use a div with `style={{ backgroundImage }}` or `<img>` absolute cover.

## Text Content (verbatim)
From `CARING` in `@/lib/content`:
- Title: "Caring for Life"
- Body: full paragraph (see content.ts).

## Responsive Behavior
- **Desktop (1440px):** H2 60px, body centered max 860px.
- **Mobile (390px):** H2 ~36px, body 15px, padding 0 20px, min-height ~480px.
- **Breakpoint:** fluid; use `clamp()` for H2 e.g. `clamp(32px,7vw,60px)`.

## Implementation notes
- Import `CARING` from `@/lib/content`. Background via `<img src={CARING.background} className="absolute inset-0 w-full h-full object-cover" alt="" />` then overlay div.
- Export named `CaringSection`. Verify `npx tsc --noEmit`.

## 2026-09-07 source re-extraction
- Source height: 798px desktop and 864px mobile, with 30px trailing mobile separation.
- H2: 60px desktop and 30px mobile. Content max-width: 780px.
