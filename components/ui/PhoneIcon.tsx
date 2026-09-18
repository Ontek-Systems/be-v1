export interface PhoneIconProps {
  className?: string;
}

export function PhoneIcon({ className = "" }: Readonly<PhoneIconProps>) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className={`fill-none stroke-current ${className}`}>
      <path
        d="M6.5 2H3.5C2.67 2 2 2.67 2 3.5 2 11.51 8.49 18 16.5 18c.83 0 1.5-.67 1.5-1.5v-3l-3.6-1.2-1.7 1.7a12.5 12.5 0 0 1-5.7-5.7l1.7-1.7L6.5 2Z"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
