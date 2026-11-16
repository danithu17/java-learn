import React from 'react';
import { Play, Lock, CheckCircle2, Flame, Award, BookOpen, Sparkles, ArrowRight, Repeat, Crown } from 'lucide-react';
import { modules } from '../modules/index.js';
import { useGame } from '../context/GameContext.jsx';

export function HomePage({ onSelectModule, onStartReview }) {
  const { state, levelInfo } = useGame();

  const forLoopMod = modules[0];
  const completedCount = state.completedChallenges.length;
  const totalCount = forLoopMod.totalChallenges || 30;
  const percentComplete = Math.round((completedCount / totalCount) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* Hero Header */}
      <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 border border-indigo-500/30 bg-gradient-to-br from-indigo-950/60 via-slate-900 to-purple-950/40 shadow-2xl">
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Code Real-Life Scenarios • No Quizzes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Learn Java loops by writing <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">real code</span> for real stories.
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Struggle with converting your thoughts into Java syntax? You're not alone! Practice 30 progressive scenarios (roll calls, highway milestones, piggy banks, ATM ciphers) with an in-browser Java simulator, plain English logic steps, and tiered hints.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onSelectModule(forLoopMod.id)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{completedCount === 0 ? 'Start Stage 1 Scenarios' : 'Continue Scenarios'}</span>
            </button>

            {completedCount > 0 && (
              <button
                onClick={onStartReview}
                className="px-5 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm flex items-center gap-2 transition-all"
              >
                <Repeat className="w-4 h-4 text-emerald-400" />
                <span>Review Solved Scenarios ({completedCount})</span>
              </button>
            )}
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="mt-8 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs text-slate-400 block mb-0.5">Player Rank</span>
            <span className={`text-base font-bold ${levelInfo.color}`}>{levelInfo.name}</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs text-slate-400 block mb-0.5">Total XP</span>
            <span className="text-base font-bold font-mono text-indigo-300">{state.xp} XP</span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs text-slate-400 block mb-0.5">Combo Streak</span>
            <span className="text-base font-bold font-mono text-amber-400 flex items-center gap-1">
              <Flame className="w-4 h-4 fill-amber-400" /> {state.streak}
            </span>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800">
            <span className="text-xs text-slate-400 block mb-0.5">Badges Unlocked</span>
            <span className="text-base font-bold font-mono text-purple-300 flex items-center gap-1">
              <Award className="w-4 h-4" /> {state.badges.length}/8
            </span>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-white tracking-tight">Loop Modules</h2>
          <p className="text-sm text-slate-400 mt-1">
            Data-driven modules. Master one loop concept at a time through real scenarios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod) => {
            const isUnlocked = !mod.locked;

            return (
              <div
                key={mod.id}
                onClick={() => isUnlocked && onSelectModule(mod.id)}
                className={`relative rounded-3xl p-6 border transition-all flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-slate-900/90 border-indigo-500/40 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/10 cursor-pointer group'
                    : 'bg-slate-950/60 border-slate-800/80 opacity-75 cursor-not-allowed'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                        isUnlocked
                          ? 'bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all shadow-md'
                          : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      {isUnlocked ? <Repeat className="w-6 h-6" /> : <Lock className="w-6 h-6" />}
                    </div>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                        isUnlocked
                          ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                          : 'bg-slate-800 text-slate-400 border border-slate-700/60'
                      }`}
                    >
                      {mod.badge || (isUnlocked ? 'Unlocked' : 'Coming Soon')}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {mod.description}
                  </p>
                </div>

                {isUnlocked ? (
                  <div className="space-y-3 pt-4 border-t border-slate-800">
                    <div className="flex items-center justify-between text-xs text-slate-400">
                      <span>Progress</span>
                      <span className="font-mono text-indigo-400 font-bold">
                        {completedCount} / {totalCount} ({percentComplete}%)
                      </span>
                    </div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all duration-500"
                        style={{ width: `${percentComplete}%` }}
                      />
                    </div>
                    <div className="pt-2 flex items-center justify-between text-xs font-medium text-indigo-400 group-hover:text-indigo-300">
                      <span className="flex items-center gap-1.5">
                        <Crown className="w-3.5 h-3.5 text-amber-400" />
                        6 Stages • 30 Scenarios
                      </span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-500">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Locked. Will unlock in future updates!</span>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
