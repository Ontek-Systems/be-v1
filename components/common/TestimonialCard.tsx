"use client";

import Image from "next/image";
import { GoogleLogo } from "@/components/ui/GoogleLogo";

export interface TestimonialCardProps {
  name: string;
  destination: string;
  quote: string;
  imageSrc: string;
  imageAlt: string;
  /** Tailwind object position, for wide banners whose subject is off centre. */
  imagePosition?: string;
}

export function TestimonialCard({
  name,
  destination,
  quote,
  imageSrc,
  imageAlt,
  imagePosition = "",
}: Readonly<TestimonialCardProps>) {
  return (
    <div className="group relative flex h-[26rem] w-[78vw] max-w-[340px] shrink-0 flex-col justify-end overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:h-[27.5rem] sm:w-[340px] lg:w-[360px]">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 640px) 78vw, 360px"
        className={`object-cover transition-transform duration-500 ease-out group-hover:scale-105 ${imagePosition}`}
      />
      {/* Not the shared card-scrim: the quote runs to about 60% of the card's
          height, so the scrim has to reach further up than the 40% standard. */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 via-40% to-transparent to-66%" />

      <div className="hero-text-shadow relative flex flex-col p-6 sm:p-8">
        <blockquote>
          <p className="text-[0.9375rem] leading-relaxed text-white sm:text-base">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        <footer className="mt-5 flex items-end justify-between gap-4 sm:mt-6">
          <div>
            <p className="font-semibold text-white">{name}</p>
            <p className="mt-0.5 text-sm text-primary-cream">{destination}</p>
          </div>
          <GoogleLogo className="mb-0.5 h-5 w-5 shrink-0" />
        </footer>
      </div>
    </div>
  );
}
