# SiteFooter Specification

## Overview
- **Target file:** `src/components/SiteFooter.tsx`
- **Interaction model:** static with link/icon hovers. Server component.

## DOM Structure
Footer section, background navy `#171728`. Inside, the desktop row uses a `57.8% / 15.6% / 15.6%` composition with space distributed between columns:
- **Column 1 — purple panel** `#4F4FB8`, occupying 49% of the viewport and protruding 77px above the navy background:
  - "Get in Touch" heading (white, ~30px, Didact Gothic).
  - "Careline" label + number "1800-88-1818".
  - Email "info@nvasia.com.my".
  - "Corporate Office" (bold) + address text.
  - Social icon row: Facebook, Instagram, YouTube — each a rounded square tile (~48px) with brand gradient bg (FB blue #1877F2, IG gradient pink/orange, YT red #FF0000), white icon.
  - "© 2024 NIRVANA ASIA. All Rights Reserved." (small, faint white).
- **Column 2 — link list** (white text on navy): headings "Getting Started", "Planning Options" with their links. Active/heading "Planning Options" shown in indigo accent.
- **Column 3 — link list** (white): "Resources" links (Who We Are, Branches, 360 Virtual Tour, Latest Updates, Contact Us, Article, Life Cafe, Nirvana Store, Q&A), then 3 outline buttons (E-Booklet, MyNirvana, Agent Portal), then "Privacy Policy" / "Terms of Use".

## Computed Styles (exact)
- Footer section: background `#171728`; desktop min-height `735px`; margin-top `73px`; padding `7px 15.18vw 50.6px 0`.
- Desktop row: width `84.82vw`; margin-top `-77px`; columns measure 57.8%, 15.6%, 15.6% of the row with 5.5% gutters.
- Purple panel: background `#4F4FB8`; height `518.5px`; left padding `15.18vw`; right padding `30px`; content top padding `83px`.
- "Get in Touch": Didact Gothic; font-size `30px`; line-height `48px`; letter-spacing `1px`; color #fff; font-weight 700.
- Careline and email: Didact Gothic; font-size `20px`; line-height `24px`; letter-spacing `2px`; white.
- Address: font-size `15px`; line-height `18px`; letter-spacing `1px`; color `#d6d6d6`.
- Right column headings: font-size `20px`; line-height `30px`; letter-spacing `1px`; brand blue `#4453c4`.
- Right links: color white; font-size `16px`; line-height `19.2px`; letter-spacing `1px`.
- Social tiles: `52px` square, square corners, approximately `19px` gaps. FB `#3b5998`, IG `#ea2c59`, YouTube `#e02b20`.
- Outline buttons: border `0.8px solid #fff`; padding `4.2px 14px`; font-size `14px`; line-height `23.8px`; letter-spacing `1px`; square corners.
- "Privacy Policy"/"Terms of Use": small ~13px; rgba(255,255,255,0.7).

## States & Behaviors
- Link hover: color → #fff. Social tile hover: lift. Button hover: faint bg.

## Assets
- Icons: FacebookIcon, InstagramIcon, YoutubeIcon from `@/components/icons`.

## Text Content (verbatim)
From `@/lib/content`: `CARELINE`, `EMAIL`, `FOOTER_ADDRESS` (office, address, copyright), `FOOTER_COLUMNS` (3 columns: Getting Started, Planning Options, Resources), `FOOTER_BUTTONS` (E-Booklet, MyNirvana, Agent Portal). Also "Get in Touch", "Careline", "Privacy Policy", "Terms of Use".

## Responsive Behavior
- **Desktop (≥1024px):** purple panel is 49% of viewport and overlaps upward by 77px; two 15.6%-of-row navigation columns sit to the right.
- **Mobile (<1024px):** stack — purple panel full width on top, followed by the two navy navigation blocks with comfortable side padding.
- **Breakpoint:** ~980px. `grid-cols-1 lg:grid-cols-3`.

## Implementation notes
- Import content constants + social icons. The purple panel should visually extend; use the navy as the footer bg and the panel as a colored block in col 1.
- Export named `SiteFooter`. Verify `npx tsc --noEmit`.

## 2026-09-08 source re-extraction
- Source desktop footer is exactly `735px` high at a 1264.8px viewport.
- Purple panel is 620.1px wide and 518.5px high; its top begins 77px above the navy background.
- Source links use 16px Didact Gothic with 1px tracking; all three group headings use brand blue.
