import * as React from 'react';
import { useMemo, memo } from 'react';
import { fieldMap, getParadiamsShow } from '../../utils/card';
import { getParadigms } from '../../utils/languageCountries'; // <-- Import สิ่งที่เราสร้างไว้


interface FilterPanelProps {
  levelFilter: string[];
  setLevelFilter: (levels: string[]) => void;
  parFilter: string[];
  setParFilter: (par  : string[]) => void;
  fieldFilter: string[];
  setFieldFilter: (fields: string[]) => void;
}

const FilterPanel = ({
  levelFilter,
  setLevelFilter,
  parFilter,
  setParFilter,
  fieldFilter,
  setFieldFilter,
}: FilterPanelProps) => {
  const toggle = (value: string, current: string[], setFunc: (val: string[]) => void) => {
    const set = new Set(current);
    if (set.has(value)) set.delete(value);
    else set.add(value);

    const updated = Array.from(set);
    if (updated.length === current.length && updated.every((v, i) => v === current[i])) return;
    setFunc(updated);
  };

  const levelOptions = useMemo(
    () => ['machine-level', 'low-level', 'mid-level', 'high-level', 'very-high-level', 'unknown'],
    []
  );

  const fieldOptions = useMemo(() => Object.entries(fieldMap), []);
  const ParOptions = useMemo(() => Object.entries(getParadiamsShow), []);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Level Filter */}
      <div>
        <h3 className="font-bold text-lg mb-3 text-gray-800">
          🌟ระดับภาษา {levelOptions.length} ระดับ :
        </h3>
        <div className="flex flex-col gap-2">
          {levelOptions.map(level => {
            const checked = levelFilter.includes(level);
            return (
              <button
                key={level}
                role="checkbox"
                aria-checked={checked}
                onClick={() => toggle(level, levelFilter, setLevelFilter)}
                className={`cursor-pointer flex items-center gap-2 text-gray-700 p-2 rounded hover:bg-gray-100 transition-all
                  ${checked ? 'bg-yellow-100 font-semibold text-yellow-800' : ''}`}
              >
                <span className="inline-block h-5 w-5 rounded border border-yellow-400 bg-white transition">
                  {checked && (
                    <span className="block w-full h-full bg-yellow-200 rounded-sm transition-transform scale-100 group-hover:scale-110" />
                  )}
                </span>
                <span>{level.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}</span>
              </button>
            );
          })}
        </div>
      </div>

       {/* Paradiams Filter */}
       <div>
      <h3 className="font-bold text-lg mb-3 text-gray-800">
        🏗️รูปแบบการเขียน {ParOptions.length} รูปแบบ :
      </h3>
      <div className="flex flex-col gap-2">
          {ParOptions.map(([code, label]) => {
            const checked = parFilter.includes(code);
            return (
              <button
                key={code}
                role="checkbox"
                aria-checked={checked}
                onClick={() => toggle(code, parFilter, setParFilter)}
                className={`cursor-pointer flex items-center gap-2 text-gray-700 p-2 rounded hover:bg-gray-100 transition-all
                  ${checked ? 'bg-blue-100 font-semibold text-blue-800' : ''}`}>
                <span className="inline-block h-5 w-5 rounded border border-blue-400 bg-white transition">
                  {checked && (
                    <span className="block w-full h-full bg-blue-200 rounded-sm transition-transform scale-100 group-hover:scale-110" />
                  )}
                </span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Field Filter */}
      <div className="mt-4">
        <h3 className="font-bold text-lg mb-3 text-gray-800">
          💼สายงาน {fieldOptions.length} สายงาน :
        </h3>
        <div className="flex flex-col gap-2">
          {fieldOptions.map(([code, label]) => {
            const checked = fieldFilter.includes(code);
            return (
              <button
                key={code}
                role="checkbox"
                aria-checked={checked}
                onClick={() => toggle(code, fieldFilter, setFieldFilter)}
                className={`cursor-pointer flex items-center gap-2 text-gray-700 p-2 rounded hover:bg-gray-100 transition-all
                  ${checked ? 'bg-green-100 font-semibold text-green-800' : ''}`}
              >
                <span className="inline-block h-5 w-5 rounded border border-green-400 bg-white transition">
                  {checked && (
                    <span className="block w-full h-full bg-green-200 rounded-sm transition-transform scale-100 group-hover:scale-110" />
                  )}
                </span>
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(FilterPanel);
