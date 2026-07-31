/**
 * Shared button styling, used by both <Button> and <ButtonLink> so a real
 * button and a link that looks like one can never drift apart.
 */
export const buttonBase =
  "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 ease-out active:scale-[0.98] sm:px-8 sm:py-4 sm:text-base";

export const buttonVariants = {
  primary: "bg-primary-sky text-white",
  ghost: "bg-transparent text-primary-navy hover:bg-primary-sky hover:text-white",
  gold: "bg-primary-gold text-primary-navy hover:bg-white hover:text-primary-navy",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

/** Focus ring, flipped for buttons that sit on a dark or photographic panel. */
export const buttonFocus = {
  default: "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy",
  onDark: "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
} as const;

export type ButtonFocusTone = keyof typeof buttonFocus;
