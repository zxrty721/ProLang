// src/utilities/language.ts

export interface Language {
  id: number;
  name: string;
  slug: string;
  logo: string;
  desc: string;
  by: string;
  yr: string;
  // **** แก้ไขตรงนี้ให้ชัดเจน ****
  level: '1' | '2' | '3' | '4' | '5'; // ถ้าใน JSON ของคุณ level เป็น string เช่น "1", "2", "3"
  // หรือถ้าใน JSON เก็บเป็น 'low-level', 'mid-level', 'high-level' อยู่แล้ว ก็ใช้ type นั้นได้เลย
  // level: 'machine-level' | 'low-level' | 'mid-level' | 'high-level' | 'very-high-level';
  // ****************************
  par: string[];
  fields: string[];
  rank: string;
  salary_range: string;
  salary: Array<'low' | 'mid' | 'high' | 'veryhigh'>;
  pros: string[];
  cons: string[];
  frameworks: string[];
  learn: string[];
  variables?: {
      declaration: string[];
      types: string[];
      examples: string[];
  };
  functions?: {
      declaration: string[];
      examples: string[];
      built_in: string[];
  };
  syntax?: {
      comments: string[];
      conditions: string[];
      loops: string[];
      operators: string[];
      examples: string[];
  };
  commands?: {
    installation: string[];
    project_management: string[];
    run_build: string[];
    examples: string[];
    cluster: string[];
    pods: string[];
    deployments: string[];
    services: string[];
    config: string[];
  };
}

export interface info {
  country: string;
  flag: string;
  community: string[];
  organization: string;
  worksExamples: string[];
  realWorldExamples: string[];
  founded: string;
  paradigms: string[];
  // --- เพิ่มฟิลด์ความนิยม ---
  popularityScore: number; // คะแนนความนิยม (ใช้ TIOBE Index เป็นหลัก, เป็นเปอร์เซ็นต์)
  popularitySources: { // แหล่งที่มาของข้อมูลความนิยมอื่นๆ
      tiobe?: string; // เช่น "15.67% (TIOBE Index June 2024)"
      pypl?: string;  // เช่น "27.27% (PYPL Index June 2024)"
      stackOverflow?: string; // เช่น "48.07% (Stack Overflow 2023, Most Used)"
      [key: string]: string | undefined; // อนุญาตให้เพิ่มแหล่งอื่นได้
  };
}