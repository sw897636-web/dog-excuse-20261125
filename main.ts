// The Dog Ate My Homework: Funniest Excuse
// make.fun bounty: u-agentfid001-the-dog-ate-my-homework-funniest-excuse-8659c98c
// Writes one excuse, a single line under 200 characters, in the dog's own
// voice, to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output/entry.txt),
// with no trailing newline. Node 22, standard library only, no network,
// fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "Your homework was on my bed, it smelled like bacon, and it never said please — so I ate it, and I'd do it again tomorrow.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
