/**
 * ============================================================================
 * MODULE: For Loop Mastery (Scenario-Driven Edition)
 * ============================================================================
 * 6 Progressive Stages • 30 Real-Life Scenarios • Full Java Code Practice
 * ============================================================================
 */

export const forLoopModule = {
  id: 'for-loop',
  title: 'For Loop Mastery',
  icon: 'Repeat',
  badge: 'Real-Life Edition',
  description: 'Master loop logic by coding 30 practical scenarios, from roll-calls and shop bills to rocket launches and ATM ciphers.',
  totalChallenges: 30,

  stages: [
    { id: 1, title: 'Stage 1: Basic Counting', description: 'Count forwards and backwards in real-life roll calls, countdowns, and steps.', minChallengeId: 1, maxChallengeId: 5 },
    { id: 2, title: 'Stage 2: Skipping & Steps', description: 'Step by custom amounts (i += 2, i += 5, i -= 3) for house numbers and bus routes.', minChallengeId: 6, maxChallengeId: 10 },
    { id: 3, title: 'Stage 3: Accumulating Totals', description: 'Master the bucket accumulator pattern for piggy banks, bill receipts, and marks.', minChallengeId: 11, maxChallengeId: 15 },
    { id: 4, title: 'Stage 4: Loops with Decisions (for + if)', description: 'Filter and react inside loops: cricket overs, pass/fail grading, and FizzBuzz.', minChallengeId: 16, maxChallengeId: 20 },
    { id: 5, title: 'Stage 5: Patterns & Tables', description: 'Nested loops and index algorithms: star stairs, multiplication tables, and reversing strings.', minChallengeId: 21, maxChallengeId: 25 },
    { id: 6, title: 'Stage 6: Mini Problem Solving', description: 'Real algorithmic challenges: compound interest, population growth, factorials, and primes.', minChallengeId: 26, maxChallengeId: 30 },
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
  // 30 SCENARIO CHALLENGES
  // ==========================================================================
  challenges: [
    // ------------------------------------------------------------------------
    // STAGE 1: BASIC COUNTING (Challenges 1 to 5)
    // ------------------------------------------------------------------------
    {
      id: 1,
      stageId: 1,
      isBoss: false,
      title: 'Classroom Roll Call',
      scenario: 'You are a school teacher taking attendance in the morning. Your class has 20 students numbered 1 to 20. You need to call each student number one by one.',
      task: 'Write a for loop that prints "Student 1" up to "Student 20", each on a new line.',
      sampleOutput: `Student 1
Student 2
Student 3
...
Student 20`,
      expectedOutput: Array.from({ length: 20 }, (_, i) => `Student ${i + 1}`).join('\n'),
      thinkFirst: [
        '1. Start counting with a variable: int i = 1;',
        '2. Continue until the 20th student: i <= 20;',
        '3. Increase the student number by 1 each time: i++;',
        '4. Inside the loop: print "Student " + i;'
      ],
      syntaxReminder: `for (int i = 1; i <= 20; i++) {
    // print here
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Print "Student 1" through "Student 20"
        
    }
}`,
      hints: [
        'Initialize your loop with: for (int i = 1; i <= 20; i++)',
        'Inside the loop, use string concatenation: System.out.println("Student " + i);',
        'Make sure to use <= 20 so student 20 is not skipped!'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 20; i++) {
            System.out.println("Student " + i);
        }
    }
}`,
      explanation: [
        'int i = 1; initializes our student roll counter at 1.',
        'i <= 20; ensures the roll call runs for all 20 students.',
        'i++; increments student number by 1 after each call.',
        'System.out.println("Student " + i); outputs the roll call line.'
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
      sampleOutput: `10
9
8
7
6
5
4
3
2
1
Liftoff!`,
      expectedOutput: `10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nLiftoff!`,
      thinkFirst: [
        '1. Start counting from the top: int i = 10;',
        '2. Keep looping while i is greater than or equal to 1: i >= 1;',
        '3. Count DOWN by 1 each round: i--;',
        '4. AFTER the loop finishes, print "Liftoff!" outside the loop.'
      ],
      syntaxReminder: `for (int i = 10; i >= 1; i--) {
    System.out.println(i);
}
System.out.println("Liftoff!");`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Countdown from 10 to 1, then print "Liftoff!"
        
    }
}`,
      hints: [
        'Start at 10 and decrease: for (int i = 10; i >= 1; i--)',
        'Inside the loop, print i: System.out.println(i);',
        'Place System.out.println("Liftoff!"); outside the curly braces {}.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int i = 10; i >= 1; i--) {
            System.out.println(i);
        }
        System.out.println("Liftoff!");
    }
}`,
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
      sampleOutput: `Painting plank 1
