import type { InputHTMLAttributes } from "react";
import {
  fieldSizeClasses,
  fieldToneClasses,
  type FieldSize,
  type FieldTone,
} from "@/components/ui/fieldStyles";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  tone?: FieldTone;
  fieldSize?: FieldSize;
}

export function Input({
  tone = "default",
  fieldSize = "md",
  className = "",
  ...rest
}: Readonly<InputProps>) {
  return (
    <input
      className={`w-full px-4 outline-none transition-shadow duration-200 ${fieldSizeClasses[fieldSize]} ${fieldToneClasses[tone]} ${className}`}
      {...rest}
    />
  );
}
