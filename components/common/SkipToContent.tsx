/**
 * The first thing in the tab order on every page. The header carries a logo,
 * seven nav items and two dropdowns holding twenty five links between them, so
 * without this a keyboard reader walks all of it again on every page.
 *
 * Visually hidden until it takes focus, which is the point: it is only ever
 * useful to somebody who is already tabbing.
 */
export function SkipToContent() {
  return (
    <a
      href="#main"
      className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary-navy focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-white focus:outline-2 focus:outline-offset-2 focus:outline-primary-gold"
    >
      Skip to content
    </a>
  );
}
