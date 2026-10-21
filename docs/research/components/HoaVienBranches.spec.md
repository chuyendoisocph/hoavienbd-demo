# Hoa Viên branch directory

Reference: https://nvasia.my/branches (inspected 2026-10-21). This is a structure and interaction reference, not a source of Hoa Viên addresses or imagery.

## Reference topology and behavior

- Full-width photographic hero with small brand eyebrow and large “Branches” heading.
- Centered directory intro below the hero.
- Region accordion: broad horizontal bars, one expanded group at a time; expansion reveals location rows with image at left and address / map action at right on desktop. On mobile, image and details stack.
- Region bars have a distinct expanded state and an affordance icon. Location action opens a map in a new tab.
- Reference groups are Malaysian regions; do not reproduce their names, locations, copy, or flags.

## Hoa Viên adaptation

- Route: `/chi-nhanh`. Keep `/lien-he` as the contact-form destination.
- Hero uses authentic `public/images/hvbd/park-aerial-roundabout.jpg`; blue/white brand typography and an overlay for contrast. Avoid the Malaysia map.
- Heading: “Hệ Thống Hoa Viên Bình Dương”; short introduction helps visitors distinguish the hoa viên itself from city consultation offices.
- Accordion groups: “Hoa Viên Bình Dương” and “Văn phòng tư vấn tại TP. Hồ Chí Minh”. The first group is expanded initially. Preserve clear keyboard focus and `aria-expanded`/`aria-controls` semantics.
- Hoa viên row uses authentic `public/images/hvbd/vinh-hoa-mon.jpg`, clearly captioned as the hoa viên. The three city offices have no verified photos; use tasteful text/address cards without photographic placeholders.
- Locations (updated from user-provided information on 2026-10-21): (1) Hoa Viên Nghĩa Trang Bình Dương, Khu phố Bông Trang, phường Chánh Phú Hòa, TP. Hồ Chí Minh; (2) Chi nhánh 1 TP. Hồ Chí Minh, Số 99 Điện Biên Phủ, Phường Gia Định, TP.HCM, (028) 35.127.898 / 0778.454.544; (3) Chi nhánh 2 TP. Hồ Chí Minh, Số 140C Nguyễn Cư Trinh, Phường Cầu Ông Lãnh, TP.HCM, (028) 3 838 2389; (4) Chi nhánh 3 TP. Hồ Chí Minh, Số 253D Lương Định Của, Phường Bình Trưng, TP.HCM, 0947.542.279. Do not invent office images or local phone numbers.
- Map links: use the known exact Hoa Viên Maps URL from local content for the primary location. For other addresses, link a Google Maps search query encoded from the address; label such links “Xem trên bản đồ”. Open safely in a new tab.
- Global advisory number 0818 555 444 may be shown as a general consultation action, not misrepresented as each office's dedicated number.
- Responsive: 320px through large desktop, no horizontal overflow. At mobile width, region bars and each location/card stack naturally with 44px minimum tap targets.
- Integrate into existing `SiteHeader` / `SiteFooter`; update the “Thông Tin” menu and footer “Chi Nhánh” link to point to `/chi-nhanh` after the page exists.
- Metadata: page-specific title/description. Avoid saying there are more branches than listed.

## Acceptance

- Expand/collapse groups by pointer and keyboard; no unrelated page navigation.
- Address and map action are readable at mobile and desktop widths.
- No reference brand or Malaysian branch content on the resulting page.
- `npm run check` passes; visual spot-check desktop and mobile.
