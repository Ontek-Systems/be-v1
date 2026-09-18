export interface TripFormOption {
  value: string;
  label: string;
}

/**
 * How much give there is around the departure date. Chosen inside the date
 * picker rather than as a field of its own, since it only means anything
 * once a date is on the table.
 */
export const dateFlexibilityOptions: TripFormOption[] = [
  { value: "exact", label: "Exact dates" },
  { value: "1", label: "± 1 day" },
  { value: "2", label: "± 2 days" },
  { value: "3", label: "± 3 days" },
  { value: "flexible", label: "Fully flexible" },
];

export function flexibilityLabel(value: string) {
  return dateFlexibilityOptions.find((option) => option.value === value)?.label ?? "";
}

/** Trip length as a rough band rather than an exact number of nights. */
export const tripLengthOptions: TripFormOption[] = [
  { value: "", label: "Pick a length" },
  { value: "3-5", label: "3 to 5 nights" },
  { value: "7", label: "A week" },
  { value: "10", label: "10 nights" },
  { value: "14", label: "Two weeks" },
  { value: "21+", label: "Three weeks or more" },
  { value: "not-sure", label: "Not sure yet" },
];
