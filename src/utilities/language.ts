// src/types/language.ts
export interface Language {
  id: number;
  name: string;
  slug: string;
  desc: string;
  by: string;
  yr: string;
  level: string;
  salary: 'entry' | 'mid' | 'high';
  par: string[]; // เช่น ['backend', 'system']
  cateid: number[];
  logo: string;
  fields: string[];
  pros: string[];
  cons: string[];
  
  // Make these properties optional since not all objects have them
  language_type?: string;
  
  variables: {
    declaration: string[];
    types: string[];
    examples: string[];
  };
  
  functions: {
    declaration: string[];
    examples: string[];
    built_in: string[];
  };
  
  syntax: {
    comments: string[];
    conditions: string[];
    loops: string[];
    operators: string[];
    examples: string[];
  };
  
  frameworks: string[];
  learning_resources: string[];
  popularity_rank: number;
  salary_range: string;
}

