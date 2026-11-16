import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export function SyntaxReminder({ skeleton = '', defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!skeleton) return null;

  return (
    <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/20 overflow-hidden my-3 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2.5 bg-indigo-500/10 hover:bg-indigo-500/15 text-indigo-300 font-medium text-sm transition-colors text-left"
      >
        <div className="flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-indigo-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-300">
            Syntax Reminder Skeleton
          </span>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-indigo-400" /> : <ChevronDown className="w-4 h-4 text-indigo-400" />}
      </button>

      {isOpen && (
        <div className="p-4 bg-slate-900/90 border-t border-indigo-500/20">
          <pre className="font-mono text-xs text-indigo-200 leading-relaxed overflow-x-auto whitespace-pre-wrap">
            {skeleton}
          </pre>
        </div>
      )}
    </div>
  );
}
