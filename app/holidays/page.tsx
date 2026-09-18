import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageMetadata";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { PageHero } from "@/components/sections/PageHero";
import { HolidayTypesIndexSection } from "@/components/sections/holidays/HolidayTypesIndexSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { holidaysFaqs } from "@/lib/faqs";
import { basePath } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "Types of trips",
  description:
    "Honeymoons, safaris, family holidays, proposals and destination weddings, planned end to end by Emma and Sylvia from Ormskirk, Lancashire.",
  path: "/holidays/",
});

export default function HolidaysPage() {
  return (
    <>
      <Header />
      <PageMain>
        <PageHero
          eyebrow="Types of trips"
          title="The trips we specialise in"
          intro="Honeymoons, safaris, family holidays, proposals and destination weddings, all planned end to end by the two people who answer the phone."
          imageSrc={`${basePath}/assets/images/hero/elephants-crossing-river.webp`}
          imageAlt="A herd of elephants crossing a river at sunset, with palms along the far bank"
          footnote="Over 600 suppliers. ABTA protected"
        />
        <HolidayTypesIndexSection />
        <FaqSection faqs={holidaysFaqs} idPrefix="holidays" eyebrow="Types of trips" title="Common questions" />
        <ContactSection idPrefix="holidays-contact" />
      </PageMain>
      <Footer />
    </>
  );
}