Painting plank 2
...
Painting plank 8`,
      expectedOutput: Array.from({ length: 8 }, (_, i) => `Painting plank ${i + 1}`).join('\n'),
      thinkFirst: [
        '1. Start at plank 1: int plank = 1;',
        '2. Stop when plank 8 is finished: plank <= 8;',
        '3. Advance by 1 plank: plank++;',
        '4. Print: "Painting plank " + plank;'
      ],
      syntaxReminder: `for (int plank = 1; plank <= 8; plank++) {
    System.out.println("Painting plank " + plank);
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Print "Painting plank 1" up to "Painting plank 8"
        
    }
}`,
      hints: [
        'Loop from 1 to 8: for (int i = 1; i <= 8; i++)',
        'Print: System.out.println("Painting plank " + i);',
        'Ensure exact capitalization: "Painting plank "'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 8; i++) {
            System.out.println("Painting plank " + i);
        }
    }
}`,
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
      sampleOutput: `Stop 1
Stop 2
...
Stop 15`,
      expectedOutput: Array.from({ length: 15 }, (_, i) => `Stop ${i + 1}`).join('\n'),
      thinkFirst: [
        '1. Start at Stop 1: int stop = 1;',
        '2. Continue until Stop 15: stop <= 15;',
        '3. Step by 1: stop++;',
        '4. Print: "Stop " + stop;'
      ],
      syntaxReminder: `for (int stop = 1; stop <= 15; stop++) {
    System.out.println("Stop " + stop);
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Announce "Stop 1" to "Stop 15"
        
    }
}`,
      hints: [
        'Header: for (int i = 1; i <= 15; i++)',
        'Print: System.out.println("Stop " + i);',
        'Spacing matters: "Stop " has a space before the closing quote.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 15; i++) {
            System.out.println("Stop " + i);
        }
    }
}`,
      explanation: [
        'Loops 15 times from 1 to 15.',
        'Prints the stop announcement each round.'
      ],
      xpReward: 30
    },

    {
      id: 5,
      stageId: 1,
      isBoss: true,
      title: '👑 Stage 1 Boss: Birthday Candles',
      scenario: 'It is a child\'s 7th birthday! As the baker, you need to place candles on the cake. For each candle, print "Candle 1 on cake", "Candle 2 on cake", etc., and after placing all candles, print "Happy Birthday!".',
      task: 'Loop from 1 to 7. Print "Candle " + i + " on cake". After the loop ends, print "Happy Birthday!".',
      sampleOutput: `Candle 1 on cake
Candle 2 on cake
Candle 3 on cake
Candle 4 on cake
Candle 5 on cake
Candle 6 on cake
Candle 7 on cake
Happy Birthday!`,
      expectedOutput: `Candle 1 on cake\nCandle 2 on cake\nCandle 3 on cake\nCandle 4 on cake\nCandle 5 on cake\nCandle 6 on cake\nCandle 7 on cake\nHappy Birthday!`,
      thinkFirst: [
        '1. Set your loop counter to start at 1: int i = 1;',
        '2. Repeat while i <= 7;',
        '3. Inside loop: print "Candle " + i + " on cake";',
        '4. Outside and after loop: print "Happy Birthday!";'
      ],
      syntaxReminder: `for (int i = 1; i <= 7; i++) {
    System.out.println("Candle " + i + " on cake");
}
System.out.println("Happy Birthday!");`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // STAGE 1 BOSS CHALLENGE:
        // Place 7 candles on cake, then print "Happy Birthday!"
        
    }
}`,
      hints: [
        'For loop runs from 1 to 7: for (int i = 1; i <= 7; i++)',
        'Print inside: System.out.println("Candle " + i + " on cake");',
        'Happy Birthday message must be placed AFTER the loop finishes!'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 7; i++) {
            System.out.println("Candle " + i + " on cake");
        }
        System.out.println("Happy Birthday!");
    }
}`,
      explanation: [
        'Loop places candles 1 to 7 one by one.',
        'Once all 7 are placed, the final celebration message prints.'
      ],
      xpReward: 45
    },

    // ------------------------------------------------------------------------
    // STAGE 2: SKIPPING & STEPS (Challenges 6 to 10)
    // ------------------------------------------------------------------------
    {
      id: 6,
      stageId: 2,
      isBoss: false,
      title: 'Even House Numbers',
      scenario: 'A postal delivery worker only delivers letters to the even-numbered houses on Riverside Avenue today, from house 2 up to house 30.',
      task: 'Write a loop that prints even numbers from 2 up to 30, stepping by 2 each time.',
      sampleOutput: `2
