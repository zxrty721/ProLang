import { useState, useMemo, useCallback, memo, useDeferredValue, useTransition } from 'react';
import LanguageCard from './LanguageCard';
import LanguageDetail from './LanguageDetail';
import FilterPanel from './FilterPanel';
import { getDifficultyClass } from '../utils/card';
import type { Language } from '../utils/language';

class FilterCache {
  private cache = new Map<string, boolean>();
  private maxSize = 200;

  get(key: string): boolean | undefined {
    const value = this.cache.get(key);
    if (value !== undefined) {
      this.cache.delete(key);
      this.cache.set(key, value);
    }
    return value;
  }

  set(key: string, value: boolean): void {
    if (this.cache.size >= this.maxSize) {
      const firstKey = this.cache.keys().next().value;
      if (firstKey !== undefined) {
        this.cache.delete(firstKey);
      }
    }
    this.cache.set(key, value);
  }

  clear(): void {
    this.cache.clear();
  }
}

const filterCache = new FilterCache();

const createFilterFunctions = () => ({
  level: (lang: Language, filters: string[]) => {
    if (!filters.length) return true;
    const difficultyClass = getDifficultyClass(lang.level);
    if (!difficultyClass) return false;
    const levelClass = difficultyClass.toLowerCase().replace(' ', '-');
    return filters.includes(levelClass);
  },

  field: (lang: Language, filters: string[]) => {
    if (!filters.length) return true;
    return filters.some(filter => lang.fields.includes(filter));
  },

  salary: (lang: Language, filters: string[]) => {
    if (!filters.length) return true;
    const salaries = Array.isArray(lang.salary) ? lang.salary : [lang.salary];
    return filters.some(filter => salaries.includes(filter as any));
  },

  search: (lang: Language, term: string) => {
    if (!term) return true;
    return lang.name.toLowerCase().includes(term.toLowerCase());
  }
});

const MemoizedLanguageCard = memo(LanguageCard);
const MemoizedLanguageDetail = memo(LanguageDetail);
const MemoizedFilterPanel = memo(FilterPanel);

