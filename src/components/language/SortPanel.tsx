import React from 'react';

interface SortPanelProps {
  sortOption: string;
  setSortOption: (option: string) => void;
}

const sortOptions = [
  { value: 'id-asc', label: '🔢 ID ↑' },
  { value: 'id-desc', label: '🔢 ID ↓' },
  { value: 'name-asc', label: '🔤 A → Z' },
  { value: 'name-desc', label: '🔤 Z → A' },
];

const SortPanel: React.FC<SortPanelProps> = ({ sortOption, setSortOption }) => (
  <div className="flex flex-col gap-2 w-full">
    <h3 className="font-bold text-lg text-gray-800 mb-2">📊 เรียงข้อมูล:</h3>
    <div className="flex flex-wrap gap-2">
      {sortOptions.map(opt => (
        <button
          key={opt.value}
          onClick={() => setSortOption(opt.value)}
          className={`px-3 py-1 rounded border text-sm font-medium transition-all
            ${sortOption === opt.value
              ? 'bg-purple-100 text-purple-800 border-purple-400'
              : 'bg-white text-gray-600 border-gray-300 hover:bg-gray-100'}`}
        >
         <p className='font-bold'>{opt.label}</p> 
        </button>
      ))}
    </div>
  </div>
);

export default SortPanel;
