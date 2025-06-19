import React, { useState, useEffect } from 'react';
import LanguageCard from './LanguageCard'; // นำเข้า LanguageCard
import LanguageDetail from './LanguageDetail'; // นำเข้า LanguageDetail
import type { Language } from '../utilities/language'; // นำเข้าประเภท Language

export default function InteractiveCardSection({ languages }: { languages: Language[] }) {
  // selectedLanguage จะเก็บข้อมูลภาษาที่ถูกเลือกสำหรับ Modal
  const [selectedLanguage, setSelectedLanguage] = useState<Language | null>(null);

  // ฟังก์ชันสำหรับเปิด Modal
  const openLanguageModal = (lang: Language) => {
    setSelectedLanguage(lang);
    document.body.style.overflow = 'hidden'; // ป้องกันการ scroll ของ body เมื่อ modal เปิด
  };

  // ฟังก์ชันสำหรับปิด Modal
  const closeModal = () => {
    setSelectedLanguage(null);
    document.body.style.overflow = 'auto'; // คืนค่าการ scroll ของ body
  };

  return (
    <div className="container flex flex-col md:flex-row p-4 md:p-8 space-y-4 md:space-y-0 md:space-x-8 min-h-screen font-inter">
      {/* ส่วนของการ์ดภาษา (sidebar) */}
      <section className="sidebar w-full md:w-1/3 p-4 bg-gray-100 rounded-lg shadow-md overflow-y-auto max-h-[90vh]">
        {/* ลบคำว่า "เลือกภาษา" ออกจากหัวข้อ */}
        {languages && languages.length > 0 ? (
          languages.map(lang => (
            <LanguageCard
              key={lang.id}
              language={lang}
              isSelected={selectedLanguage?.id === lang.id} // เช็คว่าเป็นการ์ดที่ถูกเลือกอยู่ใน Modal หรือไม่
              onClick={() => openLanguageModal(lang)} // คลิกแล้วเปิด Modal
            />
          ))
        ) : (
          <p className="text-gray-500">ไม่พบข้อมูลภาษา</p>
        )}
      </section>

      {/* ส่วนของรายละเอียดภาษา (content) - ในกรณีนี้คือพื้นที่หลักของหน้า ไม่ใช่ Modal */}
      {/* ส่วนนี้จะว่างเปล่าเมื่อ LanguageDetail แสดงเป็น Modal */}
      <div className="content w-full md:w-2/3 p-4 bg-white rounded-lg shadow-md flex items-center justify-center">
        {!selectedLanguage && ( // แสดงข้อความเมื่อยังไม่มี Modal เปิดอยู่
          <div className="text-gray-500 text-lg p-4">
            แตะการ์ดเพื่อดูรายละเอียด
          </div>
        )}
      </div>

      {/* Modal Overlay และ LanguageDetail */}
      {/* จะแสดงก็ต่อเมื่อ selectedLanguage มีค่า (มีการเลือกการ์ด) */}
      {selectedLanguage && (
        // Overlay นี้จะคลุมทั้งหน้าจอ
        <div
          className="language-modal-overlay"
          onClick={(e) => {
            // ปิด Modal เมื่อคลิกที่พื้นหลัง Overlay เท่านั้น ไม่ใช่คลิกภายใน Modal Content
            if (e.target === e.currentTarget) {
              closeModal();
            }
          }}
        >
          <LanguageDetail language={selectedLanguage} onClose={closeModal} />
        </div>
      )}
    </div>
  );
}
