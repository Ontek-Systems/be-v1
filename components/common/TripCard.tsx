"use client";

import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/common/Reveal";

export interface TripCardProps {
  href: string;
  name: string;
  tagline: string;
  /** A quiet line above the name, e.g. the countries in a region. */
  label?: string;
  imageSrc: string;
  imageAlt: string;
  displayIndex: number;
  /** Wraps the stagger at the row width, so a long grid does not arrive one card at a time. */
  staggerGroupSize?: number;
  sizes?: string;
  priority?: boolean;
}

/**
 * A holiday type or a region as a card: the photograph on its own with the
 * caption underneath, the whole card turning navy on hover and focus.
 *
 * Type used to sit over the photograph with an index number, an eyebrow and a
 * gold rule stacked on top, which fought every bright image and never matched
 * anything else on the site. Nothing covers the picture now, so no scrim is
 * needed and the caption is always legible.
 */
export function TripCard({
  href,
  name,
  tagline,
  label,
  imageSrc,
  imageAlt,
  displayIndex,
  staggerGroupSize = 3,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  priority = false,
}: Readonly<TripCardProps>) {
  return (
    <Reveal as="article" index={displayIndex % staggerGroupSize} y={24} className="h-full">
      <Link
        href={href}
        className="group block h-full cursor-pointer bg-white shadow-[0_24px_60px_-40px_rgba(39,73,87,0.55)] transition-colors duration-300 ease-out hover:bg-primary-navy focus-visible:bg-primary-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-primary-cream">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          />
        </div>

        <div className="p-6 sm:p-7">
          {label && (
            <p className="text-[0.64rem] font-bold uppercase tracking-[0.207em] text-primary-navy underline decoration-primary-gold decoration-2 underline-offset-[0.6em] transition-colors duration-300 group-hover:text-primary-cream/80 group-focus-visible:text-primary-cream/80">
              {label}
            </p>
          )}

          <h3
            className={`font-display text-2xl font-bold leading-tight tracking-tight text-primary-navy transition-colors duration-300 group-hover:text-white group-focus-visible:text-white sm:text-[1.75rem] ${
              label ? "mt-5" : ""
            }`}
          >
            {name}
          </h3>

          <p className="mt-3 max-w-md text-[0.9375rem] leading-relaxed text-primary-navy/80 transition-colors duration-300 group-hover:text-primary-cream/85 group-focus-visible:text-primary-cream/85 sm:text-base">
            {tagline}
          </p>
        </div>
      </Link>
    </Reveal>
  );
}
