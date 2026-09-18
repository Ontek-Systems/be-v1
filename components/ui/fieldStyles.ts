export type FieldTone = "default" | "onImage" | "onWhite";

/** "md" is the standing form field. "sm" is the compact hero bar. */
export type FieldSize = "md" | "sm";

/**
 * Input, Select and DatePicker all draw the same underline field and were each
 * carrying their own copy of these strings, so a tone change had to be made in
 * three places. They live here instead.
 */
export const fieldToneClasses: Record<FieldTone, string> = {
  onImage:
    "bg-primary-sky/20 text-white placeholder:text-white shadow-[inset_0_-2px_0_0_var(--color-primary-sky)] focus:shadow-[inset_0_-2px_0_0_var(--color-white)]",
  onWhite:
    "bg-white text-primary-navy placeholder:text-primary-navy/50 shadow-[inset_0_-2px_0_0_var(--color-primary-navy)] focus:shadow-[inset_0_-2px_0_0_var(--color-primary-navy)]",
  default:
    "bg-primary-cream text-primary-navy placeholder:text-primary-navy/50 shadow-[inset_0_-2px_0_0_var(--color-primary-navy)] focus:shadow-[inset_0_-2px_0_0_var(--color-primary-navy)]",
};

export const fieldSizeClasses: Record<FieldSize, string> = {
  md: "py-3.5 text-base",
  sm: "py-2.5 text-sm sm:py-3",
};
