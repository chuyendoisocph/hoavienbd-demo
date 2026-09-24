# Read More Behavior Specification

## Overview
- **Targets:** Home culture, Who We Are values, funeral service editorial and accordions, burial editorial and product descriptions, columbaria editorial and product descriptions, and pre-planning introductions.
- **Reference:** Nirvana pages use Divi toggle modules for text links paired with a circular plus icon.
- **Interaction model:** Click-driven inline disclosure.

## Behavior
- The collapsed state shows the section's lead paragraph and a `TÌM HIỂU THÊM` button.
- Activating the button expands the additional Vietnamese copy directly beneath the lead paragraph without navigation.
- The expanded label is `THU GỌN`; the plus icon rotates 45 degrees.
- Each disclosure operates independently.
- Controls expose `aria-expanded` and `aria-controls`; hidden panels expose `aria-hidden`.
- Transition: grid row `0fr` to `1fr` plus opacity over 500ms for editorial disclosures and 300ms for compact accordion items.

## Navigation Exception
- Rectangular CTAs remain links. Examples include the homepage product button, consultation/quote buttons, tour booking, and recruitment contact.
- A plus icon must not be used for a navigation-only CTA.

## Content Direction
- Additional text is adapted for Hoa Viên Bình Dương and must not reproduce Nirvana-specific claims, prices, trust-fund figures, awards, or service guarantees.
- Copy should add useful detail rather than repeat the visible lead paragraph.

## Responsive Behavior
- Desktop, tablet and mobile retain the inline expansion within the existing content column.
- Expanded content must not introduce horizontal overflow.
- Button labels may wrap naturally but must remain within the viewport.
