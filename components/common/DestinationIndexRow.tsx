"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

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

export function DestinationIndexRow({
  slug,
  name,
  tagline,
  imageSrc,
  imageAlt,
  displayIndex,
  isActive,
  onActivate,
}: Readonly<DestinationIndexRowProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: displayIndex * 0.06, ease: "easeOut" }}
    >
      <Link
        href={`/destinations/${slug}`}
        aria-label={`Explore ${name}`}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        className="group block py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy sm:py-7"
      >
        <div className="flex flex-col items-center gap-4 text-center lg:flex-row lg:items-baseline lg:gap-6 lg:text-left">
          <span className="relative mb-5 inline-block w-fit font-sans text-[0.64rem] font-bold uppercase tabular-nums tracking-[0.207em] text-[#1e1d1c] transition-colors duration-300 lg:mb-0 lg:text-sm lg:font-semibold lg:tracking-normal lg:text-primary-sky">
            {String(displayIndex + 1).padStart(2, "0")}
            <span
              aria-hidden="true"
              className="absolute bottom-[-0.35em] left-0 h-[2px] w-full bg-primary-gold lg:hidden"
            />
          </span>

          <div className="w-full min-w-0 lg:flex-1">
            <div className="flex items-center justify-center gap-x-6 lg:justify-between">
              <h3
                className={`font-display text-3xl font-bold tracking-tight transition-colors duration-300 ease-out sm:text-4xl lg:text-5xl ${
                  isActive ? "text-primary-navy" : "text-primary-sky/75 group-hover:text-primary-navy"
                }`}
              >
                {name}
              </h3>
            </div>

            {/* Phone and tablet: tagline sits under the name */}
            <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-primary-navy/80 lg:hidden">
              {tagline}
            </p>

            {/* Phone and tablet: image sits below the text */}
            <div className="relative mt-5 aspect-4/3 w-full overflow-hidden shadow-md sm:aspect-16/9 lg:hidden">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                sizes="100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-navy/80 to-transparent to-55%" />
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[0.64rem] font-bold uppercase tracking-[0.207em] text-primary-gold">
                Explore Region
              </span>
            </div>

            {/* Desktop: tagline reveals cleanly on active */}
            <div
              className={`hidden grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-out lg:grid ${
                isActive ? "lg:grid-rows-[1fr]" : ""
              }`}
            >
              <div className="overflow-hidden">
                <p className="mt-2.5 max-w-xl text-base text-primary-navy/80 leading-relaxed">{tagline}</p>
              </div>
            </div>
          </div>

          <span
            className={`hidden shrink-0 items-center gap-2 self-center text-sm font-semibold text-primary-navy transition-opacity duration-300 lg:inline-flex ${
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
          className={`mt-6 h-px w-full origin-left transition-colors duration-300 sm:mt-7 ${
            isActive ? "bg-primary-sky" : "bg-primary-sky/40"
          }`}
        />
      </Link>
    </motion.div>
  );
}
