import { destinationDetails } from "@/lib/destinationDetails";

export interface DestinationOption {
  value: string;
  label: string;
}

/** Single source of truth for the "Destination" select, derived from the regions. */
export const destinationOptions: DestinationOption[] = [
  { value: "", label: "Select a region" },
  ...destinationDetails.map((destination) => ({
    value: destination.slug,
    label: destination.name,
  })),
  { value: "not-sure", label: "Not sure yet" },
];
