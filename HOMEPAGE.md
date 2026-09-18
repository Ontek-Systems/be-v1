# Homepage: how it looks and how it works

The homepage is the only page currently built, and it is the reference every other page is built
against. This file records what it actually does, so the rest of the site can be assembled from
the same parts rather than reinvented page by page.

Read alongside `CLAUDE.md` (the hard rules: no borders, no radius, Tailwind only, brand colours,
component-first) and `COPYWRITING.md` (every user facing word). Where this file and those two
disagree, they win, and this file is wrong and should be corrected.

---

## 1. The shell

`app/layout.tsx` wraps every page and already provides:

| Piece | What it does |
|---|---|
| `TripPlanProvider` | Carries the hero enquiry into the contact form further down. Any page with a hero form needs to be inside it, and it is already global. |
| `LoadingScreen` | First paint cover. Global, do not add a second one. |
| `PageScrollbar` | Custom scrollbar. The native one is hidden in `globals.css`, so a page that renders its own scroll container must account for that. |
| `html` classes | `woodland.variable` and `inter.variable`, plus `antialiased`. |
| `body` classes | `min-h-full flex flex-col font-sans`, white ground, `text-primary-navy`. |

So a new page file is only ever:

```tsx
export default function SomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">{/* sections */}</main>
      <Footer />
    </>
  );
}
```

`Header` and `Footer` are repeated per page rather than hoisted into the layout, because the
admin routes under `app/admin` use neither. Keep that arrangement.

`metadata` is exported per page. The homepage sets the pattern:
`"Blissful Escapes | Luxury Travel, Personally Planned"`.

---

## 2. Tokens

All defined in `app/globals.css` under `@theme`. Never write a hex value in a component.

**Colour**

| Token | Hex | Where it actually gets used on the homepage |
|---|---|---|
| `primary-navy` | `#274957` | All body text, all headings, the contact section ground, image scrims |
| `primary-sky` | `#70a7bf` | Footer ground, holiday types overlay, primary button fill, field underlines |
| `primary-gold` | `#e6be48` | Eyebrow underlines, CTA accents, arrows, the 1px rule above the contact card |
| `primary-cream` | `#effcff` | Tinted section grounds (associates, gallery), body copy on dark grounds |
| `primary-band` | `#47788f` | The contact band above the nav only. A step between navy and sky, white text at 4.8:1 |
| `whatsapp` | `#25d366` | The WhatsApp mark only |

**Type.** Two faces, no more. `font-display` is PP Woodland at 200 and 700 only, for headings and
the logo. `font-sans` is Inter and is inherited from `body`, so never write `font-sans` by hand.
No `font-semibold` or `font-medium` on display type, and no italics on it either.

**Breakpoints.** Tailwind's defaults plus a custom `xs` at `22.5rem` (360px). The homepage leans
on `xs` heavily for small phones, so use it rather than letting 360px inherit the base size.

**`--header-total`.** The measured height of the contact band plus nav bar. The `Header` writes it
onto `:root` at runtime with a `ResizeObserver`; the `7.5rem` in `globals.css` is only the pre
hydration guess so the hero does not jump. Any full height hero must offset by it, and every
`section[id]` already gets `scroll-margin-top: calc(var(--header-total) + 1rem)` for free.

---

## 3. Vertical rhythm

Three section sizes exist and a `<section>` uses one of them. Never hand roll `py-14 sm:py-16`.

| Utility | Mobile / sm / lg | Used by |
|---|---|---|
| `section-y-sm` | 3 / 3.5 / 4rem | Associates strip. Also the right size for a page hero band |
| `section-y` | 4 / 5 / 7rem | Every content section on the homepage |
| `section-y-lg` | 5 / 7 / 9rem | Reserved for feature moments, unused so far |

`Container` is the single horizontal gutter for the whole site:
`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-8`. Every section wraps its content in one.
Full bleed imagery sits outside the `Container` and the text inside it.

