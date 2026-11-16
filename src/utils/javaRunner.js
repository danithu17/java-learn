/**
 * ============================================================================
 * IN-BROWSER JAVA COMPILER & SIMULATOR (Supports For, While, & Do-While)
 * ============================================================================
 * Provides authentic javac compiler error diagnostics:
 * - Missing semicolons, unclosed strings, unmatched braces/parentheses
 * - Case-sensitivity checks (System.out vs system.out)
 * - Transpiles Java loop code into sandboxed JavaScript execution
 * - Infinite loop guards for all loop types
 * ============================================================================
 */

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
    // Ignore characters inside comments or string literals
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
    
    // Count unescaped quotes
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
    const forMatch = line.match(/\bfor\s*\(([^)]*)\)/);
    if (forMatch) {
      const header = forMatch[1];
      if (!header.includes(':')) { // Not enhanced for-loop
        const semiCount = (header.match(/;/g) || []).length;
        if (semiCount !== 2) {
          return `Main.java:${i + 1}: error: ';' expected in for loop header\n    ${line.trim()}\n    ^\n(Expected syntax: for (initialization; condition; update))\n1 error`;
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

    // Statements like System.out.println, int x = 5, count++, etc.
    if (/^(System\.out\.|int |double |float |long |String |boolean |char |return |[a-zA-Z_]\w*\s*(\+\+|--|\+=|-=|\*=|\/=|=))/.test(line)) {
      if (!line.endsWith(';')) {
        return `Main.java:${i + 1}: error: ';' expected\n    ${line}\n    ${' '.repeat(line.length)}^\n1 error`;
      }
    }
  }

  return null;
}

export function runJavaCode(rawJavaCode, expectedLoopType = null) {
  const result = {
    success: false,
    output: '',
    error: null,
    compilerOutput: null,
    isCompileError: false,
    hasLoop: false,
    loopMatched: true,
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
    // 1. Extract the main code body or loop code safely
    let codeToRun = rawJavaCode;

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

    // 2. Transpile Java constructs to JavaScript
    let jsCode = codeToRun;

    // Handle Java type declarations: int x = 0; -> let x = 0;
    jsCode = jsCode.replace(/\b(int|double|float|long|boolean|char|String)\s+([a-zA-Z_]\w*)/g, 'let $2');

    // Handle array declarations:
    // int[] arr = { 1, 2, 3 }; -> let arr = [ 1, 2, 3 ];
    jsCode = jsCode.replace(/\b(int|double|String|boolean)\[\]\s+([a-zA-Z_]\w*)\s*=\s*\{([^}]*)\};/g, 'let $2 = [$3];');
    jsCode = jsCode.replace(/\b(int|double|String|boolean)\[\]\s+([a-zA-Z_]\w*)\s*=\s*new\s+\w+\[\s*\]\s*\{([^}]*)\};/g, 'let $2 = [$3];');

    // Handle array length and string methods
    jsCode = jsCode.replace(/\.length\(\)/g, '.length');

    // Handle System.out.println & System.out.print
    jsCode = jsCode.replace(/System\.out\.println\s*\((.*?)\);/g, (match, content) => {
      return `__println(${content.trim() === '' ? '""' : content});`;
    });
    jsCode = jsCode.replace(/System\.out\.print\s*\((.*?)\);/g, (match, content) => {
      return `__print(${content});`;
    });

    // 3. Infinite loop guards injection for FOR, WHILE, and DO-WHILE
    let loopGuardCounter = 0;

    // Guard for-loops
    jsCode = jsCode.replace(/\bfor\s*\(([^;]+);([^;]+);([^)]+)\)\s*\{/g, (match, init, cond, update) => {
      const guardId = `__loopGuard_${loopGuardCounter++}`;
      return `let ${guardId} = 0; for (${init}; ${cond}; ${update}) { if (++${guardId} > 5000) throw new Error("Time Limit Exceeded (Infinite loop detected!) Check your loop condition and update statement.");`;
    });

    // Guard while-loops
    jsCode = jsCode.replace(/\bwhile\s*\(([^)]+)\)\s*\{/g, (match, cond) => {
      const guardId = `__loopGuard_${loopGuardCounter++}`;
      return `let ${guardId} = 0; while (${cond}) { if (++${guardId} > 5000) throw new Error("Time Limit Exceeded (Infinite loop detected!) Check your condition variable update.");`;
    });

    // Guard do-while loops
    jsCode = jsCode.replace(/\bdo\s*\{/g, () => {
      const guardId = `__loopGuard_${loopGuardCounter++}`;
      return `let ${guardId} = 0; do { if (++${guardId} > 5000) throw new Error("Time Limit Exceeded (Infinite loop detected!) Check your do-while update.");`;
    });

    // 4. Sandbox execution environment
    const outputBuffer = [];
    let currentLine = '';

    const __print = (val) => {
      const str = val !== undefined && val !== null ? String(val) : 'null';
      currentLine += str;
    };

    const __println = (val) => {
      const str = val !== undefined && val !== null ? String(val) : '';
      currentLine += str;
      outputBuffer.push(currentLine);
      currentLine = '';
    };

    // Safe execution using Function constructor
    const runner = new Function('__print', '__println', `
      "use strict";
      ${jsCode}
      if (typeof currentLine !== 'undefined' && currentLine !== '') {
        __println("");
      }
    `);

    runner(__print, __println);

    if (currentLine !== '') {
      outputBuffer.push(currentLine);
    }

    result.output = outputBuffer.join('\n').trim();
    result.success = true;
  } catch (err) {
    result.success = false;
    result.isCompileError = true;

    // Map raw JS errors to authentic Java javac/runtime messages
    const msg = err.message || '';
    if (msg.includes('is not defined')) {
      const varName = msg.split(' ')[0];
      result.error = `Main.java: error: cannot find symbol\n  symbol:   variable ${varName}\n  location: class Main\n(Did you forget to declare 'int ${varName}' or check spelling?)\n1 error`;
    } else if (msg.includes('Time Limit Exceeded')) {
      result.error = `Main.java: runtime error: ${msg}`;
    } else {
      result.error = `Main.java: error: ${msg}\n1 error`;
    }
    result.compilerOutput = result.error;
  }

  return result;
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
