import fs from 'fs/promises';
import path from 'path';
import { gzip } from 'zlib';
import { promisify } from 'util';

const gzipAsync = promisify(gzip);

const LANG_DIR = path.resolve('./scripts/language');
const OUTPUT_DIR = path.resolve('./src/data/runtime');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'allLanguages.json.gz');

interface LanguageRaw {
  id: number;
  name: string;
  slug: string;
  logo: string;
  desc: string;
  by: string;
  yr: string;
  level: string;
  par: string[];
  fields: string[];
  rank: string;
  pros: string[];
  cons: string[];
  frameworks: string[];
  learn: string[];
  variables: Record<string, string[]>;
  functions: Record<string, string[]>;
  syntax: Record<string, string[]>;
  // อื่นๆ อาจจะมีแต่ไม่ต้องใช้
}

async function buildLanguages() {
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const files = (await fs.readdir(LANG_DIR)).filter(f => f.endsWith('.json'));
  const merged: LanguageRaw[] = [];

  for (const file of files) {
    const filePath = path.join(LANG_DIR, file);
    const content = await fs.readFile(filePath, 'utf-8');
    try {
      const json = JSON.parse(content);
      if (Array.isArray(json)) {
        merged.push(...json);
      } else {
        merged.push(json);
      }
    } catch (e) {
      console.warn(`Warning: Failed to parse ${file}`, e);
    }
  }

  // กรองเฉพาะภาษา id เป็นตัวเลข และจัดเรียงตาม id
  const filteredSorted = merged
    .filter(lang => typeof lang.id === 'number')
    .sort((a, b) => a.id - b.id)
    .slice(0, 50) // เลือกแค่ 50 ตัวแรก

    // เลือกเฉพาะฟิลด์ที่ต้องการเก็บ (ลดขนาด)
    .map(lang => ({
      id: lang.id,
      name: lang.name,
      slug: lang.slug,
      logo: lang.logo,
      desc: lang.desc,
      by: lang.by,
      yr: lang.yr,
      level: lang.level,
      par: lang.par,
      fields: lang.fields,
      rank: lang.rank,
      pros: lang.pros,
      cons: lang.cons,
      frameworks: lang.frameworks,
      learn: lang.learn,
      variables: lang.variables,
      functions: lang.functions,
      syntax: lang.syntax,
    }));

  const jsonStr = JSON.stringify(filteredSorted);

  // บีบอัด gzip
  const compressed = await gzipAsync(jsonStr);

  await fs.writeFile(OUTPUT_FILE, compressed);

  console.log(`Build complete: ${OUTPUT_FILE} (50 languages, gzip compressed)`);
}

buildLanguages().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
