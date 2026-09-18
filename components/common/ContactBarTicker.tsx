"use client";

import { useMemo, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { useReducedMotion } from "framer-motion";

export interface ContactBarTickerItem {
  key: string;
  node: ReactNode;
}

export interface ContactBarTickerProps {
  items: ContactBarTickerItem[];
  className?: string;
}

/**
 * One continuous row for the contact band. The band used to wrap onto two full
 * width rows on a phone, which pushed the hero down by most of a thumb and made
 * the top of the page read as a toolbar. This keeps it to a single line that
 * drifts through the same content instead.
 *
 * The list is rendered twice so the loop has enough width to run without a
 * visible gap on a wide screen. The copy is inert as well as hidden, so the
 * numbers are announced once and a tab press never lands on a duplicate.
 */
export function ContactBarTicker({ items, className = "" }: Readonly<ContactBarTickerProps>) {
  const shouldReduceMotion = useReducedMotion();

  const plugins = useMemo(
    () =>
      shouldReduceMotion
        ? []
        : [AutoScroll({ speed: 0.55, startDelay: 0, stopOnInteraction: false, stopOnMouseEnter: true })],
    [shouldReduceMotion],
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: "start", dragFree: true, containScroll: false, watchDrag: true },
    plugins,
  );

  return (
    <div className={`overflow-hidden ${className}`} ref={emblaRef}>
      <div className="flex touch-pan-y items-center">
        {items.map((item) => (
          <div key={item.key} className="flex flex-none items-center pr-[1.275rem] sm:pr-[1.7rem]">
            {item.node}
          </div>
        ))}
        {items.map((item) => (
          <div
            key={`echo-${item.key}`}
            aria-hidden="true"
            inert
            className="flex flex-none items-center pr-[1.275rem] sm:pr-[1.7rem]"
          >
            {item.node}
          </div>
        ))}
      </div>
    </div>
  );
}
