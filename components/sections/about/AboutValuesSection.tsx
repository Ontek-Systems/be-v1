"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";

interface Value {
  title: string;
  description: string;
}

const values: Value[] = [
  {
    title: "One point of contact",
    description: "The person who plans your trip is the person who answers when you call.",
  },
  {
    title: "No commission steering",
    description: "We recommend what suits you, not whichever hotel pays the best rate.",
  },
  {
    title: "Genuinely available",
    description: "Evenings, weekends, time zones. Real trips do not run on office hours.",
  },
];

export function AboutValuesSection() {
  return (
    <section className="relative overflow-hidden section-y">
      <Image
        src="/be-v1/assets/images/ALL-IMAGES/Full%20Images/blissful-escapes-travel-agent-image-83.webp"
        alt="Malaga waterfront at dusk"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-primary-navy/80" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <SectionEyebrow underlineColor="gold">What matters to us</SectionEyebrow>
          <Heading as="h2" size="lg" className="text-white">
            The details we do not compromise on.
          </Heading>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3 sm:gap-6 lg:gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
              className="bg-primary-cream p-7 sm:p-8"
            >
              <p className="text-lg font-semibold text-primary-navy">{value.title}</p>
              <p className="mt-3 text-sm leading-relaxed text-primary-sky sm:text-base">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

