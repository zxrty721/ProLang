import React, { memo, useMemo } from 'react';
import type { Language } from '../utils/language.ts';
import { getDifficultyClass } from '../utils/card.ts';
import { CodeBlock } from './Codeblock.tsx';
import clsx from 'clsx';
import { fieldMap } from '../utils/card';

interface LanguageDetailProps {
  language: Language;
  onClose: () => void;
  titleColor?: string;
}

const InfoSection = memo(({ title, items, color, emoji, borderColor }: {
  title: string;
  items: string[];
  color: string;
  emoji: string;
  borderColor: string;
}) => (
  <div className="mb-6 bg-white p-6 rounded-lg shadow-md border border-gray-100">
    <h3 className={clsx(`text-2xl font-bold mb-4 ${color} border-l-4 pl-4 bg-gradient-to-r from-blue-50 to-transparent py-2`, borderColor)}>
      {emoji} {title}
    </h3>
    <ul className="space-y-2 text-gray-700">
      {items.map((item, i) => (
        <li key={i} className="flex items-start">
          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
));

const DetailSection = memo(({ title, type, data, titleColor, bgColor, emoji }: {
  title: string;
  type: string;
  data: any;
  titleColor: string;
  bgColor: string;
  emoji: string;
}) => (
  <div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100">
    <h3 className={clsx(`text-2xl font-bold mb-4 text-gray-800 border-l-4 pl-4 bg-gradient-to-r ${bgColor} to-transparent py-2`, titleColor)}>
      {emoji} {title}
    </h3>
    <div className="space-y-4">
      {Object.entries(data).filter(([key]) => !(key === 'async' && type === 'Functions')).map(([key, value]) => (
        <div key={key} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h4 className="text-lg font-semibold text-gray-800 mb-3 capitalize">
            {key.replace('_', ' ')} :
          </h4>
          <div className="ml-2 space-y-2">
            {Array.isArray(value) ? (
              value.map((item, i) => (
                <div key={i} className="mb-2">
                  <CodeBlock content={String(item)} typecontent={type} className="my-2" />
                </div>
              ))
            ) : (
              <div className="mb-2">
                <CodeBlock content={String(value)} typecontent={type} className="my-2" />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
));

const LanguageDetail = memo(({
  language,
  onClose,
  titleColor = 'text-gray-900'
}: LanguageDetailProps) => {
  const formattedYear = useMemo(() => {
    try {
      return new Intl.DateTimeFormat('th-TH', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }).format(new Date(language.yr));
    } catch {
      return language.yr;
    }
  }, [language.yr]);

  const logoSrc = useMemo(() => import.meta.env.BASE_URL + language.logo, [language.logo]);
  const difficultyClass = useMemo(() => getDifficultyClass(language.level), [language.level]);

  const infoSections = useMemo(() => [
    { condition: language.fields?.length, title: "การใช้งานหลัก", items: language.fields?.map(f => fieldMap[f] ?? f) || [], color: "text-sky-400", emoji: '🚀', borderColor: "border-sky-500" },
    { condition: language.pros?.length, title: "ข้อดี", items: language.pros || [], color: "text-green-700", emoji: '✅', borderColor: "border-green-500" },
    { condition: language.cons?.length, title: "ข้อเสีย", items: language.cons || [], color: "text-red-700", emoji: '⚠️', borderColor: "border-red-500" },
    { condition: language.frameworks?.length, title: "เฟรมเวิร์คและไลบรารี", items: language.frameworks || [], color: "text-purple-700", emoji: '🧩', borderColor: "border-purple-500" },
    { condition: language.learn?.length, title: "แหล่งเรียนรู้", items: language.learn || [], color: "text-indigo-700", emoji: '📚', borderColor: "border-indigo-500" }
  ].filter(s => s.condition), [language]);

  const technicalSections = useMemo(() => [
    { condition: language.variables, title: "ตัวแปร (Variables)", type: "Variables", data: language.variables, titleColor: "border-blue-500", bgColor: "from-blue-50", emoji: '🔤' },
    { condition: language.functions, title: "ฟังก์ชัน (Functions)", type: "Functions", data: language.functions, titleColor: "border-green-500", bgColor: "from-green-50", emoji: '🧮' },
    { condition: language.syntax, title: "ไวยากรณ์ (Syntax)", type: "Syntax", data: language.syntax, titleColor: "border-orange-500", bgColor: "from-orange-50", emoji: '✍️' },
    { condition: language.commands, title: "คำสั่ง (Commands)", type: "Commands", data: language.commands, titleColor: "border-purple-500", bgColor: "from-purple-50", emoji: '⚙️' }
  ].filter(s => s.condition), [language]);

  return (
    <div className="relative w-full h-full">
      <div className="language-modal-content max-h-screen overflow-y-auto px-4">
        <button
          className="modal-close-button group fixed top-4 right-4 z-[70]"
          onClick={onClose}
          type="button"
        >
          <span className="text-2xl transition-transform group-hover:rotate-90 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-gray-200 hover:bg-gray-50">
            &times;
          </span>
        </button>

        <div className="flex items-center space-x-4 mb-6">
            <img
              src={logoSrc}
              alt={`${language.name} logo`}
              width={24}
              height={24}
              className="language-logo logo-animate"
              loading="lazy"
              decoding="async"
            />
          <h1 className={clsx("text-4xl font-bold", titleColor)}>{language.name}</h1>
        </div>

        <div className="mb-6">
          <span className="section-title text-2xl font-bold mb-4">🧾 รายละเอียด</span>
          <p className="desc text-gray-700 leading-relaxed">{language.desc}</p>
        </div>

        <div className="info-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <div className="info-box bg-white p-4 rounded-lg font-bold border border-gray-200 shadow-sm">
            <span className="section-title block text-xl text-gray-600 mb-2">👨‍💻 ผู้สร้าง</span>
            <span className="text-lg font-medium text-gray-900">{language.by}</span>
          </div>
          <div className="info-box bg-white p-4 rounded-lg font-bold border border-gray-200 shadow-sm">
            <span className="section-title block text-xl text-gray-600 mb-2">📆 ปีที่เริ่มใช้</span>
            <span className="text-lg font-medium text-gray-900">{formattedYear}</span>
          </div>
          <div className="info-box bg-white p-4 rounded-lg font-bold border border-gray-200 shadow-sm">
            <span className="section-title block text-xl text-gray-600 mb-2">🌟 ระดับภาษา</span>
            <span className={`lang-level-detail ${difficultyClass} text-lg font-medium`}>{difficultyClass}</span>
          </div>
          <div className="info-box bg-white p-4 rounded-lg font-bold border border-gray-200 shadow-sm">
            <span className="section-title block text-xl text-gray-600 mb-2">🛠️ รูปแบบการเขียน</span>
            <div className="flex flex-wrap gap-2 mt-2">
              {language.par.map((p, i) => (
                <span key={i} className="tag bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{p}</span>
              ))}
            </div>
          </div>
        </div>

        {language.fields?.length > 0 && (
          <div className="section mb-8">
            <h2 className="section-title text-2xl font-bold mb-4">💼 ใช้ทำอะไรบ้าง</h2>
            <div className="badge-group flex flex-wrap gap-2">
              {language.fields.map((use, i) => (
                <span key={i} className="badge green bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  {fieldMap[use] ?? use}
                </span>
              ))}
            </div>
          </div>
        )}

        {language.rank && (
          <div className="section mb-8">
            <h2 className="section-title text-2xl font-bold mb-4">📊 ความนิยม</h2>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <span className="text-lg">อันดับความนิยม: <strong>#{language.rank}</strong></span>
            </div>
          </div>
        )}

        {infoSections.length > 0 && (
          <div className="space-y-8">
            <h2 className="Header text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg">
              🧠 ข้อมูลทั่วไป
            </h2>
            {infoSections.map((section, i) => (
              <InfoSection key={i} {...section} />
            ))}
          </div>
        )}

        {technicalSections.length > 0 && (
          <div className="space-y-8">
            <h2 className="Header text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg">
              🛠️ รายละเอียดทางเทคนิค
            </h2>
            {technicalSections.map((section, i) => (
              <DetailSection key={i} {...section} />
            ))}
          </div>
        )}

        <div className="h-8"></div>
      </div>
    </div>
  );
});

LanguageDetail.displayName = 'LanguageDetail';
InfoSection.displayName = 'InfoSection';
DetailSection.displayName = 'DetailSection';

export default LanguageDetail;
