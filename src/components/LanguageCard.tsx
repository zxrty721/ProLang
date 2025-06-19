import React from 'react';
import type { Language } from '../utilities/language'; // อ้างอิงจากตำแหน่งไฟล์ src/components ไป src/types
import { getDifficultyClass } from '../utilities/card'; // นำเข้าฟังก์ชัน getDifficultyClass

export default function LanguageCard({
  language,
  isSelected,
  onClick
}: {
  language: Language;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <div className={`card ${isSelected ? 'active' : ''}`} onClick={onClick}>
      {/* ใช้ language.logo สำหรับ src ของรูปภาพ และเพิ่ม onError สำหรับ fallback */}
      <img
        src={language.logo}
        alt={`${language.name} logo`}
        className="language-logo logo-animate"
        onError={(e) => {
          e.currentTarget.onerror = null; // ป้องกัน infinite loop หากภาพเสีย
          // ใช้ placeholder image ที่เหมาะสมสำหรับเด็กและไม่มีเนื้อหาไม่เหมาะสม
          e.currentTarget.src = `https://placehold.co/60x60/cccccc/ffffff?text=${language.name.charAt(0)}`; // Placeholder image
        }}
      />
      <div className="language-name">{language.name}</div>
      <div className="language-desc">{language.desc.substring(0, 80)}...</div> {/* ใช้ .desc */}
      <div className="language-meta">
        <div className="flex flex-wrap gap-2">
          {/* ใช้ .par */}
          {language.par.map((paradigm, i) => (
            <span key={i} className="paradigm">{paradigm}</span>
          ))}
        </div>
        {/* ใช้ .level และ getDifficultyClass(language.level) */}
        <span className={`lang-level ${getDifficultyClass(language.level)}`}>
          {getDifficultyClass(language.level)} {/* แสดงระดับความยาก */}
        </span>
      </div>
    </div>
  );
}
