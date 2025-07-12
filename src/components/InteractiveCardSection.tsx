import { useState, useMemo, memo, useRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import LanguageCard from './language/LanguageCard';
import LanguageDetail from './language/LanguageDetail';
import FilterPanel from './language/FilterPanel';
import { getDifficultyClass, getParadiamsShow } from '../utils/card';
import { getParadigms } from '../utils/languageCountries'
import type { Language } from '../utils/language';
import { levels } from 'node_modules/astro/dist/core/logger/core';

const MemoCard = memo(LanguageCard);
const MemoFilter = memo(FilterPanel);
const MemoDetail = memo(LanguageDetail);

export default function InteractiveCardSection({ languages }: { languages: Language[] }) {
  const [selected, setSelected] = useState<Language | null>(null);
  const [filters, setFilters] = useState({ level: [] as string[], par: [] as string[], field: [] as string[], search: '' });
  const [showFilter, setShowFilter] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  // Debounced search with proper cleanup
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setFilters(prev => ({ ...prev, search: searchInput }));
    }, 100);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [searchInput]);

  // Memoized filter functions
  const filterBySearch = useCallback((lang: Language, search: string) => 
    !search || lang.name.toLowerCase().includes(search.toLowerCase())
  , []);

  const filterByLevel = useCallback((lang: Language, levels: string[]) => 
    !levels.length || levels.includes(getDifficultyClass(lang.level)?.toLowerCase().replace(' ', '-') ?? '')
  , []);

  const filterByPar = useCallback((lang: Language, paradigmsFilter: string[]) => 
    !paradigmsFilter.length || paradigmsFilter.some(selectedPar => lang.par.includes(selectedPar))
   ,[])

  const filterByField = useCallback((lang: Language, fields: string[]) => 
    !fields.length || fields.some(f => lang.fields.includes(f))
  , []);

  const filtered = useMemo(() => {
    if (!filters.level.length && !filters.par.length && !filters.field.length && !filters.search) return languages;

    return languages.filter(lang => 
      filterBySearch(lang, filters.search) &&
      filterByLevel(lang, filters.level) &&
      filterByPar(lang, filters.par) &&
      filterByField(lang, filters.field)
    );
  }, [languages, filters, filterBySearch, filterByLevel, filterByPar, filterByField]);

  const hasFilters = filters.level.length > 0 || filters.field.length > 0 || filters.search.length > 0;

  const navigate = useCallback((dir: 1 | -1) => {
    if (!selected || !filtered.length) return;
    const idx = filtered.findIndex(l => l.id === selected.id);
    if (idx === -1) return;
    setSelected(filtered[(idx + dir + filtered.length) % filtered.length]);
  }, [selected, filtered]);

  const reset = useCallback(() => {
    setFilters({ level: [], par: [], field: [], search: '' });
    setSearchInput('');
  }, []);

  const handleCardClick = useCallback((lang: Language) => setSelected(lang), []);

  return (
    <div className="min-h-screen text-gray-900">
      <div className="flex w-full px-4 items-stretch gap-4 justify-center relative">

        <button
          type="button"
          className="cursor-pointer fixed top-6 left-6 z-30 px-4 py-2 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl border border-gray-200 transition-shadow"
          onClick={() => setShowFilter(!showFilter)}
        >
          {showFilter ? '✕' : '⚙️'} ตัวกรอง
        </button>

        {showFilter && (
          <div className="fixed top-20 left-6 z-40 bg-white rounded-2xl shadow-2xl p-6 text-sm border border-gray-200 min-w-[320px] max-h-[80vh] overflow-y-auto">
            <h3 className="font-bold text-lg text-gray-800 mb-4">ตัวกรอง</h3>
            <MemoFilter
              levelFilter={filters.level}
              setLevelFilter={(v) => setFilters(prev => ({ ...prev, level: v }))}
              parFilter={filters.par}
              setParFilter={(v) => setFilters(prev => ({ ...prev, par: v }))}
              fieldFilter={filters.field}
              setFieldFilter={(v) => setFilters(prev => ({ ...prev, field: v }))}
            />
          </div>
        )}

        <div className="w-full max-w-[1400px] mx-auto bg-white rounded-3xl p-6 shadow-xl">

          <div className="flex flex-col items-center gap-4 mb-6">
            <h3 className="font-bold text-lg text-gray-800">ค้นหาชื่อ</h3>
            <input
              type="text"
              placeholder="ค้นหาชื่อภาษา..."
              className="p-3 border border-gray-300 rounded-xl w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setSearchInput('')}
                className="cursor-pointer px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 shadow-md disabled:opacity-50 transition-colors"
                disabled={!searchInput}
              >
                🧹 ล้างคำค้นหา
              </button>
              <button
                type="button"
                onClick={reset}
                className="cursor-pointer px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 shadow-md disabled:opacity-50 transition-colors"
                disabled={!hasFilters}
              >
               🔄 รีเซ็ตทั้งหมด
              </button>
            </div>
          </div>

          <div className="text-center mb-4">
            <p className="text-gray-500 text-sm">
              {hasFilters
                ? `พบภาษา ${filtered.length} จากทั้งหมด ${languages.length}`
                : `แสดงภาษาทั้งหมด ${languages.length}`}
            </p>
          </div>

          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.length > 0 ? (
              filtered.map((lang) => (
                <MemoCard
                  key={lang.id}
                  language={lang}
                  isSelected={selected?.id === lang.id}
                  onClick={() => setSelected(lang)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500 text-xl mb-4">
                  {hasFilters ? 'ไม่พบภาษาตรงตามเงื่อนไข' : 'ไม่มีข้อมูลภาษา'}
                </p>
                {hasFilters && (
                  <button
                    type="button"
                    onClick={reset}
                    className="cursor-pointer px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 shadow-md transition-colors"
                  >
                    ล้างตัวกรองทั้งหมด
                  </button>
                )}
              </div>
            )}
          </section>
        </div>

        {selected && createPortal(
          <>
            <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setSelected(null)} />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <MemoDetail language={selected} onClose={() => setSelected(null)} />
            </div>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="cursor-pointer fixed left-6 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-white/95 hover:bg-white text-gray-800 rounded-full shadow-xl hover:shadow-2xl border border-gray-200 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
            >
              <span className="text-xl">&lt;</span>
            </button>
            <button
              type="button"
              onClick={() => navigate(1)}
              className="cursor-pointer fixed right-6 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-white/95 hover:bg-white text-gray-800 rounded-full shadow-xl hover:shadow-2xl border border-gray-200 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
            >
              <span className="text-xl">&gt;</span>
            </button>
          </>,
          document.body
        )}
      </div>
    </div>
  );
}