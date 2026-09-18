"use client";

import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { RotatingGalleryCollage } from "@/components/common/RotatingGalleryCollage";
import { homepageCollage } from "@/lib/galleryImages";
import { clientPhotos } from "@/lib/clientPhotos";

export function GallerySection() {
  return (
    <section id="gallery" className="section-y bg-primary-cream">
      <Container>
        <div className="mb-12 text-center sm:mb-16 lg:text-left">
          <SectionEyebrow>Gallery</SectionEyebrow>
          <Heading as="h2" size="lg">
            Recent travels
          </Heading>
          <Text size="lg" className="mx-auto mt-[13px] max-w-2xl text-primary-navy lg:mx-0">
            From Capri and the Maldives to Machu Picchu and the Great Barrier Reef, with
            photographs sent back by clients.
          </Text>
        </div>

        <RotatingGalleryCollage tiles={homepageCollage} pool={clientPhotos} />
      </Container>
    </section>
  );
}
