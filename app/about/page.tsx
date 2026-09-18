import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageMetadata";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { AboutPeopleHero } from "@/components/sections/about/AboutPeopleHero";
import { AboutReasonsSection } from "@/components/sections/about/AboutReasonsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { aboutFaqs } from "@/lib/faqs";

export const metadata: Metadata = pageMetadata({
  title: "About us",
  description:
    "Blissful Escapes is Emma Carrigan and Sylvia, planning luxury travel from Ormskirk, Lancashire, seven days a week. ABTA protected and ATOL bonded.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <Header solid />
      <PageMain>
        <AboutPeopleHero />
        <AboutReasonsSection />
        <FaqSection
          faqs={aboutFaqs}
          idPrefix="about"
          title="How we work"
          intro="Who plans your trip, who stands behind us and what happens when something goes wrong abroad, answered plainly."
        />
        <ContactSection idPrefix="about-contact" />
      </PageMain>
      <Footer />
    </>
  );
}
