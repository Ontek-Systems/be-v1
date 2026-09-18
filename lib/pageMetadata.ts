import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/siteConfig";

export interface PageMetadataInput {
  /** Bare page name. The " | Blissful Escapes" suffix comes from the root layout template. */
  title: string;
  /** Search result description, 140 to 160 characters. Longer is truncated mid sentence. */
  description: string;
  /** Site relative, with the trailing slash the site actually serves, e.g. "/about/". */
  path: string;
  /** Site relative path to a share image. Falls back to the site default. */
  image?: string;
  imageAlt?: string;
}

/** Known to be 1200x630, which is why it is the only image whose size we state. */
const DEFAULT_SHARE_IMAGE = "/assets/images/og-default.jpg";

/**
 * Facebook, LinkedIn and X all decline to render a WebP og:image, and a page
 * whose only share image is WebP shares as a bare link with no card at all.
 * Half the destination and holiday type heroes are WebP, so those pages fall
 * back to the default card rather than losing the image entirely.
 */
function shareImageFor(image?: string): { url: string; sized: boolean } {
  const supported = /\.(jpe?g|png|gif)(\?|$)/i.test(image ?? "");
  return supported
    ? { url: absoluteUrl(image as string), sized: false }
    : { url: absoluteUrl(DEFAULT_SHARE_IMAGE), sized: true };
}

/**
 * Every page's metadata goes through here, so a canonical URL and an Open Graph
 * card cannot be forgotten on one page and present on the other eight. Without
 * a canonical, `trailingSlash: true` leaves /about and /about/ looking like two
 * pages carrying the same copy.
 */
export function pageMetadata({
  title,
  description,
  path,
  image,
  imageAlt,
}: PageMetadataInput): Metadata {
  const share = shareImageFor(image);

  /* Width and height are only declared for the default card, whose dimensions
     we know. The hero photographs are 1597x1200 and were being declared as
     1200x630 regardless, which is what made shared links crop oddly. Left
     undeclared, each platform reads the real size off the file. */
  const openGraphImage = share.sized
    ? { url: share.url, width: 1200, height: 630, alt: imageAlt ?? title }
    : { url: share.url, alt: imageAlt ?? title };

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url: absoluteUrl(path),
      title: `${title} | Blissful Escapes`,
      description,
      images: [openGraphImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Blissful Escapes`,
      description,
      images: [share.url],
    },
  };
}
