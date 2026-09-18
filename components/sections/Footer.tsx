"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/navLinks";
import { AccreditationLogoRow } from "@/components/common/AccreditationLogoRow";
import { SocialLinks } from "@/components/common/SocialLinks";

export function Footer() {
  return (
    <footer className="bg-primary-sky pb-8 sm:pb-10">
      <div className="pt-16 sm:pt-20">
      <Container>
        {/* Top row */}
        <div className="flex flex-col items-center gap-12 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <Logo tone="cream" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white">
              Boutique travel planning, personally handled. Based in Ormskirk, Lancashire, available 7 days a week.
            </p>
            {/* Social */}
            <SocialLinks className="mt-5 justify-center sm:justify-start" />
          </div>

          {/* Nav */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary-gold">
              Navigate
            </p>
            <nav className="flex flex-col items-center gap-1 sm:items-start">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex min-h-10 items-center text-sm text-white transition-colors duration-150 hover:text-primary-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Legal / accreditation logos */}
        <AccreditationLogoRow className="mt-14" />

        {/* Divider using spacing, not a border */}
        <div className="mt-10 h-px bg-primary-gold" />

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center gap-4 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p className="text-xs text-white">
            Blissfulescapes Limited. Company number 14089700. ABTA P8691. ATOL 5790. IATA 91200734.
          </p>
          <div className="flex flex-row items-center gap-6">
            <Link
              href="/privacy"
              className="inline-flex min-h-10 cursor-pointer items-center text-xs text-white/70 transition-colors duration-150 hover:text-primary-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Privacy policy
            </Link>
            <Link
              href="/terms"
              className="inline-flex min-h-10 cursor-pointer items-center text-xs text-white/70 transition-colors duration-150 hover:text-primary-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Terms
            </Link>
          </div>
        </div>
      </Container>
      </div>
    </footer>
  );
}

