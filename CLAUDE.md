@AGENTS.md
# CLAUDE.md

Blissful Escapes: a luxury travel planning site for Emma Carrigan, Ormskirk, Lancashire.
Next.js, TypeScript, Tailwind v4, Framer Motion.

## Copy

Read `COPYWRITING.md` before writing or changing any user facing words, then just write it. No
audits, no asking for sign off on wording. Report briefly what changed. Ignore `docs/archive/`,
which holds superseded versions of these files.

## Design direction

Editorial and photography led, like a good travel magazine rather than a SaaS landing page. Big
confident photography, strong Woodland headings, generous whitespace, sharp square edges, a
restrained palette. Let the images and the type do the work. Avoid the generic AI site look:
gradient washes, cards on cards, icon grids, fade up on every element, badges everywhere.

After any visual change, run the site and screenshot the affected page at mobile and desktop
widths, and judge the result from the screenshot, not the code.

## Hard visual rules

- **Colours** (tokens in `app/globals.css`, never raw hex in JSX): `primary-navy` #274957 for text
  and dark sections, `primary-sky` #70a7bf for secondary text and labels, `primary-gold` #e6be48
  for CTAs and accents, `primary-cream` #effcff for tinted sections. White background.
  Arbitrary values reference tokens, e.g. `var(--color-primary-sky)`.
- **No pure black**, except the image scrims in `HolidayTypeCarouselSlide.tsx`,
  `PageHero.tsx` and the matching gradient behind the header bars in `Header.tsx`,
  where black reads as shadow and navy reads as a blue wash.
- **No borders and no border radius.** Separate things with space, background contrast or
  shadow.
- **Display numeral taglines end in a full stop**, set in the display face as part of the numeral
  itself and coloured as an accent, e.g. `02` navy with a gold stop. Agreed 10 Sept 2026,
  replacing the rules that used to sit under those numbers. Never fake the stop with a positioned
  square or circle: it never sits on the baseline.
- **No pulsing dot indicators.**
- **Every button has `cursor-pointer`** and a deliberate hover and focus state.

## Type

- `font-display` (PP Woodland) for headings, the wordmark, pull quotes and big numerals. It only
  has weights 200 and 700: use `font-bold`, never semibold or medium, and never italic.
- Everything else is Inter, inherited from `<body>`. Headings not using `<Heading>` need
  `font-display` explicitly.

## Layout

- Sections use the spacing tokens `section-y-sm`, `section-y` or `section-y-lg`, never hand
  rolled `py-*` stacks.
- Mobile first and responsive at every breakpoint (`xs` is registered at 360px). The nav
  collapses to a mobile menu below `md`.
- Images use fluid sizing (`w-full`, `aspect-*`), never fixed pixel widths.

## Motion

Framer Motion, used sparingly: section reveals, menu and modal transitions, small hover
feedback. Eased, 150 to 500ms for interactions, up to 800ms for reveals. Respect
`prefers-reduced-motion`.

## Code

- Components in `components/ui` (atoms), `components/common` (molecules), `components/sections`
  (organisms), `components/layout`. Pages in `app/**/page.tsx` stay thin and compose sections.
- Extract a component when markup repeats or a file gets unwieldy, not for every span.
- One component per file, named export, PascalCase filename, typed `ComponentNameProps`, no `any`.
