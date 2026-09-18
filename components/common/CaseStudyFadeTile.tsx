"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { CaseStudyPhoto } from "@/lib/caseStudies";

export interface CaseStudyFadeTileProps {
  photos: CaseStudyPhoto[];
  /** How long each photo holds before the next fades in, in milliseconds. */
  interval: number;
  /** Delay before this tile first changes, so neighbouring tiles never turn together. */
  offset: number;
  isPlaying: boolean;
  sizes: string;
  onOpen: (photo: CaseStudyPhoto) => void;
  className?: string;
}

/**
 * One tile of the case study collage. Every photo is stacked in the tile and
 * only the opacity changes, so the next image is already loaded when its turn
 * comes and the change is a true cross fade rather than a flash of background.
 */
export function CaseStudyFadeTile({
  photos,
  interval,
  offset,
  isPlaying,
  sizes,
  onOpen,
  className = "",
}: Readonly<CaseStudyFadeTileProps>) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!isPlaying || photos.length < 2) return;

    let repeat: ReturnType<typeof setInterval> | undefined;
    const advance = () => setCurrent((index) => (index + 1) % photos.length);
    const start = window.setTimeout(() => {
      advance();
      repeat = setInterval(advance, interval);
    }, offset);

    return () => {
      window.clearTimeout(start);
      clearInterval(repeat);
    };
  }, [isPlaying, photos.length, interval, offset]);

  const active = photos[current];
  if (!active) return null;

  return (
    <button
      type="button"
      onClick={() => onOpen(active)}
      aria-label={`Open photo: ${active.alt}`}
      className={`group relative block h-full w-full cursor-pointer overflow-hidden bg-primary-cream focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-gold ${className}`}
    >
      {photos.map((photo, index) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt=""
          fill
          sizes={sizes}
          className={`object-cover ${photo.position ?? "object-center"} transition-[opacity,scale] duration-[1600ms] ease-in-out group-hover:scale-105 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </button>
  );
}
