import type { Metadata } from "next";
import { pageMetadata } from "@/lib/pageMetadata";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { PageMain } from "@/components/layout/PageMain";
import { PageHero } from "@/components/sections/PageHero";
import { GalleryPageContent } from "@/components/sections/gallery/GalleryPageContent";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { galleryFaqs } from "@/lib/faqs";
import { basePath } from "@/lib/siteConfig";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "Photographs from the trips we plan, from Capri and the Maldives to Machu Picchu and the Great Barrier Reef, with pictures sent back by clients.",
  path: "/gallery/",
});

export default function GalleryPage() {
  return (
    <>
      <Header />
      <PageMain>
        <PageHero
          eyebrow="Gallery"
          title="Recent travels"
          intro="From Capri and the Maldives to Machu Picchu and the Great Barrier Reef, photographed on the trips we plan and sent back by the clients who took them."
          imageSrc={`${basePath}/assets/images/destinations/indian-ocean/ocean-sunset-dhows.webp`}
          imageAlt="The sun setting over the Indian Ocean with dhows out on the water"
          footnote="35 photographs from recent trips"
        />
        <GalleryPageContent />
        <FaqSection faqs={galleryFaqs} idPrefix="gallery" eyebrow="Gallery" title="Common questions" />
        <ContactSection idPrefix="gallery-contact" />
      </PageMain>
      <Footer />
    </>
  );
}
