"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/ui/Logo";
import { NavLink } from "@/components/ui/NavLink";
import { NavDropdown } from "@/components/common/NavDropdown";
import { BarDivider } from "@/components/ui/BarDivider";
import { IconButton } from "@/components/ui/IconButton";
import { MobileMenuPanel } from "@/components/common/MobileMenuPanel";
import { TopContactBar } from "@/components/sections/TopContactBar";
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

interface HeaderProps {
  /** For pages with no hero underneath: the bar is solid from the start. */
  solid?: boolean;
}

export function Header({ solid = false }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(solid);
  const shellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* Transparent only at the very top of a hero, solid everywhere else. Checked
     on mount too, so a reload halfway down the page (where the browser restores
     the scroll position without necessarily firing a scroll event) starts solid. */
  useEffect(() => {
    if (solid) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("load", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, [solid]);

  /*
    The hero sits underneath this whole stack, so it needs its exact height.
    Measured rather than hardcoded, so changing the logo or the bar cannot
    knock the hero out of alignment.
  */
  useEffect(() => {
    const element = shellRef.current;
    if (!element) return;

    const apply = () =>
      document.documentElement.style.setProperty(
        "--header-total",
        `${element.getBoundingClientRect().height}px`,
      );

    apply();
    const observer = new ResizeObserver(apply);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div ref={shellRef} className="isolate fixed inset-x-0 top-0 z-40">
        {/*
          The top half of the hero scrim. Over a hero the bars are transparent,
          and without this the nav sits directly on the photograph and is close
          to unreadable against a bright sky. It fades out as the solid bars
          take over on scroll. Black to match HeroScrim's floor gradient, which
          is the documented exception in CLAUDE.md §3.
        */}
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-x-0 top-0 -z-10 h-[calc(100%+2.5rem)] bg-gradient-to-b from-black/81 via-black/38 via-55% to-transparent transition-opacity duration-300 ease-out ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        />

        <TopContactBar isScrolled={isScrolled} />

        <header
          className={`relative transition-colors duration-300 ease-out ${
            isScrolled ? "bg-primary-sky" : "bg-transparent"
          }`}
        >
        <Container className="relative flex items-center justify-between py-1.5 sm:py-[0.425rem]">
          <Logo tone="cream" />

          <nav className="hidden lg:flex lg:items-center lg:gap-6 xl:gap-[29.07px]">
            {navLinks.map((link) => {
              if (link.href === "/destinations") {
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
              if (link.href === "/holidays") {
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
              if (link.href === "/contact") return null;
              return <NavLink key={link.href} href={link.href} label={link.label} tone="cream" />;
            })}
            <BarDivider className="h-6! bg-white/35!" />
            <NavLink href="/contact" label="Plan your trip" tone="cream" />
          </nav>

          <IconButton
            label="Open menu"
            tone="light"
            ariaExpanded={isMobileMenuOpen}
            ariaControls="mobile-menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="h-12! w-12! -mr-2 lg:hidden bg-transparent! text-white! hover:text-primary-gold!"
          >
            <svg viewBox="0 0 20 14" aria-hidden="true" className="h-5 w-7 fill-none stroke-current">
              <path d="M0 1H20M0 7H20M0 13H20" strokeWidth="1.75" strokeLinecap="round" />
            </svg>
          </IconButton>
        </Container>
        </header>
      </div>

      <MobileMenuPanel isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </>
  );
}
