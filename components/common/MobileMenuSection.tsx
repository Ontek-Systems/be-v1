"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export interface MobileMenuSectionItem {
  key: string;
  label: string;
  href: string;
}

export interface MobileMenuSectionProps {
  /** The section's own index page, linked above its children. */
  href: string;
  label: string;
  items: MobileMenuSectionItem[];
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: () => void;
  /** Two columns suits short labels, one column suits long ones. */
  columns?: 1 | 2;
}

/**
 * A top level menu entry that owns a list of children. The list is collapsed
 * by default: expanded, the thirteen holiday types and seven destinations
 * pushed Gallery, Testimonials and Contact two screens down the menu.
 */
export function MobileMenuSection({
  href,
  label,
  items,
  isOpen,
  onToggle,
  onNavigate,
  columns = 1,
}: Readonly<MobileMenuSectionProps>) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="group mx-auto flex min-h-14 cursor-pointer items-center justify-center gap-3 py-1 text-white transition-colors duration-200 hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold sm:min-h-16"
      >
        <span
          className={`font-display text-2xl font-bold leading-none sm:text-3xl ${isOpen ? "underline decoration-primary-gold decoration-2 underline-offset-8" : ""}`}
        >
          {label}
        </span>
        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
          className={`h-3.5 w-3.5 shrink-0 fill-none stroke-current stroke-2 transition-transform duration-300 ease-out ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path d="M3 6L8 11L13 6" strokeLinecap="square" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className={`pb-5 text-center ${columns === 2 ? "grid grid-cols-1 gap-x-8 sm:grid-cols-2" : "flex flex-col"}`}>
              <li className={columns === 2 ? "sm:col-span-2" : undefined}>
                <Link
                  href={href}
                  onClick={onNavigate}
                  className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-[0.9375rem] font-bold text-white transition-colors duration-150 hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold"
                >
                  All {label.toLowerCase()}
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </li>
              {items.map((item) => (
                <li key={item.key}>
                  <Link
                    href={item.href}
                    onClick={onNavigate}
                    className="flex min-h-11 cursor-pointer items-center justify-center text-[0.9375rem] text-white/90 transition-colors duration-150 hover:text-primary-gold focus-visible:outline-none focus-visible:text-primary-gold"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
