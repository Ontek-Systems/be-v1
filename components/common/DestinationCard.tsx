"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { DURATION, EASE, LEAD_IN, VIEWPORT, stagger } from "@/lib/motion";

export interface DestinationCardProps {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  displayIndex: number;
}

/**
 * The phone and tablet form of a destination. The desktop index list stacks a
 * number, a heading, a paragraph and a wide image per region, which on a phone
 * came to five screens of scrolling before the next section. This says the
 * same things over one image instead.
 *
 * Five things stacked over one photograph, an index number, an eyebrow, a
 * name, a tagline and a cue, left the phone card with no hierarchy at all, so
 * the number and the tagline hold back until there is room for them at sm.
 */
export function DestinationCard({
  slug,
  name,
  region,
  tagline,
  imageSrc,
  imageAlt,
  displayIndex,
}: Readonly<DestinationCardProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.reveal, delay: LEAD_IN + stagger(displayIndex % 2, 0.1), ease: EASE }}
    >
      <Link
        href={`/destinations/${slug}`}
        aria-label={`Explore ${name}`}
        className="group relative block aspect-[4/3] w-full overflow-hidden shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy sm:aspect-[4/5]"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        <div className="card-scrim" />

        <span className="absolute left-5 top-5 hidden font-sans text-[0.64rem] font-bold uppercase tabular-nums tracking-[0.207em] text-primary-gold sm:left-6 sm:top-6 sm:block">
          {String(displayIndex + 1).padStart(2, "0")}
        </span>

        <div className="hero-text-shadow absolute inset-x-0 bottom-0 p-5 text-center sm:p-6">
          <p className="hidden font-sans text-[0.64rem] font-bold uppercase tracking-[0.207em] text-primary-cream sm:block">
            {region}
          </p>
          <h3 className="font-display text-2xl sm:mt-2 font-bold tracking-tight text-white transition-colors duration-300 group-hover:text-primary-gold xs:text-3xl sm:text-[1.75rem]">
            {name}
          </h3>
          <p className="mx-auto mt-2 hidden max-w-xs text-sm leading-relaxed text-primary-cream sm:block">
            {tagline}
          </p>
          {/* Always visible: the hover cue used elsewhere never appears on a
              touch screen, which left these cards with nothing to press. */}
          <span className="mt-3 inline-flex items-center gap-2 sm:mt-4 text-[0.64rem] font-bold uppercase tracking-[0.207em] text-primary-gold">
            Explore region
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-3.5 w-3.5 shrink-0 fill-none stroke-primary-gold stroke-2 transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