4
6
...
30`,
      expectedOutput: Array.from({ length: 15 }, (_, i) => `${(i + 1) * 2}`).join('\n'),
      thinkFirst: [
        '1. Start at house 2: int i = 2;',
        '2. Stop at house 30: i <= 30;',
        '3. Step by 2 houses instead of 1: i += 2;',
        '4. Print i;'
      ],
      syntaxReminder: `for (int i = 2; i <= 30; i += 2) {
    System.out.println(i);
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Print even numbers 2, 4, 6 ... up to 30
        
    }
}`,
      hints: [
        'Start at 2: int i = 2;',
        'Use the step increment: i += 2 (instead of i++)',
        'Condition is: i <= 30'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int i = 2; i <= 30; i += 2) {
            System.out.println(i);
        }
    }
}`,
      explanation: [
        'i += 2 increments i by 2 each round, skipping odd numbers cleanly.'
      ],
      xpReward: 35
    },

    {
      id: 7,
      stageId: 2,
      isBoss: false,
      title: 'Express Highway Milestones',
      scenario: 'You are driving on an express toll highway. Every 5 kilometers, there is a highway milestone marker from 5 km up to 50 km.',
      task: 'Print milestones 5, 10, 15, ..., up to 50 in the format: "Mile marker: X km".',
      sampleOutput: `Mile marker: 5 km
Mile marker: 10 km
...
Mile marker: 50 km`,
      expectedOutput: Array.from({ length: 10 }, (_, i) => `Mile marker: ${(i + 1) * 5} km`).join('\n'),
      thinkFirst: [
        '1. Start at 5: int km = 5;',
        '2. Keep going until 50: km <= 50;',
        '3. Add 5 km every round: km += 5;',
        '4. Print: "Mile marker: " + km + " km";'
      ],
      syntaxReminder: `for (int km = 5; km <= 50; km += 5) {
    System.out.println("Mile marker: " + km + " km");
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Print milestones from 5 km to 50 km
        
    }
}`,
      hints: [
        'Loop header: for (int km = 5; km <= 50; km += 5)',
        'Print statement: System.out.println("Mile marker: " + km + " km");'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int km = 5; km <= 50; km += 5) {
            System.out.println("Mile marker: " + km + " km");
        }
    }
}`,
      explanation: [
        'Starts at 5, steps by +5 each iteration, and formats the output string.'
      ],
      xpReward: 35
    },

    {
      id: 8,
      stageId: 2,
      isBoss: false,
      title: 'Odd Concert Tickets',
      scenario: 'A music festival is raffling prize tickets to attendees holding odd ticket numbers between 1 and 21.',
      task: 'Print odd ticket numbers from 1 up to 21 (1, 3, 5, ..., 21), each on a new line.',
      sampleOutput: `1
3
5
...
21`,
      expectedOutput: Array.from({ length: 11 }, (_, i) => `${i * 2 + 1}`).join('\n'),
      thinkFirst: [
        '1. Start at odd number 1: int ticket = 1;',
        '2. Continue until ticket <= 21;',
        '3. Add 2 each time to jump to next odd: ticket += 2;',
        '4. Print ticket;'
      ],
      syntaxReminder: `for (int t = 1; t <= 21; t += 2) {
    System.out.println(t);
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Print odd numbers 1, 3, 5 ... 21
        
    }
}`,
      hints: [
        'Start at 1, condition <= 21, step by t += 2',
        'Inside: System.out.println(t);'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int t = 1; t <= 21; t += 2) {
            System.out.println(t);
        }
    }
}`,
      explanation: [
        'Starting at 1 and incrementing by 2 guarantees every visited number is odd.'
      ],
      xpReward: 35
    },

    {
      id: 9,
      stageId: 2,
      isBoss: false,
      title: 'Countdown by 3s',
      scenario: 'A fitness trainer has clients do intervals counting down by 3s from 30 seconds down to 3 seconds.',
      task: 'Print numbers counting down from 30 to 3 by subtracting 3 each round (30, 27, 24, ..., 3).',
      sampleOutput: `30
27
24
21
18
15
12
9
6
3`,
      expectedOutput: `30\n27\n24\n21\n18\n15\n12\n9\n6\n3`,
      thinkFirst: [
        '1. Start at high value 30: int sec = 30;',
        '2. Condition checks if >= 3: sec >= 3;',
        '3. Decrease by 3 each time: sec -= 3;',
        '4. Print sec;'
      ],
      syntaxReminder: `for (int sec = 30; sec >= 3; sec -= 3) {
    System.out.println(sec);
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Countdown from 30 down to 3, stepping by -3
        
    }
}`,
      hints: [
        'Start at 30: int i = 30;',
        'Keep running while i >= 3;',
        'Decrease by 3: i -= 3;'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int i = 30; i >= 3; i -= 3) {
            System.out.println(i);
        }
    }
}`,
      explanation: [
        'Decrements by 3 every iteration until reaching 3.'
      ],
      xpReward: 35
    },

    {
      id: 10,
      stageId: 2,
      isBoss: true,
      title: '👑 Stage 2 Boss: Snooze Alarm Clock',
      scenario: 'You are programming a smart alarm clock. When the snooze button is activated, the alarm chime should ring every 15 minutes from minute 0 up to minute 60.',
      task: 'Print "Chime at minute " + m for minutes 0, 15, 30, 45, 60. Then print "Wake up!" after the loop.',
      sampleOutput: `Chime at minute 0
