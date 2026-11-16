import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowUp, ArrowDown, HelpCircle, Send, RotateCcw } from 'lucide-react';
import { CodeBlock } from './CodeBlock.jsx';

export function QuestionCard({ challenge, onAnswer, feedback }) {
  // Input states depending on question type
  const [selectedOption, setSelectedOption] = useState(null);
  const [blankAnswer, setBlankAnswer] = useState('');
  const [arrangedLines, setArrangedLines] = useState([]);
  const [traceInputs, setTraceInputs] = useState({});
  const [writtenCode, setWrittenCode] = useState('');

  // Reset inputs when challenge changes
  useEffect(() => {
    setSelectedOption(null);
    setBlankAnswer('');
    if (challenge.type === 'arrange' && challenge.scrambledLines) {
      setArrangedLines(challenge.scrambledLines.map((line, idx) => ({ id: idx, line })));
    }
    if (challenge.type === 'trace_table' && challenge.rounds) {
      const initial = {};
      challenge.rounds.forEach((_, idx) => { initial[idx] = ''; });
      setTraceInputs(initial);
    }
    if (challenge.type === 'write_code') {
      setWrittenCode(challenge.starterCode || '');
    }
  }, [challenge.id]);

  // Handlers for Arrange Lines
  const moveLine = (index, direction) => {
    const targetIndex = index + direction;
    if (targetIndex < 0 || targetIndex >= arrangedLines.length) return;
    const updated = [...arrangedLines];
    const temp = updated[index];
    updated[index] = updated[targetIndex];
    updated[targetIndex] = temp;
    setArrangedLines(updated);
  };

  // Submit Answer
  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    let isCorrect = false;

    if (challenge.type === 'predict' || challenge.type === 'bug_finder') {
      if (selectedOption === null) return;
      isCorrect = selectedOption === challenge.correctAnswer;
    } else if (challenge.type === 'fill_blank') {
      const normalizedUser = blankAnswer.trim().replace(/\s+/g, ' ');
      const acceptable = challenge.acceptableAnswers || [challenge.expectedAnswer];
      isCorrect = acceptable.some(
        ans => ans.trim().replace(/\s+/g, ' ') === normalizedUser
      );
    } else if (challenge.type === 'arrange') {
      const currentOrder = arrangedLines.map(item => item.id);
      isCorrect = currentOrder.every((val, idx) => val === challenge.correctOrder[idx]);
    } else if (challenge.type === 'trace_table') {
      isCorrect = challenge.rounds.every(
        (round, idx) => (traceInputs[idx] || '').trim() === round.answer.trim()
      );
    } else if (challenge.type === 'write_code') {
      const code = writtenCode.toLowerCase();
      // Check required keywords
      const allKeywordsPresent = (challenge.requiredKeywords || []).every(kw =>
        code.includes(kw.toLowerCase().replace(/\s+/g, '')) ||
        writtenCode.replace(/\s+/g, '').includes(kw.replace(/\s+/g, ''))
      );
      isCorrect = allKeywordsPresent;
    }

    onAnswer(isCorrect);
  };

  return (
    <div className="space-y-4">
      {/* Task Heading */}
      <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
        <h3 className="text-base font-semibold text-slate-100 mb-1">
          {challenge.title}
        </h3>
        <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-wrap">
          {challenge.task}
        </p>
      </div>

      {/* Code Display if question includes code */}
      {challenge.code && (
        <CodeBlock code={challenge.code} title="Java Code Snippet" />
      )}

      {/* Render interactive question based on type */}

      {/* 1. Predict the output / Bug Finder (Multiple Choice) */}
      {(challenge.type === 'predict' || challenge.type === 'bug_finder') && (
        <div className="space-y-2.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
            Choose the correct answer:
          </label>
          <div className="grid grid-cols-1 gap-2.5">
            {challenge.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSelectedOption(idx)}
                  className={`w-full p-3.5 rounded-xl border text-left text-sm transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-500/10'
                      : 'bg-slate-900/80 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                  }`}
                >
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold font-mono flex-shrink-0 ${
                      isSelected
                        ? 'bg-indigo-500 text-white'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="font-mono text-sm leading-relaxed">{option}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* 2. Fill in the blank */}
      {challenge.type === 'fill_blank' && (
        <div className="space-y-3">
          {challenge.codeTemplate && (
            <CodeBlock code={challenge.codeTemplate} title="Template" />
          )}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-1.5">
              Type the missing code for _______:
            </label>
            <input
              type="text"
              value={blankAnswer}
              onChange={(e) => setBlankAnswer(e.target.value)}
              placeholder="e.g. i <= 10"
              className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 font-mono text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            />
          </div>
        </div>
      )}

      {/* 3. Arrange the lines */}
      {challenge.type === 'arrange' && (
        <div className="space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
            Reorder these lines into proper execution order:
          </label>
          <div className="space-y-2">
            {arrangedLines.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all font-mono text-sm text-slate-200"
              >
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-800 text-slate-400 text-xs flex items-center justify-center font-bold">
                    {index + 1}
                  </span>
                  <span>{item.line}</span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={() => moveLine(index, -1)}
                    disabled={index === 0}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-300 transition-colors"
                    title="Move Up"
                  >
                    <ArrowUp className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => moveLine(index, 1)}
                    disabled={index === arrangedLines.length - 1}
                    className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:hover:bg-slate-800 text-slate-300 transition-colors"
                    title="Move Down"
                  >
                    <ArrowDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Trace table */}
      {challenge.type === 'trace_table' && (
        <div className="space-y-3">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
            Step-by-step Trace Table:
          </label>
          <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-950/80 text-xs uppercase text-slate-400 font-mono border-b border-slate-800">
                <tr>
                  <th className="px-4 py-3">Step / Round</th>
                  <th className="px-4 py-3">Your Answer Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {challenge.rounds.map((round, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30">
                    <td className="px-4 py-3 text-slate-300">{round.label}</td>
                    <td className="px-4 py-2">
                      <input
                        type="text"
                        value={traceInputs[idx] || ''}
                        onChange={(e) => {
                          const val = e.target.value;
                          setTraceInputs(prev => ({ ...prev, [idx]: val }));
                        }}
                        placeholder="Value..."
                        className="w-28 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-slate-100 text-sm focus:outline-none focus:border-indigo-500"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* 5. Write it yourself */}
      {challenge.type === 'write_code' && (
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Type your Java solution:
            </label>
            <button
              type="button"
              onClick={() => setWrittenCode(challenge.starterCode || '')}
              className="flex items-center gap-1 text-xs text-slate-400 hover:text-slate-200 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Template</span>
            </button>
          </div>
          <textarea
            rows={7}
            value={writtenCode}
            onChange={(e) => setWrittenCode(e.target.value)}
            spellCheck="false"
            className="w-full p-4 rounded-xl bg-slate-900 border border-slate-700 font-mono text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 leading-relaxed"
            placeholder="Type your Java loop here..."
          />
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={handleSubmit}
          className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-500 via-indigo-600 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
        >
          <Send className="w-4 h-4" />
          <span>Check My Answer</span>
        </button>
      </div>

      {/* Feedback Message */}
      {feedback && (
        <div
          className={`p-4 rounded-xl border flex items-start gap-3 animate-fadeIn ${
            feedback.passed
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
          }`}
        >
          {feedback.passed ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
          ) : (
            <XCircle className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
          )}
          <div className="text-sm">
            <p className="font-bold mb-0.5">
              {feedback.passed ? 'Excellent! Correct!' : 'Not quite right yet.'}
            </p>
            <p className="text-slate-300 leading-relaxed text-xs">
              {feedback.message}
            </p>
            {/* Show model answer if user got it right or on fail for write_code */}
            {challenge.modelAnswer && (
              <div className="mt-3">
                <span className="text-xs uppercase font-mono tracking-wider text-slate-400 block mb-1">
                  Model Solution:
                </span>
                <pre className="p-3 rounded-lg bg-slate-900 border border-slate-800 font-mono text-xs text-indigo-300 overflow-x-auto">
                  {challenge.modelAnswer}
                </pre>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
