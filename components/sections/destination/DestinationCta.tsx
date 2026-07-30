"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { ParallaxImage } from "@/components/common/ParallaxImage";

export interface DestinationCtaProps {
  name: string;
  imageSrc: string;
  imageAlt: string;
}

export function DestinationCta({ name, imageSrc, imageAlt }: Readonly<DestinationCtaProps>) {
  return (
    <section className="relative flex h-dvh min-h-140 items-center justify-center overflow-hidden">
      <ParallaxImage src={imageSrc} alt={imageAlt} strength={14} />
      <div className="absolute inset-0 bg-primary-navy/70" />

      <Container className="relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl"
        >
          <p className="relative mb-6 inline-block pb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary-gold sm:text-sm">
            Let us plan it for you
            <span className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 bg-primary-gold" aria-hidden="true" />
          </p>
          <h2 className="text-4xl font-display font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Ready to talk {name}?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-primary-cream">
            Tell us roughly when you want to travel and what matters most to you. No commitment, just a real conversation and ideas back within 48 hours.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/#contact" focusTone="onDark" fullWidthOnMobile>
              Start planning my trip
            </ButtonLink>
            <a
              href="tel:07789652136"
              className="inline-flex w-full cursor-pointer items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide text-white transition-colors duration-200 hover:text-primary-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:text-base"
            >
              Or call 07789 652 136
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}

