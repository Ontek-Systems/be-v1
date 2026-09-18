"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Reveal } from "@/components/common/Reveal";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FilterTab } from "@/components/ui/FilterTab";
import { GalleryGrid } from "@/components/common/GalleryGrid";
import { galleryImages, type GalleryImage } from "@/lib/galleryImages";

type Filter = "all" | GalleryImage["source"];

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "Everything" },
  { value: "client", label: "Sent back by clients" },
  { value: "destination", label: "Places we plan" },
];

export function GalleryPageContent() {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(
    () => ({
      all: galleryImages.length,
      client: galleryImages.filter((image) => image.source === "client").length,
      destination: galleryImages.filter((image) => image.source === "destination").length,
    }),
    [],
  );

  const visible = useMemo(
    () => (filter === "all" ? galleryImages : galleryImages.filter((image) => image.source === filter)),
    [filter],
  );

  return (
    <section className="section-y bg-white">
      <Container>
        <SectionHeader
          eyebrow="The photographs"
          title="Where our clients have been"
          intro="Some of these came back from clients after the trip and the rest are the places themselves, so the filter tells you which is which."
        />

        <Reveal className="mb-12 flex flex-wrap justify-center gap-x-7 gap-y-2 sm:gap-x-9 lg:justify-start">
          {filters.map((option) => (
            <FilterTab
              key={option.value}
              label={option.label}
              count={counts[option.value]}
              isActive={filter === option.value}
              onSelect={() => setFilter(option.value)}
            />
          ))}
        </Reveal>

        {/* Keyed on the filter so the grid remounts and the reveal replays,
            rather than swapping images underneath a settled animation. */}
        <GalleryGrid key={filter} images={visible} pageSize={0} />
      </Container>
    </section>
  );
}
