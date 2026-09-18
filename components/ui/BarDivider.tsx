export interface BarDividerProps {
  className?: string;
}

/** Hairline rule between items in the contact band. A span, not a border. */
export function BarDivider({ className = "" }: Readonly<BarDividerProps>) {
  return <span aria-hidden="true" className={`h-[0.85rem] w-px shrink-0 bg-white/30 ${className}`} />;
}
