import { useState, useMemo, useCallback, memo } from 'react';
import { createPortal } from 'react-dom';
import LanguageCard from './language/LanguageCard';
import LanguageDetail from './language/LanguageDetail';
import FilterPanel from './language/FilterPanel';
import { getDifficultyClass } from '../utils/card';
import type { Language } from '../utils/language';

const createFilters = () => ({
  level: (lang: Language, filters: string[]) =>
    !filters.length || filters.includes(getDifficultyClass(lang.level)?.toLowerCase().replace(' ', '-') ?? ''),
  field: (lang: Language, filters: string[]) =>
    !filters.length || filters.some(f => lang.fields.includes(f)),
  salary: (lang: Language, filters: string[]) =>
    !filters.length || filters.some(f => (Array.isArray(lang.salary) ? lang.salary : [lang.salary]).includes(f as any)),
  search: (lang: Language, term: string) =>
    !term || lang.name.toLowerCase().includes(term.toLowerCase())
});

const MemoCard = memo(LanguageCard);
const MemoFilter = memo(FilterPanel);
const MemoDetail = memo(LanguageDetail);

export default function InteractiveCardSection({ languages }: { languages: Language[] }) {
  const [selected, setSelected] = useState<Language | null>(null);
  const [filters, setFilters] = useState({
    level: [] as string[],
    field: [] as string[],
    salary: [] as string[],
    search: ''
  });
  const [showFilter, setShowFilter] = useState(false);

  const filterFns = useMemo(() => createFilters(), []);

  const hasFilters = useMemo(() => 
    filters.level.length > 0 || filters.field.length > 0 || filters.salary.length > 0 || filters.search.length > 0,
    [filters.level.length, filters.field.length, filters.salary.length, filters.search.length]
  );

  const filtered = useMemo(() => {
    if (!hasFilters) return languages;
    
    return languages.filter(lang => 
      filterFns.search(lang, filters.search) &&
      filterFns.level(lang, filters.level) &&
      filterFns.field(lang, filters.field) &&
      filterFns.salary(lang, filters.salary)
    );
  }, [languages, filters, hasFilters, filterFns]);

  const updateFilter = useCallback((key: keyof typeof filters, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  }, []);

  const reset = useCallback(() => {
    setFilters({ level: [], field: [], salary: [], search: '' });
  }, []);

  const openModal = useCallback((lang: Language) => {
    setSelected(lang);
  }, []);

  const closeModal = useCallback(() => {
    setSelected(null);
  }, []);

  const navigate = useCallback((dir: 1 | -1) => {
    if (!selected || !filtered.length) return;
    const idx = filtered.findIndex(l => l.id === selected.id);
    const next = (idx + dir + filtered.length) % filtered.length;
    setSelected(filtered[next]);
  }, [selected, filtered]);

  return (
    <div className="min-h-screen text-gray-900">
      <div className="flex w-full px-4 py-8 items-stretch gap-4 justify-center relative">
        
        {/* Filter Toggle */}
        <button
          className="fixed top-6 left-6 z-30 px-4 py-2 bg-white text-gray-800 rounded-xl shadow-lg hover:shadow-xl border border-gray-200"
          onClick={() => setShowFilter(!showFilter)}
        >
          {showFilter ? '✕' : '⚙️'} ตัวกรอง
        </button>

        {/* Filter Panel */}
        {showFilter && (
          <div className="fixed top-20 left-6 z-40 bg-white rounded-2xl shadow-2xl p-6 text-sm border border-gray-200 min-w-[320px] max-h-[80vh] overflow-y-auto">
            <h3 className="font-bold text-lg text-gray-800 mb-4">ตัวกรอง</h3>
            <MemoFilter
              levelFilter={filters.level}
              setLevelFilter={(v) => updateFilter('level', v)}
              fieldFilter={filters.field}
              setFieldFilter={(v) => updateFilter('field', v)}
              salaryFilter={filters.salary}
              setSalaryFilter={(v) => updateFilter('salary', v)}
            />
          </div>
        )}

        {/* Main Content */}
        <div className="w-full max-w-[1400px] mx-auto bg-white rounded-3xl p-6 shadow-xl">
          
          {/* Search Section */}
          <div className="flex flex-col items-center gap-4 mb-6">
            <h3 className="font-bold text-lg text-gray-800">ค้นหาชื่อ</h3>
            <input
              type="text"
              placeholder="ค้นหาชื่อภาษา..."
              className="p-3 border border-gray-300 rounded-xl w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.search}
              onChange={(e) => updateFilter('search', e.target.value)}
            />
            <div className="flex gap-4">
              <button
                onClick={() => updateFilter('search', '')}
                className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 shadow-md disabled:opacity-50"
                disabled={!filters.search}
              >
                ล้างคำค้นหา
              </button>
              <button
                onClick={reset}
                className="px-6 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600 shadow-md disabled:opacity-50"
                disabled={!hasFilters}
              >
                รีเซ็ตทั้งหมด
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="text-center mb-4">
            <p className="text-gray-500 text-sm">
              {hasFilters ? `พบภาษา ${filtered.length} จากทั้งหมด ${languages.length}` : `แสดงภาษาทั้งหมด ${languages.length}`}
            </p>
          </div>

          {/* Cards Grid */}
          <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.length > 0 ? (
              filtered.map((lang) => (
                <MemoCard
                  key={lang.id}
                  language={lang}
                  isSelected={selected?.id === lang.id}
                  onClick={() => openModal(lang)}
                />
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-500 text-xl mb-4">
                  {hasFilters ? 'ไม่พบภาษาตรงตามเงื่อนไข' : 'ไม่มีข้อมูลภาษา'}
                </p>
                {hasFilters && (
                  <button
                    onClick={reset}
                    className="px-6 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 shadow-md"
                  >
                    ล้างตัวกรองทั้งหมด
                  </button>
                )}
              </div>
            )}
          </section>
        </div>

        {/* Modal */}
        {selected && createPortal(
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={closeModal}
            />
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <MemoDetail language={selected} onClose={closeModal} />
            </div>
            <button
              onClick={() => navigate(-1)}
              className="fixed left-6 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-white/95 hover:bg-white text-gray-800 rounded-full shadow-xl hover:shadow-2xl border border-gray-200 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
            >
              <span className="text-xl">&lt;</span>
            </button>
            <button
              onClick={() => navigate(1)}
              className="fixed right-6 top-1/2 -translate-y-1/2 z-[60] w-12 h-12 bg-white/95 hover:bg-white text-gray-800 rounded-full shadow-xl hover:shadow-2xl border border-gray-200 flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
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