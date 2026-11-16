import React, { useState, useEffect } from 'react';
import { Repeat, Brain, Sparkles, CheckCircle2, ArrowRight, Play, Trophy } from 'lucide-react';
import { useGame } from '../context/GameContext.jsx';
import { forLoopModule } from '../modules/forLoop.js';
import { QuestionCard } from '../components/QuestionCard.jsx';
import { ThinkFirstBox } from '../components/ThinkFirstBox.jsx';
import { SyntaxReminder } from '../components/SyntaxReminder.jsx';

export function ReviewMode({ onGoToChallenges }) {
  const { state, answerChallenge, recordReviewCompleted } = useGame();
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [reviewCountThisSession, setReviewCountThisSession] = useState(0);

  const completedIds = state.completedChallenges;

  // Pick a random completed challenge
  const pickRandomChallenge = () => {
    if (completedIds.length === 0) return;
    const randomId = completedIds[Math.floor(Math.random() * completedIds.length)];
    const found = forLoopModule.challenges.find(c => c.id === randomId);
    setCurrentChallenge(found || forLoopModule.challenges[0]);
    setFeedback(null);
  };

  useEffect(() => {
    if (completedIds.length > 0 && !currentChallenge) {
      pickRandomChallenge();
    }
  }, [completedIds]);

  const handleReviewAnswer = (isCorrect) => {
    if (isCorrect) {
      recordReviewCompleted();
      setReviewCountThisSession(prev => prev + 1);
      setFeedback({
        passed: true,
        message: 'Spot on! Your loop memory is strengthening. +15 Review XP awarded!',
      });
    } else {
      setFeedback({
        passed: false,
        message: 'Memory slip? No worries! That is exactly why we review. Check the think-first steps below.',
      });
    }
  };

  if (completedIds.length === 0) {
    return (
      <div className="max-w-2xl mx-auto py-16 px-4 text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
          <Brain className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-white">Review Mode is Empty</h2>
        <p className="text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
          Review mode quizzes you on challenges you have <strong>already passed</strong> so the syntax sticks into your permanent muscle memory.
        </p>
        <button
          onClick={onGoToChallenges}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 flex items-center gap-2 mx-auto transition-all"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Solve Your First Challenge</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Review Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 to-slate-900 border border-purple-500/30 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
            <Repeat className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">Memory Review Arena</h2>
              <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-semibold">
                {completedIds.length} in Pool
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Testing your recall on previously solved questions.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            Session Score: <strong className="text-emerald-400 font-mono">{reviewCountThisSession}</strong>
          </div>
          <button
            onClick={pickRandomChallenge}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all shadow-md shadow-purple-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Random Question</span>
          </button>
        </div>
      </div>

      {/* Review Question Arena */}
      {currentChallenge && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold">
                Reviewing Challenge #{currentChallenge.id}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                {currentChallenge.title}
              </span>
            </div>
            <span className="text-xs text-amber-400 font-mono flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" /> +15 XP
            </span>
          </div>

          <ThinkFirstBox steps={currentChallenge.thinkFirst} defaultOpen={false} />
          <SyntaxReminder skeleton={currentChallenge.syntaxReminder} defaultOpen={false} />

          <QuestionCard
            challenge={currentChallenge}
            onAnswer={handleReviewAnswer}
            feedback={feedback}
          />

          {feedback && feedback.passed && (
            <div className="pt-4 border-t border-slate-800 flex justify-end">
              <button
                onClick={pickRandomChallenge}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-semibold shadow-lg shadow-indigo-500/20 transition-all"
              >
                <span>Next Review Question</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
