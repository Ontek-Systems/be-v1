@AGENTS.md
# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project Philosophy

This is a **component-first** frontend project. Every single piece of UI — no matter how small — must be built as its own reusable component. There is no such thing as "too small to componentize." If a `<button>`, a `<label>`, an icon wrapper, a card, a badge, a divider, or even a styled `<span>` is used more than once (or even *could* be reused), it becomes its own component.

## Core Rules

### 1. Component-Based Architecture (STRICT)
- **Everything is a component.** Buttons, inputs, cards, headers, footers, nav items, section titles, badges, tags, avatars, dividers, icons, tooltips, modals, dropdowns — all separate, isolated components.
- Follow **atomic design** principles:
  - `components/ui/` → atoms (Button, Input, Badge, Icon, Divider, Heading, Text)
  - `components/common/` → molecules (Card, FormField, NavItem, SearchBar)
  - `components/sections/` → organisms (Header, Footer, HeroSection, PricingSection)
  - `components/layout/` → layout wrappers (Container, PageWrapper, Grid)
- Pages (`app/**/page.tsx`) should be **thin** — they only compose components together. No raw markup, no inline styling logic, no business logic directly inside a page file.
- No copy-pasted JSX blocks anywhere. If you find yourself duplicating structure, extract it into a component immediately.
- Every component gets its own file. Named exports, one component per file, colocate component-specific types in the same file.
- Props must be typed with TypeScript interfaces (`ComponentNameProps`), never `any`.

