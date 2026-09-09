# SiteHeader Specification

## Overview
- **Target file:** `src/components/SiteHeader.tsx`
- **Interaction model:** static sticky (position: fixed at top). Dropdowns open on hover. Client component (mobile menu toggle + dropdowns).

## DOM Structure
Fixed full-width header, white bg, z-50. It is one 75px desktop band: logo spans the left side; utility items sit at the upper-right and the main nav at the lower-right.
- A decorative **gradient swoosh** bar element sits at the bottom-left edge of the header band (use `.nirvana-swoosh` utility, a left-anchored angled gradient ~55% width, height ~12px, fading to transparent on the right). It's subtle/decorative.

## Computed Styles (exact)
- Header: position fixed; top 0; width 100%; background #fff; box-shadow subtle `0 2px 4px rgba(0,0,0,0.06)`; z-index 50.
- Logo img: width 187px, height 55px. src `/images/2023-富貴Nirvana-master_Artboard-1-copy.png`. Use plain `<img>`.
- Nav link: font-family var(--font-heading) (Didact Gothic); font-size 15px; font-weight 700; color #000; letter-spacing 1px; text-transform none. Gap ~28px between items.
- Top utility text/icons: ~13-14px, color #333; gap ~24px. Icons ~14px.
- Header total height exactly 75px at 1440px. It overlays the hero; do not add page top padding. Logo is 187×55px at x=15/y=10.

## States & Behaviors
- Dropdowns (Getting Started, Planning Options, Resources, English): on hover/focus show a white panel with the children links (vertical list, padding 12px, box-shadow). Use a CSS group-hover or React state. Chevron (ChevronDownIcon) next to label.
- Nav link hover: color → brand indigo `#4453C4`, transition 300ms ease.
- Mobile (<980px): hide horizontal nav, show a hamburger button (3 lines) on the right; clicking toggles a vertical menu panel (white, full-width, links stacked). Logo stays left.

## Per-State Content
Top utility: Search (icon only), "Cart" (CartIcon + text), "Contact" (PhoneIcon + text).
Main nav (import from `@/lib/content` → TOP_NAV): labels and children as defined there. Use `TOP_NAV`.

## Assets
- Logo: `/images/2023-富貴Nirvana-master_Artboard-1-copy.png`
- Icons from `@/components/icons`: SearchIcon, CartIcon, PhoneIcon, ChevronDownIcon. Hamburger: build inline with 3 spans or a Menu svg.

## Text Content (verbatim)
Cart, Contact. Nav from TOP_NAV (Enlightenment Ceremony, Getting Started, Planning Options, Resources, English + children).

## Responsive Behavior
- **Desktop (≥980px):** logo left, full nav right, one 75px band with utilities above nav.
- **Tablet/Mobile (<980px):** hamburger menu, nav collapses into toggle panel.
- **Breakpoint:** ~980px (use `lg:` ≈ map to a custom; use Tailwind `min-[980px]:` or `lg:` — use `lg` (1024) is close; prefer `min-[980px]:`). Hide desktop nav below 980, show hamburger.

## Implementation notes
- `"use client"`. Import `cn` from `@/lib/utils`, `TOP_NAV, LOGO, CARELINE` from `@/lib/content`.
- Use a wrapper `<header className="fixed top-0 inset-x-0 z-50 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.06)]">`.
- Export named `SiteHeader`.
- Verify `npx tsc --noEmit` passes.
