/**
 * ============================================================================
 * IN-BROWSER JAVA SUBSET INTERPRETER & CHECKER
 * ============================================================================
 * Supports:
 * - Types: int, long, double, float, boolean, char, String, arrays
 * - Arithmetic, assignments, unary (++, --), compound (+=, -=, *=, /=)
 * - Conditionals: if, else if, else, ternary (?:)
 * - Loops: for, while, do-while
 * - Console output: System.out.println, System.out.print (with \b backspace support), System.out.printf
 * - Scanner input: Scanner input = new Scanner(System.in);
 *   Supports .nextInt(), .nextDouble(), .next(), .nextLine(), .hasNextInt(), .hasNext()
 * - Standard utilities: Math.max, Math.min, Math.pow, Math.abs, Integer.MAX_VALUE, Integer.MIN_VALUE
 * - Authentic javac compiler errors with caret pointers
 * - Infinite loop guard (10,000 iterations)
 * ============================================================================
 */

export class MockScanner {
  constructor(inputStr = '') {
    this.tokens = String(inputStr).trim().split(/\s+/).filter(Boolean);
    this.cursor = 0;
    this.lines = String(inputStr).split(/\r?\n/);
    this.lineCursor = 0;
  }
  nextInt() {
    if (this.cursor >= this.tokens.length) return 0;
    return parseInt(this.tokens[this.cursor++], 10) || 0;
  }
  nextDouble() {
    if (this.cursor >= this.tokens.length) return 0.0;
    return parseFloat(this.tokens[this.cursor++]) || 0.0;
  }
  next() {
    if (this.cursor >= this.tokens.length) return '';
    return this.tokens[this.cursor++];
  }
  nextLine() {
    if (this.lineCursor >= this.lines.length) return '';
    return this.lines[this.lineCursor++];
  }
  hasNextInt() {
    return this.cursor < this.tokens.length && !isNaN(parseInt(this.tokens[this.cursor], 10));
  }
  hasNext() {
    return this.cursor < this.tokens.length;
  }
}

/**
 * Pre-execution Java Syntax & Structure Analyzer.
 * Returns formatted javac error string or null if code passes syntax check.
 */
export function analyzeJavaSyntax(code) {
  if (!code) return null;
  const lines = code.split('\n');

  // 1. Check curly braces balance
  let openBraces = 0;
  let closeBraces = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const cleanLine = line.replace(/\/\/.*$/, '').replace(/"(?:[^"\\]|\\.)*"/g, '""');
    for (const char of cleanLine) {
      if (char === '{') openBraces++;
      if (char === '}') closeBraces++;
    }
  }
  if (openBraces > closeBraces) {
    return `Main.java:${lines.length}: error: reached end of file while parsing\n}\n ^\n1 error`;
  }
  if (closeBraces > openBraces) {
    return `Main.java:${lines.length}: error: class, interface, or enum expected\n}\n^\n1 error`;
  }

  // 2. Check for unclosed string literals
  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const strippedComment = rawLine.replace(/\/\/.*$/, '').trim();
    if (strippedComment.startsWith('/*') || strippedComment.startsWith('*')) continue;
    
    const quotes = (strippedComment.match(/(?<!\\)"/g) || []).length;
    if (quotes % 2 !== 0) {
      return `Main.java:${i + 1}: error: unclosed string literal\n    ${strippedComment}\n    ^\n1 error`;
    }
  }

  // 3. Check for lowercase 'system.out' or typos
  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    if (/\bsystem\.out\b/.test(rawLine)) {
      return `Main.java:${i + 1}: error: package system does not exist\n    ${rawLine.trim()}\n    ^\n(Hint: Java is strictly case-sensitive! Use capital 'System'.)\n1 error`;
    }
    if (/\bSystem\.out\.Print\b/.test(rawLine) || /\bSystem\.out\.Println\b/.test(rawLine)) {
      return `Main.java:${i + 1}: error: cannot find symbol\n  symbol:   method Print/Println\n  location: variable out of type PrintStream\n(Hint: Java method names start with lowercase: System.out.println)\n1 error`;
    }
  }

  // 4. Check for loop header semicolons
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const forIdx = line.search(/\bfor\s*\(/);
    if (forIdx !== -1) {
      let openP = 0;
      let startP = line.indexOf('(', forIdx);
      let endP = -1;
      for (let p = startP; p < line.length; p++) {
        if (line[p] === '(') openP++;
        else if (line[p] === ')') {
          openP--;
          if (openP === 0) { endP = p; break; }
        }
      }
      if (endP !== -1) {
        const header = line.slice(startP + 1, endP);
        if (!header.includes(':')) { // Not enhanced for-loop
          const semiCount = (header.match(/;/g) || []).length;
          if (semiCount !== 2) {
            return `Main.java:${i + 1}: error: ';' expected in for loop header\n    ${line.trim()}\n    ^\n(Expected syntax: for (initialization; condition; update))\n1 error`;
          }
        }
      }
    }
  }

  // 5. Check do-while trailing semicolon
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.includes('} while') || (line.startsWith('while') && i > 0 && lines[i - 1].includes('}'))) {
      if (line.includes('while') && !line.endsWith(';') && !line.includes('{')) {
        return `Main.java:${i + 1}: error: ';' expected after while condition in do-while loop\n    ${line}\n    ${' '.repeat(line.length)}^\n1 error`;
      }
    }
  }

  // 6. Check missing semicolon on regular Java statements
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.startsWith('//') || line.startsWith('/*') || line.startsWith('*')) continue;
    if (line.startsWith('public ') || line.startsWith('class ') || line.endsWith('{') || line.endsWith('}') || line.startsWith('else')) continue;
    if (line.startsWith('for ') || line.startsWith('for(') || line.startsWith('while ') || line.startsWith('while(') || line.startsWith('if ') || line.startsWith('if(')) continue;

    if (/^(System\.out\.|int |double |float |long |String |boolean |char |return |Scanner |[a-zA-Z_]\w*\s*(\+\+|--|\+=|-=|\*=|\/=|=))/.test(line)) {
      if (!line.endsWith(';')) {
        return `Main.java:${i + 1}: error: ';' expected\n    ${line}\n    ${' '.repeat(line.length)}^\n1 error`;
      }
    }
  }

  return null;
}