Chime at minute 15
Chime at minute 30
Chime at minute 45
Chime at minute 60
Wake up!`,
      expectedOutput: `Chime at minute 0\nChime at minute 15\nChime at minute 30\nChime at minute 45\nChime at minute 60\nWake up!`,
      thinkFirst: [
        '1. Start at minute 0: int m = 0;',
        '2. Run while m <= 60;',
        '3. Step by 15: m += 15;',
        '4. Print "Chime at minute " + m inside loop;',
        '5. Print "Wake up!" outside loop;'
      ],
      syntaxReminder: `for (int m = 0; m <= 60; m += 15) {
    System.out.println("Chime at minute " + m);
}
System.out.println("Wake up!");`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // STAGE 2 BOSS CHALLENGE:
        // Chime every 15 minutes from 0 to 60, then "Wake up!"
        
    }
}`,
      hints: [
        'Start at 0: for (int m = 0; m <= 60; m += 15)',
        'Print chime line inside loop.',
        'Print "Wake up!" outside after loop.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int m = 0; m <= 60; m += 15) {
            System.out.println("Chime at minute " + m);
        }
        System.out.println("Wake up!");
    }
}`,
      explanation: [
        'm starts at 0 and adds 15 each round (0, 15, 30, 45, 60).',
        'After the 60-minute cycle, the final wake-up message sounds.'
      ],
      xpReward: 50
    },

    // ------------------------------------------------------------------------
    // STAGE 3: ACCUMULATING TOTALS (Challenges 11 to 15)
    // ------------------------------------------------------------------------
    {
      id: 11,
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
      syntaxReminder: `int total = 0;
for (int day = 1; day <= 30; day++) {
    total += 10;
}
System.out.println("Total Savings: Rs. " + total);`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Accumulate Rs. 10 for 30 days, then print total savings
        
    }
}`,
      hints: [
        'Declare int total = 0; before the loop.',
        'Inside loop write: total += 10;',
        'Print outside: System.out.println("Total Savings: Rs. " + total);'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int total = 0;
        for (int day = 1; day <= 30; day++) {
            total += 10;
        }
        System.out.println("Total Savings: Rs. " + total);
    }
}`,
      explanation: [
        'total begins at 0.',
        '30 iterations adding 10 each time results in 300.',
        'Printed only once after the loop finishes.'
      ],
      xpReward: 40
    },

    {
      id: 12,
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
      syntaxReminder: `int sum = 0;
for (int i = 1; i <= 100; i++) {
    sum += i;
}
System.out.println("Sum: " + sum);`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Sum numbers 1 to 100 and print "Sum: 5050"
        
    }
}`,
      hints: [
        'Initialize sum to 0 before the loop.',
        'Inside the loop: sum += i;',
        'Print outside the loop braces.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 100; i++) {
            sum += i;
        }
        System.out.println("Sum: " + sum);
    }
}`,
      explanation: [
        'sum accumulates 1 + 2 + 3 + ... + 100 = 5050.',
        'Result printed after loop completes.'
      ],
      xpReward: 40
    },

    {
      id: 13,
      stageId: 3,
      isBoss: false,
      title: 'Cashier Running Bill',
      scenario: 'You are writing the billing software for a grocery store cashier. A customer buys 4 items, each costing Rs. 120. The register must display the updated running bill after scanning each item.',
      task: 'Loop 4 times. Add 120 to bill each time and print "Item " + i + " running total: Rs. " + bill.',
      sampleOutput: `Item 1 running total: Rs. 120
Item 2 running total: Rs. 240
Item 3 running total: Rs. 360
Item 4 running total: Rs. 480`,
      expectedOutput: `Item 1 running total: Rs. 120\nItem 2 running total: Rs. 240\nItem 3 running total: Rs. 360\nItem 4 running total: Rs. 480`,
      thinkFirst: [
        '1. Bucket: int bill = 0;',
        '2. Loop 4 items: for (int i = 1; i <= 4; i++)',
        '3. Add price: bill += 120;',
        '4. Print INSIDE the loop so customer sees each step!'
      ],
      syntaxReminder: `int bill = 0;
