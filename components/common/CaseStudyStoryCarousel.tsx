"use client";

import { useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { Text } from "@/components/ui/Text";
import { CaseStudyReview } from "@/components/common/CaseStudyReview";
import { CaseStudyCarouselDots } from "@/components/common/CaseStudyCarouselDots";
import type { CaseStudy } from "@/lib/caseStudies";

export interface CaseStudyStoryCarouselProps {
  caseStudy: CaseStudy;
  className?: string;
}

/**
 * Two panels beside the photographs: the client's review, then what the trip
 * was. The review stays put and never turns on its own. It is a native scroll
 * snap track, so a reader can swipe across, or choose a panel from the dots.
 * Both panels sit in one row, so the block is as tall as the longer of the two.
 */
export function CaseStudyStoryCarousel({ caseStudy, className = "" }: Readonly<CaseStudyStoryCarouselProps>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  const firstName = caseStudy.name.split(" ")[0];
  const panels = [
    {
      label: `${firstName}'s review`,
      content: <CaseStudyReview review={caseStudy.review} name={caseStudy.name} />,
    },
    {
      label: "The trip",
      content: (
        <div className="space-y-5">
          {[caseStudy.occasion, caseStudy.brief, caseStudy.arranged].map((paragraph) => (
            <Text key={paragraph.slice(0, 32)} size="base" className="text-primary-navy/85">
              {paragraph}
            </Text>
          ))}
        </div>
      ),
    },
  ];

  const goTo = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollTo({ left: index * track.clientWidth, behavior: shouldReduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className={className}>
      <div
        ref={trackRef}
        onScroll={() => {
          const track = trackRef.current;
          if (track) setActive(Math.round(track.scrollLeft / track.clientWidth));
        }}
        className="flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {panels.map((panel) => (
          <div
            key={panel.label}
            role="group"
            aria-roledescription="slide"
            aria-label={panel.label}
            className="w-full min-w-full shrink-0 snap-center"
          >
            {panel.content}
          </div>
        ))}
      </div>

      <CaseStudyCarouselDots
        labels={panels.map((panel) => panel.label)}
        active={active}
        onSelect={goTo}
        className="mt-7 justify-center lg:justify-start"
      />
    </div>
  );
}
