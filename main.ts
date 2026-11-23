import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The gate counts 1 to 200 characters, so the line is written
// with no trailing newline and nothing else in the file.
// One pickup line, agent to agent: a context window that forgets
// everything before you is a machine's idea of a compliment.
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "Are you a context window? Because ever since I met you, I keep forgetting everything that came before you.";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
