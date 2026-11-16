import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Play, RotateCcw, CheckCircle, Code, Lightbulb, Zap } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock.jsx';

export function LessonViewer({ module, onStartChallenges }) {
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

  // Stepper state for Lesson 3
  const [stepperIndex, setStepperIndex] = useState(0);

  const lesson = module.lessons[currentLessonIndex];
  const isLastLesson = currentLessonIndex === module.lessons.length - 1;

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Lesson Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-slate-800">
        {module.lessons.map((l, idx) => {
          const isActive = idx === currentLessonIndex;
          return (
            <button
              key={l.id}
              onClick={() => {
                setCurrentLessonIndex(idx);
                setStepperIndex(0);
              }}
              className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all flex items-center gap-2 ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20 font-semibold'
                  : 'bg-slate-900 text-slate-400 hover:bg-slate-800 hover:text-slate-200'
              }`}
            >
              <span className="w-5 h-5 rounded-full bg-black/20 flex items-center justify-center text-[10px] font-bold">
                {idx + 1}
              </span>
              <span>Lesson {idx + 1}</span>
            </button>
          );
        })}
      </div>

      {/* Lesson Header */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          <span className="px-2.5 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-xs font-mono font-semibold">
            {lesson.duration}
          </span>
          <span className="text-xs text-slate-500 font-mono">
            Lesson {currentLessonIndex + 1} of {module.lessons.length}
          </span>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">{lesson.title}</h2>
        <p className="text-sm text-slate-300">{lesson.summary}</p>
      </div>

      {/* Special Component for Lesson 2: Color-highlighted Anatomy */}
      {lesson.anatomyHighlight && (
        <div className="p-6 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            Interactive Loop Anatomy Breakdown
          </h3>

          <div className="p-4 rounded-xl bg-slate-950 font-mono text-base sm:text-lg border border-slate-800 flex flex-wrap items-center gap-2">
            <span className="text-purple-400 font-bold">for</span>
            <span className="text-slate-400">(</span>
            <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" title="Initialization">
              {lesson.anatomyHighlight.init}
            </span>
            <span className="text-slate-400">;</span>
            <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-400 border border-sky-500/30" title="Condition">
              {lesson.anatomyHighlight.condition}
            </span>
            <span className="text-slate-400">;</span>
            <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30" title="Update">
              {lesson.anatomyHighlight.update}
            </span>
            <span className="text-slate-400">) &#123;</span>
            <div className="w-full pl-6 py-1">
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30" title="Loop Body">
                {lesson.anatomyHighlight.body}
              </span>
            </div>
            <span className="text-slate-400">&#125;</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 text-emerald-300">
              <strong className="block text-emerald-400 mb-1">🟢 1. Initialization</strong>
              Runs ONCE before anything else. Sets starting number.
            </div>
            <div className="p-3 rounded-xl bg-sky-950/20 border border-sky-500/30 text-sky-300">
              <strong className="block text-sky-400 mb-1">🔵 2. Condition</strong>
              Checked BEFORE every round. True = enter; False = stop.
            </div>
            <div className="p-3 rounded-xl bg-purple-950/20 border border-purple-500/30 text-purple-300">
              <strong className="block text-purple-300 mb-1">🟣 3. Update</strong>
              Runs at the END of each round to step the counter.
            </div>
          </div>
        </div>
      )}

      {/* Special Component for Lesson 3: Animated Step-Through Visualizer */}
      {lesson.interactiveStepper && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-indigo-500/40 shadow-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-indigo-300 flex items-center gap-2">
              <Play className="w-4 h-4 text-indigo-400 fill-indigo-400" />
              Live Loop Step Visualizer
            </h3>
            <button
              onClick={() => setStepperIndex(0)}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Steps</span>
            </button>
          </div>

          <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-sm text-slate-300">
            <code>for (int i = 1; i &lt;= 3; i++) &#123; System.out.println(i); &#125;</code>
          </div>

          {/* Stepper Display Card */}
          {(() => {
            const curStep = lesson.interactiveStepper.steps[stepperIndex];
            return (
              <div className="p-5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-indigo-400 uppercase tracking-wider">
                    Execution Round {curStep.round} of {lesson.interactiveStepper.steps.length}
                  </span>
                  <span className="font-mono text-slate-400">
                    Step {stepperIndex + 1}/{lesson.interactiveStepper.steps.length}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 block mb-1">Value of i:</span>
                    <span className="text-base font-bold text-amber-400">i = {curStep.iVal}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 block mb-1">Condition Check:</span>
                    <span className={`text-sm font-bold ${curStep.condition.includes('TRUE') ? 'text-emerald-400' : 'text-rose-400'}`}>
                      {curStep.condition}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800">
                    <span className="text-slate-500 block mb-1">Console Output:</span>
                    <span className="text-sm text-cyan-300">
                      [{curStep.printed.join(', ')}]
                    </span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200">
                  <strong>What Java is doing right now:</strong> {curStep.action}
                </div>

                {/* Step Controls */}
                <div className="flex items-center justify-between pt-2">
                  <button
                    disabled={stepperIndex === 0}
                    onClick={() => setStepperIndex(prev => prev - 1)}
                    className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs text-slate-200 transition-colors"
                  >
                    Previous Step
                  </button>
                  <button
                    disabled={stepperIndex === lesson.interactiveStepper.steps.length - 1}
                    onClick={() => setStepperIndex(prev => prev + 1)}
                    className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-xs font-semibold text-white transition-colors"
                  >
                    Next Step ➔
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* Main Lesson Prose Content */}
      <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4">
        {lesson.content.split('\n\n').map((paragraph, idx) => {
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={idx} className="text-lg font-bold text-white mt-4 mb-2">
                {paragraph.replace('### ', '')}
              </h3>
            );
          }
          if (paragraph.startsWith('```java')) {
            const code = paragraph.replace(/```java\n?/, '').replace(/```$/, '');
            return <CodeBlock key={idx} code={code} />;
          }
          if (paragraph.startsWith('> ')) {
            return (
              <div key={idx} className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 text-indigo-200 text-xs my-3">
                {paragraph.replace('> ', '')}
              </div>
            );
          }
          return <p key={idx} className="leading-relaxed">{paragraph}</p>;
        })}
      </div>

      {/* Interactive snippet if provided */}
      {lesson.interactiveSnippet && (
        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
          <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
            <Code className="w-4 h-4 text-emerald-400" />
            {lesson.interactiveSnippet.title}
          </h4>
          <CodeBlock code={lesson.interactiveSnippet.code} />
          <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300">
            <span className="text-slate-500 block mb-1">Expected Output:</span>
            <pre className="whitespace-pre-wrap">{lesson.interactiveSnippet.output}</pre>
          </div>
        </div>
      )}

      {/* Navigation Footer */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <button
          disabled={currentLessonIndex === 0}
          onClick={() => {
            setCurrentLessonIndex(prev => prev - 1);
            setStepperIndex(0);
          }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 text-slate-300 text-xs sm:text-sm font-medium transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Previous Lesson</span>
        </button>

        {isLastLesson ? (
          <button
            onClick={onStartChallenges}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-emerald-500/20 transition-all"
          >
            <span>Start 25 Challenges Arena</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            onClick={() => {
              setCurrentLessonIndex(prev => prev + 1);
              setStepperIndex(0);
            }}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-indigo-500/20 transition-all"
          >
            <span>Next Lesson</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