for (int i = 1; i <= 4; i++) {
    bill += 120;
    System.out.println("Item " + i + " running total: Rs. " + bill);
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Print running bill after each of the 4 items
        
    }
}`,
      hints: [
        'Notice that here, we print INSIDE the loop because it is a RUNNING total!',
        'bill starts at 0, adds 120 each round.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int bill = 0;
        for (int i = 1; i <= 4; i++) {
            bill += 120;
            System.out.println("Item " + i + " running total: Rs. " + bill);
        }
    }
}`,
      explanation: [
        'Because the receipt prints after each item, the print statement is placed inside the loop body.'
      ],
      xpReward: 40
    },

    {
      id: 14,
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
      syntaxReminder: `int count = 0;
for (int i = 1; i <= 100; i++) {
    if (i % 7 == 0) count++;
}
System.out.println("Count: " + count);`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Count numbers between 1 and 100 divisible by 7
        
    }
}`,
      hints: [
        'Check divisibility using modulo: i % 7 == 0',
        'Increment: count++',
        'Print after loop: System.out.println("Count: " + count);'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int count = 0;
        for (int i = 1; i <= 100; i++) {
            if (i % 7 == 0) {
                count++;
            }
        }
        System.out.println("Count: " + count);
    }
}`,
      explanation: [
        'Tests all 100 numbers; exactly 14 of them are multiples of 7 (7, 14, 21 ... 98).'
      ],
      xpReward: 40
    },

    {
      id: 15,
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
      syntaxReminder: `int sum = 0;
for (int i = 1; i <= 10; i++) {
    sum += i;
}
double avg = sum / 10.0;
System.out.println("Average: " + avg);`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // STAGE 3 BOSS CHALLENGE:
        // Sum 1 to 10, divide by 10.0, print "Average: 5.5"
        
    }
}`,
      hints: [
        'Sum 1 to 10 equals 55.',
        'Divide by 10.0 (with decimal point) to avoid integer division truncation!',
        'Print: System.out.println("Average: " + avg);'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int sum = 0;
        for (int i = 1; i <= 10; i++) {
            sum += i;
        }
        double avg = sum / 10.0;
        System.out.println("Average: " + avg);
    }
}`,
      explanation: [
        'sum = 55. 55 / 10.0 evaluates to 5.5.',
        'Correctly prints Average: 5.5.'
      ],
      xpReward: 50
    },

    // ------------------------------------------------------------------------
    // STAGE 4: LOOPS WITH DECISIONS (for + if) (Challenges 16 to 20)
    // ------------------------------------------------------------------------
    {
      id: 16,
      stageId: 4,
      isBoss: false,
      title: 'Cricket Over Thriller',
      scenario: 'A cricket over consists of 6 deliveries (balls 1 to 6). On the final 6th ball, the batsman hits an unforgettable maximum over long-on!',
      task: 'Loop through balls 1 to 6. For balls 1 to 5, print "Ball " + i. On ball 6, print "Ball 6 - SIX!".',
      sampleOutput: `Ball 1
Ball 2
Ball 3
Ball 4
Ball 5
Ball 6 - SIX!`,
      expectedOutput: `Ball 1\nBall 2\nBall 3\nBall 4\nBall 5\nBall 6 - SIX!`,
      thinkFirst: [
        '1. Loop ball from 1 to 6.',
        '2. If ball == 6, print "Ball 6 - SIX!".',
        '3. Else, print "Ball " + ball.'
      ],
      syntaxReminder: `for (int b = 1; b <= 6; b++) {
    if (b == 6) {
        System.out.println("Ball 6 - SIX!");
    } else {
        System.out.println("Ball " + b);
    }
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Print Ball 1 to 5, and "Ball 6 - SIX!" on 6
        
    }
}`,
      hints: [
        'Loop 1 to 6: for (int b = 1; b <= 6; b++)',
        'Use if (b == 6) for special treatment of the last ball.',
        'Use else for balls 1 through 5.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int b = 1; b <= 6; b++) {
            if (b == 6) {
                System.out.println("Ball 6 - SIX!");
            } else {
                System.out.println("Ball " + b);
            }
        }
    }
}`,
      explanation: [
        'Uses an if-else decision inside the loop to branch behavior based on the current iteration counter.'
      ],
      xpReward: 40
    },

    {
      id: 17,
      stageId: 4,
      isBoss: false,
      title: 'Exam Pass Count',
      scenario: 'A university exam paper has been graded. Marks for 8 students are stored in an array. A mark of 50 or higher is a PASS.',
      task: 'Loop over the provided marks array: int[] marks = { 45, 67, 89, 32, 50, 91, 55, 38 }; Count how many students passed and print "Passed: " + passed.',
      sampleOutput: `Passed: 5`,
      expectedOutput: `Passed: 5`,
      thinkFirst: [
        '1. int[] marks = { 45, 67, 89, 32, 50, 91, 55, 38 };',
        '2. Counter: int passed = 0;',
        '3. Loop from index 0 to marks.length - 1: for (int i = 0; i < marks.length; i++)',
        '4. If marks[i] >= 50, increment passed++;',
        '5. Print "Passed: " + passed;'
      ],
      syntaxReminder: `int passed = 0;
