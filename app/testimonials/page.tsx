import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageMetadata";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { PageHero } from "@/components/sections/PageHero";
import { CaseStudiesSection } from "@/components/sections/testimonials/CaseStudiesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { carouselTestimonials, reviewsBandTone } from "@/lib/caseStudies";
import { testimonialsFaqs } from "@/lib/faqs";
import { basePath } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "Testimonials",
  description:
    "29 five star Google reviews from clients who travelled with Blissful Escapes, and the detail of what each of those trips involved.",
  path: "/testimonials/",
});

export default function TestimonialsPage() {
  return (
    <>
      <Header />
      <PageMain>
        <PageHero
          eyebrow="Testimonials"
          title="29 five star reviews on Google"
          intro="Safaris, honeymoons, family holidays and the once in a lifetime trips, described by the people who travelled on them rather than by us."
          imageSrc={`${basePath}/assets/images/destinations/africa/bush-breakfast.webp`}
          imageAlt="Breakfast in the bush at sunrise, chairs set out beneath a tree"
          footnote="Verified reviews on Google"
        />
        <CaseStudiesSection />
        <TestimonialsSection items={carouselTestimonials} title="What our clients say" className={reviewsBandTone} />
        <FaqSection
          faqs={testimonialsFaqs}
          idPrefix="testimonials"
          title="About the reviews and the trips"
          intro="What sits behind the 29 reviews, and how a trip like the ones on this page gets started."
        />
        <ContactSection idPrefix="testimonials-contact" />
      </PageMain>
      <Footer />
    </>
  );
}
