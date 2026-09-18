"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { IconButton } from "@/components/ui/IconButton";
import { Logo } from "@/components/ui/Logo";
import { MobileMenuSection } from "@/components/common/MobileMenuSection";
import { navLinks } from "@/lib/navLinks";
import { destinationDetails } from "@/lib/destinationDetails";
import { holidayTypeDetails } from "@/lib/holidayTypeDetails";
import { TopContactBar } from "@/components/sections/TopContactBar";

const menuLinks = navLinks.map((link) => (link.href === "/contact" ? { ...link, label: "Plan your trip" } : link));

const holidayTypeItems = holidayTypeDetails.map((holidayType) => ({
  key: holidayType.slug,
  label: holidayType.name,
  href: `/holidays/${holidayType.slug}`,
}));

const destinationItems = destinationDetails.map((destination) => ({
  key: destination.slug,
  label: destination.name,
  href: `/destinations/${destination.slug}`,
}));

export interface MobileMenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Everything a thumb needs on one screen. The two long child lists collapse
 * behind their parent, so Gallery, Testimonials and Contact stay above the
 * fold instead of sitting twenty items down.
 */
export function MobileMenuPanel({ isOpen, onClose }: Readonly<MobileMenuPanelProps>) {
  const shouldReduceMotion = useReducedMotion();
  const [openSection, setOpenSection] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const toggle = (href: string) => setOpenSection((current) => (current === href ? null : href));

  /*
    The panel declares aria-modal, which promises three things it was not
    delivering: Escape closes it, Tab stays inside it, and focus goes back to
    the button that opened it. Without the trap a keyboard reader tabs straight
    off the end of the menu and onto the page behind it, which is still there
    and still fully focusable.
  */
  useEffect(() => {
    if (!isOpen) return;

    returnFocusRef.current = document.activeElement as HTMLElement | null;
    const focusTimer = window.setTimeout(() => {
      panelRef.current?.querySelector<HTMLElement>('button[aria-label="Close menu"]')?.focus();
    }, 50);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;

      const focusable = panelRef.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable || focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleKeyDown);
      returnFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence onExitComplete={() => setOpenSection(null)}>
      {isOpen && (
        <motion.div
          key="backdrop"
          aria-hidden="true"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 bg-primary-navy/40 lg:hidden"
        />
      )}
      {isOpen && (
        <motion.div
          key="panel"
          initial={shouldReduceMotion ? { opacity: 0 } : { y: "-100%" }}
          animate={shouldReduceMotion ? { opacity: 1 } : { y: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { y: "-100%" }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, ease: [0.16, 1, 0.3, 1] }}
          ref={panelRef}
          id="mobile-menu"
          className="fixed inset-x-0 top-0 z-50 flex max-h-dvh w-full flex-col overflow-y-auto overscroll-contain bg-primary-sky shadow-lg lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="shrink-0">
            <TopContactBar />
          </div>
          <div className="flex shrink-0 items-center justify-between px-5 py-3 sm:px-8">
            <Logo tone="cream" />
            <IconButton
              label="Close menu"
              tone="light"
              onClick={onClose}
              className="h-12! w-12! -mr-2 bg-transparent! text-white! hover:text-primary-gold!"
            >
              <svg viewBox="0 0 20 20" aria-hidden="true" className="h-6 w-6 fill-none stroke-current">
                <path d="M4 4L16 16M16 4L4 16" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </IconButton>
          </div>

          <span aria-hidden="true" className="mx-5 h-px shrink-0 bg-white/30 sm:mx-8" />

          <nav className="shrink-0 px-5 sm:px-8">
            <motion.ol
              className="flex flex-col items-center py-4 sm:py-6"
              initial="hidden"
              animate="shown"
              variants={{ shown: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.045, delayChildren: 0.08 } } }}
            >
              {menuLinks.map((link) => {
                const children =
                  link.href === "/holidays" ? holidayTypeItems : link.href === "/destinations" ? destinationItems : null;
                return (
                  <motion.li
                    key={link.href}
                    variants={{
                      hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
                      shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
                    }}
                  >
                    {children ? (
                      <MobileMenuSection
                        href={link.href}
                        label={link.label}
                        items={children}
                        columns={link.href === "/holidays" ? 2 : 1}
                        isOpen={openSection === link.href}
                        onToggle={() => toggle(link.href)}
                        onNavigate={onClose}
                      />
                    ) : (
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className="group flex min-h-14 items-center justify-center gap-3 py-1 text-white transition-colors duration-200 hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold sm:min-h-16"
                      >
                        <span
                          className={`font-display text-2xl font-bold leading-none sm:text-3xl ${
                            link.href === "/contact" ? "underline decoration-primary-gold decoration-2 underline-offset-8" : ""
                          }`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </motion.ol>
          </nav>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
