import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';

interface CodeBlockProps {
  content: string;
  className?: string;
}

const customCodeStyle = {
  ...atomDark,
  comment: {
    color: '#BADA55',
    fontStyle: 'italic',
  },
};

// ใช้ React.memo เพื่อ prevent re-render ถ้า props ไม่เปลี่ยน
export const CodeBlock = React.memo(({ content, className }: CodeBlockProps) => {
  return (
    <div className={`rounded-lg max-h-96 overflow-auto bg-gray-800 text-white ${className || ''}`}>
      <SyntaxHighlighter
        language="javascript" // fixed language เพื่อ performance
        style={customCodeStyle}
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
