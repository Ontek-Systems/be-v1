"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/common/Reveal";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { DURATION, EASE, LEAD_IN, VIEWPORT } from "@/lib/motion";

export interface AboutFeatureSplitProps {
  number: string;
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
  /** Which half the photograph fills from lg up. Below lg it always leads. */
  imageSide: "left" | "right";
  tone: "white" | "cream";
  /** Tailwind object position, e.g. "object-[50%_30%]", to keep a face in frame. */
  imageClassName?: string;
}

const toneClasses: Record<AboutFeatureSplitProps["tone"], string> = {
  white: "bg-white",
  cream: "bg-primary-cream",
};

/**
 * Half photograph, half copy, edge to edge. The image half has no padding so
 * it meets the viewport edge, which is why the rhythm token sits on the text
 * column rather than the section.
 */
export function AboutFeatureSplit({
  number,
  title,
  paragraphs,
  imageSrc,
  imageAlt,
  imageSide,
  tone,
  imageClassName = "object-center",
}: Readonly<AboutFeatureSplitProps>) {
  const imageOnRight = imageSide === "right";

  return (
    <section className={`grid grid-cols-1 lg:grid-cols-2 ${toneClasses[tone]}`}>
      <div
        className={`relative min-h-[26rem] overflow-hidden xs:min-h-[30rem] sm:min-h-[38rem] md:min-h-[44rem] lg:min-h-[46rem] xl:min-h-[50rem] ${
          imageOnRight ? "lg:order-2" : ""
        }`}
      >
        <motion.div
          data-motion-entrance=""
          initial={{ opacity: 0, scale: 1.08 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.hero, delay: LEAD_IN, ease: EASE }}
          className="absolute inset-0"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className={`object-cover ${imageClassName}`}
          />
        </motion.div>
      </div>

      <div className="section-y flex items-center justify-center px-5 sm:px-8 md:px-12 lg:justify-start lg:px-14 xl:px-20 2xl:px-24">
        <Reveal x={imageOnRight ? -28 : 28} y={0} className="max-w-xl text-center lg:text-left">
          <span className="block font-display text-5xl font-bold leading-none text-primary-navy sm:text-6xl lg:text-7xl">
            {number}
            <span className="text-primary-gold">.</span>
          </span>

          <Heading as="h3" size="md" className="mt-9">
            {title}
          </Heading>

          <div className="mt-6 space-y-5">
            {paragraphs.map((paragraph) => (
              <Text key={paragraph.slice(0, 32)} size="lg" className="text-primary-navy/85">
                {paragraph}
              </Text>
            ))}
          </div>

          <ButtonLink href="#contact" variant="gold" fullWidthOnMobile className="mt-10">
            Start planning your trip
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}
