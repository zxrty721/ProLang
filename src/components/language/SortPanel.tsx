// SortPanel.tsx
import { memo } from 'react';

interface SortPanelProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

const SortPanel = memo(function SortPanel({ sortOption, setSortOption }: SortPanelProps) {
  const sortOptions = [
    { value: 'id-asc', label: 'ID (น้อย → มาก)', icon: '↗️' },
    { value: 'id-desc', label: 'ID (มาก → น้อย)', icon: '↘️' },
    { value: 'name-asc', label: 'ชื่อ (A → Z)', icon: '⬆️' },
    { value: 'name-desc', label: 'ชื่อ (Z → A)', icon: '⬇️' },
    { value: 'popularity-asc', label: 'ความนิยม (น้อย → มาก)', icon: '📈' },
    { value: 'popularity-desc', label: 'ความนิยม (มาก → น้อย)', icon: '📉' }
  ];

  return (
    <div className="rounded-2xl p-6 mb-6 border border-gray-200">
      <h3 className="font-bold text-lg text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-2xl">🔄</span>
        เรียงลำดับ
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            type="button"
            onClick={() => setSortOption(option.value)}
            className={`
              cursor-pointer flex items-center gap-3 p-1 rounded-xl border-2 transition-all duration-200
              ${sortOption === option.value
                ? 'bg-blue-500 text-white border-blue-500 shadow-lg transform scale-105'
                : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:shadow-md hover:bg-blue-50'
              }
            `}
          >
            <span className="text-2xl">{option.icon}</span>
            <span className="font-medium text-sm">{option.label}</span>
          </button>
        ))}
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-gray-500 text-sm">
          เลือกวิธีการเรียงลำดับที่ต้องการ
        </p>
      </div>
    </div>
  );
});

export default SortPanel;