# PrivacyPolicyPage Specification

Source layout: https://www.nirvana.com.my/resources/policies/ (Divi page "Policies").
Source content: https://www.nirvana.com.my/getting-started/home-english/privacy-policy-2/ (English part only),
translated to Vietnamese and adapted for Hoa Viên Bình Dương (company name, law reference, contact block, language clause).

## Overview
- **Route:** `/chinh-sach-quyen-rieng-tu` → `src/app/chinh-sach-quyen-rieng-tu/page.tsx`
- **Components:** `src/components/privacy/PrivacyHero.tsx`, `src/components/privacy/PrivacyAccordion.tsx`
- **Content:** `src/lib/privacy-content.ts`
- **Interaction model:** hero static; accordion click-driven (single-open)

## Section 1: Hero (`.et_pb_section` with h1 "Policies")
Computed (1440px):
- section: height 271.6px, padding 70px 0
- background-image: `url(close-up-crystal-globe...jpg), linear-gradient(rgb(71,74,182) 0%, rgb(146,113,246) 100%)`
- background-size: cover, cover; background-position: 50% 50%; **background-blend-mode: overlay, overlay**
- row: max-width 1080px, padding 27px 0
- h1: Playfair Display 52px / 67.6px, weight 900, #fff, centered, padding-bottom 10px

Computed (390px): section height 244px (padding 70px 0), row padding 15px, h1 30px / 39px.

Clone decisions (site already localized):
- Photo: `/images/hvbd/thien-phuoc-yellow-blossom.jpg` instead of Nirvana's globe (every other hero uses Hoa Viên photos). Gradient + overlay blend kept exactly.
- h1 uses the site display font (Newsreader) and the site mobile scale: 40px mobile, 52px desktop.
- h1 text "Chính Sách" (mirrors "Policies"); the specific policy name lives in the section title.

## Section 2: Policy section (bg rgb(247,248,252))
- section: padding-top 50px desktop / 25px mobile; accordion margin 30px 0
- row: width 80% max 1080px desktop; 360px of 390px on mobile (15px side padding)
- title (div): Playfair Display 25px / 40px, weight 700, letter-spacing 1px, uppercase, color rgb(71,71,71), left
- divider: 2px solid rgb(0,71,224) (::before border-top), 29px below the title, divider block 23px tall + 4px padding
- gap divider → first item ≈ 37px

### Accordion item (`.et_pb_toggle`)
- padding 20px (15px mobile), margin-bottom 29.69px, border 1px transparent
- box-shadow: `rgba(0,0,0,0.3) 6px 6px 18px 0px`
- background: open #ffffff, closed rgb(244,244,244)
- title: Didact Gothic 18px / 23.4px bold rgb(71,71,71), padding-right 50px (28px mobile), cursor pointer
- icon: ETmodules glyph at right 0, vertically centered, 16px, color rgb(0,71,224); open = U+E04F (minus), closed = U+E050 (plus)
- content: padding-top 20px; p Didact Gothic 17px / 22.1px, color rgb(133,133,189), padding-bottom 17px (12px mobile); `strong` labels 700

### Behavior
- First item open on load.
- Click a closed title → it opens, the previously open item closes (single-open). Backgrounds swap white/#f4f4f4.
- Click the open title → stays open (Divi accordion never collapses to zero open).
- Divi animates with jQuery slide (~700ms). Clone: grid-rows 0fr↔1fr, 500ms ease, disabled under prefers-reduced-motion.

Clone decisions:
- Body text 16px / 1.7, color #555 (site body scale; source lavender #8585bd on white is ~3.6:1, below WCAG AA for body text).
- Icon + divider use the site brand color (`--brand`), matching how the rest of the clone maps Nirvana blue.
- Title font: site sans (Be Vietnam Pro) 18px bold, color `--heading`.

## Content structure (9 items)
1. Giới thiệu (A–F)
2. Mô tả dữ liệu cá nhân
3. Hậu quả khi không cung cấp dữ liệu (a–c)
4. Mục đích (a–n + trailing paragraph)
5. Tiết lộ thông tin (a–i)
6. Bảo mật
7. Chuyển giao & chia sẻ dữ liệu cá nhân
8. Truy cập và chỉnh sửa (a–f + contact block)
9. Ngôn ngữ

## Responsive
- Desktop 1440: container 1080px centered.
- Mobile 390: hero 244px, h1 40px; container full width minus 15px gutters; item padding 15px.
