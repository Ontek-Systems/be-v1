"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GalleryLightbox } from "@/components/common/GalleryLightbox";
import { CaseStudyFadeTile } from "@/components/common/CaseStudyFadeTile";
import type { CaseStudyPhoto } from "@/lib/caseStudies";
import type { GalleryImage } from "@/lib/galleryImages";
import { DURATION, EASE, LEAD_IN, VIEWPORT } from "@/lib/motion";

/** Each photograph holds for 3.75s, 50% slower than the original 2.5s. */
const INTERVAL_MS = 3750;

export interface CaseStudyPhotoPanelProps {
  photos: CaseStudyPhoto[];
  className?: string;
}

/**
 * The photograph half of a case study. The client's photographs cross fade
 * through it one at a time every few seconds, and a click opens the full set. Height comes from
 * the caller, since the split holds itself to one screen from lg.
 */
export function CaseStudyPhotoPanel({ photos, className = "" }: Readonly<CaseStudyPhotoPanelProps>) {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const lightboxImages: GalleryImage[] = photos.map((photo) => ({
    ...photo,
    aspectRatio: "tall",
    source: "client",
  }));

  const step = (direction: number) =>
    setActiveIndex((current) =>
      current === null ? null : (current + direction + photos.length) % photos.length,
    );

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        data-motion-entrance=""
        initial={{ opacity: 0, scale: 1.08 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: DURATION.hero, delay: LEAD_IN, ease: EASE }}
        className="absolute inset-0"
      >
        <CaseStudyFadeTile
          photos={photos}
          interval={INTERVAL_MS}
          offset={INTERVAL_MS}
          isPlaying={!shouldReduceMotion && activeIndex === null}
          sizes="(max-width: 1024px) 100vw, 50vw"
          onOpen={(photo) => setActiveIndex(photos.indexOf(photo))}
        />
      </motion.div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute bottom-5 left-5 bg-primary-navy/75 px-4 py-2 text-[0.6rem] font-bold uppercase tracking-[0.207em] text-white sm:bottom-7 sm:left-7"
      >
        {photos.length} photos
      </span>

      <GalleryLightbox
        images={lightboxImages}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={() => step(-1)}
        onNext={() => step(1)}
      />
    </div>
  );
}
