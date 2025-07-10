import fs from 'fs/promises'; 
import path from 'path';

const LANG_DIR = path.resolve('./scripts/language');
const OUTPUT_DIR = path.resolve('./src/data/runtime');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'allLanguages.json');

async function buildLanguages() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  
  const files = (await fs.readdir(LANG_DIR)).filter(f => f.endsWith('.json'));
  const merged = [];

  for (const file of files) {
    const content = await fs.readFile(path.join(LANG_DIR, file), 'utf-8');
    try {
      merged.push(JSON.parse(content));
    } catch (err) {
      console.warn(`Warning: Failed to parse ${file}`, err);
    }
  }

  const sortedAndLimited = merged
    .filter(lang => typeof lang.id === 'number')
    .sort((a, b) => a.id - b.id)
    .slice(0, 50);

  await fs.writeFile(OUTPUT_FILE, JSON.stringify(sortedAndLimited), 'utf-8');
  console.log(`Build complete: ${OUTPUT_FILE} (50 languages)`);
}

buildLanguages();