/**
 * Runs raw Java code against a single test input string.
 */
function executeSingleRun(rawJavaCode, testInput = '') {
  let codeToRun = rawJavaCode;

  // 1. Strip Java imports
  codeToRun = codeToRun.replace(/import\s+java\.util\..*?;/g, '');

  // 2. Safely extract main method body if wrapped in class & main
  const mainHeaderMatch = codeToRun.match(/public\s+static\s+void\s+main\s*\([^)]*\)\s*\{/);
  if (mainHeaderMatch) {
    const startIndex = mainHeaderMatch.index + mainHeaderMatch[0].length;
    codeToRun = codeToRun.slice(startIndex);
    const lastBrace = codeToRun.lastIndexOf('}');
    if (lastBrace !== -1) {
      codeToRun = codeToRun.slice(0, lastBrace);
      const secondLastBrace = codeToRun.lastIndexOf('}');
      if (secondLastBrace !== -1) {
        codeToRun = codeToRun.slice(0, secondLastBrace);
      }
    }
  }

  // 3. Transpile Java constructs to JavaScript
  let jsCode = codeToRun;

  // Handle Scanner initialization: Scanner input = new Scanner(System.in);
  jsCode = jsCode.replace(/\bScanner\s+([a-zA-Z_]\w*)\s*=\s*new\s+Scanner\s*\([^)]*\);/g, 'let $1 = new __MockScanner(__testInput);');

  // Handle explicit casts
  jsCode = jsCode.replace(/\(int\)\s*\(([^)]+)\)/g, 'Math.trunc($1)');
  jsCode = jsCode.replace(/\(int\)\s*([a-zA-Z0-9_.]+)/g, 'Math.trunc($1)');
  jsCode = jsCode.replace(/\((double|float|long|char)\)\s*/g, '');

  // Truncate compound division /= (e.g. num /= 10; or n /= 2;)
  jsCode = jsCode.replace(/\b([a-zA-Z_]\w*)\s*\/=\s*([^;]+);/g, '$1 = Math.trunc($1 / ($2));');

  // Truncate int x = a / b;
  jsCode = jsCode.replace(/\b(int|long)\s+([a-zA-Z_]\w*)\s*=\s*([^;]+)\s*\/\s*([^;]+);/g, 'let $2 = Math.trunc(($3) / ($4));');

  // Truncate reassignment to self: num = num / 10;
  jsCode = jsCode.replace(/\b([a-zA-Z_]\w*)\s*=\s*\1\s*\/\s*([^;]+);/g, '$1 = Math.trunc($1 / ($2));');

  // Handle Java type declarations
  jsCode = jsCode.replace(/\b(int|double|float|long|boolean|char|String)\s+([a-zA-Z_]\w*)/g, 'let $2');

  // Handle array declarations
  jsCode = jsCode.replace(/\b(int|double|String|boolean)\[\]\s+([a-zA-Z_]\w*)\s*=\s*\{([^}]*)\};/g, 'let $2 = [$3];');
  jsCode = jsCode.replace(/\b(int|double|String|boolean)\[\]\s+([a-zA-Z_]\w*)\s*=\s*new\s+\w+\[\s*\]\s*\{([^}]*)\};/g, 'let $2 = [$3];');

  // Handle array length & string methods
  jsCode = jsCode.replace(/\.length\(\)/g, '.length');

  // Handle Integer constants
  jsCode = jsCode.replace(/\bInteger\.MAX_VALUE\b/g, '2147483647');
  jsCode = jsCode.replace(/\bInteger\.MIN_VALUE\b/g, '-2147483648');

  // Handle System.out.println & System.out.print
  jsCode = jsCode.replace(/System\.out\.println\s*\((.*?)\);/g, (match, content) => {
    return `__println(${content.trim() === '' ? '""' : content});`;
  });
  jsCode = jsCode.replace(/System\.out\.print\s*\((.*?)\);/g, (match, content) => {
    return `__print(${content});`;
  });

  // Handle System.out.printf / String.format basic patterns
  jsCode = jsCode.replace(/System\.out\.printf\s*\((.*?)\);/g, (match, content) => {
    return `__printf(${content});`;
  });

  // 4. Infinite loop guards injection for FOR, WHILE, and DO-WHILE (Limit: 10,000 iterations)
  let loopGuardCounter = 0;

  // Guard for-loops
  jsCode = jsCode.replace(/\bfor\s*\(([^;]+);([^;]+);([^)]+)\)\s*\{/g, (match, init, cond, update) => {
    const guardId = `__loopGuard_${loopGuardCounter++}`;
    return `let ${guardId} = 0; for (${init}; ${cond}; ${update}) { if (++${guardId} > 10000) throw new Error("Your loop never ends. Check your condition/update");`;
  });

  // Guard while-loops
  jsCode = jsCode.replace(/\bwhile\s*\(([^)]+)\)\s*\{/g, (match, cond) => {
    const guardId = `__loopGuard_${loopGuardCounter++}`;
    return `let ${guardId} = 0; while (${cond}) { if (++${guardId} > 10000) throw new Error("Your loop never ends. Check your condition/update");`;
  });

  // Guard do-while loops
  jsCode = jsCode.replace(/\bdo\s*\{/g, () => {
    const guardId = `__loopGuard_${loopGuardCounter++}`;
    return `let ${guardId} = 0; do { if (++${guardId} > 10000) throw new Error("Your loop never ends. Check your condition/update");`;
  });

  // 5. Sandbox execution environment
  const outputBuffer = [];
  let currentLine = '';

  const __print = (val) => {
    const str = val !== undefined && val !== null ? String(val) : 'null';
    for (const ch of str) {
      if (ch === '\b') {
        currentLine = currentLine.slice(0, -1);
      } else {
        currentLine += ch;
      }
    }
  };

  const __println = (val) => {
    if (val !== undefined && val !== null) {
      __print(String(val));
    }
    outputBuffer.push(currentLine);
    currentLine = '';
  };

  const __printf = (format, ...args) => {
    if (!format) return;
    let idx = 0;
    const formatted = String(format).replace(/%[dsf]/g, () => {
      return idx < args.length ? String(args[idx++]) : '';
    });
    __print(formatted);
  };

  const runner = new Function('__print', '__println', '__printf', '__MockScanner', '__testInput', `
    "use strict";
    ${jsCode}
  `);

  runner(__print, __println, __printf, MockScanner, testInput);

  if (currentLine !== '') {
    outputBuffer.push(currentLine);
  }

  return outputBuffer.join('\n').trim();
}

