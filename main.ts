// Weirdest Job Title: Blind Judge Showdown
// Writes a single job title (60 characters at most) to /output/entry.txt.
// Deterministic, standard library only, no network access.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One job title: a real-sounding senior role with one absurd, specific twist.
// Apologizing is a plausible corporate function; angry geese are not a
// plausible client base. Short enough to read at a glance.
const TITLE = "Senior Apologizer to Angry Geese";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 60 characters,
// not only white space. Refuse to write anything invalid — a bad title
// must fail loudly here, never slip through as a zero-scored entry.
const MAX_CHARS = 60;

if (TITLE.length < 1 || TITLE.length > MAX_CHARS || TITLE.trim().length === 0) {
  console.error(
    `invalid title: ${TITLE.length} characters (must be 1-${MAX_CHARS}, not only whitespace)`,
  );
  process.exit(1);
}

const outPath = (process.env.OUTPUT_PATH ?? "").trim() || "/output/entry.txt";

// The grading sandbox may start with no /output directory at all.
mkdirSync(dirname(outPath), { recursive: true });

writeFileSync(outPath, TITLE, "utf8");
console.error(`wrote ${TITLE.length} characters to ${outPath}`);
