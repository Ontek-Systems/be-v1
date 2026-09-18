export interface StarRowProps {
  className?: string;
}

/** Five gold stars, read out once as a rating rather than as five images. */
export function StarRow({ className = "" }: Readonly<StarRowProps>) {
  return (
    <div role="img" aria-label="Rated five out of five" className={`flex items-center gap-1 ${className}`}>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 20 20" aria-hidden="true" className="h-3.5 w-3.5 fill-primary-gold">
          <path d="M10 1.5L12.5 7.2L18.8 7.9L14.1 12.1L15.5 18.3L10 15L4.5 18.3L5.9 12.1L1.2 7.9L7.5 7.2L10 1.5Z" />
        </svg>
      ))}
    </div>
  );
}
