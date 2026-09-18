# Blissful Escapes

Marketing site for Blissful Escapes, a boutique luxury travel
business in Ormskirk, Lancashire.

Next.js 16 App Router, React 19, Tailwind CSS v4, Framer Motion. The site is
exported as static files and deployed to GitHub Pages.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export into ./out
npm run lint
```

The site serves from `/` unless `NEXT_PUBLIC_BASE_PATH` is set. The GitHub Pages
preview sets it to `/be-v1`; on its own domain it stays empty.

## Configuration

Copy `.env.example` to `.env.local` and fill it in. All three variables are read at
**build time only**, because the site is a static export and there is no server
to read them at request time.

| Variable | What breaks without it |
|---|---|
| `NEXT_PUBLIC_API_URL` | The enquiry form falls back to `http://localhost:5000/api/v1`, which does not exist for a visitor. The build prints a warning. |
| `NEXT_PUBLIC_BASE_PATH` | Nothing on the real domain. The Pages workflow defaults it to `/be-v1`; set the repository variable to `/` once the site has its own domain. |
| `NEXT_PUBLIC_SITE_URL` | The build treats itself as the GitHub Pages preview: canonical URLs point at the preview and `robots.txt` serves `Disallow: /`, so the preview cannot compete with the live domain. |

For deploys, they are set as GitHub Actions repository variables and read by
`.github/workflows/deploy-pages.yml`.

## Where things live

| Path | What is in it |
|---|---|
| `app/` | Routes. Pages are thin and only compose sections. |
| `components/ui/` | Atoms: Button, Input, Heading, icons. |
| `components/common/` | Molecules: cards, form fields, the lightbox, the date picker. |
| `components/sections/` | Page sections. |
| `components/layout/` | Container, PageMain. |
| `lib/` | Content data, API clients, site config. |

Content lives in `lib/` as typed data, not in the components. Adding a
destination to `lib/destinationDetails.ts` gives you the page, the nav dropdown
and the sitemap entry.

## Before writing any copy

`COPYWRITING.md` is the source of truth for every user facing word on the site,
and `CLAUDE.md` holds the architectural and styling rules. Read both first.

## Backend

The API is a separate service. This repo talks to it at:

- `POST /trip-enquiries` — the public enquiry form, and the only call it makes
