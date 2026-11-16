/**
 * ============================================================================
 * IN-BROWSER JAVA LOOP SIMULATOR & CHECKER (Supports For, While, & Do-While)
 * ============================================================================
 * Transpiles common Java loop code into sandboxed JavaScript execution.
 * Captures System.out.println & System.out.print, supports loops, arrays,
 * strings, conditionals, and includes infinite loop protection for all loop types.
 * ============================================================================
 */

export function runJavaCode(rawJavaCode, expectedLoopType = null) {
  const result = {
    success: false,
    output: '',
    error: null,
    hasLoop: false,
    loopMatched: true,
  };

  if (!rawJavaCode || !rawJavaCode.trim()) {
    result.error = 'No code provided! Write your Java solution in the editor.';
    return result;
  }

  // Detect loop types present in user code
  const hasFor = /\bfor\s*\([^;]+;[^;]+;[^)]+\)/.test(rawJavaCode);
  const hasDoWhile = /\bdo\s*\{[\s\S]*?\}\s*while\s*\([^)]+\)\s*;/.test(rawJavaCode);
  // Plain while loop (not the while part of a do-while)
  const hasWhile = /\bwhile\s*\([^)]+\)\s*\{/.test(rawJavaCode);

  result.hasLoop = hasFor || hasWhile || hasDoWhile;

  if (expectedLoopType === 'for' && !hasFor) {
    result.loopMatched = false;
    result.error = 'Missing for-loop! This challenge requires you to write a Java for loop.';
    return result;
  }

  if (expectedLoopType === 'while' && !hasWhile) {
    result.loopMatched = false;
    result.error = 'Missing while-loop! This challenge requires you to write a Java while (condition) { ... } loop.';
    return result;
  }

  if (expectedLoopType === 'do-while' && !hasDoWhile) {
    result.loopMatched = false;
    result.error = 'Missing do-while loop! This challenge requires you to write a Java do { ... } while (condition); loop.';
    return result;
  }

  try {
    // 1. Extract the main code body or loop code
    let codeToRun = rawJavaCode;

    // If student included class Main / main method, safely extract the body inside main
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

    // Handle array length: arr.length -> arr.length (same in JS)
    // Handle string methods: str.length() -> str.length, str.charAt(i) -> str.charAt(i)
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
      return `let ${guardId} = 0; for (${init}; ${cond}; ${update}) { if (++${guardId} > 5000) throw new Error("Infinite loop detected! (Loop exceeded 5000 iterations)");`;
    });

    // Guard while-loops
    jsCode = jsCode.replace(/\bwhile\s*\(([^)]+)\)\s*\{/g, (match, cond) => {
      const guardId = `__loopGuard_${loopGuardCounter++}`;
      return `let ${guardId} = 0; while (${cond}) { if (++${guardId} > 5000) throw new Error("Infinite loop detected! (Loop exceeded 5000 iterations)");`;
    });

    // Guard do-while loops
    jsCode = jsCode.replace(/\bdo\s*\{/g, () => {
      const guardId = `__loopGuard_${loopGuardCounter++}`;
      return `let ${guardId} = 0; do { if (++${guardId} > 5000) throw new Error("Infinite loop detected! (Loop exceeded 5000 iterations)");`;
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

    // Flush any remaining partial line
    if (currentLine !== '') {
      outputBuffer.push(currentLine);
    }

    result.output = outputBuffer.join('\n').trim();
    result.success = true;
  } catch (err) {
    result.success = false;
    result.error = err.message || 'Execution error in Java code.';
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
