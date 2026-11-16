import React from 'react';
import { Flame, Trophy, Calendar, Repeat, User, LayoutGrid, Zap } from 'lucide-react';
import { useGame } from '../context/GameContext.jsx';

export function Navbar({ activeTab, onSelectTab }) {
  const { state, levelInfo } = useGame();

  return (
    <header className="sticky top-0 z-40 bg-slate-950/85 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div
            onClick={() => onSelectTab('home')}
            className="flex items-center gap-3 cursor-pointer select-none group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
              <Zap className="w-5 h-5 text-white fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  Java Loops Arena
                </span>
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  v1.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono hidden sm:block">
                for (logic; to; code++)
              </p>
            </div>
          </div>

          {/* Gamification Stats Bar: Level, XP Bar, Streak */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Level & XP progress bar */}
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 text-xs mb-1">
                <span className={`font-bold ${levelInfo.color}`}>
                  {levelInfo.name}
                </span>
                <span className="text-slate-500">•</span>
                <span className="font-mono text-slate-300 tabular-nums">
                  {state.xp} XP
                </span>
              </div>
              <div className="w-32 sm:w-44 h-2 bg-slate-800 rounded-full overflow-hidden border border-slate-700/50">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all duration-500 rounded-full"
                  style={{ width: `${levelInfo.progressPercent}%` }}
                />
              </div>
            </div>

            {/* Streak Counter */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border transition-all ${
                state.streak > 0
                  ? 'bg-amber-500/15 border-amber-500/30 text-amber-300 shadow-sm shadow-amber-500/10'
                  : 'bg-slate-900 border-slate-800 text-slate-500'
              }`}
              title="Consecutive correct answers combo streak!"
            >
              <Flame className={`w-4 h-4 ${state.streak > 0 ? 'text-amber-400 fill-amber-400 animate-pulse' : ''}`} />
              <span className="text-xs font-bold font-mono tabular-nums">{state.streak}</span>
            </div>

            {/* Daily Streak */}
            <div
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-mono"
              title="Daily login streak"
            >
              <Calendar className="w-3.5 h-3.5 text-sky-400" />
              <span>{state.dailyStreak}d</span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex items-center space-x-1 sm:space-x-4 border-t border-slate-800/60 py-2 overflow-x-auto">
          <button
            onClick={() => onSelectTab('home')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'home' || activeTab === 'module'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <LayoutGrid className="w-4 h-4" />
            <span>Modules</span>
          </button>

          <button
            onClick={() => onSelectTab('review')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'review'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <Repeat className="w-4 h-4" />
            <span>Review Mode</span>
            {state.completedChallenges.length > 0 && (
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
            )}
          </button>

          <button
            onClick={() => onSelectTab('profile')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'profile'
                ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 font-semibold'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
            }`}
          >
            <User className="w-4 h-4" />
            <span>Profile & Badges</span>
            {state.badges.length > 0 && (
              <span className="px-1.5 py-0.2 rounded-full bg-purple-500/30 text-purple-300 text-[10px] font-mono">
                {state.badges.length}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
