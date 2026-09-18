/*
  Baked in at build time: the site is a static export, so there is no server to
  read this at request time. A production build with NEXT_PUBLIC_API_URL unset
  ships a bundle that asks every visitor's own machine for the API, which is why
  it warns rather than quietly falling back.
*/
const DEV_API_URL = "http://localhost:5000/api/v1";

/* An unset GitHub Actions repository variable arrives as "", not as undefined,
   which ?? would pass straight through as a valid base URL. */
const configuredApiUrl = process.env.NEXT_PUBLIC_API_URL?.trim() || undefined;

export const API_URL = configuredApiUrl ?? DEV_API_URL;

if (!configuredApiUrl && process.env.NODE_ENV === "production") {
  console.warn(
    "NEXT_PUBLIC_API_URL is not set. The enquiry form " +
      `will call ${DEV_API_URL}, which does not exist for a visitor.`,
  );
}

/*
  Enquiries carry a name, an email address and usually a phone number. Over
  plaintext http those travel readable on the wire, and a browser on an https
  page blocks the request as mixed content anyway, so the form would fail
  silently rather than insecurely. Either way the build is wrong, and it is
  cheaper to find out here than from the first enquiry that never arrives.
*/
if (configuredApiUrl && process.env.NODE_ENV === "production" && !configuredApiUrl.startsWith("https://")) {
  console.warn(
    `NEXT_PUBLIC_API_URL is ${configuredApiUrl}, which is not https. ` +
      "Browsers block that as mixed content from an https page, so no enquiry will reach it.",
  );
}
