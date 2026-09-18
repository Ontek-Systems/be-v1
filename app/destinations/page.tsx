import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageMetadata";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { PageHero } from "@/components/sections/PageHero";
import { DestinationsIndexSection } from "@/components/sections/destinations/DestinationsIndexSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { destinationsFaqs } from "@/lib/faqs";
import { basePath } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "Destinations",
  description:
    "The nine regions we are asked to plan most often, from the Mediterranean and the Caribbean to the Serengeti and the Galapagos, and anywhere else on request.",
  path: "/destinations/",
});

export default function DestinationsPage() {
  return (
    <>
      <Header />
      <PageMain>
        <PageHero
          eyebrow="Destinations"
          title="Destinations we plan in depth"
          intro="Nine regions we are asked for most often and have travelled ourselves, from the Amalfi Coast to the Serengeti, with anywhere else bookable on request."
          imageSrc={`${basePath}/assets/images/destinations/indian-ocean/atoll-aerial.webp`}
          imageAlt="Aerial view of a Maldivian atoll, reef and lagoon"
          footnote="Nine regions. The rest of the world on request"
        />
        <DestinationsIndexSection />
        <FaqSection faqs={destinationsFaqs} idPrefix="destinations" eyebrow="Destinations" title="Common questions" />
        <ContactSection idPrefix="destinations-contact" />
      </PageMain>
      <Footer />
    </>
  );
}
