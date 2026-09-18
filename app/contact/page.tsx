import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageMetadata";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { PageHero } from "@/components/sections/PageHero";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { contactFaqs } from "@/lib/faqs";
import { basePath } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "Contact us",
  description:
    "Talk to Emma or Sylvia about a trip. Blissful Escapes plans luxury travel from Ormskirk, Lancashire, seven days a week, by phone, email or WhatsApp.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <PageMain>
        <PageHero
          eyebrow="Contact us"
          title="Start planning your trip"
          intro="Tell us roughly when and roughly where and we will take it from there, because there is nothing to book and nothing to commit to at this stage."
          imageSrc={`${basePath}/assets/images/destinations/indian-ocean/maldives-jetty.webp`}
          imageAlt="A long wooden jetty over the lagoon in the Maldives"
          footnote="ABTA protected. ATOL bonded"
        />
        <ContactFormSection />
        <FaqSection
          faqs={contactFaqs}
          idPrefix="contact"
          title="What people usually ask first"
          intro="If the answer you want is not here, ring us and ask, because it is a quicker conversation than it is a page."
        />
      </PageMain>
      <Footer />
    </>
  );
}
