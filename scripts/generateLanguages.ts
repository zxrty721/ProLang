import fs from 'fs/promises';
import fsSync from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import zlib from 'zlib';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const LANG_DIR = path.resolve(__dirname, '../src/data/language');
const OUTPUT_DIR = path.resolve(__dirname, '../src/data/languages');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'allLanguages.json');
const OUTPUT_FILE_GZ = path.join(OUTPUT_DIR, 'allLanguages.json.gz');

async function mergeLanguages() {
  const files = (await fs.readdir(LANG_DIR)).filter(f => f.endsWith('.json'));
  const merged = [];

  for (const file of files) {
    try {
      const content = await fs.readFile(path.join(LANG_DIR, file), 'utf-8');
      merged.push(JSON.parse(content));
    } catch (err) {
      console.warn(`Failed to parse JSON from ${file}:`, err);
    }
  }

  return merged;
}

async function writeGzipFile(input: Buffer | string, outputPath: string) {
  return new Promise<void>((resolve, reject) => {
    const gzip = zlib.createGzip();
    const writeStream = fsSync.createWriteStream(outputPath);

    writeStream.on('finish', () => resolve());
    writeStream.on('error', reject);
    gzip.on('error', reject);

    gzip.pipe(writeStream);
    gzip.end(input);
  });
}

async function build() {
  console.time('Build allLanguages');
  try {
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    const merged = await mergeLanguages();

    const jsonString = JSON.stringify(merged); // compact form

    await fs.writeFile(OUTPUT_FILE, jsonString, 'utf-8');
    console.log(`Merged ${merged.length} files into ${OUTPUT_FILE}`);

    await writeGzipFile(jsonString, OUTPUT_FILE_GZ);
    console.log(`Compressed JSON to ${OUTPUT_FILE_GZ}`);
  } catch (err) {
    console.error('Error during build:', err);
  }
  console.timeEnd('Build allLanguages');
}

build();
