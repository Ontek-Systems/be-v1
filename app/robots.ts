import type { MetadataRoute } from "next";
import { absoluteUrl, isPreviewDeployment, siteUrl } from "@/lib/siteConfig";

/* Required by `output: export`: there is no server to generate this per request. */
export const dynamic = "force-static";

/**
 * The GitHub Pages preview and the live site are the same build with a
 * different NEXT_PUBLIC_SITE_URL. A preview carries identical copy to the real
 * site, so it is closed to crawlers entirely rather than left to compete with
 * the domain it is a copy of.
 */
export default function robots(): MetadataRoute.Robots {
  if (isPreviewDeployment) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
    /* Host takes a bare hostname. It was emitting the full origin with a
       trailing slash, which is malformed and simply ignored by the crawlers
       that read the directive at all. */
    host: new URL(siteUrl).host,
  };
}
