"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { IconButton } from "@/components/ui/IconButton";
import { HolidayTypeCarouselSlide } from "@/components/common/HolidayTypeCarouselSlide";
import type { HolidayType } from "@/lib/holidayTypes";

export interface HolidayTypeCarouselProps {
  items: HolidayType[];
  onIndexChange?: (index: number) => void;
}

export function HolidayTypeCarousel({ items, onIndexChange }: Readonly<HolidayTypeCarouselProps>) {
  const [autoplay] = useState(() =>
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center", slidesToScroll: 1, duration: 26 },
    [autoplay]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    autoplay.reset();
  }, [emblaApi, autoplay]);
  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    autoplay.reset();
  }, [emblaApi, autoplay]);
  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
      autoplay.reset();
    },
    [emblaApi, autoplay]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const index = emblaApi.selectedScrollSnap();
      setSelectedIndex(index);
      onIndexChange?.(index);
    };
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onIndexChange]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex touch-pan-y">
          {items.map((item, index) => (
            <div
              key={item.slug}
              className="mr-4 h-[22rem] flex-[0_0_78%] xs:flex-[0_0_72%] sm:mr-5 sm:h-96 sm:flex-[0_0_46%] md:flex-[0_0_38%] lg:h-[26rem] lg:flex-[0_0_26%]"
            >
              <HolidayTypeCarouselSlide
                label={item.label}
                tagline={item.tagline}
                href={`/holidays/${item.slug}`}
                imageSrc={item.imageSrc}
                imageAlt={item.imageAlt}
                imagePosition={item.imagePosition}
                isFirst={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/*
        Controls sit under the track rather than floating over the slides: at
        36px, overlaid on the artwork, they were neither hittable nor legible
        on a phone.
      */}
      <div className="mt-6 flex items-center justify-center gap-4 sm:gap-5">
        <IconButton
          label="Previous holiday type"
          tone="light"
          onClick={scrollPrev}
          className="h-12! w-12! shrink-0"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
            <path d="M10 3L5 8L10 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </IconButton>

        {/* Thirteen dots read as noise on a narrow screen, so the phone gets a
            plain count and the wider screens keep the dots. */}
        <p className="text-sm font-semibold tabular-nums text-white sm:hidden" aria-hidden="true">
          {String(selectedIndex + 1).padStart(2, "0")}
          <span className="text-primary-cream/70"> / {String(items.length).padStart(2, "0")}</span>
        </p>

        <div className="hidden items-center justify-center gap-0.5 sm:flex">
          {items.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              aria-label={`Show ${item.label}`}
              aria-current={index === selectedIndex}
              onClick={() => scrollTo(index)}
              className="cursor-pointer px-1 py-3"
            >
              <span
                className={`block h-1 transition-all duration-300 ease-out ${
                  index === selectedIndex ? "w-7 bg-white" : "w-2 bg-primary-cream/60"
                }`}
              />
            </button>
          ))}
        </div>

        <IconButton
          label="Next holiday type"
          tone="light"
          onClick={scrollNext}
          className="h-12! w-12! shrink-0"
        >
          <svg viewBox="0 0 16 16" aria-hidden="true" className="h-5 w-5 fill-none stroke-current">
            <path d="M6 3L11 8L6 13" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </IconButton>
      </div>
    </div>
  );
}
