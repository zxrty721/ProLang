// src/components/Codeblock.tsx

import * as React from 'react';
// เปลี่ยนจาก Light (Highlight.js) มาใช้ Prism
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'; 
// นำเข้า style สำหรับ Prism.js (เลือก atomDark ที่คล้าย atomOneDark)
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'; 

// หากคุณต้องการรองรับภาษาอื่นๆ ที่นอกเหนือจากที่มากับ Prism build หลักๆ 
// คุณจะต้อง import และ register ภาษานั้นๆ ที่นี่
// ตัวอย่างเช่น สำหรับ Python:
// import python from 'react-syntax-highlighter/dist/cjs/languages/prism/python';
// SyntaxHighlighter.registerLanguage('python', python);


interface CodeBlockProps {
  content: string; 
  typecontent?: string; 
  className?: string; 
}

export function CodeBlock({ content, typecontent, className }: CodeBlockProps) {
  // กำหนดภาษาเริ่มต้น (สามารถเปลี่ยนให้รับค่าจาก props ได้)
  const language = 'javascript'; 

  // สร้าง Style Object ใหม่จากการ Spread (copy) atomDark ของ Prism
  // แล้ว Overwrite Property สำหรับ 'comment'
  const customCodeStyle = {
    ...atomDark, // Copy ทุกอย่างมาจาก atomDark (สไตล์ของ Prism)
    'comment': { // สำหรับ Prism.js โดยทั่วไปจะใช้คลาสชื่อตรงๆ เช่น 'comment'
      color: '#BADA55', // <<--- ตรงนี้คือ Hex Code ของสีเขียวที่คุณต้องการ
      fontStyle: 'italic' // (ไม่บังคับ) ทำให้ Comment เป็นตัวเอียง
    }
    // ถ้าคุณต้องการเปลี่ยนสีของส่วนอื่นๆ เช่น Keywords, Strings ใน Prism.js
    // ลองใช้ชื่อคลาสตรงๆ เช่น 'keyword', 'string', 'number', 'variable'
    // หากไม่แน่ใจ ให้ลอง Inspect Element ในเบราว์เซอร์เพื่อดูชื่อคลาส CSS ที่ Prism.js ใช้
    // ตัวอย่าง:
    // 'keyword': {
    //   color: '#CC99CD' 
    // },
    // 'string': {
    //   color: '#9CCC65' 
    // }
  };

  return (
    <div className={`rounded-lg max-h-96 overflow-auto bg-gray-800 text-white ${className || ''}`}>
      <SyntaxHighlighter
        language={language}
        style={customCodeStyle} // <--- สำคัญ! ใช้ customCodeStyle ที่เราแก้ไขแล้ว
        showLineNumbers={false}
        wrapLines={true}
        customStyle={{
          padding: '16px',
          margin: '0', 
          borderRadius: '0.5rem', 
          fontSize: '0.875rem', 
          lineHeight: '1.5',
          backgroundColor: 'transparent',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
        codeTagProps={{ // ส่วนนี้กลับไปเป็นแค่สไตล์พื้นฐานสำหรับ <code>
            style: { 
                fontFamily: 'monospace',
            } 
        }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
}