// src/utils/languageLoader.ts
import type { Language } from '../utils/language';
import rawLanguages from '../data/runtime/allLanguages.json' assert { type: 'json' };

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

  cachedLanguages = (rawLanguages as any[]).map((lang) => ({
    ...lang,
    variables: normalizeVariables(lang.variables ?? {}),
  }));

  return cachedLanguages;
}
