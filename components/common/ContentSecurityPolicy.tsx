import { API_URL } from "@/lib/apiConfig";

/**
 * The site's Content Security Policy, carried as a meta tag because a static
 * export has no server to send a header from. `headers()` in next.config.mjs
 * does nothing under `output: export`, and GitHub Pages sends no headers of its
 * own, so this is the only way to ship a policy at all.
 *
 * Two directives cannot travel in a meta tag and are therefore absent rather
 * than forgotten: `frame-ancestors`, which is the clickjacking defence, and
 * `report-uri`. Both need a real header. If the site ever moves to a host that
 * sends headers (Vercel, Netlify, Cloudflare), move this whole policy into a
 * header and add `frame-ancestors 'none'` and `X-Content-Type-Options: nosniff`
 * while you are there.
 *
 * `'unsafe-inline'` is on script-src because Next.js hydrates through inline
 * bootstrap scripts and a nonce has to be minted per request, which a
 * prerendered file cannot do. The policy still refuses any script from an
 * origin we did not list, which is what blocks the injected third party script
 * that most site compromises actually consist of.
 */

/* The enquiry endpoint is usually on another origin, so connect-src has to name
   it or the form fails silently for every visitor. */
function apiOrigin(): string {
  try {
    return new URL(API_URL).origin;
  } catch {
    return "";
  }
}

function policy(): string {
  const connectSrc = ["'self'", apiOrigin()].filter(Boolean).join(" ");

  return [
    "default-src 'self'",
    "base-uri 'self'",
    "object-src 'none'",
    "frame-src 'none'",
    /* Inline styles: Framer Motion animates through the style attribute. */
    "style-src 'self' 'unsafe-inline'",
    "script-src 'self' 'unsafe-inline'",
    /* data: covers the SVGs Tailwind inlines into the stylesheet. */
    "img-src 'self' data:",
    "font-src 'self'",
    `connect-src ${connectSrc}`,
    /* The enquiry form posts through fetch, so nothing navigates on submit. */
    "form-action 'self'",
    "manifest-src 'self'",
    "media-src 'self'",
    "upgrade-insecure-requests",
  ].join("; ");
}

export function ContentSecurityPolicy() {
  /* Development needs 'unsafe-eval' for React Refresh and a websocket for hot
     reload, both of which this policy refuses. Shipping it in production only
     keeps the dev server working and costs the live site nothing. */
  if (process.env.NODE_ENV !== "production") return null;

  return <meta httpEquiv="Content-Security-Policy" content={policy()} />;
}
