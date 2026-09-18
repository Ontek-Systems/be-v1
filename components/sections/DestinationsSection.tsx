"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { LearnMoreCue } from "@/components/ui/LearnMoreCue";
import { DestinationIndexRow } from "@/components/common/DestinationIndexRow";
import { DestinationCard } from "@/components/common/DestinationCard";
import { destinationDetails } from "@/lib/destinationDetails";

export function DestinationsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = destinationDetails[activeIndex];

  return (
    <section id="destinations" className="section-y">
      <Container>
        <div className="mb-10 text-center sm:mb-14 lg:mb-16 lg:text-left">
          <SectionEyebrow>Destinations</SectionEyebrow>
          <Heading as="h2" size="lg">
            The places we get asked for most
          </Heading>
          <Text size="lg" className="mx-auto mt-[13px] max-w-2xl text-primary-navy lg:mx-0">
            These are the regions we are asked for most often, and we have travelled all of them, so we can tell you which coast to stay on and which month to avoid. If the trip you want is somewhere else entirely, just ask. We book the whole world.
          </Text>
        </div>

        {/* Phone and tablet: compact cards. Below lg the desktop index list
            became five full screens of stacked text and full bleed imagery. */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:hidden">
          {destinationDetails.map((destination, index) => (
            <DestinationCard
              key={destination.slug}
              slug={destination.slug}
              name={destination.name}
              region={destination.region}
              tagline={destination.tagline}
              imageSrc={destination.heroImage}
              imageAlt={destination.heroImageAlt}
              displayIndex={index}
            />
          ))}
        </div>

        <div className="hidden gap-10 lg:grid lg:grid-cols-[0.85fr_1fr] lg:gap-16">
          {/* Sticky synced preview, desktop only */}
          <div className="block">
            {/* Pinned so the card sits in the middle of the space left under the
                fixed header stack, rather than sliding up behind it. */}
            <div className="sticky top-[var(--header-total)] flex h-[calc(100dvh-var(--header-total))] flex-col justify-center">
              <Link
                href={`/destinations/${active.slug}`}
                aria-label={`Learn more about ${active.name}`}
                className="group relative block aspect-[16/15] overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy shadow-md"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.slug}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={active.heroImage}
                      alt={active.heroImageAlt}
                      fill
                      sizes="45vw"
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="card-scrim" />

                <div className="hero-text-shadow absolute bottom-0 left-0 right-0 p-8">
                  <motion.div
                    key={active.slug}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
                  >
                    <LearnMoreCue />
                    <p className="mt-2 text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
                      {active.name}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-primary-cream">
                      {active.tagline}
                    </p>
                  </motion.div>
                </div>
              </Link>
            </div>
          </div>

          {/* Numbered index list */}
          <div className="flex flex-col">
            {destinationDetails.map((destination, index) => (
              <DestinationIndexRow
                key={destination.slug}
                slug={destination.slug}
                name={destination.name}
                region={destination.region}
                tagline={destination.tagline}
                imageSrc={destination.heroImage}
                imageAlt={destination.heroImageAlt}
                displayIndex={index}
                isActive={index === activeIndex}
                onActivate={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
