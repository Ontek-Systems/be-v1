import type { ElementType, ReactNode } from "react";

export interface TextProps {
  as?: "p" | "span";
  size?: "sm" | "base" | "lg";
  className?: string;
  children: ReactNode;
}

const sizeClasses: Record<NonNullable<TextProps["size"]>, string> = {
  sm: "text-sm leading-relaxed",
  base: "text-base lg:text-lg leading-relaxed",
  lg: "text-[0.9375rem] sm:text-base lg:text-lg leading-relaxed",
};

export function Text({ as = "p", size = "base", className = "", children }: Readonly<TextProps>) {
  const Tag = as as ElementType;

  return <Tag className={`${sizeClasses[size]} ${className}`}>{children}</Tag>;
}
