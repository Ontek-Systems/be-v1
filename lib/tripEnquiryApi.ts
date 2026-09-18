import { API_URL } from "@/lib/apiConfig";

/**
 * The enquiry endpoint, the one call the site makes to the API. No token is
 * attached: anonymous visitors are expected to use it.
 *
 * Everything after `message` is context stored alongside an enquiry. Only the
 * fields a browser can answer for are sent; the server fills in browser, device, os and location from the request itself.
 */
export interface TripEnquiryInput {
  name: string;
  email: string;
  phone: string;
  from: string;
  where: string;
  when: string;
  duration: string;
  message: string;
}

export class TripEnquiryError extends Error {}

/** Collected at submit time rather than on mount, so it reflects the real page. */
function pageContext() {
  if (typeof window === "undefined") {
    return { path: "", referrer: "", language: "", timezone: "" };
  }
  return {
    path: window.location.pathname,
    referrer: document.referrer,
    language: navigator.language ?? "",
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone ?? "",
  };
}

/**
 * `from` and `duration` have no column on the enquiry record, so they are
 * folded into the message rather than dropped. Losing them would lose the two
 * things that decide which flights are worth quoting.
 */
function composeMessage({ from, duration, message }: TripEnquiryInput): string {
  const lines = [
    from ? `Travelling from: ${from}` : "",
    duration ? `Trip length: ${duration}` : "",
    message.trim(),
  ];
  return lines.filter(Boolean).join("\n");
}

/*
  The fields carry a maxLength, but the hero bar fills several of them through
  context rather than through the DOM, so the attribute is not on its own a
  guarantee. Clamping here covers every path into the endpoint. The limits are
  well above anything a person types; they exist so the one public,
  unauthenticated POST on the site cannot be handed an unbounded body.
*/
const LIMITS = {
  name: 200,
  email: 254,
  phone: 40,
  where: 120,
  when: 40,
  message: 5000,
} as const;

function clamp(value: string, max: number): string {
  return value.length > max ? value.slice(0, max) : value;
}

export async function submitTripEnquiry(input: TripEnquiryInput): Promise<void> {
  let response: Response;

  try {
    response = await fetch(`${API_URL}/trip-enquiries`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: clamp(input.name.trim(), LIMITS.name),
        email: clamp(input.email.trim(), LIMITS.email),
        phone: clamp(input.phone.trim(), LIMITS.phone),
        where: clamp(input.where, LIMITS.where),
        when: clamp(input.when.trim(), LIMITS.when),
        message: clamp(composeMessage(input), LIMITS.message),
        ...pageContext(),
      }),
    });
  } catch {
    throw new TripEnquiryError(
      "We could not reach our system just then. Please check your connection and try again.",
    );
  }

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new TripEnquiryError(
      body?.message ?? "We could not send that just then. Please try again in a moment.",
    );
  }
}
