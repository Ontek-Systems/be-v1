"use client";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/common/SectionHeader";
import { DestinationExperienceRow } from "@/components/common/DestinationExperienceRow";
import type { DestinationExperience, DestinationGalleryImage } from "@/lib/destinationDetails";

export interface DestinationExperiencesSectionProps {
  experiences: DestinationExperience[];
  /** Paired with the experiences in order, so each row carries its own picture. */
  images: DestinationGalleryImage[];
}

export function DestinationExperiencesSection({
  experiences,
  images,
}: Readonly<DestinationExperiencesSectionProps>) {
  return (
    <section className="relative overflow-hidden bg-primary-cream section-y-lg">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/4 h-[38rem] w-[38rem] bg-[radial-gradient(circle,rgba(112,167,191,0.22),transparent_65%)]"
      />

      <Container className="relative">
        <SectionHeader
          layout="centered"
          eyebrow="Worth planning around"
          title="Three things we would build the trip on"
          intro="None of this is a fixed itinerary. It is where the conversation usually starts, and the rest gets built around whatever you say next."
        />

        <div className="space-y-16 sm:space-y-20 lg:space-y-28">
          {experiences.map((experience, index) => (
            <DestinationExperienceRow
              key={experience.title}
              index={index}
              title={experience.title}
              description={experience.description}
              imageSrc={images[index % images.length].src}
              imageAlt={images[index % images.length].alt}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