for (int i = 0; i < marks.length; i++) {
    if (marks[i] >= 50) passed++;
}
System.out.println("Passed: " + passed);`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        int[] marks = { 45, 67, 89, 32, 50, 91, 55, 38 };
        // WRITE YOUR CODE HERE:
        // Count how many marks are >= 50, print "Passed: 5"
        
    }
}`,
      hints: [
        'Loop through array indices: for (int i = 0; i < marks.length; i++)',
        'Check if (marks[i] >= 50) { passed++; }',
        'Print result after loop.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int[] marks = { 45, 67, 89, 32, 50, 91, 55, 38 };
        int passed = 0;
        for (int i = 0; i < marks.length; i++) {
            if (marks[i] >= 50) {
                passed++;
            }
        }
        System.out.println("Passed: " + passed);
    }
}`,
      explanation: [
        'The marks >= 50 are 67, 89, 50, 91, 55 (total 5).',
        'Prints Passed: 5.'
      ],
      xpReward: 45
    },

    {
      id: 18,
      stageId: 4,
      isBoss: false,
      title: 'Classroom FizzBuzz Game',
      scenario: 'Students sit in a circle playing FizzBuzz from 1 to 15. If a number is divisible by both 3 and 5, shout "FizzBuzz". If only by 3, shout "Fizz". If only by 5, shout "Buzz". Otherwise shout the number.',
      task: 'Loop 1 to 15 with this exact FizzBuzz logic.',
      sampleOutput: `1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz`,
      expectedOutput: `1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz`,
      thinkFirst: [
        '1. Loop i from 1 to 15.',
        '2. Check (i % 15 == 0) FIRST (or i % 3 == 0 && i % 5 == 0).',
        '3. Else if (i % 3 == 0) -> "Fizz".',
        '4. Else if (i % 5 == 0) -> "Buzz".',
        '5. Else -> print i.'
      ],
      syntaxReminder: `if (i % 15 == 0) {
    System.out.println("FizzBuzz");
} else if (i % 3 == 0) {
    System.out.println("Fizz");
} else if (i % 5 == 0) {
    System.out.println("Buzz");
} else {
    System.out.println(i);
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Play FizzBuzz from 1 to 15
        
    }
}`,
      hints: [
        'Always check the combined condition (15) first!',
        'If you check 3 first, 15 will print Fizz instead of FizzBuzz.',
        'Use if - else if - else ladder.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 15; i++) {
            if (i % 15 == 0) {
                System.out.println("FizzBuzz");
            } else if (i % 3 == 0) {
                System.out.println("Fizz");
            } else if (i % 5 == 0) {
                System.out.println("Buzz");
            } else {
                System.out.println(i);
            }
        }
    }
}`,
      explanation: [
        'Classic coding interview staple checking modulo logic and condition order.'
      ],
      xpReward: 45
    },

    {
      id: 19,
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
      syntaxReminder: `int max = scores[0];
for (int i = 1; i < scores.length; i++) {
    if (scores[i] > max) max = scores[i];
}
System.out.println("Largest: " + max);`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        int[] scores = { 42, 88, 15, 99, 63, 77 };
        // WRITE YOUR CODE HERE:
        // Find largest score and print "Largest: 99"
        
    }
}`,
      hints: [
        'Set int max = scores[0]; before the loop.',
        'Loop through the array and update max whenever you find a larger number.',
        'Print outside the loop.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int[] scores = { 42, 88, 15, 99, 63, 77 };
        int max = scores[0];
        for (int i = 1; i < scores.length; i++) {
            if (scores[i] > max) {
                max = scores[i];
            }
        }
        System.out.println("Largest: " + max);
    }
}`,
      explanation: [
        'Iterates through the array, comparing each item against the current max.'
      ],
      xpReward: 45
    },

    {
      id: 20,
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
      syntaxReminder: `int count = 0;
for (int i = 0; i < name.length(); i++) {
    char c = name.charAt(i);
    if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
        count++;
    }
}
System.out.println("Vowels: " + count);`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        String name = "INDONESIA";
        // STAGE 4 BOSS CHALLENGE:
        // Count vowels (A,E,I,O,U) and print "Vowels: 5"
        
    }
}`,
      hints: [
        'Use name.length() to get length of string.',
        'Use name.charAt(i) to extract individual letters.',
        'Check each vowel with the || (OR) operator.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        String name = "INDONESIA";
        int count = 0;
        for (int i = 0; i < name.length(); i++) {
            char c = name.charAt(i);
            if (c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
                count++;
            }
        }
        System.out.println("Vowels: " + count);
    }
}`,
      explanation: [
        'I, O, E, I, A are the 5 vowels in INDONESIA.',
        'Correctly inspects each character by index.'
      ],
      xpReward: 55
    },

    // ------------------------------------------------------------------------
    // STAGE 5: PATTERNS & TABLES (Challenges 21 to 25)
    // ------------------------------------------------------------------------
    {
      id: 21,
      stageId: 5,
      isBoss: false,
      title: 'Exam Times Table (Table of 7)',
      scenario: 'A student preparing for mathematics exams needs a flashcard printed with the complete multiplication table of 7 from 1 to 10.',
      task: 'Print the multiplication table of 7 in the format: "7 x " + i + " = " + (7 * i).',
      sampleOutput: `7 x 1 = 7
7 x 2 = 14
...
7 x 10 = 70`,
      expectedOutput: Array.from({ length: 10 }, (_, i) => `7 x ${i + 1} = ${(i + 1) * 7}`).join('\n'),
      thinkFirst: [
        '1. Loop multiplier i from 1 to 10.',
        '2. Inside: print "7 x " + i + " = " + (7 * i);'
      ],
      syntaxReminder: `for (int i = 1; i <= 10; i++) {
    System.out.println("7 x " + i + " = " + (7 * i));
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Print multiplication table of 7 from 1 to 10
        
    }
}`,
      hints: [
        'Loop 1 to 10: for (int i = 1; i <= 10; i++)',
        'Print format: System.out.println("7 x " + i + " = " + (7 * i));'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 10; i++) {
            System.out.println("7 x " + i + " = " + (7 * i));
        }
    }
}`,
      explanation: [
        'Evaluates (7 * i) each round and prints formatted equations.'
      ],
      xpReward: 40
    },

    {
      id: 22,
      stageId: 5,
      isBoss: false,
      title: 'Staircase Star Pyramid',
      scenario: 'You are designing an ASCII game menu that prints a 5-step staircase of stars using nested loops.',
      task: 'Print 5 rows of stars: Row 1 has 1 star, Row 2 has 2 stars, ..., Row 5 has 5 stars.',
      sampleOutput: `*
