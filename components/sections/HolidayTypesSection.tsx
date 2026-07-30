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
      <div className="absolute inset-0 bg-primary-navy/80" />

      <Container className="relative">
        <div className="mb-12 sm:mb-16">
          <SectionEyebrow underlineColor="gold" dark>What kind of trip?</SectionEyebrow>
          <Heading as="h2" size="lg" className="text-white">
            Types of Holiday
          </Heading>
          <Text size="lg" className="mt-[13px] max-w-2xl text-primary-cream">
            Whether you are planning the honeymoon of a lifetime or a family trip the kids will actually remember, I will put together something that fits you properly.
          </Text>
        </div>

        <HolidayTypeCarousel items={holidayTypes} onIndexChange={setActiveIndex} />
      </Container>
    </section>
  );
}
