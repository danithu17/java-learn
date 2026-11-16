/**
 * ============================================================================
 * MODULE: For Loop Mastery
 * ============================================================================
 * Designed for beginners who can think the logic but struggle converting it to code.
 * Contains 6 bite-sized interactive lessons and 25 progressively challenging exercises.
 */

export const forLoopModule = {
  id: 'for-loop',
  title: 'For Loop Mastery',
  icon: 'Repeat',
  badge: 'Recommended First',
  description: 'Master counting, stepping, summing, and patterns with the workhorse of Java loops.',
  totalChallenges: 25,

  // ==========================================================================
  // LESSONS
  // ==========================================================================
  lessons: [
    {
      id: 'lesson-1',
      title: '1. What is a Loop & Why We Use It',
      duration: '3 min read',
      summary: 'Learn why loops save your fingers from typing repetitive code.',
      content: `
### Imagine Typing This:
If someone asked you to print numbers from 1 to 5 without a loop, you would write:

\`\`\`java
System.out.println(1);
System.out.println(2);
System.out.println(3);
System.out.println(4);
System.out.println(5);
\`\`\`

Now imagine printing numbers up to **10,000**! That would be impossible to type manually.

### The Power of a Loop
A **loop** tells the computer: *"Do this block of instructions again and again until I tell you to stop."*

In Java, that entire 5 lines shrinks down to just **3 lines**:

\`\`\`java
for (int i = 1; i <= 5; i++) {
    System.out.println(i);
}
\`\`\`

> 💡 **Teacher's Tip:** In programming, we follow the **DRY** principle: *Don't Repeat Yourself*. Let the computer do the repetition!
      `,
      interactiveSnippet: {
        title: 'See the Difference',
        code: `// Compare manual repetition vs loop
for (int i = 1; i <= 5; i++) {
    System.out.println("Round " + i);
}`,
        output: "Round 1\nRound 2\nRound 3\nRound 4\nRound 5"
      }
    },

    {
      id: 'lesson-2',
      title: '2. Anatomy of a For Loop',
      duration: '4 min read',
      summary: 'Color-coded breakdown of the 3 parts inside for (... ; ... ; ...)',
      content: `
Every \`for\` loop in Java has **3 crucial parts** inside the parentheses, separated by **semicolons \`;\`**:

\`\`\`
for ( INITIALIZATION ; CONDITION ; UPDATE ) {
    // LOOP BODY (repeated code)
}
\`\`\`

### 1. 🟢 INITIALIZATION (\`int i = 1\`)
- **What it does:** Creates the counter variable and sets its starting value.
- **When it runs:** Only **ONCE**, right at the very beginning.

### 2. 🔵 CONDITION (\`i <= 10\`)
- **What it does:** The gatekeeper. As long as this is \`true\`, the loop continues. When it becomes \`false\`, the loop STOPS.
- **When it runs:** Checked **BEFORE** every single iteration.

### 3. 🟣 UPDATE (\`i++\`)
- **What it does:** Changes the counter (usually adding 1 with \`i++\`).
- **When it runs:** Runs at the **END** of every iteration, right before checking the condition again.

### 4. 🟡 LOOP BODY
- The code inside the curly braces \`{ ... }\` that gets executed each time.
      `,
      anatomyHighlight: {
        init: 'int i = 1',
        condition: 'i <= 5',
        update: 'i++',
        body: 'System.out.println(i);'
      }
    },

    {
      id: 'lesson-3',
      title: '3. Step-by-Step Execution (Watch i Change)',
      duration: '4 min read',
      summary: 'See the exact order the computer executes every single instruction.',
      content: `
Beginners often wonder: *"In what order does Java actually run these 3 parts?"*

Here is the exact cycle for:
\`for (int i = 1; i <= 3; i++) { System.out.println(i); }\`

1. **Start:** Create \`i = 1\`.
2. **Check:** Is \`1 <= 3\`? **YES** (true) -> Enter loop!
3. **Execute Body:** Print \`1\`.
4. **Update:** \`i++\` makes \`i\` become \`2\`.
5. **Check:** Is \`2 <= 3\`? **YES** (true) -> Enter loop!
6. **Execute Body:** Print \`2\`.
7. **Update:** \`i++\` makes \`i\` become \`3\`.
8. **Check:** Is \`3 <= 3\`? **YES** (true) -> Enter loop!
9. **Execute Body:** Print \`3\`.
10. **Update:** \`i++\` makes \`i\` become \`4\`.
11. **Check:** Is \`4 <= 3\`? **NO** (false) -> 🛑 **EXIT LOOP!**

> ⚠️ Notice: When the loop finishes, \`i\` is actually \`4\`, which is why the condition stopped it!
      `,
      interactiveStepper: {
        steps: [
          { round: 1, iVal: 1, condition: '1 <= 3 (TRUE)', action: 'Print 1', printed: ['1'] },
          { round: 2, iVal: 2, condition: '2 <= 3 (TRUE)', action: 'Update i++ -> 2. Print 2', printed: ['1', '2'] },
          { round: 3, iVal: 3, condition: '3 <= 3 (TRUE)', action: 'Update i++ -> 3. Print 3', printed: ['1', '2', '3'] },
          { round: 4, iVal: 4, condition: '4 <= 3 (FALSE)', action: 'Condition failed! Loop terminates.', printed: ['1', '2', '3'] },
        ]
      }
    },

    {
      id: 'lesson-4',
      title: '4. Counting Up, Counting Down, & Skipping',
      duration: '3 min read',
      summary: 'Change your starting point, ending condition, and step size.',
      content: `
You don't have to always count by +1! You can customize all 3 parts:

### 1. Counting Up (Default)
Starts small, increases with \`i++\`:
\`\`\`java
for (int i = 1; i <= 5; i++) {
    System.out.println(i); // 1, 2, 3, 4, 5
}
\`\`\`

### 2. Counting Down (Backwards)
Starts big, checks \`>=\`, decreases with \`i--\`:
\`\`\`java
for (int i = 5; i >= 1; i--) {
    System.out.println(i); // 5, 4, 3, 2, 1
}
\`\`\`

### 3. Skipping / Stepping by 2 or 5
Instead of \`i++\`, use \`i += 2\` or \`i += 5\`:
\`\`\`java
// Even numbers up to 10:
for (int i = 2; i <= 10; i += 2) {
    System.out.println(i); // 2, 4, 6, 8, 10
}

// Multiples of 5:
for (int i = 5; i <= 25; i += 5) {
    System.out.println(i); // 5, 10, 15, 20, 25
}
\`\`\`
      `
    },

    {
      id: 'lesson-5',
      title: '5. The Accumulator ("Bucket") Pattern',
      duration: '4 min read',
      summary: 'How to calculate totals, sums, factorials, and tables.',
      content: `
How do you sum numbers from 1 to 10?
Think of an empty **bucket**!

### The Logic Steps:
1. Put an empty bucket before the loop: \`int sum = 0;\`
2. Run your loop from 1 to 10.
3. Every round, throw the current number into the bucket: \`sum += i;\`
4. **CRUCIAL:** Print the bucket **AFTER** the loop finishes!

\`\`\`java
int sum = 0; // 1. Bucket before loop

for (int i = 1; i <= 10; i++) {
    sum += i; // 2. Add each number
}

System.out.println(sum); // 3. Prints 55 (ONLY ONCE outside!)
\`\`\`

### Factorial (Product Bucket):
For multiplication, the bucket must start at **1** (not 0, because 0 × anything = 0!):
\`\`\`java
int fact = 1;
for (int i = 1; i <= 5; i++) {
    fact = fact * i;
}
System.out.println(fact); // 120
\`\`\`
      `
    },

    {
      id: 'lesson-6',
      title: '6. Common Beginner Traps & Mistakes',
      duration: '3 min read',
      summary: 'Avoid the 3 mistakes that trip up 90% of Java beginners.',
      content: `
### Trap #1: The Accidental Semicolon 🚫
\`\`\`java
// WRONG:
for (int i = 1; i <= 5; i++); // <-- ACCIDENTAL SEMICOLON!
{
    System.out.println(i); // Only prints once, or gives error!
}
\`\`\`
**Fix:** Never put a semicolon after the parentheses of a \`for\` loop!

---

### Trap #2: Off-By-One Error
- If you write \`i < 10\`, it stops at **9**! (Loops 9 times).
- If you write \`i <= 10\`, it includes **10**! (Loops 10 times).

---

### Trap #3: The Infinite Loop ♾️
\`\`\`java
// WRONG:
for (int i = 1; i >= 1; i++) { // Condition is ALWAYS true!
    System.out.println(i);
}
\`\`\`
Make sure your condition will eventually become \`false\`!
      `
    }
  ],

  // ==========================================================================
  // 25 PROGRESSIVE CHALLENGES
  // ==========================================================================
  challenges: [
    // --- EASY / WARM-UP (1 - 5) ---
    {
      id: 1,
      type: 'predict',
      difficulty: 'Easy',
      title: 'Predict: Counting 1 to 4',
      task: 'Look at the Java code below. What will be printed in the console?',
      code: `for (int i = 1; i <= 4; i++) {
    System.out.println(i);
}`,
      options: [
        '1 2 3 4 (on separate lines)',
        '1 2 3 (stops at 3)',
        '0 1 2 3 4',
        '4 3 2 1'
      ],
      correctAnswer: 0,
      thinkFirst: [
        '1. Counter starts at i = 1.',
        '2. Condition checks i <= 4, so it includes 4.',
        '3. Each round prints i on a new line and adds 1.',
        '4. Thus: 1, 2, 3, 4.'
      ],
      syntaxReminder: 'for (int i = 1; i <= 4; i++)',
      hints: [
        'Notice where i starts: int i = 1.',
        'Does it use < 4 or <= 4? It uses <=, so 4 is included.',
        'The loop prints 1, 2, 3, and 4 on new lines.'
      ],
      xpReward: 30
    },

    {
      id: 2,
      type: 'fill_blank',
      difficulty: 'Easy',
      title: 'Fill in the Blank: Count to 10',
      task: 'Fill in the missing loop condition so this loop prints numbers from 1 up to 10 inclusive.',
      codeTemplate: `for (int i = 1; _______; i++) {
    System.out.println(i);
}`,
      expectedAnswer: 'i <= 10',
      acceptableAnswers: ['i <= 10', 'i<=10', 'i < 11', 'i<11'],
      thinkFirst: [
        '1. We start at i = 1.',
        '2. We want to stop AFTER 10 is printed.',
        '3. That means keep running while i is less than or equal to 10.'
      ],
      syntaxReminder: 'Condition syntax: i <= targetNumber',
      hints: [
        'You need a comparison between variable i and number 10.',
        'Use the less-than-or-equal operator: <=',
        'Type: i <= 10'
      ],
      xpReward: 30
    },

    {
      id: 3,
      type: 'arrange',
      difficulty: 'Easy',
      title: 'Arrange the Lines: Loop from 1 to 3',
      task: 'Arrange these scrambled lines into the correct order to print numbers 1 to 3.',
      scrambledLines: [
        '}',
        'System.out.println(i);',
        'for (int i = 1; i <= 3; i++) {'
      ],
      correctOrder: [2, 1, 0], // index in scrambledLines
      thinkFirst: [
        '1. The loop header with "for" must come first.',
        '2. The statement to print (loop body) goes inside the braces.',
        '3. The closing curly brace "}" comes last.'
      ],
      syntaxReminder: 'for (...) {\n    // body\n}',
      hints: [
        'First line starts with "for (int i = 1; i <= 3; i++) {"',
        'Second line is the print call.',
        'Closing brace "}" is always at the bottom.'
      ],
      xpReward: 30
    },

    {
      id: 4,
      type: 'trace_table',
      difficulty: 'Easy',
      title: 'Trace Table: Value of i',
      task: 'Fill in the value of variable `i` for each iteration of this loop:',
      code: `for (int i = 1; i <= 3; i++) {
    System.out.println(i);
}`,
      rounds: [
        { label: 'Round 1 (Start)', answer: '1' },
        { label: 'Round 2', answer: '2' },
        { label: 'Round 3', answer: '3' },
      ],
      thinkFirst: [
        '1. At round 1, i starts at the initial value.',
        '2. In each subsequent round, i increases by 1 due to i++.'
      ],
      syntaxReminder: 'Update i++ adds 1 each round.',
      hints: [
        'What is i initialized to? int i = 1.',
        'What is 1 + 1? That is Round 2.',
        'Round 3 is 3.'
      ],
      xpReward: 30
    },

    {
      id: 5,
      type: 'bug_finder',
      difficulty: 'Easy',
      title: 'Find the Bug: Infinite Loop Trap',
      task: 'This countdown loop is supposed to print 5 down to 1, but it freezes the computer! What is wrong?',
      code: `for (int i = 5; i >= 1; i++) { // <-- Look closely here!
    System.out.println(i);
}`,
      options: [
        'It uses i++ instead of i--, so i keeps growing larger forever (infinite loop)',
        'int i = 5 should be int i = 1',
        'Condition i >= 1 is invalid Java syntax',
        'System.out.println cannot print numbers'
      ],
      correctAnswer: 0,
      thinkFirst: [
        '1. To count DOWN, the number must get smaller.',
        '2. Look at the update expression: i++ adds 1 (5 -> 6 -> 7...).',
        '3. Since i gets bigger, i >= 1 is ALWAYS true! It will never stop.'
      ],
      syntaxReminder: 'Counting down requires i-- (decrement), not i++!',
      hints: [
        'Check the third part of the for header: i++',
        'If i starts at 5 and increments, it goes 5, 6, 7, 8...',
        'It should be i-- to count downwards.'
      ],
      xpReward: 30
    },

    // --- COUNTDOWN & STEPPING (6 - 10) ---
    {
      id: 6,
      type: 'write_code',
      difficulty: 'Easy',
      title: 'Write It: Print 1 to 10',
      task: 'Write a complete Java for-loop that prints numbers from 1 to 10 on separate lines.',
      starterCode: `for (int i = 1; _______; _______) {
    System.out.println(i);
}`,
      requiredKeywords: ['for', 'int', 'i = 1', '10', 'i++'],
      modelAnswer: `for (int i = 1; i <= 10; i++) {
    System.out.println(i);
}`,
      thinkFirst: [
        '1. Start counting: int i = 1',
        '2. Continue until 10: i <= 10',
        '3. Step by 1: i++',
        '4. Print i inside the body: System.out.println(i);'
      ],
      syntaxReminder: 'for (int i = 1; i <= 10; i++) {\n    System.out.println(i);\n}',
      hints: [
        'Header starts with: for (int i = 1; i <= 10; i++)',
        'Inside the curly braces, use: System.out.println(i);',
        'Complete answer: for (int i = 1; i <= 10; i++) { System.out.println(i); }'
      ],
      xpReward: 35
    },

    {
      id: 7,
      type: 'predict',
      difficulty: 'Easy',
      title: 'Predict: Counting Down 5 to 1',
      task: 'What is the output of this countdown loop?',
      code: `for (int i = 5; i >= 1; i--) {
    System.out.print(i + " ");
}`,
      options: [
        '5 4 3 2 1 ',
        '1 2 3 4 5 ',
        '5 4 3 2 ',
        '4 3 2 1 0 '
      ],
      correctAnswer: 0,
      thinkFirst: [
        '1. i starts at 5.',
        '2. In each round, i decreases by 1 (5, 4, 3, 2, 1).',
        '3. When i becomes 0, condition 0 >= 1 is false, so it stops.',
        '4. Print with space gives: 5 4 3 2 1 '
      ],
      syntaxReminder: 'i-- decreases the value by 1 each round.',
      hints: [
        'Start at 5 and count down.',
        'Condition is i >= 1, so 1 is the last number printed.',
        'Output: 5 4 3 2 1 '
      ],
      xpReward: 30
    },

    {
      id: 8,
      type: 'fill_blank',
      difficulty: 'Medium',
      title: 'Fill in the Blank: Countdown 10 to 1',
      task: 'Fill in the update statement to decrease `i` by 1 each round:',
      codeTemplate: `for (int i = 10; i >= 1; _______) {
    System.out.println(i);
}`,
      expectedAnswer: 'i--',
      acceptableAnswers: ['i--', 'i -= 1', 'i = i - 1'],
      thinkFirst: [
        '1. We want i to go 10, 9, 8, ... 1.',
        '2. What Java operator subtracts 1 from a variable?'
      ],
      syntaxReminder: 'Decrement operator: i--',
      hints: [
        'Opposite of i++ is...',
        'Two minus signs together: --',
        'Type: i--'
      ],
      xpReward: 30
    },

    {
      id: 9,
      type: 'arrange',
      difficulty: 'Easy',
      title: 'Arrange the Lines: Countdown from 3 to 1',
      task: 'Put the lines in order to print 3, 2, 1 countdown:',
      scrambledLines: [
        '    System.out.println(i);',
        'for (int i = 3; i >= 1; i--) {',
        '}'
      ],
      correctOrder: [1, 0, 2],
      thinkFirst: [
        '1. Loop header with "for (int i = 3..." goes first.',
        '2. Print statement inside.',
        '3. Closing brace "}" at the end.'
      ],
      syntaxReminder: 'for (int i = 3; i >= 1; i--) {\n    System.out.println(i);\n}',
      hints: [
        'Start with "for (int i = 3; i >= 1; i--) {"',
        'Follow with the print line.',
        'Finish with "}".'
      ],
      xpReward: 30
    },

    {
      id: 10,
      type: 'bug_finder',
      difficulty: 'Medium',
      title: 'Find the Bug: Off-by-One Missing 10',
      task: 'The developer wanted to print numbers 1 to 10, but the program only printed 1 to 9! Where is the bug?',
      code: `for (int i = 1; i < 10; i++) { // <-- Spot the issue!
    System.out.println(i);
}`,
      options: [
        'The condition i < 10 stops at 9. It should be i <= 10.',
        'int i = 1 should be int i = 0',
        'i++ should be i += 2',
        'System.out.println does not print 10'
      ],
      correctAnswer: 0,
      thinkFirst: [
        '1. When i reaches 10, does 10 < 10 evaluate to true or false?',
        '2. 10 < 10 is FALSE! So the loop quits before printing 10.',
        '3. To include 10, use <='
      ],
      syntaxReminder: 'Use <= when the target end number must be included.',
      hints: [
        'Look at the condition: i < 10.',
        'Is 10 strictly less than 10? No.',
        'Change < to <='
      ],
      xpReward: 30
    },

    // --- STEPPING & MULTIPLES (11 - 15) ---
    {
      id: 11,
      type: 'predict',
      difficulty: 'Medium',
      title: 'Predict: Even Numbers (i += 2)',
      task: 'What does this loop print?',
      code: `for (int i = 2; i <= 8; i += 2) {
    System.out.print(i + " ");
}`,
      options: [
        '2 4 6 8 ',
        '2 3 4 5 6 7 8 ',
        '2 4 6 ',
        '0 2 4 6 8 '
      ],
      correctAnswer: 0,
      thinkFirst: [
        '1. i starts at 2.',
        '2. i += 2 adds 2 every round (2 -> 4 -> 6 -> 8).',
        '3. Condition i <= 8 allows 8 to be printed.',
        '4. Next is 10, which fails 10 <= 8.'
      ],
      syntaxReminder: 'i += 2 steps by two.',
      hints: [
        'Notice i += 2 steps over odd numbers.',
        'Values printed are 2, 4, 6, 8.',
        'It includes 8 because of <='
      ],
      xpReward: 30
    },

    {
      id: 12,
      type: 'fill_blank',
      difficulty: 'Medium',
      title: 'Fill in the Blank: Multiples of 5',
      task: 'Fill in the update step so the loop prints 5, 10, 15, ..., 50:',
      codeTemplate: `for (int i = 5; i <= 50; _______) {
    System.out.println(i);
}`,
      expectedAnswer: 'i += 5',
      acceptableAnswers: ['i += 5', 'i+=5', 'i = i + 5'],
      thinkFirst: [
        '1. We start at 5 and want to go to 10 next.',
        '2. That is an increase of 5 each time.',
        '3. Shortcut for i = i + 5 is i += 5.'
      ],
      syntaxReminder: 'Adding N to counter: i += N',
      hints: [
        'Use the compound assignment operator +=',
        'Add 5 to i each time.',
        'Type: i += 5'
      ],
      xpReward: 30
    },

    {
      id: 13,
      type: 'trace_table',
      difficulty: 'Medium',
      title: 'Trace Table: Sum Accumulator',
      task: 'Track the value of `sum` after each round for this loop:',
      code: `int sum = 0;
for (int i = 1; i <= 3; i++) {
    sum += i;
}`,
      rounds: [
        { label: 'Round 1 (sum = 0 + 1)', answer: '1' },
        { label: 'Round 2 (sum = 1 + 2)', answer: '3' },
        { label: 'Round 3 (sum = 3 + 3)', answer: '6' },
      ],
      thinkFirst: [
        '1. Before loop: sum = 0.',
        '2. Round 1: i = 1, sum becomes 0 + 1 = 1.',
        '3. Round 2: i = 2, sum becomes 1 + 2 = 3.',
        '4. Round 3: i = 3, sum becomes 3 + 3 = 6.'
      ],
      syntaxReminder: 'sum += i adds current i to the running total.',
      hints: [
        'In Round 1, add 1 to 0.',
        'In Round 2, add 2 to 1 (result 3).',
        'In Round 3, add 3 to 3 (result 6).'
      ],
      xpReward: 35
    },

    {
      id: 14,
      type: 'arrange',
      difficulty: 'Medium',
      title: 'Arrange the Lines: Sum 1 to 5',
      task: 'Arrange these lines in proper order to compute and print the sum of 1 to 5:',
      scrambledLines: [
        'System.out.println(sum);',
        'for (int i = 1; i <= 5; i++) {',
        'int sum = 0;',
        '    sum += i;',
        '}'
      ],
      correctOrder: [2, 1, 3, 4, 0],
      thinkFirst: [
        '1. Bucket declaration must come first: int sum = 0;',
        '2. For loop header.',
        '3. Accumulate sum inside: sum += i;',
        '4. Close loop brace: }',
        '5. Print sum OUTSIDE the loop at the very end.'
      ],
      syntaxReminder: 'Bucket initialized BEFORE loop, printed AFTER loop.',
      hints: [
        'First line: int sum = 0;',
        'Last line: System.out.println(sum);',
        'Loop wraps around sum += i;'
      ],
      xpReward: 35
    },

    {
      id: 15,
      type: 'bug_finder',
      difficulty: 'Medium',
      title: 'Find the Bug: The Accidental Semicolon',
      task: 'Why does this code print `Done: 6` only ONCE instead of printing 1 to 5?',
      code: `for (int i = 1; i <= 5; i++); // <-- Look here!
{
    System.out.println("Round: " + i); // Error: cannot find symbol i!
}`,
      options: [
        'There is an accidental semicolon after for(...); which terminates the loop immediately',
        'int i = 1 should be int i = 0',
        'i++ is not allowed in for loops',
        'Curly braces cannot follow a for loop'
      ],
      correctAnswer: 0,
      thinkFirst: [
        '1. In Java, a semicolon marks the end of a statement.',
        '2. Putting ; directly after for(...) makes Java repeat an EMPTY statement 5 times!',
        '3. Then the block below runs just once, where i is already out of scope.'
      ],
      syntaxReminder: 'NEVER put a semicolon after for (init; cond; update)!',
      hints: [
        'Look at the end of the first line.',
        'Notice the semicolon right after i++)',
        'That semicolon cuts off the loop body completely.'
      ],
      xpReward: 35
    },

    // --- WRITE & APPLIED (16 - 20) ---
    {
      id: 16,
      type: 'write_code',
      difficulty: 'Medium',
      title: 'Write It: Sum of 1 to 10',
      task: 'Write the code to calculate the sum of 1 to 10 into a variable `sum`, and print `sum`.',
      starterCode: `int sum = 0;
for (int i = 1; i <= 10; i++) {
    // add to sum
}
// print sum`,
      requiredKeywords: ['sum += i', 'System.out.println(sum)'],
      modelAnswer: `int sum = 0;
for (int i = 1; i <= 10; i++) {
    sum += i;
}
System.out.println(sum);`,
      thinkFirst: [
        '1. Bucket: int sum = 0;',
        '2. Inside loop: sum += i; (or sum = sum + i;)',
        '3. After loop: System.out.println(sum);'
      ],
      syntaxReminder: 'int sum = 0;\nfor (...) { sum += i; }\nSystem.out.println(sum);',
      hints: [
        'Inside the loop write: sum += i;',
        'After the loop curly brace write: System.out.println(sum);',
        'The output should be 55.'
      ],
      xpReward: 40
    },

    {
      id: 17,
      type: 'predict',
      difficulty: 'Medium',
      title: 'Predict: Multiplication Table of 7',
      task: 'What does this loop print when i = 3?',
      code: `for (int i = 1; i <= 5; i++) {
    System.out.println("7 x " + i + " = " + (7 * i));
}`,
      options: [
        '7 x 3 = 21',
        '7 x 3 = 28',
        '7 * 3 = 21',
        '21'
      ],
      correctAnswer: 0,
      thinkFirst: [
        '1. When i = 3, "7 x " + i becomes "7 x 3".',
        '2. " = " + (7 * 3) calculates 21.',
        '3. Concatenated: "7 x 3 = 21".'
      ],
      syntaxReminder: '"Text " + variable + (calculation)',
      hints: [
        'Look at the string format: "7 x " + i + " = " + ...',
        'When i is 3, 7 * 3 is 21.',
        'Answer is: 7 x 3 = 21'
      ],
      xpReward: 30
    },

    {
      id: 18,
      type: 'fill_blank',
      difficulty: 'Medium',
      title: 'Fill in the Blank: Print Even Numbers with If',
      task: 'Fill in the if-condition to test if `i` is an even number:',
      codeTemplate: `for (int i = 1; i <= 10; i++) {
    if (_______) {
        System.out.println(i);
    }
}`,
      expectedAnswer: 'i % 2 == 0',
      acceptableAnswers: ['i % 2 == 0', 'i%2==0', 'i % 2==0', 'i%2 == 0'],
      thinkFirst: [
        '1. An even number divided by 2 has a remainder of 0.',
        '2. The remainder (modulo) operator in Java is %.',
        '3. We compare with == 0.'
      ],
      syntaxReminder: 'Even check: number % 2 == 0',
      hints: [
        'Use the % (modulo) operator.',
        'Test if i divided by 2 gives remainder 0.',
        'Type: i % 2 == 0'
      ],
      xpReward: 35
    },

    {
      id: 19,
      type: 'arrange',
      difficulty: 'Hard',
      title: 'Arrange the Lines: Factorial of 5',
      task: 'Put the lines in order to calculate 5! (5 * 4 * 3 * 2 * 1 = 120):',
      scrambledLines: [
        '    fact *= i;',
        'int fact = 1;',
        'System.out.println(fact);',
        'for (int i = 1; i <= 5; i++) {',
        '}'
      ],
      correctOrder: [1, 3, 0, 4, 2],
      thinkFirst: [
        '1. Start product bucket at 1: int fact = 1; (NOT 0!)',
        '2. Loop header: for (int i = 1; i <= 5; i++) {',
        '3. Multiply fact by i: fact *= i;',
        '4. Close loop: }',
        '5. Print result: System.out.println(fact);'
      ],
      syntaxReminder: 'Product bucket starts at 1, accumulates with *=',
      hints: [
        'First line: int fact = 1;',
        'Next: loop header.',
        'Inside: fact *= i;'
      ],
      xpReward: 40
    },

    {
      id: 20,
      type: 'write_code',
      difficulty: 'Hard',
      title: 'Write It: Factorial of 5',
      task: 'Complete this method to calculate 5! (120) and print the result `fact`:',
      starterCode: `int fact = 1;
for (int i = 1; i <= 5; i++) {
    // multiply fact by i
}
// print fact`,
      requiredKeywords: ['fact *= i', 'System.out.println(fact)'],
      modelAnswer: `int fact = 1;
for (int i = 1; i <= 5; i++) {
    fact *= i;
}
System.out.println(fact);`,
      thinkFirst: [
        '1. fact starts at 1.',
        '2. Each step: fact = fact * i; (or fact *= i;)',
        '3. After loop: System.out.println(fact);'
      ],
      syntaxReminder: 'fact *= i;\nSystem.out.println(fact);',
      hints: [
        'Multiply inside: fact *= i;',
        'Print outside: System.out.println(fact);',
        'Result printed will be 120.'
      ],
      xpReward: 45
    },

    // --- ADVANCED PATTERNS (21 - 25) ---
    {
      id: 21,
      type: 'trace_table',
      difficulty: 'Hard',
      title: 'Trace Table: Powers of 2',
      task: 'Fill in the value of `power` after each round for this loop:',
      code: `int power = 1;
for (int i = 1; i <= 4; i++) {
    power = power * 2;
}`,
      rounds: [
        { label: 'Round 1 (power = 1 * 2)', answer: '2' },
        { label: 'Round 2 (power = 2 * 2)', answer: '4' },
        { label: 'Round 3 (power = 4 * 2)', answer: '8' },
        { label: 'Round 4 (power = 8 * 2)', answer: '16' },
      ],
      thinkFirst: [
        '1. power starts at 1.',
        '2. Round 1: 1 * 2 = 2',
        '3. Round 2: 2 * 2 = 4',
        '4. Round 3: 4 * 2 = 8',
        '5. Round 4: 8 * 2 = 16'
      ],
      syntaxReminder: 'power *= base doubles the value each round.',
      hints: [
        'Round 1 is 2.',
        'Double that for Round 2 (4).',
        'Double again for Round 3 (8) and Round 4 (16).'
      ],
      xpReward: 40
    },

    {
      id: 22,
      type: 'bug_finder',
      difficulty: 'Hard',
      title: 'Find the Bug: The Factorial Zero Trap',
      task: 'A student wrote this to compute 5! but it outputs `0`! Why?',
      code: `int fact = 0; // <-- Look here!
for (int i = 1; i <= 5; i++) {
    fact = fact * i;
}
System.out.println(fact);`,
      options: [
        'fact is initialized to 0, and 0 multiplied by anything is always 0. It must be initialized to 1!',
        'i <= 5 should be i < 5',
        'fact = fact * i should be fact + i',
        'int cannot store factorials'
      ],
      correctAnswer: 0,
      thinkFirst: [
        '1. Look at fact = 0.',
        '2. Round 1: fact = 0 * 1 = 0.',
        '3. Round 2: fact = 0 * 2 = 0.',
        '4. In multiplication buckets, always start at 1!'
      ],
      syntaxReminder: 'Sum bucket starts at 0. Product bucket starts at 1!',
      hints: [
        'What happens when you multiply any number by zero?',
        '0 times anything remains zero.',
        'Change int fact = 0 to int fact = 1.'
      ],
      xpReward: 35
    },

    {
      id: 23,
      type: 'predict',
      difficulty: 'Hard',
      title: 'Predict: FizzBuzz Check Order',
      task: 'In FizzBuzz, why MUST we check `(i % 15 == 0)` before checking `(i % 3 == 0)`?',
      code: `if (i % 15 == 0) {
    System.out.println("FizzBuzz");
} else if (i % 3 == 0) {
    System.out.println("Fizz");
}`,
      options: [
        'Because 15 is divisible by 3, so checking 3 first would falsely print "Fizz" for 15 instead of "FizzBuzz"',
        'Because Java requires bigger numbers first in if-statements',
        'Because 15 is not divisible by 5',
        'Order does not matter in if-else statements'
      ],
      correctAnswer: 0,
      thinkFirst: [
        '1. Number 15 is divisible by both 3 and 5.',
        '2. If you checked (i % 3 == 0) first, 15 would match immediately!',
        '3. Java would print "Fizz" and skip the else branches.',
        '4. Always test the most specific condition first!'
      ],
      syntaxReminder: 'Check the combined condition (divisible by both) first!',
      hints: [
        'If 15 meets the first condition (divisible by 3), will it ever reach the 15 check?',
        'No, because else-if only runs if previous checks failed.',
        'Always check the most restrictive case first.'
      ],
      xpReward: 40
    },

    {
      id: 24,
      type: 'arrange',
      difficulty: 'Hard',
      title: 'Arrange the Lines: Star Triangle (Nested Loop Intro)',
      task: 'Put these lines in order to print a right triangle of stars (*, **, ***):',
      scrambledLines: [
        '    for (int col = 1; col <= row; col++) {',
        'for (int row = 1; row <= 3; row++) {',
        '        System.out.print("*");',
        '    System.out.println(); // newline after each row',
        '    }',
        '}'
      ],
      correctOrder: [1, 0, 2, 4, 3, 5],
      thinkFirst: [
        '1. Outer loop controls rows (row 1 to 3).',
        '2. Inner loop controls stars in that row (col 1 to row).',
        '3. Print star without newline: System.out.print("*");',
        '4. Close inner loop.',
        '5. Print newline after row completes.',
        '6. Close outer loop.'
      ],
      syntaxReminder: 'Outer loop: rows. Inner loop: columns. Newline between rows.',
      hints: [
        'Start with outer row loop: for (int row = 1; row <= 3; row++) {',
        'Next is inner col loop: for (int col = 1; col <= row; col++) {',
        'Inside inner: System.out.print("*");'
      ],
      xpReward: 45
    },

    {
      id: 25,
      type: 'write_code',
      difficulty: 'Hard',
      title: 'Write It: Mini FizzBuzz (1 to 6)',
      task: 'Write a loop from 1 to 6. If divisible by 3, print "Fizz", otherwise print the number `i`.',
      starterCode: `for (int i = 1; i <= 6; i++) {
    if (i % 3 == 0) {
        System.out.println("Fizz");
    } else {
        System.out.println(i);
    }
}`,
      requiredKeywords: ['for', 'i <= 6', 'i % 3 == 0', 'Fizz', 'else'],
      modelAnswer: `for (int i = 1; i <= 6; i++) {
    if (i % 3 == 0) {
        System.out.println("Fizz");
    } else {
        System.out.println(i);
    }
}`,
      thinkFirst: [
        '1. Loop i from 1 to 6.',
        '2. Check if divisible by 3: if (i % 3 == 0)',
        '3. If true, print "Fizz".',
        '4. Otherwise (else), print i.'
      ],
      syntaxReminder: 'if (i % 3 == 0) {\n    System.out.println("Fizz");\n} else {\n    System.out.println(i);\n}',
      hints: [
        'Use if-else inside the for loop.',
        'Check i % 3 == 0 for Fizz.',
        'Else print i.'
      ],
      xpReward: 50
    }
  ]
};
