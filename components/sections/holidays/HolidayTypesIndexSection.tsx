"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TripCard } from "@/components/common/TripCard";
import { holidayTypeDetails } from "@/lib/holidayTypeDetails";

/** The full grid of holiday types, and the whole of the /holidays page body. */
export function HolidayTypesIndexSection() {
  return (
    <section className="bg-white section-y">
      <Container>
        <SectionHeader
          eyebrow="Where to start"
          title="Every one of these is planned the same way"
          intro="The type only sets the shape of the trip. Whichever you pick it is Emma or Sylvia building it, and most of what we plan borrows from two or three of them by the time it is finished."
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {holidayTypeDetails.map((holidayType, index) => (
            <TripCard
              key={holidayType.slug}
              href={`/holidays/${holidayType.slug}`}
              name={holidayType.name}
              label="Type of trip"
              tagline={holidayType.tagline}
              imageSrc={holidayType.heroImage}
              imageAlt={holidayType.heroImageAlt}
              displayIndex={index}
              priority={index < 3}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