---

## 4. Section anatomy

Nearly every section on the homepage is the same three part shape.

```tsx
<section id="destinations" className="section-y">
  <Container>
    <div className="mb-12 text-center sm:mb-16 lg:text-left">
      <SectionEyebrow>Destinations</SectionEyebrow>
      <Heading as="h2" size="lg">The places we get asked for most</Heading>
      <Text size="lg" className="mx-auto mt-[13px] max-w-2xl text-primary-navy lg:mx-0">
        …
      </Text>
    </div>

    {/* the content */}
  </Container>
</section>
```

Notes that matter:

- **Centred on phone, left aligned from `lg`.** `text-center lg:text-left`, with `mx-auto lg:mx-0`
  on the intro paragraph so it re-anchors with the heading. Every section does this except
  Testimonials and Contact, which stay centred throughout.
- **Header block bottom margin** is `mb-12 sm:mb-16` in most sections, `mb-10 sm:mb-14 lg:mb-16` in
  Destinations. Pick one of those, do not invent a third.
- **`mt-[13px]`** between heading and intro paragraph. It is deliberate and it is consistent.
- **`max-w-2xl`** on intro paragraphs.
- `SectionEyebrow` carries its own `mb-9`, so nothing goes between it and the heading. Never pass
  it a margin override like `mb-0`: Tailwind decides clashing classes by stylesheet order, not
  attribute order, so `mb-9` still wins and any margin added to the heading stacks on top.

### 4a. Hero spacing (homepage and every `PageHero`)

Every page opens with a full height hero, and the inner pages use `components/sections/PageHero.tsx`.
Its text block spaces exactly like the homepage About section, and its title uses the homepage hero
scale. Do not change one without the others.

| Property | Value |
|---|---|
| Bottom scrim | `HeroScrim` (`from-black/80 via-black/40 via-50% to-transparent`), shared by both heroes. No full image wash, no vignette. Do not darken it |
| Top scrim | The `Header`'s own `from-black/70 to-transparent`, `h-[calc(100%+3rem)]`. Global, so every hero gets it. Do not darken it |
| Text shadow | `hero-text-shadow` utility in `globals.css`: two stacked `drop-shadow(0 3.36px 18.48px)` at black 1 and 0.2. Never a one off `drop-shadow-[...]` |
| Section height | `min-h-dvh`. Never a fixed `min-h-[..rem]`, or the white page shows under it on tall screens |
| Content top offset | `pt-[calc(var(--header-total)+1rem)]`, content vertically centred |
| Tagline / eyebrow → title | The eyebrow's own `mb-9`, nothing on the `h1`. Same as the About section |
| Title scale | `text-[2.36rem] xs:text-[2.831rem] sm:text-[3.775rem] lg:text-[3.63rem]`, `leading-[0.99]`, `max-w-3xl` |
| Title → subtitle | `mt-[22px]`, same as the About section |
| Subtitle | `text-sm sm:text-base lg:text-lg leading-relaxed text-white`, `max-w-3xl` |
| Subtitle → footnote (PageHero only) | `mt-6` |

### Grounds, in page order

| Section | id | Ground |
|---|---|---|
| Hero | `home` | Photographic carousel, full `min-h-dvh` |
| Associates | — | `bg-primary-cream`, `section-y-sm` |
| About | `about` | White |
| Holiday types | `holiday-types` | Image with `bg-primary-sky/80` over it, `relative overflow-hidden` |
| Destinations | `destinations` | White |
| Gallery | `gallery` | `bg-primary-cream` |
| Testimonials | `testimonials` | White, `overflow-hidden` for the marquee |
| Contact | `contact` | `bg-primary-navy` |
| Footer | — | `bg-primary-sky` |

The rhythm is white, tint, white, dark tint, white, tint, white, navy. A new page should alternate
the same way rather than running four white sections together. On any dark ground, pass
`dark` to `SectionEyebrow`, add `text-white` to `Heading`, and use `text-primary-cream` for body.

