import React from 'react';
import { Trophy, Star, ArrowRight } from 'lucide-react';

export function LevelUpModal({ isOpen, level, levelName, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-md p-6 bg-slate-900 border border-indigo-500/50 rounded-2xl shadow-2xl shadow-indigo-500/20 text-center animate-scaleUp">
        {/* Glowing badge */}
        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/50">
          <Trophy className="w-10 h-10 text-white animate-bounce-short" />
        </div>

        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2 border border-amber-500/30">
          <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
          <span>Level Up!</span>
        </div>

        <h2 className="text-2xl font-bold text-white mb-1">
          You are now Level {level}!
        </h2>
        <p className="text-lg font-semibold text-indigo-400 mb-3">
          {levelName}
        </p>

        <p className="text-sm text-slate-300 mb-6 leading-relaxed">
          Your code logic is leveling up! New challenges and deeper mastery are right ahead. Keep the momentum going!
        </p>

        <button
          onClick={onClose}
          className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2 transition-all"
        >
          <span>Continue Journey</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
