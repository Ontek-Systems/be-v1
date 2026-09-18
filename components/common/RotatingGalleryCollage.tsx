"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { GalleryLightbox } from "@/components/common/GalleryLightbox";
import type { CollageTile, GalleryImage } from "@/lib/galleryImages";
import type { ClientPhoto } from "@/lib/clientPhotos";
import { DURATION, EASE, LEAD_IN, VIEWPORT, stagger } from "@/lib/motion";

export interface RotatingGalleryCollageProps {
  tiles: CollageTile[];
  /** Photos a tile can change to. */
  pool: ClientPhoto[];
  /** Milliseconds between swaps. */
  interval?: number;
}

const spanClasses: Record<GalleryImage["aspectRatio"], string> = {
  tall: "col-span-1",
  wide: "col-span-2",
  square: "col-span-1",
};

const onlyClasses: Record<NonNullable<CollageTile["only"]>, string> = {
  sm: "hidden sm:block lg:hidden",
  "not-sm": "sm:hidden lg:block",
};

function shuffle<T>(items: T[]): T[] {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * The homepage collage. Same bento grid as GalleryGrid, but every `interval`
 * one tile at random crossfades to a client photo that isn't already showing.
 * Pauses off screen and stays still for reduced motion.
 */
export function RotatingGalleryCollage({ tiles, pool, interval = 1000 }: Readonly<RotatingGalleryCollageProps>) {
  const [images, setImages] = useState<GalleryImage[]>(tiles);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { margin: "-90px" });
  const reduceMotion = useReducedMotion();
  const imagesRef = useRef(images);
  // Slots still to change this round, in random order. Every slot changes once
  // before any slot changes again.
  const slotQueue = useRef<number[]>([]);
  // The photo that just left a slot is still fading out, so keep it out of the next pick.
  const leaving = useRef<string | null>(null);
  const lastSlot = useRef(-1);

  useEffect(() => {
    imagesRef.current = images;
  }, [images]);

  const paused = !inView || reduceMotion || lightboxIndex !== null;

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      const current = imagesRef.current;
      const excluded = new Set(current.map((image) => image.src));
      if (leaving.current) excluded.add(leaving.current);
      const candidates = pool.filter((photo) => !excluded.has(photo.src));
      if (candidates.length === 0) return;

      if (slotQueue.current.length === 0) {
        const order = shuffle(current.map((_, index) => index));
        // Don't let the first slot of a new round repeat the last slot of the previous one.
        if (order.length > 1 && order[0] === lastSlot.current) order.push(order.shift() as number);
        slotQueue.current = order;
      }
      const slot = slotQueue.current.shift() as number;
      lastSlot.current = slot;

      const next = candidates[Math.floor(Math.random() * candidates.length)];
      leaving.current = current[slot].src;
      setImages(
        current.map((image, index) =>
          index === slot ? { ...image, src: next.src, alt: next.alt, source: "client" } : image,
        ),
      );
    }, interval);
    return () => window.clearInterval(id);
  }, [paused, pool, interval]);

  return (
    <>
      <div
        ref={gridRef}
        className="grid auto-rows-35 grid-flow-row-dense grid-cols-2 gap-3 sm:auto-rows-42.5 sm:grid-cols-3 sm:gap-4 lg:auto-rows-47.5 lg:grid-cols-4 lg:gap-5"
      >
        {images.map((image, index) => {
          const tile = tiles[index];
          return (
            <motion.button
              key={tile.src}
              type="button"
              initial={{ opacity: 0, y: 28, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: DURATION.reveal, delay: LEAD_IN + stagger(index % 6, 0.07), ease: EASE }}
              onClick={() => setLightboxIndex(index)}
              aria-label={`View photo: ${image.alt}`}
              className={`group relative block cursor-pointer overflow-hidden bg-primary-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy ${spanClasses[tile.aspectRatio]} ${tile.only ? onlyClasses[tile.only] : ""}`}
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={image.src}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: EASE }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-108"
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-transparent transition-colors duration-300 group-hover:bg-primary-sky/30" />
            </motion.button>
          );
        })}
      </div>

      <GalleryLightbox
        images={images}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={() => setLightboxIndex((c) => (c !== null ? (c - 1 + images.length) % images.length : null))}
        onNext={() => setLightboxIndex((c) => (c !== null ? (c + 1) % images.length : null))}
      />
    </>
  );
}
