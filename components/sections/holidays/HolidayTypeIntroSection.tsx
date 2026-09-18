"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export interface HolidayTypeIntroSectionProps {
  name: string;
  /** The full intro. The first paragraph already ran in the hero, so it is skipped here. */
  intro: string[];
  idealFor: string[];
  imageSrc: string;
  imageAlt: string;
  secondaryImageSrc: string;
  secondaryImageAlt: string;
}

/**
 * The opening editorial block on a holiday type page: two overlapping plates
 * against the body copy, with the "ideal for" phrases set underneath in the
 * same cream tags as the countries on a region page.
 */
export function HolidayTypeIntroSection({
  name,
  intro,
  idealFor,
  imageSrc,
  imageAlt,
  secondaryImageSrc,
  secondaryImageAlt,
}: Readonly<HolidayTypeIntroSectionProps>) {
  const body = intro.slice(1);

  return (
    <section className="relative overflow-hidden bg-white section-y">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-20">
          <div className="order-2 text-center lg:order-1 lg:text-left">
            <Reveal>
              <SectionEyebrow>{name}</SectionEyebrow>
              <Heading as="h2" size="lg">
                How we plan it
              </Heading>
            </Reveal>

            <Reveal index={1} className="mx-auto mt-[13px] max-w-[34rem] space-y-5 sm:max-w-[38rem] lg:mx-0 lg:max-w-none">
              {body.map((paragraph, index) => (
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
                Ideal for
              </p>
              <ul className="mt-5 flex flex-wrap justify-center gap-x-3 gap-y-3 lg:justify-start">
                {idealFor.map((item) => (
                  <li
                    key={item}
                    className="bg-primary-cream px-4 py-2 text-sm font-semibold text-primary-navy"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Two plates rather than one rectangle. The offset is what stops an
              image column reading as a placeholder. */}
          <Reveal x={24} y={0} className="relative order-1 mx-auto w-full max-w-sm sm:max-w-lg lg:order-2 lg:mx-0 lg:max-w-none">
            <div className="relative ml-auto aspect-[4/5] w-[82%] overflow-hidden sm:w-[74%]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover"
              />
            </div>

            <div className="absolute bottom-[-2.5rem] left-0 aspect-square w-[52%] overflow-hidden shadow-[0_30px_70px_-30px_rgba(39,73,87,0.6)] sm:w-[46%]">
              <Image
                src={secondaryImageSrc}
                alt={secondaryImageAlt}
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
              />
            </div>

            <span
              aria-hidden="true"
              className="absolute right-0 -top-6 h-24 w-24 bg-primary-cream lg:-right-10 lg:-top-10 lg:h-32 lg:w-32"
            />
          </Reveal>
        </div>

        {/* Clears the plate that hangs below the image column. */}
        <div aria-hidden="true" className="h-14 lg:h-0" />
      </Container>
    </section>
  );
}
