"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { TripEnquiryForm } from "@/components/common/TripEnquiryForm";
import { EmailIcon } from "@/components/ui/EmailIcon";
import { PhoneIcon } from "@/components/ui/PhoneIcon";
import { contactEmail, contactPhoneDisplay, contactPhoneHref } from "@/lib/contactDetails";
import { DURATION, EASE, LEAD_IN, VIEWPORT, stagger } from "@/lib/motion";

const contactMethods = [
  {
    href: `tel:+${contactPhoneHref}`,
    label: contactPhoneDisplay,
    icon: <PhoneIcon className="h-4 w-4" />,
  },
  {
    href: `mailto:${contactEmail}`,
    label: contactEmail,
    icon: <EmailIcon className="h-4 w-5" />,
  },
];

export interface ContactSectionProps {
  /** Prefix for the form field ids, unique per page. */
  idPrefix?: string;
}

export function ContactSection({ idPrefix = "home-contact" }: Readonly<ContactSectionProps>) {
  return (
    <section id="contact" className="section-y bg-primary-navy">
      <Container>
        <div className="mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.reveal, delay: LEAD_IN, ease: EASE }}
            className="text-center"
          >
            <SectionEyebrow underlineColor="gold" dark align="centered">
              Ready when you are
            </SectionEyebrow>
            <Heading as="h2" size="lg" className="text-white">
              Start planning your trip
            </Heading>
            <Text size="lg" className="mx-auto mt-[13px] max-w-2xl text-primary-cream">
              There is nothing to book and nothing to commit to at this stage, so just tell us roughly what you have in mind and we will come back to you within two working days with some initial ideas.
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.reveal, delay: LEAD_IN + 0.12, ease: EASE }}
            className="relative mt-10 bg-white p-8 shadow-2xl sm:p-12"
          >
            <span className="absolute inset-x-0 top-0 h-1 bg-primary-gold" aria-hidden="true" />
            <TripEnquiryForm
              idPrefix={idPrefix}
              tone="onWhite"
              successBody="We have got your message and will come back to you within two working days. If anything changes, or you would rather just talk it through, you can reach us on"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.reveal, delay: LEAD_IN + 0.24, ease: EASE }}
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
