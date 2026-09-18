"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { DURATION, EASE, LEAD_IN, VIEWPORT, stagger } from "@/lib/motion";
import { basePath } from "@/lib/siteConfig";

interface Associate {
  name: string;
  src: string;
  widthClass: string;
}

const associates: Associate[] = [
  { name: "Emirates", src: `${basePath}/assets/images/logo-banner/Emirates-Logo.webp`, widthClass: "w-28 sm:w-32 lg:w-36" },
  {
    name: "Jumeirah",
    src: `${basePath}/assets/images/logo-banner/Jumeirah-Logo-Vector.svg-.webp`,
    widthClass: "w-32 sm:w-36 lg:w-40",
  },
  { name: "Qatar Airways", src: `${basePath}/assets/images/logo-banner/Qatar-Airways-Logo.webp`, widthClass: "w-32 sm:w-36 lg:w-40" },
  { name: "One&Only Resorts", src: `${basePath}/assets/images/logo-banner/one-and-only-logo.webp`, widthClass: "w-36 sm:w-40 lg:w-48" },
  {
    name: "Singapore Airlines",
    src: `${basePath}/assets/images/logo-banner/Singapore_Airlines_Logo_2.svg.webp`,
    widthClass: "w-32 sm:w-36 lg:w-40",
  },
];

export function AssociatesSection() {
  return (
    <section className="bg-primary-cream section-y-sm">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: DURATION.reveal, delay: LEAD_IN, ease: EASE }}
          className="flex flex-wrap items-center justify-center gap-x-10 gap-y-10 sm:gap-x-14 lg:gap-x-20"
        >
          {associates.map((associate) => (
            <div
              key={associate.name}
              className={`relative h-12 sm:h-14 lg:h-16 ${associate.widthClass} ${
                associate.name === "One&Only Resorts" ? "overflow-hidden" : ""
              }`}
            >
              <Image
                src={associate.src}
                alt={associate.name}
                fill
                sizes="(max-width: 640px) 128px, (max-width: 1024px) 144px, 160px"
                className={
                  associate.name === "One&Only Resorts"
                    ? "scale-125 object-contain"
                    : "object-contain"
                }
              />
            </div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
