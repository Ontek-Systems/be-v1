"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { HeroScrim } from "@/components/ui/HeroScrim";
import { DURATION, EASE, LEAD_IN } from "@/lib/motion";

export interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro: string;
  imageSrc: string;
  imageAlt: string;
  /** Proof or context line under the intro, e.g. a location or a count. */
  footnote?: string;
  /**
   * Per page tone adjustment for the photograph, e.g. a brightness or saturation
   * lift. Every image already carries saturate(1.1) from an unlayered rule in
   * globals.css, which outranks Tailwind utilities, so filter classes here need
   * the important modifier. A saturate utility replaces that 1.1 rather than
   * adding to it, so a 15% lift on what is shown today is saturate-[1.265]!.
   */
  imageClassName?: string;
}

/**
 * The opening band on every page except the homepage.
 *
 * The label is the same SectionEyebrow used above every heading on the site
 * rather than a hero specific variant. Two eyebrow treatments existed for a
 * while and the hero one read as a different brand to the page under it.
 *
 * There is deliberately nothing between the title and the intro. A gold rule
 * sat there previously and split one thought into two blocks.
 *
 * The scrim is black rather than navy, which is a documented exception to the
 * palette rule (CLAUDE.md §3, 8 Sept 2026): a navy or sky gradient reads as a
 * blue wash lying on top of the photograph instead of as shadow. It is the
 * homepage hero's gradient, bottom only, so the image stays vivid.
 *
 * The image also carries a slow push in. It runs for twelve seconds and moves
 * about four percent, so it is felt rather than seen.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  imageSrc,
  imageAlt,
  footnote,
  imageClassName = "",
}: Readonly<PageHeroProps>) {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden">
      <motion.div
        data-motion-entrance=""
        initial={{ scale: 1.04 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "linear" }}
        className="absolute inset-0"
      >
        <Image src={imageSrc} alt={imageAlt} fill priority sizes="100vw" className={`object-cover ${imageClassName}`} />
      </motion.div>

      {/* Shared with the homepage hero: a light wash over the image and the
          floor gradient under the type. No vignette. */}
      <HeroScrim />

      {/* Spacing matches the homepage About section exactly (HOMEPAGE.md §4a):
          the eyebrow's own mb-9 to the title, then mt-[22px] to the intro.
          Never pass a margin override to SectionEyebrow: Tailwind resolves
          clashing classes by stylesheet order, so "mb-0" loses to "mb-9". */}
      <Container className="relative pb-24 pt-[calc(var(--header-total)+1rem)] text-center">
        <motion.div
          data-motion-entrance=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: DURATION.base, delay: LEAD_IN, ease: EASE }}
          className="hero-text-shadow"
        >
          <SectionEyebrow align="centered" dark>
            {eyebrow}
          </SectionEyebrow>
        </motion.div>

        <motion.h1
          data-motion-entrance=""
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.hero, delay: LEAD_IN + 0.15, ease: EASE }}
          className="hero-title-shadow mx-auto max-w-3xl font-display text-[2.36rem] font-bold leading-[0.99] tracking-tight text-white xs:text-[2.831rem] sm:text-[3.775rem] lg:text-[3.63rem]"
        >
          {title}
        </motion.h1>

        <motion.p
          data-motion-entrance=""
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: DURATION.reveal, delay: LEAD_IN + 0.35, ease: EASE }}
          className="hero-text-shadow-strong mx-auto mt-[22px] max-w-3xl text-sm leading-relaxed text-white sm:text-base lg:text-lg"
        >
          {intro}
        </motion.p>

        {footnote && (
          <motion.p
            data-motion-entrance=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: DURATION.reveal, delay: LEAD_IN + 0.55, ease: EASE }}
            className="hero-text-shadow-strong mt-6 font-sans text-[0.64rem] font-bold uppercase tracking-[0.207em] text-white/85"
          >
            {footnote}
          </motion.p>
        )}
      </Container>

      {/* Sits on the seam so the hero hands off to the section below it. */}
      <motion.div
        aria-hidden="true"
        data-motion-entrance=""
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: DURATION.reveal, delay: LEAD_IN + 0.8, ease: EASE }}
        className="absolute bottom-0 left-[calc(50%-0.5px)] h-16 w-px bg-gradient-to-b from-transparent to-primary-gold"
      />
    </section>
  );
}