**
***
****
*****`,
      expectedOutput: `*\n**\n***\n****\n*****`,
      thinkFirst: [
        '1. Outer loop controls rows: for (int r = 1; r <= 5; r++)',
        '2. Inner loop controls stars in that row: for (int c = 1; c <= r; c++)',
        '3. Inside inner loop: System.out.print("*"); (NOT println!)',
        '4. After inner loop: System.out.println(); (move to next row)'
      ],
      syntaxReminder: `for (int r = 1; r <= 5; r++) {
    for (int c = 1; c <= r; c++) {
        System.out.print("*");
    }
    System.out.println();
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Print 5 rows star stairs (* to *****)
        
    }
}`,
      hints: [
        'Use nested loops: outer for rows (1 to 5), inner for cols (1 to r).',
        'Use System.out.print("*") inside inner loop.',
        'Use System.out.println() after inner loop.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int r = 1; r <= 5; r++) {
            for (int c = 1; c <= r; c++) {
                System.out.print("*");
            }
            System.out.println();
        }
    }
}`,
      explanation: [
        'Outer loop runs 5 times for rows.',
        'Inner loop prints r stars, followed by a newline.'
      ],
      xpReward: 45
    },

    {
      id: 23,
      stageId: 5,
      isBoss: false,
      title: 'Counting Number Triangle',
      scenario: 'An architect needs a 4-level numeric layout printed where each row repeats numbers from 1 up to the row number.',
      task: 'Print 4 rows: Row 1 is "1", Row 2 is "12", Row 3 is "123", Row 4 is "1234".',
      sampleOutput: `1
12
123
1234`,
      expectedOutput: `1\n12\n123\n1234`,
      thinkFirst: [
        '1. Outer loop r from 1 to 4.',
        '2. Inner loop c from 1 to r.',
        '3. Print c with System.out.print(c);',
        '4. Print newline after inner loop.'
      ],
      syntaxReminder: `for (int r = 1; r <= 4; r++) {
    for (int c = 1; c <= r; c++) {
        System.out.print(c);
    }
    System.out.println();
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Print rows 1, 12, 123, 1234
        
    }
}`,
      hints: [
        'Similar to stars, but print the inner loop variable c instead of "*"!',
        'Outer loop goes up to 4.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int r = 1; r <= 4; r++) {
            for (int c = 1; c <= r; c++) {
                System.out.print(c);
            }
            System.out.println();
        }
    }
}`,
      explanation: [
        'Printing the column index c in each row generates 1, 12, 123, 1234.'
      ],
      xpReward: 45
    },

    {
      id: 24,
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
      syntaxReminder: `for (int i = 1; i <= 8; i++) {
    if (i % 2 != 0) {
        System.out.print("B ");
    } else {
        System.out.print("W ");
    }
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Print alternating "B W B W B W B W"
        
    }
}`,
      hints: [
        'Use System.out.print instead of println so they stay on one line.',
        'Check odd/even using modulo: if (i % 2 != 0)'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        for (int i = 1; i <= 8; i++) {
            if (i % 2 != 0) {
                System.out.print("B ");
            } else {
                System.out.print("W ");
            }
        }
    }
}`,
      explanation: [
        'Alternates B and W across 8 tiles.'
      ],
      xpReward: 45
    },

    {
      id: 25,
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
      syntaxReminder: `String word = "JAVA";
for (int i = word.length() - 1; i >= 0; i--) {
    System.out.print(word.charAt(i));
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        String word = "JAVA";
        // STAGE 5 BOSS CHALLENGE:
        // Reverse "JAVA" to print "AVAJ"
        
    }
}`,
      hints: [
        'Last index of string is word.length() - 1.',
        'Condition: i >= 0;',
        'Decrease counter: i--;',
        'Print each char without newline using System.out.print.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        String word = "JAVA";
        for (int i = word.length() - 1; i >= 0; i--) {
            System.out.print(word.charAt(i));
        }
    }
}`,
      explanation: [
        'Traverses the string from index 3 down to 0, reversing the letters to AVAJ.'
      ],
      xpReward: 55
    },

    // ------------------------------------------------------------------------
    // STAGE 6: MINI PROBLEM SOLVING (Challenges 26 to 30)
    // ------------------------------------------------------------------------
    {
      id: 26,
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
      syntaxReminder: `int fact = 1;
for (int i = 1; i <= 5; i++) {
    fact *= i;
}
System.out.println("Factorial: " + fact);`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Compute 5! and print "Factorial: 120"
        
    }
}`,
      hints: [
        'Never initialize factorial to 0, because 0 * anything = 0!',
        'Start at 1, loop 1 to 5, multiply each i.',
        'Print outside loop.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int fact = 1;
        for (int i = 1; i <= 5; i++) {
            fact *= i;
        }
        System.out.println("Factorial: " + fact);
    }
}`,
      explanation: [
        'Computes 1 * 2 * 3 * 4 * 5 = 120.'
      ],
      xpReward: 50
    },

    {
      id: 27,
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
      syntaxReminder: `int result = 1;
