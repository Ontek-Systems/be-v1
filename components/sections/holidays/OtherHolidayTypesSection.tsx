"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TripCard } from "@/components/common/TripCard";
import { ArrowTextLink } from "@/components/ui/ArrowTextLink";
import { getOtherHolidayTypes } from "@/lib/holidayTypeDetails";

export interface OtherHolidayTypesSectionProps {
  slug: string;
}

export function OtherHolidayTypesSection({ slug }: Readonly<OtherHolidayTypesSectionProps>) {
  const others = getOtherHolidayTypes(slug, 4);

  return (
    <section className="bg-primary-cream section-y">
      <Container>
        <SectionHeader
          eyebrow="Also worth a look"
          title="Other trips we specialise in"
          intro="Very few trips sit in one category only, and a honeymoon that ends on safari is planned as one holiday rather than two."
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7">
          {others.map((holidayType, index) => (
            <TripCard
              key={holidayType.slug}
              href={`/holidays/${holidayType.slug}`}
              name={holidayType.name}
              label="Also planned by us"
              tagline={holidayType.tagline}
              imageSrc={holidayType.heroImage}
              imageAlt={holidayType.heroImageAlt}
              displayIndex={index}
              staggerGroupSize={4}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ))}
        </div>

        <Reveal index={1} className="mt-14 text-center lg:text-left">
          <ArrowTextLink href="/holidays">See every type of trip</ArrowTextLink>
        </Reveal>
      </Container>
    </section>
  );
}
