"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TripCard } from "@/components/common/TripCard";
import { ArrowTextLink } from "@/components/ui/ArrowTextLink";
import { getOtherDestinations } from "@/lib/destinationDetails";

export interface OtherDestinationsSectionProps {
  slug: string;
}

export function OtherDestinationsSection({ slug }: Readonly<OtherDestinationsSectionProps>) {
  const others = getOtherDestinations(slug, 4);

  return (
    <section className="bg-primary-cream section-y">
      <Container>
        <SectionHeader
          eyebrow="Other regions"
          title="Somewhere else in mind"
          intro="Plenty of trips pair two regions, a few nights in Dubai on the way to the Maldives being the usual one, and we plan trips well beyond the places listed here."
        />

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-x-7">
          {others.map((destination, index) => (
            <TripCard
              key={destination.slug}
              href={`/destinations/${destination.slug}`}
              name={destination.countries.slice(0, 3).join(", ")}
              tagline={destination.tagline}
              label={destination.name}
              imageSrc={destination.heroImage}
              imageAlt={destination.heroImageAlt}
              displayIndex={index}
              staggerGroupSize={4}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
          ))}
        </div>

        <Reveal index={1} className="mt-14 text-center lg:text-left">
          <ArrowTextLink href="/destinations">See every region</ArrowTextLink>
        </Reveal>
      </Container>
    </section>
  );
}
