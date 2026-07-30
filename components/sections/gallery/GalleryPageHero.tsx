"use client";

import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

export function GalleryPageHero() {
  return (
    <section className="bg-white section-y-sm">
      <Container className="text-center">
        <SectionEyebrow align="centered">Visual Inspiration</SectionEyebrow>
        <Heading as="h1" size="lg" className="text-primary-navy">
          Memories you can make with us
        </Heading>
        <Text size="lg" className="mx-auto mt-4 max-w-2xl text-primary-navy/80">
          From quiet secluded bays and overwater villas to safari game drives and scenic rail journeys, explore what your next holiday could look like.
        </Text>
      </Container>
    </section>
  );
}
