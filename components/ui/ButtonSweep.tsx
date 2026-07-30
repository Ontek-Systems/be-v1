/**
 * The navy wipe plus gold leading edge that fills a primary button on hover.
 * Sits behind the label, which is why the label needs `relative z-10`.
 */
export function ButtonSweep() {
  return (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-0 origin-left scale-x-0 bg-primary-gold transition-transform duration-300 ease-in-out group-hover:scale-x-100 motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 bg-primary-gold opacity-100 transition-opacity duration-300 ease-in-out group-hover:opacity-0 motion-reduce:transition-none"
      />
      <span
        aria-hidden="true"
        className="absolute inset-y-0 left-0 w-1 bg-primary-navy opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 motion-reduce:transition-none"
      />
    </>
  );
}
