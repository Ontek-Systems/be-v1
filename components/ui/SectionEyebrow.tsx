"use client";

import { useEffect, useRef } from "react";

export interface SectionEyebrowProps {
  children: string;
  /** "centered" draws the underline centred under the text instead of left aligned. */
  align?: "left" | "centered";
  /** Underline colour — the only per-section variable. */
  underlineColor?: "sky" | "gold" | "cream" | "navy";
  /** Set on dark section backgrounds so the label text stays readable. */
  dark?: boolean;
  className?: string;
}

const underlineClasses: Record<NonNullable<SectionEyebrowProps["underlineColor"]>, string> = {
  sky: "bg-primary-sky",
  gold: "bg-primary-gold",
  cream: "bg-primary-cream",
  navy: "bg-primary-navy",
};

/**
 * The standardized uppercase label that sits above every section heading.
 * Only the label text, underline colour, and dark/light text variant may differ between sections —
 * font, weight, tracking, size and the scroll-in underline animation are locked site-wide.
 */
export function SectionEyebrow({
  children,
  align = "left",
  underlineColor = "gold",
  dark = false,
  className = "",
}: Readonly<SectionEyebrowProps>) {
  const underlineRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = underlineRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove("scale-x-0");
          el.classList.add("scale-x-100");
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      className={`relative mb-9 inline-block w-fit font-sans text-[0.64rem] font-bold uppercase tracking-[0.207em] ${
        dark ? "text-white" : "text-[#1e1d1c]"
      } ${className}`}
    >
      {children}
      <span
        ref={underlineRef}
        aria-hidden="true"
        className={`absolute bottom-[-0.35em] h-[2px] w-full origin-left scale-x-0 transition-transform duration-700 delay-150 ease-in-out ${
          underlineClasses[underlineColor]
        } ${align === "centered" ? "left-1/2 -translate-x-1/2" : "left-0"}`}
      />
    </p>
  );
}
