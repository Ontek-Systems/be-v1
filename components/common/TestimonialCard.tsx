"use client";

import Image from "next/image";

export interface TestimonialCardProps {
  name: string;
  destination: string;
  quote: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function TestimonialCard({
  name,
  destination,
  quote,
  imageSrc,
  imageAlt,
}: Readonly<TestimonialCardProps>) {
  return (
    <div className="group relative flex h-[440px] min-w-[300px] max-w-[360px] flex-col justify-end overflow-hidden shadow-lg transition-shadow duration-300 hover:shadow-2xl sm:min-w-[340px]">
      {imageSrc && imageAlt && (
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 640px) 300px, 360px"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/48 via-40% to-transparent to-66%" />

      <div className="relative flex flex-col p-7 sm:p-8">
        <blockquote>
          <p className="text-base leading-relaxed text-white sm:text-[0.95rem]">
            &ldquo;{quote}&rdquo;
          </p>
        </blockquote>

        <footer className="mt-6">
          <p className="font-semibold text-white">{name}</p>
          <p className="mt-0.5 text-sm text-primary-cream">{destination}</p>
        </footer>
      </div>
    </div>
  );
}
