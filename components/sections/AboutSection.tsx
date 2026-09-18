"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { TrustBadges } from "@/components/ui/TrustBadges";
import { DURATION, EASE, LEAD_IN, VIEWPORT, stagger } from "@/lib/motion";
import { basePath } from "@/lib/siteConfig";

interface CredentialItem {
  value: string;
  label: string;
}

const credentials: CredentialItem[] = [
  { value: "29", label: "Five star Google reviews" },
  { value: "600+", label: "Suppliers, tied to none" },
  { value: "7 days", label: "A week, phone or WhatsApp" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-y">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          {/* Text, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.reveal, delay: LEAD_IN, ease: EASE }}
            className="text-center lg:text-left"
          >
            <SectionEyebrow>About us</SectionEyebrow>
            <Heading as="h2" size="lg">
              Personally handled, start to finish
            </Heading>

            <div className="mx-auto mt-[22px] max-w-[34rem] space-y-5 sm:max-w-[38rem] lg:mx-0 lg:max-w-none">
              <Text size="lg" className="text-primary-navy leading-relaxed">
                Blissful Escapes is Emma Carrigan and Sylvia, working out of Ormskirk in Lancashire, midway between Liverpool and Manchester. Emma has spent the last four years planning luxury travel, after a career running large retail teams before that, and Sylvia looks after her own clients over towards Wigan. Between the two of us we plan every trip ourselves, and one of us answers when you ring.
              </Text>
              <Text size="lg" className="text-primary-navy leading-relaxed">
                Because we are independent, with over 600 suppliers behind us and no ties to any particular hotel group or airline, we can put you wherever the trip is genuinely best rather than wherever the commission happens to be highest.
              </Text>
              <Text size="lg" className="text-primary-navy leading-relaxed">
                Most of what we plan is honeymoons, safaris, proposals and destination weddings, the sort of trip where the details are worth getting right, though we are just as happy arranging a fortnight in the sun. Tell us what you have in mind and we will take it from there.
              </Text>
            </div>

            {/* Credentials row */}
            <div className="mt-10 grid grid-cols-1 gap-6 xs:grid-cols-3 xs:gap-4 sm:gap-8 lg:flex lg:flex-wrap lg:justify-start">
              {credentials.map((cred) => (
                <div key={cred.label}>
                  <p className="font-display text-3xl font-bold text-primary-navy sm:text-4xl lg:text-3xl">{cred.value}</p>
                  <p className="mx-auto mt-1 max-w-[12rem] text-sm text-primary-sky lg:mx-0">{cred.label}</p>
                </div>
              ))}
            </div>

            <TrustBadges className="mt-8 justify-center lg:justify-start" />
          </motion.div>

          {/* Image, right on desktop, video ready slot */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{ duration: DURATION.reveal, delay: LEAD_IN + 0.12, ease: EASE }}
            className="relative mx-auto w-full max-w-xs xs:max-w-sm sm:max-w-md lg:mx-0 lg:max-w-none"
          >
            {/*
              Video-ready slot: swap the inner <Image> for a <video> element
              and this wrapper stays the same. The aspect-[3/4] wrapper
              constrains both equally.
            */}
            <div className="relative aspect-[3/4] w-full overflow-hidden sm:aspect-[4/5] lg:aspect-[3/4]">
              <Image
                src={`${basePath}/assets/images/emma.webp`}
                alt="Emma Carrigan, who plans every Blissful Escapes trip"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
