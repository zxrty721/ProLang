// src/data/languageLoader.ts

// ตรวจสอบให้แน่ใจว่าเส้นทางนี้ถูกต้อง และไฟล์ 'language.ts'
// มีการ export interface ที่ชื่อ 'Language' และมี property ต่างๆ ครบถ้วน
import { type Language } from '../utils/language';

// import.meta.glob โหลดไฟล์ JSON ทั้งหมดในโฟลเดอร์ languages ทันทีตอน Build Time
// Type Parameter บอก TypeScript ว่าแต่ละโมดูลจะมี property 'default' ซึ่งคือ Type Language
const modules = import.meta.glob<Record<string, { default: Language }>>('./languages/*.json', { eager: true });

export function loadAllLanguages(): Language[] {
    const allLanguages: Language[] = [];

    for (const path in modules) {
        // ใช้ Type Assertion แบบ 2 ขั้นตอน เพื่อให้ TypeScript ยอมรับ Type
        // นี่คือการบอก TypeScript อย่างเข้มงวดว่า 'modules[path].default'
        // คือข้อมูลของ Type 'Language' ที่เราต้องการ
        allLanguages.push(modules[path].default as unknown as Language);
    }

    // จัดเรียงข้อมูลตามชื่อภาษา
    // ถ้า Interface Language ของคุณถูกต้อง (มี property 'name')
    // จะไม่มีข้อความแจ้งเตือนที่นี่
    allLanguages.sort((a, b) => {
        // เรียงตาม id ก่อน
        if (a.id !== b.id) {
          return a.id - b.id;
        }
        
        return a.name.localeCompare(b.name);
      });

    return allLanguages;
}
