"use client";

import { useEffect, useCallback, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { type GalleryImage } from "@/lib/galleryImages";

export interface GalleryLightboxProps {
  images: GalleryImage[];
  activeIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function GalleryLightbox({
  images,
  activeIndex,
  onClose,
  onPrev,
  onNext,
}: Readonly<GalleryLightboxProps>) {
  const shouldReduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrev();
      if (event.key === "ArrowRight") onNext();

      /* Without this, tabbing walks straight out of the dialog and onto the
         page behind it, which is still there and still scrolled to wherever the
         reader left it. */
      if (event.key !== "Tab") return;
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>("button");
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose, onPrev, onNext]
  );

  const isOpen = activeIndex !== null;

  /* Keyed on open/closed rather than on the photo, so stepping between photos
     does not tear the scroll lock down and hand focus back to the grid. */
  useEffect(() => {
    if (!isOpen) return;

    returnFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), 50);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = "";
      /* Back to the thumbnail that opened it, not to the top of the document. */
      returnFocusRef.current?.focus();
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, handleKeyDown]);

  const image = activeIndex !== null ? images[activeIndex] : null;

  return (
    <AnimatePresence>
      {activeIndex !== null && image && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: shouldReduceMotion ? 0.1 : 0.25 }}
          ref={panelRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-primary-navy"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          onClick={onClose}
        >
          {/* Close */}
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close lightbox"
            className="absolute right-4 top-4 z-10 cursor-pointer p-2 text-white/70 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <svg viewBox="0 0 20 20" aria-hidden="true" className="h-6 w-6 fill-none stroke-current">
              <path d="M4 4L16 16M16 4L4 16" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          {/* Prev */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer p-3 text-white/70 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-6"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" className="h-6 w-6 fill-none stroke-current">
              <path d="M10 3L5 8L10 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          {/* Image */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="relative mx-12 max-h-[85dvh] w-full max-w-5xl sm:mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sized by viewport height, not a fixed 3:2 box, so portrait phone
                photographs fill the screen instead of shrinking to a sliver. */}
            <div className="relative h-[62dvh] w-full sm:h-[72dvh]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 90vw, 80vw"
                className="object-contain"
              />
            </div>
            <p className="mt-3 text-center text-sm text-white/80">{image.alt}</p>
          </motion.div>

          {/* Next */}
          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 z-10 -translate-y-1/2 cursor-pointer p-3 text-white/70 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-6"
          >
            <svg viewBox="0 0 16 16" aria-hidden="true" className="h-6 w-6 fill-none stroke-current">
              <path d="M6 3L11 8L6 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
