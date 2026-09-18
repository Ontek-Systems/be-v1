"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useReducedMotion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { Heading } from "@/components/ui/Heading";
import { TestimonialCard } from "@/components/common/TestimonialCard";
import { testimonials, type Testimonial } from "@/lib/testimonials";

const PIXELS_PER_SECOND = 22;
const RESUME_DELAY_MS = 300;

export interface TestimonialsSectionProps {
  /** Defaults to every review. The testimonials page passes only those not told as case studies. */
  items?: Testimonial[];
  eyebrow?: string;
  title?: string;
  className?: string;
}

export function TestimonialsSection({
  items = testimonials,
  eyebrow = "Reviews",
  title = "29 five star reviews on Google",
  className = "",
}: Readonly<TestimonialsSectionProps>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const hasInitializedRef = useRef(false);
  const [setWidth, setSetWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  /* Below lg the marquee only ever showed a sliver of two cards at once, so a
     phone could never read a whole review. Touch sizes get a snapping
     scroller instead, which is also what a thumb expects. */
  const [isCompact, setIsCompact] = useState(true);
  const shouldReduceMotion = useReducedMotion();
  const x = useMotionValue(0);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const apply = () => setIsCompact(!query.matches);
    apply();
    query.addEventListener("change", apply);
    return () => query.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || isCompact) return;

    const measure = () => {
      const width = track.scrollWidth / 2;
      setSetWidth(width);
      if (!hasInitializedRef.current && width > 0) {
        x.set(0);
        hasInitializedRef.current = true;
      }
    };
    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(track);
    return () => observer.disconnect();
  }, [x, isCompact]);

  useEffect(() => {
    if (isCompact || shouldReduceMotion || isDragging || isPaused || setWidth === 0) return;

    let active = true;
    let controls: ReturnType<typeof animate>;

    const step = () => {
      if (!active) return;

      let current = x.get();
      if (current <= -setWidth) current += setWidth;
      if (current > 0) current -= setWidth;
      x.set(current);

      const target = current - setWidth;
      const duration = Math.abs(target - current) / PIXELS_PER_SECOND;

      controls = animate(x, target, {
        duration,
        ease: "linear",
        onComplete: () => {
          if (!active) return;
          x.set(x.get() + setWidth);
          step();
        },
      });
    };

    step();

    return () => {
      active = false;
      controls?.stop();
    };
  }, [isCompact, isDragging, isPaused, shouldReduceMotion, setWidth, x]);

  const handleDragEnd = () => {
    clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsDragging(false), RESUME_DELAY_MS);
  };

  const handleDrag = () => {
    if (setWidth === 0) return;
    const current = x.get();
    if (current > 0) x.set(current - setWidth);
    else if (current < -setWidth) x.set(current + setWidth);
  };

  return (
    <section
      id="testimonials"
      className={`section-y overflow-hidden ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Container>
        <div className="mb-8 flex flex-col items-center text-center sm:mb-10">
          <SectionEyebrow align="centered">{eyebrow}</SectionEyebrow>
          <Heading as="h2" size="lg">
            {title}
          </Heading>
        </div>
      </Container>

      {isCompact ? (
        /* Native horizontal scroll, one review snapped to the centre at a time. */
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 pb-2 sm:gap-5 sm:px-8 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {items.map((testimonial) => (
            <div key={testimonial.id} className="snap-center">
              <TestimonialCard
                name={testimonial.name}
                destination={testimonial.destination}
                quote={testimonial.quote}
                imageSrc={testimonial.imageSrc}
                imageAlt={testimonial.imageAlt}
                  imagePosition={testimonial.imagePosition}
              />
            </div>
          ))}
        </div>
      ) : (
        /* Full-bleed carousel: auto-slides slowly right to left, draggable to browse manually */
        <div className="relative overflow-hidden">
          <motion.div
            ref={trackRef}
            drag={shouldReduceMotion ? false : "x"}
            dragMomentum={false}
            onDragStart={() => {
              clearTimeout(resumeTimeoutRef.current);
              setIsDragging(true);
            }}
            onDrag={handleDrag}
            onDragEnd={handleDragEnd}
            className={`flex gap-5 px-10 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
            style={{ x, width: "max-content" }}
          >
            {[...items, ...items].map((testimonial, index) => (
              <motion.div
                key={`${testimonial.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % items.length) * 0.07 }}
              >
                <TestimonialCard
                  name={testimonial.name}
                  destination={testimonial.destination}
                  quote={testimonial.quote}
                  imageSrc={testimonial.imageSrc}
                  imageAlt={testimonial.imageAlt}
                  imagePosition={testimonial.imagePosition}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      )}

    </section>
  );
}
