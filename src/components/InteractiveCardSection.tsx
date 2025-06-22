// src/components/InteractiveCardSection.tsx

import { useState } from 'react';
import LanguageCard from './LanguageCard';
import LanguageDetail from './LanguageDetail';
import FilterPanel from './FilterPanel';
import { getDifficultyClass } from '../utils/card';
import type { Language } from '../utils/language'; // อย่าลืม import type Language

export default function InteractiveCardSection({ languages }: { languages: Language[] }) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [levelFilter, setLevelFilter] = useState<string[]>([]);
  const [fieldFilter, setFieldFilter] = useState<string[]>([]);
  const [salaryFilter, setSalaryFilter] = useState<string[]>([]); // ตรงนี้เป็น string[] ปกติ
  const [filteredLanguages, setFilteredLanguages] = useState<Language[] | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [showFilter, setShowFilter] = useState<boolean>(true);

  const handleFilterSubmit = () => {
    const result = languages.filter((lang) => {
      const rawLevelClass = getDifficultyClass(lang.level);
      const matchesLevel = levelFilter.length === 0 || 
                           (rawLevelClass && levelFilter.includes(rawLevelClass.toLowerCase()));

      const matchesField = fieldFilter.length === 0 || lang.fields.some(f => fieldFilter.includes(f));

      // **** แก้ไขตรงนี้: เพิ่ม Type Assertion ให้ filterSal ****
      const matchesSalary = salaryFilter.length === 0 || salaryFilter.some(filterSal => {
        const langSalaries = Array.isArray(lang.salary) ? lang.salary : [lang.salary];
        // ใช้ as 'low' | 'mid' | 'high' เพื่อบอก TypeScript ว่า filterSal จะเป็นหนึ่งในค่าเหล่านี้
        return langSalaries.includes(filterSal as 'low' | 'mid' | 'high' | 'veryhigh'); 
      });
      // ******************************************************

      const matchesSearch = lang.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesLevel && matchesField && matchesSalary && matchesSearch;
    });
    setFilteredLanguages(result);
  };

  const handleReset = () => {
    setLevelFilter([]);
    setFieldFilter([]);
    setSalaryFilter([]);
    setFilteredLanguages(null);
    setSearchTerm('');
  };

  const openLanguageModal = (lang: Language) => {
    setSelectedLanguage(lang);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedLanguage(null);
    document.body.style.overflow = 'auto';
  };

  const dataToShow = filteredLanguages === null ? languages : filteredLanguages;

  return (
    <div>
      <div className="text-center my-4">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="px-6 py-2 bg-gray-200 text-black rounded-xl hover:bg-gray-300 transition-all duration-300"
        >
          {showFilter ? 'ซ่อนการค้นหา' : 'แสดงการค้นหา'}
        </button>
      </div>

      {showFilter && (
        <FilterPanel
          levelFilter={levelFilter}
          setLevelFilter={setLevelFilter}
          fieldFilter={fieldFilter}
          setFieldFilter={setFieldFilter}
          salaryFilter={salaryFilter}
          setSalaryFilter={setSalaryFilter}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          onSubmit={handleFilterSubmit}
          onReset={handleReset}
        />
      )}

      <div className="mx-auto my-5 p-10 max-w-[1400px] bg-white rounded-3xl shadow-xl">
        <section className="sidebar grid gap-4 md:grid-cols-3">
          {filteredLanguages && (
            <p className="text-sm text-gray-500 col-span-full text-center">
              พบ {filteredLanguages.length} ภาษา
            </p>
          )}

          {dataToShow.length > 0 ? (
            dataToShow.map(lang => (
              <LanguageCard
                key={lang.id}
                language={lang}
                isSelected={selectedLanguage?.id === lang.id}
                onClick={() => openLanguageModal(lang)}
              />
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center">
              ไม่พบภาษาตรงตามเงื่อนไข
            </p>
          )}
        </section>

        {selectedLanguage && (
          <div
            className="language-modal-overlay"
            role="dialog"
            aria-modal="true"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                closeModal();
              }
            }}
          >
            <LanguageDetail language={selectedLanguage} onClose={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
}