### 2. Styling — Tailwind CSS Only
- Use **Tailwind CSS** exclusively. No plain CSS files, no CSS modules, no styled-components, no inline `style={}` unless truly unavoidable (e.g. dynamic values Tailwind can't express).
- Global background color is **white**.
- Register the brand colors as custom Tailwind classes in `globals.css` using `@theme` (Tailwind v4) or the `theme.extend.colors` config (Tailwind v3) — do NOT hardcode hex values inline anywhere in components.

### 3. Brand Colors (register these exact names)
| Name | Hex | Usage |
|---|---|---|
| `primary-navy` | `#274957` | Primary text, headings, dark sections, button hover fill |
| `primary-sky` | `#70a7bf` | Muted/secondary text, eyebrow labels, input underlines |
| `primary-gold` | `#e6be48` | CTAs, accent rules, highlights, icons |
| `primary-cream` | `#effcff` | Tinted section backgrounds, chips, cards on white |
| `white` | `#FFFFFF` | Base background (Tailwind default `white`) |

**In `globals.css` (Tailwind v4 syntax):**
```css
@import "tailwindcss";

@theme {
  --color-primary-navy: #274957;
  --color-primary-sky: #70a7bf;
  --color-primary-gold: #e6be48;
  --color-primary-cream: #effcff;
}

body {
  @apply bg-white text-primary-navy;
}
```

- Always use the class names `bg-primary-navy`, `text-primary-navy`, `bg-primary-gold`, `bg-primary-cream`, etc. Never write `bg-[#274957]` or raw hex anywhere in JSX. If you need a brand colour inside an arbitrary value (e.g. a `shadow-[...]`), reference the token: `shadow-[inset_0_-2px_0_0_var(--color-primary-sky)]`.
- Use `primary-navy` as the dominant text colour, `primary-gold` for CTAs and accents, `primary-sky` for secondary text, and `primary-cream` to tint sections.
- **Do not use pure black.** Use `primary-navy` wherever a near-black is needed, including gradient overlays on images.

### 3a. Typography — two faces, and only two
| Token | Face | Used for |
|---|---|---|
| `font-display` | PP Woodland | Headings, the logo wordmark, pull quotes, big numerals |
| `font-sans` | Inter (default) | Everything else: body copy, nav, form labels, buttons, captions |

- Body text is Inter and inherits from `<body>` — do not add `font-sans` manually.
- Any heading that does not go through `<Heading>` must carry `font-display` explicitly, or it will silently fall back to Inter.
- Woodland ships **only** Ultralight (200) and Bold (700). Use `font-bold` on display type. Never use `font-semibold`/`font-medium` on `font-display` text — there is no such weight and the browser will fake it.
- **No italics on `font-display`.** Woodland has no italic file, so italic display text renders as a synthetic slant. Inter italic is real and is fine for body copy.

### 3b. Vertical rhythm — use the tokens, never raw `py-*`
Three section sizes exist, defined in `globals.css`. Every `<section>` uses one of them:

| Utility | Mobile / sm / lg |
|---|---|
| `section-y-sm` | 3rem / 3.5rem / 4rem — compact bands, page heroes |
| `section-y` | 4rem / 5rem / 7rem — the default for content sections |
| `section-y-lg` | 5rem / 7rem / 9rem — feature moments needing extra room |

Never hand-roll `py-14 sm:py-16 lg:py-20` style stacks on a section. If a new size seems necessary, change the token, not the section.

### 4. Responsiveness (STRICT — every breakpoint, every page)
Every page and every component must be fully responsive across **all** Tailwind breakpoints, with no exceptions:
- `xs` (custom, ~360–479px, add manually if needed since Tailwind has no default `xs`)
- `sm` (640px)
- `md` (768px)
- `lg` (1024px)
- `xl` (1280px)
- `2xl` (1536px)

Rules:
- Never ship a layout that only works at one or two breakpoints. Test/design mentally for mobile-first, then scale up.
- Use responsive utility stacks on every layout-affecting property: spacing, font size, grid/flex direction, columns, gaps — e.g. `text-base sm:text-lg md:text-xl lg:text-2xl`, `grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`.
- Navigation must collapse into a mobile menu below `md` and expand into a full nav bar above it.
- Images, videos, and embeds must always use fluid/responsive sizing (`w-full h-auto`, `aspect-*` utilities) — never fixed pixel widths.
- Typography must scale fluidly across breakpoints — no single fixed font-size for headings.

### 5. Design Quality
- Every design should feel premium and intentional, not templated or generic. Avoid default-looking Tailwind layouts (plain gray cards, default shadows, boring spacing).
- Use generous whitespace, clear visual hierarchy, and a considered type scale.
- Use gradients, soft shadows, rounded corners, and layered depth thoughtfully with the brand palette (e.g. `bg-gradient-to-br from-primary-cream to-primary-gold`).
- Every interactive element (buttons, links, cards, inputs) needs a deliberate hover/focus/active state — never leave default browser states.

### 6. Animations
- Use **Framer Motion** (or Tailwind's built-in transition utilities where Framer Motion is overkill) for meaningful, smooth animations throughout:
  - Page/section entrance animations (fade + slide up on scroll into view, using `whileInView`).
  - Staggered animations for lists/grids of cards.
  - Micro-interactions on buttons and interactive elements (scale on hover/tap, smooth color transitions).
  - Smooth transitions between states (menu open/close, modal open/close, tab switches).
- Animations should feel premium and subtle — never janky, never distracting, always eased (`ease-in-out` or custom cubic-bezier curves), with sensible durations (150–500ms for micro-interactions, 500–800ms for section reveals).
- Respect `prefers-reduced-motion` — provide reduced/no-motion fallbacks for accessibility.

### 7. Typography — No Hyphens
- No hyphens in any user-facing text content, anywhere in the app — headings, body copy, labels, buttons, captions, alt text, etc.
- Hyphens are only permitted when grammatically necessary (e.g. a required compound modifier that would be genuinely incorrect without one). Prefer rephrasing to avoid the hyphen first; use an en dash/em dash or restructure the sentence instead of a hyphen for breaks or asides.
- This rule applies to copy only, not code syntax, class names, or file names.

### 8. No Borders
- No borders on any element, anywhere — no `border`, `border-*`, `divide-*`, or ring utilities used as visual borders. Use spacing, background color contrast, or shadows to separate elements instead.
- **Exception: `/admin` routes.** The admin dashboard (`app/admin/**`, its components under `components/common/AdminSidebar.tsx`, `AdminLoginForm.tsx`, `AdminLoginPageContent.tsx`, `AdminDashboardShell.tsx`, `AdminDashboardGuard.tsx`, `SidebarNavItem.tsx`, and `components/common/stats/**`) intentionally uses hairline `border-primary-navy/12`-style borders plus real shadows (`shadow-lg`/`shadow-xl` etc.) for card and panel separation, since the flat/tinted-background approach used on the public site read as low contrast on data heavy admin screens. This exception does not extend to any public marketing page.

### 9. No Border Radius
- No border radius on any element, anywhere — no `rounded`, `rounded-*` utilities. All corners are sharp/square.
- **Exception: `/admin` routes** (same scope as the borders exception above) — cards, buttons, and panels there use `rounded-lg`/`rounded-2xl` for the more modern, data dashboard treatment.

### 10. No Pulsing Dot Tags
- No pulsing/animated dot indicators (e.g. the common "live" or "notification" pulsing dot badge) on any section of the site.

### 11. Buttons Must Show a Pointer Cursor
- Every button (and any clickable element styled as a button) must include `cursor-pointer`. Never leave a button on the default cursor.

### 12. Code Quality Expectations
- Strict TypeScript everywhere — no `any`, no implicit types.
- Consistent naming: PascalCase for components, camelCase for functions/variables, kebab-case for file names is NOT used — component files match their PascalCase component name (e.g. `Button.tsx`).
- Keep components small and single-responsibility. If a component file exceeds ~150 lines, consider splitting it further.
- Co-locate component-specific hooks/utilities next to the component when they're only used there; move to `lib/` or `hooks/` only when shared across multiple components.