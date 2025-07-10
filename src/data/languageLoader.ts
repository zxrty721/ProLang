import type { Language } from '../utils/language';
// import ไฟล์ json ที่รวมไว้แล้ว (Astro รองรับ JSON import ด้วย assert)
import rawLanguages from './languages/allLanguages.json' assert { type: 'json' };

type VariablesType = Record<string, string[]>;

function normalizeVariables(vars: VariablesType): VariablesType {
  return {
    declaration: vars['declaration'] ?? vars['declaration (การประกาศ)'] ?? [],
    types: vars['types'] ?? vars['types (ประเภท)'] ?? [],
    examples: vars['examples'] ?? vars['examples (ตัวอย่าง)'] ?? [],
  };
}

let cachedLanguages: Language[] | null = null;

export function loadAllLanguages(): Language[] {
  if (cachedLanguages) return cachedLanguages;

  cachedLanguages = (rawLanguages as any[]).map(lang => ({
    ...lang,
    variables: normalizeVariables(lang.variables ?? {}),
  }));

  // เรียงตาม id ก่อน
  cachedLanguages.sort((a, b) => a.id - b.id);

  // จำกัดแค่ 50 ภาษา
  cachedLanguages = cachedLanguages.slice(0, 50);

  return cachedLanguages;
}


