# EventsHero

## Contract

Server component receiving `title`, `subtitle`, `image`, and `imageAlt` string props.

## Layout

- Height: 430 px mobile, 560 px desktop.
- Offset naturally begins under the fixed site header via the page flow already used elsewhere.
- Full-bleed image with a restrained dark blue/black overlay.
- Centered display title, white subtitle, max-width 720 px.
- Use `next/image` with `fill`, `priority`, `sizes="100vw"` and `object-cover`.

## Accessibility

- One `h1`.
- Meaningful alt text because the image shows a real Hoa Viên place.

