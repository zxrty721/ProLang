import React from 'react';
import type { Language } from '../utilities/language';
import { getDifficultyClass } from '../utilities/card';
import { CodeBlock } from './Codeblock.tsx';

export default function LanguageDetail({ language, onClose }: { language: Language; onClose: () => void }) {
const InfoSection = ({ title, items, color = "text-gray-800", emoji }: { title: string; items: string[]; color?: string; emoji: string }) => (
  <div className="mb-6">
    <h3 className={`text-2xl font-bold mb-4 ${color} border-l-4 border-blue-500 pl-4 bg-gradient-to-r from-blue-50 to-transparent py-2`}>{emoji} {title}</h3>
    <ul className="space-y-2 text-gray-700">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const isCodeContent = (text: string) => {
  return text.includes('=') || text.includes('()') || text.includes('{}') || text.includes('//') || text.includes('#') || text.includes('<') || text.includes('function') || text.includes('var') || text.includes('let') || text.includes('const') || text.includes(';') || text.includes('def ') || text.includes('class ') || text.includes('import ') || text.includes('for ') || text.includes('if ') || text.includes('while ');
};

const DetailSection = ({ title, type, data, titleColor = "border-purple-500", bgColor = "from-purple-50", emoji }: { 
  title: string; 
  type: string;
  data: any; 
  titleColor?: string;
  bgColor?: string;
  emoji: string;
}) => (
  <div className="mb-8">
    <h3 className={`text-2xl font-bold mb-4 text-gray-800 border-l-4 ${titleColor} pl-4 bg-gradient-to-r ${bgColor} to-transparent py-2`}>
      {emoji} {title}
    </h3>
    <div className="space-y-4">
      {Object.entries(data).map(([key, value]: [string, any]) => (
        <div key={key} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <h4 className="text-lg font-semibold text-gray-800 mb-3 capitalize">
            {key.replace('_', ' ')} :
          </h4>
          <div className="ml-2 space-y-2">
            {Array.isArray(value) ? value.map((item, i) => (
              <div key={i} className="mb-2">
                {isCodeContent(item) ? (
                  <CodeBlock 
                    key={`${key}-${i}`} 
                    content={item} 
                    typecontent={type}
                  />
                ) : (
                  <div className="text-gray-700 bg-gray-50 p-3 rounded border-l-4 border-gray-300 hover:border-blue-400 transition-colors">
                    {item}
                  </div>
                )}
              </div>
            )) : (
              <div className="mb-2">
                {isCodeContent(value) ? (
                  <CodeBlock 
                    key={key} 
                    content={value} 
                    typecontent={type}
                  />
                ) : (
                  <div className="text-gray-700 bg-gray-50 p-3 rounded border-l-4 border-gray-300 hover:border-blue-400 transition-colors">
                    {value}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
);

return (
  <div className="language-detail max-h-screen overflow-y-auto">
    <button className="modal-close-button group sticky top-4 right-4 z-10 float-right" onClick={onClose}>
      <span className="text-2xl transition-transform group-hover:rotate-90 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">&times;</span>
    </button>

    {/* โลโก้ + ชื่อภาษา */}
    <div className="flex items-center space-x-4 mb-6">
      <img
        src={import.meta.env.BASE_URL + language.logo}
        alt={`${language.name} logo`}
        className="language-detail-logo logo-animate"
      />
      <h1 className="text-4xl font-bold text-gray-900">{language.name}</h1>
    </div>

    {/* รายละเอียด */}
    <div className="mb-6">
      <h3 className="section-title">🧾 รายละเอียด</h3>
      <p className="desc text-gray-700 leading-relaxed">{language.desc}</p>
    </div>

    {/* ข้อมูลทั่วไป */}
    <div className="info-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div className="info-box bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <span className="section-title block text-sm text-gray-600 mb-1">👨‍💻 ผู้สร้าง</span>
        <span className="text-lg font-medium text-gray-900">{language.by}</span>
      </div>
      <div className="info-box bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <span className="section-title block text-sm text-gray-600 mb-1">📆 ปีที่เริ่มใช้</span>
        <span className="text-lg font-medium text-gray-900">{language.yr}</span>
      </div>
      <div className="info-box bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <span className="section-title block text-sm text-gray-600 mb-1">🌟 ระดับภาษา</span>
        <span className={`lang-level-detail ${getDifficultyClass(language.level)} text-lg font-medium`}>
          {getDifficultyClass(language.level)}
        </span>
      </div>
      <div className="info-box bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
        <span className="section-title block text-sm text-gray-600 mb-1">🛠️ รูปแบบการเขียน</span>
        <div className="flex flex-wrap gap-2 mt-2">
          {language.par.map((p: string, i: number) => (
            <span key={i} className="tag bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{p}</span>
          ))}
        </div>
      </div>
    </div>

    {/* ใช้ทำอะไรบ้าง */}
    {language.fields && language.fields.length > 0 && (
      <div className="section mb-8">
        <h2 className="section-title text-2xl font-bold mb-4">💼 ใช้ทำอะไรบ้าง</h2>
        <div className="badge-group flex flex-wrap gap-2">
          {language.fields.map((use, idx) => (
            <span key={idx} className="badge green bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">{use}</span>
          ))}
        </div>
      </div>
    )}

    {/* Additional Information */}
    {language.popularity_rank && (
      <div className="section mb-8">
        <h2 className="section-title text-2xl font-bold mb-4">📊 ความนิยม</h2>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-lg">อันดับความนิยม: <strong>#{language.popularity_rank}</strong></span>
        </div>
      </div>
    )}

    {language.salary_range && (
      <div className="section mb-8">
        <h2 className="section-title text-2xl font-bold mb-4">💰 ช่วงเงินเดือน</h2>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <span className="text-lg">{language.salary_range}</span>
        </div>
      </div>
    )}
  
    {/* Main Content Sections */}
    <div className="space-y-8">
      <h2 className="Header text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg">
        🧠 ข้อมูลทั่วไป
      </h2>
      
      {language.fields && language.fields.length > 0 && (
        <InfoSection title="การใช้งานหลัก" items={language.fields} color="text-blue-700" emoji='🚀' />
      )}
      
      {language.pros && language.pros.length > 0 && (
        <InfoSection title="ข้อดี" items={language.pros} color="text-green-700" emoji='✅' />
      )}
      
      {language.cons && language.cons.length > 0 && (
        <InfoSection title="ข้อเสีย" items={language.cons} color="text-red-700" emoji='⚠️' />
      )}
      
      {language.frameworks && language.frameworks.length > 0 && (
        <InfoSection title="เฟรมเวิร์คและไลบรารี" items={language.frameworks} color="text-purple-700" emoji='🧩' />
      )}
      
      {language.learning_resources && language.learning_resources.length > 0 && (
        <InfoSection title="แหล่งเรียนรู้" items={language.learning_resources} color="text-indigo-700" emoji='📚' />
      )}
    </div>

    {/* Technical Details */}
    <div className="space-y-8">
      <h2 className="Header text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg">
        🛠️ รายละเอียดทางเทคนิค
      </h2>
      
      {language.variables && (
        <DetailSection 
          title="ตัวแปร (Variables)" 
          type="Variables"
          data={language.variables}
          titleColor="border-blue-500"
          bgColor="from-blue-50"
          emoji='🔤'
        />
      )}
      
      {language.functions && (
        <DetailSection 
          title="ฟังก์ชัน (Functions)" 
          type="Functions"
          data={language.functions}
          titleColor="border-green-500"
          bgColor="from-green-50"
          emoji='🧮'
        />
      )}
      
      {language.syntax && (
        <DetailSection 
          title="ไวยากรณ์ (Syntax)" 
          type="Syntax"
          data={language.syntax}
          titleColor="border-orange-500"
          bgColor="from-orange-50"
          emoji='✍️'
        />
      )}
    </div>

    {/* Footer spacing */}
    <div className="h-8"></div>
  </div>
);
}