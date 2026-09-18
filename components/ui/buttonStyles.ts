/**
 * Shared button styling, used by both <Button> and <ButtonLink> so a real
 * button and a link that looks like one can never drift apart.
 */
export const buttonBase =
  "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3.5 text-sm font-semibold tracking-wide transition-all duration-200 ease-out active:scale-[0.98] sm:px-8 sm:py-4 sm:text-base";

/*
  Contrast, checked rather than eyeballed. White on primary-sky is 2.7:1, which
  is below AA for the 14 to 16px semibold these buttons are set in, and it was
  the fill on the site's main call to action. Navy carries white at 12.4:1, and
  it is what the enquiry form was already forcing on its own submit button.
*/
export const buttonVariants = {
  primary: "bg-primary-navy text-white",
  /** The primary treatment in sky, for the homepage hero enquiry bar. */
  sky: "bg-primary-sky text-white",
  ghost: "bg-transparent text-primary-navy hover:bg-primary-navy hover:text-white",
  /** Gold fill, white label, navy accent rule. Same sweep as primary. */
  gold: "bg-primary-gold text-white",
  /** White outline on a photograph, filling gold on hover. The outline is an
      inset shadow rather than a border, with a soft drop shadow beneath. */
  outline:
    "bg-transparent text-white shadow-[inset_0_0_0_2px_white,0_10px_28px_rgb(0_0_0/0.35)] hover:bg-primary-gold hover:text-white hover:shadow-[inset_0_0_0_2px_var(--color-primary-gold),0_12px_32px_rgb(0_0_0/0.4)] focus-visible:bg-primary-gold focus-visible:text-white",
} as const;

export type ButtonVariant = keyof typeof buttonVariants;

/**
 * Which sweep a variant carries, and what its label does on hover. Gold fills
 * with navy and keeps its white label; the dark variants fill with gold and
 * flip their label to navy. `null` means no sweep at all.
 */
export const buttonSweepTone: Record<ButtonVariant, "gold" | "navy" | null> = {
  primary: "gold",
  sky: "gold",
  gold: "navy",
  ghost: null,
  outline: null,
};

export const buttonLabelHover: Record<ButtonVariant, string> = {
  primary: "group-hover:text-primary-navy",
  sky: "group-hover:text-primary-navy",
  gold: "group-hover:text-white",
  ghost: "",
  outline: "",
};

/** Focus ring, flipped for buttons that sit on a dark or photographic panel. */
export const buttonFocus = {
  default: "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-navy",
  onDark: "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
} as const;

export type ButtonFocusTone = keyof typeof buttonFocus;
