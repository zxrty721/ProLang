import React from "react";

interface CodeBlockProps {
  content: string;
  typecontent: string;
}

// Comprehensive keyword list for 40+ programming languages
const keywords = {
  // JavaScript/TypeScript
  js: ['abstract', 'arguments', 'await', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue', 'debugger', 'default', 'delete', 'do', 'double', 'else', 'enum', 'eval', 'export', 'extends', 'false', 'final', 'finally', 'float', 'for', 'function', 'goto', 'if', 'implements', 'import', 'in', 'instanceof', 'int', 'interface', 'let', 'long', 'native', 'new', 'null', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'true', 'try', 'typeof', 'var', 'void', 'volatile', 'while', 'with', 'yield', 'async', 'of', 'as', 'from', 'declare', 'namespace', 'module', 'type', 'readonly', 'keyof', 'infer'],
  
  // Python
  python: ['False', 'None', 'True', 'and', 'as', 'assert', 'break', 'class', 'continue', 'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 'if', 'import', 'in', 'is', 'lambda', 'nonlocal', 'not', 'or', 'pass', 'raise', 'return', 'try', 'while', 'with', 'yield', 'async', 'await'],
  
  // Java
  java: ['abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch', 'char', 'class', 'const', 'continue', 'default', 'do', 'double', 'else', 'enum', 'extends', 'final', 'finally', 'float', 'for', 'goto', 'if', 'implements', 'import', 'instanceof', 'int', 'interface', 'long', 'native', 'new', 'package', 'private', 'protected', 'public', 'return', 'short', 'static', 'strictfp', 'super', 'switch', 'synchronized', 'this', 'throw', 'throws', 'transient', 'try', 'void', 'volatile', 'while'],
  
  // C/C++
  cpp: ['alignas', 'alignof', 'and', 'and_eq', 'asm', 'auto', 'bitand', 'bitor', 'bool', 'break', 'case', 'catch', 'char', 'char16_t', 'char32_t', 'class', 'compl', 'const', 'constexpr', 'const_cast', 'continue', 'decltype', 'default', 'delete', 'do', 'double', 'dynamic_cast', 'else', 'enum', 'explicit', 'export', 'extern', 'false', 'float', 'for', 'friend', 'goto', 'if', 'inline', 'int', 'long', 'mutable', 'namespace', 'new', 'noexcept', 'not', 'not_eq', 'nullptr', 'operator', 'or', 'or_eq', 'private', 'protected', 'public', 'register', 'reinterpret_cast', 'return', 'short', 'signed', 'sizeof', 'static', 'static_assert', 'static_cast', 'struct', 'switch', 'template', 'this', 'thread_local', 'throw', 'true', 'try', 'typedef', 'typeid', 'typename', 'union', 'unsigned', 'using', 'virtual', 'void', 'volatile', 'wchar_t', 'while', 'xor', 'xor_eq'],
  
  // C#
  csharp: ['abstract', 'as', 'base', 'bool', 'break', 'byte', 'case', 'catch', 'char', 'checked', 'class', 'const', 'continue', 'decimal', 'default', 'delegate', 'do', 'double', 'else', 'enum', 'event', 'explicit', 'extern', 'false', 'finally', 'fixed', 'float', 'for', 'foreach', 'goto', 'if', 'implicit', 'in', 'int', 'interface', 'internal', 'is', 'lock', 'long', 'namespace', 'new', 'null', 'object', 'operator', 'out', 'override', 'params', 'private', 'protected', 'public', 'readonly', 'ref', 'return', 'sbyte', 'sealed', 'short', 'sizeof', 'stackalloc', 'static', 'string', 'struct', 'switch', 'this', 'throw', 'true', 'try', 'typeof', 'uint', 'ulong', 'unchecked', 'unsafe', 'ushort', 'using', 'virtual', 'void', 'volatile', 'while'],
  
  // Rust
  rust: ['as', 'break', 'const', 'continue', 'crate', 'else', 'enum', 'extern', 'false', 'fn', 'for', 'if', 'impl', 'in', 'let', 'loop', 'match', 'mod', 'move', 'mut', 'pub', 'ref', 'return', 'self', 'Self', 'static', 'struct', 'super', 'trait', 'true', 'type', 'unsafe', 'use', 'where', 'while', 'async', 'await', 'dyn'],
  
  // Go
  go: ['break', 'case', 'chan', 'const', 'continue', 'default', 'defer', 'else', 'fallthrough', 'for', 'func', 'go', 'goto', 'if', 'import', 'interface', 'map', 'package', 'range', 'return', 'select', 'struct', 'switch', 'type', 'var'],
  
  // PHP
  php: ['abstract', 'and', 'array', 'as', 'break', 'callable', 'case', 'catch', 'class', 'clone', 'const', 'continue', 'declare', 'default', 'die', 'do', 'echo', 'else', 'elseif', 'empty', 'enddeclare', 'endfor', 'endforeach', 'endif', 'endswitch', 'endwhile', 'eval', 'exit', 'extends', 'final', 'finally', 'for', 'foreach', 'function', 'global', 'goto', 'if', 'implements', 'include', 'include_once', 'instanceof', 'insteadof', 'interface', 'isset', 'list', 'namespace', 'new', 'or', 'print', 'private', 'protected', 'public', 'require', 'require_once', 'return', 'static', 'switch', 'throw', 'trait', 'try', 'unset', 'use', 'var', 'while', 'xor', 'yield'],
  
  // Ruby
  ruby: ['alias', 'and', 'begin', 'break', 'case', 'class', 'def', 'defined?', 'do', 'else', 'elsif', 'end', 'ensure', 'false', 'for', 'if', 'in', 'module', 'next', 'nil', 'not', 'or', 'redo', 'rescue', 'retry', 'return', 'self', 'super', 'then', 'true', 'undef', 'unless', 'until', 'when', 'while', 'yield'],
  
  // Swift
  swift: ['associatedtype', 'class', 'deinit', 'enum', 'extension', 'fileprivate', 'func', 'import', 'init', 'inout', 'internal', 'let', 'open', 'operator', 'private', 'protocol', 'public', 'static', 'struct', 'subscript', 'typealias', 'var', 'break', 'case', 'continue', 'default', 'defer', 'do', 'else', 'fallthrough', 'for', 'guard', 'if', 'in', 'repeat', 'return', 'switch', 'where', 'while', 'as', 'catch', 'false', 'is', 'nil', 'rethrows', 'super', 'self', 'Self', 'throw', 'throws', 'true', 'try'],
  
  // Kotlin
  kotlin: ['as', 'as?', 'break', 'class', 'continue', 'do', 'else', 'false', 'for', 'fun', 'if', 'in', '!in', 'interface', 'is', '!is', 'null', 'object', 'package', 'return', 'super', 'this', 'throw', 'true', 'try', 'typealias', 'typeof', 'val', 'var', 'when', 'while'],
  
  // SQL
  sql: ['select', 'from', 'where', 'insert', 'update', 'delete', 'create', 'alter', 'drop', 'table', 'database', 'index', 'view', 'procedure', 'function', 'trigger', 'join', 'inner', 'left', 'right', 'full', 'outer', 'on', 'and', 'or', 'not', 'in', 'exists', 'between', 'like', 'is', 'null', 'as', 'set', 'values', 'group', 'by', 'order', 'having', 'limit', 'offset', 'union', 'intersect', 'except', 'all', 'distinct', 'count', 'sum', 'avg', 'min', 'max', 'primary', 'key', 'foreign', 'references', 'constraint', 'unique', 'check', 'default'],
  
  // Built-in types and common identifiers
  types: ['String', 'Integer', 'Double', 'Boolean', 'char', 'byte', 'short', 'long', 'float', 'double', 'List', 'Map', 'Set', 'HashMap', 'ArrayList', 'LinkedList', 'Vector', 'Thread', 'Exception', 'System', 'console', 'document', 'window', 'Array', 'Object', 'Math', 'Date', 'RegExp', 'Error', 'Promise', 'Proxy', 'WeakSet', 'WeakMap', 'JSON', 'URL', 'URLSearchParams', 'fetch', 'XMLHttpRequest', 'alert', 'confirm', 'prompt', 'setTimeout', 'setInterval', 'clearInterval', 'clearTimeout']
};

// Combine all keywords into one array
const allKeywords = [
  ...keywords.js,
  ...keywords.python,
  ...keywords.java,
  ...keywords.cpp,
  ...keywords.csharp,
  ...keywords.rust,
  ...keywords.go,
  ...keywords.php,
  ...keywords.ruby,
  ...keywords.swift,
  ...keywords.kotlin,
  ...keywords.sql,
  ...keywords.types
];

// Remove duplicates and create regex pattern
const uniqueKeywords = [...new Set(allKeywords)];
const keywordPattern = uniqueKeywords.sort((a, b) => b.length - a.length).join('|');

// Enhanced regex with comprehensive language support - แยก comment เพิ่มเติม
const createTokenRegex = () => {
  const pattern = '(?:' +
    '(\\/\\/.*|\\/\\*[\\s\\S]*?\\*\\/|#.*|--.*|<!--[\\s\\S]*?-->|\\{-[\\s\\S]*?-\\}|\\(\\*[\\s\\S]*?\\*\\)|=>.*$)' + '|' + // เพิ่ม =>.*$ สำหรับ comment
    '("(?:\\\\.|[^"\\\\])*"|\'(?:\\\\.|[^\'\\\\])*\'|\\`(?:\\\\.|[^\\`\\\\])*\\`|r"[^"]*"|f"[^"]*"|u"[^"]*"|b"[^"]*")' + '|' +
    '(\\b\\d+(?:\\.\\d+)?(?:[eE][+-]?\\d+)?[fFdDlL]?\\b|0[xX][0-9a-fA-F]+|0[bB][01]+|0[oO][0-7]+)' + '|' +
    '(<\\/?[\\w\\d-]+\\s*[^>]*?>)' + '|' +
    '([+\\-*\\/%=!<>&|^~?:@$]{1,3}|\\[|\\]|\\{|\\}|\\(|\\)|;|,|\\.)' + '|' +
    '(\\b[a-zA-Z_$][a-zA-Z0-9_$]*\\s*\\()' + '|' +
    '(\\b(?:' + keywordPattern + ')\\b)' + '|' +
    '([a-zA-Z_$][a-zA-Z0-9_$]*\\.[a-zA-Z_$][a-zA-Z0-9_$]*)' + '|' +
    '([a-zA-Z_$][a-zA-Z0-9_$]*)' + '|' +
    '[^\\s]+' +
    ')';
  
  return new RegExp(pattern, 'gm'); // เพิ่ม m flag สำหรับ multiline
};

const tokenRegex = createTokenRegex();

export const CodeBlock: React.FC<CodeBlockProps> = ({ content, typecontent }) => {
  const lines = content.split("\n");

  // ฟังก์ชันสำหรับไฮไลต์ inline content
  const highlightInlineContent = (text: string, lineIndex: number, startIndex: number = 0) => {
    const tokens: React.ReactNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    
    // สร้าง regex ใหม่สำหรับแต่ละครั้ง
    const regex = createTokenRegex();

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        tokens.push(
          <span key={`inline-text-${lineIndex}-${startIndex}-${lastIndex}`} className="code-text">
            {text.substring(lastIndex, match.index)}
          </span>
        );
      }

      const token = match[0];
      let className = "code-text";

      if (match[1]) {
        // Comments (รวมถึง => comments)
        className = "code-comment";
      } else if (match[2]) {
        // Strings
        className = "code-string";
      } else if (match[3]) {
        // Numbers
        className = "code-number";
      } else if (match[4]) {
        // HTML/XML tags
        className = "code-tag";
      } else if (match[5]) {
        // Operators and punctuation
        className = "code-operator";
      } else if (match[6]) {
        // Functions
        className = "code-function";
      } else if (match[7]) {
        // Keywords
        const tokenLower = token.toLowerCase();
        if (keywords.sql.includes(tokenLower)) {
          className = "code-keyword-sql";
        } else if (keywords.types.includes(token)) {
          className = "code-keyword-type";
        } else if (['true', 'false', 'null', 'undefined', 'nil', 'None'].includes(token)) {
          className = "code-keyword-literal";
        } else {
          className = "code-keyword-general";
        }
      } else if (match[8]) {
        // Property access
        className = "code-property";
      } else if (match[9]) {
        // Regular identifiers
        className = "code-identifier";
      }

      tokens.push(
        <span key={`inline-token-${lineIndex}-${startIndex}-${match.index}`} className={className}>
          {token}
        </span>
      );

      lastIndex = regex.lastIndex;
    }

    if (lastIndex < text.length) {
      tokens.push(
        <span key={`inline-rest-${lineIndex}-${startIndex}-${lastIndex}`} className="code-text">
          {text.substring(lastIndex)}
        </span>
      );
    }

    return tokens;
  };

  const highlightLine = (line: string, lineIndex: number) => {
    // ตรวจสอบว่ามี => comment หรือไม่
    const arrowCommentIndex = line.indexOf('=>');
    if (arrowCommentIndex !== -1) {
      const beforeArrow = line.substring(0, arrowCommentIndex);
      const arrowComment = line.substring(arrowCommentIndex);
      
      const beforeTokens = beforeArrow ? highlightInlineContent(beforeArrow, lineIndex, 0) : [];
      
      return (
        <div key={lineIndex} className="code-line">
          {beforeTokens}
          <span className="code-comment">{arrowComment}</span>
        </div>
      );
    }

    // จัดการตาม type content
    switch (typecontent) {
      case "variables": {
        const firstSpaceIdx = line.indexOf(" ");
        if (firstSpaceIdx === -1) {
          return (
            <div key={lineIndex} className="code-line">
              <span className="code-variable-type">{line}</span>
            </div>
          );
        }
        const firstWord = line.substring(0, firstSpaceIdx);
        const restLine = line.substring(firstSpaceIdx + 1);

        return (
          <div key={lineIndex} className="code-line">
            <span className="code-variable-type">{firstWord}</span>
            <span> </span>
            {highlightInlineContent(restLine, lineIndex, firstSpaceIdx + 1)}
          </div>
        );
      }

      case "functions": {
        const firstSpaceIdx = line.indexOf(" ");
        if (firstSpaceIdx === -1) {
          return (
            <div key={lineIndex} className="code-line">
              <span className="code-function-name">{line}</span>
            </div>
          );
        }
        const firstWord = line.substring(0, firstSpaceIdx);
        const restLine = line.substring(firstSpaceIdx + 1);

        return (
          <div key={lineIndex} className="code-line">
            <span className="code-function-name">{firstWord}</span>
            <span> </span>
            {highlightInlineContent(restLine, lineIndex, firstSpaceIdx + 1)}
          </div>
        );
      }

      case "syntax": {
        const firstSpaceIdx = line.indexOf(" ");
        if (firstSpaceIdx === -1) {
          return (
            <div key={lineIndex} className="code-line">
              <span className="code-syntax-keyword">{line}</span>
            </div>
          );
        }
        const firstWord = line.substring(0, firstSpaceIdx);
        const restLine = line.substring(firstSpaceIdx + 1);

        return (
          <div key={lineIndex} className="code-line">
            <span className="code-syntax-keyword">{firstWord}</span>
            <span> </span>
            {highlightInlineContent(restLine, lineIndex, firstSpaceIdx + 1)}
          </div>
        );
      }

      case "frameworks": {
        return (
          <div key={lineIndex} className="code-line">
            <span className="code-framework">{line}</span>
          </div>
        );
      }

      case "learning_resources": {
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        const parts = line.split(urlPattern);
        const elements: React.ReactNode[] = [];
        
        parts.forEach((part, index) => {
          if (urlPattern.test(part)) {
            elements.push(
              <span key={`url-${lineIndex}-${index}`} className="code-url">
                {part}
              </span>
            );
          } else {
            elements.push(
              <span key={`text-${lineIndex}-${index}`} className="code-text">
                {part}
              </span>
            );
          }
        });

        return (
          <div key={lineIndex} className="code-line">
            {elements}
          </div>
        );
      }

      default: {
        // กรณีทั่วไป
        const tokens: React.ReactNode[] = [];
        let lastIndex = 0;
        let match: RegExpExecArray | null;
        
        const regex = createTokenRegex();

        while ((match = regex.exec(line)) !== null) {
          if (match.index > lastIndex) {
            tokens.push(
              <span key={`text-${lineIndex}-${lastIndex}`} className="code-text">
                {line.substring(lastIndex, match.index)}
              </span>
            );
          }

          const token = match[0];
          let className = "code-text";

          if (match[1]) {
            // Comments (รวมถึง => comments)
            className = "code-comment";
          } else if (match[2]) {
            // Strings
            className = "code-string";
          } else if (match[3]) {
            // Numbers
            className = "code-number";
          } else if (match[4]) {
            // HTML/XML tags
            className = "code-tag";
          } else if (match[5]) {
            // Operators and punctuation
            className = "code-operator";
          } else if (match[6]) {
            // Functions
            className = "code-function";
          } else if (match[7]) {
            // Keywords
            const tokenLower = token.toLowerCase();
            if (keywords.sql.includes(tokenLower)) {
              className = "code-keyword-sql";
            } else if (keywords.types.includes(token)) {
              className = "code-keyword-type";
            } else if (['true', 'false', 'null', 'undefined', 'nil', 'None'].includes(token)) {
              className = "code-keyword-literal";
            } else {
              className = "code-keyword-general";
            }
          } else if (match[8]) {
            // Property access
            className = "code-property";
          } else if (match[9]) {
            // Regular identifiers
            className = "code-identifier";
          }

          tokens.push(
            <span key={`token-${lineIndex}-${match.index}`} className={className}>
              {token}
            </span>
          );

          lastIndex = regex.lastIndex;
        }

        if (lastIndex < line.length) {
          tokens.push(
            <span key={`rest-${lineIndex}-${lastIndex}`} className="code-text">
              {line.substring(lastIndex)}
            </span>
          );
        }

        return <div key={lineIndex} className="code-line">{tokens}</div>;
      }
    }
  };

  return (
    <pre className="code-block-container" data-type={typecontent}>
      <code>{lines.map((line, i) => highlightLine(line, i))}</code>
    </pre>
  );
};