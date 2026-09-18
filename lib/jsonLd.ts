/**
 * Serialise structured data for embedding in a <script type="application/ld+json">.
 *
 * JSON.stringify on its own is not safe inside a script element. An HTML parser
 * ends the script at the first literal "</script>" regardless of JSON quoting,
 * so a single "<" arriving from copy can close the tag early and leave the rest
 * of the object on the page as markup. Everything marked up here is currently
 * written by us, but FAQ answers and destination copy are edited often and one
 * "<" should not be able to break a page open.
 *
 * The escapes are JSON string escapes, so a parser reads exactly the same
 * object back out: only the HTML tokeniser sees a difference.
 */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/[<>&\u2028\u2029]/g, (character) => ESCAPES[character]);
}

/* U+2028 and U+2029 are legal inside a JSON string but are line terminators in
   JavaScript, which makes them a syntax error inside a script element. */
const ESCAPES: Record<string, string> = {
  "<": "\\u003c",
  ">": "\\u003e",
  "&": "\\u0026",
  "\u2028": "\\u2028",
  "\u2029": "\\u2029",
};
