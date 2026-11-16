import React, { useState, useRef } from 'react';
import { Trophy, Award, Flame, Calendar, CheckCircle2, RotateCcw, Sparkles, Crown, Zap, Brain, Repeat, Swords, Download, Upload } from 'lucide-react';
import { useGame } from '../context/GameContext.jsx';
import { BADGES_CONFIG, LEVELS, exportProgressAsJson, importProgressFromJson } from '../utils/storage.js';
import { modules } from '../modules/index.js';

export function ProfilePage() {
  const { state, levelInfo, resetProgress, updateFullState } = useGame();
  const [showConfirmReset, setShowConfirmReset] = useState(false);
  const [importStatus, setImportStatus] = useState(null);
  const fileInputRef = useRef(null);

  const totalPossibleChallenges = modules.reduce((acc, m) => acc + (m.totalChallenges || (m.challenges ? m.challenges.length : 0)), 0) || 95;

  const handleExport = () => {
    exportProgressAsJson(state);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result;
      if (typeof content === 'string') {
        const res = importProgressFromJson(content, state);
        if (res.success && res.mergedState) {
          updateFullState(res.mergedState);
          setImportStatus({ success: true, message: 'Progress successfully restored & merged! 🎉' });
        } else {
          setImportStatus({ success: false, message: res.error || 'Failed to read backup file.' });
        }
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const getBadgeIcon = (iconName) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-5 h-5 text-amber-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-yellow-400" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-pink-400" />;
      case 'Brain': return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'Award': return <Award className="w-5 h-5 text-emerald-400" />;
      case 'Trophy': return <Trophy className="w-5 h-5 text-indigo-400" />;
      case 'Crown': return <Crown className="w-5 h-5 text-amber-400" />;
      case 'Repeat': return <Repeat className="w-5 h-5 text-rose-400" />;
      default: return <Award className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Player Header Card */}
      <div className="relative rounded-3xl p-6 sm:p-8 bg-slate-900 border border-slate-800 shadow-2xl flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 flex-shrink-0">
            <Trophy className="w-10 h-10" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${levelInfo.badgeColor}`}>
                Level {levelInfo.level}
              </span>
              <span className="text-xs text-slate-500 font-mono">
                {state.xp} Total XP
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
              {levelInfo.name}
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Real-Life Java Loops Arena Progress
            </p>
          </div>
        </div>

        {/* Level Progression Bar */}
        <div className="w-full md:w-72 space-y-2 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">Next Rank:</span>
            <span className="font-mono text-slate-200 font-semibold">
              {levelInfo.nextLevel ? `${levelInfo.nextLevel.name} (${levelInfo.nextLevel.minXP} XP)` : 'Max Level!'}
            </span>
          </div>
          <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
              style={{ width: `${levelInfo.progressPercent}%` }}
            />
          </div>
          <div className="text-right text-[11px] font-mono text-slate-500">
            {levelInfo.progressPercent}% Completed
          </div>
        </div>
      </div>

      {/* Stats Breakdown Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Scenarios Solved</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <p className="text-2xl font-extrabold text-white font-mono">
            {state.completedChallenges.length} <span className="text-xs text-slate-500 font-normal">/ {totalPossibleChallenges}</span>
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Combo Streak</span>
            <Flame className="w-4 h-4 text-amber-400" />
          </div>
          <p className="text-2xl font-extrabold text-amber-400 font-mono">
            {state.streak} <span className="text-xs text-slate-500 font-normal">in a row</span>
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Best Combo</span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
          <p className="text-2xl font-extrabold text-purple-300 font-mono">
            {state.bestStreak}
          </p>
        </div>

        <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Daily Streak</span>
            <Calendar className="w-4 h-4 text-sky-400" />
          </div>
          <p className="text-2xl font-extrabold text-sky-300 font-mono">
            {state.dailyStreak} <span className="text-xs text-slate-500 font-normal">days</span>
          </p>
        </div>
      </div>

      {/* Badges Showcase */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">Trophies & Badges</h2>
            <p className="text-xs text-slate-400">Unlock trophies as you conquer scenarios and stages</p>
          </div>
          <span className="text-xs font-mono font-semibold text-purple-300 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
            {state.badges.length} / {BADGES_CONFIG.length} Unlocked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {BADGES_CONFIG.map((b) => {
            const isUnlocked = state.badges.includes(b.id);
            return (
              <div
                key={b.id}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  isUnlocked
                    ? 'bg-slate-900 border-indigo-500/30 shadow-md shadow-indigo-500/5'
                    : 'bg-slate-950/60 border-slate-800/80 opacity-50'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isUnlocked ? 'bg-slate-800 border border-slate-700' : 'bg-slate-900 text-slate-600'
                      }`}
                    >
                      {getBadgeIcon(b.icon)}
                    </div>
                    {isUnlocked && (
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    )}
                  </div>
                  <div>
                    <h3 className={`text-sm font-bold ${isUnlocked ? 'text-white' : 'text-slate-400'}`}>
                      {b.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {b.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                  {isUnlocked ? '✓ UNLOCKED' : 'LOCKED'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ranks & Thresholds Table */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white">Rank Hierarchy</h3>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs font-mono">
          {LEVELS.map((lvl) => {
            const isCurrent = lvl.level === levelInfo.level;
            return (
              <div
                key={lvl.level}
                className={`p-3 rounded-xl border text-center ${
                  isCurrent
                    ? 'bg-indigo-600/20 border-indigo-500 text-white font-bold ring-1 ring-indigo-500'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <div className="text-[10px] uppercase text-slate-500 mb-1">Level {lvl.level}</div>
                <div className={`font-semibold ${lvl.color}`}>{lvl.name}</div>
                <div className="text-slate-500 mt-1">{lvl.minXP}+ XP</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Backup & Restore Progress (Multi-Device & Version Safety) */}
      <div className="p-6 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <h4 className="text-sm font-bold text-indigo-300">Save & Backup Your Progress</h4>
            <span className="px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-[10px] font-mono font-semibold">
              Auto-Saved in Browser
            </span>
          </div>
          <p className="text-xs text-slate-400 mt-1 max-w-xl">
            Your progress automatically merges across all updates. You can also download a JSON backup or restore it onto another browser or computer anytime.
          </p>
          {importStatus && (
            <p className={`text-xs mt-2 font-semibold ${importStatus.success ? 'text-emerald-400' : 'text-rose-400'}`}>
              {importStatus.message}
            </p>
          )}
        </div>

        <div className="flex items-center gap-3 self-start sm:self-auto flex-shrink-0">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".json,application/json"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors shadow-sm"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Restore Backup</span>
          </button>

          <button
            onClick={handleExport}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Backup</span>
          </button>
        </div>
      </div>

      {/* Danger Zone: Reset Progress */}
      <div className="p-6 rounded-2xl bg-rose-950/10 border border-rose-500/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h4 className="text-sm font-bold text-rose-300">Reset Local Progress</h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Clear XP, streak, badges, and saved code from localStorage to restart from Stage 1.
          </p>
        </div>

        {showConfirmReset ? (
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                resetProgress();
                setShowConfirmReset(false);
              }}
              className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shadow-md transition-colors"
            >
              Yes, Reset Everything
            </button>
            <button
              onClick={() => setShowConfirmReset(false)}
              className="px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs transition-colors"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowConfirmReset(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 text-xs font-semibold border border-rose-500/30 transition-colors self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Progress</span>
          </button>
        )}
      </div>
    </div>
  );
}
