import React, { memo, useMemo, useCallback } from 'react';
import { CodeBlock } from './Codeblock.tsx';
import clsx from 'clsx';

import { fieldMap } from '../../utils/card';
import type { Language } from '../../utils/language.ts';
import { getDifficultyClass, getDescLevel } from '../../utils/card.ts';

import { getCountryname, getCountryflag, getOrganization, getCommunity, getParadigms, getWorksExamples, getRealWorldExamples, getFoundedYear} from '../../utils/languageCountries.ts';


interface LanguageDetailProps {
    language: Language;
    onClose: () => void;
    titleColor?: string;
}

// Pre-computed constants
const BASE_URL = import.meta.env.BASE_URL;
const FORMATTER = new Intl.DateTimeFormat('th-TH', { day: 'numeric', month: 'long', year: 'numeric' });

// Memoized sub-components with static props
const InfoSection = memo(({ title, items, color, emoji, borderColor }: {
    title: string; items: string[]; color: string; emoji: string; borderColor: string;
}) => (
    <div className="mb-6 bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <h3 className={clsx(`text-2xl font-bold mb-4 ${color} border-l-4 pl-4 bg-gradient-to-r from-blue-50 to-transparent py-2`, borderColor)}>
            {emoji} {title}
        </h3>
        <ul className="space-y-2 text-gray-700">
            {items.map((item, i) => (
                <li key={i} className="detail flex items-start">
                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span className="leading-relaxed">{item}</span>
                </li>
            ))}
        </ul>
    </div>
));

