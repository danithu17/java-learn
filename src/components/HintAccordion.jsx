import React from 'react';
import { HelpCircle, AlertTriangle, Eye } from 'lucide-react';

export function HintAccordion({ hints = [], revealedCount = 0, onRevealHint }) {
  if (!hints || hints.length === 0) return null;

  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-4 my-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-sky-400" />
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
            Hints ({revealedCount} / {hints.length} revealed)
          </span>
        </div>
        {revealedCount < hints.length && (
          <button
            onClick={onRevealHint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 text-xs font-medium transition-colors border border-sky-500/30"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Reveal Hint {revealedCount + 1} (-5 XP)</span>
          </button>
        )}
      </div>

      {revealedCount === 0 ? (
        <p className="text-xs text-slate-500 italic">
          Try solving it with your own logic first! If you get stuck, reveal a hint (each hint gently deducts 5 XP).
        </p>
      ) : (
        <div className="space-y-2 mt-2">
          {hints.slice(0, revealedCount).map((hint, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 flex items-start gap-2.5 animate-fadeIn"
            >
              <span className="px-1.5 py-0.5 rounded bg-sky-500/30 text-sky-300 font-mono font-bold text-[10px] flex-shrink-0 mt-0.5">
                Hint #{idx + 1}
              </span>
              <p className="leading-relaxed">{hint}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
