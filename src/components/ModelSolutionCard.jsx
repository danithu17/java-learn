import React from 'react';
import { CheckCircle2, BookOpen } from 'lucide-react';
import { CodeBlock } from './CodeBlock.jsx';

export function ModelSolutionCard({ solution, explanation = [] }) {
  if (!solution) return null;

  return (
    <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-6 space-y-4 animate-fadeIn">
      <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
        <span>Model Java Solution (Compare with yours!)</span>
      </div>

      <CodeBlock code={solution} title="Recommended Java Implementation" />

      {explanation && explanation.length > 0 && (
        <div className="space-y-2 pt-2 border-t border-emerald-500/20">
          <h4 className="text-xs uppercase tracking-wider font-mono font-bold text-emerald-300 flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" />
            Line-by-Line Teacher Breakdown:
          </h4>
          <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside leading-relaxed">
            {explanation.map((item, idx) => (
              <li key={idx}>
                <span className="font-mono text-indigo-300">{item.split(';')[0]}</span>
                {item.includes(';') ? ` — ${item.substring(item.indexOf(';') + 1)}` : item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
