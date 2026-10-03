# Sự kiện Hoa Viên — Behavior Bible

- Native scrolling; the existing fixed header remains unchanged.
- Event cards are full-card links with a visible focus ring and a subtle image zoom on hover.
- Every event action opens its statically generated detail route; no dead controls.
- The contact action opens the existing consultation dialog through a reusable trigger.
- Video uses native controls, does not autoplay and has a real Hoa Viên poster.
- Motion is limited to hover/focus transitions and respects `prefers-reduced-motion` through CSS defaults.
- At widths below 768 px, split layouts stack and text remains centered or left-aligned according to reading order.
- Images use `next/image`, stable aspect ratios, descriptive Vietnamese alt text and responsive `sizes`.
