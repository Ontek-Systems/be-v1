"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TripCard } from "@/components/common/TripCard";
import { destinationDetails } from "@/lib/destinationDetails";

/** The regions index: all nine as plates, three to a row from lg. */
export function DestinationsIndexSection() {
  return (
    <section className="bg-white section-y">
      <Container>
        <SectionHeader
          eyebrow="The regions"
          title="Where we are asked to plan most often"
          intro="We have travelled all nine, which is what lets us tell you which coast to be on and which month to avoid rather than reading it off a screen. Anywhere not on this list is still bookable, so just ask."
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {destinationDetails.map((destination, index) => (
            <TripCard
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              name={destination.countries.slice(0, 3).join(", ")}
              tagline={destination.tagline}
              label={destination.name}
              imageSrc={destination.heroImage}
              imageAlt={destination.heroImageAlt}
              displayIndex={index}
              priority={index < 3}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
