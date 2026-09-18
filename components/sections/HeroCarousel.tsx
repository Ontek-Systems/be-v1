"use client";

import { useEffect, useState } from "react";
import { CrossfadeBackground } from "@/components/common/CrossfadeBackground";
import { HeroScrim } from "@/components/ui/HeroScrim";
import { basePath } from "@/lib/siteConfig";

const AUTO_ADVANCE_MS = 4000;

const slides = [
  { src: `${basePath}/assets/images/hero/santorini-caldera-terrace.webp` },
  { src: `${basePath}/assets/images/hero/capri-clifftop-terrace.webp` },
  { src: `${basePath}/assets/images/hero/manarola-cinque-terre.webp` },
  { src: `${basePath}/assets/images/hero/portofino-harbour-front.webp` },
  { src: `${basePath}/assets/images/hero/maldives-atoll-aerial.webp` },
  { src: `${basePath}/assets/images/destinations/europe/positano-amalfi-coast.webp` },
  { src: `${basePath}/assets/images/hero/dubrovnik-old-town-aerial.webp` },
  { src: `${basePath}/assets/images/hero/grenada-harbor-town.webp` },
  { src: `${basePath}/assets/images/hero/venice-rialto-grand-canal.webp` },
  { src: `${basePath}/assets/images/destinations/oceania/queenstown-lake-wakatipu.webp` },
  { src: `${basePath}/assets/images/hero/valletta-skyline.webp` },
];

export function HeroCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, AUTO_ADVANCE_MS);
    return () => clearTimeout(timer);
  }, [activeIndex]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <CrossfadeBackground src={slides[activeIndex].src} priority />
      <HeroScrim />
    </div>
  );
}
