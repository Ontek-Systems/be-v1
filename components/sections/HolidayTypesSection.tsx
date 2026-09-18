"use client";

import { useState } from "react";
import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { HolidayTypeCarousel } from "@/components/common/HolidayTypeCarousel";
import { CrossfadeBackground } from "@/components/common/CrossfadeBackground";
import { holidayTypes } from "@/lib/holidayTypes";

export function HolidayTypesSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="holiday-types" className="relative overflow-hidden section-y">
      <CrossfadeBackground src={holidayTypes[activeIndex].imageSrc} />
      <div className="absolute inset-0 bg-primary-sky/80" />

      <Container className="relative">
        <div className="hero-text-shadow mb-12 text-center sm:mb-16 lg:text-left">
          <SectionEyebrow underlineColor="gold" dark>Types of trips</SectionEyebrow>
          <Heading as="h2" size="lg" className="text-white">
            What we specialise in
          </Heading>
          <Text size="lg" className="mx-auto mt-[13px] max-w-2xl text-primary-cream lg:mx-0">
            Honeymoons, safaris, family holidays, proposals, destination weddings, wellbeing escapes and solo travel. Pick whichever is closest to the trip you have in mind.
          </Text>
        </div>

        <HolidayTypeCarousel items={holidayTypes} onIndexChange={setActiveIndex} />
      </Container>
    </section>
  );
}
