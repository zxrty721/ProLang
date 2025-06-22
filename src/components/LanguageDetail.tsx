import React, { memo, useMemo, useCallback } from 'react';
import type { Language } from '../utils/language.ts';
import { getDifficultyClass } from '../utils/card.ts';
import { CodeBlock } from './Codeblock.tsx';
import clsx from 'clsx';

// Interface สำหรับ props ของ LanguageDetail
interface LanguageDetailProps {
  language: Language;
  onClose: () => void;
  titleColor?: string;
}

// ย้าย component ออกมาข้างนอกเพื่อหลีกเลี่ยงการสร้างใหม่ทุกครั้ง
const InfoSection = memo(({ 
  title, 
  items, 
  color = "text-gray-800", 
  emoji, 
  borderColor = "border-blue-500" 
}: { 
  title: string; 
  items: string[]; 
  color?: string; 
  emoji: string; 
  borderColor?: string;
}) => {
  // ใช้ useMemo สำหรับ className ที่ซับซ้อน
  const headerClassName = useMemo(() => 
    clsx(`text-2xl font-bold mb-4 ${color} border-l-4 pl-4 bg-gradient-to-r from-blue-50 to-transparent py-2`, borderColor),
    [color, borderColor]
  );

  return (
    <div className="mb-6 bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className={headerClassName}>
        {emoji} {title}
      </h3>
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
});

InfoSection.displayName = 'InfoSection';

const DetailSection = memo(({ 
  title, 
  type, 
  data, 
  titleColor = "border-purple-500", 
  bgColor = "from-purple-50", 
  emoji 
}: {
  title: string;
  type: string;
  data: any;
  titleColor?: string;
  bgColor?: string;
  emoji: string;
}) => {
  // ใช้ useMemo สำหรับ className และการประมวลผล data
  const headerClassName = useMemo(() => 
    clsx(`text-2xl font-bold mb-4 text-gray-800 border-l-4 pl-4 bg-gradient-to-r ${bgColor} to-transparent py-2`, titleColor),
    [bgColor, titleColor]
  );

  const filteredEntries = useMemo(() => 
    Object.entries(data).filter(([key]) => !(key === 'async' && type === 'Functions')),
    [data, type]
  );

  return (
    <div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100">
      <h3 className={headerClassName}>
        {emoji} {title}
      </h3>
      <div className="space-y-4">
        {filteredEntries.map(([key, value]: [string, any]) => {
          const displayKey = key.replace('_', ' ');
          
          if (Array.isArray(value)) {
            return (
              <div key={key} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-800 mb-3 capitalize">
                  {displayKey} :
                </h4>
                <div className="ml-2 space-y-2">
                  {value.map((item, i) => (
                    <div key={i} className="mb-2">
                      <CodeBlock
                        content={item}
                        typecontent={type}
                        className="my-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          return (
            <div key={key} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-3 capitalize">
                {displayKey} :
              </h4>
              <div className="mb-2 ml-2">
                <CodeBlock
                  content={value}
                  typecontent={type}
                  className="my-2"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
});

DetailSection.displayName = 'DetailSection';

// Main component
const LanguageDetail = memo(({ 
  language, 
  onClose, 
  titleColor = 'text-gray-900' 
}: LanguageDetailProps) => {
  // ใช้ useCallback สำหรับ event handlers
  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  // ใช้ useMemo สำหรับการคำนวณที่ซับซ้อน
  const formattedYear = useMemo(() => {
    try {
      const date = new Date(language.yr);
      return new Intl.DateTimeFormat('th-TH', { 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric' 
      }).format(date);
    } catch (e) {
      console.error("Error formatting date:", e);
      return language.yr;
    }
  }, [language.yr]);

  const logoSrc = useMemo(() => 
    import.meta.env.BASE_URL + language.logo, 
    [language.logo]
  );

  const titleClassName = useMemo(() => 
    clsx("text-4xl font-bold", titleColor), 
    [titleColor]
  );

  const difficultyClass = useMemo(() => 
    getDifficultyClass(language.level), 
    [language.level]
  );

  // แยก sections ที่มีข้อมูลเท่านั้น - optimized with type-safe filtering
  const infoSections = useMemo(() => {
    type InfoSectionConfig = {
      title: string;
      items: string[];
      color: string;
      emoji: string;
      borderColor: string;
    };

    const sectionConfigs: Array<{
      condition: boolean;
      config: InfoSectionConfig;
    }> = [
      {
        condition: Boolean(language.fields?.length),
        config: {
          title: "การใช้งานหลัก",
          items: language.fields || [],
          color: "text-sky-400",
          emoji: '🚀',
          borderColor: "border-sky-500"
        }
      },
      {
        condition: Boolean(language.pros?.length),
        config: {
          title: "ข้อดี",
          items: language.pros || [],
          color: "text-green-700",
          emoji: '✅',
          borderColor: "border-green-500"
        }
      },
      {
        condition: Boolean(language.cons?.length),
        config: {
          title: "ข้อเสีย",
          items: language.cons || [],
          color: "text-red-700",
          emoji: '⚠️',
          borderColor: "border-red-500"
        }
      },
      {
        condition: Boolean(language.frameworks?.length),
        config: {
          title: "เฟรมเวิร์คและไลบรารี",
          items: language.frameworks || [],
          color: "text-purple-700",
          emoji: '🧩',
          borderColor: "border-purple-500"
        }
      },
      {
        condition: Boolean(language.learn?.length),
        config: {
          title: "แหล่งเรียนรู้",
          items: language.learn || [],
          color: "text-indigo-700",
          emoji: '📚',
          borderColor: "border-indigo-500"
        }
      }
    ];

    return sectionConfigs
      .filter(({ condition }) => condition)
      .map(({ config }) => config);
  }, [language]);

  const technicalSections = useMemo(() => {
    type TechnicalSectionConfig = {
      title: string;
      type: string;
      data: any;
      titleColor: string;
      bgColor: string;  
      emoji: string;
    };

    const sectionConfigs: Array<{
      condition: boolean;
      config: TechnicalSectionConfig;
    }> = [
      {
        condition: Boolean(language.variables),
        config: {
          title: "ตัวแปร (Variables)",
          type: "Variables",
          data: language.variables,
          titleColor: "border-blue-500",
          bgColor: "from-blue-50",
          emoji: '🔤'
        }
      },
      {
        condition: Boolean(language.functions),
        config: {
          title: "ฟังก์ชัน (Functions)",
          type: "Functions", 
          data: language.functions,
          titleColor: "border-green-500",
          bgColor: "from-green-50",
          emoji: '🧮'
        }
      },
      {
        condition: Boolean(language.syntax),
        config: {
          title: "ไวยากรณ์ (Syntax)",
          type: "Syntax",
          data: language.syntax,
          titleColor: "border-orange-500",
          bgColor: "from-orange-50",
          emoji: '✍️'
        }
      },
      {
        condition: Boolean(language.commands),
        config: {
          title: "คำสั่ง (Commands)",
          type: "Commands",
          data: language.commands,
          titleColor: "border-purple-500",
          bgColor: "from-purple-50",
          emoji: '⚙️'
        }
      }
    ];

    return sectionConfigs
      .filter(({ condition }) => condition)
      .map(({ config }) => config);
  }, [language]);

  return (
    <div className="language-modal-content max-h-screen overflow-y-auto">
      <button 
        className="modal-close-button group sticky top-4 right-4 z-10 float-right" 
        onClick={handleClose}
        type="button"
        aria-label="ปิด"
      >
        <span className="text-2xl transition-transform group-hover:rotate-90 bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg">
          &times;
        </span>
      </button>

      {/* โลโก้ + ชื่อภาษา */}
      <div className="flex items-center space-x-4 mb-6">
        <img
          src={logoSrc}
          alt={`${language.name} logo`}
          className="language-detail-logo logo-animate"
          loading="lazy"
          decoding="async"
        />
        <h1 className={titleClassName}>{language.name}</h1>
      </div>

      {/* รายละเอียด */}
      <div className="mb-6">
        <span className="section-title text-2xl font-bold mb-4">🧾 รายละเอียด</span>
        <p className="desc text-gray-700 leading-relaxed">{language.desc}</p>
      </div>

      {/* ข้อมูลทั่วไป */}
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
          <span className={`lang-level-detail ${difficultyClass} text-lg font-medium`}>
            {difficultyClass}
          </span>
        </div>
        <div className="info-box bg-white p-4 rounded-lg font-bold border border-gray-200 shadow-sm">
          <span className="section-title block text-xl text-gray-600 mb-2">🛠️ รูปแบบการเขียน</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {language.par.map((p: string, i: number) => (
              <span key={i} className="tag bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ใช้ทำอะไรบ้าง */}
      {language.fields?.length > 0 && (
        <div className="section mb-8">
          <h2 className="section-title text-2xl font-bold mb-4">💼 ใช้ทำอะไรบ้าง</h2>
          <div className="badge-group flex flex-wrap gap-2">
            {language.fields.map((use, idx) => (
              <span key={idx} className="badge green bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {use}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Additional Information */}
      {language.rank && (
        <div className="section mb-8">
          <h2 className="section-title text-2xl font-bold mb-4">📊 ความนิยม</h2>
          <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
            <span className="text-lg">อันดับความนิยม: <strong>#{language.rank}</strong></span>
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
      {infoSections.length > 0 && (
        <div className="space-y-8">
          <h2 className="Header text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg">
            🧠 ข้อมูลทั่วไป
          </h2>
          {infoSections.map((section, index) => (
            <InfoSection
              key={index}
              title={section.title}
              items={section.items}
              color={section.color}
              emoji={section.emoji}
              borderColor={section.borderColor}
            />
          ))}
        </div>
      )}

      {/* Technical Details */}
      {technicalSections.length > 0 && (
        <div className="space-y-8">
          <h2 className="Header text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg">
            🛠️ รายละเอียดทางเทคนิค
          </h2>
          {technicalSections.map((section, index) => (
            <DetailSection
              key={index}
              title={section.title}
              type={section.type}
              data={section.data}
              titleColor={section.titleColor}
              bgColor={section.bgColor}
              emoji={section.emoji}
            />
          ))}
        </div>
      )}

      {/* Footer spacing */}
      <div className="h-8"></div>
    </div>
  );
});

LanguageDetail.displayName = 'LanguageDetail';

export default LanguageDetail;