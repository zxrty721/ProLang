// src/components/FilterPanel.tsx
import * as React from 'react';

interface FilterPanelProps {
  levelFilter: string[];
  setLevelFilter: (levels: string[]) => void;
  fieldFilter: string[];
  setFieldFilter: (fields: string[]) => void;
  salaryFilter: string[];
  setSalaryFilter: (salary: string[]) => void;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  onReset: () => void;
}

export default function FilterPanel({
  levelFilter,
  setLevelFilter,
  fieldFilter,
  setFieldFilter,
  salaryFilter,
  setSalaryFilter,
  searchTerm,
  setSearchTerm,
  onReset,
}: FilterPanelProps) {
  const toggle = (value: string, current: string[], setFunc: (val: string[]) => void) => {
    setFunc(current.includes(value) ? current.filter(v => v !== value) : [...current, value]);
  };

  return (
    <div className="mx-auto p-7 max-w-[1400px] grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-3xl shadow-xl">
      <div>
        <h3 className="font-bold mb-2">ระดับภาษา</h3>
        {['machine-level', 'low-level', 'mid-level', 'high-level', 'very-high-level', 'unknown'].map(level => (
          <label key={level} className="block">
            <input
              type="checkbox"
              value={level}
              checked={levelFilter.includes(level)}
              onChange={() => toggle(level, levelFilter, setLevelFilter)}
            />{' '}
            {level.replace('-', ' ').replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-bold mb-2">สายงาน</h3>
        {['Web Frontend', 'Web Backend', 'Mobile Apps', 'AI / Machine Learning', "Data Science / Analytics", "Game Development", "Desktop Applications", "Cloud Infrastructure", 'System Programming', "Database / SQL"].map(field => (
          <label key={field} className="block">
            <input
              type="checkbox"
              value={field}
              checked={fieldFilter.includes(field)}
              onChange={() => toggle(field, fieldFilter, setFieldFilter)}
            />{' '}
            {field}
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-bold mb-2">ช่วงเงินเดือน</h3>
        {['low', 'mid', 'high', 'veryhigh'].map(sal => (
          <label key={sal} className="block">
            <input
              type="checkbox"
              value={sal}
              checked={salaryFilter.includes(sal)}
              onChange={() => toggle(sal, salaryFilter, setSalaryFilter)}
            />{' '}
            {sal === 'low' ? '15K–30K' : sal === 'mid' ? '30K–60K' : sal === 'high' ? '60K-100K' : '100K+'}
          </label>
        ))}
      </div>

      <div>
        <h3 className="font-bold mb-2">ค้นหาชื่อ</h3>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="ค้นหาชื่อภาษา..."
          className="w-full p-2 border border-gray-300 rounded-xl mb-2"
        />
        <button
          onClick={onReset}
          className="w-full px-4 py-2 bg-gray-200 text-black rounded-xl hover:bg-gray-300"
        >
          รีเซ็ต
        </button>
      </div>
    </div>
  );
}