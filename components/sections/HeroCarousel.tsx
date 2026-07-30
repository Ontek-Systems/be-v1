"use client";

import { useEffect, useState } from "react";
import { CrossfadeBackground } from "@/components/common/CrossfadeBackground";

const AUTO_ADVANCE_MS = 4000;

const slides = [
  { src: "/assets/images/hero/barbados-palm-tree-boat.jpg" },
  { src: "/assets/images/hero/capri-clifftop-terrace.jpg" },
  { src: "/assets/images/hero/croatia-coastal-village.jpg" },
  { src: "/assets/images/hero/dubai-palm-jumeirah-aerial.jpg" },
  { src: "/assets/images/hero/elephants-crossing-river.jpeg" },
  { src: "/assets/images/hero/grenada-harbor-town.jpg" },
  { src: "/assets/images/hero/havana-pink-classic-car.jpg" },
  { src: "/assets/images/hero/jamaica-colorful-hillside.jpg" },
  { src: "/assets/images/hero/las-vegas-strip-night.jpeg" },
  { src: "/assets/images/hero/maldives-atoll-aerial.jpeg" },
  { src: "/assets/images/hero/malta-valletta-harbor.jpg" },
  { src: "/assets/images/hero/new-orleans-bourbon-street.jpeg" },
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 via-50% to-transparent" />
    </div>
  );
}
