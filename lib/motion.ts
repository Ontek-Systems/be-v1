/**
 * The site's motion vocabulary. Every animation reads from here, so timing is
 * changed in one place rather than retuned per component.
 *
 * Two decisions are deliberate and should not be undone casually:
 *
 * 1. Everything waits LEAD_IN before it starts. Reveals that fire the instant
 *    an element clips the viewport feel reactive and cheap; a beat of stillness
 *    first is most of what separates considered motion from twitchy motion.
 * 2. Reveals are slow. Under about 0.7s a fade and rise reads as a pop.
 */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** For things that move under a finger or a cursor, where expo feels sluggish. */
export const EASE_SOFT = [0.4, 0, 0.2, 1] as const;

export const DURATION = {
  /** Hovers, colour changes, chevrons. */
  micro: 0.3,
  /** Panels opening, tabs switching. */
  base: 0.6,
  /** Content arriving on scroll. */
  reveal: 0.9,
  /** Hero type and full bleed imagery. */
  hero: 1.2,
} as const;

/** The pause before any reveal begins. */
export const LEAD_IN = 0.2;

/** Gap between siblings in a staggered group. */
export const STAGGER = 0.09;

/** Reveals start slightly before the element is fully on screen. */
export const VIEWPORT = { once: true, margin: "-90px" } as const;

/** Stagger delay for the nth item in a group, on top of the lead in. */
export function stagger(index: number, step: number = STAGGER): number {
  return index * step;
}
