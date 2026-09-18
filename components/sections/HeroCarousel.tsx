"use client";

import { useEffect, useState } from "react";
import { CrossfadeBackground } from "@/components/common/CrossfadeBackground";
import { HeroScrim } from "@/components/ui/HeroScrim";
import { basePath } from "@/lib/siteConfig";

const AUTO_ADVANCE_MS = 4000;

const slides = [
  { src: `${basePath}/assets/images/hero/maldives-atoll-aerial.webp` },
  { src: `${basePath}/assets/images/destinations/africa/acacia-sunset.webp` },
  { src: `${basePath}/assets/images/destinations/north-america/horseshoe-bend.webp` },
  { src: `${basePath}/assets/images/destinations/southeast-asia/longtail-boat-limestone.webp` },
  { src: `${basePath}/assets/images/destinations/oceania/queenstown-lake-wakatipu.webp` },
  { src: `${basePath}/assets/images/destinations/middle-east/burj-al-arab-coast.webp` },
  { src: `${basePath}/assets/images/destinations/africa/elephants-savannah.webp` },
  { src: `${basePath}/assets/images/destinations/southeast-asia/vietnam-valley-sunrise.webp` },
  { src: `${basePath}/assets/images/destinations/indian-ocean/overwater-villas-heron.webp` },
  { src: `${basePath}/assets/images/destinations/oceania/south-island-mountains.webp` },
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