---

## 5. Typography atoms

Do not style a heading by hand. `Heading` sets `font-display font-bold tracking-tight text-primary-navy`
and one of four sizes:

| `size` | Scale |
|---|---|
| `xl` | `text-4xl xs:text-5xl sm:text-6xl lg:text-7xl`, leading 1.05 |
| `lg` | `text-3xl xs:text-4xl sm:text-5xl lg:text-6xl`, leading 1.1 — **every `h2` on the homepage** |
| `md` | `text-2xl xs:text-3xl sm:text-4xl` |
| `sm` | `text-xl xs:text-2xl sm:text-3xl` |

`Text` handles body copy at `sm`, `base` and `lg`; section intros use `lg`. The hero `h1` is the one
place that overrides `Heading` with explicit sizes, because it is tuned against the carousel.

`SectionEyebrow` is locked site wide: `0.64rem`, bold, uppercase, `tracking-[0.207em]`, with an
underline that scales in on an `IntersectionObserver`. Only four things vary, and nothing else may:
`align` (`left` / `centered`), `underlineColor`, `dark`, and the label text.

That `0.64rem` bold uppercase `tracking-[0.207em]` combination is the site's small label style and
recurs on destination card eyebrows, the "Explore region" cue and the index numerals. Reuse it
rather than picking a new small caps size.

---

## 6. Motion

Framer Motion, `whileInView`, `once: true`. The house values:

- **Section reveals:** `initial={{ opacity: 0, y: 20–24 }}`, `duration: 0.55–0.6`, `ease: "easeOut"`.
- **Side by side blocks** (About) come in from `x: -24` and `x: 24` with a `0.1` delay on the second.
- **Grid stagger:** `delay: (index % n) * 0.07`. Gallery uses `% 6`, testimonials `% length`,
  destination cards `(index % 2) * 0.08`.
- **Viewport margin:** `-40px` for cards, `-60px` to `-120px` for larger blocks. Omitted where the
  element is already tall.
- **Micro interactions:** 150–300ms. Hover colours at `duration-150`, image scale at
  `duration-700 ease-out group-hover:scale-105`.
- **Custom easing** where it needs to feel expensive: `[0.22, 1, 0.36, 1]`.

`prefers-reduced-motion` is handled two ways and both are required. `globals.css` flattens all CSS
animation and transition durations globally, and any component running a JS driven animation calls
`useReducedMotion()` from Framer Motion and branches. Follow the second one in every new animated
component — the global rule does not reach Framer Motion.

Auto-playing things stop on hover: `stopOnMouseEnter: true`, `stopOnInteraction: false`.

---

## 7. Interactive parts

**Buttons.** `Button` and `ButtonLink` share `buttonStyles.ts` so a real button and a link that
looks like one cannot drift. Variants are `primary` (navy fill, with the `ButtonSweep` gold
underline that rises to fill on hover), `sky` (the same treatment in sky, used only on the hero
enquiry bar), `ghost` and `gold`. Do not shrink a button with `py-*!` or `text-*!` overrides. `focusTone="onDark"` on photographic or dark grounds. `cursor-pointer`
is in `buttonBase`, so it is never forgotten.

**Fields.** `Input`, `Select` and `DatePicker` all draw the same underline field and share
`components/ui/fieldStyles.ts`. Two axes:

- `tone`: `default` (cream ground), `onWhite` (white card, e.g. the contact form) and `onImage`
  (translucent sky over photography, e.g. the hero bar).
- `fieldSize`: `md` standing forms, `sm` the compact hero bar.

The field is an inset box shadow underline, never a border. Always wrap in `FormField`, which owns
the uppercase label.

**Nav.** `Header` is fixed, transparent over the hero, and swaps to `bg-primary-sky` past 24px of
scroll. Full nav from `lg`, `MobileMenuPanel` below it. `NavDropdown` for Destinations and Holiday
types. The contact band above it (`TopContactBar`) is a single drifting `ContactBarTicker` row
below `xl` and a static split row from `xl` up.

