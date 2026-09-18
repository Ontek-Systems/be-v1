"use client";

import { useState } from "react";
import { Text } from "@/components/ui/Text";
import { StarRow } from "@/components/ui/StarRow";
import { GoogleLogo } from "@/components/ui/GoogleLogo";

/** Past this many characters the review opens part way, so one long review can't stretch a study to three screens. */
const COLLAPSE_OVER = 700;
const SHOW_AT_LEAST = 420;

export interface CaseStudyReviewProps {
  /** Verbatim. Blank lines mark the reviewer's own paragraph breaks. */
  review: string;
  name: string;
}

/** The client's Google review, in full and unedited, with their name under it. */
export function CaseStudyReview({ review, name }: Readonly<CaseStudyReviewProps>) {
  const paragraphs = review.split("\n\n");
  const [isOpen, setIsOpen] = useState(false);

  let shownCount = paragraphs.length;
  if (review.length > COLLAPSE_OVER) {
    let running = 0;
    shownCount = paragraphs.findIndex((paragraph) => (running += paragraph.length) >= SHOW_AT_LEAST) + 1;
  }
  const canExpand = shownCount < paragraphs.length;
  const visible = isOpen || !canExpand ? paragraphs : paragraphs.slice(0, shownCount);
  const isComplete = visible.length === paragraphs.length;
  const firstName = name.split(" ")[0];

  return (
    <figure>
      <StarRow className="justify-center lg:justify-start" />
      <blockquote className="mt-5 space-y-4">
        {visible.map((paragraph, index) => (
          <Text key={paragraph.slice(0, 32)} size="base" className="text-primary-navy/85">
            {index === 0 && "“"}
            {paragraph}
            {index === visible.length - 1 && isComplete && "”"}
          </Text>
        ))}
      </blockquote>
      {canExpand && (
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          className="mt-4 cursor-pointer text-[0.65rem] font-bold uppercase tracking-[0.207em] text-primary-navy underline decoration-primary-gold decoration-2 underline-offset-[6px] transition-colors duration-200 hover:text-primary-sky focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-gold"
        >
          {isOpen ? "Show less" : `Read ${firstName}'s full review`}
        </button>
      )}
      <figcaption className="mt-7">
        <span>
          <span className="block font-display text-lg font-bold tracking-tight text-primary-navy">{name}</span>
          <span className="mt-1 flex items-center justify-center gap-2 lg:justify-start text-[0.6rem] font-bold uppercase tracking-[0.207em] text-primary-sky">
            <GoogleLogo className="h-3.5 w-3.5" />
            Google review
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
