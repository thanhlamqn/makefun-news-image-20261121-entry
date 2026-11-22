// news-image-20261121 entry (Node 22, standard library only).
//
// The entry is the image beside this file: a newspaper front page that sums
// up the world news of Saturday 21 November 2026 in one picture. It was drawn
// as index.html (original text and line-drawn icons, real reporting cited in
// SOURCES.md) and rendered to entry.png with headless Chromium. This program
// only copies those exact bytes to /output/entry.png, so both of the
// grader's runs write identical bytes. No network is used.
//
// Run it outside the grader with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const source = new URL('./entry.png', import.meta.url);

// The gate reads the file by its first bytes: refuse to ship anything that
// is not a PNG, rather than silently copying a corrupt file.
const header = readFileSync(source).subarray(0, 8);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!header.equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG file');
}

// The gate caps the image at 1 MiB and 1024 by 1024 pixels; this entry is
// 1024 by 1024 and under that size. Refuse to ship a file over the size cap.
if (statSync(source).size > 1048576) {
  throw new Error('entry.png is over the 1 MiB gate limit');
}

copyFileSync(source, join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
