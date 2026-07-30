"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { NavDropdown } from "@/components/common/NavDropdown";
import { IconButton } from "@/components/ui/IconButton";
import { MobileMenuPanel } from "@/components/common/MobileMenuPanel";
import { navLinks } from "@/lib/navLinks";
import { destinationDetails } from "@/lib/destinationDetails";
import { holidayTypeDetails } from "@/lib/holidayTypeDetails";

const destinationDropdownItems = destinationDetails.map((destination) => ({
  href: `/destinations/${destination.slug}`,
  title: destination.name,
  subtitle: destination.region,
  imageSrc: destination.heroImage,
}));

const holidayTypeDropdownItems = holidayTypeDetails.map((holidayType) => ({
  href: `/holidays/${holidayType.slug}`,
  title: holidayType.name,
}));

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-primary-navy">
        <Container className="flex items-center justify-between py-2">
          <Logo tone="cream" />

          <nav className="hidden md:flex md:items-center md:gap-[22.61px] lg:gap-[29.07px]">
            {navLinks.map((link) => {
              if (link.href === "#destinations") {
                return (
                  <NavDropdown
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    items={destinationDropdownItems}
                    tone="cream"
                  />
                );
              }
              if (link.href === "#holiday-types") {
                return (
                  <NavDropdown
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    items={holidayTypeDropdownItems}
                    columns={2}
                    tone="cream"
                  />
                );
              }
              return (
                <span key={link.href} className="flex items-center gap-[22.61px] lg:gap-[29.07px]">
                  <NavLink href={link.href} label={link.label} tone="cream" />
                  {link.href === "/contact" && (
                    <>
                      <span className="h-4 w-px bg-white/25" aria-hidden="true" />
                      <a
                        href="tel:07789652136"
                        className="inline-flex items-center border-b-2 border-primary-gold pt-1 pb-[3.2px] text-[15.2px] font-semibold tracking-wide text-white transition-colors duration-200 hover:text-primary-gold"
                      >
                        07789 652 136
                      </a>
                    </>
                  )}
                </span>
              );
            })}
          </nav>

          <IconButton
            label="Open menu"
            tone="light"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden"
          >
            <svg viewBox="0 0 20 14" aria-hidden="true" className="h-4 w-5 fill-none stroke-current">
              <path d="M0 1H20M0 7H20M0 13H20" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </IconButton>
        </Container>
      </header>

      <MobileMenuPanel isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
