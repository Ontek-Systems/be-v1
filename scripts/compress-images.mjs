// Compresses every image under public/assets/images in place.
//
//   npm run images           compress, convert to WebP, update code references
//   npm run images -- --dry  report what would change, touch nothing
//
// Anything wider than 2000px is resized down. Each file is re-encoded as WebP
// on a quality ladder (80, stepping down by 5 to a floor of 50) until it fits
// its budget: 300KB up to 1000px wide, 600KB above. WebP files that already
// fit are left alone, so running it again is cheap and safe.
//
// Filenames are kept; only the extension changes. When a JPG or PNG becomes
// WebP, references to it in app/, components/ and lib/ are rewritten to match,
// and the original is deleted.
//
// Share images stay JPEG, because not every social platform previews WebP.

import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public/assets/images");
const SOURCE_DIRS = ["app", "components", "lib"].map((dir) => path.join(ROOT, dir));
const DRY = process.argv.includes("--dry");

const MAX_WIDTH = 2000;
const START_QUALITY = 80;
const QUALITY_STEP = 5;
const MIN_QUALITY = 50;
const KB = 1024;
const RASTER_EXTS = [".jpg", ".jpeg", ".png", ".webp", ".tif", ".tiff"];
/** Kept as JPEG at 1200px, the Open Graph size. */
const KEEP_JPEG = new Set(["og-default.jpg"]);

const budgetFor = (width) => (width <= 1000 ? 300 * KB : 600 * KB);
const kb = (bytes) => `${Math.round(bytes / KB)}KB`.padStart(7);

function walk(dir, test, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, test, files);
    else if (test(entry.name)) files.push(full);
  }
  return files;
}

async function encode(file, { jpeg, maxWidth }) {
  const meta = await sharp(file).metadata();
  // Phone photos are often stored sideways with an EXIF rotation tag, so the
  // displayed width can be the stored height. rotate() bakes the tag in.
  const width = (meta.orientation ?? 1) >= 5 ? meta.height : meta.width;
  const finalWidth = Math.min(width, maxWidth);
  const budget = budgetFor(finalWidth);

  let quality = START_QUALITY;
  let buffer;
  for (;;) {
    let pipeline = sharp(file).rotate();
    if (width > maxWidth) pipeline = pipeline.resize({ width: maxWidth });
    pipeline = jpeg ? pipeline.jpeg({ quality, mozjpeg: true }) : pipeline.webp({ quality });
    buffer = await pipeline.toBuffer();
    if (buffer.length <= budget || quality <= MIN_QUALITY) break;
    quality -= QUALITY_STEP;
  }
  return { buffer, quality, budget, finalWidth, meta, width };
}

const images = walk(IMAGES_DIR, (name) => RASTER_EXTS.includes(path.extname(name).toLowerCase()));
const sourceFiles = walk(SOURCE_DIRS[0], (n) => /\.(tsx?|css)$/.test(n));
for (const dir of SOURCE_DIRS.slice(1)) walk(dir, (n) => /\.(tsx?|css)$/.test(n), sourceFiles);

/** Old basename -> new basename, for rewriting references. */
const renames = new Map();
const basenameCounts = new Map();
for (const file of images) {
  const name = path.basename(file);
  basenameCounts.set(name, (basenameCounts.get(name) ?? 0) + 1);
}

/** How many files of each basename were converted, to spot partial renames. */
const converted = new Map();
let before = 0;
let after = 0;
let changed = 0;
const warnings = [];

for (const file of images.sort()) {
  const name = path.basename(file);
  const ext = path.extname(name).toLowerCase();
  const relative = path.relative(IMAGES_DIR, file);
  const size = fs.statSync(file).size;
  const jpeg = KEEP_JPEG.has(name);
  const maxWidth = jpeg ? 1200 : MAX_WIDTH;
  const target = jpeg ? file : file.slice(0, -path.extname(file).length) + ".webp";

  if (target !== file && fs.existsSync(target)) {
    warnings.push(`${relative}: ${path.basename(target)} already exists, skipped`);
    before += size;
    after += size;
    continue;
  }

  const { buffer, quality, budget, finalWidth, meta, width } = await encode(file, { jpeg, maxWidth });
  const alreadyFine =
    ext === ".webp" && (meta.orientation ?? 1) === 1 && width <= maxWidth && size <= budget;

  // Never replace a file with a bigger one of the same format.
  if (alreadyFine || (target === file && buffer.length >= size)) {
    before += size;
    after += size;
    continue;
  }

  const note = buffer.length > budget ? `q${quality} OVER BUDGET` : `q${quality}`;
  console.log(`${relative.padEnd(60)} ${String(finalWidth).padStart(4)}px ${kb(size)} -> ${kb(buffer.length)}  ${note}`);
  if (buffer.length > budget) warnings.push(`${relative}: still over budget at q${MIN_QUALITY}, check it by eye`);

  before += size;
  after += buffer.length;
  changed++;

  if (target !== file) {
    renames.set(name, path.basename(target));
    converted.set(name, (converted.get(name) ?? 0) + 1);
  }

  if (!DRY) {
    fs.writeFileSync(target, buffer);
    if (target !== file) fs.unlinkSync(file);
  }
}

// References match on filename alone, so a name shared across folders is only
// safe to rewrite when every copy of it was converted.
for (const [name, count] of converted) {
  if (count < basenameCounts.get(name)) {
    renames.delete(name);
    warnings.push(`${name}: only some copies converted, update its references by hand`);
  }
}

// Rewrite references. Paths appear raw or URL encoded (%20). Names assembled
// in a template (e.g. `${file}.jpeg`) are not caught and need a hand edit.
let referencesUpdated = 0;
for (const sourceFile of sourceFiles) {
  const original = fs.readFileSync(sourceFile, "utf8");
  let text = original;
  for (const [from, to] of renames) {
    for (const [a, b] of [
      [from, to],
      [encodeURI(from), encodeURI(to)],
      [encodeURIComponent(from), encodeURIComponent(to)],
    ]) {
      text = text.split(a).join(b);
    }
  }
  if (text !== original) {
    referencesUpdated++;
    console.log(`updated references in ${path.relative(ROOT, sourceFile)}`);
    if (!DRY) fs.writeFileSync(sourceFile, text);
  }
}

// Anything in the code still pointing at a JPG or PNG that no longer exists.
if (!DRY) {
  const remaining = new Set(walk(IMAGES_DIR, () => true).map((f) => path.basename(f)));
  for (const sourceFile of sourceFiles) {
    const text = fs.readFileSync(sourceFile, "utf8");
    for (const [, ref] of text.matchAll(/([^/`"'{}]+\.(?:jpe?g|png))\b/gi)) {
      const decoded = decodeURIComponent(ref.trim());
      if (renames.has(decoded) && !remaining.has(decoded)) {
        warnings.push(`${path.relative(ROOT, sourceFile)} still references ${decoded}`);
      }
    }
  }
}

console.log("-".repeat(90));
console.log(
  `${DRY ? "[dry run] " : ""}${changed} of ${images.length} images changed, ` +
    `${(before / KB / KB).toFixed(1)}MB -> ${(after / KB / KB).toFixed(1)}MB ` +
    `(-${before ? Math.round((1 - after / before) * 100) : 0}%), ${referencesUpdated} source files updated`,
);
for (const warning of warnings) console.warn(`! ${warning}`);
