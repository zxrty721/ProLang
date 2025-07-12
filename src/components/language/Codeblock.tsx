
import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  content: string;
  className?: string;
}

const tokyoNightStyle = {
  ...atomDark,
  comment: {
    color: '#BADA55', // เขียวอมเทา - เหมือนเดิม
    fontStyle: 'italic',
  },
  keyword: {
    color: '#66CCFF', // ฟ้าสด - เหมือน VS Code
    fontWeight: 'bold',
  },
  string: {
    color: '#98C379', // เขียวสด - สดใส
  },
  number: {
    color: '#FFDEAD', // ส้มทอง - อบอุ่น
  },
  boolean: {
    color: '#C678DD', // ม่วงอ่อน - เด่น
  },
  function: {
    color: '#DB7093', // แดงอ่อน - function name
  },
  variable: {
    color: '#48D1CC', // เทาอ่อน - ตัวแปร
  },
  className: {
    color: '#990066', // เขียวฟ้า - class
  },
  operator: {
    color: '#FFFFCC', // เทาอ่อน - operator
  },
  punctuation: {
    color: '#E5C07B', // เทาอ่อน - punctuation
  },
  builtin: {
    color: '#E5C07B', // เหลืองทอง - builtin
  },
  tag: {
    color: '#E06C75', // แดงอ่อน - tag
  },
  attrName: {
    color: '#D19A66', // ส้มทอง - attribute
  },
  attrValue: {
    color: '#98C379', // เขียวสด - value
  },
  regex: {
    color: '#C678DD', // ม่วงอ่อน - regex
  },
  important: {
    color: '#FF6B6B', // แดงส้ม - important
    fontWeight: 'bold',
  },
  namespace: {
    color: '#56B6C2', // เขียวฟ้า - namespace
  },
};

// ใช้ React.memo เพื่อ prevent re-render ถ้า props ไม่เปลี่ยน
export const CodeBlock = React.memo(({ content, className }: CodeBlockProps) => {
  return (
    <div className={`rounded-lg max-h-96 overflow-auto bg-gray-800 text-white ${className || ''}`}>
      <SyntaxHighlighter
        language="javascript" // fixed language เพื่อ performance
        style={tokyoNightStyle}
        showLineNumbers={false}
        wrapLines={true}
        customStyle={{
          padding: 16,
          margin: 0,
          borderRadius: 8,
          fontSize: 14,
          lineHeight: 1.5,
          backgroundColor: 'transparent',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
        codeTagProps={{
          style: { fontFamily: 'monospace' },
        }}
      >
        {content}
      </SyntaxHighlighter>
    </div>
  );
});

CodeBlock.displayName = 'CodeBlock';
