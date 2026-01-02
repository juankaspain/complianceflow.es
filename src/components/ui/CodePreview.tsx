'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';

type Language = 'curl' | 'javascript' | 'typescript' | 'python';

interface CodeExample {
  language: Language;
  code: string;
  label?: string;
}

interface CodePreviewProps {
  examples: CodeExample[];
  title?: string;
  response?: {
    status: number;
    message: string;
    time?: string;
  };
  className?: string;
}

const languageLabels: Record<Language, string> = {
  curl: 'cURL',
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  python: 'Python',
};

/**
 * Simple syntax highlighter using regex patterns
 */
function highlightCode(code: string, language: Language): React.ReactNode {
  const lines = code.split('\n');
  
  return lines.map((line, lineIndex) => {
    let highlightedLine = line;
    const spans: Array<{ start: number; end: number; className: string; text: string }> = [];

    // JavaScript/TypeScript patterns
    if (language === 'javascript' || language === 'typescript') {
      // Keywords
      const keywords = /\b(import|from|const|let|var|function|async|await|return|if|else|for|while|new|class|export|default|interface|type)\b/g;
      let match;
      while ((match = keywords.exec(line)) !== null) {
        spans.push({ start: match.index, end: match.index + match[0].length, className: 'text-purple-400', text: match[0] });
      }

      // Strings
      const strings = /(['"`])(?:(?=(\\?))\2.)*?\1/g;
      while ((match = strings.exec(line)) !== null) {
        spans.push({ start: match.index, end: match.index + match[0].length, className: 'text-green-400', text: match[0] });
      }

      // Numbers
      const numbers = /\b\d+(\.\d+)?\b/g;
      while ((match = numbers.exec(line)) !== null) {
        spans.push({ start: match.index, end: match.index + match[0].length, className: 'text-orange-400', text: match[0] });
      }

      // Comments
      const comment = line.indexOf('//');
      if (comment !== -1) {
        spans.push({ start: comment, end: line.length, className: 'text-gray-500 italic', text: line.slice(comment) });
      }
    }

    // Python patterns
    if (language === 'python') {
      // Keywords
      const keywords = /\b(import|from|def|class|if|else|elif|for|while|return|async|await|with|as|try|except|finally|print|lambda)\b/g;
      let match;
      while ((match = keywords.exec(line)) !== null) {
        spans.push({ start: match.index, end: match.index + match[0].length, className: 'text-purple-400', text: match[0] });
      }

      // Strings
      const strings = /(['"`])(?:(?=(\\?))\2.)*?\1/g;
      while ((match = strings.exec(line)) !== null) {
        spans.push({ start: match.index, end: match.index + match[0].length, className: 'text-green-400', text: match[0] });
      }

      // f-strings
      const fstrings = /f(['"]).*?\1/g;
      while ((match = fstrings.exec(line)) !== null) {
        spans.push({ start: match.index, end: match.index + match[0].length, className: 'text-green-400', text: match[0] });
      }

      // Comments
      const comment = line.indexOf('#');
      if (comment !== -1) {
        spans.push({ start: comment, end: line.length, className: 'text-gray-500 italic', text: line.slice(comment) });
      }
    }

    // Bash/cURL patterns
    if (language === 'curl') {
      // Commands
      const commands = /\b(curl|POST|GET|PUT|DELETE|HEAD)\b/g;
      let match;
      while ((match = commands.exec(line)) !== null) {
        spans.push({ start: match.index, end: match.index + match[0].length, className: 'text-cyan-400', text: match[0] });
      }

      // Flags
      const flags = /-[A-Za-z]\b/g;
      while ((match = flags.exec(line)) !== null) {
        spans.push({ start: match.index, end: match.index + match[0].length, className: 'text-yellow-400', text: match[0] });
      }

      // Strings
      const strings = /(['"`])(?:(?=(\\?))\2.)*?\1/g;
      while ((match = strings.exec(line)) !== null) {
        spans.push({ start: match.index, end: match.index + match[0].length, className: 'text-green-400', text: match[0] });
      }
    }

    // Sort spans by start position
    spans.sort((a, b) => a.start - b.start);

    // Build the highlighted line
    if (spans.length === 0) {
      return (
        <div key={lineIndex} className="text-gray-300">
          {line || '\u00A0'}
        </div>
      );
    }

    const elements: React.ReactNode[] = [];
    let lastEnd = 0;

    spans.forEach((span, i) => {
      // Add text before this span
      if (span.start > lastEnd) {
        elements.push(
          <span key={`text-${i}`} className="text-gray-300">
            {line.slice(lastEnd, span.start)}
          </span>
        );
      }

      // Add the highlighted span
      elements.push(
        <span key={`span-${i}`} className={span.className}>
          {span.text}
        </span>
      );

      lastEnd = span.end;
    });

    // Add remaining text
    if (lastEnd < line.length) {
      elements.push(
        <span key="text-end" className="text-gray-300">
          {line.slice(lastEnd)}
        </span>
      );
    }

    return (
      <div key={lineIndex} className="min-h-[1.5rem]">
        {elements.length > 0 ? elements : '\u00A0'}
      </div>
    );
  });
}

/**
 * CodePreview - Interactive code example component with syntax highlighting
 * 
 * @example
 * <CodePreview
 *   examples={[
 *     { language: 'javascript', code: 'const result = await client.submit()' },
 *     { language: 'python', code: 'result = client.submit()' }
 *   ]}
 *   response={{ status: 200, message: 'Success', time: '47ms' }}
 * />
 */
export default function CodePreview({
  examples,
  title,
  response,
  className = '',
}: CodePreviewProps) {
  const [activeTab, setActiveTab] = useState<Language>(examples[0].language);
  const [copied, setCopied] = useState(false);

  const activeExample = examples.find((ex) => ex.language === activeTab) || examples[0];

  const handleCopy = async () => {
    await navigator.clipboard.writeText(activeExample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`rounded-2xl overflow-hidden border border-white/10 bg-gray-950 shadow-2xl ${className}`}>
      {/* Header */}
      {title && (
        <div className="px-6 py-4 border-b border-white/10 bg-gray-900/50">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
      )}

      {/* Tab Navigation */}
      <div className="flex items-center justify-between gap-2 bg-gray-900/80 px-4 py-3 border-b border-white/10">
        <div className="flex gap-2 flex-wrap">
          {examples.map((example) => (
            <motion.button
              key={example.language}
              onClick={() => setActiveTab(example.language)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === example.language
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {example.label || languageLabels[example.language]}
            </motion.button>
          ))}
        </div>

        {/* Copy Button */}
        <motion.button
          onClick={handleCopy}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-all"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-green-400 hidden sm:inline">Copiado</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4" />
              <span className="hidden sm:inline">Copiar</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Code Display with Custom Syntax Highlighting */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#1e1e1e] overflow-hidden"
      >
        <div className="overflow-x-auto">
          <pre className="p-6 text-sm font-mono leading-relaxed">
            {highlightCode(activeExample.code, activeExample.language)}
          </pre>
        </div>
      </motion.div>

      {/* Response Preview */}
      {response && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`border-t p-4 ${
            response.status >= 200 && response.status < 300
              ? 'bg-green-500/10 border-green-500/20'
              : 'bg-red-500/10 border-red-500/20'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`text-2xl ${
                response.status >= 200 && response.status < 300
                  ? 'text-green-400'
                  : 'text-red-400'
              }`}
            >
              {response.status >= 200 && response.status < 300 ? '✓' : '✕'}
            </div>
            <div className="flex-1">
              <div
                className={`text-sm font-mono ${
                  response.status >= 200 && response.status < 300
                    ? 'text-green-400'
                    : 'text-red-400'
                }`}
              >
                {response.status} {response.status >= 200 && response.status < 300 ? 'OK' : 'Error'}
                {response.time && ` - ${response.time}`}
              </div>
              <div className="text-sm text-gray-400 mt-1">{response.message}</div>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
