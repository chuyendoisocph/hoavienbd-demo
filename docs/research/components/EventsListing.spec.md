# Events listing

## Components

- `FeaturedEvent`: receives one `EventItem` and renders an indigo section containing centered intro plus a large photographic story card.
- `AnnualEventsGrid`: receives an array of `EventItem` and renders a white editorial grid.

## EventItem shape

`slug`, `title`, `occasion`, `description`, `image`, `imageAlt`, and optional `featured`.

## Visual behavior

- Featured card uses a dark gradient overlay, white copy and a text action with arrow.
- Grid is 1 column mobile, 2 columns from tablet; image ratio 16:10.
- Cards use subtle borders/shadows, no excessive rounded corners.
- Links target `/su-kien/<slug>` and lead to statically generated detail pages.
