import * as React from 'react';
import { fieldMap } from '../utils/card';

interface FilterPanelProps {
  levelFilter: string[];
  setLevelFilter: (levels: string[]) => void;
  fieldFilter: string[];
  setFieldFilter: (fields: string[]) => void;
  salaryFilter: string[];
  setSalaryFilter: (salary: string[]) => void;
}

export default function FilterPanel({
  levelFilter,
  setLevelFilter,
  fieldFilter,
  setFieldFilter,
  salaryFilter,
  setSalaryFilter,
}: FilterPanelProps) {
  const toggle = (value: string, current: string[], setFunc: (val: string[]) => void) => {
    setFunc(current.includes(value) ? current.filter(v => v !== value) : [...current, value]);
  };

  return (
    // Removed styling like bg-white, rounded-xl, shadow-xl from here.
    // These styles will be applied to the parent container in InteractiveCardSection.
    <div className="flex flex-col gap-6 w-full">
      {/* Language Level Filter Section */}
      <div>
        <h3 className="font-bold text-lg mb-3 text-gray-800">🌟ระดับภาษา 5 ระดับ :</h3>
        <div className="flex flex-col gap-2">
          {['machine-level', 'low-level', 'mid-level', 'high-level', 'very-high-level', 'unknown'].map(level => (
            <label key={level} className="flex items-center text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                value={level}
                checked={levelFilter.includes(level)}
                onChange={() => toggle(level, levelFilter, setLevelFilter)}
              />
              <span className="ml-2">
                {level.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Field Filter Section */}
      <div className="mt-4">
        <h3 className="font-bold text-lg mb-3 text-gray-800">💼สายงาน {Object.entries(fieldMap).length} สายงาน :</h3>
        <div className="flex flex-col gap-2">
        {Object.entries(fieldMap).map(([code, label]) => (
            <label key={code} className="flex items-center text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                value={code}
                checked={fieldFilter.includes(code)}
                onChange={() => toggle(code, fieldFilter, setFieldFilter)}
                className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="ml-2">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Salary Range Filter Section */}
      {/* <div className="mt-4">
        <h3 className="font-bold text-lg mb-3 text-gray-800">💰ช่วงเงินเดือน :</h3>
        <div className="flex flex-col gap-2">
          {['low', 'mid', 'high', 'veryhigh'].map(sal => (
            <label key={sal} className="flex items-center text-gray-700 cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                value={sal}
                checked={salaryFilter.includes(sal)}
                onChange={() => toggle(sal, salaryFilter, setSalaryFilter)}
              />
              <span className="ml-2">
                {sal === 'low' ? '15K–30K' : sal === 'mid' ? '30K–60K' : sal === 'high' ? '60K-100K' : '100K+'}
              </span>
            </label>
          ))}
        </div>
      </div> */}
    </div>
  );
}
