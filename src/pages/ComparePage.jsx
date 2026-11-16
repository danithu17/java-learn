import React, { useState } from 'react';
import { GitCompare, CheckCircle2, Play, ArrowRight, Sparkles, HelpCircle, AlertCircle } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock.jsx';

export function ComparePage({ onGoToModule }) {
  const [selectedExample, setSelectedExample] = useState('counting');

  const comparisonData = {
    counting: {
      title: 'Example 1: Print Numbers 1 to 5',
      scenario: 'Counting up when the exact number of iterations is known before starting.',
      recommendation: 'Use FOR loop (most concise, all loop controls in one line).',
      forCode: `// 1. FOR LOOP (Recommended)
for (int i = 1; i <= 5; i++) {
    System.out.println("Item: " + i);
}`,
      whileCode: `// 2. WHILE LOOP
int i = 1; // 1. Init outside
while (i <= 5) { // 2. Pre-test condition
    System.out.println("Item: " + i);
    i++; // 3. Update inside body
}`,
      doWhileCode: `// 3. DO-WHILE LOOP
int i = 1; // 1. Init outside
do {
    System.out.println("Item: " + i);
    i++; // 2. Update inside body
} while (i <= 5); // 3. Post-test condition + semicolon ;`,
      differences: [
        { feature: 'Where is update placed?', for: 'In header (i++)', while: 'Inside body', doWhile: 'Inside body' },
        { feature: 'Can run 0 times?', for: 'Yes (if condition false)', while: 'Yes (if condition false)', doWhile: 'NO! Runs at least 1 time' },
        { feature: 'Best for', for: 'Known iteration counts', while: 'Dynamic stop conditions', doWhile: 'Menus & input prompts' },
      ]
    },

    sentinel: {
      title: 'Example 2: Reading Numbers Until 0',
      scenario: 'Summing amounts entered by a user until they enter 0 to stop.',
      recommendation: 'Use WHILE loop (clean sentinel pattern).',
      forCode: `// 1. FOR LOOP (Unconventional for sentinels)
Scanner input = new Scanner(System.in);
int sum = 0;
for (int num = input.nextInt(); num != 0; num = input.nextInt()) {
    sum += num;
}`,
      whileCode: `// 2. WHILE LOOP (Recommended)
Scanner input = new Scanner(System.in);
int sum = 0;
int num = input.nextInt();
while (num != 0) {
    sum += num;
    num = input.nextInt();
}`,
      doWhileCode: `// 3. DO-WHILE LOOP
Scanner input = new Scanner(System.in);
int sum = 0;
int num;
do {
    num = input.nextInt();
    sum += num;
} while (num != 0);`,
      differences: [
        { feature: 'Input prompt', for: 'Inside header update', while: 'Before loop + inside body', doWhile: 'Inside body only' },
        { feature: 'Execution count', for: '0 if first input is 0', while: '0 if first input is 0', doWhile: '1 minimum (checks 0 after reading)' },
        { feature: 'Readability', for: 'Awkward header', while: 'Clean & standard', doWhile: 'Good for single prompt' }
      ]
    },

    menu: {
      title: 'Example 3: ATM / Game Menu Prompt',
      scenario: 'Displaying a menu to the customer at least once, then repeating while choice != 0.',
      recommendation: 'Use DO-WHILE loop (guaranteed first display without duplicating code).',
      forCode: `// 1. FOR LOOP (Not natural for menus)
Scanner input = new Scanner(System.in);
int choice;
for (;;) {
    System.out.println("1. Deposit  0. Exit");
    choice = input.nextInt();
    if (choice == 0) break;
}`,
      whileCode: `// 2. WHILE LOOP (Requires initial dummy value)
Scanner input = new Scanner(System.in);
int choice = -1; // Must force condition true!
while (choice != 0) {
    System.out.println("1. Deposit  0. Exit");
    choice = input.nextInt();
}`,
      doWhileCode: `// 3. DO-WHILE LOOP (Recommended)
Scanner input = new Scanner(System.in);
int choice;
do {
    System.out.println("1. Deposit  0. Exit");
    choice = input.nextInt();
} while (choice != 0); // Guaranteed first display!`,
      differences: [
        { feature: 'First display', for: 'Infinite loop + break', while: 'Requires dummy choice = -1', doWhile: 'Natural! Guaranteed at least once' },
        { feature: 'Code duplication', for: 'None', while: 'Must initialize dummy value', doWhile: 'Zero duplicate prompts' },
        { feature: 'Trailing semicolon', for: 'No', while: 'No', doWhile: 'MANDATORY (while (c != 0);)' }
      ]
    }
  };

  const current = comparisonData[selectedExample];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 flex-shrink-0">
            <GitCompare className="w-7 h-7" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400">
              Interactive Deep Dive
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">
              Loop Showdown: For vs While vs Do-While
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Understand the golden rules of when to choose which loop in Java. Compare the exact same real-life problems implemented all three ways side-by-side.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 mt-6 pt-6 border-t border-slate-800/80 overflow-x-auto">
          <button
            onClick={() => setSelectedExample('counting')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedExample === 'counting'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            1. Definite Counting (1 to 5)
          </button>
          <button
            onClick={() => setSelectedExample('sentinel')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedExample === 'sentinel'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            2. Sentinel Loop (Read until 0)
          </button>
          <button
            onClick={() => setSelectedExample('menu')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              selectedExample === 'menu'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            3. Menu Prompt (1 Run Minimum)
          </button>
        </div>
      </div>

      {/* Golden Rule Callout */}
      <div className="p-4 rounded-2xl bg-indigo-950/20 border border-indigo-500/30 flex items-center gap-3 text-xs sm:text-sm">
        <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0" />
        <span className="text-slate-300">
          <strong className="text-white">Verdict for this scenario: </strong>
          {current.recommendation}
        </span>
      </div>

      {/* Side-by-Side Code Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* For Loop Card */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between overflow-hidden">
          <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold font-mono text-indigo-300">for (init; cond; update)</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
              Pre-Test
            </span>
          </div>
          <div className="p-4 flex-1">
            <CodeBlock code={current.forCode} language="java" />
          </div>
          <div className="p-4 bg-slate-950/40 border-t border-slate-800/60 text-xs text-slate-400">
            Compact header structure. Ideal when number of rounds is known upfront.
          </div>
        </div>

        {/* While Loop Card */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between overflow-hidden">
          <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold font-mono text-sky-300">while (condition)</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-sky-500/10 text-sky-300 border border-sky-500/20">
              Pre-Test
            </span>
          </div>
          <div className="p-4 flex-1">
            <CodeBlock code={current.whileCode} language="java" />
          </div>
          <div className="p-4 bg-slate-950/40 border-t border-slate-800/60 text-xs text-slate-400">
            Checks condition BEFORE running. Perfect for digit slicing & dynamic criteria.
          </div>
        </div>

        {/* Do-While Loop Card */}
        <div className="rounded-2xl bg-slate-900 border border-slate-800 flex flex-col justify-between overflow-hidden">
          <div className="p-4 bg-slate-950/80 border-b border-slate-800 flex items-center justify-between">
            <span className="text-xs font-bold font-mono text-purple-300">do {`{...}`} while (cond);</span>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20">
              Post-Test
            </span>
          </div>
          <div className="p-4 flex-1">
            <CodeBlock code={current.doWhileCode} language="java" />
          </div>
          <div className="p-4 bg-slate-950/40 border-t border-slate-800/60 text-xs text-slate-400">
            Executes FIRST, then checks condition. Guaranteed at least 1 iteration!
          </div>
        </div>
      </div>

      {/* Feature Breakdown Table */}
      <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <span>Key Differences Summary</span>
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 font-mono">
                <th className="py-2.5 px-3">Feature</th>
                <th className="py-2.5 px-3 text-indigo-300">For Loop</th>
                <th className="py-2.5 px-3 text-sky-300">While Loop</th>
                <th className="py-2.5 px-3 text-purple-300">Do-While Loop</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300 font-sans">
              {current.differences.map((diff, i) => (
                <tr key={i} className="hover:bg-slate-950/40">
                  <td className="py-3 px-3 font-medium text-white">{diff.feature}</td>
                  <td className="py-3 px-3 text-indigo-200">{diff.for}</td>
                  <td className="py-3 px-3 text-sky-200">{diff.while}</td>
                  <td className="py-3 px-3 text-purple-200">{diff.doWhile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
