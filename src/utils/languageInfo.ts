// languageInfo.ts
import { languageMap } from '../data/languaeinfo';
import type { info } from '../utils/language'

// --- ฟังก์ชันดึงข้อมูลความนิยม ---
export function getPopularityScore(slug: string): number | null {
    const info = languageMap[slug.toLowerCase()];
    return info?.popularityScore ?? null;
}
  
export function getPopularitySources(slug: string): info['popularitySources'] | null {
    const info = languageMap[slug.toLowerCase()];
    return info ? info.popularitySources : null;
}

export function getTop5PopularLanguages() {
    const allLanguages = Object.entries(languageMap).map(([slug, info]) => ({
        id: slug,
        slug: slug,
        name: slug.charAt(0).toUpperCase() + slug.slice(1), // ทำให้ตัวอักษรแรกเป็นตัวพิมพ์ใหญ่เพื่อแสดงผล
        ...info,
        level: (info as any).level || 'intermediate'
    }));

    const languagesWithScore = allLanguages.filter(lang => getPopularityScore(lang.slug) !== null);
 
    languagesWithScore.sort((a, b) => {
        const scoreA = getPopularityScore(a.slug) || 0;
        const scoreB = getPopularityScore(b.slug) || 0;
        return scoreB - scoreA; // มากไปน้อย
    });

    return languagesWithScore.slice(0, 5);
}

// ส่วนอื่นๆ ของโค้ดเดิมของคุณ
export function getCountryflag(slug: string): string {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return "/none";
    const BASE_URL = import.meta.env.BASE_URL;
    return BASE_URL + 'images/flags/' + info.flag;
}

/** คืน community เป็น array ของ strings พร้อม Emoji */
export function getCommunity(slug: string): string[] {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return [];
    return info.community;
}

// ฟังก์ชันสำหรับดึง "รูปแบบการเขียนโปรแกรม" (Paradigms)
export function getParadigms(slug: string): string[] {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return [];
    return info.paradigms;
}

/** คืนองค์กร (organization) */
export function getOrganization(slug: string): string {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return "ไม่ทราบองค์กร";
    return info.organization;
}

// ฟังก์ชันสำหรับดึง "ผลงาน" (worksExamples)
export function getWorksExamples(slug: string): string[] {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return [];
    return info.worksExamples;
}

// ฟังก์ชันสำหรับดึง "การใช้งานหลัก" (realWorldExamples)
export function getRealWorldExamples(slug: string): string[] {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return [];
    return info.realWorldExamples;
}
// ฟังก์ชันสำหรับดึงชื่อประเทศ (ตอนนี้จะรวมตัวย่อแล้ว)
export function getCountryname(slug: string): string {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return "ไม่ทราบชื่อประเทศ";
    return info.country;
}
/** คืนปีที่ก่อตั้ง */
export function getFoundedYear(slug: string): string {
    const info = languageMap[slug.toLowerCase()];
    if (!info) return "ไม่ทราบปี";
    return info.founded;
}

export function getAllUniqueParadigms(): string[] {
    const uniqueParadigms = new Set<string>();
    for (const slug in languageMap) {
        languageMap[slug].paradigms.forEach(p => uniqueParadigms.add(p));
    }
    return Array.from(uniqueParadigms).sort();
}
