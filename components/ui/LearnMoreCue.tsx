export interface LearnMoreCueProps {
  className?: string;
}

/**
 * Hover cue for image cards. Sits hidden until the parent `group` is hovered or
 * focused, then rises into view with the arrow sliding forward.
 */
export function LearnMoreCue({ className = "" }: Readonly<LearnMoreCueProps>) {
  return (
    <span
      className={`inline-flex translate-y-2 items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-primary-gold opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 motion-reduce:translate-y-0 motion-reduce:transition-none ${className}`}
    >
      Learn more
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 fill-none stroke-primary-gold stroke-2 transition-transform duration-300 ease-out group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
      >
        <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
