import Link from "next/link";
import Image from "next/image";

export interface LogoProps {
  tone?: "brown" | "cream";
  className?: string;
}

export function Logo({ tone = "brown", className = "" }: Readonly<LogoProps>) {
  if (tone === "cream") {
    return (
      <Link href="/" className={`group inline-block ${className}`}>
        <Image
          src="/be-v1/assets/images/logo.png"
          alt="Blissful Escapes, Personally Planned Travel"
          width={500}
          height={150}
          priority
          className="h-[73px] w-auto sm:h-[87px]"
        />
      </Link>
    );
  }

  return (
    <Link
      href="/"
      className={`group inline-flex flex-col leading-none ${className}`}
    >
      <span className="font-display text-xl sm:text-2xl font-bold text-primary-navy transition-colors duration-200">
        Blissful Escapes
      </span>
      <span className="text-[0.6rem] sm:text-xs tracking-[0.25em] uppercase text-primary-sky">
        Personally Planned Travel
      </span>
    </Link>
  );
}
