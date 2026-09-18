export interface PersonIconProps {
  className?: string;
}

/** A simple outline figure, used where a person's photograph is still to come. */
export function PersonIcon({ className = "" }: Readonly<PersonIconProps>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={`fill-none stroke-current ${className}`}>
      <circle cx="12" cy="8" r="4" strokeWidth="1.2" />
      <path d="M4 21c0-4.42 3.58-7 8-7s8 2.58 8 7" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
