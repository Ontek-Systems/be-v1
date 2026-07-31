"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

/**
 * Full screen navy loader. The three logo SVGs all share the same
 * `0 0 375 78` viewBox, so stacking them at identical size lines every
 * segment up exactly as it sits in the full logo. They animate in
 * sequence: title, subtitle, then the gold rules spreading outward.
 */

const LOGO_LAYERS = [
  { src: "/be-v1/assets/images/logo-svg/title-logo-svg.svg", alt: "Blissful Escapes" },
  { src: "/be-v1/assets/images/logo-svg/subtitle-logo-svg.svg", alt: "" },
] as const;

interface LoadingScreenProps {
  /** How long the loader holds before it lifts, in milliseconds. */
  duration?: number;
}

export function LoadingScreen({ duration = 2100 }: LoadingScreenProps) {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(true);
    const timer = window.setTimeout(() => setVisible(false), reduceMotion ? 600 : duration);
    return () => window.clearTimeout(timer);
  }, [pathname, duration, reduceMotion]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          className="fixed inset-0 z-100 flex items-center justify-center bg-primary-sky"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="relative w-[82vw] max-w-[560px] sm:w-[70vw] md:w-[60vw] lg:w-[46vw] xl:w-[38vw]">
            <div className="relative w-full" style={{ aspectRatio: "375 / 78" }}>
              {LOGO_LAYERS.map((layer, index) => (
                <motion.img
                  key={layer.src}
                  src={layer.src}
                  alt={layer.alt}
                  aria-hidden={layer.alt === "" ? true : undefined}
                  className="absolute inset-0 h-full w-full"
                  initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.1,
                    delay: reduceMotion ? index * 0.15 : 0.2 + index * 0.4,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                />
              ))}

              {/* Left rule slides in from the left, right rule from the right, so
                  neither ever sweeps across the wordmark. */}
              <motion.img
                src="/be-v1/assets/images/logo-svg/lines-logo-svg.svg"
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full"
                style={{ clipPath: "inset(0 50% 0 0)" }}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: "-60%" }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{
                  duration: 1.1,
                  delay: reduceMotion ? 0.3 : 1.0,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
              <motion.img
                src="/be-v1/assets/images/logo-svg/lines-logo-svg.svg"
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full"
                style={{ clipPath: "inset(0 0 0 50%)" }}
                initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: "60%" }}
                animate={{ opacity: 1, x: "0%" }}
                transition={{
                  duration: 1.1,
                  delay: reduceMotion ? 0.3 : 1.0,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
