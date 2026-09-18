"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DURATION, EASE, LEAD_IN, VIEWPORT, stagger } from "@/lib/motion";

export interface DestinationIndexRowProps {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  imageSrc: string;
  imageAlt: string;
  displayIndex: number;
  isActive: boolean;
  onActivate: () => void;
}

/**
 * The desktop only index list. Phones and tablets get DestinationCard instead,
 * so this no longer carries a second layout inside itself.
 */
export function DestinationIndexRow({
  slug,
  name,
  tagline,
  displayIndex,
  isActive,
  onActivate,
}: Readonly<DestinationIndexRowProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.reveal, delay: LEAD_IN + stagger(displayIndex, 0.06), ease: EASE }}
    >
      <Link
        href={`/destinations/${slug}`}
        aria-label={`Explore ${name}`}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        className="group block py-7 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy"
      >
        <div className="flex items-baseline gap-6">
          <span
            className={`inline-block w-fit font-sans text-sm font-semibold tabular-nums transition-colors duration-300 group-hover:text-primary-gold ${
              isActive ? "text-primary-gold" : "text-primary-sky"
            }`}
          >
            {`${String(displayIndex + 1).padStart(2, "0")}.`}
          </span>

          <div className="min-w-0 flex-1">
            <h3
              className={`font-display text-5xl font-bold tracking-tight transition-colors duration-300 ease-out ${
                isActive ? "text-primary-navy" : "text-primary-sky/75 group-hover:text-primary-navy"
              }`}
            >
              {name}
            </h3>

            {/* The tagline reveals cleanly on the active row. */}
            <div
              className={`grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out ${
                isActive ? "grid-rows-[1fr]" : ""
              }`}
            >
              <div className="overflow-hidden">
                <p className="mt-2.5 max-w-xl text-base leading-relaxed text-primary-navy/80 transition-colors duration-300 group-hover:text-primary-navy">
                  {tagline}
                </p>
              </div>
            </div>
          </div>

          <span
            className={`inline-flex shrink-0 items-center gap-2 self-center text-sm font-semibold text-primary-navy transition-opacity duration-300 ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            Discover
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="h-3.5 w-3.5 fill-none stroke-current transition-transform duration-300 ease-out group-hover:translate-x-1"
            >
              <path d="M6 3L11 8L6 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>

        {/* Divider line */}
        <div
          className={`mt-7 h-px w-full origin-left transition-colors duration-300 ${
            isActive ? "bg-primary-sky" : "bg-primary-sky/40"
          }`}
        />
      </Link>
    </motion.div>
  );
}