export default function InteractiveCardSection({ languages }: { languages: Language[] }) {
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);
  const [levelFilter, setLevelFilter] = useState<string[]>([]);
  const [fieldFilter, setFieldFilter] = useState<string[]>([]);
  const [salaryFilter, setSalaryFilter] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const deferredSearch = useDeferredValue(searchTerm);
  const [showFilterPanel, setShowFilterPanel] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [isPending, startTransition] = useTransition();

  const filterFunctions = useMemo(() => createFilterFunctions(), []);

  const hasActiveFilters = useMemo(() => {
    return !!(levelFilter.length || fieldFilter.length || salaryFilter.length || searchTerm.length);
  }, [levelFilter.length, fieldFilter.length, salaryFilter.length, searchTerm.length]);

  const filteredLanguages = useMemo(() => {
    if (!hasActiveFilters) return languages;
    return languages.filter(lang => {
      if (deferredSearch && !filterFunctions.search(lang, deferredSearch)) return false;
      if (levelFilter.length && !filterFunctions.level(lang, levelFilter)) return false;
      if (fieldFilter.length && !filterFunctions.field(lang, fieldFilter)) return false;
      if (salaryFilter.length && !filterFunctions.salary(lang, salaryFilter)) return false;
      return true;
    });
  }, [languages, levelFilter, fieldFilter, salaryFilter, deferredSearch, hasActiveFilters, filterFunctions]);

  const handleReset = useCallback(() => {
    setLevelFilter([]);
    setFieldFilter([]);
    setSalaryFilter([]);
    setSearchTerm('');
    filterCache.clear();
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm('');
  }, []);

  const openLanguageModal = useCallback((lang: Language) => {
    setSelectedLanguage(lang);
    setModalVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalVisible(false);
    setTimeout(() => setSelectedLanguage(null), 150);
  }, []);

  const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    startTransition(() => setSearchTerm(value));
  }, []);

  const handleNextLanguage = useCallback(() => {
    if (!selectedLanguage || filteredLanguages.length === 0) return;
    const currentIndex = filteredLanguages.findIndex(lang => lang.id === selectedLanguage.id);
    const nextIndex = (currentIndex + 1) % filteredLanguages.length;
    setSelectedLanguage(filteredLanguages[nextIndex]);
  }, [selectedLanguage, filteredLanguages]);

  const handlePrevLanguage = useCallback(() => {
    if (!selectedLanguage || filteredLanguages.length === 0) return;
    const currentIndex = filteredLanguages.findIndex(lang => lang.id === selectedLanguage.id);
    const prevIndex = (currentIndex - 1 + filteredLanguages.length) % filteredLanguages.length;
    setSelectedLanguage(filteredLanguages[prevIndex]);
  }, [selectedLanguage, filteredLanguages]);

  const showNoResults = !filteredLanguages.length && hasActiveFilters;

  return (
    <div className="min-h-screen from-gray-900 via-gray-800 to-gray-900 text-gray-900">
      <div className="flex w-full px-4 py-8 items-stretch gap-4 justify-center">
        <button
          className="fixed top-6 left-6 z-30 px-4 py-2 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 border border-gray-200"
          onClick={() => setShowFilterPanel(!showFilterPanel)}
          aria-label={showFilterPanel ? "ปิดตัวกรอง" : "เปิดตัวกรอง"}
        >
          {showFilterPanel ? '✕' : '⚙️'} ตัวกรอง
        </button>

        {showFilterPanel && (
          <div className="fixed top-20 left-6 z-40 bg-white rounded-2xl shadow-2xl p-6 text-sm border border-gray-200 min-w-[320px] max-h-[80vh] overflow-y-auto transition-all duration-150 transform">
            <div className="mb-4">
              <h3 className="font-bold text-lg text-gray-800 mb-4">ตัวกรอง</h3>
              <MemoizedFilterPanel
                levelFilter={levelFilter}
                setLevelFilter={setLevelFilter}
                fieldFilter={fieldFilter}
                setFieldFilter={setFieldFilter}
                salaryFilter={salaryFilter}
                setSalaryFilter={setSalaryFilter}
              />
            </div>
          </div>
        )}

        <div className={`w-full max-w-[1400px] mx-auto bg-white rounded-3xl p-6 shadow-xl transition-all duration-150 ease-out ${selectedLanguage ? 'blur-sm scale-95 opacity-90' : ''}`}>
          <div className="flex flex-col items-center gap-4 mb-6">
            <h3 className="font-bold text-lg text-gray-800">ค้นหาชื่อ</h3>
            <input
              type="text"
              placeholder="ค้นหาชื่อภาษา..."
              className="p-3 border border-gray-300 rounded-xl w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-100"
              value={searchTerm}
              onChange={handleSearchChange}
              autoComplete="off"
            />
            <div className="flex gap-4">
              <button
                onClick={handleClearSearch}
                className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 shadow-md transition-colors duration-100 disabled:opacity-50"
                disabled={!searchTerm}
              >
                ล้างคำค้นหา
              </button>
              <button
                onClick={handleReset}
                className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 shadow-md transition-colors duration-100 disabled:opacity-50"
                disabled={!hasActiveFilters}
              >
                รีเซ็ตทั้งหมด
              </button>
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-gray-500 text-sm">
              {hasActiveFilters ? (
                <>พบภาษา {filteredLanguages.length} จากทั้งหมด {languages.length}</>
              ) : (
                <>แสดงภาษาทั้งหมด {languages.length}</>
              )}
            </p>
          </div>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <MemoizedLanguageCard
                  key={lang.id}
                  language={lang}
                  isSelected={selectedLanguage?.id === lang.id}
                  onClick={() => openLanguageModal(lang)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500 text-xl mb-4">
                  {showNoResults ? 'ไม่พบภาษาตรงตามเงื่อนไข' : 'ไม่มีข้อมูลภาษา'}
                </p>
                {showNoResults && (
                  <button
                    onClick={handleReset}
                    className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 shadow-md transition-colors duration-100"
                  >
                    ล้างตัวกรองทั้งหมด
                  </button>
                )}
              </div>
            )}
          </section>
        </div>

        {selectedLanguage && (
          <>
            <div
              className={`fixed inset-0 bg-black/50 z-40 transition-all duration-150 ${modalVisible ? 'opacity-100' : 'opacity-0'}`}
              onClick={closeModal}
            />
            <div
              className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-150 ease-out ${modalVisible ? 'opacity-100' : 'opacity-0'}`}
              role="dialog"
              aria-modal="true"
            >
              <div className={`transform transition-all duration-150 ease-out ${modalVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
                <MemoizedLanguageDetail language={selectedLanguage} onClose={closeModal} />
              </div>
            </div>
            <button
              onClick={handlePrevLanguage}
              className="modal-next-button fixed left-1/2 top-1/2 transform -translate-y-1/2 -translate-x-120 z-[60] px-4 py-3 bg-white text-gray-800 rounded-full shadow-2xl hover:shadow-xl transition-all duration-200 border border-gray-200 hover:bg-gray-50"
              aria-label="ภาษาก่อนหน้า"
            >
              <span className="text-xl">←</span>
            </button>
            <button
              onClick={handleNextLanguage}
              className="modal-next-button fixed right-1/2 top-1/2 transform -translate-y-1/2 translate-x-120 z-[60] px-4 py-3 bg-white text-gray-800 rounded-full shadow-2xl hover:shadow-xl transition-all duration-200 border border-gray-200 hover:bg-gray-50"
              aria-label="ภาษาถัดไป"
            >
              <span className="text-xl">→</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}