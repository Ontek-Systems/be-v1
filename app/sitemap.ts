import type { MetadataRoute } from "next";
import { destinationDetails } from "@/lib/destinationDetails";
import { holidayTypeDetails } from "@/lib/holidayTypeDetails";
import { absoluteUrl } from "@/lib/siteConfig";

/* Required by `output: export`: there is no server to generate this per request. */
export const dynamic = "force-static";

/**
 * Generated from the same data the pages are generated from, so a new
 * destination or holiday type appears here without anyone remembering to add
 * it.
 *
 * Trailing slashes throughout, because `trailingSlash: true` in the Next config
 * means that is the URL actually served.
 */

/* Static export cannot know when a page last changed, so the build date is the
   most honest answer available. */
const lastModified = new Date();

interface Entry {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}

const staticEntries: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/about/", priority: 0.8, changeFrequency: "monthly" },
  { path: "/contact/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/destinations/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/holidays/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/testimonials/", priority: 0.7, changeFrequency: "monthly" },
  { path: "/gallery/", priority: 0.6, changeFrequency: "monthly" },
  { path: "/privacy/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/terms/", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const destinations: Entry[] = destinationDetails.map((destination) => ({
    path: `/destinations/${destination.slug}/`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  const holidayTypes: Entry[] = holidayTypeDetails.map((holidayType) => ({
    path: `/holidays/${holidayType.slug}/`,
    priority: 0.8,
    changeFrequency: "monthly",
  }));

  return [...staticEntries, ...destinations, ...holidayTypes].map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
