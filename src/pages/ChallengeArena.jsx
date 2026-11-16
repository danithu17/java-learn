import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, Trophy, Flame, RotateCcw, Sparkles } from 'lucide-react';
import { useGame } from '../context/GameContext.jsx';
import { ThinkFirstBox } from '../components/ThinkFirstBox.jsx';
import { SyntaxReminder } from '../components/SyntaxReminder.jsx';
import { HintAccordion } from '../components/HintAccordion.jsx';
import { QuestionCard } from '../components/QuestionCard.jsx';

export function ChallengeArena({ module, onBackToLessons }) {
  const { state, answerChallenge, recordHintUsed } = useGame();
  const [currentChallengeIndex, setCurrentChallengeIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);

  const challenge = module.challenges[currentChallengeIndex];
  const isCompleted = state.completedChallenges.includes(challenge.id);
  const hintsRevealed = state.hintsUsed[challenge.id] || 0;

  const handleRevealHint = () => {
    recordHintUsed(challenge.id);
  };

  const handleAnswerSubmit = (isCorrect) => {
    const result = answerChallenge(challenge, isCorrect, hintsRevealed);
    if (result.passed) {
      setFeedback({
        passed: true,
        message: `+${result.earnedXP} XP earned! ${
          result.streakBonus > 0 ? `(🔥 Streak bonus +${result.streakBonus} XP!)` : ''
        }`,
      });
    } else {
      setFeedback({
        passed: false,
        message: 'Review the Think First steps or reveal a hint to see the logic.',
      });
    }
  };

  const handleNextChallenge = () => {
    setFeedback(null);
    if (currentChallengeIndex < module.challenges.length - 1) {
      setCurrentChallengeIndex(prev => prev + 1);
    }
  };

  const handlePrevChallenge = () => {
    setFeedback(null);
    if (currentChallengeIndex > 0) {
      setCurrentChallengeIndex(prev => prev - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Top Header & Navigation */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
        <button
          onClick={onBackToLessons}
          className="flex items-center gap-2 text-xs font-medium text-slate-400 hover:text-slate-200 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Lessons</span>
        </button>

        {/* Progress pill */}
        <div className="flex items-center gap-3">
          <span className="text-xs text-slate-400">
            Solved: <strong className="text-indigo-400 font-mono">{state.completedChallenges.length}/25</strong>
          </span>
          <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-emerald-400 rounded-full transition-all duration-300"
              style={{ width: `${(state.completedChallenges.length / 25) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* 25 Challenge Number Grid Selector */}
      <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800">
        <div className="flex items-center justify-between mb-3 text-xs text-slate-400">
          <span className="font-semibold uppercase tracking-wider">Select Challenge:</span>
          <span>Click any number to jump</span>
        </div>
        <div className="grid grid-cols-5 sm:grid-cols-10 md:grid-cols-13 gap-1.5 sm:gap-2">
          {module.challenges.map((c, idx) => {
            const isDone = state.completedChallenges.includes(c.id);
            const isCurrent = idx === currentChallengeIndex;

            return (
              <button
                key={c.id}
                onClick={() => {
                  setCurrentChallengeIndex(idx);
                  setFeedback(null);
                }}
                className={`h-9 rounded-lg font-mono text-xs font-bold transition-all flex items-center justify-center relative ${
                  isCurrent
                    ? 'ring-2 ring-indigo-400 bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : isDone
                    ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/40'
                    : 'bg-slate-800/80 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
                }`}
                title={`Challenge #${c.id}: ${c.title}`}
              >
                {c.id}
                {isDone && !isCurrent && (
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Challenge Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
        {/* Challenge Header info */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30">
              Challenge #{challenge.id}
            </span>
            <span
              className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                challenge.difficulty === 'Easy'
                  ? 'bg-emerald-500/20 text-emerald-300'
                  : challenge.difficulty === 'Medium'
                  ? 'bg-amber-500/20 text-amber-300'
                  : 'bg-purple-500/20 text-purple-300'
              }`}
            >
              {challenge.difficulty}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5 text-amber-400" />
              <span>+{challenge.xpReward} XP</span>
            </span>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4" /> Solved
              </span>
            )}
          </div>
        </div>

        {/* 1. Think First Box (Plain English steps) */}
        <ThinkFirstBox steps={challenge.thinkFirst} defaultOpen={true} />

        {/* 2. Syntax Reminder Box */}
        <SyntaxReminder skeleton={challenge.syntaxReminder} defaultOpen={false} />

        {/* 3. Interactive Question Card */}
        <QuestionCard
          challenge={challenge}
          onAnswer={handleAnswerSubmit}
          feedback={feedback}
        />

        {/* 4. Tiered Hint System */}
        <HintAccordion
          hints={challenge.hints}
          revealedCount={hintsRevealed}
          onRevealHint={handleRevealHint}
        />

        {/* Navigation bottom bar */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            disabled={currentChallengeIndex === 0}
            onClick={handlePrevChallenge}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 text-xs sm:text-sm font-medium transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>

          <span className="text-xs font-mono text-slate-500">
            {currentChallengeIndex + 1} of {module.challenges.length}
          </span>

          <button
            disabled={currentChallengeIndex === module.challenges.length - 1}
            onClick={handleNextChallenge}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-indigo-500/20"
          >
            <span>Next Challenge</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
