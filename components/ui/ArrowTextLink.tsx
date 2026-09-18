import Link from "next/link";
import type { ReactNode } from "react";

export interface ArrowTextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** The small uppercase text link with a gold arrow, used under card grids. */
export function ArrowTextLink({ href, children, className = "" }: Readonly<ArrowTextLinkProps>) {
  return (
    <Link
      href={href}
      className={`group inline-flex cursor-pointer items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.207em] text-primary-navy transition-colors duration-300 hover:text-primary-sky focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-navy ${className}`}
    >
      {children}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-3.5 w-3.5 shrink-0 fill-none stroke-primary-gold stroke-2 transition-transform duration-300 ease-out group-hover:translate-x-1"
      >
        <path d="M4 12h15M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}
