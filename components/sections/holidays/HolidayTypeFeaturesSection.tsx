"use client";

import { Container } from "@/components/layout/Container";
import { ParallaxImage } from "@/components/common/ParallaxImage";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import type { HolidayTypeFeature } from "@/lib/holidayTypeDetails";

export interface HolidayTypeFeaturesSectionProps {
  features: HolidayTypeFeature[];
  imageSrc: string;
  imageAlt: string;
}

/**
 * The three things we actually do on this kind of trip, over the type's own
 * photograph. Navy sits over the image rather than sky: a sky wash turns a
 * photograph into a flat blue panel and loses whatever was in it.
 */
export function HolidayTypeFeaturesSection({
  features,
  imageSrc,
  imageAlt,
}: Readonly<HolidayTypeFeaturesSectionProps>) {
  return (
    <section className="relative overflow-hidden section-y-lg">
      <ParallaxImage src={imageSrc} alt={imageAlt} strength={12} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/75 to-black/55" />

      <Container className="hero-text-shadow relative">
        <SectionHeader layout="centered" dark eyebrow="What we handle" title="Planned in detail" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-14">
          {features.map((feature, index) => (
            <Reveal key={feature.title} index={index} className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
              <span className="block font-display text-5xl font-bold leading-none text-primary-gold/90">
                {String(index + 1).padStart(2, "0")}
                <span className="text-white">.</span>
              </span>

              <Heading as="h3" size="sm" className="mt-6 text-white">
                {feature.title}
              </Heading>
              <Text size="sm" className="mt-4 text-primary-cream/90">
                {feature.description}
              </Text>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
