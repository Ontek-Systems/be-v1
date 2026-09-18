"use client";

import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import type { HolidayGalleryImage } from "@/lib/holidayTypeDetails";

export interface HolidayTypeGallerySectionProps {
  images: HolidayGalleryImage[];
}

/**
 * Three plates, with the middle one dropped at lg so the row reads as a spread
 * rather than as three equal thumbnails in a line.
 */
export function HolidayTypeGallerySection({ images }: Readonly<HolidayTypeGallerySectionProps>) {
  return (
    <section className="bg-white section-y">
      <Container>
        <SectionHeader eyebrow="Gallery" title="A closer look" />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-5 lg:gap-8">
          {images.map((image, index) => (
            <Reveal
              key={image.src}
              index={index}
              className={index === 1 ? "lg:mt-16" : index === 2 ? "lg:mt-8" : ""}
            >
              <figure className="group">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  />
                </div>

                <figcaption className="mt-5 text-center font-display lg:text-left text-lg font-bold tracking-tight text-primary-navy sm:text-xl">
                  {image.title}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
