# QuoteSection Specification

## Overview
- **Target file:** `src/components/QuoteSection.tsx`
- **Reference:** Nirvana homepage `.et_pb_section_24.ch-section-bg`
- **Interaction model:** static layout; source uses only a one-time entrance animation.

## DOM Structure
- Transparent/light section with 50.6px top padding and 85px bottom padding.
- Centered image row, full width up to 1300px, 408px tall.
- The handshake photo fills the row with `cover` and centered positioning.
- A blue testimonial panel overlaps the image from the upper-left.
- Inside the panel, the quote has a 4.8px cyan left rule and 20px left inset.

## Computed Styles (desktop, exact source values)

### Section
- width: 100%
- padding: `50.5875px 0 85px`
- margin-bottom: `1px`
- background: transparent

### Image row
- width: 100%
- max-width: `1300px`
- height: `408px`
- background-image: `/images/joe-yates-wNOymf_yTUA-unsplashaa.jpg`
- background-size: `cover`
- background-position: `50% 50%`

### Testimonial panel
- background: `#4453c4`
- height: `408px`
- padding: `80px 60px 80px 7vw`
- margin-top: `-12vw`
- margin-left: `-10vw`
- box-shadow: `-41px 45px 180px rgba(0,0,0,.52)`
- The visible composition aligns the panel with the viewport's left edge and gives it roughly `50.4vw` width, matching the supplied Nirvana reference.

### Quote
- border-left: `4.8px solid #2ea3f2`
- padding-left: `20px`
- margin: `20px 0 30px`
- font-family: Didact Gothic
- font-size: `18px`
- font-weight: `600`
- font-style: italic
- line-height: `36px`
- letter-spacing: `1px`
- color: white
- text-align: left

## States & Behaviors
- Static composition. No click or hover behavior.
- Source fades the panel in once; the clone keeps it visible to avoid hiding meaningful content when reduced-motion is enabled.

## Assets
- Handshake image: `/images/joe-yates-wNOymf_yTUA-unsplashaa.jpg`.

## Text Content
- Use the localized `QUOTE.text` value from `src/lib/content.ts`, wrapped in Vietnamese curly quotation marks.

## Responsive Behavior
- **Desktop (≥1024px):** 408px image with the 408px panel overlapping from `top: -12vw`; the panel aligns to the viewport's left edge and measures `50.4vw`.
- **Tablet/mobile (<1024px):** quote panel becomes a normal full-width block with `40px 10%` padding and a `10vw` gap, followed by the image. The image remains uncropped as a wide cover block.
- **Mobile (<768px):** quote line-height reduces from 2em to 1.8em, matching the source breakpoint.
