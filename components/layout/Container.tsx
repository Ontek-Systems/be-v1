import type { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: Readonly<ContainerProps>) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-2 ${className}`}>
      {children}
    </div>
  );
}
