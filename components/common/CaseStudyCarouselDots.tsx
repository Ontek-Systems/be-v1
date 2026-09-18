"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface CaseStudyCarouselDotsProps {
  labels: string[];
  active: number;
  onSelect: (index: number) => void;
  className?: string;
}

/**
 * Short rules under a case study story carousel, one per panel. The panel
 * showing holds a still gold rule; the others breathe softly so a reader
 * sees there is more to choose. Still for anyone who prefers reduced motion.
 */
export function CaseStudyCarouselDots({
  labels,
  active,
  onSelect,
  className = "",
}: Readonly<CaseStudyCarouselDotsProps>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {labels.map((label, index) => {
        const isActive = index === active;
        return (
          <button
            key={label}
            type="button"
            onClick={() => onSelect(index)}
            aria-label={`Show ${label}`}
            aria-current={isActive}
            className="group cursor-pointer py-2 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-sky"
          >
            {isActive ? (
              <span aria-hidden="true" className="block h-0.5 w-12 bg-primary-gold" />
            ) : (
              <motion.span
                aria-hidden="true"
                className="block h-0.5 w-12 bg-primary-navy/35 transition-colors duration-300 group-hover:bg-primary-navy/60"
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: [0.4, 1, 0.4] }}
                transition={shouldReduceMotion ? undefined : { duration: 2, ease: "easeInOut", repeat: Infinity }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
}
