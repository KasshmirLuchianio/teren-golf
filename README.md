# Ileana Giusca — website concept and front-end prototype

A premium, editorial front-end concept for a Romanian women's vintage and
pre-owned fashion brand, built around the taste and expertise of its founder,
Ileana Giusca. Parisian vintage boutique by way of a French fashion magazine:
warm ivory paper, editorial serif headlines, hairline rules, and no rounded
"card" styling.

Next.js 15 (App Router) · TypeScript · Tailwind CSS 4 · Framer Motion ·
Lucide icons · mock data only, no backend.

## No images, anywhere

This prototype contains **no photography and no image files at all** — no stock
photos, no external URLs, no placeholder services. Every future image is
represented by a drawn placeholder built from tone, hairline frames, abstract
SVG geometry and a discreet label ("Founder editorial portrait", "Product
image", "Editorial image"). The only inline graphics are hand-drawn geometric
marks: the hero portrait composition, the category cover ornaments, the
wheel of fortune, and the social glyphs in `SocialIcons.tsx` (Lucide no longer
ships brand marks). The favicon is a typographic monogram declared as an inline
data URI in `layout.tsx`, so no asset file is needed.

`src/components/ui/Placeholder.tsx` is the single component behind all product
and editorial placeholders — change it once and every surface follows.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

Node 20+ is recommended. Note that `typescript` is pinned to v5 — Next.js reads
`tsconfig.json` paths through the TypeScript JS API, which TypeScript 7's native
port does not expose.

## Pages

| Route | What it is |
| --- | --- |
| `/` | Homepage: hero, latest drop with countdown, category blocks, Ileana's Selection, discovery module, newsletter, testimonials, community wardrobe |
| `/catalogue` | Full catalogue with filters, sorting and a mobile filter drawer. Accepts `?category=…` and `?sort=…` |
| `/products/[slug]` | Product page: gallery with zoom, measurements, Ileana's Note, related carousel (24 static pages) |
| `/story` | Ileana's Story — text-led editorial |
| `/contact` | Contact form with validation |
| `/wishlist`, `/bag`, `/account` | Saved pieces, bag, and a mock account area |
| `/faq`, `/shipping-and-returns`, `/measurement-guide` | Service pages |
| `/terms`, `/privacy` | Legal placeholders |

## Structure

```
src/app/                 Routes (App Router), global stylesheet, metadata
src/components/
  layout/                Header, mobile menu, bag drawer, search overlay, footer
  home/                  The eight homepage sections
  product/               Product card, gallery, actions, wishlist button, carousel
  catalogue/             Catalogue view and filter panel
  forms/                 Contact form
  wheel/                 "A little cadeau" floating button and wheel of fortune
  ui/                    Placeholder, Button, Container, Modal, Reveal, Countdown,
                         Accordion, SectionHeading, PageHeader, NewsletterForm,
                         SocialIcons
src/lib/
  products.ts            Mock catalogue (24 pieces) and category data
  store.tsx              Wishlist / bag / overlay state, persisted to localStorage
  search.ts              Front-end simulation of the planned intelligent search
  navigation.ts          Navigation and social links
```

## Design system

Defined as Tailwind theme tokens in `src/app/globals.css`:

- **Colour** — warm ivory `#f7f2e9` (the page), cream, butter, parchment,
  charcoal `#1c1917`, burgundy `#6b1f2b`, muted olive `#656b4e`, warm grey, and
  antique gold `#a98a4b` used sparingly (one accent per composition).
- **Type** — Cormorant Garamond for headings, Jost for body, navigation, labels
  and buttons, Mrs Saint Delafield for the "Selected by Ileana" signature.
- **Utilities** — `.label` (letterspaced small caps), `.paper` (woven texture),
  `.placeholder-surface`, `.link-underline`.

## Interactions (all front-end, all mock)

Mobile menu, search overlay with live mock search, wishlist toggles persisted to
localStorage, bag drawer and bag page, catalogue filters and sorting, mobile
filter drawer, drop countdown, newsletter and contact validation, wheel of
fortune behind an email gate, product gallery selection and zoom simulation,
reserve and WhatsApp enquiry, sold-out states, related-product carousel.

Motion is deliberately restrained — short fades and rises — and every animation
respects `prefers-reduced-motion`.

## Copy

All copy is editable placeholder text written in the brand's voice. The story
page deliberately contains no dates, sales figures, certifications or awards;
those sections are marked for Ileana to complete in her own words. Prototype
notes appear discreetly wherever a form or reward is not yet connected to a real
system.
