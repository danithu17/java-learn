import React, { useState, useEffect } from 'react';
import { Repeat, Brain, Sparkles, CheckCircle2, XCircle, ArrowRight, Play, Trophy, Terminal } from 'lucide-react';
import { useGame } from '../context/GameContext.jsx';
import { forLoopModule } from '../modules/forLoop.js';
import { CodeEditor } from '../components/CodeEditor.jsx';
import { ThinkFirstBox } from '../components/ThinkFirstBox.jsx';
import { SyntaxReminder } from '../components/SyntaxReminder.jsx';
import { runJavaCode, normalizeOutput } from '../utils/javaRunner.js';

export function ReviewMode({ onGoToChallenges }) {
  const { state, recordReviewCompleted } = useGame();
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [userCode, setUserCode] = useState('');
  const [evalResult, setEvalResult] = useState(null);
  const [reviewCountThisSession, setReviewCountThisSession] = useState(0);

  const completedIds = state.completedChallenges;

  const pickRandomChallenge = () => {
    if (completedIds.length === 0) return;
    const randomId = completedIds[Math.floor(Math.random() * completedIds.length)];
    const found = forLoopModule.challenges.find(c => c.id === randomId);
    if (found) {
      setCurrentChallenge(found);
      // In review mode, start with fresh starter code for memory practice!
      setUserCode(found.starterCode);
      setEvalResult(null);
    }
  };

  useEffect(() => {
    if (completedIds.length > 0 && !currentChallenge) {
      pickRandomChallenge();
    }
  }, [completedIds]);

  const handleTestReviewCode = () => {
    if (!currentChallenge) return;

    const execution = runJavaCode(userCode);

    if (!execution.success) {
      setEvalResult({
        passed: false,
        error: execution.error,
        userOutput: execution.output,
        expectedOutput: currentChallenge.expectedOutput,
      });
      return;
    }

    if (!execution.hasForLoop) {
      setEvalResult({
        passed: false,
        error: 'Missing for loop! Make sure you write a for loop.',
        userOutput: execution.output,
        expectedOutput: currentChallenge.expectedOutput,
      });
      return;
    }

    const normActual = normalizeOutput(execution.output);
    const normExpected = normalizeOutput(currentChallenge.expectedOutput);

    if (normActual === normExpected) {
      recordReviewCompleted();
      setReviewCountThisSession(prev => prev + 1);
      setEvalResult({
        passed: true,
        userOutput: normActual,
        expectedOutput: normExpected,
      });
    } else {
      setEvalResult({
        passed: false,
        error: 'Output did not match expected output. Check your loop boundaries or print statements.',
        userOutput: normActual,
        expectedOutput: normExpected,
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
          Review mode tests your recall by giving you random scenarios you have <strong>already passed</strong> to rewrite from scratch without hints.
        </p>
        <button
          onClick={onGoToChallenges}
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 flex items-center gap-2 mx-auto transition-all"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Solve Your First Scenario</span>
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6">
      {/* Review Header Banner */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-950/40 to-slate-900 border border-purple-500/30 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
            <Repeat className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white">Memory Training Review</h2>
              <span className="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-xs font-mono font-semibold">
                {completedIds.length} in Pool
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-0.5">
              Rewrite the Java loop from scratch to build unbreakable syntax memory.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 self-end sm:self-auto">
          <div className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono">
            Session Score: <strong className="text-emerald-400">{reviewCountThisSession}</strong>
          </div>
          <button
            onClick={pickRandomChallenge}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold transition-all shadow-md shadow-purple-500/20"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Random Scenario</span>
          </button>
        </div>
      </div>

      {/* Review Arena Card */}
      {currentChallenge && (
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <span className="px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold">
              Reviewing Scenario #{currentChallenge.id}
            </span>
            <span className="text-xs text-amber-400 font-mono flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" /> +25 Review XP
            </span>
          </div>

          {/* Scenario Info */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
            <h3 className="text-base font-bold text-white">{currentChallenge.title}</h3>
            <p className="text-xs text-slate-300 leading-relaxed">{currentChallenge.scenario}</p>
            <div className="pt-2 text-xs text-indigo-300 font-mono">
              <strong>Task:</strong> {currentChallenge.task}
            </div>
          </div>

          {/* Optional Syntax Reminder (closed by default) */}
          <SyntaxReminder skeleton={currentChallenge.syntaxReminder} defaultOpen={false} />

          {/* Code Editor */}
          <CodeEditor
            code={userCode}
            onChange={setUserCode}
            onReset={() => setUserCode(currentChallenge.starterCode)}
            title="Rewrite Java Loop From Memory"
          />

          {/* Test Button */}
          <button
            type="button"
            onClick={handleTestReviewCode}
            className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-purple-500/25 flex items-center justify-center gap-2 transition-all"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Test My Recall</span>
          </button>

          {/* Feedback */}
          {evalResult && (
            <div
              className={`p-6 rounded-2xl border space-y-3 animate-fadeIn ${
                evalResult.passed
                  ? 'bg-emerald-950/30 border-emerald-500/40 text-emerald-300'
                  : 'bg-rose-950/30 border-rose-500/40 text-rose-300'
              }`}
            >
              <div className="flex items-center gap-2">
                {evalResult.passed ? (
                  <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                ) : (
                  <XCircle className="w-6 h-6 text-rose-400" />
                )}
                <div>
                  <h4 className="text-base font-bold">
                    {evalResult.passed ? 'Memory Verified! Correct! 🎉' : 'Needs a quick fix.'}
                  </h4>
                  {evalResult.passed ? (
                    <p className="text-xs text-slate-300">+25 Review XP Earned!</p>
                  ) : (
                    <p className="text-xs text-rose-200">{evalResult.error}</p>
                  )}
                </div>
              </div>

              {evalResult.passed && (
                <div className="pt-3 border-t border-emerald-500/20 flex justify-end">
                  <button
                    onClick={pickRandomChallenge}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-semibold shadow-md"
                  >
                    <span>Next Random Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
