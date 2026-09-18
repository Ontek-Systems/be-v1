"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import type { DestinationHighlight } from "@/lib/destinationDetails";

export interface DestinationIntroSectionProps {
  name: string;
  intro: string[];
  highlights: DestinationHighlight[];
  countries: string[];
  imageSrc: string;
  imageAlt: string;
}

/**
 * The region in prose, with the three facts people actually plan around sitting
 * underneath it. The facts are a definition list rather than cards, because
 * boxing three short values turned the top of every region page into a dashboard.
 */
export function DestinationIntroSection({
  name,
  intro,
  highlights,
  countries,
  imageSrc,
  imageAlt,
}: Readonly<DestinationIntroSectionProps>) {
  return (
    <section className="relative overflow-hidden bg-white section-y">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
          <div className="text-center lg:text-left">
            <Reveal>
              <SectionEyebrow>{name}</SectionEyebrow>
              <Heading as="h2" size="lg">
                What the region is actually like
              </Heading>
            </Reveal>

            <Reveal index={1} className="mx-auto mt-[13px] max-w-[34rem] space-y-5 sm:max-w-[38rem] lg:mx-0 lg:max-w-none">
              {intro.map((paragraph, index) => (
                <Text
                  key={paragraph}
                  size="lg"
                  className={index === 0 ? "text-primary-navy" : "text-primary-navy/85"}
                >
                  {paragraph}
                </Text>
              ))}
            </Reveal>

            <Reveal index={2} className="mt-11">
              <p className="text-[0.64rem] font-bold uppercase tracking-[0.207em] text-primary-sky">
                We plan across
              </p>
              <ul className="mt-5 flex flex-wrap justify-center gap-x-3 gap-y-3 lg:justify-start">
                {countries.map((country) => (
                  <li
                    key={country}
                    className="bg-primary-cream px-4 py-2 text-sm font-semibold text-primary-navy"
                  >
                    {country}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <Reveal x={24} y={0} className="relative mx-auto w-full max-w-xs xs:max-w-sm sm:max-w-md lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[4/5] w-full overflow-hidden shadow-[0_40px_80px_-45px_rgba(39,73,87,0.75)] sm:aspect-[3/4] lg:aspect-[4/5]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>

            <span
              aria-hidden="true"
              className="absolute -bottom-6 left-0 h-24 w-24 bg-primary-cream lg:-bottom-10 lg:-left-10 lg:h-32 lg:w-32"
            />
          </Reveal>
        </div>

        <Reveal index={1} className="mt-20 lg:mt-24">
          <dl className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-14">
            {highlights.map((highlight) => (
              <div key={highlight.label} className="text-center lg:text-left">
                <dt className="inline-block text-[0.64rem] font-bold uppercase tracking-[0.207em] text-primary-navy underline decoration-primary-gold decoration-2 underline-offset-[0.6em]">
                  {highlight.label}
                </dt>
                <dd className="mt-5 font-display text-lg font-bold leading-snug tracking-tight text-primary-navy sm:text-xl">
                  {highlight.value}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
