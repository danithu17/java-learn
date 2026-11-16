import React, { useState, useEffect } from 'react';
import {
  ArrowLeft, ArrowRight, Play, CheckCircle2, XCircle, Lock, Trophy,
  Flame, Crown, Sparkles, BookOpen, HelpCircle, Eye, AlertCircle
} from 'lucide-react';
import { useGame } from '../context/GameContext.jsx';
import { CodeEditor } from '../components/CodeEditor.jsx';
import { ThinkFirstBox } from '../components/ThinkFirstBox.jsx';
import { SyntaxReminder } from '../components/SyntaxReminder.jsx';
import { HintAccordion } from '../components/HintAccordion.jsx';
import { ModelSolutionCard } from '../components/ModelSolutionCard.jsx';

export function ChallengeArena({ module, onBackToLessons }) {
  const { state, answerChallenge, recordHintUsed, isStageUnlocked } = useGame();

  const [activeStageId, setActiveStageId] = useState(1);
  const [currentChallengeId, setCurrentChallengeId] = useState(1);
  const [userCode, setUserCode] = useState('');
  const [evalResult, setEvalResult] = useState(null);

  // Filter challenges for the active stage
  const stage = module.stages.find(s => s.id === activeStageId) || module.stages[0];
  const stageChallenges = module.challenges.filter(c => c.stageId === activeStageId);
  const challenge = module.challenges.find(c => c.id === currentChallengeId) || stageChallenges[0];

  const isUnlocked = isStageUnlocked(activeStageId);
  const isCompleted = state.completedChallenges.includes(challenge.id);
  const hintsRevealed = state.hintsUsed[challenge.id] || 0;

  // Load saved code draft or default starterCode when challenge changes
  useEffect(() => {
    const saved = state.savedCode[challenge.id];
    setUserCode(saved !== undefined ? saved : challenge.starterCode);
    setEvalResult(null);
  }, [challenge.id]);

  const handleRunCode = () => {
    const res = answerChallenge(challenge, userCode, hintsRevealed);
    setEvalResult(res);
  };

  const handleResetCode = () => {
    setUserCode(challenge.starterCode);
    setEvalResult(null);
  };

  const handleNextChallenge = () => {
    if (currentChallengeId < module.challenges.length) {
      const nextId = currentChallengeId + 1;
      const nextChallenge = module.challenges.find(c => c.id === nextId);
      if (nextChallenge) {
        if (nextChallenge.stageId !== activeStageId) {
          if (isStageUnlocked(nextChallenge.stageId)) {
            setActiveStageId(nextChallenge.stageId);
          }
        }
        setCurrentChallengeId(nextId);
        setEvalResult(null);
      }
    }
  };

  const handlePrevChallenge = () => {
    if (currentChallengeId > 1) {
      const prevId = currentChallengeId - 1;
      const prevChallenge = module.challenges.find(c => c.id === prevId);
      if (prevChallenge) {
        if (prevChallenge.stageId !== activeStageId) {
          setActiveStageId(prevChallenge.stageId);
        }
        setCurrentChallengeId(prevId);
        setEvalResult(null);
      }
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Stage Selector Ribbon */}
      <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
        <div className="flex items-center justify-between text-xs text-slate-400">
          <span className="font-semibold uppercase tracking-wider">Select Stage:</span>
          <span>Stages unlock sequentially</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {module.stages.map((stg) => {
            const unlocked = isStageUnlocked(stg.id);
            const isActive = stg.id === activeStageId;
            const completedCountInStage = module.challenges
              .filter(c => c.stageId === stg.id && state.completedChallenges.includes(c.id)).length;

            return (
              <button
                key={stg.id}
                onClick={() => {
                  if (unlocked) {
                    setActiveStageId(stg.id);
                    const firstInStage = module.challenges.find(c => c.stageId === stg.id);
                    if (firstInStage) setCurrentChallengeId(firstInStage.id);
                  }
                }}
                disabled={!unlocked}
                className={`p-3 rounded-xl border text-left transition-all relative ${
                  isActive
                    ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-lg shadow-indigo-500/10 ring-1 ring-indigo-500'
                    : unlocked
                    ? 'bg-slate-950/70 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-800/50'
                    : 'bg-slate-950/40 border-slate-900 text-slate-600 cursor-not-allowed'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-400">
                    Stage {stg.id}
                  </span>
                  {!unlocked ? (
                    <Lock className="w-3 h-3 text-slate-600" />
                  ) : completedCountInStage === 10 ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <span className="text-[10px] font-mono text-indigo-400">{completedCountInStage}/10</span>
                  )}
                </div>
                <div className="text-xs font-bold truncate">
                  {stg.title.replace(/^Stage \d+:\s*/, '')}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* If current stage is locked */}
      {!isUnlocked ? (
        <div className="p-12 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-800 flex items-center justify-center text-slate-500">
            <Lock className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-white">Stage {activeStageId} is Locked!</h3>
          <p className="text-sm text-slate-400 max-w-md mx-auto">
            You must complete all 10 challenges in Stage {activeStageId - 1} first to unlock this stage.
          </p>
          <button
            onClick={() => {
              setActiveStageId(activeStageId - 1);
              const target = module.challenges.find(c => c.stageId === activeStageId - 1);
              if (target) setCurrentChallengeId(target.id);
            }}
            className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold"
          >
            Go Back to Stage {activeStageId - 1}
          </button>
        </div>
      ) : (
        /* Unlocked Stage Content */
        <div className="space-y-6">
          {/* Challenge Selector Strip for current stage */}
          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-900 border border-slate-800 overflow-x-auto gap-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-2 hidden sm:inline">
                Challenges:
              </span>
              {stageChallenges.map((c) => {
                const isSelected = c.id === currentChallengeId;
                const isDone = state.completedChallenges.includes(c.id);

                return (
                  <button
                    key={c.id}
                    onClick={() => {
                      setCurrentChallengeId(c.id);
                      setEvalResult(null);
                    }}
                    className={`h-9 px-3 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 ring-1 ring-indigo-400'
                        : isDone
                        ? 'bg-emerald-950/40 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-900/40'
                        : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200'
                    }`}
                  >
                    {c.isBoss && <Crown className="w-3.5 h-3.5 text-amber-400" />}
                    <span>#{c.id}</span>
                    {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                  </button>
                );
              })}
            </div>

            <span className="text-xs font-mono text-slate-400 hidden md:block">
              Challenge {challenge.id} of {module.challenges.length}
            </span>
          </div>

          {/* MAIN SCENARIO SCREEN */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl space-y-6">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-xl bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold border border-indigo-500/30">
                  Scenario #{challenge.id}
                </span>
                {challenge.isBoss ? (
                  <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold flex items-center gap-1 border border-amber-500/30">
                    <Crown className="w-3.5 h-3.5 fill-amber-400" />
                    Stage Boss Challenge
                  </span>
                ) : (
                  <span className="text-xs text-slate-400 font-medium">
                    {stage.title}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-amber-400 flex items-center gap-1">
                  <Trophy className="w-3.5 h-3.5" /> +{challenge.xpReward} XP
                </span>
                {isCompleted && (
                  <span className="text-xs text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-4 h-4" /> Solved
                  </span>
                )}
              </div>
            </div>

            {/* 1. The Real-Life Scenario Story */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-indigo-950/40 to-slate-900 border border-indigo-500/30 space-y-2">
              <div className="text-xs uppercase font-mono font-bold tracking-wider text-indigo-400">
                📖 Scenario Story
              </div>
              <h3 className="text-lg font-bold text-white">{challenge.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {challenge.scenario}
              </p>
            </div>

            {/* 2. Specific Coding Task */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-sm space-y-1">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block">
                🎯 Your Task:
              </span>
              <p className="text-slate-200 leading-relaxed">{challenge.task}</p>
            </div>

            {/* 3. Sample Expected Output */}
            <div className="space-y-1.5">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                💻 Expected Console Output:
              </span>
              <pre className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-400 leading-relaxed overflow-x-auto whitespace-pre">
                {challenge.sampleOutput}
              </pre>
            </div>

            {/* 4. Think First Box (Plain English steps) */}
            <ThinkFirstBox steps={challenge.thinkFirst} defaultOpen={false} />

            {/* 5. Syntax Reminder Box (For loop skeleton) */}
            <SyntaxReminder skeleton={challenge.syntaxReminder} defaultOpen={false} />

            {/* 6. Code Editor */}
            <div className="space-y-2">
              <CodeEditor
                code={userCode}
                onChange={setUserCode}
                onReset={handleResetCode}
              />
            </div>

            {/* 7. Run Button */}
            <div>
              <button
                type="button"
                onClick={handleRunCode}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold text-sm shadow-xl shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Run Code & Verify Output</span>
              </button>
            </div>

            {/* 8. Execution Result & Comparison Diff */}
            {evalResult && (
              <div
                className={`p-6 rounded-2xl border space-y-4 animate-fadeIn ${
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
                      {evalResult.passed ? 'PASS! Scenario Solved! 🎉' : 'FAIL - Output Did Not Match'}
                    </h4>
                    {evalResult.passed ? (
                      <p className="text-xs text-slate-300">
                        +{evalResult.earnedXP} XP Earned!{' '}
                        {evalResult.noHintBonus > 0 && '(🧠 Pure Logic Bonus +10 XP!) '}{' '}
                        {evalResult.streakBonus > 0 && `(🔥 Streak Bonus +${evalResult.streakBonus} XP!)`}
                      </p>
                    ) : (
                      <p className="text-xs text-rose-200">{evalResult.error}</p>
                    )}
                  </div>
                </div>

                {/* Diff Viewer (Expected vs Your Output) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs pt-2">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 block mb-1">Expected Output:</span>
                    <pre className="text-emerald-400 whitespace-pre overflow-x-auto max-h-48">
                      {evalResult.expectedOutput || '(Empty)'}
                    </pre>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-slate-500 block mb-1">Your Console Output:</span>
                    <pre
                      className={`whitespace-pre overflow-x-auto max-h-48 ${
                        evalResult.passed ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {evalResult.userOutput || '(Nothing printed. Did you use System.out.println?)'}
                    </pre>
                  </div>
                </div>
              </div>
            )}

            {/* 9. Hints System (3 Progressive Hints) */}
            <HintAccordion
              hints={challenge.hints}
              revealedCount={hintsRevealed}
              onRevealHint={() => recordHintUsed(challenge.id)}
            />

            {/* 10. Model Solution & Line-by-Line Breakdown (Shown after passing) */}
            {isCompleted && (
              <ModelSolutionCard
                solution={challenge.modelSolution}
                explanation={challenge.explanation}
              />
            )}

            {/* Bottom Nav Bar */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <button
                disabled={currentChallengeId === 1}
                onClick={handlePrevChallenge}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 text-xs sm:text-sm font-medium transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Previous Scenario</span>
              </button>

              <button
                disabled={currentChallengeId === module.challenges.length}
                onClick={handleNextChallenge}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:opacity-30 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-indigo-500/20"
              >
                <span>Next Scenario</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
