# Nirvana Asia — Behavior Bible

## Global
- Native browser scroll. **No** Lenis/Locomotive (no `.lenis` class). Standard scrolling.
- Sticky header: white bar fixed at top, overlays content. A faint horizontal **gradient swoosh** decorative bar sits just under the header band (indigo→transparent), visible against content. Header stays white throughout (no major shrink observed at 1440px).
- Body font 14px Open Sans.

## Section behaviors
- **Hero video**: `<video autoplay loop muted playsinline>` background, dark overlay. Fixed 558px desktop / 414px mobile; reduced-motion clone shows the still fallback.
- **Culture carousel (sec 3)**: auto-rotating slider, 7 slides, 7 clickable dots at bottom. Slides cross-fade. Each slide = bg photo + dark gradient overlay + white title/body + outline "Read more" button. INTERACTION MODEL: time-driven auto-advance + click dots. Build with a JS interval + dot click handlers + opacity/translate transition (~800ms ease).
- **READ MORE "+" link (culture)**: indigo circular "+" badge next to blue text; hover likely darkens. Static otherwise.
- **Pre-plan cards (sec 5)**: image + title. Hover: subtle (title color / slight). Treat as link cards.
- **WATCH video & 360 video**: poster image + circular outline play button (SVG triangle). Click → plays video. Drop shadow under the player.
- **Product buttons**: "360 SITE VIEW" solid indigo with shadow; hover slightly lifts.
- **Advantage icon cards (sec 9)**: static; thin outline circular icons (the PrePlan_Icon PNGs are line-art in indigo).
- **Quote photo (sec 10)**: photo with diagonal torn-paper top/bottom edge (clip-path or mask). Static.
- **Testimonial cards (sec 11)**: white cards, italic serif quote text, blue "read more" link, drop shadow. Hover subtle.
- **Footer**: static. Social icon tiles have gradient bg (FB blue, IG pink-gradient, YT red). Hover lifts.

## Hover states (general Divi defaults)
- Buttons: background/opacity transition ~300ms ease.
- Links: color shift to indigo/darker.

## Responsive (to verify in QA)
- Desktop 1440px: 2-col layouts as described.
- Tablet 768px: 2-col → likely stacks or narrows; product/culture columns stack.
- Mobile 390px: single column, hamburger menu replaces nav, hero text scales down (~40-48px).
- Breakpoint: Divi default ~980px (tablet) and ~767px (phone).

## Interaction models summary
- Header: static sticky (CSS position: fixed/sticky).
- Carousel: TIME-DRIVEN (auto) + click dots.
- Videos: CLICK-to-play.
- Everything else: STATIC with hover micro-transitions.
