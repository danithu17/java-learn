import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

/**
 * Syntax-highlighted code block tailored for Java code.
 * Fast, lightweight, zero heavy dependencies.
 */
export function CodeBlock({ code, language = 'java', title = null }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple token-based colorizer for Java
  const renderHighlightedCode = (rawCode) => {
    const lines = rawCode.split('\n');

    return lines.map((line, lineIdx) => {
      // Check for full line comments
      const trimmed = line.trim();
      if (trimmed.startsWith('//') || trimmed.startsWith('/*') || trimmed.startsWith('*')) {
        return (
          <div key={lineIdx} className="table-row">
            <span className="table-cell pr-4 text-slate-600 select-none text-right w-8 text-xs">{lineIdx + 1}</span>
            <span className="table-cell text-emerald-400/80 italic">{line}</span>
          </div>
        );
      }

      // Tokenize line with regex
      const tokens = line.split(/(\b(?:for|while|do|if|else|break|continue|int|double|boolean|String|public|static|void|class|true|false)\b|"(?:[^"\\]|\\.)*"|\/\/.*$|\b\d+\b|System\.out\.println|System\.out\.print)/g);

      return (
        <div key={lineIdx} className="table-row">
          <span className="table-cell pr-4 text-slate-600 select-none text-right w-8 text-xs">{lineIdx + 1}</span>
          <span className="table-cell">
            {tokens.map((token, tokenIdx) => {
              if (!token) return null;

              // Keywords
              if (/^(for|while|do|if|else|break|continue)$/.test(token)) {
                return <span key={tokenIdx} className="text-purple-400 font-bold">{token}</span>;
              }
              // Types
              if (/^(int|double|boolean|String|void|class|public|static)$/.test(token)) {
                return <span key={tokenIdx} className="text-sky-400 font-semibold">{token}</span>;
              }
              // Booleans
              if (/^(true|false)$/.test(token)) {
                return <span key={tokenIdx} className="text-amber-400">{token}</span>;
              }
              // Built-in output
              if (/^(System\.out\.println|System\.out\.print)$/.test(token)) {
                return <span key={tokenIdx} className="text-cyan-300 font-medium">{token}</span>;
              }
              // Strings
              if (token.startsWith('"') && token.endsWith('"')) {
                return <span key={tokenIdx} className="text-emerald-300">{token}</span>;
              }
              // Numbers
              if (/^\d+$/.test(token)) {
                return <span key={tokenIdx} className="text-amber-300">{token}</span>;
              }
              // Trailing comments
              if (token.startsWith('//')) {
                return <span key={tokenIdx} className="text-slate-500 italic">{token}</span>;
              }

              // Default code text
              return <span key={tokenIdx} className="text-slate-200">{token}</span>;
            })}
          </span>
        </div>
      );
    });
  };

  return (
    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-xl my-3">
      {title && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 bg-slate-950/60 text-xs font-mono text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-medium text-slate-300">{title}</span>
          </span>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      )}
      <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto text-slate-200">
        <div className="table w-full">{renderHighlightedCode(code)}</div>
      </div>
    </div>
  );
}
