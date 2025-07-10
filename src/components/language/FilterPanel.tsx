import * as React from 'react';
import { useMemo, memo } from 'react';
import { fieldMap } from '../../utils/card';

interface FilterPanelProps {
  levelFilter: string[];
  setLevelFilter: (levels: string[]) => void;
  fieldFilter: string[];
  setFieldFilter: (fields: string[]) => void;
  salaryFilter: string[];
  setSalaryFilter: (salary: string[]) => void;
}

const FilterPanel = ({
  levelFilter,
  setLevelFilter,
  fieldFilter,
  setFieldFilter,
  salaryFilter,
  setSalaryFilter,
}: FilterPanelProps) => {
  const toggle = (value: string, current: string[], setFunc: (val: string[]) => void) => {
    const newValue = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    if (newValue.length === current.length && newValue.every((v, i) => v === current[i])) return;
    setFunc(newValue);
  };

  const levelOptions = useMemo(() => [
    'machine-level', 'low-level', 'mid-level', 'high-level', 'very-high-level', 'unknown'
  ], []);

  const fieldOptions = useMemo(() => Object.entries(fieldMap), []);

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Language Level Filter Section */}
      <div>
        <h3 className="font-bold text-lg mb-3 text-gray-800">🌟ระดับภาษา 5 ระดับ :</h3>
        <div className="flex flex-col gap-2">
          {levelOptions.map(level => {
            const checked = levelFilter.includes(level);
            return (
              <button
                key={level}
                role="checkbox"
                aria-checked={checked}
                onClick={() => toggle(level, levelFilter, setLevelFilter)}
                className={`flex items-center gap-2 text-gray-700 p-2 rounded hover:bg-gray-100 transition-all
                  ${checked ? 'bg-blue-100 font-semibold text-blue-800' : ''}`}
              >
                <span className="inline-block h-5 w-5 rounded border border-blue-600 bg-white">
                  {checked && <span className="block w-full h-full bg-blue-600 rounded-sm" />}
                </span>
                <span>
                  {level.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Field Filter Section */}
      <div className="mt-4">
        <h3 className="font-bold text-lg mb-3 text-gray-800">💼สายงาน {fieldOptions.length} สายงาน :</h3>
        <div className="flex flex-col gap-2">
          {fieldOptions.map(([code, label]) => {
            const checked = fieldFilter.includes(code);
            return (
              <button
                key={code}
                role="checkbox"
                aria-checked={checked}
                onClick={() => toggle(code, fieldFilter, setFieldFilter)}
                className={`flex items-center gap-2 text-gray-700 p-2 rounded hover:bg-gray-100 transition-all
                  ${checked ? 'bg-blue-100 font-semibold text-blue-800' : ''}`}
              >
                <span className="inline-block h-5 w-5 rounded border border-blue-600 bg-white">
                  {checked && <span className="block w-full h-full bg-blue-600 rounded-sm" />}
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
