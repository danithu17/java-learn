/**
 * ============================================================================
 * MODULE: For Loop Mastery (Comprehensive 60-Scenario Edition)
 * ============================================================================
 * 6 Progressive Stages • 60 Real-Life Scenarios (10 per stage) • Full Java Code Practice
 * ============================================================================
 */

export const forLoopModule = {
  id: 'for-loop',
  title: 'For Loop Mastery',
  icon: 'Repeat',
  badge: 'Real-Life Edition',
  description: 'Master loop logic by coding 60 practical scenarios across 6 unlocked stages: from roll calls, elevators, and piggy banks to ATM ciphers and prime sentinels.',
  totalChallenges: 60,

  stages: [
    { id: 1, title: 'Stage 1: Basic Counting', description: 'Count forwards and backwards in roll calls, countdowns, elevators, and battery meters.', minChallengeId: 1, maxChallengeId: 10 },
    { id: 2, title: 'Stage 2: Skipping & Steps', description: 'Step by custom amounts (i += 2, i += 5, i -= 3, i -= 5) for house numbers, highway markers, and alarm clocks.', minChallengeId: 11, maxChallengeId: 20 },
    { id: 3, title: 'Stage 3: Accumulating Totals', description: 'Master the accumulator bucket pattern for piggy banks, bill receipts, step goals, and averages.', minChallengeId: 21, maxChallengeId: 30 },
    { id: 4, title: 'Stage 4: Loops with Decisions (for + if)', description: 'Filter and react inside loops: cricket overs, pass/fail grading, inventory alerts, and FizzBuzz.', minChallengeId: 31, maxChallengeId: 40 },
    { id: 5, title: 'Stage 5: Patterns & Tables', description: 'Nested loops and index algorithms: star stairs, inverted pyramids, chess boards, and word reversals.', minChallengeId: 41, maxChallengeId: 50 },
    { id: 6, title: 'Stage 6: Mini Problem Solving', description: 'Real algorithmic challenges: factorials, powers of 2/3, population compounding, and prime testing.', minChallengeId: 51, maxChallengeId: 60 },
  ],

  // ==========================================================================
  // LESSONS (Concept reference in Learn tab)
  // ==========================================================================
  lessons: [
    {
      id: 'lesson-1',
      title: 'What is a Loop & Why We Use It',
      duration: '3 min read',
      summary: 'Why repeating code manually is slow and error-prone.',
      content: `
### Why Loops Exist
Imagine you run a supermarket. A customer buys 50 items. Would you write:
\`\`\`java
System.out.println("Processing item 1");
System.out.println("Processing item 2");
// ... 50 times?!
\`\`\`
No! You write **one loop** of 3 lines:
\`\`\`java
for (int i = 1; i <= 50; i++) {
    System.out.println("Processing item " + i);
}
\`\`\`
Loops let you write instructions once and tell the computer to repeat them as many times as needed.
      `
    },
    {
      id: 'lesson-2',
      title: 'Anatomy of a For Loop',
      duration: '4 min read',
      summary: 'The 3 gears that make every for-loop spin.',
      content: `
\`\`\`
for ( INITIALIZATION ; CONDITION ; UPDATE ) {
    // LOOP BODY (Code that runs each round)
}
\`\`\`
1. **Initialization (\`int i = 1\`):** Sets starting value. Runs only ONCE at the start.
2. **Condition (\`i <= 10\`):** Gatekeeper. Checked BEFORE every round. If true -> run body. If false -> exit loop.
3. **Update (\`i++\`):** Changes the counter at the end of each round (e.g. \`i++\`, \`i--\`, \`i += 5\`).
      `
    },
    {
      id: 'lesson-3',
      title: 'Step-by-Step Execution Order',
      duration: '3 min read',
      summary: 'Watch how Java moves through each iteration.',
      content: `
For \`for (int i = 1; i <= 3; i++) { System.out.println(i); }\`:
1. Start: \`i = 1\`.
2. Check: \`1 <= 3\`? True. Print \`1\`.
3. Update: \`i++\` -> \`i = 2\`.
4. Check: \`2 <= 3\`? True. Print \`2\`.
5. Update: \`i++\` -> \`i = 3\`.
6. Check: \`3 <= 3\`? True. Print \`3\`.
7. Update: \`i++\` -> \`i = 4\`.
8. Check: \`4 <= 3\`? False! Stop loop!
      `
    },
    {
      id: 'lesson-4',
      title: 'The Accumulator ("Bucket") Pattern',
      duration: '4 min read',
      summary: 'How to calculate running totals, counts, and sums.',
      content: `
To calculate a total:
1. Create a variable (bucket) **BEFORE** the loop: \`int total = 0;\`
2. Inside the loop, add to it: \`total += amount;\`
3. **CRITICAL:** Print the bucket **AFTER** the loop finishes!
      `
    },
    {
      id: 'lesson-5',
      title: 'Common Beginner Mistakes to Avoid',
      duration: '3 min read',
      summary: 'Semicolons, off-by-one errors, and infinite loops.',
      content: `
- 🚫 **Accidental Semicolon:** Never put \`;\` after \`for(...);\`. It terminates the loop immediately!
- ⚠️ **Off-By-One:** \`i < 10\` stops at 9. Use \`i <= 10\` to include 10.
- ♾️ **Wrong Update:** If you write \`i++\` in a countdown (\`for (int i=10; i>=1; i++)\`), \`i\` grows forever!
      `
    }
  ],

  // ==========================================================================
  // 60 SCENARIO CHALLENGES
  // ==========================================================================
  challenges: [
    // ------------------------------------------------------------------------
    // STAGE 1: BASIC COUNTING (Challenges 1 to 10)
    // ------------------------------------------------------------------------
    {
      id: 1,
      stageId: 1,
      isBoss: false,
      title: 'Classroom Roll Call',
      scenario: 'You are a teacher taking attendance in the morning. Your class has 20 students numbered 1 to 20. You need to call each student number one by one.',
      task: 'Write a for loop that prints "Student 1" up to "Student 20", each on a new line.',
      sampleOutput: `Student 1\nStudent 2\n...\nStudent 20`,
      expectedOutput: Array.from({ length: 20 }, (_, i) => `Student ${i + 1}`).join('\n'),
      thinkFirst: [
        '1. Start counting with a variable: int i = 1;',
        '2. Continue until the 20th student: i <= 20;',
        '3. Increase the student number by 1 each time: i++;',
        '4. Inside the loop: print "Student " + i;'
      ],
      syntaxReminder: `for (int i = 1; i <= 20; i++) {\n    System.out.println("Student " + i);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print "Student 1" through "Student 20"\n        \n    }\n}`,
      hints: [
        'Initialize your loop with: for (int i = 1; i <= 20; i++)',
        'Inside the loop, use string concatenation: System.out.println("Student " + i);',
        'Make sure to use <= 20 so student 20 is not skipped!'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 20; i++) {\n            System.out.println("Student " + i);\n        }\n    }\n}`,
      explanation: [
        'int i = 1; initializes student roll counter at 1.',
        'i <= 20; ensures the roll call runs for all 20 students.',
        'i++; increments student number by 1 after each call.',
        'System.out.println("Student " + i); outputs the line.'
      ],
      xpReward: 30
    },

    {
      id: 2,
      stageId: 1,
      isBoss: false,
      title: 'Rocket Launch Countdown',
      scenario: 'You are the flight director at NASA mission control. The countdown clock must count backwards from 10 to 1 second, and once reaching zero, trigger "Liftoff!".',
      task: 'Write a loop that prints numbers from 10 down to 1 on separate lines, followed by "Liftoff!" after the loop finishes.',
      sampleOutput: `10\n9\n...\n1\nLiftoff!`,
      expectedOutput: `10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nLiftoff!`,
      thinkFirst: [
        '1. Start counting from the top: int i = 10;',
        '2. Keep looping while i is greater than or equal to 1: i >= 1;',
        '3. Count DOWN by 1 each round: i--;',
        '4. AFTER the loop finishes, print "Liftoff!" outside the loop.'
      ],
      syntaxReminder: `for (int i = 10; i >= 1; i--) {\n    System.out.println(i);\n}\nSystem.out.println("Liftoff!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Countdown from 10 to 1, then print "Liftoff!"\n        \n    }\n}`,
      hints: [
        'Start at 10 and decrease: for (int i = 10; i >= 1; i--)',
        'Inside the loop, print i: System.out.println(i);',
        'Place System.out.println("Liftoff!"); outside the curly braces {}.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 10; i >= 1; i--) {\n            System.out.println(i);\n        }\n        System.out.println("Liftoff!");\n    }\n}`,
      explanation: [
        'int i = 10; starts the countdown at 10.',
        'i >= 1; keeps counting until 1.',
        'i--; decreases the counter by 1 in each round.',
        'System.out.println("Liftoff!"); runs only after the loop completes.'
      ],
      xpReward: 30
    },

    {
      id: 3,
      stageId: 1,
      isBoss: false,
      title: 'Fence Painting',
      scenario: 'You are painting a wooden fence with 8 planks. To track your progress, you want your console to announce each plank as you paint it.',
      task: 'Write a loop that prints "Painting plank 1" up to "Painting plank 8".',
      sampleOutput: `Painting plank 1\nPainting plank 2\n...\nPainting plank 8`,
      expectedOutput: Array.from({ length: 8 }, (_, i) => `Painting plank ${i + 1}`).join('\n'),
      thinkFirst: [
        '1. Start at plank 1: int plank = 1;',
        '2. Stop when plank 8 is finished: plank <= 8;',
        '3. Advance by 1 plank: plank++;',
        '4. Print: "Painting plank " + plank;'
      ],
      syntaxReminder: `for (int plank = 1; plank <= 8; plank++) {\n    System.out.println("Painting plank " + plank);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print "Painting plank 1" up to "Painting plank 8"\n        \n    }\n}`,
      hints: [
        'Loop from 1 to 8: for (int i = 1; i <= 8; i++)',
        'Print: System.out.println("Painting plank " + i);',
        'Ensure exact capitalization: "Painting plank "'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 8; i++) {\n            System.out.println("Painting plank " + i);\n        }\n    }\n}`,
      explanation: [
        'Counter i represents each fence plank from 1 to 8.',
        'Each iteration prints the message with the current plank number.'
      ],
      xpReward: 30
    },

    {
      id: 4,
      stageId: 1,
      isBoss: false,
      title: 'City Bus Stops',
      scenario: 'You are programming the automated announcement screen on Route 42. The bus travels through 15 stops along the main street.',
      task: 'Print "Stop 1", "Stop 2", ..., up to "Stop 15", each on its own line.',
      sampleOutput: `Stop 1\nStop 2\n...\nStop 15`,
      expectedOutput: Array.from({ length: 15 }, (_, i) => `Stop ${i + 1}`).join('\n'),
      thinkFirst: [
        '1. Start at Stop 1: int stop = 1;',
        '2. Continue until Stop 15: stop <= 15;',
        '3. Step by 1: stop++;',
        '4. Print: "Stop " + stop;'
      ],
      syntaxReminder: `for (int stop = 1; stop <= 15; stop++) {\n    System.out.println("Stop " + stop);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Announce "Stop 1" to "Stop 15"\n        \n    }\n}`,
      hints: [
        'Header: for (int i = 1; i <= 15; i++)',
        'Print: System.out.println("Stop " + i);',
        'Spacing matters: "Stop " has a space before the closing quote.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 15; i++) {\n            System.out.println("Stop " + i);\n        }\n    }\n}`,
      explanation: [
        'Loops 15 times from 1 to 15.',
        'Prints the stop announcement each round.'
      ],
      xpReward: 30
    },

    {
      id: 5,
      stageId: 1,
      isBoss: false,
      title: 'Elevator Floor Display',
      scenario: 'You are writing the digital screen display for an elevator in a 10-story department store. As the elevator ascends, it displays the floor number.',
      task: 'Print "Elevator at Floor 1" through "Elevator at Floor 10", each on its own line.',
      sampleOutput: `Elevator at Floor 1\nElevator at Floor 2\n...\nElevator at Floor 10`,
      expectedOutput: Array.from({ length: 10 }, (_, i) => `Elevator at Floor ${i + 1}`).join('\n'),
      thinkFirst: [
        '1. Start at Floor 1: int floor = 1;',
        '2. Stop at Floor 10: floor <= 10;',
        '3. Ascend 1 floor at a time: floor++;',
        '4. Print: "Elevator at Floor " + floor;'
      ],
      syntaxReminder: `for (int floor = 1; floor <= 10; floor++) {\n    System.out.println("Elevator at Floor " + floor);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print "Elevator at Floor 1" up to "Elevator at Floor 10"\n        \n    }\n}`,
      hints: [
        'Loop 1 to 10: for (int floor = 1; floor <= 10; floor++)',
        'Print: System.out.println("Elevator at Floor " + floor);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int floor = 1; floor <= 10; floor++) {\n            System.out.println("Elevator at Floor " + floor);\n        }\n    }\n}`,
      explanation: [
        'Runs for floors 1 through 10, displaying current floor.'
      ],
      xpReward: 30
    },

    {
      id: 6,
      stageId: 1,
      isBoss: false,
      title: 'Book Reading Progress',
      scenario: 'You are tracking your daily reading habit. You set a goal to read 5 chapters today and want a confirmation logged after finishing each one.',
      task: 'Print "Finished reading chapter 1" up to "Finished reading chapter 5".',
      sampleOutput: `Finished reading chapter 1\nFinished reading chapter 2\nFinished reading chapter 3\nFinished reading chapter 4\nFinished reading chapter 5`,
      expectedOutput: `Finished reading chapter 1\nFinished reading chapter 2\nFinished reading chapter 3\nFinished reading chapter 4\nFinished reading chapter 5`,
      thinkFirst: [
        '1. Loop counter from 1 to 5;',
        '2. Print: "Finished reading chapter " + i;'
      ],
      syntaxReminder: `for (int i = 1; i <= 5; i++) {\n    System.out.println("Finished reading chapter " + i);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print "Finished reading chapter 1" to 5\n        \n    }\n}`,
      hints: [
        'Loop: for (int i = 1; i <= 5; i++)',
        'Print string with i variable.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 5; i++) {\n            System.out.println("Finished reading chapter " + i);\n        }\n    }\n}`,
      explanation: [
        'Loops 5 times tracking chapter completion.'
      ],
      xpReward: 30
    },

    {
      id: 7,
      stageId: 1,
      isBoss: false,
      title: 'Morning Pushup Tracker',
      scenario: 'Your fitness app logs your pushups one by one during morning workout sets up to 8 pushups.',
      task: 'Print "Pushup 1 completed" up to "Pushup 8 completed".',
      sampleOutput: `Pushup 1 completed\nPushup 2 completed\n...\nPushup 8 completed`,
      expectedOutput: Array.from({ length: 8 }, (_, i) => `Pushup ${i + 1} completed`).join('\n'),
      thinkFirst: [
        '1. Loop i from 1 to 8;',
        '2. Print: "Pushup " + i + " completed";'
      ],
      syntaxReminder: `for (int i = 1; i <= 8; i++) {\n    System.out.println("Pushup " + i + " completed");\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print "Pushup 1 completed" up to 8\n        \n    }\n}`,
      hints: [
        'Loop runs 8 times: for (int i = 1; i <= 8; i++)',
        'Print with text: "Pushup " + i + " completed"'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 8; i++) {\n            System.out.println("Pushup " + i + " completed");\n        }\n    }\n}`,
      explanation: [
        'Iterates 1 through 8 displaying pushup completion.'
      ],
      xpReward: 30
    },

    {
      id: 8,
      stageId: 1,
      isBoss: false,
      title: 'Phone Battery Charging',
      scenario: 'You plug in your dead smartphone. The battery percentage indicator climbs from 1% up to 5%.',
      task: 'Print "Battery: 1%" up to "Battery: 5%", each on a new line.',
      sampleOutput: `Battery: 1%\nBattery: 2%\nBattery: 3%\nBattery: 4%\nBattery: 5%`,
      expectedOutput: `Battery: 1%\nBattery: 2%\nBattery: 3%\nBattery: 4%\nBattery: 5%`,
      thinkFirst: [
        '1. Loop percent from 1 to 5;',
        '2. Print: "Battery: " + percent + "%";'
      ],
      syntaxReminder: `for (int p = 1; p <= 5; p++) {\n    System.out.println("Battery: " + p + "%");\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print "Battery: 1%" through "Battery: 5%"\n        \n    }\n}`,
      hints: [
        'Header: for (int p = 1; p <= 5; p++)',
        'Print: System.out.println("Battery: " + p + "%");'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int p = 1; p <= 5; p++) {\n            System.out.println("Battery: " + p + "%");\n        }\n    }\n}`,
      explanation: [
        'Concatenates variable p with the % symbol.'
      ],
      xpReward: 30
    },

    {
      id: 9,
      stageId: 1,
      isBoss: false,
      title: 'Microwave Timer Countdown',
      scenario: 'A microwave timer counts down the final 5 seconds before heating finishes, followed by a loud "BEEP!".',
      task: 'Count down from 5 to 1, printing each number on a new line. Then print "BEEP!" after the loop.',
      sampleOutput: `5\n4\n3\n2\n1\nBEEP!`,
      expectedOutput: `5\n4\n3\n2\n1\nBEEP!`,
      thinkFirst: [
        '1. Start at 5: int sec = 5;',
        '2. Condition: sec >= 1;',
        '3. Decrement: sec--;',
        '4. Outside loop: print "BEEP!";'
      ],
      syntaxReminder: `for (int s = 5; s >= 1; s--) {\n    System.out.println(s);\n}\nSystem.out.println("BEEP!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Countdown 5 to 1, then print "BEEP!"\n        \n    }\n}`,
      hints: [
        'Countdown loop: for (int s = 5; s >= 1; s--)',
        'Print BEEP! after the loop curly brace.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int s = 5; s >= 1; s--) {\n            System.out.println(s);\n        }\n        System.out.println("BEEP!");\n    }\n}`,
      explanation: [
        'Runs countdown 5 down to 1, then prints alert sound text.'
      ],
      xpReward: 35
    },

    {
      id: 10,
      stageId: 1,
      isBoss: true,
      title: '👑 Stage 1 Boss: Birthday Candles on Cake',
      scenario: 'It is a child\'s 7th birthday! As the baker, you need to place candles on the cake. For each candle, print "Candle 1 on cake", "Candle 2 on cake", etc., and after placing all candles, print "Happy Birthday!".',
      task: 'Loop from 1 to 7. Print "Candle " + i + " on cake". After the loop ends, print "Happy Birthday!".',
      sampleOutput: `Candle 1 on cake\nCandle 2 on cake\n...\nCandle 7 on cake\nHappy Birthday!`,
      expectedOutput: `Candle 1 on cake\nCandle 2 on cake\nCandle 3 on cake\nCandle 4 on cake\nCandle 5 on cake\nCandle 6 on cake\nCandle 7 on cake\nHappy Birthday!`,
      thinkFirst: [
        '1. Set your loop counter to start at 1: int i = 1;',
        '2. Repeat while i <= 7;',
        '3. Inside loop: print "Candle " + i + " on cake";',
        '4. Outside and after loop: print "Happy Birthday!";'
      ],
      syntaxReminder: `for (int i = 1; i <= 7; i++) {\n    System.out.println("Candle " + i + " on cake");\n}\nSystem.out.println("Happy Birthday!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // STAGE 1 BOSS CHALLENGE:\n        // Place 7 candles on cake, then print "Happy Birthday!"\n        \n    }\n}`,
      hints: [
        'For loop runs from 1 to 7: for (int i = 1; i <= 7; i++)',
        'Print inside: System.out.println("Candle " + i + " on cake");',
        'Happy Birthday message must be placed AFTER the loop finishes!'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 7; i++) {\n            System.out.println("Candle " + i + " on cake");\n        }\n        System.out.println("Happy Birthday!");\n    }\n}`,
      explanation: [
        'Loop places candles 1 to 7 one by one.',
        'Once all 7 are placed, the final celebration message prints.'
      ],
      xpReward: 45
    },

    // ------------------------------------------------------------------------
    // STAGE 2: SKIPPING & STEPS (Challenges 11 to 20)
    // ------------------------------------------------------------------------
    {
      id: 11,
      stageId: 2,
      isBoss: false,
      title: 'Even House Numbers',
      scenario: 'A postal delivery worker only delivers letters to the even-numbered houses on Riverside Avenue today, from house 2 up to house 30.',
      task: 'Write a loop that prints even numbers from 2 up to 30, stepping by 2 each time.',
      sampleOutput: `2\n4\n6\n...\n30`,
      expectedOutput: Array.from({ length: 15 }, (_, i) => `${(i + 1) * 2}`).join('\n'),
      thinkFirst: [
        '1. Start at house 2: int i = 2;',
        '2. Stop at house 30: i <= 30;',
        '3. Step by 2 houses instead of 1: i += 2;',
        '4. Print i;'
      ],
      syntaxReminder: `for (int i = 2; i <= 30; i += 2) {\n    System.out.println(i);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print even numbers 2, 4, 6 ... up to 30\n        \n    }\n}`,
      hints: [
        'Start at 2: int i = 2;',
        'Use the step increment: i += 2 (instead of i++)',
        'Condition is: i <= 30'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 2; i <= 30; i += 2) {\n            System.out.println(i);\n        }\n    }\n}`,
      explanation: [
        'i += 2 increments i by 2 each round, skipping odd numbers cleanly.'
      ],
      xpReward: 35
    },

    {
      id: 12,
      stageId: 2,
      isBoss: false,
      title: 'Express Highway Milestones',
      scenario: 'You are driving on an express toll highway. Every 5 kilometers, there is a highway milestone marker from 5 km up to 50 km.',
      task: 'Print milestones 5, 10, 15, ..., up to 50 in the format: "Mile marker: X km".',
      sampleOutput: `Mile marker: 5 km\nMile marker: 10 km\n...\nMile marker: 50 km`,
      expectedOutput: Array.from({ length: 10 }, (_, i) => `Mile marker: ${(i + 1) * 5} km`).join('\n'),
      thinkFirst: [
        '1. Start at 5: int km = 5;',
        '2. Keep going until 50: km <= 50;',
        '3. Add 5 km every round: km += 5;',
        '4. Print: "Mile marker: " + km + " km";'
      ],
      syntaxReminder: `for (int km = 5; km <= 50; km += 5) {\n    System.out.println("Mile marker: " + km + " km");\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print milestones from 5 km to 50 km\n        \n    }\n}`,
      hints: [
        'Loop header: for (int km = 5; km <= 50; km += 5)',
        'Print statement: System.out.println("Mile marker: " + km + " km");'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int km = 5; km <= 50; km += 5) {\n            System.out.println("Mile marker: " + km + " km");\n        }\n    }\n}`,
      explanation: [
        'Starts at 5, steps by +5 each iteration, and formats the output string.'
      ],
      xpReward: 35
    },

    {
      id: 13,
      stageId: 2,
      isBoss: false,
      title: 'Odd Concert Tickets',
      scenario: 'A music festival is raffling prize tickets to attendees holding odd ticket numbers between 1 and 21.',
      task: 'Print odd ticket numbers from 1 up to 21 (1, 3, 5, ..., 21), each on a new line.',
      sampleOutput: `1\n3\n5\n...\n21`,
      expectedOutput: Array.from({ length: 11 }, (_, i) => `${i * 2 + 1}`).join('\n'),
      thinkFirst: [
        '1. Start at odd number 1: int ticket = 1;',
        '2. Continue until ticket <= 21;',
        '3. Add 2 each time to jump to next odd: ticket += 2;',
        '4. Print ticket;'
      ],
      syntaxReminder: `for (int t = 1; t <= 21; t += 2) {\n    System.out.println(t);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print odd numbers 1, 3, 5 ... 21\n        \n    }\n}`,
      hints: [
        'Start at 1, condition <= 21, step by t += 2',
        'Inside: System.out.println(t);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int t = 1; t <= 21; t += 2) {\n            System.out.println(t);\n        }\n    }\n}`,
      explanation: [
        'Starting at 1 and incrementing by 2 guarantees every visited number is odd.'
      ],
      xpReward: 35
    },

    {
      id: 14,
      stageId: 2,
      isBoss: false,
      title: 'Countdown by 3s',
      scenario: 'A fitness trainer has clients do intervals counting down by 3s from 30 seconds down to 3 seconds.',
      task: 'Print numbers counting down from 30 to 3 by subtracting 3 each round (30, 27, 24, ..., 3).',
      sampleOutput: `30\n27\n24\n...\n3`,
      expectedOutput: `30\n27\n24\n21\n18\n15\n12\n9\n6\n3`,
      thinkFirst: [
        '1. Start at high value 30: int sec = 30;',
        '2. Condition checks if >= 3: sec >= 3;',
        '3. Decrease by 3 each time: sec -= 3;',
        '4. Print sec;'
      ],
      syntaxReminder: `for (int sec = 30; sec >= 3; sec -= 3) {\n    System.out.println(sec);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Countdown from 30 down to 3, stepping by -3\n        \n    }\n}`,
      hints: [
        'Start at 30: int i = 30;',
        'Keep running while i >= 3;',
        'Decrease by 3: i -= 3;'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 30; i >= 3; i -= 3) {\n            System.out.println(i);\n        }\n    }\n}`,
      explanation: [
        'Decrements by 3 every iteration until reaching 3.'
      ],
      xpReward: 35
    },

    {
      id: 15,
      stageId: 2,
      isBoss: false,
      title: 'Decades in History',
      scenario: 'A museum timeline exhibits major historical events by decades from year 1900 up to year 1950.',
      task: 'Print "Decade: 1900" up to "Decade: 1950", stepping by 10 years each time.',
      sampleOutput: `Decade: 1900\nDecade: 1910\nDecade: 1920\nDecade: 1930\nDecade: 1940\nDecade: 1950`,
      expectedOutput: `Decade: 1900\nDecade: 1910\nDecade: 1920\nDecade: 1930\nDecade: 1940\nDecade: 1950`,
      thinkFirst: [
        '1. Start at 1900: int yr = 1900;',
        '2. Stop at 1950: yr <= 1950;',
        '3. Step by 10: yr += 10;',
        '4. Print "Decade: " + yr;'
      ],
      syntaxReminder: `for (int yr = 1900; yr <= 1950; yr += 10) {\n    System.out.println("Decade: " + yr);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print decades from 1900 to 1950 stepping by 10\n        \n    }\n}`,
      hints: [
        'Use yr += 10 in update step.',
        'Starts at 1900 and finishes at 1950.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int yr = 1900; yr <= 1950; yr += 10) {\n            System.out.println("Decade: " + yr);\n        }\n    }\n}`,
      explanation: [
        'Advances decade counter by 10 each time.'
      ],
      xpReward: 35
    },

    {
      id: 16,
      stageId: 2,
      isBoss: false,
      title: 'VIP Cinema Seats by 4s',
      scenario: 'A luxury cinema hall numbers its VIP recliner seats by multiples of 4 from seat 4 up to seat 20.',
      task: 'Print "Seat 4", "Seat 8", "Seat 12", "Seat 16", "Seat 20", each on its own line.',
      sampleOutput: `Seat 4\nSeat 8\nSeat 12\nSeat 16\nSeat 20`,
      expectedOutput: `Seat 4\nSeat 8\nSeat 12\nSeat 16\nSeat 20`,
      thinkFirst: [
        '1. Start at 4: int seat = 4;',
        '2. Stop at 20: seat <= 20;',
        '3. Step by 4: seat += 4;',
        '4. Print "Seat " + seat;'
      ],
      syntaxReminder: `for (int seat = 4; seat <= 20; seat += 4) {\n    System.out.println("Seat " + seat);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print VIP seats from 4 up to 20 stepping by 4\n        \n    }\n}`,
      hints: [
        'for (int seat = 4; seat <= 20; seat += 4)',
        'Inside: System.out.println("Seat " + seat);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int seat = 4; seat <= 20; seat += 4) {\n            System.out.println("Seat " + seat);\n        }\n    }\n}`,
      explanation: [
        'Steps by 4 to print the 5 VIP seat identifiers.'
      ],
      xpReward: 35
    },

    {
      id: 17,
      stageId: 2,
      isBoss: false,
      title: 'Jump Rope Milestones by 10s',
      scenario: 'During rope jumping practice, your smart trainer calls out milestone jumps every 10 jumps from 10 up to 60 jumps.',
      task: 'Print "10 jumps", "20 jumps", ..., up to "60 jumps".',
      sampleOutput: `10 jumps\n20 jumps\n30 jumps\n40 jumps\n50 jumps\n60 jumps`,
      expectedOutput: `10 jumps\n20 jumps\n30 jumps\n40 jumps\n50 jumps\n60 jumps`,
      thinkFirst: [
        '1. Loop i from 10 to 60 stepping by 10: i += 10;',
        '2. Print i + " jumps";'
      ],
      syntaxReminder: `for (int i = 10; i <= 60; i += 10) {\n    System.out.println(i + " jumps");\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print milestones from 10 jumps up to 60 jumps\n        \n    }\n}`,
      hints: [
        'Loop starts at 10, condition i <= 60, update i += 10',
        'Print: i + " jumps"'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 10; i <= 60; i += 10) {\n            System.out.println(i + " jumps");\n        }\n    }\n}`,
      explanation: [
        'Logs jumps every 10 repetitions.'
      ],
      xpReward: 35
    },

    {
      id: 18,
      stageId: 2,
      isBoss: false,
      title: 'Pedestrian Traffic Light Countdown',
      scenario: 'A crosswalk traffic timer displays remaining green light seconds in 5-second intervals from 15 down to 0.',
      task: 'Print "15 sec", "10 sec", "5 sec", "0 sec", each on its own line.',
      sampleOutput: `15 sec\n10 sec\n5 sec\n0 sec`,
      expectedOutput: `15 sec\n10 sec\n5 sec\n0 sec`,
      thinkFirst: [
        '1. Start at 15: int s = 15;',
        '2. Stop at 0: s >= 0;',
        '3. Subtract 5 each time: s -= 5;',
        '4. Print s + " sec";'
      ],
      syntaxReminder: `for (int s = 15; s >= 0; s -= 5) {\n    System.out.println(s + " sec");\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Countdown by 5s from 15 sec down to 0 sec\n        \n    }\n}`,
      hints: [
        'Condition must allow 0: s >= 0;',
        'Update step: s -= 5;'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int s = 15; s >= 0; s -= 5) {\n            System.out.println(s + " sec");\n        }\n    }\n}`,
      explanation: [
        'Decreases by 5 until reaching zero.'
      ],
      xpReward: 35
    },

    {
      id: 19,
      stageId: 2,
      isBoss: false,
      title: 'Swimming Pool Laps by 2s',
      scenario: 'A swimmer only logs their split times after every round of 2 laps (2, 4, 6, 8, 10).',
      task: 'Print "Lap 2", "Lap 4", "Lap 6", "Lap 8", "Lap 10", each on its own line.',
      sampleOutput: `Lap 2\nLap 4\nLap 6\nLap 8\nLap 10`,
      expectedOutput: `Lap 2\nLap 4\nLap 6\nLap 8\nLap 10`,
      thinkFirst: [
        '1. Loop lap = 2; lap <= 10; lap += 2;',
        '2. Print: "Lap " + lap;'
      ],
      syntaxReminder: `for (int lap = 2; lap <= 10; lap += 2) {\n    System.out.println("Lap " + lap);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print "Lap 2" through "Lap 10" by 2s\n        \n    }\n}`,
      hints: [
        'Start at 2, end at 10, step by lap += 2',
        'Print: System.out.println("Lap " + lap);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int lap = 2; lap <= 10; lap += 2) {\n            System.out.println("Lap " + lap);\n        }\n    }\n}`,
      explanation: [
        'Increments lap counter by 2 to log every pair of completed laps.'
      ],
      xpReward: 35
    },

    {
      id: 20,
      stageId: 2,
      isBoss: true,
      title: '👑 Stage 2 Boss: Snooze Alarm Clock',
      scenario: 'You are programming a smart alarm clock. When the snooze button is activated, the alarm chime should ring every 15 minutes from minute 0 up to minute 60.',
      task: 'Print "Chime at minute " + m for minutes 0, 15, 30, 45, 60. Then print "Wake up!" after the loop.',
      sampleOutput: `Chime at minute 0\nChime at minute 15\nChime at minute 30\nChime at minute 45\nChime at minute 60\nWake up!`,
      expectedOutput: `Chime at minute 0\nChime at minute 15\nChime at minute 30\nChime at minute 45\nChime at minute 60\nWake up!`,
      thinkFirst: [
        '1. Start at minute 0: int m = 0;',
        '2. Run while m <= 60;',
        '3. Step by 15: m += 15;',
        '4. Print "Chime at minute " + m inside loop;',
        '5. Print "Wake up!" outside loop;'
      ],
      syntaxReminder: `for (int m = 0; m <= 60; m += 15) {\n    System.out.println("Chime at minute " + m);\n}\nSystem.out.println("Wake up!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // STAGE 2 BOSS CHALLENGE:\n        // Chime every 15 minutes from 0 to 60, then "Wake up!"\n        \n    }\n}`,
      hints: [
        'Start at 0: for (int m = 0; m <= 60; m += 15)',
        'Print chime line inside loop.',
        'Print "Wake up!" outside after loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int m = 0; m <= 60; m += 15) {\n            System.out.println("Chime at minute " + m);\n        }\n        System.out.println("Wake up!");\n    }\n}`,
      explanation: [
        'm starts at 0 and adds 15 each round (0, 15, 30, 45, 60).',
        'After the 60-minute cycle, the final wake-up message sounds.'
      ],
      xpReward: 50
    },

    // ------------------------------------------------------------------------
    // STAGE 3: ACCUMULATING TOTALS (Challenges 21 to 30)
    // ------------------------------------------------------------------------
    {
      id: 21,
      stageId: 3,
      isBoss: false,
      title: 'Daily Piggy Bank Savings',
      scenario: 'You decide to build a daily savings habit! Every day for 30 days, you deposit exactly Rs. 10 into your piggy bank.',
      task: 'Using a loop from day 1 to 30, accumulate Rs. 10 each day into a savings variable. At the end, print "Total Savings: Rs. " + total.',
      sampleOutput: `Total Savings: Rs. 300`,
      expectedOutput: `Total Savings: Rs. 300`,
      thinkFirst: [
        '1. Create accumulator bucket BEFORE loop: int total = 0;',
        '2. Loop days 1 to 30: for (int day = 1; day <= 30; day++)',
        '3. In each round, add 10: total += 10;',
        '4. AFTER loop ends, print: "Total Savings: Rs. " + total;'
      ],
      syntaxReminder: `int total = 0;\nfor (int day = 1; day <= 30; day++) {\n    total += 10;\n}\nSystem.out.println("Total Savings: Rs. " + total);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Accumulate Rs. 10 for 30 days, then print total savings\n        \n    }\n}`,
      hints: [
        'Declare int total = 0; before the loop.',
        'Inside loop write: total += 10;',
        'Print outside: System.out.println("Total Savings: Rs. " + total);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int total = 0;\n        for (int day = 1; day <= 30; day++) {\n            total += 10;\n        }\n        System.out.println("Total Savings: Rs. " + total);\n    }\n}`,
      explanation: [
        'total begins at 0.',
        '30 iterations adding 10 each time results in 300.',
        'Printed only once after loop finishes.'
      ],
      xpReward: 40
    },

    {
      id: 22,
      stageId: 3,
      isBoss: false,
      title: 'Marks Total: Sum 1 to 100',
      scenario: 'A mathematician named Gauss once stunned his teacher by adding all integers from 1 to 100 in seconds. Now let\'s have Java do it!',
      task: 'Calculate the sum of all numbers from 1 to 100 using a loop, and print "Sum: " + sum.',
      sampleOutput: `Sum: 5050`,
      expectedOutput: `Sum: 5050`,
      thinkFirst: [
        '1. Bucket: int sum = 0;',
        '2. Loop: for (int i = 1; i <= 100; i++)',
        '3. Accumulate: sum += i;',
        '4. Print: "Sum: " + sum;'
      ],
      syntaxReminder: `int sum = 0;\nfor (int i = 1; i <= 100; i++) {\n    sum += i;\n}\nSystem.out.println("Sum: " + sum);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Sum numbers 1 to 100 and print "Sum: 5050"\n        \n    }\n}`,
      hints: [
        'Initialize sum to 0 before the loop.',
        'Inside the loop: sum += i;',
        'Print outside the loop braces.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 100; i++) {\n            sum += i;\n        }\n        System.out.println("Sum: " + sum);\n    }\n}`,
      explanation: [
        'sum accumulates 1 + 2 + 3 + ... + 100 = 5050.',
        'Result printed after loop completes.'
      ],
      xpReward: 40
    },

    {
      id: 23,
      stageId: 3,
      isBoss: false,
      title: 'Cashier Running Bill',
      scenario: 'You are writing the billing software for a grocery store cashier. A customer buys 4 items, each costing Rs. 120. The register must display the updated running bill after scanning each item.',
      task: 'Loop 4 times. Add 120 to bill each time and print "Item " + i + " running total: Rs. " + bill.',
      sampleOutput: `Item 1 running total: Rs. 120\nItem 2 running total: Rs. 240\nItem 3 running total: Rs. 360\nItem 4 running total: Rs. 480`,
      expectedOutput: `Item 1 running total: Rs. 120\nItem 2 running total: Rs. 240\nItem 3 running total: Rs. 360\nItem 4 running total: Rs. 480`,
      thinkFirst: [
        '1. Bucket: int bill = 0;',
        '2. Loop 4 items: for (int i = 1; i <= 4; i++)',
        '3. Add price: bill += 120;',
        '4. Print INSIDE the loop so customer sees each step!'
      ],
      syntaxReminder: `int bill = 0;\nfor (int i = 1; i <= 4; i++) {\n    bill += 120;\n    System.out.println("Item " + i + " running total: Rs. " + bill);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print running bill after each of the 4 items\n        \n    }\n}`,
      hints: [
        'Notice that here, we print INSIDE the loop because it is a RUNNING total!',
        'bill starts at 0, adds 120 each round.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int bill = 0;\n        for (int i = 1; i <= 4; i++) {\n            bill += 120;\n            System.out.println("Item " + i + " running total: Rs. " + bill);\n        }\n    }\n}`,
      explanation: [
        'Because the receipt prints after each item, print statement is inside the loop body.'
      ],
      xpReward: 40
    },

    {
      id: 24,
      stageId: 3,
      isBoss: false,
      title: 'Weekly Step Goal Tracker',
      scenario: 'You wear a fitness band. For each of the 7 days of the week, you walked 1000 steps. Calculate your total weekly step count.',
      task: 'Loop through days 1 to 7, adding 1000 steps each day into totalSteps. Print "Total Steps: " + totalSteps.',
      sampleOutput: `Total Steps: 7000`,
      expectedOutput: `Total Steps: 7000`,
      thinkFirst: [
        '1. Bucket: int totalSteps = 0;',
        '2. Loop 1 to 7: for (int d = 1; d <= 7; d++)',
        '3. Add: totalSteps += 1000;',
        '4. Print outside: "Total Steps: " + totalSteps;'
      ],
      syntaxReminder: `int totalSteps = 0;\nfor (int d = 1; d <= 7; d++) {\n    totalSteps += 1000;\n}\nSystem.out.println("Total Steps: " + totalSteps);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Accumulate 1000 steps for 7 days, print total\n        \n    }\n}`,
      hints: [
        'Declare totalSteps = 0 before the loop.',
        'Add 1000 in each of the 7 iterations.',
        'Print after loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int totalSteps = 0;\n        for (int d = 1; d <= 7; d++) {\n            totalSteps += 1000;\n        }\n        System.out.println("Total Steps: " + totalSteps);\n    }\n}`,
      explanation: [
        'Accumulates 7 * 1000 = 7000 steps.'
      ],
      xpReward: 40
    },

    {
      id: 25,
      stageId: 3,
      isBoss: false,
      title: 'Lucky Sevens Counter',
      scenario: 'You are testing a lottery ticket number generator. You need to count how many numbers between 1 and 100 are divisible by 7.',
      task: 'Loop from 1 to 100. If a number is divisible by 7 (i % 7 == 0), increment a counter. Print "Count: " + count at the end.',
      sampleOutput: `Count: 14`,
      expectedOutput: `Count: 14`,
      thinkFirst: [
        '1. Counter bucket: int count = 0;',
        '2. Loop 1 to 100: for (int i = 1; i <= 100; i++)',
        '3. If divisible by 7: if (i % 7 == 0) { count++; }',
        '4. Print outside: "Count: " + count;'
      ],
      syntaxReminder: `int count = 0;\nfor (int i = 1; i <= 100; i++) {\n    if (i % 7 == 0) count++;\n}\nSystem.out.println("Count: " + count);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Count numbers between 1 and 100 divisible by 7\n        \n    }\n}`,
      hints: [
        'Check divisibility using modulo: i % 7 == 0',
        'Increment: count++',
        'Print after loop: System.out.println("Count: " + count);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int count = 0;\n        for (int i = 1; i <= 100; i++) {\n            if (i % 7 == 0) {\n                count++;\n            }\n        }\n        System.out.println("Count: " + count);\n    }\n}`,
      explanation: [
        'Tests all 100 numbers; exactly 14 of them are multiples of 7 (7, 14, 21 ... 98).'
      ],
      xpReward: 40
    },

    {
      id: 26,
      stageId: 3,
      isBoss: false,
      title: 'Sum of Even Numbers up to 10',
      scenario: 'In an elementary algebra class, students are asked to calculate the total sum of even numbers from 2 up to 10 (2 + 4 + 6 + 8 + 10).',
      task: 'Using a loop stepping by +2, calculate the sum of 2, 4, 6, 8, 10 and print "Even Sum: " + sum.',
      sampleOutput: `Even Sum: 30`,
      expectedOutput: `Even Sum: 30`,
      thinkFirst: [
        '1. int sum = 0;',
        '2. Loop: for (int i = 2; i <= 10; i += 2)',
        '3. sum += i;',
        '4. Print "Even Sum: " + sum;'
      ],
      syntaxReminder: `int sum = 0;\nfor (int i = 2; i <= 10; i += 2) {\n    sum += i;\n}\nSystem.out.println("Even Sum: " + sum);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Sum even numbers 2 to 10, print "Even Sum: 30"\n        \n    }\n}`,
      hints: [
        'Start at 2, step by i += 2 up to 10',
        'Accumulate into sum',
        'Print after loop'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 2; i <= 10; i += 2) {\n            sum += i;\n        }\n        System.out.println("Even Sum: " + sum);\n    }\n}`,
      explanation: [
        '2 + 4 + 6 + 8 + 10 = 30.'
      ],
      xpReward: 40
    },

    {
      id: 27,
      stageId: 3,
      isBoss: false,
      title: 'Sum of Odd Numbers up to 9',
      scenario: 'A mathematician is verifying that the sum of the first N odd numbers equals N squared (1 + 3 + 5 + 7 + 9 = 25).',
      task: 'Loop through odd numbers 1, 3, 5, 7, 9, sum them, and print "Odd Sum: " + sum.',
      sampleOutput: `Odd Sum: 25`,
      expectedOutput: `Odd Sum: 25`,
      thinkFirst: [
        '1. int sum = 0;',
        '2. Loop: for (int i = 1; i <= 9; i += 2)',
        '3. sum += i;',
        '4. Print "Odd Sum: " + sum;'
      ],
      syntaxReminder: `int sum = 0;\nfor (int i = 1; i <= 9; i += 2) {\n    sum += i;\n}\nSystem.out.println("Odd Sum: " + sum);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Sum odd numbers 1 to 9, print "Odd Sum: 25"\n        \n    }\n}`,
      hints: [
        'Start at 1, step by i += 2',
        'Add each to sum'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 9; i += 2) {\n            sum += i;\n        }\n        System.out.println("Odd Sum: " + sum);\n    }\n}`,
      explanation: [
        '1 + 3 + 5 + 7 + 9 = 25.'
      ],
      xpReward: 40
    },

    {
      id: 28,
      stageId: 3,
      isBoss: false,
      title: 'Bakery Donut Boxes',
      scenario: 'A bakery packs donuts into boxes of 12. A catering order requests 5 full boxes. Calculate total donuts packed.',
      task: 'Loop 5 times (boxes 1 to 5), adding 12 donuts each time to totalDonuts. Print "Total Donuts: " + totalDonuts.',
      sampleOutput: `Total Donuts: 60`,
      expectedOutput: `Total Donuts: 60`,
      thinkFirst: [
        '1. int totalDonuts = 0;',
        '2. Loop: for (int b = 1; b <= 5; b++)',
        '3. totalDonuts += 12;',
        '4. Print "Total Donuts: " + totalDonuts;'
      ],
      syntaxReminder: `int totalDonuts = 0;\nfor (int b = 1; b <= 5; b++) {\n    totalDonuts += 12;\n}\nSystem.out.println("Total Donuts: " + totalDonuts);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Add 12 donuts for 5 boxes, print total\n        \n    }\n}`,
      hints: [
        'Initialize totalDonuts = 0',
        'Add 12 inside loop',
        'Print after loop'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int totalDonuts = 0;\n        for (int b = 1; b <= 5; b++) {\n            totalDonuts += 12;\n        }\n        System.out.println("Total Donuts: " + totalDonuts);\n    }\n}`,
      explanation: [
        '5 iterations adding 12 yields 60 donuts.'
      ],
      xpReward: 40
    },

    {
      id: 29,
      stageId: 3,
      isBoss: false,
      title: 'Gas Station Fuel Meter',
      scenario: 'You are fueling a motorcycle with 3 liters of petrol at Rs. 350 per liter. The fuel pump meter displays the cost after each liter pumped.',
      task: 'Loop 3 times (liters 1 to 3). Add 350 to cost each time and print liter count and running cost.',
      sampleOutput: `1 Liter: Rs. 350\n2 Liters: Rs. 700\n3 Liters: Rs. 1050`,
      expectedOutput: `1 Liter: Rs. 350\n2 Liters: Rs. 700\n3 Liters: Rs. 1050`,
      thinkFirst: [
        '1. int cost = 0;',
        '2. Loop: for (int lit = 1; lit <= 3; lit++)',
        '3. cost += 350;',
        '4. Print format: lit + (lit == 1 ? " Liter: Rs. " : " Liters: Rs. ") + cost;'
      ],
      syntaxReminder: `int cost = 0;\nfor (int lit = 1; lit <= 3; lit++) {\n    cost += 350;\n    System.out.println(lit + (lit == 1 ? " Liter: Rs. " : " Liters: Rs. ") + cost);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print running fuel cost for 1, 2, and 3 liters\n        \n    }\n}`,
      hints: [
        'Notice: 1 uses "Liter", while 2 and 3 use "Liters".',
        'Use an if/else or ternary inside the loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int cost = 0;\n        for (int lit = 1; lit <= 3; lit++) {\n            cost += 350;\n            if (lit == 1) {\n                System.out.println(lit + " Liter: Rs. " + cost);\n            } else {\n                System.out.println(lit + " Liters: Rs. " + cost);\n            }\n        }\n    }\n}`,
      explanation: [
        'Handles pluralization and running fuel meter accumulation.'
      ],
      xpReward: 45
    },

    {
      id: 30,
      stageId: 3,
      isBoss: true,
      title: '👑 Stage 3 Boss: Grade Average Calculator',
      scenario: 'You are calculating the overall class performance. Find the average of the test scores for the first 10 students (numbers 1 to 10).',
      task: 'Sum the numbers 1 through 10. Then compute the average as double (sum / 10.0) and print "Average: " + avg.',
      sampleOutput: `Average: 5.5`,
      expectedOutput: `Average: 5.5`,
      thinkFirst: [
        '1. Sum bucket: int sum = 0;',
        '2. Loop 1 to 10: sum += i;',
        '3. Calculate average as floating-point: double avg = sum / 10.0;',
        '4. Print: "Average: " + avg;'
      ],
      syntaxReminder: `int sum = 0;\nfor (int i = 1; i <= 10; i++) {\n    sum += i;\n}\ndouble avg = sum / 10.0;\nSystem.out.println("Average: " + avg);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // STAGE 3 BOSS CHALLENGE:\n        // Sum 1 to 10, divide by 10.0, print "Average: 5.5"\n        \n    }\n}`,
      hints: [
        'Sum 1 to 10 equals 55.',
        'Divide by 10.0 (with decimal point) to avoid integer division truncation!',
        'Print: System.out.println("Average: " + avg);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int sum = 0;\n        for (int i = 1; i <= 10; i++) {\n            sum += i;\n        }\n        double avg = sum / 10.0;\n        System.out.println("Average: " + avg);\n    }\n}`,
      explanation: [
        'sum = 55. 55 / 10.0 evaluates to 5.5.',
        'Correctly prints Average: 5.5.'
      ],
      xpReward: 50
    },

    // ------------------------------------------------------------------------
    // STAGE 4: LOOPS WITH DECISIONS (for + if) (Challenges 31 to 40)
    // ------------------------------------------------------------------------
    {
      id: 31,
      stageId: 4,
      isBoss: false,
      title: 'Cricket Over Thriller',
      scenario: 'A cricket over consists of 6 deliveries (balls 1 to 6). On the final 6th ball, the batsman hits an unforgettable maximum over long-on!',
      task: 'Loop through balls 1 to 6. For balls 1 to 5, print "Ball " + i. On ball 6, print "Ball 6 - SIX!".',
      sampleOutput: `Ball 1\nBall 2\nBall 3\nBall 4\nBall 5\nBall 6 - SIX!`,
      expectedOutput: `Ball 1\nBall 2\nBall 3\nBall 4\nBall 5\nBall 6 - SIX!`,
      thinkFirst: [
        '1. Loop ball from 1 to 6.',
        '2. If ball == 6, print "Ball 6 - SIX!".',
        '3. Else, print "Ball " + ball.'
      ],
      syntaxReminder: `for (int b = 1; b <= 6; b++) {\n    if (b == 6) {\n        System.out.println("Ball 6 - SIX!");\n    } else {\n        System.out.println("Ball " + b);\n    }\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print Ball 1 to 5, and "Ball 6 - SIX!" on 6\n        \n    }\n}`,
      hints: [
        'Loop 1 to 6: for (int b = 1; b <= 6; b++)',
        'Use if (b == 6) for special treatment of the last ball.',
        'Use else for balls 1 through 5.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int b = 1; b <= 6; b++) {\n            if (b == 6) {\n                System.out.println("Ball 6 - SIX!");\n            } else {\n                System.out.println("Ball " + b);\n            }\n        }\n    }\n}`,
      explanation: [
        'Uses an if-else decision inside the loop to branch behavior.'
      ],
      xpReward: 40
    },

    {
      id: 32,
      stageId: 4,
      isBoss: false,
      title: 'Exam Pass Count',
      scenario: 'A university exam paper has been graded. Marks for 8 students are stored in an array. A mark of 50 or higher is a PASS.',
      task: 'Loop over marks: int[] marks = { 45, 67, 89, 32, 50, 91, 55, 38 }; Count how many students passed (>= 50) and print "Passed: " + passed.',
      sampleOutput: `Passed: 5`,
      expectedOutput: `Passed: 5`,
      thinkFirst: [
        '1. Counter: int passed = 0;',
        '2. Loop index 0 to marks.length - 1: for (int i = 0; i < marks.length; i++)',
        '3. If marks[i] >= 50, passed++;',
        '4. Print "Passed: " + passed;'
      ],
      syntaxReminder: `int passed = 0;\nfor (int i = 0; i < marks.length; i++) {\n    if (marks[i] >= 50) passed++;\n}\nSystem.out.println("Passed: " + passed);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] marks = { 45, 67, 89, 32, 50, 91, 55, 38 };\n        // WRITE YOUR CODE HERE:\n        // Count how many marks are >= 50, print "Passed: 5"\n        \n    }\n}`,
      hints: [
        'Loop through array indices: for (int i = 0; i < marks.length; i++)',
        'Check if (marks[i] >= 50) { passed++; }',
        'Print result after loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int[] marks = { 45, 67, 89, 32, 50, 91, 55, 38 };\n        int passed = 0;\n        for (int i = 0; i < marks.length; i++) {\n            if (marks[i] >= 50) {\n                passed++;\n            }\n        }\n        System.out.println("Passed: " + passed);\n    }\n}`,
      explanation: [
        'The marks >= 50 are 67, 89, 50, 91, 55 (total 5).'
      ],
      xpReward: 45
    },

    {
      id: 33,
      stageId: 4,
      isBoss: false,
      title: 'Classroom FizzBuzz Game',
      scenario: 'Students sit in a circle playing FizzBuzz from 1 to 15. If a number is divisible by both 3 and 5, shout "FizzBuzz". If only by 3, shout "Fizz". If only by 5, shout "Buzz". Otherwise shout the number.',
      task: 'Loop 1 to 15 with this exact FizzBuzz logic.',
      sampleOutput: `1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz`,
      expectedOutput: `1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz`,
      thinkFirst: [
        '1. Loop i from 1 to 15.',
        '2. Check (i % 15 == 0) FIRST (or i % 3 == 0 && i % 5 == 0).',
        '3. Else if (i % 3 == 0) -> "Fizz".',
        '4. Else if (i % 5 == 0) -> "Buzz".',
        '5. Else -> print i.'
      ],
      syntaxReminder: `if (i % 15 == 0) {\n    System.out.println("FizzBuzz");\n} else if (i % 3 == 0) {\n    System.out.println("Fizz");\n} else if (i % 5 == 0) {\n    System.out.println("Buzz");\n} else {\n    System.out.println(i);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Play FizzBuzz from 1 to 15\n        \n    }\n}`,
      hints: [
        'Always check the combined condition (15) first!',
        'If you check 3 first, 15 will print Fizz instead of FizzBuzz.',
        'Use if - else if - else ladder.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 15; i++) {\n            if (i % 15 == 0) {\n                System.out.println("FizzBuzz");\n            } else if (i % 3 == 0) {\n                System.out.println("Fizz");\n            } else if (i % 5 == 0) {\n                System.out.println("Buzz");\n            } else {\n                System.out.println(i);\n            }\n        }\n    }\n}`,
      explanation: [
        'Classic coding interview staple checking modulo logic and condition order.'
      ],
      xpReward: 45
    },

    {
      id: 34,
      stageId: 4,
      isBoss: false,
      title: 'Top High Score Finder',
      scenario: 'You are developing an arcade game leaderboard. Given 6 player scores in an array, find the highest score.',
      task: 'Find the maximum value in: int[] scores = { 42, 88, 15, 99, 63, 77 }; Print "Largest: " + max.',
      sampleOutput: `Largest: 99`,
      expectedOutput: `Largest: 99`,
      thinkFirst: [
        '1. Start with first score as champion: int max = scores[0];',
        '2. Loop through rest of array from index 1 to scores.length - 1;',
        '3. If current score is higher: if (scores[i] > max) { max = scores[i]; }',
        '4. Print "Largest: " + max;'
      ],
      syntaxReminder: `int max = scores[0];\nfor (int i = 1; i < scores.length; i++) {\n    if (scores[i] > max) max = scores[i];\n}\nSystem.out.println("Largest: " + max);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] scores = { 42, 88, 15, 99, 63, 77 };\n        // WRITE YOUR CODE HERE:\n        // Find largest score and print "Largest: 99"\n        \n    }\n}`,
      hints: [
        'Set int max = scores[0]; before the loop.',
        'Loop through array and update max whenever you find a larger number.',
        'Print outside the loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int[] scores = { 42, 88, 15, 99, 63, 77 };\n        int max = scores[0];\n        for (int i = 1; i < scores.length; i++) {\n            if (scores[i] > max) {\n                max = scores[i];\n            }\n        }\n        System.out.println("Largest: " + max);\n    }\n}`,
      explanation: [
        'Iterates through the array, comparing each item against the current max.'
      ],
      xpReward: 45
    },

    {
      id: 35,
      stageId: 4,
      isBoss: false,
      title: 'Weather Station Heat Warnings',
      scenario: 'A meteorologist monitors daily maximum temperatures: int[] temps = { 32, 38, 29, 41, 34, 39 }; Any day exceeding 35 degrees requires a heat advisory alert.',
      task: 'Loop through temps array. If temperature > 35, print "Heat Warning: " + temps[i].',
      sampleOutput: `Heat Warning: 38\nHeat Warning: 41\nHeat Warning: 39`,
      expectedOutput: `Heat Warning: 38\nHeat Warning: 41\nHeat Warning: 39`,
      thinkFirst: [
        '1. Loop i from 0 to temps.length - 1;',
        '2. Check if (temps[i] > 35);',
        '3. Print "Heat Warning: " + temps[i];'
      ],
      syntaxReminder: `for (int i = 0; i < temps.length; i++) {\n    if (temps[i] > 35) {\n        System.out.println("Heat Warning: " + temps[i]);\n    }\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] temps = { 32, 38, 29, 41, 34, 39 };\n        // WRITE YOUR CODE HERE:\n        // Print heat warning for temps > 35\n        \n    }\n}`,
      hints: [
        'Array indices start at 0, condition i < temps.length',
        'Only print when condition temps[i] > 35 is true.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int[] temps = { 32, 38, 29, 41, 34, 39 };\n        for (int i = 0; i < temps.length; i++) {\n            if (temps[i] > 35) {\n                System.out.println("Heat Warning: " + temps[i]);\n            }\n        }\n    }\n}`,
      explanation: [
        'Filters 38, 41, and 39 which trigger the warning condition.'
      ],
      xpReward: 40
    },

    {
      id: 36,
      stageId: 4,
      isBoss: false,
      title: 'Store Inventory Restock Alert',
      scenario: 'A warehouse manager checks inventory stock levels: int[] stock = { 15, 4, 25, 8, 30 }; Any product with fewer than 10 units must trigger a restock notice with its index.',
      task: 'Loop over stock. If stock[i] < 10, print "Restock item index: " + i.',
      sampleOutput: `Restock item index: 1\nRestock item index: 3`,
      expectedOutput: `Restock item index: 1\nRestock item index: 3`,
      thinkFirst: [
        '1. Loop i from 0 to stock.length - 1;',
        '2. If stock[i] < 10, print "Restock item index: " + i;'
      ],
      syntaxReminder: `for (int i = 0; i < stock.length; i++) {\n    if (stock[i] < 10) {\n        System.out.println("Restock item index: " + i);\n    }\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] stock = { 15, 4, 25, 8, 30 };\n        // WRITE YOUR CODE HERE:\n        // Print restock alert for stock < 10\n        \n    }\n}`,
      hints: [
        'Print the index i, not the quantity!',
        'Items at index 1 (qty 4) and index 3 (qty 8) trigger alerts.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int[] stock = { 15, 4, 25, 8, 30 };\n        for (int i = 0; i < stock.length; i++) {\n            if (stock[i] < 10) {\n                System.out.println("Restock item index: " + i);\n            }\n        }\n    }\n}`,
      explanation: [
        'Identifies indices of inventory items requiring reordering.'
      ],
      xpReward: 40
    },

    {
      id: 37,
      stageId: 4,
      isBoss: false,
      title: 'Bank Overdraft Penalty Count',
      scenario: 'An auditor reviews transactions: int[] tx = { 500, -200, 1500, -850, -120 }; Negative amounts are withdrawals/overdrafts. Count how many negative transactions occurred.',
      task: 'Count how many numbers in tx are strictly negative (< 0). Print "Negative Count: " + count.',
      sampleOutput: `Negative Count: 3`,
      expectedOutput: `Negative Count: 3`,
      thinkFirst: [
        '1. int count = 0;',
        '2. Loop array: if (tx[i] < 0) count++;',
        '3. Print "Negative Count: " + count;'
      ],
      syntaxReminder: `int count = 0;\nfor (int i = 0; i < tx.length; i++) {\n    if (tx[i] < 0) count++;\n}\nSystem.out.println("Negative Count: " + count);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] tx = { 500, -200, 1500, -850, -120 };\n        // WRITE YOUR CODE HERE:\n        // Count negative values, print "Negative Count: 3"\n        \n    }\n}`,
      hints: [
        'Check if (tx[i] < 0)',
        'Values -200, -850, -120 are negative (total 3).'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int[] tx = { 500, -200, 1500, -850, -120 };\n        int count = 0;\n        for (int i = 0; i < tx.length; i++) {\n            if (tx[i] < 0) {\n                count++;\n            }\n        }\n        System.out.println("Negative Count: " + count);\n    }\n}`,
      explanation: [
        'Counts transactions where amount is below zero.'
      ],
      xpReward: 40
    },

    {
      id: 38,
      stageId: 4,
      isBoss: false,
      title: 'Student Absence Count',
      scenario: 'A 7-day attendance log marks 1 for present and 0 for absent: int[] days = { 1, 1, 0, 1, 0, 1, 1 }; Count the student\'s absences.',
      task: 'Count how many days have value 0 in days array. Print "Absences: " + count.',
      sampleOutput: `Absences: 2`,
      expectedOutput: `Absences: 2`,
      thinkFirst: [
        '1. int count = 0;',
        '2. Loop: if (days[i] == 0) count++;',
        '3. Print "Absences: " + count;'
      ],
      syntaxReminder: `int count = 0;\nfor (int i = 0; i < days.length; i++) {\n    if (days[i] == 0) count++;\n}\nSystem.out.println("Absences: " + count);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] days = { 1, 1, 0, 1, 0, 1, 1 };\n        // WRITE YOUR CODE HERE:\n        // Count zeros, print "Absences: 2"\n        \n    }\n}`,
      hints: [
        'Check if days[i] == 0',
        'Increment count'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int[] days = { 1, 1, 0, 1, 0, 1, 1 };\n        int count = 0;\n        for (int i = 0; i < days.length; i++) {\n            if (days[i] == 0) {\n                count++;\n            }\n        }\n        System.out.println("Absences: " + count);\n    }\n}`,
      explanation: [
        'Identifies the 2 absence days.'
      ],
      xpReward: 40
    },

    {
      id: 39,
      stageId: 4,
      isBoss: false,
      title: 'Target ID Search',
      scenario: 'A database query checks employee IDs: int[] ids = { 101, 204, 305, 404, 508 }; Locate the index position of employee ID 404.',
      task: 'Loop through ids. If ids[i] == 404, print "Found at index: " + i and break.',
      sampleOutput: `Found at index: 3`,
      expectedOutput: `Found at index: 3`,
      thinkFirst: [
        '1. Loop i from 0 to ids.length - 1;',
        '2. If ids[i] == 404, print "Found at index: " + i and break;'
      ],
      syntaxReminder: `for (int i = 0; i < ids.length; i++) {\n    if (ids[i] == 404) {\n        System.out.println("Found at index: " + i);\n        break;\n    }\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int[] ids = { 101, 204, 305, 404, 508 };\n        // WRITE YOUR CODE HERE:\n        // Find index of 404, print "Found at index: 3"\n        \n    }\n}`,
      hints: [
        'Check if (ids[i] == 404)',
        'Print index i and optionally break'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int[] ids = { 101, 204, 305, 404, 508 };\n        for (int i = 0; i < ids.length; i++) {\n            if (ids[i] == 404) {\n                System.out.println("Found at index: " + i);\n                break;\n            }\n        }\n    }\n}`,
      explanation: [
        'Linear search algorithm locating the element at index 3.'
      ],
      xpReward: 40
    },

    {
      id: 40,
      stageId: 4,
      isBoss: true,
      title: '👑 Stage 4 Boss: Vowel Detective',
      scenario: 'A linguist wants to count how many vowels (A, E, I, O, U) appear in a country name: "INDONESIA".',
      task: 'Loop through characters of String name = "INDONESIA"; Count vowels (A, E, I, O, U) and print "Vowels: " + count.',
      sampleOutput: `Vowels: 5`,
      expectedOutput: `Vowels: 5`,
      thinkFirst: [
        '1. String name = "INDONESIA"; int count = 0;',
        '2. Loop i from 0 to name.length() - 1;',
        '3. Get char: char c = name.charAt(i);',
        '4. If c == \'A\' || c == \'E\' || c == \'I\' || c == \'O\' || c == \'U\', count++;',
        '5. Print "Vowels: " + count;'
      ],
      syntaxReminder: `int count = 0;\nfor (int i = 0; i < name.length(); i++) {\n    char c = name.charAt(i);\n    if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {\n        count++;\n    }\n}\nSystem.out.println("Vowels: " + count);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        String name = "INDONESIA";\n        // STAGE 4 BOSS CHALLENGE:\n        // Count vowels (A,E,I,O,U) and print "Vowels: 5"\n        \n    }\n}`,
      hints: [
        'Use name.length() to get length of string.',
        'Use name.charAt(i) to extract individual letters.',
        'Check each vowel with the || (OR) operator.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        String name = "INDONESIA";\n        int count = 0;\n        for (int i = 0; i < name.length(); i++) {\n            char c = name.charAt(i);\n            if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {\n                count++;\n            }\n        }\n        System.out.println("Vowels: " + count);\n    }\n}`,
      explanation: [
        'I, O, E, I, A are the 5 vowels in INDONESIA.',
        'Correctly inspects each character by index.'
      ],
      xpReward: 55
    },

    // ------------------------------------------------------------------------
    // STAGE 5: PATTERNS & TABLES (Challenges 41 to 50)
    // ------------------------------------------------------------------------
    {
      id: 41,
      stageId: 5,
      isBoss: false,
      title: 'Exam Times Table (Table of 7)',
      scenario: 'A student preparing for mathematics exams needs a flashcard printed with the complete multiplication table of 7 from 1 to 10.',
      task: 'Print the multiplication table of 7 in the format: "7 x " + i + " = " + (7 * i).',
      sampleOutput: `7 x 1 = 7\n7 x 2 = 14\n...\n7 x 10 = 70`,
      expectedOutput: Array.from({ length: 10 }, (_, i) => `7 x ${i + 1} = ${(i + 1) * 7}`).join('\n'),
      thinkFirst: [
        '1. Loop multiplier i from 1 to 10.',
        '2. Inside: print "7 x " + i + " = " + (7 * i);'
      ],
      syntaxReminder: `for (int i = 1; i <= 10; i++) {\n    System.out.println("7 x " + i + " = " + (7 * i));\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print multiplication table of 7 from 1 to 10\n        \n    }\n}`,
      hints: [
        'Loop 1 to 10: for (int i = 1; i <= 10; i++)',
        'Print format: System.out.println("7 x " + i + " = " + (7 * i));'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 10; i++) {\n            System.out.println("7 x " + i + " = " + (7 * i));\n        }\n    }\n}`,
      explanation: [
        'Evaluates (7 * i) each round and prints formatted equations.'
      ],
      xpReward: 40
    },

    {
      id: 42,
      stageId: 5,
      isBoss: false,
      title: 'Staircase Star Pyramid',
      scenario: 'You are designing an ASCII game menu that prints a 5-step staircase of stars using nested loops.',
      task: 'Print 5 rows of stars: Row 1 has 1 star, Row 2 has 2 stars, ..., Row 5 has 5 stars.',
      sampleOutput: `*\n**\n***\n****\n*****`,
      expectedOutput: `*\n**\n***\n****\n*****`,
      thinkFirst: [
        '1. Outer loop controls rows: for (int r = 1; r <= 5; r++)',
        '2. Inner loop controls stars in that row: for (int c = 1; c <= r; c++)',
        '3. Inside inner loop: System.out.print("*"); (NOT println!)',
        '4. After inner loop: System.out.println(); (move to next row)'
      ],
      syntaxReminder: `for (int r = 1; r <= 5; r++) {\n    for (int c = 1; c <= r; c++) {\n        System.out.print("*");\n    }\n    System.out.println();\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print 5 rows star stairs (* to *****)\n        \n    }\n}`,
      hints: [
        'Use nested loops: outer for rows (1 to 5), inner for cols (1 to r).',
        'Use System.out.print("*") inside inner loop.',
        'Use System.out.println() after inner loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int r = 1; r <= 5; r++) {\n            for (int c = 1; c <= r; c++) {\n                System.out.print("*");\n            }\n            System.out.println();\n        }\n    }\n}`,
      explanation: [
        'Outer loop runs 5 times for rows.',
        'Inner loop prints r stars, followed by a newline.'
      ],
      xpReward: 45
    },

    {
      id: 43,
      stageId: 5,
      isBoss: false,
      title: 'Inverted Star Stairs',
      scenario: 'An architect drafts a reverse pyramid beam structure starting with 4 stars on row 1, down to 1 star on row 4.',
      task: 'Print 4 rows: Row 1 is "****", Row 2 is "***", Row 3 is "**", Row 4 is "*".',
      sampleOutput: `****\n***\n**\n*`,
      expectedOutput: `****\n***\n**\n*`,
      thinkFirst: [
        '1. Outer loop r starts at 4 down to 1: r--;',
        '2. Inner loop c from 1 to r: print "*";',
        '3. Newline after inner loop.'
      ],
      syntaxReminder: `for (int r = 4; r >= 1; r--) {\n    for (int c = 1; c <= r; c++) {\n        System.out.print("*");\n    }\n    System.out.println();\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print inverted star stairs from 4 stars down to 1\n        \n    }\n}`,
      hints: [
        'Outer loop counts down: for (int r = 4; r >= 1; r--)',
        'Inner loop runs up to r: for (int c = 1; c <= r; c++)'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int r = 4; r >= 1; r--) {\n            for (int c = 1; c <= r; c++) {\n                System.out.print("*");\n            }\n            System.out.println();\n        }\n    }\n}`,
      explanation: [
        'Outer countdown loop creates the inverted staircase structure.'
      ],
      xpReward: 45
    },

    {
      id: 44,
      stageId: 5,
      isBoss: false,
      title: 'Counting Number Triangle',
      scenario: 'An architect needs a 4-level numeric layout printed where each row repeats numbers from 1 up to the row number.',
      task: 'Print 4 rows: Row 1 is "1", Row 2 is "12", Row 3 is "123", Row 4 is "1234".',
      sampleOutput: `1\n12\n123\n1234`,
      expectedOutput: `1\n12\n123\n1234`,
      thinkFirst: [
        '1. Outer loop r from 1 to 4.',
        '2. Inner loop c from 1 to r.',
        '3. Print c with System.out.print(c);',
        '4. Print newline after inner loop.'
      ],
      syntaxReminder: `for (int r = 1; r <= 4; r++) {\n    for (int c = 1; c <= r; c++) {\n        System.out.print(c);\n    }\n    System.out.println();\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print rows 1, 12, 123, 1234\n        \n    }\n}`,
      hints: [
        'Similar to stars, but print the inner loop variable c instead of "*"!',
        'Outer loop goes up to 4.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int r = 1; r <= 4; r++) {\n            for (int c = 1; c <= r; c++) {\n                System.out.print(c);\n            }\n            System.out.println();\n        }\n    }\n}`,
      explanation: [
        'Printing the column index c in each row generates 1, 12, 123, 1234.'
      ],
      xpReward: 45
    },

    {
      id: 45,
      stageId: 5,
      isBoss: false,
      title: 'Repeating Row Number Triangle',
      scenario: 'A visual pattern repeats the row number itself across the columns (Row 1: 1, Row 2: 22, Row 3: 333, Row 4: 4444).',
      task: 'Print 4 rows repeating row index r: 1, 22, 333, 4444.',
      sampleOutput: `1\n22\n333\n4444`,
      expectedOutput: `1\n22\n333\n4444`,
      thinkFirst: [
        '1. Outer loop r from 1 to 4;',
        '2. Inner loop c from 1 to r: print r (the row number!);',
        '3. Newline after inner loop.'
      ],
      syntaxReminder: `for (int r = 1; r <= 4; r++) {\n    for (int c = 1; c <= r; c++) {\n        System.out.print(r);\n    }\n    System.out.println();\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print 1, 22, 333, 4444\n        \n    }\n}`,
      hints: [
        'Print r instead of c!',
        'On row 2, prints 2 twice; on row 3, prints 3 three times.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int r = 1; r <= 4; r++) {\n            for (int c = 1; c <= r; c++) {\n                System.out.print(r);\n            }\n            System.out.println();\n        }\n    }\n}`,
      explanation: [
        'Uses outer variable r in the inner print statement.'
      ],
      xpReward: 45
    },

    {
      id: 46,
      stageId: 5,
      isBoss: false,
      title: 'Chess Board Row Pattern',
      scenario: 'You are programming a chess game engine. The first row of the board alternates black and white squares: B W B W B W B W (8 squares total).',
      task: 'Loop 8 times (1 to 8). If odd, print "B ". If even, print "W ". All on one single line.',
      sampleOutput: `B W B W B W B W `,
      expectedOutput: `B W B W B W B W`,
      thinkFirst: [
        '1. Loop i from 1 to 8.',
        '2. If (i % 2 != 0) print "B " else print "W ".',
        '3. Use System.out.print (no newline).'
      ],
      syntaxReminder: `for (int i = 1; i <= 8; i++) {\n    if (i % 2 != 0) {\n        System.out.print("B ");\n    } else {\n        System.out.print("W ");\n    }\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print alternating "B W B W B W B W"\n        \n    }\n}`,
      hints: [
        'Use System.out.print instead of println so they stay on one line.',
        'Check odd/even using modulo: if (i % 2 != 0)'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int i = 1; i <= 8; i++) {\n            if (i % 2 != 0) {\n                System.out.print("B ");\n            } else {\n                System.out.print("W ");\n            }\n        }\n    }\n}`,
      explanation: [
        'Alternates B and W across 8 tiles.'
      ],
      xpReward: 45
    },

    {
      id: 47,
      stageId: 5,
      isBoss: false,
      title: 'Square Grid of Hashes (3x3)',
      scenario: 'A retro terminal game creates a 3x3 solid brick block wall made of # characters.',
      task: 'Print a 3x3 square of hashes: 3 rows, each containing "###".',
      sampleOutput: `###\n###\n###`,
      expectedOutput: `###\n###\n###`,
      thinkFirst: [
        '1. Outer loop r runs 3 times;',
        '2. Inner loop c runs 3 times: print "#";',
        '3. Newline after inner loop.'
      ],
      syntaxReminder: `for (int r = 1; r <= 3; r++) {\n    for (int c = 1; c <= 3; c++) {\n        System.out.print("#");\n    }\n    System.out.println();\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print 3x3 grid of ###\n        \n    }\n}`,
      hints: [
        'Both outer and inner loops run from 1 to 3.',
        'Use System.out.print("#") inside inner loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int r = 1; r <= 3; r++) {\n            for (int c = 1; c <= 3; c++) {\n                System.out.print("#");\n            }\n            System.out.println();\n        }\n    }\n}`,
      explanation: [
        'Generates a 3x3 square matrix.'
      ],
      xpReward: 40
    },

    {
      id: 48,
      stageId: 5,
      isBoss: false,
      title: 'Mini 2x2 Multiplication Matrix',
      scenario: 'Create a 2x2 coordinate table of products: Row 1 is "1 2", Row 2 is "2 4".',
      task: 'Use nested loops for r = 1..2 and c = 1..2. Print (r * c) + (c < 2 ? " " : ""). Move to next line after row.',
      sampleOutput: `1 2\n2 4`,
      expectedOutput: `1 2\n2 4`,
      thinkFirst: [
        '1. r from 1 to 2;',
        '2. c from 1 to 2: print (r * c) with space if c == 1;',
        '3. Newline after each row.'
      ],
      syntaxReminder: `for (int r = 1; r <= 2; r++) {\n    for (int c = 1; c <= 2; c++) {\n        System.out.print((r * c) + (c < 2 ? " " : ""));\n    }\n    System.out.println();\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print 2x2 table: "1 2" then "2 4"\n        \n    }\n}`,
      hints: [
        'Product is r * c',
        'Row 1: 1*1=1, 1*2=2. Row 2: 2*1=2, 2*2=4.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        for (int r = 1; r <= 2; r++) {\n            for (int c = 1; c <= 2; c++) {\n                System.out.print((r * c) + (c < 2 ? " " : ""));\n            }\n            System.out.println();\n        }\n    }\n}`,
      explanation: [
        'Demonstrates matrix cell product calculation.'
      ],
      xpReward: 45
    },

    {
      id: 49,
      stageId: 5,
      isBoss: false,
      title: 'String Character Index Inspector',
      scenario: 'A text parser iterates over the word "CODE" and prints each character alongside its zero-based index.',
      task: 'String text = "CODE"; Loop through indices 0 to text.length() - 1, printing "Index " + i + ": " + text.charAt(i).',
      sampleOutput: `Index 0: C\nIndex 1: O\nIndex 2: D\nIndex 3: E`,
      expectedOutput: `Index 0: C\nIndex 1: O\nIndex 2: D\nIndex 3: E`,
      thinkFirst: [
        '1. String text = "CODE";',
        '2. Loop i from 0 to text.length() - 1;',
        '3. Print "Index " + i + ": " + text.charAt(i);'
      ],
      syntaxReminder: `String text = "CODE";\nfor (int i = 0; i < text.length(); i++) {\n    System.out.println("Index " + i + ": " + text.charAt(i));\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        String text = "CODE";\n        // WRITE YOUR CODE HERE:\n        // Print index and character for "CODE"\n        \n    }\n}`,
      hints: [
        'Use text.charAt(i) to read character at index i.',
        'Starts at 0 and stops before text.length().'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        String text = "CODE";\n        for (int i = 0; i < text.length(); i++) {\n            System.out.println("Index " + i + ": " + text.charAt(i));\n        }\n    }\n}`,
      explanation: [
        'Fundamental pattern for inspecting characters in strings.'
      ],
      xpReward: 40
    },

    {
      id: 50,
      stageId: 5,
      isBoss: true,
      title: '👑 Stage 5 Boss: Word Reversal Mirror',
      scenario: 'You are writing an encryption tool that reverses words. Reverse the string "JAVA" by printing its letters from the last index down to the first.',
      task: 'String word = "JAVA"; Loop backwards from index word.length() - 1 down to 0, printing each character with System.out.print so it spells "AVAJ".',
      sampleOutput: `AVAJ`,
      expectedOutput: `AVAJ`,
      thinkFirst: [
        '1. String word = "JAVA";',
        '2. Start at last index: int i = word.length() - 1;',
        '3. Run while i >= 0;',
        '4. Decrement: i--;',
        '5. Print: System.out.print(word.charAt(i));'
      ],
      syntaxReminder: `String word = "JAVA";\nfor (int i = word.length() - 1; i >= 0; i--) {\n    System.out.print(word.charAt(i));\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        String word = "JAVA";\n        // STAGE 5 BOSS CHALLENGE:\n        // Reverse "JAVA" to print "AVAJ"\n        \n    }\n}`,
      hints: [
        'Last index of string is word.length() - 1.',
        'Condition: i >= 0;',
        'Decrease counter: i--;',
        'Print each char without newline using System.out.print.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        String word = "JAVA";\n        for (int i = word.length() - 1; i >= 0; i--) {\n            System.out.print(word.charAt(i));\n        }\n    }\n}`,
      explanation: [
        'Traverses the string from index 3 down to 0, reversing the letters to AVAJ.'
      ],
      xpReward: 55
    },

    // ------------------------------------------------------------------------
    // STAGE 6: MINI PROBLEM SOLVING (Challenges 51 to 60)
    // ------------------------------------------------------------------------
    {
      id: 51,
      stageId: 6,
      isBoss: false,
      title: 'ATM PIN Permutations (Factorial of 5)',
      scenario: 'A bank security officer needs to calculate how many unique orders 5 distinct security digits can be arranged in (5! = 5 * 4 * 3 * 2 * 1).',
      task: 'Compute 5! using a loop with product accumulator starting at 1. Print "Factorial: " + fact.',
      sampleOutput: `Factorial: 120`,
      expectedOutput: `Factorial: 120`,
      thinkFirst: [
        '1. Product bucket MUST start at 1: int fact = 1;',
        '2. Loop 1 to 5: for (int i = 1; i <= 5; i++)',
        '3. Multiply: fact *= i; (or fact = fact * i;)',
        '4. Print after loop: "Factorial: " + fact;'
      ],
      syntaxReminder: `int fact = 1;\nfor (int i = 1; i <= 5; i++) {\n    fact *= i;\n}\nSystem.out.println("Factorial: " + fact);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Compute 5! and print "Factorial: 120"\n        \n    }\n}`,
      hints: [
        'Never initialize factorial to 0, because 0 * anything = 0!',
        'Start at 1, loop 1 to 5, multiply each i.',
        'Print outside loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int fact = 1;\n        for (int i = 1; i <= 5; i++) {\n            fact *= i;\n        }\n        System.out.println("Factorial: " + fact);\n    }\n}`,
      explanation: [
        'Computes 1 * 2 * 3 * 4 * 5 = 120.'
      ],
      xpReward: 50
    },

    {
      id: 52,
      stageId: 6,
      isBoss: false,
      title: 'Memory Chip Capacity (Power of 2^10)',
      scenario: 'A computer engineer is calculating byte sizes. Without using Math.pow(), calculate 2 to the power of 10 (1024 bytes in 1 KB).',
      task: 'Start with result = 1. Loop 10 times, multiplying result by 2 each time. Print "Power: " + result.',
      sampleOutput: `Power: 1024`,
      expectedOutput: `Power: 1024`,
      thinkFirst: [
        '1. Bucket: int result = 1;',
        '2. Loop 10 times: for (int i = 1; i <= 10; i++)',
        '3. Multiply by 2: result *= 2;',
        '4. Print: "Power: " + result;'
      ],
      syntaxReminder: `int result = 1;\nfor (int i = 1; i <= 10; i++) {\n    result *= 2;\n}\nSystem.out.println("Power: " + result);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Calculate 2^10 without Math.pow and print "Power: 1024"\n        \n    }\n}`,
      hints: [
        'Initialize result = 1;',
        'Inside loop of 10 rounds: result = result * 2;',
        'Print after loop finishes.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int result = 1;\n        for (int i = 1; i <= 10; i++) {\n            result *= 2;\n        }\n        System.out.println("Power: " + result);\n    }\n}`,
      explanation: [
        'Doubling 1 ten times produces 1024.'
      ],
      xpReward: 50
    },

    {
      id: 53,
      stageId: 6,
      isBoss: false,
      title: 'Powers of 3 Sequence',
      scenario: 'A scientist studies exponential bacterial tripling. Starting at 1, compute 3^1, 3^2, 3^3, and 3^4 using a loop.',
      task: 'Loop 4 times. In each step, multiply val by 3 and print val.',
      sampleOutput: `3\n9\n27\n81`,
      expectedOutput: `3\n9\n27\n81`,
      thinkFirst: [
        '1. int val = 1;',
        '2. Loop: for (int i = 1; i <= 4; i++)',
        '3. val *= 3;',
        '4. Print val inside loop;'
      ],
      syntaxReminder: `int val = 1;\nfor (int i = 1; i <= 4; i++) {\n    val *= 3;\n    System.out.println(val);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print powers of 3: 3, 9, 27, 81\n        \n    }\n}`,
      hints: [
        'Multiply val by 3 inside loop: val *= 3;',
        'Print each power inside loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int val = 1;\n        for (int i = 1; i <= 4; i++) {\n            val *= 3;\n            System.out.println(val);\n        }\n    }\n}`,
      explanation: [
        'Generates geometric progression with ratio 3.'
      ],
      xpReward: 45
    },

    {
      id: 54,
      stageId: 6,
      isBoss: false,
      title: 'City Population Projection',
      scenario: 'A city planning commission projects that a town of 1000 residents will grow by 10% each year for 3 consecutive years.',
      task: 'Start with int pop = 1000. Loop years 1 to 3. Each year add 10% (pop = pop + (pop * 10 / 100)) and print "Year " + year + ": " + pop.',
      sampleOutput: `Year 1: 1100\nYear 2: 1210\nYear 3: 1331`,
      expectedOutput: `Year 1: 1100\nYear 2: 1210\nYear 3: 1331`,
      thinkFirst: [
        '1. int pop = 1000;',
        '2. Loop year from 1 to 3;',
        '3. Increase pop: pop = pop + (pop * 10 / 100);',
        '4. Print "Year " + year + ": " + pop inside loop;'
      ],
      syntaxReminder: `int pop = 1000;\nfor (int yr = 1; yr <= 3; yr++) {\n    pop = pop + (pop * 10 / 100);\n    System.out.println("Year " + yr + ": " + pop);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Project population from 1000 growing 10% for 3 years\n        \n    }\n}`,
      hints: [
        'Year 1: 1000 + 100 = 1100',
        'Year 2: 1100 + 110 = 1210',
        'Year 3: 1210 + 121 = 1331',
        'Print each year inside the loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int pop = 1000;\n        for (int yr = 1; yr <= 3; yr++) {\n            pop = pop + (pop * 10 / 100);\n            System.out.println("Year " + yr + ": " + pop);\n        }\n    }\n}`,
      explanation: [
        'Compounding population growth step-by-step.'
      ],
      xpReward: 50
    },

    {
      id: 55,
      stageId: 6,
      isBoss: false,
      title: 'Bank Loan Yearly Balance',
      scenario: 'You take out a Rs. 10,000 small business loan with a simple 500 flat yearly fee added to the balance each year for 3 years.',
      task: 'Start with int balance = 10000. Loop 3 years. Add 500 each year and print "Year " + i + " Balance: Rs. " + balance.',
      sampleOutput: `Year 1 Balance: Rs. 10500\nYear 2 Balance: Rs. 11000\nYear 3 Balance: Rs. 11500`,
      expectedOutput: `Year 1 Balance: Rs. 10500\nYear 2 Balance: Rs. 11000\nYear 3 Balance: Rs. 11500`,
      thinkFirst: [
        '1. int balance = 10000;',
        '2. Loop i from 1 to 3;',
        '3. balance += 500;',
        '4. Print "Year " + i + " Balance: Rs. " + balance;'
      ],
      syntaxReminder: `int balance = 10000;\nfor (int i = 1; i <= 3; i++) {\n    balance += 500;\n    System.out.println("Year " + i + " Balance: Rs. " + balance);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Add 500 each year for 3 years, printing balance\n        \n    }\n}`,
      hints: [
        'Start balance at 10000.',
        'Add 500 inside the loop: balance += 500;',
        'Print line inside loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int balance = 10000;\n        for (int i = 1; i <= 3; i++) {\n            balance += 500;\n            System.out.println("Year " + i + " Balance: Rs. " + balance);\n        }\n    }\n}`,
      explanation: [
        'Increments balance by 500 each year and displays statement.'
      ],
      xpReward: 50
    },

    {
      id: 56,
      stageId: 6,
      isBoss: false,
      title: 'Fibonacci Sequence Starter',
      scenario: 'Botanists observe Fibonacci sequences in sunflower spirals. Print the first 6 Fibonacci numbers (0 1 1 2 3 5) on a single line separated by spaces.',
      task: 'Start with int a = 0, b = 1; Print "0 1"; Loop 4 more times: int next = a + b; Print " " + next; a = b; b = next; Print newline.',
      sampleOutput: `0 1 1 2 3 5`,
      expectedOutput: `0 1 1 2 3 5`,
      thinkFirst: [
        '1. int a = 0, b = 1;',
        '2. System.out.print(a + " " + b);',
        '3. Loop 4 times: int next = a + b; System.out.print(" " + next); a = b; b = next;'
      ],
      syntaxReminder: `int a = 0, b = 1;\nSystem.out.print(a + " " + b);\nfor (int i = 3; i <= 6; i++) {\n    int next = a + b;\n    System.out.print(" " + next);\n    a = b;\n    b = next;\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print first 6 Fibonacci numbers: "0 1 1 2 3 5"\n        \n    }\n}`,
      hints: [
        'Print first two terms (0 and 1) initially.',
        'Each subsequent term is a + b.',
        'Update a = b and b = next.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int a = 0, b = 1;\n        System.out.print(a + " " + b);\n        for (int i = 3; i <= 6; i++) {\n            int next = a + b;\n            System.out.print(" " + next);\n            a = b;\n            b = next;\n        }\n    }\n}`,
      explanation: [
        'Generates terms 0, 1, 1, 2, 3, 5.'
      ],
      xpReward: 50
    },

    {
      id: 57,
      stageId: 6,
      isBoss: false,
      title: 'Digit Counter of an Account Number',
      scenario: 'A banking validator needs to count how many digits exist in an integer account ID 48259 using division.',
      task: 'int num = 48259; Count digits using a for loop: for (; num > 0; num /= 10) count++; Print "Digits: " + count.',
      sampleOutput: `Digits: 5`,
      expectedOutput: `Digits: 5`,
      thinkFirst: [
        '1. int num = 48259; int count = 0;',
        '2. Loop while num > 0, dividing by 10 each time: num /= 10;',
        '3. Increment count++;',
        '4. Print "Digits: " + count;'
      ],
      syntaxReminder: `int count = 0;\nfor (int n = 48259; n > 0; n /= 10) {\n    count++;\n}\nSystem.out.println("Digits: " + count);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int num = 48259;\n        // WRITE YOUR CODE HERE:\n        // Count digits using a for loop, print "Digits: 5"\n        \n    }\n}`,
      hints: [
        'Dividing an integer by 10 in Java strips off the last digit.',
        'Count increments each time num drops a digit.',
        'Print result.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int count = 0;\n        for (int n = 48259; n > 0; n /= 10) {\n            count++;\n        }\n        System.out.println("Digits: " + count);\n    }\n}`,
      explanation: [
        '48259 has 5 digits.'
      ],
      xpReward: 45
    },

    {
      id: 58,
      stageId: 6,
      isBoss: false,
      title: 'Palindrome Number Check',
      scenario: 'A barcode scanner tests if the serial number 12321 reads identically backwards (symmetric palindrome).',
      task: 'Reverse 12321 using a loop into rev. If rev == original, print "12321 is PALINDROME".',
      sampleOutput: `12321 is PALINDROME`,
      expectedOutput: `12321 is PALINDROME`,
      thinkFirst: [
        '1. int original = 12321; int rev = 0;',
        '2. for (int t = original; t > 0; t /= 10) rev = rev * 10 + (t % 10);',
        '3. if (original == rev) System.out.println(original + " is PALINDROME");'
      ],
      syntaxReminder: `int rev = 0;\nfor (int t = 12321; t > 0; t /= 10) {\n    rev = rev * 10 + (t % 10);\n}\nif (12321 == rev) System.out.println("12321 is PALINDROME");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int original = 12321;\n        // WRITE YOUR CODE HERE:\n        // Reverse original and print "12321 is PALINDROME"\n        \n    }\n}`,
      hints: [
        't % 10 extracts the last digit.',
        'rev = rev * 10 + digit builds the reversed number.',
        'Compare original with rev.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int original = 12321;\n        int rev = 0;\n        for (int t = original; t > 0; t /= 10) {\n            rev = rev * 10 + (t % 10);\n        }\n        if (original == rev) {\n            System.out.println(original + " is PALINDROME");\n        }\n    }\n}`,
      explanation: [
        '12321 reversed is 12321, confirming it is a palindrome.'
      ],
      xpReward: 50
    },

    {
      id: 59,
      stageId: 6,
      isBoss: false,
      title: 'Greatest Common Divisor (GCD of 48 & 18)',
      scenario: 'A tile artisan finds the largest square tile size that fits evenly into a 48 cm by 18 cm wall section.',
      task: 'Find the GCD of 48 and 18 using a loop. Print "GCD: " + gcd.',
      sampleOutput: `GCD: 6`,
      expectedOutput: `GCD: 6`,
      thinkFirst: [
        '1. int a = 48, b = 18; int gcd = 1;',
        '2. Loop i from 1 up to min(a, b): if (a % i == 0 && b % i == 0) gcd = i;',
        '3. Print "GCD: " + gcd;'
      ],
      syntaxReminder: `int gcd = 1;\nfor (int i = 1; i <= 18; i++) {\n    if (48 % i == 0 && 18 % i == 0) gcd = i;\n}\nSystem.out.println("GCD: " + gcd);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Find GCD of 48 and 18, print "GCD: 6"\n        \n    }\n}`,
      hints: [
        'Loop i from 1 to 18.',
        'If i divides both 48 and 18 evenly, update gcd = i.',
        'Print outside loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int gcd = 1;\n        for (int i = 1; i <= 18; i++) {\n            if (48 % i == 0 && 18 % i == 0) {\n                gcd = i;\n            }\n        }\n        System.out.println("GCD: " + gcd);\n    }\n}`,
      explanation: [
        'Largest common divisor of 48 and 18 is 6.'
      ],
      xpReward: 50
    },

    {
      id: 60,
      stageId: 6,
      isBoss: true,
      title: '👑 Stage 6 ULTIMATE BOSS: Prime Number Sentinel',
      scenario: 'A cryptographic vault tests if the secret key 29 is prime. A prime number has no divisors other than 1 and itself.',
      task: 'int num = 29; boolean isPrime = true; Loop divisor i from 2 to num - 1. If (num % i == 0), set isPrime = false and break. After loop, if isPrime is true print "29 is PRIME".',
      sampleOutput: `29 is PRIME`,
      expectedOutput: `29 is PRIME`,
      thinkFirst: [
        '1. int num = 29; boolean isPrime = true;',
        '2. Loop i from 2 up to num - 1: for (int i = 2; i < num; i++)',
        '3. If divisible: if (num % i == 0) { isPrime = false; break; }',
        '4. After loop: if (isPrime) System.out.println(num + " is PRIME");'
      ],
      syntaxReminder: `int num = 29;\nboolean isPrime = true;\nfor (int i = 2; i < num; i++) {\n    if (num % i == 0) {\n        isPrime = false;\n        break;\n    }\n}\nif (isPrime) System.out.println(num + " is PRIME");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int num = 29;\n        boolean isPrime = true;\n        // ULTIMATE BOSS CHALLENGE:\n        // Test if 29 is prime using a for loop, print "29 is PRIME"\n        \n    }\n}`,
      hints: [
        'Loop through possible divisors: for (int i = 2; i < num; i++)',
        'If num % i == 0, then a divisor exists, so it is NOT prime.',
        'At the end check if (isPrime) System.out.println(num + " is PRIME");'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int num = 29;\n        boolean isPrime = true;\n        for (int i = 2; i < num; i++) {\n            if (num % i == 0) {\n                isPrime = false;\n                break;\n            }\n        }\n        if (isPrime) {\n            System.out.println(num + " is PRIME");\n        }\n    }\n}`,
      explanation: [
        '29 is tested against all integers 2..28. None divide it evenly.',
        'isPrime remains true, successfully printing "29 is PRIME".'
      ],
      xpReward: 70
    }
  ]
};
