import { useState, useMemo, useCallback } from 'react';
import LanguageCard from './LanguageCard';
import LanguageDetail from './LanguageDetail';
import FilterPanel from './FilterPanel';
import { getDifficultyClass } from '../utils/card';
import type { Language } from '../utils/language';

export default function InteractiveCardSection({ languages }: { languages: Language[] }) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [isClosing, setIsClosing] = useState(false);
  const [levelFilter, setLevelFilter] = useState<string[]>([]);
  const [fieldFilter, setFieldFilter] = useState<string[]>([]);
  const [salaryFilter, setSalaryFilter] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilter, setShowFilter] = useState(true);

  const filteredLanguages = useMemo(() => {
    if (
      levelFilter.length === 0 &&
      fieldFilter.length === 0 &&
      salaryFilter.length === 0 &&
      searchTerm === ''
    ) {
      return languages;
    }

    return languages.filter((lang) => {
      if (levelFilter.length > 0) {
        const rawLevelClass = getDifficultyClass(lang.level);
        if (!rawLevelClass || !levelFilter.includes(rawLevelClass.toLowerCase())) return false;
      }
      if (fieldFilter.length > 0 && !lang.fields.some(f => fieldFilter.includes(f))) return false;
      if (salaryFilter.length > 0) {
        const langSalaries = Array.isArray(lang.salary) ? lang.salary : [lang.salary];
        if (!salaryFilter.some(filterSal =>
          langSalaries.includes(filterSal as 'low' | 'mid' | 'high' | 'veryhigh')
        )) return false;
      }
      if (searchTerm && !lang.name.toLowerCase().includes(searchTerm.toLowerCase())) return false;
      return true;
    });
  }, [languages, levelFilter, fieldFilter, salaryFilter, searchTerm]);

  const toggleShowFilter = useCallback(() => {
    setShowFilter(prev => !prev);
  }, []);

  const handleReset = useCallback(() => {
    setLevelFilter([]);
    setFieldFilter([]);
    setSalaryFilter([]);
    setSearchTerm('');
  }, []);

  const openLanguageModal = useCallback((lang: Language) => {
    setSelectedLanguage(lang);
    setIsClosing(false);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeModal = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedLanguage(null);
      setIsClosing(false);
      document.body.style.overflow = 'auto';
    }, 300);
  }, []);

  const handleModalOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  }, [closeModal]);

  const handleLevelFilterChange = useCallback((newFilter: string[]) => {
    setLevelFilter(newFilter);
  }, []);

  const handleFieldFilterChange = useCallback((newFilter: string[]) => {
    setFieldFilter(newFilter);
  }, []);

  const handleSalaryFilterChange = useCallback((newFilter: string[]) => {
    setSalaryFilter(newFilter);
  }, []);

  const handleSearchTermChange = useCallback((newTerm: string) => {
    setSearchTerm(newTerm);
  }, []);

  const showNoResults = useMemo(() =>
    filteredLanguages.length === 0 &&
    (levelFilter.length > 0 || fieldFilter.length > 0 || salaryFilter.length > 0 || searchTerm !== ''),
    [filteredLanguages, levelFilter, fieldFilter, salaryFilter, searchTerm]
  );

  const filterCount = useMemo(() => {
    const hasFilters = levelFilter.length > 0 || fieldFilter.length > 0 || salaryFilter.length > 0 || searchTerm !== '';
    return hasFilters ? filteredLanguages.length : null;
  }, [filteredLanguages, levelFilter, fieldFilter, salaryFilter, searchTerm]);

  return (
    <div>
      <div className="text-center my-4">
        <button
          onClick={toggleShowFilter}
          className="px-6 py-2 bg-gray-200 text-black rounded-xl hover:bg-gray-300 transition-all duration-300"
        >
          {showFilter ? 'ซ่อนการค้นหา' : 'แสดงการค้นหา'}
        </button>
      </div>

      {showFilter && (
        <FilterPanel
          levelFilter={levelFilter}
          setLevelFilter={handleLevelFilterChange}
          fieldFilter={fieldFilter}
          setFieldFilter={handleFieldFilterChange}
          salaryFilter={salaryFilter}
          setSalaryFilter={handleSalaryFilterChange}
          searchTerm={searchTerm}
          setSearchTerm={handleSearchTermChange}
          onReset={handleReset}
        />
      )}

      <div className="mx-auto my-5 p-10 max-w-[1400px] bg-white rounded-3xl shadow-xl">
        <section className="sidebar grid gap-4 md:grid-cols-3">
          {filterCount !== null && (
            <p className="text-sm text-gray-500 col-span-full text-center">
              พบ {filterCount} ภาษา
            </p>
          )}

          {showNoResults ? (
            <p className="text-gray-500 col-span-full text-center">
              ไม่พบภาษาตรงตามเงื่อนไข
            </p>
          ) : (
            filteredLanguages.map(lang => (
              <LanguageCard
                key={lang.id}
                language={lang}
                isSelected={selectedLanguage?.id === lang.id}
                onClick={() => openLanguageModal(lang)}
              />
            ))
          )}
        </section>

        {selectedLanguage && (
          <div
            className={`language-modal-overlay ${isClosing ? 'fade-out' : ''}`}
            role="dialog"
            aria-modal="true"
            onClick={handleModalOverlayClick}
          >
            <LanguageDetail language={selectedLanguage} onClose={closeModal} />
          </div>
        )}
      </div>
    </div>
  );
}
