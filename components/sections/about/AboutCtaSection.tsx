"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";

export function AboutCtaSection() {
  return (
    <section className="bg-primary-cream section-y">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <Heading as="h2" size="lg">
            Tell us where you would like to go.
          </Heading>
          <Text size="lg" className="mt-[13px] text-primary-navy">
            No commitment, just a conversation about what matters most to you and how we can help you get there.
          </Text>

          <div className="mt-8 flex justify-center">
            <ButtonLink href="/#contact">
              Start planning my trip
            </ButtonLink>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
