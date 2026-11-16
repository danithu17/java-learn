import React, { useState } from 'react';
import { Lightbulb, ChevronDown, ChevronUp } from 'lucide-react';

export function ThinkFirstBox({ steps = [], defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!steps || steps.length === 0) return null;

  return (
    <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 overflow-hidden my-3 transition-all">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-amber-500/10 hover:bg-amber-500/15 text-amber-300 font-medium text-sm transition-colors text-left"
      >
        <div className="flex items-center gap-2.5">
          <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
            <Lightbulb className="w-4 h-4" />
          </span>
          <div>
            <span className="font-semibold tracking-wide uppercase text-xs text-amber-400 block">Think First</span>
            <span className="text-slate-200 text-xs">Plain English logic steps (read before you code)</span>
          </div>
        </div>
        {isOpen ? <ChevronUp className="w-4 h-4 text-amber-400" /> : <ChevronDown className="w-4 h-4 text-amber-400" />}
      </button>

      {isOpen && (
        <div className="p-4 bg-slate-900/60 border-t border-amber-500/20 text-sm text-slate-300 space-y-2">
          {steps.map((step, idx) => (
            <div key={idx} className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-amber-500/20 text-amber-300 text-xs flex items-center justify-center font-bold flex-shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <p className="leading-relaxed">{step.replace(/^\d+\.\s*/, '')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
