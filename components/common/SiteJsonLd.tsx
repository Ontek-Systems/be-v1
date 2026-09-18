import { knownSocialAccounts } from "@/components/common/SocialLinks";
import { contactEmail, contactPhoneHref } from "@/lib/contactDetails";
import { absoluteUrl, defaultDescription, siteName, siteUrl } from "@/lib/siteConfig";
import { jsonLdScript } from "@/lib/jsonLd";

/**
 * Organisation and site level structured data, emitted once from the root
 * layout. Everything in here is a fact from COPYWRITING.md section 11, so
 * nothing needs inventing and nothing can drift from the copy.
 *
 * Deliberately no aggregateRating. The 29 five star Google reviews are real,
 * but review markup a business puts on its own site is self serving under
 * Google's rules and is a manual action risk rather than a rich result.
 */

const organisation = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": `${siteUrl}/#organisation`,
  name: siteName,
  legalName: "Blissfulescapes Limited",
  url: siteUrl,
  description: defaultDescription,
  image: absoluteUrl("/assets/images/og-default.jpg"),
  logo: absoluteUrl("/assets/images/logo.webp"),
  email: contactEmail,
  telephone: `+${contactPhoneHref}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ormskirk",
    addressRegion: "Lancashire",
    addressCountry: "GB",
  },
  founder: { "@type": "Person", name: "Emma Carrigan" },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  knowsAbout: [
    "Honeymoons",
    "Safaris",
    "Milestone trips",
    "Proposals",
    "Destination weddings",
    "Family holidays",
    "Solo travel",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  sameAs: knownSocialAccounts
    .filter((account) => account.name !== "WhatsApp")
    .map((account) => account.href),
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: siteName,
  inLanguage: "en-GB",
  publisher: { "@id": `${siteUrl}/#organisation` },
};

export function SiteJsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(organisation) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(website) }}
      />
    </>
  );
}
