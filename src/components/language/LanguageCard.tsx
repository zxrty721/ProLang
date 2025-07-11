import React, { memo, useCallback } from 'react';
import type { Language } from '../../utils/language';
import { getDifficultyClass } from '../../utils/card';

interface LanguageCardProps {
  language: Language;
  isSelected: boolean;
  onClick: () => void;
}

// Pre-compute static values outside component
const BASE_URL = import.meta.env.BASE_URL;
const createFallbackSrc = (name: string) => 
  `https://placehold.co/60x60/cccccc/ffffff?text=${encodeURIComponent(name.charAt(0))}`;

// Pre-compute class strings to avoid repeated concatenation
const CLASS_CACHE = new Map<string, string>();
const getCardClass = (isSelected: boolean, difficultyClass: string | null) => {
  const key = `${isSelected ? 1 : 0}-${difficultyClass || ''}`;
  if (!CLASS_CACHE.has(key)) {
    CLASS_CACHE.set(key, 'card' + 
      (isSelected ? ' active' : '') + 
      (difficultyClass ? ' ' + difficultyClass : ''));
  }
  return CLASS_CACHE.get(key)!;
};

const getLevelClass = (difficultyClass: string | null) => {
  const key = `level-${difficultyClass || ''}`;
  if (!CLASS_CACHE.has(key)) {
    CLASS_CACHE.set(key, 'lang-level level-animate' + 
      (difficultyClass ? ' ' + difficultyClass : ''));
  }
  return CLASS_CACHE.get(key)!;
};

const LanguageCard = memo(({ language, isSelected, onClick }: LanguageCardProps) => {
  // Inline computations - ลด useMemo overhead
  const logoSrc = BASE_URL + language.logo;
  const fallbackSrc = createFallbackSrc(language.name);
  const difficultyClass = getDifficultyClass(language.level);
  
  // Use cached class strings
  const cardClassName = getCardClass(isSelected, difficultyClass);
  const levelClassName = getLevelClass(difficultyClass);

  // Optimized description truncation
  const truncatedDesc = language.desc.length > 80 ? 
    language.desc.slice(0, 80) + '...' : 
    language.desc;

  // Ultra-light error handler with single assignment
  const handleImageError = useCallback((e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.src !== fallbackSrc) {
      img.onerror = null;
      img.src = fallbackSrc;
    }
  }, [fallbackSrc]);

  return (
    <div className={cardClassName} onClick={onClick}>
      <img
        src={logoSrc}
        alt={`${language.name} logo`}
        width={50}
        height={50}
        className="language-logo logo-animate"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        onError={handleImageError}
      />
      <div className="language-name">{language.name}</div>
      <div className="language-desc">{truncatedDesc}</div>
      <div className="language-meta">
        <div className="flex flex-wrap gap-2">
        {language.par.map(paradigm => (
            <span key={paradigm} className="tag text-xs bg-gray-50 rounded-xl p-2 shadow-sm">
              {paradigm}
            </span>
         ))}
        </div>
        <span className={levelClassName}>
          {difficultyClass}
        </span>
      </div>
    </div>
  );
});

LanguageCard.displayName = 'LanguageCard';

export default LanguageCard;