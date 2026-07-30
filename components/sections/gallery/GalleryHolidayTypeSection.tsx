"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { StackedPhotoCarousel, type StackedPhotoItem } from "@/components/common/StackedPhotoCarousel";
import type { HolidayTypeDetail } from "@/lib/holidayTypeDetails";

export interface GalleryHolidayTypeSectionProps {
  holidayType: HolidayTypeDetail;
  index: number;
  totalCount: number;
  tone?: "dark" | "light";
  reverse?: boolean;
}

export function GalleryHolidayTypeSection({
  holidayType,
  tone = "dark",
  reverse = false,
}: Readonly<GalleryHolidayTypeSectionProps>) {
  // Construct photo stack from holidayType images
  const stackPhotos: StackedPhotoItem[] = [
    { src: holidayType.heroImage, alt: holidayType.heroImageAlt, title: `${holidayType.name} Overview` },
    { src: holidayType.secondaryImage, alt: holidayType.secondaryImageAlt, title: `${holidayType.name} Feature` },
    ...holidayType.galleryImages.map((g) => ({
      src: g.src,
      alt: g.alt,
      title: g.title,
    })),
  ];

  const bgClasses = tone === "dark" ? "bg-primary-navy text-white" : "bg-primary-cream text-primary-navy";
  const subTagColor = tone === "dark" ? "text-primary-gold" : "text-primary-sky";
  const bodyTextColor = tone === "dark" ? "text-primary-cream" : "text-primary-navy/80";
  const underlineColor = tone === "dark" ? "gold" : "sky";

  return (
    <section className={`section-y-lg overflow-hidden ${bgClasses}`}>
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 24 : -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className={reverse ? "lg:order-2" : "lg:order-1"}
          >
            <SectionEyebrow underlineColor={underlineColor} dark={tone === "dark"}>
              {holidayType.watermark}
            </SectionEyebrow>

            <h2 className="text-3xl font-display font-bold leading-tight xs:text-4xl sm:text-5xl lg:text-6xl">
              {holidayType.name}
            </h2>

            <p className={`mt-4 text-lg italic leading-snug font-medium opacity-90 ${subTagColor}`}>
              “{holidayType.tagline}”
            </p>

            <div className="mt-6 space-y-4">
              {holidayType.intro.slice(0, 2).map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className={`text-base leading-relaxed ${bodyTextColor}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Button Link */}
            <div className="mt-9">
              <ButtonLink href={`/holidays/${holidayType.slug}`} focusTone="onDark">
                <span className="flex items-center gap-2">
                  Explore {holidayType.name}
                  <svg viewBox="0 0 16 16" aria-hidden="true" className="h-4 w-4 fill-none stroke-current">
                    <path d="M3 8H13M9 4L13 8L9 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </ButtonLink>
            </div>
          </motion.div>

          {/* Stacked Photo Carousel Column */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className={reverse ? "lg:order-1" : "lg:order-2"}
          >
            <StackedPhotoCarousel photos={stackPhotos} tone={tone} />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