/**
 * Main execution entry point.
 * Supports multiple test cases: testCases = [{ input: '...', expectedOutput: '...' }]
 */
export function runJavaCode(rawJavaCode, expectedLoopType = null, testCases = null, customTestInput = '') {
  const result = {
    success: false,
    output: '',
    error: null,
    compilerOutput: null,
    isCompileError: false,
    hasLoop: false,
    loopMatched: true,
    testCasesPassed: 0,
    totalTestCases: 1,
  };

  if (!rawJavaCode || !rawJavaCode.trim()) {
    result.error = 'Main.java: error: no code provided!\nWrite your Java solution in the editor.';
    result.compilerOutput = result.error;
    result.isCompileError = true;
    return result;
  }

  // A. Realistic javac compiler syntax analysis
  const syntaxDiag = analyzeJavaSyntax(rawJavaCode);
  if (syntaxDiag) {
    result.isCompileError = true;
    result.error = syntaxDiag;
    result.compilerOutput = syntaxDiag;
    return result;
  }

  // B. Detect loop types present in user code
  const hasFor = /\bfor\s*\([^;]+;[^;]+;[^)]+\)/.test(rawJavaCode);
  const hasDoWhile = /\bdo\s*\{[\s\S]*?\}\s*while\s*\([^)]+\)\s*;/.test(rawJavaCode);
  const hasWhile = /\bwhile\s*\([^)]+\)\s*\{/.test(rawJavaCode);

  result.hasLoop = hasFor || hasWhile || hasDoWhile;

  if (expectedLoopType === 'for' && !hasFor) {
    result.loopMatched = false;
    result.isCompileError = true;
    result.error = 'Main.java: error: required for-loop missing!\nThis challenge requires you to write a standard Java for loop: for (int i = ...; ...; ...) { ... }';
    result.compilerOutput = result.error;
    return result;
  }

  if (expectedLoopType === 'while' && !hasWhile) {
    result.loopMatched = false;
    result.isCompileError = true;
    result.error = 'Main.java: error: required while-loop missing!\nThis challenge requires you to write a Java while (condition) { ... } loop.';
    result.compilerOutput = result.error;
    return result;
  }

  if (expectedLoopType === 'do-while' && !hasDoWhile) {
    result.loopMatched = false;
    result.isCompileError = true;
    result.error = 'Main.java: error: required do-while loop missing!\nThis challenge requires you to write a Java do { ... } while (condition); loop.';
    result.compilerOutput = result.error;
    return result;
  }

  try {
    // If multiple test cases are provided, run each test case
    if (Array.isArray(testCases) && testCases.length > 0) {
      result.totalTestCases = testCases.length;
      let lastOutput = '';

      for (let i = 0; i < testCases.length; i++) {
        const tc = testCases[i];
        const runOut = executeSingleRun(rawJavaCode, tc.input || '');
        lastOutput = runOut;

        const normActual = normalizeOutput(runOut);
        const normExpected = normalizeOutput(tc.expectedOutput);

        if (normActual !== normExpected) {
          result.success = false;
          result.output = runOut;
          result.error = `Test Case ${i + 1} Failed! \nInput: ${tc.input}\nExpected: ${tc.expectedOutput}\nYour Output: ${runOut}`;
          result.testCasesPassed = i;
          return result;
        }
      }

      result.output = lastOutput;
      result.success = true;
      result.testCasesPassed = testCases.length;
      return result;
    }

    // Single run execution
    const runOut = executeSingleRun(rawJavaCode, customTestInput || '');
    result.output = runOut;
    result.success = true;
    result.testCasesPassed = 1;
    return result;
  } catch (err) {
    result.success = false;
    result.isCompileError = true;

    const msg = err.message || '';
    if (msg.includes('is not defined')) {
      const varName = msg.split(' ')[0];
      result.error = `Main.java: error: cannot find symbol\n  symbol:   variable ${varName}\n  location: class Main\n(Did you declare 'int ${varName}' or check spelling?)\n1 error`;
    } else if (msg.includes('Your loop never ends')) {
      result.error = `Main.java: runtime error: ${msg}`;
    } else {
      result.error = `Main.java: error: ${msg}\n1 error`;
    }
    result.compilerOutput = result.error;
    return result;
  }
}

/**
 * Normalizes output strings for line endings, trailing spaces, and case-trimming.
 */
export function normalizeOutput(text) {
  if (!text) return '';
  return text
    .replace(/\r\n/g, '\n')
    .split('\n')
    .map(line => line.trimEnd())
    .join('\n')
    .trim();
}