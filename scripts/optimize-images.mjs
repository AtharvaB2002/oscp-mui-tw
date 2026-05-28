import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';
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

const JPG_QUALITY = 78;
const WEBP_QUALITY = 70;

async function run() {
  await mkdir(OUT, { recursive: true });
  const files = (await readdir(SRC)).filter((f) => /\.(jpe?g|png)$/i.test(f));

  if (files.length === 0) {
    console.warn(`No .jpg/.jpeg/.png files found in ${SRC} — nothing to optimize.`);
    return;
  }

  for (const file of files) {
    const { name } = parse(file);
    const input = join(SRC, file);
    const meta = await sharp(input).metadata();
    console.log(`\n${file} — ${meta.width}×${meta.height}`);

    for (const v of VARIANTS) {
      const w = Math.min(v.width, meta.width);
      const baseName = `${name}-${v.suffix}`;

      const jpgPath = join(OUT, `${baseName}.jpg`);
      const webpPath = join(OUT, `${baseName}.webp`);

      await sharp(input)
        .resize({ width: w, withoutEnlargement: true })
        .jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true })
        .toFile(jpgPath);

      await sharp(input)
        .resize({ width: w, withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY, effort: 5 })
        .toFile(webpPath);

      console.log(`  ${v.suffix}: ${w}w → jpg + webp`);
    }
  }
  console.log('\nDone. Optimized files in src/assets/optimized/');
}

run().catch((e) => {
  console.error(e);
  process.exit(1);
});
