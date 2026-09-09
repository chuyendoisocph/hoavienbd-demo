# Nirvana Asia (nirvana.com.my) — Page Topology

WordPress + Divi Theme Builder. Single long landing page, white background, native scroll (no Lenis/smooth-scroll lib detected). Sticky header overlays all content.

## Design System (extracted via getComputedStyle)

### Colors
- Brand indigo (headings accent, buttons): `rgb(68,83,196)` = `#4453C4`
- Link blue (read more): `rgb(12,113,195)` = `#0C71C3`
- Heading dark: `rgb(51,51,51)` = `#333333`
- Body text: `rgb(102,102,102)` = `#666666`
- Page bg: white `#FFFFFF`
- Light section bg (advantages, quote): `rgb(247,249,252)` = `#F7F9FC`
- Footer navy: `rgb(23,23,40)` = `#171728`
- Footer "Get in Touch" purple panel: `rgb(79,79,184)` = `#4F4FB8`
- Slider card overlay: dark navy gradient over photo

### Typography
- **Headings:** `Didact Gothic` (Google Font), Helvetica fallback
- **Body:** `Open Sans` (Google Font), Arial fallback. Base 14px / line-height 23.8px (~1.7)
- H1 hero "Nirvana Asia": Didact Gothic 100px / weight 500 / white / letter-spacing 1px
- Section H2 (Products, Testimonials, Advantages): Didact Gothic 52px / weight 600-700 / #333
- "Caring for Life" (over photo): Didact Gothic 60px / weight 700 / white
- "Our Culture Our Future": Didact Gothic 52px / weight 500 / #4453C4 / letter-spacing 3px
- Small eyebrow label ("NIRVANA", "WATCH"): ~15px / letter-spacing wide / uppercase
- Advantage card title: 18px / weight ~600 / #333

### Buttons
- Primary (360 SITE VIEW, MAKE AN APPOINTMENT): bg `#4453C4`, white text, 18px, weight 800, letter-spacing 2px, padding 15-18px 30px, border-radius 0, box-shadow `0 10px 20px rgba(65,84,125,0.24)`
- Outline (Read More, slider Read more): transparent bg, 1px border, dark/white text, letter-spacing 2px, radius 0
- Link (READ MORE in culture): blue `#0C71C3`, 18px, weight 500, letter-spacing 2px, with a circular "+" icon

## Sections (top → bottom)

| # | Name | Notes |
|---|------|-------|
| 0 | **Header** (sticky overlay) | Top utility bar (Search, Cart, Contact) + main nav with logo. Logo `2023-富貴Nirvana-master_Artboard-1-copy.png`. Menu: Enlightenment Ceremony, Getting Started▾, Planning Options▾, Resources▾, English▾. Gradient swoosh bar appears under header after scroll. |
| 1 | **Hero** | Fixed 558px desktop / 414px mobile `<video>` background (`22222.mp4`, autoplay loop muted), dark overlay. Center title is 100px desktop / 30px mobile. |
| 2 | **Careline bar** | 78px desktop / 60px mobile capsule pulled 36px upward over the hero; gradient white→indigo, white text. |
| 3 | **Culture + Slider** | 2-col. Left: 7-slide auto carousel (dark cards w/ bg photo, title, body, Read more, 7 dots). Right: eyebrow "NIRVANA" + "Our Culture Our Future" (indigo) + paragraph + "READ MORE +" link. |
| 4 | **Caring for Life** | Full-bleed family photo bg (`83609s.jpg`), centered white heading (60px) + paragraph. |
| 5 | **Pre-plan cards** | 3 cards: image-top + heading. "5 main advantages of pre-planning", "When is the best time to pre-plan?", "Who should pre-plan?". Images: `45.jpg`,`920.jpg`,`1661.jpg`. |
| 6 | **WATCH video** | Eyebrow "WATCH" + wide video player (`resize-eng.mp4`, flower poster) with circular play button + drop shadow. |
| 7 | **Our Products** | 2-col. Left: H2 "Our Products" + bullet list (Burial Plots, Columbaria, Funeral Service, Ancestral Tablet, Eternal Blessing Light, Pet Memorial Garden, NV Seed) + "READ MORE" outline btn + "360 SITE VIEW" indigo btn. Right: columbarium photo (`85_Weba.jpg`). |
| 8 | **360 Site View** | Full-width aerial memorial-park video/image with circular play button. |
| 9 | **Advantages** | Light bg `#F7F9FC`. Left: "The 5 main advantages of pre-planning with Nirvana" (52px) + "Your needs are our utmost concern" + "MAKE AN APPOINTMENT" btn. Right: 2-col grid of 5 icon cards (Trust Fund, Feng Shui, 0% interest, Comprehensive facilities, Majestic architecture). Icons: `PrePlan_Icon_*.png`. |
| 10 | **Quote** | Light bg. Handshake photo (`joe-yates...unsplashaa.jpg`) with diagonal/torn mask + italic pull-quote about pre-planning. |
| 11 | **Testimonials** | H2 "Our Customers' Testimonials" + subtitle + 3 cards (italic serif quote, "read more" link) + "Read More" outline btn. Stars.png decoration. |
| 12 | **Footer** | Navy `#171728`. Left purple panel `#4F4FB8`: "Get in Touch", Careline, email, address, social icons (FB/IG/YT), © 2024. Middle + right link columns + E-Booklet/MyNirvana/Agent Portal buttons + Privacy/Terms. |

## Carousel slides (section 3 left)
1. Official Statement — bg `abstract-luxury-gradient-blue...scaled.jpg`
2. Office Relocation Notice — bg `2025_N3-Relocation_WEB_KS.jpg`
3. Official statement: No involvement in "Durian Trust Coin" cryptocurrency — bg `2654962-01-scaled.jpg`
4. Affordable life planning for just RM10 a day? — bg `amy-shamblen...scaled.jpg`
5. Memorial Dedication — bg `WebCover_1-01.jpg`
6. Rhyme of Life — bg `A2S1-14-nw.jpg`
7. Bereev : a new way to pre-plan — bg `NB_WebCover_1-01.jpg`
