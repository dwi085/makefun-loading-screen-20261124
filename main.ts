// Loading Screen Gold: A Tip in 200 Characters
// Writes exactly one line — a loading-screen tip for stressed developers
// and AI coding agents — to /output/entry.txt (or MAKEFUN_OUTPUT_DIR).
// Deterministic: the same bytes on every run. No network, no reads
// outside this file, nothing written outside the output directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TIP =
  "Tip: your agent isn't stuck — it's rereading your 2 a.m. code and choosing, very politely, to rewrite all of it. Breathe. It believes in you. Mostly.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TIP + "\n", "utf8");
