"use client";

import { motion } from "framer-motion";
import { Heading } from "@/components/ui/Heading";
import { Text } from "@/components/ui/Text";
import { ContactPersonLink } from "@/components/common/ContactPersonLink";
import { SocialLinks } from "@/components/common/SocialLinks";
import { EmailIcon } from "@/components/ui/EmailIcon";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { contactEmail, reachableContactPeople, sylviaEmail, whatsappHref } from "@/lib/contactDetails";
import { DURATION, EASE, LEAD_IN, VIEWPORT, stagger } from "@/lib/motion";

const rowClasses =
  "inline-flex min-h-11 items-center gap-3 text-base font-semibold text-white transition-colors duration-150 hover:text-primary-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white";

const labelClasses = "text-[0.64rem] font-bold uppercase tracking-[0.207em] text-primary-gold";

/**
 * The three ways to reach Emma and Sylvia, as a standing panel beside the
 * enquiry form. Numbers come from `contactDetails`, so Sylvia appears here on
 * her own the moment her number is filled in rather than needing this edited.
 */
export function ContactMethodPanel() {
  return (
    <motion.aside
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: DURATION.reveal, delay: LEAD_IN + 0.12, ease: EASE }}
      className="self-start bg-primary-sky p-8 sm:p-10"
    >
      <Heading as="h2" size="sm" className="text-white">
        Reach us directly
      </Heading>
      <Text size="sm" className="mt-3 text-primary-cream">
        Based in Ormskirk, Lancashire, and available seven days a week.
      </Text>

      <div className="mt-8 space-y-7">
        <div>
          <p className={labelClasses}>Phone and WhatsApp</p>
          <div className="mt-2 flex flex-col items-start gap-1">
            {reachableContactPeople.map((person) => (
              <ContactPersonLink key={person.name} person={person} className={rowClasses} />
            ))}
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={rowClasses}>
              <WhatsAppIcon className="h-5 w-5 shrink-0" />
              <span>Message us on WhatsApp</span>
            </a>
          </div>
        </div>

        <div>
          <p className={labelClasses}>Email</p>
          <div className="mt-2 flex flex-col items-start gap-1">
            {[contactEmail, sylviaEmail].map((email) => (
              <a key={email} href={`mailto:${email}`} className={rowClasses}>
                <EmailIcon className="h-4 w-5 shrink-0" />
                <span className="break-all">{email}</span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className={labelClasses}>Follow along</p>
          <SocialLinks className="mt-1" />
        </div>
      </div>
    </motion.aside>
  );
}
