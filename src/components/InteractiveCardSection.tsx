import { useState, useMemo, useCallback } from 'react';
import LanguageCard from './LanguageCard';
import LanguageDetail from './LanguageDetail';
import FilterPanel from './FilterPanel';
import { getDifficultyClass } from '../utils/card';
import type { Language } from '../utils/language';

export default function InteractiveCardSection({ languages }: { languages: Language[] }) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [levelFilter, setLevelFilter] = useState<string[]>([]);
  const [fieldFilter, setFieldFilter] = useState<string[]>([]);
  const [salaryFilter, setSalaryFilter] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredLanguages = useMemo(() => {
    if (
      levelFilter.length === 0 &&
      fieldFilter.length === 0 &&
      salaryFilter.length === 0 &&
      searchTerm === ''
    )
      return languages;

    return languages.filter((lang) => {
      const rawLevelClass = getDifficultyClass(lang.level)?.toLowerCase().replace(' ', '-');
      const matchesLevel =
        !levelFilter.length || (rawLevelClass && levelFilter.includes(rawLevelClass));
      const matchesField =
        !fieldFilter.length || lang.fields.some((f) => fieldFilter.includes(f));
      const matchesSalary =
        !salaryFilter.length ||
        salaryFilter.some((f) =>
          (Array.isArray(lang.salary) ? lang.salary : [lang.salary]).includes(
            f as 'low' | 'mid' | 'high' | 'veryhigh'
          )
        );
      const matchesSearch = lang.name.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesLevel && matchesField && matchesSalary && matchesSearch;
    });
  }, [languages, levelFilter, fieldFilter, salaryFilter, searchTerm]);

  const handleReset = useCallback(() => {
    setLevelFilter([]);
    setFieldFilter([]);
    setSalaryFilter([]);
    setSearchTerm('');
  }, []);

  const openLanguageModal = useCallback((lang: Language) => {
    setSelectedLanguage(lang);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setSelectedLanguage(null);
    document.body.style.overflow = 'auto';
  }, []);

  const showNoResults = useMemo(
    () =>
      filteredLanguages.length === 0 &&
      (levelFilter.length > 0 ||
        fieldFilter.length > 0 ||
        salaryFilter.length > 0 ||
        searchTerm !== ''),
    [filteredLanguages, levelFilter, fieldFilter, salaryFilter, searchTerm]
  );

  return (
    <div>
      
      <div className="flex min-h-screen w-full px-4 py-8 items-stretch gap-4 justify-center">
        {/* FilterPanel */}
        <div className="bg-white rounded-3xl shadow-xl p-4 text-sm">
          <FilterPanel
            levelFilter={levelFilter}
            setLevelFilter={setLevelFilter}
            fieldFilter={fieldFilter} 
            setFieldFilter={setFieldFilter}
            salaryFilter={salaryFilter}
            setSalaryFilter={setSalaryFilter}
          />
        </div>

        {/* Maincard: fix width 1400px, อยู่กลาง */}
        <div className="w-[1400px] mx-auto bg-white rounded-3xl p-6 h-full">
          {/* Search */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <h3 className="font-bold text-lg text-gray-800">ค้นหาชื่อ</h3>
            <input
              type="text"
              placeholder="ค้นหาชื่อภาษา..."
              className="p-3 border border-gray-300 rounded-xl w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="flex gap-4">
              <button
                onClick={() => setSearchTerm('')}
                className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 shadow-md"
              >
                ล้างคำค้นหา
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 shadow-md"
              >
                รีเซ็ตทั้งหมด
              </button>
            </div>
          </div>

          {/* Card Grid */}
          <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <p className="text-gray-500 col-span-full text-center py-5 text-sm">
              พบภาษา {filteredLanguages.length}
            </p>
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <LanguageCard
                  key={lang.id}
                  language={lang}
                  isSelected={selectedLanguage?.id === lang.id}
                  onClick={() => openLanguageModal(lang)}
                />
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center py-10 text-xl">
                ไม่พบภาษาตรงตามเงื่อนไข
              </p>
            )}
          </section>
        </div>

        {/* flex-grow: พื้นที่ว่างด้านขวา */}
        <div className="flex-grow" />

        {/* Modal */}
        {selectedLanguage && (
          <div
            className="language-modal-overlay fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            onClick={(e) => e.target === e.currentTarget && closeModal()}
          >
            <LanguageDetail language={selectedLanguage} onClose={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
}