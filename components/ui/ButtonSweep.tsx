export interface ButtonSweepProps {
  /** The fill that rises on hover: gold on dark buttons, navy on gold ones. */
  tone?: "gold" | "navy";
}

/**
 * The accent rule that sits along the bottom edge of a button and rises to
 * fill it on hover. Sits behind the label, which is why the label needs
 * `relative z-10`.
 */
export function ButtonSweep({ tone = "gold" }: Readonly<ButtonSweepProps>) {
  const fill = tone === "navy" ? "bg-primary-navy" : "bg-primary-gold";
  const rule = tone === "navy" ? "bg-primary-navy" : "bg-primary-gold";
  const hoverRule = tone === "navy" ? "bg-white" : "bg-primary-sky";

  return (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-300 ease-in-out group-hover:scale-y-100 motion-reduce:transition-none ${fill}`}
      />
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-0.5 opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0 motion-reduce:transition-none ${rule}`}
      />
      <span
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-0.5 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 motion-reduce:transition-none ${hoverRule}`}
      />
    </>
  );
}
