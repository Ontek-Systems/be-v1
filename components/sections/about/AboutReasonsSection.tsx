"use client";

import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/common/Reveal";
import { AboutFeatureSplit } from "@/components/common/AboutFeatureSplit";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { aboutReasons } from "@/lib/aboutReasons";

/**
 * A short centred introduction, then one full width split per reason with the
 * photograph swapping sides and the ground alternating cream and white. A gold
 * rule runs straight down the seam of all four from lg up.
 */
export function AboutReasonsSection() {
  return (
    <>
      <section id="why-book" className="section-y bg-white">
        <Container>
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionEyebrow align="centered">29 five star reviews</SectionEyebrow>
            <Heading as="h2" size="lg">
              Why book with us
            </Heading>
            <Text size="lg" className="mx-auto mt-6 max-w-2xl text-primary-navy/85">
              Blissful Escapes has been planning luxury travel from Ormskirk, Lancashire, for four
              years, and every trip is arranged personally by Emma or Sylvia.
            </Text>
          </Reveal>
        </Container>
      </section>

      <div className="relative">
        {aboutReasons.map((reason, index) => (
          <AboutFeatureSplit
            key={reason.number}
            {...reason}
            imageSide={index % 2 === 0 ? "left" : "right"}
            tone={index % 2 === 0 ? "cream" : "white"}
          />
        ))}

        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden w-[5px] -translate-x-1/2 bg-primary-gold lg:block"
        />
      </div>
    </>
  );
}