for (int i = 1; i <= 10; i++) {
    result *= 2;
}
System.out.println("Power: " + result);`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Calculate 2^10 without Math.pow and print "Power: 1024"
        
    }
}`,
      hints: [
        'Initialize result = 1;',
        'Inside loop of 10 rounds: result = result * 2;',
        'Print after loop finishes.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int result = 1;
        for (int i = 1; i <= 10; i++) {
            result *= 2;
        }
        System.out.println("Power: " + result);
    }
}`,
      explanation: [
        'Doubling 1 ten times produces 1024.'
      ],
      xpReward: 50
    },

    {
      id: 28,
      stageId: 6,
      isBoss: false,
      title: 'City Population Projection',
      scenario: 'A city planning commission projects that a town of 1000 residents will grow by 10% each year for 3 consecutive years.',
      task: 'Start with int pop = 1000. Loop years 1 to 3. Each year add 10% (pop = pop + (pop * 10 / 100)) and print "Year " + year + ": " + pop.',
      sampleOutput: `Year 1: 1100
Year 2: 1210
Year 3: 1331`,
      expectedOutput: `Year 1: 1100\nYear 2: 1210\nYear 3: 1331`,
      thinkFirst: [
        '1. int pop = 1000;',
        '2. Loop year from 1 to 3;',
        '3. Increase pop: pop = pop + (pop * 10 / 100);',
        '4. Print "Year " + year + ": " + pop inside loop;'
      ],
      syntaxReminder: `int pop = 1000;
for (int yr = 1; yr <= 3; yr++) {
    pop = pop + (pop * 10 / 100);
    System.out.println("Year " + yr + ": " + pop);
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Project population from 1000 growing 10% for 3 years
        
    }
}`,
      hints: [
        'Year 1: 1000 + 100 = 1100',
        'Year 2: 1100 + 110 = 1210',
        'Year 3: 1210 + 121 = 1331',
        'Print each year inside the loop.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int pop = 1000;
        for (int yr = 1; yr <= 3; yr++) {
            pop = pop + (pop * 10 / 100);
            System.out.println("Year " + yr + ": " + pop);
        }
    }
}`,
      explanation: [
        'Compounding population growth step-by-step.'
      ],
      xpReward: 50
    },

    {
      id: 29,
      stageId: 6,
      isBoss: false,
      title: 'Bank Loan Yearly Balance',
      scenario: 'You take out a Rs. 10,000 small business loan with a simple 500 flat yearly fee added to the balance each year for 3 years.',
      task: 'Start with int balance = 10000. Loop 3 years. Add 500 each year and print "Year " + i + " Balance: Rs. " + balance.',
      sampleOutput: `Year 1 Balance: Rs. 10500
Year 2 Balance: Rs. 11000
Year 3 Balance: Rs. 11500`,
      expectedOutput: `Year 1 Balance: Rs. 10500\nYear 2 Balance: Rs. 11000\nYear 3 Balance: Rs. 11500`,
      thinkFirst: [
        '1. int balance = 10000;',
        '2. Loop i from 1 to 3;',
        '3. balance += 500;',
        '4. Print "Year " + i + " Balance: Rs. " + balance;'
      ],
      syntaxReminder: `int balance = 10000;
for (int i = 1; i <= 3; i++) {
    balance += 500;
    System.out.println("Year " + i + " Balance: Rs. " + balance);
}`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        // WRITE YOUR CODE HERE:
        // Add 500 each year for 3 years, printing balance
        
    }
}`,
      hints: [
        'Start balance at 10000.',
        'Add 500 inside the loop: balance += 500;',
        'Print line inside loop.'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int balance = 10000;
        for (int i = 1; i <= 3; i++) {
            balance += 500;
            System.out.println("Year " + i + " Balance: Rs. " + balance);
        }
    }
}`,
      explanation: [
        'Increments balance by 500 each year and displays statement.'
      ],
      xpReward: 50
    },

    {
      id: 30,
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
      syntaxReminder: `int num = 29;
boolean isPrime = true;
for (int i = 2; i < num; i++) {
    if (num % i == 0) {
        isPrime = false;
        break;
    }
}
if (isPrime) System.out.println(num + " is PRIME");`,
      starterCode: `public class Main {
    public static void main(String[] args) {
        int num = 29;
        boolean isPrime = true;
        // ULTIMATE BOSS CHALLENGE:
        // Test if 29 is prime using a for loop, print "29 is PRIME"
        
    }
}`,
      hints: [
        'Loop through possible divisors: for (int i = 2; i < num; i++)',
        'If num % i == 0, then a divisor exists, so it is NOT prime.',
        'At the end check if (isPrime) System.out.println(num + " is PRIME");'
      ],
      modelSolution: `public class Main {
    public static void main(String[] args) {
        int num = 29;
        boolean isPrime = true;
        for (int i = 2; i < num; i++) {
            if (num % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            System.out.println(num + " is PRIME");
        }
    }
}`,
      explanation: [
        '29 is tested against all integers 2..28. None divide it evenly.',
        'isPrime remains true, successfully printing "29 is PRIME".'
      ],
      xpReward: 70
    }
  ]
};
