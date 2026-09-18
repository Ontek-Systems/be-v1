"use client";

import Image from "next/image";
import Link from "next/link";

export interface HolidayTypeCarouselSlideProps {
  label: string;
  tagline: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition?: string;
  isFirst: boolean;
}

export function HolidayTypeCarouselSlide({
  label,
  tagline,
  href,
  imageSrc,
  imageAlt,
  imagePosition = "object-center",
  isFirst,
}: Readonly<HolidayTypeCarouselSlideProps>) {
  return (
    <Link
      href={href}
      aria-label={`Explore ${label}`}
      className="group relative block aspect-[3/4] h-full w-full overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 46vw, 31vw"
        className={`object-cover ${imagePosition} transition-transform duration-700 ease-out group-hover:scale-[1.07]`}
        priority={isFirst}
      />

      {/*
        Black rather than primary-navy, as a deliberate exception to the palette
        rule. See the note under "No pure black" in CLAUDE.md.
      */}
      <div className="card-scrim transition-opacity duration-500 group-hover:opacity-95" />
      <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 group-hover:opacity-0" />

      <div className="hero-text-shadow absolute inset-x-0 bottom-0 p-6 sm:p-7">
        <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-[0.08em] text-white transition-colors duration-300 group-hover:text-primary-gold sm:text-2xl">
          {label}
        </h3>

        <p className="mt-2.5 text-sm leading-relaxed text-primary-cream">{tagline}</p>
      </div>

    </Link>
  );
}
