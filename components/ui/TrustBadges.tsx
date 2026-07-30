const badges = ["ABTA Protected", "ATOL Bonded"];

export interface TrustBadgesProps {
  /** "cream" sits on white, "white" sits on a cream or tinted background. */
  tone?: "cream" | "white";
  className?: string;
}

export function TrustBadges({ tone = "cream", className = "" }: Readonly<TrustBadgesProps>) {
  const chipClasses = tone === "cream" ? "bg-primary-cream" : "bg-white";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {badges.map((badge) => (
        <span
          key={badge}
          className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest text-primary-navy ${chipClasses}`}
        >
          {badge}
        </span>
      ))}
    </div>
  );
}
