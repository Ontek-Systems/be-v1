"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GalleryLightbox } from "@/components/common/GalleryLightbox";
import type { GalleryImage } from "@/lib/galleryImages";
import { DURATION, EASE, LEAD_IN, VIEWPORT, stagger } from "@/lib/motion";

export interface GalleryGridProps {
  images: GalleryImage[];
  /** How many to show before "Show more". Pass 0 to render them all at once. */
  pageSize?: number;
}

/**
 * The bento grid and its lightbox, shared by the homepage gallery section and
 * the gallery page. Row height is uniform and only the column span varies, so
 * dense packing always backfills the gaps rather than leaving holes.
 */
const aspectSpanClasses: Record<GalleryImage["aspectRatio"], string> = {
  tall: "col-span-1",
  wide: "col-span-2",
  square: "col-span-1",
};

export function GalleryGrid({ images, pageSize = 12 }: Readonly<GalleryGridProps>) {
  const paginated = pageSize > 0;
  const [visibleCount, setVisibleCount] = useState(paginated ? pageSize : images.length);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleImages = paginated ? images.slice(0, visibleCount) : images;
  const hasMore = paginated && visibleCount < images.length;
  const isExpanded = paginated && visibleCount > pageSize;

  const prevImage = () =>
    setLightboxIndex((current) => (current !== null ? (current - 1 + images.length) % images.length : null));
  const nextImage = () =>
    setLightboxIndex((current) => (current !== null ? (current + 1) % images.length : null));

  return (
    <>
      <div className="grid auto-rows-35 grid-flow-row-dense grid-cols-2 gap-3 sm:auto-rows-42.5 sm:grid-cols-3 sm:gap-4 lg:auto-rows-47.5 lg:grid-cols-4 lg:gap-5">
        {visibleImages.map((image, index) => (
          <motion.button
            key={image.src}
            type="button"
            initial={{ opacity: 0, y: 28, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.reveal, delay: LEAD_IN + stagger(index % 6, 0.07), ease: EASE }}
            onClick={() => setLightboxIndex(index)}
            aria-label={`View photo: ${image.alt}`}
            className={`group relative block cursor-pointer overflow-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy ${aspectSpanClasses[image.aspectRatio]}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-primary-sky/30" />
          </motion.button>
        ))}
      </div>

      {(hasMore || isExpanded) && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {hasMore && (
            <Button
              variant="primary"
              onClick={() => setVisibleCount((current) => Math.min(current + pageSize, images.length))}
            >
              Show more photos
            </Button>
          )}
          {isExpanded && (
            <Button variant="ghost" onClick={() => setVisibleCount(pageSize)} className="text-primary-navy">
              Show less
            </Button>
          )}
        </div>
      )}

      <GalleryLightbox
        images={images}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={prevImage}
        onNext={nextImage}
      />
    </>
  );
}
