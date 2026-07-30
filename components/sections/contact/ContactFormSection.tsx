"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { TripEnquiryForm } from "@/components/common/TripEnquiryForm";

const reasons = [
  {
    title: "Personal Consultancy",
    body: "Single point of contact from initial plan through to returning home.",
  },
  {
    title: "600+ Trusted Suppliers",
    body: "Access to exclusive rates across luxury resorts, safaris, and boutique hotels.",
  },
  {
    title: "Zero Planning Fees",
    body: "All advice, quote iterations, and bespoke planning are completely free.",
  },
];

export function ContactFormSection() {
  return (
    <section id="contact-form" className="section-y-lg bg-primary-sky">
      <Container>
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            <SectionEyebrow>Start Planning Your Escape</SectionEyebrow>
            <Heading as="h2" size="lg">
              Tell us what you have in mind
            </Heading>
            <Text size="lg" className="mt-[13px] text-primary-navy">
              No commitment, just a conversation about where you want to go and what matters most. Fill in as much or as little as you like, and we will get back to you with ideas.
            </Text>

            <TripEnquiryForm
              idPrefix="contact-page"
              className="mt-10"
              successBody="We have received your travel details and will be in touch within 24 to 48 hours. In the meantime, if anything changes or you would like to speak sooner, feel free to call us on"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
            className="flex flex-col gap-8 self-start bg-primary-cream p-8 sm:p-10"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-navy">
                Why Book With Us
              </p>
              <ul className="mt-5 space-y-4">
                {reasons.map((reason) => (
                  <li
                    key={reason.title}
                    className="flex items-start gap-3 text-sm leading-relaxed text-primary-navy"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary-gold" aria-hidden="true" />
                    <span>
                      <strong>{reason.title}:</strong> {reason.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="h-px w-full bg-primary-sky/30" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-navy">
                Trust &amp; Credentials
              </p>
              <TrustBadges tone="white" className="mt-4" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
