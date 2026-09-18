export interface EmailIconProps {
  className?: string;
}

export function EmailIcon({ className = "" }: Readonly<EmailIconProps>) {
  return (
    <svg viewBox="0 0 20 16" aria-hidden="true" className={`fill-none stroke-current ${className}`}>
      <path d="M1 1H19V15H1V1Z M1 1L10 9L19 1" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
