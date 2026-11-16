import React from 'react';
import { Target, Flame, Lightbulb, CheckCircle2, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';
import { useGame } from '../context/GameContext.jsx';
import { modules } from '../modules/index.js';

export function WeakSpotsPage({ onOpenChallenge }) {
  const { state } = useGame();

  // Aggregate all challenges across all unlocked modules
  const allChallenges = modules.flatMap(m =>
    (m.challenges || []).map(c => ({
      ...c,
      moduleTitle: m.title,
      moduleId: m.id,
      loopType: c.loopType || m.loopType || 'for'
    }))
  );

  // Filter challenges that had failed attempts or used hints
  const weakSpots = allChallenges
    .map(c => {
      const fails = state.failedAttempts?.[c.id] || 0;
      const hints = state.hintsUsed?.[c.id] || 0;
      const isCompleted = state.completedChallenges?.includes(c.id);
      const struggleScore = fails * 2 + hints;
      return {
        ...c,
        fails,
        hints,
        isCompleted,
        struggleScore
      };
    })
    .filter(c => c.fails > 0 || c.hints > 0)
    .sort((a, b) => b.struggleScore - a.struggleScore);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header Banner */}
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rose-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-rose-500/25 flex-shrink-0">
            <Target className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                Targeted Practice
              </span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-rose-500/10 text-rose-300 border border-rose-500/20">
                {weakSpots.length} Weak Spots Identified
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              Weak Spots & Challenge Retries
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl leading-relaxed">
              Scenarios where you faced compilation errors, output mismatches, or needed hints. Retrying these from scratch builds permanent muscle memory!
            </p>
          </div>
        </div>
      </div>

      {/* Weak Spots List or Empty State */}
      {weakSpots.length === 0 ? (
        <div className="p-12 rounded-3xl bg-slate-900/60 border border-slate-800 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
            <Sparkles className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">No Weak Spots Yet!</h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto leading-relaxed">
            You haven't struggled on any challenges yet, or haven't run any failed attempts! Start coding challenges in the arena and any tricky questions will automatically appear here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-mono">
            <span>Ranked by struggle score (fails × 2 + hints)</span>
            <span>{weakSpots.length} Challenges to Review</span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {weakSpots.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                      {item.moduleTitle}
                    </span>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {item.loopType} loop
                    </span>
                    {item.isCompleted ? (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Passed
                      </span>
                    ) : (
                      <span className="text-[11px] text-amber-400 font-medium">
                        ⏳ In Progress
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 line-clamp-2 max-w-2xl leading-relaxed">
                    {item.scenario}
                  </p>

                  {/* Struggle Badges */}
                  <div className="flex items-center gap-4 pt-1 text-xs font-mono">
                    {item.fails > 0 && (
                      <span className="flex items-center gap-1 text-rose-400">
                        <Flame className="w-3.5 h-3.5" />
                        {item.fails} failed {item.fails === 1 ? 'attempt' : 'attempts'}
                      </span>
                    )}
                    {item.hints > 0 && (
                      <span className="flex items-center gap-1 text-amber-400">
                        <Lightbulb className="w-3.5 h-3.5" />
                        {item.hints} hints used
                      </span>
                    )}
                  </div>
                </div>

                <div>
                  <button
                    onClick={() => onOpenChallenge(item)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-500/20 flex items-center justify-center gap-2 transition-colors whitespace-nowrap"
                  >
                    <span>Practice Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
