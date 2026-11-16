import React, { useRef } from 'react';
import { RotateCcw, Copy, Check, Terminal } from 'lucide-react';

export function CodeEditor({ code, onChange, onReset, title = 'Java Code Editor (Main.java)' }) {
  const [copied, setCopied] = React.useState(false);
  const textareaRef = useRef(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Enable Tab key indentation inside textarea
  const handleKeyDown = (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target;
      const start = target.selectionStart;
      const end = target.selectionEnd;

      const newCode = code.substring(0, start) + '    ' + code.substring(end);
      onChange(newCode);

      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 4;
      }, 0);
    }
  };

  const lines = code.split('\n');
  const lineCount = lines.length;

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
      {/* Editor Top Bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-mono font-medium">
          <Terminal className="w-4 h-4 text-indigo-400" />
          <span>{title}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Copy code"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>

          <button
            type="button"
            onClick={onReset}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            title="Reset code template"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Editor Area with Line Numbers */}
      <div className="flex font-mono text-sm leading-relaxed min-h-[220px] max-h-[480px] overflow-auto">
        {/* Line Numbers Column */}
        <div className="select-none py-4 px-3 bg-slate-950 text-slate-600 border-r border-slate-800/80 text-right text-xs">
          {Array.from({ length: Math.max(lineCount, 8) }, (_, i) => (
            <div key={i + 1}>{i + 1}</div>
          ))}
        </div>

        {/* Textarea Input */}
        <textarea
          ref={textareaRef}
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          spellCheck="false"
          className="flex-1 p-4 bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none resize-none font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre"
          rows={Math.max(lineCount, 8)}
          placeholder="// Type your Java code here..."
        />
      </div>

      {/* Editor Status Bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-slate-900/60 border-t border-slate-800 text-[11px] font-mono text-slate-500">
        <span>Java 17+ • In-Browser Simulator</span>
        <span>{lineCount} lines • {code.length} chars</span>
      </div>
    </div>
  );
}
