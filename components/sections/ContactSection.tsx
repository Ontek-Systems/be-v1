"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TripEnquiryForm } from "@/components/common/TripEnquiryForm";

const contactMethods = [
  {
    href: "mailto:emma@blissfulescapes.co.uk",
    label: "emma@blissfulescapes.co.uk",
    icon: (
      <svg viewBox="0 0 20 16" aria-hidden="true" className="h-4 w-5 fill-none stroke-current">
        <path d="M1 1H19V15H1V1Z M1 1L10 9L19 1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="section-y bg-primary-navy">
      <Container>
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="text-center"
          >
            <SectionEyebrow underlineColor="gold" dark align="centered">
              Ready when you are
            </SectionEyebrow>
            <Heading as="h2" size="lg" className="text-white">
              Let us start planning your trip
            </Heading>
            <Text size="lg" className="mx-auto mt-[13px] max-w-2xl text-primary-cream">
              Tell us a little about what you have in mind. There is no commitment here, just a conversation about where you want to go and what matters most to you. We will come back with ideas within 48 hours.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: "easeOut" }}
            className="relative mt-10 bg-white p-8 shadow-2xl sm:p-12"
          >
            <span className="absolute inset-x-0 top-0 h-1 bg-primary-gold" aria-hidden="true" />
            <TripEnquiryForm
              idPrefix="home-contact"
              tone="onWhite"
              successBody="We have got your message and will be in touch within a day or two. In the meantime, if anything changes or you would rather just call, you can reach us on"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-10"
          >
            {contactMethods.map((method) => (
              <a
                key={method.href}
                href={method.href}
                className="flex items-center gap-2.5 text-sm text-white/80 transition-colors hover:text-primary-gold focus-visible:outline-2 focus-visible:outline-primary-gold"
              >
                {method.icon}
                {method.label}
              </a>
            ))}
            <span className="flex items-center gap-2.5 text-sm text-white/80">
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-4 w-4 fill-none stroke-current">
                <circle cx="10" cy="8" r="3" strokeWidth="1.4" />
                <path d="M3 8C3 4.13 6.13 1 10 1s7 3.13 7 7c0 5-7 12-7 12S3 13 3 8Z" strokeWidth="1.4" />
              </svg>
              Ormskirk, Lancashire
            </span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
