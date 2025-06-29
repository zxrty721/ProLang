// src/components/LanguageCard.tsx

import React from 'react';
import type { Language } from '../utils/language';
import { getDifficultyClass } from '../utils/card';

interface LanguageCardProps {
  language: Language;
  isSelected: boolean;
  onClick: () => void;
}

function LanguageCard({ language, isSelected, onClick }: LanguageCardProps) {
  return (
    <div className={`card ${isSelected ? 'active' : ''} ${getDifficultyClass(language.level)}`} onClick={onClick}>
      <img
        src={import.meta.env.BASE_URL + language.logo}
        alt={`${language.name} logo`}
        className="language-logo logo-animate"
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = `https://placehold.co/60x60/cccccc/ffffff?text=${language.name.charAt(0)}`;
        }}
      />
      <div className="language-name">{language.name}</div>
      <div className="language-desc">
        {language.desc.length > 80 ? language.desc.substring(0, 80) + '...' : language.desc}
      </div>
      <div className="language-meta">
        <div className="flex flex-wrap gap-2">
          {language.par.map((paradigm, i) => (
            <span key={i} className="tag text-xs bg-gray-50 rounded-xl p-2 shadow-sm">{paradigm}</span>
          ))}
        </div>
        <span className={`lang-level level-animate ${getDifficultyClass(language.level)}`}>
          {getDifficultyClass(language.level)}
        </span>
      </div>
    </div>
  );
}

export default React.memo(LanguageCard);