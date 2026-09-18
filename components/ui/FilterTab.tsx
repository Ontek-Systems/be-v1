export interface FilterTabProps {
  label: string;
  isActive: boolean;
  count?: number;
  /** Ground the row sits on, so the resting chip always has contrast against it. */
  tone?: "onWhite" | "onCream";
  onSelect: () => void;
}

/**
 * One option in a filter row. Filled chips read as a row of buttons competing
 * with the page's real call to action, so the resting state is plain text and
 * the selection is carried by a gold rule that slides under the active label.
 */
export function FilterTab({
  label,
  isActive,
  count,
  tone = "onWhite",
  onSelect,
}: Readonly<FilterTabProps>) {
  const idleText = tone === "onCream" ? "text-primary-navy/55" : "text-primary-navy/50";

  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      className={`group relative cursor-pointer px-1 pb-3 pt-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] transition-colors duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy ${
        isActive ? "text-primary-navy" : `${idleText} hover:text-primary-navy`
      }`}
    >
      {label}
      {count !== undefined && (
        <span
          className={`ml-1.5 align-super text-[0.58rem] tabular-nums transition-colors duration-300 ${
            isActive ? "text-primary-gold" : "text-primary-sky/70"
          }`}
        >
          {count}
        </span>
      )}

      <span
        aria-hidden="true"
        className={`absolute inset-x-0 bottom-0 h-0.5 origin-left bg-primary-gold transition-transform duration-500 ease-out ${
          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100 group-hover:bg-primary-sky"
        }`}
      />
    </button>
  );
}
