'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  fileName?: string;
  showLineNumbers?: boolean;
  highlightLines?: number[];
  className?: string;
}

export function CodeBlock({
  code,
  language = 'bash',
  fileName,
  showLineNumbers = false,
  highlightLines = [],
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className={cn('relative group', className)}>
      {fileName && (
        <div className="flex items-center justify-between rounded-t-lg bg-neutral-800 px-4 py-2 text-sm text-neutral-300">
          <span>{fileName}</span>
          <span className="text-xs text-neutral-500">{language}</span>
        </div>
      )}
      
      <div className="relative">
        <pre
          className={cn(
            'overflow-x-auto rounded-lg bg-neutral-900 p-4 font-mono text-sm text-neutral-100',
            fileName && 'rounded-t-none'
          )}
        >
          <code className={`language-${language}`}>
            {showLineNumbers ? (
              <div className="table">
                {lines.map((line, i) => (
                  <div
                    key={i}
                    className={cn(
                      'table-row',
                      highlightLines.includes(i + 1) && 'bg-primary-900/20'
                    )}
                  >
                    <span className="table-cell pr-4 text-right text-neutral-600 select-none">
                      {i + 1}
                    </span>
                    <span className="table-cell">{line}</span>
                  </div>
                ))}
              </div>
            ) : (
              code
            )}
          </code>
        </pre>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100"
          onClick={copyToClipboard}
          aria-label="Copiar código"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
      </div>
    </div>
  );
}
