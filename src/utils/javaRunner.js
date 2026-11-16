/**
 * ============================================================================
 * IN-BROWSER JAVA LOOP SIMULATOR & CHECKER
 * ============================================================================
 * Transpiles common Java loop code into sandboxed JavaScript execution.
 * Captures System.out.println & System.out.print, supports loops, arrays,
 * strings, conditionals, and includes infinite loop protection.
 * ============================================================================
 */

export function runJavaCode(rawJavaCode) {
  const result = {
    success: false,
    output: '',
    error: null,
    hasForLoop: false,
  };

  if (!rawJavaCode || !rawJavaCode.trim()) {
    result.error = 'No code provided! Write your Java solution in the editor.';
    return result;
  }

  // Check if student wrote a for loop
  const hasFor = /\bfor\s*\([^;]+;[^;]+;[^)]+\)/.test(rawJavaCode);
  result.hasForLoop = hasFor;

  try {
    // 1. Extract the main code body or loop code
    let codeToRun = rawJavaCode;

    // If student included class Main / main method, extract the body
    const mainMethodMatch = codeToRun.match(/public\s+static\s+void\s+main\s*\([^)]*\)\s*\{([\s\S]*)\}\s*\}?\s*$/);
    if (mainMethodMatch && mainMethodMatch[1]) {
      codeToRun = mainMethodMatch[1];
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
    // We map them to internal simulator functions
    jsCode = jsCode.replace(/System\.out\.println\s*\((.*?)\);/g, (match, content) => {
      return `__println(${content.trim() === '' ? '""' : content});`;
    });
    jsCode = jsCode.replace(/System\.out\.print\s*\((.*?)\);/g, (match, content) => {
      return `__print(${content});`;
    });

    // 3. Infinite loop guard injection
    // Inject counter inside every for loop
    let loopGuardCounter = 0;
    jsCode = jsCode.replace(/\bfor\s*\(([^;]+);([^;]+);([^)]+)\)\s*\{/g, (match, init, cond, update) => {
      const guardId = `__loopGuard_${loopGuardCounter++}`;
      return `let ${guardId} = 0; for (${init}; ${cond}; ${update}) { if (++${guardId} > 5000) throw new Error("Infinite loop detected! (Loop exceeded 5000 iterations)");`;
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
