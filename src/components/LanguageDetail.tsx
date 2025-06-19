import React from 'react';
import type { Language } from '../utilities/language';
import { getDifficultyClass } from '../utilities/card';
import { CodeBlock } from './Codeblock';

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
  return text.includes('=') || text.includes('()') || text.includes('{}') || text.includes('//') || text.includes('#') || text.includes('<') || text.includes('function') || text.includes('var') || text.includes('let') || text.includes('const');
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
        <div key={key} className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
          <h4 className="text-lg font-bold text-gray-800 mb-3 capitalize bg-gradient-to-r from-indigo-50 to-blue-50 px-4 py-2 rounded-lg border-l-4 border-indigo-400">
            {key.replace('_', ' ')} :
          </h4>
          <div className="ml-2 space-y-2">
            {Array.isArray(value) ? value.map((item, i) => (
              <div key={i} className="code-block mb-2">
                {isCodeContent(item) ? (
                <CodeBlock key={key} content={item} typecontent="Variables" />
                ) : (
                  <div className="text-gray-700 bg-gray-50 p-2 rounded border-l-2 border-gray-300">
                    {item}
                  </div>
                )}
              </div>
            )) : (
              <div className="mb-2">
                {isCodeContent(value) ? (
                 <CodeBlock key={key} content={value} typecontent="Variables" />
                ) : (
                  <div className="text-gray-700 bg-gray-50 p-2 rounded border-l-2 border-gray-300">
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

    {/* Header */}
    <div className="flex items-center space-x-4 mb-8 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 p-6 rounded-xl">
      <div className="relative">
        <img
          src={import.meta.env.BASE_URL + language.logo}
          alt={`${language.name} logo`}
          className="logo-detail logo-animate w-16 h-16 object-contain"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = `https://placehold.co/64x64/cccccc/ffffff?text=${language.name.charAt(0)}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent to-white/20 rounded-xl"></div>
      </div>
      <div className="flex-1">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">ภาษา: {language.name}</h1>
        
      </div>
    </div>

    {/* Description */}
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border border-blue-200">
      <h2 className="Header text-xl font-bold text-gray-800 mb-3">🧾 รายละเอียด</h2>
          <p className="font-medium text-gray-800">
            👨‍💻 ผู้สร้าง: {language.by}
          </p> 
          <p className="font-medium text-gray-800">
            📆 ปี: {language.yr}
          </p>
          <p className={`px-4 py-2 rounded-full text-sm font-medium ${getDifficultyClass(language.level)}`}>
            🧱 ระดับของภาษาคอมพิวเตอร์: {getDifficultyClass(language.level)}
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">{language.desc}</p>
    </div>

    {/* Quick Info Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3 text-lg border-b border-gray-200 pb-2">📊 สถิติความนิยม</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">🏆 อันดับความนิยม: </span>
            <span className="font-bold text-blue-600">#{language.popularity_rank}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-500 text-sm">📈 ช่วงเงินเดือน: </span>
            <span className="font-medium text-green-600">{language.salary_range}</span>
          </div>
          {language.language_type && (
            <div className="flex items-center justify-between">
              <span className="text-gray-500 text-sm">ประเภท:</span>
              <span className="font-medium text-gray-800">{language.language_type}</span>
            </div>
          )}
        </div>
      </div>

        <span className={`lang-level ${getDifficultyClass(language.level)}`}>
            {getDifficultyClass(language.level)} {/* แสดงระดับความยาก */}
        </span>
      
    </div>

    {/* Programming Paradigms */}
    {language.par && language.par.length > 0 && (
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-800 mb-4 border-l-4 border-green-500 pl-4 bg-gradient-to-r from-green-50 to-transparent py-2">
        🧭 Programming Paradigms
        </h3>
            <div className="flex flex-wrap gap-3">
              {language.par.map((paradigm, index) => (
                <span key={index} className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:from-green-200 hover:to-emerald-200 transition-all duration-200 border border-green-200">
                  {paradigm}
                </span>
              ))}
            </div>
      </div>
    )}
  
    {/* Main Content Sections */}
    <div className="space-y-8">
      <h2 className="Header text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg">
      🧠 ข้อมูลทั่วไป
      </h2>
      
      {language.uses && language.uses.length > 0 && (
        <InfoSection title="การใช้งานหลัก" items={language.uses} color="text-blue-700" emoji='🚀' />
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
    <div className=" space-y-8 mt-12">
      <h2 className="Header text-3xl font-bold text-gray-900 mb-6 border-b-4 border-purple-500 pb-3 bg-gradient-to-r from-purple-50 to-pink-50 px-4 py-3 rounded-lg">
      🛠️ รายละเอียดทางเทคนิค
      </h2>
      
      {language.variables && (
        <DetailSection 
          title="ตัวแปร (Variables)" 
          type = "Variables"
          data={language.variables}
          titleColor="border-blue-500"
          bgColor="from-blue-50"
          emoji='🔤'
        />
      )}
      
      {language.functions && (
        <DetailSection 
          title="ฟังก์ชัน (Functions)" 
          type = "Functions"
          data={language.functions}
          titleColor="border-green-500"
          bgColor="from-green-50"
          emoji='🧮'
        />
      )}
      
      {language.syntax && (
        <DetailSection 
          title="ไวยากรณ์ (Syntax)" 
          type = "Syntax"
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