const DetailSection = memo(({ title, data, titleColor, bgColor, emoji }: {
    title: string; data: any; titleColor: string; bgColor: string; emoji: string;
}) => {
    // Memoize filtered entries to avoid recomputation
    const filteredEntries = useMemo(() => 
        Object.entries(data).filter(([k]) => k !== 'async'), 
        [data]
    );

    return (
        <div className="mb-8 bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
            <h3 className={clsx(`text-2xl font-bold mb-4 text-gray-800 border-l-4 pl-4 bg-gradient-to-r ${bgColor} to-transparent py-2`, titleColor)}>
                {emoji} {title}
            </h3>
            <div className="space-y-4">
                {filteredEntries.map(([key, value]) => (
                    <div key={key} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <div className="inline-flex items-center mb-3">
                            <span className="w-2.5 h-2.5 rounded-full flex-shrink-0 align-middle bg-blue-300"></span>
                            <h4 className="text-lg font-semibold text-gray-800 capitalize ml-1">
                                {key.replace('_', ' ')} :
                            </h4>
                        </div>
                        <div className="ml-2 space-y-2">
                            {Array.isArray(value) ?
                                value.map((item, i) => <div key={i} className="mb-2"><CodeBlock content={String(item)} className="y-2" /></div>) :
                                <div className="mb-2"><CodeBlock content={String(value)} className="my-2" /></div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

const LanguageDetail = memo(({ language, onClose, titleColor = 'text-gray-900' }: LanguageDetailProps) => {
    // Memoize expensive computations
    const formattedYear = useMemo(() => {
        try {
            return FORMATTER.format(new Date(getFoundedYear(language.slug)));
        } catch { return getFoundedYear(language.slug); }
    }, [getFoundedYear(language.slug)]);

    const logoSrc = useMemo(() => BASE_URL + 'images/' + language.logo, [language.logo]);
    const difficultyClass = useMemo(() => getDifficultyClass(language.level), [language.level]);
    const fieldlevelDesc = useMemo(() => getDescLevel(language.level), [language.level]);
    
    // Memoize section arrays with early returns for better performance
    const infoSections = useMemo(() => {
        const sections = [];
        
        if (language.fields?.length) {
            sections.push({ 
                title: "การใช้งานหลัก", 
                items: getRealWorldExamples(language.slug), 
                color: "text-sky-400", 
                emoji: '🚀', 
                borderColor: "border-sky-500" 
            });
        }
        
        if (language.pros?.length) {
            sections.push({ 
                title: "ข้อดี", 
                items: language.pros, 
                color: "text-green-700", 
                emoji: '✅', 
                borderColor: "border-green-500" 
            });
        }
        
        if (language.cons?.length) {
            sections.push({ 
                title: "ข้อเสีย", 
                items: language.cons, 
                color: "text-red-700", 
                emoji: '⚠️', 
                borderColor: "border-red-500" 
            });
        }
        
        if (language.frameworks?.length) {
            sections.push({ 
                title: "เฟรมเวิร์คและไลบรารี", 
                items: language.frameworks, 
                color: "text-purple-700", 
                emoji: '🧩', 
                borderColor: "border-purple-500" 
            });
        }
        
        if (language.learn?.length) {
            sections.push({ 
                title: "แหล่งเรียนรู้", 
                items: language.learn, 
                color: "text-indigo-700", 
                emoji: '📚', 
                borderColor: "border-indigo-500" 
            });
        }
        
        return sections;
    }, [language.fields, language.pros, language.cons, language.frameworks, language.learn]);

    const technicalSections = useMemo(() => {
        const sections = [];
        
        if (language.variables) {
            sections.push({ 
                title: "ตัวแปร (Variables)", 
                data: language.variables, 
                titleColor: "border-blue-500", 
                bgColor: "from-blue-50", 
                emoji: '🔤' 
            });
        }
        
        if (language.functions) {
            sections.push({ 
                title: "ฟังก์ชัน (Functions)", 
                data: language.functions, 
                titleColor: "border-green-500", 
                bgColor: "from-green-50", 
                emoji: '🧮' 
            });
        }
        
        if (language.syntax) {
            sections.push({ 
                title: "ไวยากรณ์ (Syntax)", 
                data: language.syntax, 
                titleColor: "border-orange-500", 
                bgColor: "from-orange-50", 
                emoji: '✍️' 
            });
        }
        
        if (language.commands) {
            sections.push({ 
                title: "คำสั่ง (Commands)", 
                data: language.commands, 
                titleColor: "border-purple-500", 
                bgColor: "from-purple-50", 
                emoji: '⚙️' 
            });
        }
        
        return sections;
    }, [language.variables, language.functions, language.syntax, language.commands]);

    // Memoize mapped fields for better performance
    const mappedFields = useMemo(() => 
        language.fields?.map(use => fieldMap[use] ?? use) || [], 
        [language.fields]
    );

    const handleClose = useCallback(() => onClose(), [onClose]);

    const countryName = getCountryname(language.slug);
    const flagImageUrl = getCountryflag(language.slug);
    
    return (
        <div className="relative w-full h-full">
            <div className="language-modal-content relative max-h-screen overflow-y-auto px-4">
                <div className="sticky top-0 z-[70] -mt-10 pt-1 pr-2 flex justify-end pointer-events-none">
                    <button className="cursor-pointer modal-close-button group pointer-events-auto" onClick={handleClose} type="button" aria-label="ปิดหน้าต่าง">
                        <span className="text-2xl transition-transform duration-200 group-hover:rotate-90 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-gray-200 hover:bg-gray-50">
                            &times;
                        </span>
                    </button>
                </div>

                <div className="logo flex items-center space-x-4 mb-6">
                    <img src={logoSrc} alt={`${language.name} logo`} width={70} height={70} className="language-logo" loading="lazy" fetchPriority="low" decoding="async" />
                    <h1 className={clsx("text-4xl font-bold", titleColor)}>{language.name}</h1>
                </div>

                <div className="mb-6">
                    <span className="section-title text-2xl font-bold mb-4">🧾 รายละเอียด</span>
                    <p className="desc text-gray-700 leading-relaxed">{language.desc}</p>
                </div>

                <div className="info-grid grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="Client info-box bg-white p-4 rounded-lg font-bold border border-gray-200 shadow-sm">
                        <span className="section-title block text-xl text-gray-600 mb-2">👨‍💻 ผู้สร้าง</span>
                        <span className="font-medium text-gray-900">{language.by}</span>
                    </div>
                    <div className="Client info-box bg-white p-4 rounded-lg font-bold border border-gray-200 shadow-sm">
                        <span className="section-title block text-xl text-gray-600 mb-2">📆 ปีที่เริ่มใช้</span>
                        <span className="font-medium text-gray-900">{formattedYear}</span>
                    </div>
                    <div className="Client info-box bg-white p-4 rounded-lg font-bold border border-gray-200 shadow-sm">
                        <span className="section-title block text-xl text-gray-600 mb-2">🌍 ประเทศที่สร้าง</span>
                        <span className="font-medium text-gray-900 flex items-center">
                            {countryName}
                            {flagImageUrl && (
                                <img src={flagImageUrl} alt={`${countryName} Flag`} className="w-7 h-7 ml-2 rounded-sm" loading="lazy" decoding="async" fetchPriority="low"/>
                            )}
                        </span>
                    </div>
                    <div className="Client info-box bg-white p-4 rounded-lg font-bold border border-gray-200 shadow-sm">
                        <span className="section-title block text-xl text-gray-600 mb-2">🏢 องค์กร</span>
                        <span className=" font-medium text-gray-900">{getOrganization(language.slug)}</span>
                    </div>
                    <div className="Client info-box bg-white p-4 rounded-lg font-bold border border-gray-200 shadow-sm">
                        <span className="section-title block text-xl text-gray-600 mb-2">⭐ ระดับความยาก</span>
                        <span className={`lang-level-detail ${difficultyClass} font-medium block mb-2`}>
                        </span>
                        {fieldlevelDesc}
                    </div>
                    <div className="Client info-box bg-white p-4 rounded-lg font-bold border border-gray-200 shadow-sm">
                        <span className="section-title block text-xl text-gray-600 mb-2">🛠️ รูปแบบการเขียน</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                            {getParadigms(language.slug).map((p, i) => (
                                <span key={i} className="tag bg-blue-200 text-blue-500 px-2 py-1 rounded text-sm">{p}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="section mb-8">
                    <h2 className="section-title text-2xl font-bold mb-4">💡 ผลงาน :</h2>
                    <div className="badge-group flex flex-wrap gap-2">
                        {getWorksExamples(language.slug).map((p, i) => (
                            <span key={i} className="Client badge tag bg-yellow-300 text-yellow-800 px-2 py-1 rounded-full text-sm">{p}</span>
                        ))}
                    </div>
               </div>

                <div className="section mb-8">
                    <h2 className="section-title text-2xl font-bold mb-4">🤝 ชุมชน :</h2>
                    <div className="badge-group flex flex-wrap gap-2">
                        {getCommunity(language.slug).map((item, index) => (
                            <span  key={index}
                            className="Client badge green bg-purple-200 text-perple-500 px-3 py-1 rounded-full text-sm font-medium">
                            {item}
                            </span>
                        ))}
                    </div>
               </div>

                {mappedFields.length > 0 && (
                    <div className="section mb-8">
                        <h2 className="section-title text-2xl font-bold mb-4">💼 ใช้ทำอะไรบ้าง :</h2>
                        <div className="badge-group flex flex-wrap gap-2">
                            {mappedFields.map((use, i) => (
                                <span key={i} className="Client badge green bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                    {use}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {language.rank && (
                    <div className="section mb-8">
                        <h2 className="section-title text-2xl font-bold mb-4">📊 ความนิยม :</h2>
                        <div className="Clientbg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                            <span className="text-lg">
                                อันดับความนิยม: <strong className="text-yellow-600">#{language.rank}</strong>
                            </span>
                        </div>
                    </div>
                )}

                {infoSections.length > 0 && (
                    <div className="space-y-8">
                        <h2 className="Header text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg">
                            🧠 ข้อมูลทั่วไป
                        </h2>
                        {infoSections.map((section, i) => <InfoSection key={i} {...section} />)}
                    </div>
                )}

                {technicalSections.length > 0 && (
                    <div className="space-y-8">
                        <h2 className="Header text-3xl font-bold text-gray-900 mb-6 border-b-4 border-blue-500 pb-3 bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-3 rounded-lg">
                            🛠️ รายละเอียดทางเทคนิค
                        </h2>
                        {technicalSections.map((section, i) => <DetailSection key={i} {...section} />)}
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