export interface NavLinkItem {
  href: string;
  label: string;
}

/**
 * Hash entries scroll the homepage in place and resolve to "/#hash" from any
 * other page. Everything else is a real route.
 */
export const navLinks: NavLinkItem[] = [
  { href: "/about", label: "About us" },
  { href: "/holidays", label: "Types of holiday" },
  { href: "/destinations", label: "Destinations" },
  { href: "/gallery", label: "Gallery" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];
