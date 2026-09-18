import type { ReactNode } from "react";

export interface PageMainProps {
  children: ReactNode;
  className?: string;
}

/**
 * The single <main> every page uses. It carries the id the skip link jumps to,
 * which is why it is a component rather than a repeated tag: an id that only
 * exists on six pages out of seven is worse than no skip link at all.
 *
 * tabIndex -1 so the jump actually moves focus rather than only the viewport.
 * Browsers will not focus a plain <main>, and Safari in particular scrolls
 * without moving the caret, which leaves the next Tab back up in the header.
 */
export function PageMain({ children, className = "" }: Readonly<PageMainProps>) {
  return (
    <main id="main" tabIndex={-1} className={`flex-1 focus:outline-none ${className}`}>
      {children}
    </main>
  );
}
