'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Copy } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

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

// Custom dark theme optimized for ComplianceFlow
const customStyle = {
  ...vscDarkPlus,
  'pre[class*="language-"]': {
    ...vscDarkPlus['pre[class*="language-"]'],
    background: 'transparent',
    margin: 0,
    padding: 0,
  },
  'code[class*="language-"]': {
    ...vscDarkPlus['code[class*="language-"]'],
    background: 'transparent',
    textShadow: 'none',
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
  },
};

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

  // Map language to syntax highlighter language
  const getSyntaxLanguage = (lang: Language): string => {
    if (lang === 'curl') return 'bash';
    if (lang === 'typescript') return 'typescript';
    return lang;
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

      {/* Code Display with Syntax Highlighting */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-[#1e1e1e] overflow-hidden"
      >
        <div className="overflow-x-auto">
          <SyntaxHighlighter
            language={getSyntaxLanguage(activeExample.language)}
            style={customStyle}
            showLineNumbers={false}
            wrapLines={true}
            wrapLongLines={true}
            customStyle={{
              margin: 0,
              padding: '1.5rem',
              background: 'transparent',
              fontSize: '0.875rem',
              lineHeight: '1.5',
            }}
          >
            {activeExample.code}
          </SyntaxHighlighter>
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
