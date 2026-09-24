# Preplanning Content Specification

## Overview
- **Content source:** `src/lib/preplanning-content.ts`
- **Route:** `src/app/ho-tro/chuan-bi-tu-som/page.tsx`
- **Interaction model:** click-driven “Read More” controls in the two introduction blocks; remaining sections are static with link and button hover states.
- **Adaptation:** follows the information architecture of Nirvana's pre-planning page while using original Vietnamese copy appropriate for Hoa Viên Bình Dương.

## Content Principles
- Use the Vietnamese term “chuẩn bị hậu sự từ sớm”.
- Present preparation as a responsible, caring and practical conversation rather than a fear-based message.
- Do not claim that Hoa Viên Bình Dương sells funeral insurance or pre-need insurance contracts.
- Do not promise protection against inflation, guaranteed pricing or specific payment terms.
- Encourage family discussion and consultation before making a decision.

## Page Structure
1. Hero: “Chuẩn Bị Từ Sớm”.
2. Introductory editorial: why preparation matters.
3. Definition: what early funeral planning includes.
4. Five benefits for the individual and five benefits for the family.
5. Related reading cards.
6. Six practical preparation steps.
7. Next-step links to funeral, burial and columbarium services.

## Read More Behavior
- Each introduction block initially displays only its first paragraph.
- Clicking “TÌM HIỂU THÊM” expands the remaining paragraphs inline; it must not navigate to another route.
- Expanded state changes the label to “THU GỌN” and rotates the plus icon by 45 degrees.
- The control exposes `aria-expanded` and `aria-controls`; content expands and collapses with a 500ms grid-row and opacity transition.

## Responsive Behavior
- Desktop: advantages use alternating two-column image/text rows; reading and resource cards use three columns.
- Mobile: all sections stack to one column with copy preceding calls to action.
