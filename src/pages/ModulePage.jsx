import React, { useState } from 'react';
import { BookOpen, Swords, ArrowLeft, Trophy, Crown } from 'lucide-react';
import { getModuleById } from '../modules/index.js';
import { LessonViewer } from './LessonViewer.jsx';
import { ChallengeArena } from './ChallengeArena.jsx';
import { useGame } from '../context/GameContext.jsx';

export function ModulePage({ moduleId, initialChallengeId = null, onBack }) {
  const [subTab, setSubTab] = useState('challenges'); // default to 'challenges'
  const { state } = useGame();

  const module = getModuleById(moduleId);

  if (!module) {
    return (
      <div className="max-w-4xl mx-auto py-12 text-center space-y-4">
        <p className="text-slate-400">Module not found.</p>
        <button
          onClick={onBack}
          className="px-4 py-2 rounded-xl bg-slate-800 text-slate-200"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const completedInModule = module.challenges.filter(c => state.completedChallenges.includes(c.id)).length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Module Title & Subtab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <button
            onClick={onBack}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-800"
            title="Back to Modules"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                {module.title}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-mono font-bold">
                {completedInModule}/{module.challenges.length} Scenarios Solved
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">{module.description}</p>
          </div>
        </div>

        {/* Tab switch buttons */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setSubTab('challenges')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              subTab === 'challenges'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Swords className="w-3.5 h-3.5" />
            <span>Scenarios ({module.challenges.length})</span>
          </button>

          <button
            onClick={() => setSubTab('lessons')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold transition-all ${
              subTab === 'lessons'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Learn Concepts ({module.lessons.length})</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {subTab === 'lessons' ? (
        <LessonViewer
          module={module}
          onStartChallenges={() => setSubTab('challenges')}
        />
      ) : (
        <ChallengeArena
          module={module}
          initialChallengeId={initialChallengeId}
          onBackToLessons={() => setSubTab('lessons')}
        />
      )}
    </div>
  );
}
