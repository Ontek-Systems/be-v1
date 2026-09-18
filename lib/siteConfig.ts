/**
 * Where this build believes it is deployed, and everything that follows from
 * that: canonical URLs, the sitemap, Open Graph tags and the robots rules.
 *
 * The site is exported as static files (`next.config.mjs`), so none of this can
 * be worked out at request time. It is baked in at build time instead, which
 * means `NEXT_PUBLIC_SITE_URL` has to be set in the build environment for a
 * production deploy.
 */

/**
 * The sub path the site is served from: "" on its own domain, "/be-v1" on the
 * GitHub Pages preview. next.config.mjs reads the same variable, so the two
 * cannot drift. Image paths are built with it on the front, because
 * `images.unoptimized` means next/image hands the src straight through without
 * prefixing anything.
 */
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH?.trim() || "").replace(/\/+$/, "");

/** No trailing slash. `metadataBase` and the sitemap both join onto this. */
/* "" rather than undefined is what an unset GitHub Actions variable looks like. */
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim() || undefined;

export const siteUrl = (configuredSiteUrl ?? `https://ontek-systems.github.io${basePath}`).replace(
  /\/+$/,
  "",
);

/**
 * A build with no site URL of its own is the GitHub Pages preview. It carries
 * the same copy as the real site will, so letting it be indexed would put the
 * live domain into a duplicate content fight with its own staging copy. Set
 * NEXT_PUBLIC_SITE_URL on the production build and this flips off.
 */
export const isPreviewDeployment = !configuredSiteUrl;

export const siteName = "Blissful Escapes";

export const defaultDescription =
  "Boutique travel planning with a single point of contact. Tell us when and where you want to go, and we will take it from there.";

/**
 * Absolute URL for a site relative path, e.g. absoluteUrl("/about/").
 *
 * Tolerates a path that already carries the base path, which the image
 * constants in lib/ do. Without that, a destination hero would come out as
 * .../<base>/<base>/assets/... in the Open Graph card and render as a broken
 * image everywhere the link is shared.
 */
export function absoluteUrl(path: string): string {
  const rooted = path.startsWith("/") ? path : `/${path}`;
  const withoutBase =
    basePath !== "" &&
    siteUrl.endsWith(basePath) &&
    rooted.startsWith(`${basePath}/`)
      ? rooted.slice(basePath.length)
      : rooted;
  return `${siteUrl}${withoutBase}`;
}
