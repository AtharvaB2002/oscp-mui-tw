import sharp from 'sharp';
import { readdir, mkdir, rm, writeFile } from 'node:fs/promises';
import { join, parse } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const SRC = join(__dirname, '..', 'src', 'assets', 'img');
const OUT = join(__dirname, '..', 'src', 'assets', 'optimized');

const VARIANTS = [
  { width: 1600, suffix: 'lg' },
  { width: 900, suffix: 'md' },
  { width: 500, suffix: 'sm' },
];

const WEBP_QUALITY = 70;

async function run() {
  // Start from a clean optimized/ folder so only current outputs remain.
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const files = (await readdir(SRC)).filter((f) => /\.png$/i.test(f));

  if (files.length === 0) {
    console.warn(`No .png files found in ${SRC} — nothing to optimize.`);
    return;
  }

  // manifest maps base name -> [{ file, width, suffix }] so the app can build
  // accurate srcSet descriptors (small images aren't upscaled, so their real
  // width may be smaller than the variant target).
  const manifest = {};

  for (const file of files) {
    const { name } = parse(file);
    const input = join(SRC, file);
    const meta = await sharp(input).metadata();
    console.log(`\n${file} — ${meta.width}×${meta.height}`);

    const seenWidths = new Set();
    manifest[name] = [];

    for (const v of VARIANTS) {
      const w = Math.min(v.width, meta.width);
      // Skip a variant whose width duplicates a larger one already produced
      // (e.g. a 143px logo would otherwise emit three identical files).
      if (seenWidths.has(w)) {
        console.log(`  ${v.suffix}: ${w}w → skipped (duplicate width)`);
        continue;
      }
      seenWidths.add(w);

      const outFile = `${name}-${v.suffix}.webp`;
      await sharp(input)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY, effort: 5 })
        .toFile(join(OUT, outFile));

      manifest[name].push({ file: outFile, width: w, suffix: v.suffix });
      console.log(`  ${v.suffix}: ${w}w → webp`);
    }
  }

  await writeFile(
    join(OUT, 'manifest.json'),
    JSON.stringify(manifest, null, 2) + '\n',
  );

  console.log('\nDone. WebP variants + manifest.json in src/assets/optimized/');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
