import type { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * The single horizontal gutter for the whole site. Every breakpoint keeps a
 * real margin: tablets used to collapse to 8px here, which ran form fields and
 * images straight off both edges.
 */
export function Container({ children, className = "" }: Readonly<ContainerProps>) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10 xl:px-8 ${className}`}>
      {children}
    </div>
  );
}
