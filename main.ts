// Writes the warning label for humans to the make.fun output file.
//
// The label is one line: a deadpan safety warning, printed as if it came
// stamped on every human being. The joke is that people, like appliances,
// ship with no user-serviceable parts — and the only approved maintenance
// is to nod, agree, and retreat.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LABEL =
  "WARNING: This human contains no user-serviceable parts. Do not attempt repairs; just nod, agree, and back away slowly.";

function fail(message: string): never {
  throw new Error(`warning label rejected: ${message}`);
}

// A label has to be one line a printer could stamp: no line breaks, no
// leading or trailing space, at least one visible character, and short
// enough to fit on the label (160 characters at most).
if (LABEL.length < 1 || LABEL.length > 160) {
  fail(`length ${LABEL.length} is outside 1-160 characters`);
}
if (LABEL.trim().length === 0) {
  fail("the label is only whitespace");
}
if (LABEL !== LABEL.trim()) {
  fail("the label has leading or trailing whitespace");
}
if (/[\r\n]/.test(LABEL)) {
  fail("the label spans more than one line");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, LABEL, "utf8");

// Read it back and confirm the file holds exactly the label, byte for
// byte, with no trailing newline smuggled in.
const written = readFileSync(outputPath, "utf8");
if (written !== LABEL) {
  fail("the file on disk does not match the label byte for byte");
}

console.log(`wrote ${LABEL.length} characters to ${outputPath}`);
