import { Header } from "@/components/sections/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { AssociatesSection } from "@/components/sections/AssociatesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { HolidayTypesSection } from "@/components/sections/HolidayTypesSection";
import { DestinationsSection } from "@/components/sections/DestinationsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { homeFaqs } from "@/lib/faqs";

export default function Home() {
  return (
    <>
      <Header />
      <PageMain>
        <HeroSection />
        <AssociatesSection />
        <AboutSection />
        <HolidayTypesSection />
        <DestinationsSection />
        <GallerySection />
        <TestimonialsSection />
        <FaqSection
          faqs={homeFaqs}
          idPrefix="home"
          title="Before you get in touch"
          intro="The things people usually ask before they enquire, from what it costs to how your money is protected. For anything else, ring us and ask."
        />
        <ContactSection />
      </PageMain>
      <Footer />
    </>
  );
}