**Cards.** Image cards are a `Link` with `group`, a `fill` `Image` that scales on hover, a navy
gradient scrim, and content absolutely positioned at the bottom. Hover cues use `LearnMoreCue` on
desktop, but touch screens never hover, so a card that must be tappable on a phone shows its cue
unconditionally the way `DestinationCard` does.

---

## 8. Responsive behaviour, and the three real breakpoints

Everything is written mobile first and must work at `xs`, `sm`, `md`, `lg`, `xl` and `2xl`. In
practice the homepage makes its decisions at three places:

- **`sm` (640px)** — grids go one to two columns; the destination card reveals its index numeral
  and tagline.
- **`lg` (1024px)** — the big one. Nav expands from the mobile panel; section headers switch from
  centred to left aligned; Destinations swaps a card grid for a sticky preview plus index list; the
  hero enquiry bar goes from two fields to four; the hero sub line appears.
- **`xl` (1280px)** — the contact band stops carouselling and lays out statically.

Where phone and desktop want genuinely different structures, the homepage builds both and toggles
with `lg:hidden` / `hidden lg:grid` rather than bending one layout to cover both. Destinations is
the worked example. That is the sanctioned approach when a layout will not scale.

Images are always `fill` or `w-full h-auto` inside an `aspect-*` box, never fixed pixels, and always
carry `sizes`. Public asset paths are prefixed with `basePath` from `lib/siteConfig.ts`, which is `/be-v1` on the GitHub Pages preview.

---

## 9. Content and copy conventions

- Section labels are nouns: "Destinations", "About us", "Gallery", "Reviews", "Types of trips".
  The exceptions earn it by carrying proof or an invitation: "Five star rated on Google",
  "Ready when you are".
- Headings are short and descriptive, sentence case, no full stop.
- No hyphens, en dashes, em dashes or exclamation marks anywhere in user facing copy.
- The verb is **plan**, **tell us** or **start**. Never book, search, or check availability.
- Content lives in `lib/`, not in components: `destinationDetails`, `holidayTypeDetails`,
  `testimonials`, `galleryImages`, `accreditations`, `navLinks`, `contactDetails`, `whyBookReasons`.
  A new page adds a `lib/` module rather than inlining arrays into the section.

---

## 10. Known state before building the rest of the site

Two things will bite immediately:

1. **`NavLink` deadens every non-homepage link.** It intercepts the click and calls
   `preventDefault()` on anything that is not a homepage hash, because only `/` exists right now.
   `Footer` does the same in its own handler. Both must be unpicked as real routes land.
2. **The other pages were deleted from the working tree** and are not in the current build. The
   deletions are uncommitted, so `git checkout -- <path>` brings any of them back. What went:

   | Route | Its section components |
   |---|---|
   | `/about` | `components/sections/about/` — hero, story, values, cta |
   | `/contact` | `components/sections/contact/` — hero, form, faq |
   | `/destinations/[caribbean, dubai-middle-east, europe, southeast-asia]` | `components/sections/destination/` — a `DestinationPageTemplate` plus hero, intro, highlights, experiences, other, cta |
   | `/gallery` | `components/sections/gallery/` — hero, holiday type section |
   | `/holidays/[slug]` | `components/sections/holiday/` — a `HolidayTypePageTemplate` plus hero, intro, features, other, cta |
   | `/testimonials` | `components/sections/testimonials/` — hero, content |

   Both template components are worth reading before designing anything new, since the
   destination and holiday type pages are already parameterised off `lib/destinationDetails` and
   `lib/holidayTypeDetails`. Recover and review first, rather than building over the top.

   Also deleted: `public/assets/images/legalities/` (the old colour accreditation artwork). The
   live path is `public/assets/images/legals/white/`, which `lib/accreditations.ts` points at.
