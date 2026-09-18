import { absoluteUrl } from "@/lib/siteConfig";
import { jsonLdScript } from "@/lib/jsonLd";

export interface BreadcrumbCrumb {
  name: string;
  /** Site relative, with a trailing slash. */
  path: string;
}

export interface BreadcrumbJsonLdProps {
  crumbs: BreadcrumbCrumb[];
}

/**
 * Tells a search result where a page sits, so a destination lists as
 * Home > Destinations > Europe rather than as a bare URL. The nested pages are
 * two levels down and there is no visible breadcrumb trail on the site, which
 * is fine: BreadcrumbList describes the site's structure, not a widget.
 */
export function BreadcrumbJsonLd({ crumbs }: Readonly<BreadcrumbJsonLdProps>) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLdScript(data) }} />
  );
}
