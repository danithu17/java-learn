/**
 * ============================================================================
 * MODULE 1: FOR LOOP MASTERY (Sri Lankan Scenario & ICD/iCET Q201-Q250 Edition)
 * ============================================================================
 * 7 Progressive Stages • 41 Real-Life Scenarios • 6 In-Depth Lessons
 * ============================================================================
 */

export const forLoopModule = {
  "id": "for-loop",
  "title": "For Loop Mastery",
  "icon": "Repeat",
  "description": "Master fixed repetition, custom steps, loop traps, list formatting with \\b\\b, and accumulator algorithms.",
  "badge": "Module 1",
  "totalChallenges": 41,
  "stages": [
    {
      "id": 1,
      "title": "Stage 1: Why Loops? (Repetition)",
      "description": "Understand why we avoid copy-pasting code: school welcomes, alarm clocks, cooking rice, and cricket overs.",
      "minChallengeId": 1,
      "maxChallengeId": 5
    },
    {
      "id": 2,
      "title": "Stage 2: Start, End & Steps",
      "description": "Master initialization, bounds, and step updates (i++, i+=2, i+=5, i--) with Concept Labs.",
      "minChallengeId": 6,
      "maxChallengeId": 12
    },
    {
      "id": 3,
      "title": "Stage 3: Loop Traps (Understand the Rules)",
      "description": "Spot missing updates, opposite directions, variable scope rules, and byte overflow traps.",
      "minChallengeId": 13,
      "maxChallengeId": 18
    },
    {
      "id": 4,
      "title": "Stage 4: Formatting Output",
      "description": "Single line printing, list brackets [1, 2, ... N], backspace deletion, and swapping bounds.",
      "minChallengeId": 19,
      "maxChallengeId": 24
    },
    {
      "id": 5,
      "title": "Stage 5: Accumulating (Sum, Product, Count)",
      "description": "The accumulator bucket pattern: piggy banks, 1+2+...+N equations, factorials, and powers.",
      "minChallengeId": 25,
      "maxChallengeId": 30
    },
    {
      "id": 6,
      "title": "Stage 6: Taking Input Inside a Loop",
      "description": "Reading numbers with Scanner in loops: totals, prompts, maximum/minimum mark finders, and shop bills.",
      "minChallengeId": 31,
      "maxChallengeId": 35
    },
    {
      "id": 7,
      "title": "Stage 7: Loops + Decisions & Boss",
      "description": "Combining for + if: cricket balls, FizzBuzz, odd filters, vowel counts, interest compounding, and ATM statement.",
      "minChallengeId": 36,
      "maxChallengeId": 41
    }
  ],
  "lessons": [
    {
      "id": "lesson-1",
      "title": "What is a Loop & Why We Use It",
      "duration": "3 min read",
      "summary": "Why repeating code manually is slow and error-prone.",
      "content": "\n### Why Loops Exist\nImagine you run a supermarket. A customer buys 50 items. Would you write:\n```java\nSystem.out.println(\"Processing item 1\");\nSystem.out.println(\"Processing item 2\");\n// ... 50 times?!\n```\nNo! You write **one loop** of 3 lines:\n```java\nfor (int i = 1; i <= 50; i++) {\n    System.out.println(\"Processing item \" + i);\n}\n```\nLoops let you write instructions once and tell the computer to repeat them as many times as needed.\n      "
    },
    {
      "id": "lesson-2",
      "title": "Anatomy of a For Loop",
      "duration": "4 min read",
      "summary": "The 3 gears that make every for-loop spin.",
      "content": "\n```\nfor ( INITIALIZATION ; CONDITION ; UPDATE ) {\n    // LOOP BODY (Code that runs each round)\n}\n```\n1. **Initialization (`int i = 1`):** Sets starting value. Runs only ONCE at the start.\n2. **Condition (`i <= 10`):** Gatekeeper. Checked BEFORE every round. If true -> run body. If false -> exit loop.\n3. **Update (`i++`):** Changes the counter at the end of each round (e.g. `i++`, `i--`, `i += 5`).\n      "
    },
    {
      "id": "lesson-3",
      "title": "Step-by-Step Execution Order",
      "duration": "3 min read",
      "summary": "Watch how Java moves through each iteration.",
      "content": "\nFor `for (int i = 1; i <= 3; i++) { System.out.println(i); }`:\n1. Start: `i = 1`.\n2. Check: `1 <= 3`? True. Print `1`.\n3. Update: `i++` -> `i = 2`.\n4. Check: `2 <= 3`? True. Print `2`.\n5. Update: `i++` -> `i = 3`.\n6. Check: `3 <= 3`? True. Print `3`.\n7. Update: `i++` -> `i = 4`.\n8. Check: `4 <= 3`? False! Stop loop!\n      "
    },
    {
      "id": "lesson-4",
      "title": "The Accumulator (\"Bucket\") Pattern",
      "duration": "4 min read",
      "summary": "How to calculate running totals, counts, and sums.",
      "content": "\nTo calculate a total:\n1. Create a variable (bucket) **BEFORE** the loop: `int total = 0;`\n2. Inside the loop, add to it: `total += amount;`\n3. **CRITICAL:** Print the bucket **AFTER** the loop finishes!\n      "
    },
    {
      "id": "lesson-5",
      "title": "Common Beginner Mistakes to Avoid",
      "duration": "3 min read",
      "summary": "Semicolons, off-by-one errors, and infinite loops.",
      "content": "\n- 🚫 **Accidental Semicolon:** Never put `;` after `for(...);`. It terminates the loop immediately!\n- ⚠️ **Off-By-One:** `i < 10` stops at 9. Use `i <= 10` to include 10.\n- ♾️ **Wrong Update:** If you write `i++` in a countdown (`for (int i=10; i>=1; i++)`), `i` grows forever!\n      "
    },
    {
      "id": "for-lesson-3",
      "title": "Formatting Lists with \\b\\b (Ref: Q228-Q234)",
      "duration": "3 min read",
      "summary": "How to print clean lists [1, 2, 3] without trailing commas.",
      "content": "\nWhen printing numbers inside a loop, printing `i + \", \"` leaves an ugly extra comma at the end: `[1, 2, 3, ]`.\nTo remove it cleanly as shown in class:\n\n```java\nSystem.out.print(\"[\");\nfor (int i = 1; i <= 3; i++) {\n    System.out.print(i + \", \");\n}\nSystem.out.print(\"\\b\\b]\"); // \\b backspaces over the last comma & space!\n```\nOutput: `[1, 2, 3]`\n      "
    }
  ],
  "challenges": [
    {
      "id": 1,
      "stageId": 1,
      "isBoss": false,
      "title": "School Morning Welcome (Ref: Q201-Q202)",
      "scenario": "It is the first day of the school term in Colombo. The principal wants the digital banner to display \"Welcome to the school!\" exactly 10 times to greet arriving students.",
      "task": "Using a for loop starting at int i = 1 up to 10, print \"Welcome to the school!\" on 10 separate lines.",
      "sampleOutput": "Welcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!",
      "expectedOutput": "Welcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!\nWelcome to the school!",
      "thinkFirst": [
        "1. Start counter at 1: int i = 1;",
        "2. Condition: i <= 10 (or int i = 0; i < 10);",
        "3. Update: i++;",
        "4. Inside body: System.out.println(\"Welcome to the school!\");"
      ],
      "syntaxReminder": "for (int i = 1; i <= 10; i++) {\n    System.out.println(\"Welcome to the school!\");\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Print \"Welcome to the school!\" 10 times using a for loop\n        \n    }\n}",
      "hints": [
        "Use: for (int i = 1; i <= 10; i++)",
        "Inside loop: System.out.println(\"Welcome to the school!\");",
        "Make sure spelling and punctuation match exactly!"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(\"Welcome to the school!\");\n        }\n    }\n}",
      "explanation": [
        "The for loop initializes i to 1.",
        "Runs for i = 1 through 10 (10 times total).",
        "Demonstrates replacing 10 manual println lines with one concise loop!"
      ],
      "xpReward": 30
    },
    {
      "id": 2,
      "stageId": 1,
      "isBoss": false,
      "title": "Alarm Clock Wakeup Call",
      "scenario": "You have a school exam at 8:00 AM! Your phone alarm is set to ring 7 times to make sure you wake up on time.",
      "task": "Using a for loop, print \"Wake up!\" exactly 7 times on separate lines.",
      "sampleOutput": "Wake up!\nWake up!\nWake up!\nWake up!\nWake up!\nWake up!\nWake up!",
      "expectedOutput": "Wake up!\nWake up!\nWake up!\nWake up!\nWake up!\nWake up!\nWake up!",
      "thinkFirst": [
        "1. Initialize i = 1;",
        "2. Condition: i <= 7;",
        "3. Step: i++;",
        "4. Print \"Wake up!\" inside."
      ],
      "syntaxReminder": "for (int i = 1; i <= 7; i++) {\n    System.out.println(\"Wake up!\");\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Print \"Wake up!\" 7 times\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Loop header: for (int i = 1; i <= 7; i++)",
        "Statement: System.out.println(\"Wake up!\");"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 1; i <= 7; i++) {\n            System.out.println(\"Wake up!\");\n        }\n    }\n}",
      "explanation": [
        "Iterates 7 rounds (i = 1, 2, 3, 4, 5, 6, 7)."
      ],
      "xpReward": 30
    },
    {
      "id": 3,
      "stageId": 1,
      "isBoss": false,
      "title": "Cooking Rice: Code Before & After (Ref: Q203)",
      "scenario": "In Sri Lankan kitchens, cooking rice follows a strict sequence: you turn on the stove (\"Start cooking\"), let it steam for 5 minutes (\"Cooking rice\"), and turn it off (\"End cooking\").",
      "task": "Print \"Start cooking\" before the loop. Inside a loop that runs 5 times, print \"Cooking rice\". After the loop ends, print \"End cooking\".",
      "sampleOutput": "Start cooking\nCooking rice\nCooking rice\nCooking rice\nCooking rice\nCooking rice\nEnd cooking",
      "expectedOutput": "Start cooking\nCooking rice\nCooking rice\nCooking rice\nCooking rice\nCooking rice\nEnd cooking",
      "thinkFirst": [
        "1. Print \"Start cooking\" OUTSIDE and BEFORE the loop.",
        "2. Write loop running 5 times: for (int i = 1; i <= 5; i++) { ... }",
        "3. Inside loop: print \"Cooking rice\";",
        "4. Print \"End cooking\" OUTSIDE and AFTER the loop."
      ],
      "syntaxReminder": "System.out.println(\"Start cooking\");\nfor (int i = 1; i <= 5; i++) {\n    System.out.println(\"Cooking rice\");\n}\nSystem.out.println(\"End cooking\");",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Code before loop, loop 5 times, code after loop\n        \n    }\n}",
      "hints": [
        "Place \"Start cooking\" before the for keyword.",
        "The loop runs 5 times: for (int i = 1; i <= 5; i++)",
        "Place \"End cooking\" after the closing brace } of the loop."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        System.out.println(\"Start cooking\");\n        for (int i = 1; i <= 5; i++) {\n            System.out.println(\"Cooking rice\");\n        }\n        System.out.println(\"End cooking\");\n    }\n}",
      "explanation": [
        "Shows execution order: code before runs once, loop body runs 5 times, code after runs once."
      ],
      "xpReward": 30
    },
    {
      "id": 4,
      "stageId": 1,
      "isBoss": false,
      "title": "Cricket Over: Multiple Statements (Ref: Q204)",
      "scenario": "During an over in a Sri Lankan cricket match, for all 6 legal deliveries, two actions occur: the bowler bowls and the batsman plays.",
      "task": "Using a for loop that repeats 6 times (1 over), print two lines inside every round: \"Ball bowled\" and \"Ball played\".",
      "sampleOutput": "Ball bowled\nBall played\nBall bowled\nBall played\nBall bowled\nBall played\nBall bowled\nBall played\nBall bowled\nBall played\nBall bowled\nBall played",
      "expectedOutput": "Ball bowled\nBall played\nBall bowled\nBall played\nBall bowled\nBall played\nBall bowled\nBall played\nBall bowled\nBall played\nBall bowled\nBall played",
      "thinkFirst": [
        "1. Loop for 6 balls: for (int i = 1; i <= 6; i++)",
        "2. Open curly brace {",
        "3. print \"Ball bowled\"; and print \"Ball played\";",
        "4. Close curly brace }"
      ],
      "syntaxReminder": "for (int i = 1; i <= 6; i++) {\n    System.out.println(\"Ball bowled\");\n    System.out.println(\"Ball played\");\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Print both statements for 6 rounds\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Put both println statements inside the loop body curly braces { }.",
        "Condition: i <= 6"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 1; i <= 6; i++) {\n            System.out.println(\"Ball bowled\");\n            System.out.println(\"Ball played\");\n        }\n    }\n}",
      "explanation": [
        "A single loop can execute as many statements as needed inside its curly braces { } block."
      ],
      "xpReward": 30
    },
    {
      "id": 5,
      "stageId": 1,
      "isBoss": true,
      "title": "👑 Stage 1 Boss: Round Counter (Ref: Q205)",
      "scenario": "In an arena championship, track the match rounds starting from index 0 up to 5.",
      "task": "Using a for loop starting at int i = 0 while i < 6, print \"Round : \" followed by the value of i for each round.",
      "sampleOutput": "Round : 0\nRound : 1\nRound : 2\nRound : 3\nRound : 4\nRound : 5",
      "expectedOutput": "Round : 0\nRound : 1\nRound : 2\nRound : 3\nRound : 4\nRound : 5",
      "thinkFirst": [
        "1. Start at 0: int i = 0;",
        "2. Condition: i < 6 (or i <= 5);",
        "3. Inside loop: print \"Round : \" + i;"
      ],
      "syntaxReminder": "for (int i = 0; i < 6; i++) {\n    System.out.println(\"Round : \" + i);\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Print \"Round : 0\" up to \"Round : 5\"\n        \n    }\n}",
      "hints": [
        "Start i at 0: for (int i = 0; i < 6; i++)",
        "Notice the space around colon: \"Round : \" + i",
        "Compare your output character by character with the sample output."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 0; i < 6; i++) {\n            System.out.println(\"Round : \" + i);\n        }\n    }\n}",
      "explanation": [
        "Variable i changes dynamically on every iteration (0, 1, 2, 3, 4, 5)."
      ],
      "xpReward": 45
    },
    {
      "id": 6,
      "stageId": 2,
      "isBoss": false,
      "title": "Classroom Roll Call (1 to 20)",
      "scenario": "A teacher at Ananda College conducts morning roll call for 20 students in Class 10-A.",
      "task": "Using a for loop starting at 1 up to 20, print \"Student \" + i.",
      "sampleOutput": "Student 1\nStudent 2\nStudent 3\nStudent 4\nStudent 5\nStudent 6\nStudent 7\nStudent 8\nStudent 9\nStudent 10\nStudent 11\nStudent 12\nStudent 13\nStudent 14\nStudent 15\nStudent 16\nStudent 17\nStudent 18\nStudent 19\nStudent 20",
      "expectedOutput": "Student 1\nStudent 2\nStudent 3\nStudent 4\nStudent 5\nStudent 6\nStudent 7\nStudent 8\nStudent 9\nStudent 10\nStudent 11\nStudent 12\nStudent 13\nStudent 14\nStudent 15\nStudent 16\nStudent 17\nStudent 18\nStudent 19\nStudent 20",
      "thinkFirst": [
        "1. int i = 1;",
        "2. while i <= 20;",
        "3. i++;",
        "4. System.out.println(\"Student \" + i);"
      ],
      "syntaxReminder": "for (int i = 1; i <= 20; i++) {\n    System.out.println(\"Student \" + i);\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Print \"Student 1\" through \"Student 20\"\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Condition is i <= 20 (counting up from 1 to 20).",
        "Include a space inside: \"Student \" + i"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 1; i <= 20; i++) {\n            System.out.println(\"Student \" + i);\n        }\n    }\n}",
      "explanation": [
        "i takes values 1, 2, ..., 20."
      ],
      "xpReward": 30
    },
    {
      "id": 7,
      "stageId": 2,
      "isBoss": false,
      "title": "Bus Route 138: Stops 6 to 15 (Ref: Q207)",
      "scenario": "The 138 bus from Pettah to Maharagama enters its express zone between Stop 6 and Stop 15. Announce each stop.",
      "task": "Using a for loop starting at int i = 6 while i <= 15, print \"Stop : \" + i.",
      "sampleOutput": "Stop : 6\nStop : 7\nStop : 8\nStop : 9\nStop : 10\nStop : 11\nStop : 12\nStop : 13\nStop : 14\nStop : 15",
      "expectedOutput": "Stop : 6\nStop : 7\nStop : 8\nStop : 9\nStop : 10\nStop : 11\nStop : 12\nStop : 13\nStop : 14\nStop : 15",
      "thinkFirst": [
        "1. Start at 6: int i = 6;",
        "2. End at 15: i <= 15;",
        "3. Step: i++;",
        "4. Print \"Stop : \" + i;"
      ],
      "syntaxReminder": "for (int i = 6; i <= 15; i++) {\n    System.out.println(\"Stop : \" + i);\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Start loop at 6 and run through 15\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Initialization: int i = 6;",
        "Condition: i <= 15;"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 6; i <= 15; i++) {\n            System.out.println(\"Stop : \" + i);\n        }\n    }\n}",
      "explanation": [
        "Loops do not have to start at 0 or 1; you can start at any initial value like 6."
      ],
      "xpReward": 30
    },
    {
      "id": 8,
      "stageId": 2,
      "isBoss": false,
      "title": "Even House Numbers: Step by 2 (Ref: Q208)",
      "scenario": "A postal deliverer delivers mail to even-numbered houses on Galle Road, from house 2 up to house 40.",
      "task": "Using a for loop with step update i += 2, print even numbers from 2 to 40.",
      "sampleOutput": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n22\n24\n26\n28\n30\n32\n34\n36\n38\n40",
      "expectedOutput": "2\n4\n6\n8\n10\n12\n14\n16\n18\n20\n22\n24\n26\n28\n30\n32\n34\n36\n38\n40",
      "thinkFirst": [
        "1. Start at 2: int i = 2;",
        "2. Condition: i <= 40;",
        "3. Step by 2: i += 2;",
        "4. Print i;"
      ],
      "syntaxReminder": "for (int i = 2; i <= 40; i += 2) {\n    System.out.println(i);\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Print 2, 4, 6 ... 40 using i += 2\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Use update expression: i += 2",
        "Start with: int i = 2;"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 2; i <= 40; i += 2) {\n            System.out.println(i);\n        }\n    }\n}",
      "explanation": [
        "i += 2 increments i by 2 each round, skipping all odd numbers."
      ],
      "xpReward": 30
    },
    {
      "id": 9,
      "stageId": 2,
      "isBoss": false,
      "title": "5 Times Table Steps (Step 5)",
      "scenario": "A student practices multiplication multiples of 5, from 5 up to 100.",
      "task": "Using a for loop starting at 5 up to 100 with step i += 5, print each multiple.",
      "sampleOutput": "5\n10\n15\n20\n25\n30\n35\n40\n45\n50\n55\n60\n65\n70\n75\n80\n85\n90\n95\n100",
      "expectedOutput": "5\n10\n15\n20\n25\n30\n35\n40\n45\n50\n55\n60\n65\n70\n75\n80\n85\n90\n95\n100",
      "thinkFirst": [
        "1. int i = 5;",
        "2. i <= 100;",
        "3. i += 5;",
        "4. print i;"
      ],
      "syntaxReminder": "for (int i = 5; i <= 100; i += 5) {\n    System.out.println(i);\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Print multiples of 5 from 5 to 100\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Update expression: i += 5",
        "Condition: i <= 100"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 5; i <= 100; i += 5) {\n            System.out.println(i);\n        }\n    }\n}",
      "explanation": [
        "Increments by 5 on every iteration."
      ],
      "xpReward": 30
    },
    {
      "id": 10,
      "stageId": 2,
      "isBoss": false,
      "title": "Rocket Launch Countdown (10 to 1)",
      "scenario": "A satellite launch station in Hambantota conducts a final 10-second countdown before liftoff.",
      "task": "Using a for loop counting down from 10 to 1 (using i--), print each number, followed by \"Liftoff!\" after the loop.",
      "sampleOutput": "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nLiftoff!",
      "expectedOutput": "10\n9\n8\n7\n6\n5\n4\n3\n2\n1\nLiftoff!",
      "thinkFirst": [
        "1. Start at top: int i = 10;",
        "2. Count down while i >= 1;",
        "3. Decrement: i--;",
        "4. Outside loop: print \"Liftoff!\";"
      ],
      "syntaxReminder": "for (int i = 10; i >= 1; i--) {\n    System.out.println(i);\n}\nSystem.out.println(\"Liftoff!\");",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Countdown 10 down to 1, then print \"Liftoff!\"\n        \n    }\n}",
      "hints": [
        "Condition: i >= 1",
        "Update: i--",
        "Print \"Liftoff!\" after the loop curly brace."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 10; i >= 1; i--) {\n            System.out.println(i);\n        }\n        System.out.println(\"Liftoff!\");\n    }\n}",
      "explanation": [
        "Decrement operator i-- decreases i by 1 each round until i reaches 0."
      ],
      "xpReward": 30
    },
    {
      "id": 11,
      "stageId": 2,
      "isBoss": false,
      "title": "The Ghost Loop (Ref: Q209)",
      "scenario": "In class (Q209), Niroth sir showed a loop where the start value already breaks the condition: for (int i = 10; i < 10; i++). Demonstrate that code before and after runs, but the loop body executes 0 times.",
      "task": "Print \"Start\", write a loop for (int i = 10; i < 10; i++) that prints \"Inside\", and print \"End\" after.",
      "sampleOutput": "Start\nEnd",
      "expectedOutput": "Start\nEnd",
      "thinkFirst": [
        "1. System.out.println(\"Start\");",
        "2. for (int i = 10; i < 10; i++) { System.out.println(\"Inside\"); }",
        "3. System.out.println(\"End\");"
      ],
      "syntaxReminder": "System.out.println(\"Start\");\nfor (int i = 10; i < 10; i++) {\n    System.out.println(\"Inside\");\n}\nSystem.out.println(\"End\");",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Demonstrate loop that executes 0 times\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "The condition 10 < 10 is false immediately on round 1.",
        "\"Inside\" never prints!"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        System.out.println(\"Start\");\n        for (int i = 10; i < 10; i++) {\n            System.out.println(\"Inside\");\n        }\n        System.out.println(\"End\");\n    }\n}",
      "explanation": [
        "Because 10 < 10 is false at the very start, the loop body executes 0 times."
      ],
      "xpReward": 30
    },
    {
      "id": 12,
      "stageId": 2,
      "isBoss": true,
      "type": "concept-lab",
      "title": "🧪 Concept Lab Boss: Output Prediction",
      "scenario": "Test your understanding of loop execution order! Inspect the code snippet below and predict what prints.",
      "task": "What will be printed to the console? Type your exact prediction in the input box.",
      "labCode": "for (int i = 2; i <= 6; i += 2) {\n    System.out.print(i + \" \");\n}",
      "labAnswer": "2 4 6",
      "sampleOutput": "2 4 6",
      "expectedOutput": "2 4 6",
      "thinkFirst": [
        "Round 1: i = 2, print \"2 \"",
        "Round 2: i = 4, print \"4 \"",
        "Round 3: i = 6, print \"6 \"",
        "Round 4: i = 8 -> 8 <= 6 is false. Loop ends!"
      ],
      "syntaxReminder": "Type the exact output separated by single spaces: 2 4 6",
      "starterCode": "2 4 6",
      "hints": [
        "i starts at 2 and steps by 2.",
        "Values printed: 2, 4, 6.",
        "Compare your output character by character with the sample output."
      ],
      "modelSolution": "2 4 6",
      "explanation": [
        "The loop runs for i = 2, 4, 6 and prints them on the same line with spaces."
      ],
      "xpReward": 45
    },
    {
      "id": 13,
      "stageId": 3,
      "isBoss": false,
      "title": "The Missing Update Trap (Ref: Q210)",
      "scenario": "In class Q210, a programmer forgot the update statement in the header: for(int i = 0; i < 5; ). Fix this loop by putting i++ inside the body so it prints 0 to 4 without looping infinitely.",
      "task": "Initialize int i = 0 in the for header without an update. Inside the body, print i and then increment i++. Print 0 to 4.",
      "sampleOutput": "0\n1\n2\n3\n4",
      "expectedOutput": "0\n1\n2\n3\n4",
      "thinkFirst": [
        "1. for (int i = 0; i < 5; ) {",
        "2.     System.out.println(i);",
        "3.     i++; // update placed inside body!",
        "4. }"
      ],
      "syntaxReminder": "for (int i = 0; i < 5; ) {\n    System.out.println(i);\n    i++;\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // FIX THIS CODE:\n        // Add i++ inside the body so the loop does not run forever!\n        for (int i = 0; i < 5; ) {\n            System.out.println(i);\n            \n        }\n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Put i++; on the line after System.out.println(i);",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 0; i < 5; ) {\n            System.out.println(i);\n            i++;\n        }\n    }\n}",
      "explanation": [
        "If the 3rd section of a for loop is omitted, the variable must be updated inside the body."
      ],
      "xpReward": 35
    },
    {
      "id": 14,
      "stageId": 3,
      "isBoss": false,
      "title": "Wrong Direction Trap (Ref: Q212)",
      "scenario": "A student wanted to count up from 0 to 4, but accidentally wrote i-- instead of i++: for(int i=0; i<5; i--). Because i keeps getting smaller (-1, -2, -3...), it is always < 5 and never stops! Fix the update to i++.",
      "task": "Correct the loop so it increments i++ and prints 0, 1, 2, 3, 4.",
      "sampleOutput": "0\n1\n2\n3\n4",
      "expectedOutput": "0\n1\n2\n3\n4",
      "thinkFirst": [
        "1. Change i-- to i++ in the header."
      ],
      "syntaxReminder": "for (int i = 0; i < 5; i++) {\n    System.out.println(i);\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // FIX THE WRONG DIRECTION:\n        for (int i = 0; i < 5; i--) {\n            System.out.println(i);\n        }\n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Change i-- to i++ in for (int i = 0; i < 5; i++)",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 0; i < 5; i++) {\n            System.out.println(i);\n        }\n    }\n}",
      "explanation": [
        "Counting upwards requires i++; decrementing causes an infinite loop when condition is i < 5."
      ],
      "xpReward": 35
    },
    {
      "id": 15,
      "stageId": 3,
      "isBoss": false,
      "title": "Empty Condition & Break (Ref: Q211)",
      "scenario": "In Java, an omitted condition defaults to true: for(int i=0; ; i++). To avoid an infinite loop, use an if condition and break to exit when i reaches 5.",
      "task": "Using for (int i = 0; ; i++), print i. Inside the loop, if i == 4, break out. Prints 0, 1, 2, 3, 4.",
      "sampleOutput": "0\n1\n2\n3\n4",
      "expectedOutput": "0\n1\n2\n3\n4",
      "thinkFirst": [
        "1. for (int i = 0; ; i++) {",
        "2.     System.out.println(i);",
        "3.     if (i == 4) break;",
        "4. }"
      ],
      "syntaxReminder": "for (int i = 0; ; i++) {\n    System.out.println(i);\n    if (i == 4) break;\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Loop with empty condition and break after printing 4\n        \n    }\n}",
      "hints": [
        "Use: for (int i = 0; ; i++)",
        "Inside: System.out.println(i);",
        "Check: if (i == 4) break;"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 0; ; i++) {\n            System.out.println(i);\n            if (i == 4) break;\n        }\n    }\n}",
      "explanation": [
        "break immediately exits the loop even when no condition was written in the header."
      ],
      "xpReward": 35
    },
    {
      "id": 16,
      "stageId": 3,
      "isBoss": false,
      "title": "Two Variables in Loop Header (Ref: Q220-Q221)",
      "scenario": "In class Q221, Niroth sir demonstrated controlling two variables in one header: for(int i=0, j=10; i<j; i++, j--). Two runners start at opposite ends of a 10m track and meet in the middle.",
      "task": "Using for (int i = 0, j = 10; i < j; i++, j--), print i + \" \" + j on each round.",
      "sampleOutput": "0 10\n1 9\n2 8\n3 7\n4 6",
      "expectedOutput": "0 10\n1 9\n2 8\n3 7\n4 6",
      "thinkFirst": [
        "1. Header: for (int i = 0, j = 10; i < j; i++, j--)",
        "2. Inside: System.out.println(i + \" \" + j);"
      ],
      "syntaxReminder": "for (int i = 0, j = 10; i < j; i++, j--) {\n    System.out.println(i + \" \" + j);\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Two variables moving towards each other\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Declare both variables with comma: int i = 0, j = 10;",
        "Update both variables with comma: i++, j--"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 0, j = 10; i < j; i++, j--) {\n            System.out.println(i + \" \" + j);\n        }\n    }\n}",
      "explanation": [
        "Java allows multiple initializations and multiple updates separated by commas in a for header."
      ],
      "xpReward": 35
    },
    {
      "id": 17,
      "stageId": 3,
      "isBoss": false,
      "type": "concept-lab",
      "title": "🧪 Concept Lab: Variable Scope (Ref: Q214 vs Q215)",
      "scenario": "In Q214, trying to print i outside the loop gave a compilation error: \"cannot find symbol variable i\". Why? Because i was declared inside the loop header and died when the loop ended! Declare i before the loop to fix it.",
      "task": "Declare int i = 0 BEFORE the loop: int i = 0; for (; i < 3; i++) { System.out.println(i); } and print \"Final: \" + i outside.",
      "sampleOutput": "0\n1\n2\nFinal: 3",
      "expectedOutput": "0\n1\n2\nFinal: 3",
      "thinkFirst": [
        "1. int i = 0; // declared outside!",
        "2. for (; i < 3; i++) { System.out.println(i); }",
        "3. System.out.println(\"Final: \" + i);"
      ],
      "syntaxReminder": "int i = 0;\nfor (; i < 3; i++) {\n    System.out.println(i);\n}\nSystem.out.println(\"Final: \" + i);",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // FIX SCOPE:\n        // Declare i before the loop so it survives after the loop\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Put int i = 0; before the for loop.",
        "Notice the empty first section in for (; i < 3; i++)"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int i = 0;\n        for (; i < 3; i++) {\n            System.out.println(i);\n        }\n        System.out.println(\"Final: \" + i);\n    }\n}",
      "explanation": [
        "Declaring i before the loop allows its value (3) to be accessed after the loop finishes."
      ],
      "xpReward": 40
    },
    {
      "id": 18,
      "stageId": 3,
      "isBoss": true,
      "type": "concept-lab",
      "title": "🧪 Concept Lab Boss: Byte Overflow Trap (Ref: Q213)",
      "scenario": "In class Q213: for (byte i = 0; i < 10; i--). A byte in Java only holds -128 to 127. When i decreases past -128, what does it wrap around to? Type the positive number it wraps to.",
      "task": "When byte underflows past -128, what maximum positive number does it wrap around to? (Type the integer number)",
      "labCode": "byte b = -128;\nb--; // What is b now?",
      "labAnswer": "127",
      "sampleOutput": "127",
      "expectedOutput": "127",
      "thinkFirst": [
        "In 2s-complement 8-bit binary, -128 - 1 = +127."
      ],
      "syntaxReminder": "Type the number: 127",
      "starterCode": "127",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "A Java byte range is -128 to 127.",
        "Answer is 127."
      ],
      "modelSolution": "127",
      "explanation": [
        "Because byte wraps from -128 back to +127, for(byte i=0; i<10; i--) never ends!"
      ],
      "xpReward": 45
    },
    {
      "id": 19,
      "stageId": 4,
      "isBoss": false,
      "title": "Print on One Line (Ref: Q225-Q226)",
      "scenario": "In Q226, Niroth sir showed the difference between println (new line) and print (same line). Print numbers 0 to 9 on a single line separated by spaces.",
      "task": "Using System.out.print(i + \" \"), print numbers 0 through 9 on one single line.",
      "sampleOutput": "0 1 2 3 4 5 6 7 8 9",
      "expectedOutput": "0 1 2 3 4 5 6 7 8 9",
      "thinkFirst": [
        "1. for (int i = 0; i < 10; i++)",
        "2. Use System.out.print (NOT println): System.out.print(i + (i < 9 ? \" \" : \"\"));"
      ],
      "syntaxReminder": "for (int i = 0; i < 10; i++) {\n    System.out.print(i + (i < 9 ? \" \" : \"\"));\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Print 0 to 9 on one line separated by spaces\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Use System.out.print instead of System.out.println",
        "Add a space after each number"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 0; i < 10; i++) {\n            System.out.print(i + (i < 9 ? \" \" : \"\"));\n        }\n    }\n}",
      "explanation": [
        "System.out.print leaves the cursor on the same line."
      ],
      "xpReward": 35
    },
    {
      "id": 20,
      "stageId": 4,
      "isBoss": false,
      "title": "List Formatting with \\b\\b (Ref: Q229-Q230)",
      "scenario": "Format numbers 1 to 10 inside square brackets without a trailing comma: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Use the backspace technique taught in class Q230.",
      "task": "Print \"[\", loop from 1 to 10 printing (i + \", \"), then print \"\\b\\b]\" to erase the last comma.",
      "sampleOutput": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      "expectedOutput": "[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]",
      "thinkFirst": [
        "1. System.out.print(\"[\");",
        "2. for (int i = 1; i <= 10; i++) { System.out.print(i + \", \"); }",
        "3. System.out.print(\"\\b\\b]\");"
      ],
      "syntaxReminder": "System.out.print(\"[\");\nfor (int i = 1; i <= 10; i++) {\n    System.out.print(i + \", \");\n}\nSystem.out.print(\"\\b\\b]\");",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Print [1, 2, 3, ... 10] using \\b\\b]\n        \n    }\n}",
      "hints": [
        "Start with: System.out.print(\"[\");",
        "Loop: for (int i = 1; i <= 10; i++) System.out.print(i + \", \");",
        "Finish with: System.out.print(\"\\b\\b]\");"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        System.out.print(\"[\");\n        for (int i = 1; i <= 10; i++) {\n            System.out.print(i + \", \");\n        }\n        System.out.print(\"\\b\\b]\");\n    }\n}",
      "explanation": [
        "\\b\\b deletes the extra comma and space before closing with ]."
      ],
      "xpReward": 35
    },
    {
      "id": 21,
      "stageId": 4,
      "isBoss": false,
      "title": "Reverse List Formatting (Ref: Q231-Q232)",
      "scenario": "Print numbers 10 down to 1 inside brackets: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1].",
      "task": "Using System.out.print and the \\b\\b technique, print reverse list [10, 9, ... 1].",
      "sampleOutput": "[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
      "expectedOutput": "[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]",
      "thinkFirst": [
        "1. System.out.print(\"[\");",
        "2. for (int i = 10; i >= 1; i--) System.out.print(i + \", \");",
        "3. System.out.print(\"\\b\\b]\");"
      ],
      "syntaxReminder": "System.out.print(\"[\");\nfor (int i = 10; i >= 1; i--) {\n    System.out.print(i + \", \");\n}\nSystem.out.print(\"\\b\\b]\");",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Reverse list [10, 9, ... 1]\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Loop counts down: for (int i = 10; i >= 1; i--)",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        System.out.print(\"[\");\n        for (int i = 10; i >= 1; i--) {\n            System.out.print(i + \", \");\n        }\n        System.out.print(\"\\b\\b]\");\n    }\n}",
      "explanation": [
        "Countdown from 10 down to 1."
      ],
      "xpReward": 35
    },
    {
      "id": 22,
      "stageId": 4,
      "isBoss": false,
      "title": "User Enters N: Print List (Ref: Q233-Q234)",
      "scenario": "A user inputs an integer N via Scanner (e.g. 7). Print list [1, 2, 3, 4, 5, 6, 7].",
      "task": "Read int num = input.nextInt(). Print [1, 2, ... num] using a for loop and \\b\\b].",
      "sampleInput": "7",
      "sampleOutput": "[1, 2, 3, 4, 5, 6, 7]",
      "expectedOutput": "[1, 2, 3, 4, 5, 6, 7]",
      "testCases": [
        {
          "input": "7",
          "expectedOutput": "[1, 2, 3, 4, 5, 6, 7]"
        },
        {
          "input": "4",
          "expectedOutput": "[1, 2, 3, 4]"
        }
      ],
      "thinkFirst": [
        "1. Scanner input = new Scanner(System.in);",
        "2. int num = input.nextInt();",
        "3. System.out.print(\"[\");",
        "4. for (int i = 1; i <= num; i++) System.out.print(i + \", \");",
        "5. System.out.print(\"\\b\\b]\");"
      ],
      "syntaxReminder": "Scanner input = new Scanner(System.in);\nint num = input.nextInt();\nSystem.out.print(\"[\");\nfor (int i = 1; i <= num; i++) {\n    System.out.print(i + \", \");\n}\nSystem.out.print(\"\\b\\b]\");",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        // Read num and print [1, 2, ... num]\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Read number: int num = input.nextInt();",
        "Loop condition: i <= num;"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int num = input.nextInt();\n        System.out.print(\"[\");\n        for (int i = 1; i <= num; i++) {\n            System.out.print(i + \", \");\n        }\n        System.out.print(\"\\b\\b]\");\n    }\n}",
      "explanation": [
        "Dynamically loops up to the user-entered limit num."
      ],
      "xpReward": 35
    },
    {
      "id": 23,
      "stageId": 4,
      "isBoss": false,
      "title": "Reverse Countdown with Empty Check (Ref: Q235-Q236)",
      "scenario": "The user enters N. If N > 0, print [N, N-1, ... 1]. If N <= 0, print [empty].",
      "task": "Read int num. If num <= 0 print \"[empty]\". Else print [num, num-1, ... 1].",
      "sampleInput": "5",
      "sampleOutput": "[5, 4, 3, 2, 1]",
      "expectedOutput": "[5, 4, 3, 2, 1]",
      "testCases": [
        {
          "input": "5",
          "expectedOutput": "[5, 4, 3, 2, 1]"
        },
        {
          "input": "0",
          "expectedOutput": "[empty]"
        }
      ],
      "thinkFirst": [
        "1. if (num <= 0) System.out.println(\"[empty]\");",
        "2. else loop from num down to 1."
      ],
      "syntaxReminder": "if (num <= 0) {\n    System.out.println(\"[empty]\");\n} else {\n    System.out.print(\"[\");\n    for (int i = num; i >= 1; i--) System.out.print(i + \", \");\n    System.out.print(\"\\b\\b]\");\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Handle N <= 0 with if (num <= 0)",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int num = input.nextInt();\n        if (num <= 0) {\n            System.out.println(\"[empty]\");\n        } else {\n            System.out.print(\"[\");\n            for (int i = num; i >= 1; i--) {\n                System.out.print(i + \", \");\n            }\n            System.out.print(\"\\b\\b]\");\n        }\n    }\n}",
      "explanation": [
        "Handles boundary conditions gracefully when N is non-positive."
      ],
      "xpReward": 35
    },
    {
      "id": 24,
      "stageId": 4,
      "isBoss": true,
      "title": "👑 Stage 4 Boss: Bounds Swapper (Ref: Q237-Q238)",
      "scenario": "In class Q238, the user enters lower bound and upper bound. If lower > upper (e.g. 5 and 2), swap them so lower becomes 2 and upper becomes 5, then print [2, 3, 4, 5].",
      "task": "Read lower and upper bound. If lower > upper, swap them using a temp variable. Print [lower, ... upper].",
      "sampleInput": "5 2",
      "sampleOutput": "[2, 3, 4, 5]",
      "expectedOutput": "[2, 3, 4, 5]",
      "testCases": [
        {
          "input": "5 2",
          "expectedOutput": "[2, 3, 4, 5]"
        },
        {
          "input": "2 6",
          "expectedOutput": "[2, 3, 4, 5, 6]"
        }
      ],
      "thinkFirst": [
        "1. int lower = input.nextInt(); int upper = input.nextInt();",
        "2. if (lower > upper) { int temp = lower; lower = upper; upper = temp; }",
        "3. Loop from lower to upper."
      ],
      "syntaxReminder": "if (lower > upper) {\n    int temp = lower;\n    lower = upper;\n    upper = temp;\n}\nSystem.out.print(\"[\");\nfor (int i = lower; i <= upper; i++) System.out.print(i + \", \");\nSystem.out.print(\"\\b\\b]\");",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        // Read lower & upper, swap if lower > upper, print list\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Use swap logic: int temp = lower; lower = upper; upper = temp;",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int lower = input.nextInt();\n        int upper = input.nextInt();\n        if (lower > upper) {\n            int temp = lower;\n            lower = upper;\n            upper = temp;\n        }\n        System.out.print(\"[\");\n        for (int i = lower; i <= upper; i++) {\n            System.out.print(i + \", \");\n        }\n        System.out.print(\"\\b\\b]\");\n    }\n}",
      "explanation": [
        "Classic variable swapping algorithm combined with for loop list traversal."
      ],
      "xpReward": 45
    },
    {
      "id": 25,
      "stageId": 5,
      "isBoss": false,
      "title": "Sri Lankan Piggy Bank (Till)",
      "scenario": "You save money in your Till for 10 days: Rs. 10 on Day 1, Rs. 20 on Day 2, ..., Rs. 100 on Day 10. Print the total savings.",
      "task": "Using a loop from day 1 to 10 with savings (day * 10), accumulate the total into int total = 0 and print \"Total savings: Rs. \" + total.",
      "sampleOutput": "Total savings: Rs. 550",
      "expectedOutput": "Total savings: Rs. 550",
      "thinkFirst": [
        "1. int total = 0; // accumulator",
        "2. for (int day = 1; day <= 10; day++) { total += day * 10; }",
        "3. print \"Total savings: Rs. \" + total;"
      ],
      "syntaxReminder": "int total = 0;\nfor (int day = 1; day <= 10; day++) {\n    total += day * 10;\n}\nSystem.out.println(\"Total savings: Rs. \" + total);",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Accumulate 10 days savings and print total\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Each day adds: day * 10",
        "Initialize total outside the loop before it starts!"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int total = 0;\n        for (int day = 1; day <= 10; day++) {\n            total += day * 10;\n        }\n        System.out.println(\"Total savings: Rs. \" + total);\n    }\n}",
      "explanation": [
        "Accumulator pattern: total keeps adding each day’s savings."
      ],
      "xpReward": 35
    },
    {
      "id": 26,
      "stageId": 5,
      "isBoss": false,
      "title": "Sum Equation: 1 + 2 + ... + N = Total (Ref: Q239-Q242)",
      "scenario": "In class Q240 & Q242, Niroth sir showed how to print the full addition equation: \"1 + 2 + 3 + 4 + 5 = 15\".",
      "task": "Read N (e.g. 5). Loop from 1 to N, print \"i + \", accumulate the sum, and at the end print \"\\b\\b = \" + sum.",
      "sampleInput": "5",
      "sampleOutput": "1 + 2 + 3 + 4 + 5 = 15",
      "expectedOutput": "1 + 2 + 3 + 4 + 5 = 15",
      "testCases": [
        {
          "input": "5",
          "expectedOutput": "1 + 2 + 3 + 4 + 5 = 15"
        },
        {
          "input": "4",
          "expectedOutput": "1 + 2 + 3 + 4 = 10"
        }
      ],
      "thinkFirst": [
        "1. int sum = 0;",
        "2. for (int i = 1; i <= num; i++) { System.out.print(i + \" + \"); sum += i; }",
        "3. System.out.print(\"\\b\\b = \" + sum);"
      ],
      "syntaxReminder": "int sum = 0;\nfor (int i = 1; i <= num; i++) {\n    System.out.print(i + \" + \");\n    sum += i;\n}\nSystem.out.print(\"\\b\\b = \" + sum);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Print i + \" + \" inside loop and add to sum: sum += i;",
        "End with \\b\\b = + sum"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int num = input.nextInt();\n        int sum = 0;\n        for (int i = 1; i <= num; i++) {\n            System.out.print(i + \" + \");\n            sum += i;\n        }\n        System.out.print(\"\\b\\b= \" + sum);\n    }\n}",
      "explanation": [
        "Produces a formatted arithmetic equation with final computed sum."
      ],
      "xpReward": 35
    },
    {
      "id": 27,
      "stageId": 5,
      "isBoss": false,
      "title": "Divisible by 7 Counter",
      "scenario": "How many integers between 1 and 100 are divisible by 7? Count them with a loop and print the total count.",
      "task": "Using for (int i = 1; i <= 100; i++), check if (i % 7 == 0). If true, increment count++. Print \"Count: \" + count.",
      "sampleOutput": "Count: 14",
      "expectedOutput": "Count: 14",
      "thinkFirst": [
        "1. int count = 0;",
        "2. for (int i = 1; i <= 100; i++) { if (i % 7 == 0) count++; }",
        "3. print \"Count: \" + count;"
      ],
      "syntaxReminder": "int count = 0;\nfor (int i = 1; i <= 100; i++) {\n    if (i % 7 == 0) count++;\n}\nSystem.out.println(\"Count: \" + count);",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        // Count numbers 1 to 100 divisible by 7\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Modulo operator: i % 7 == 0",
        "Increment count: count++"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int count = 0;\n        for (int i = 1; i <= 100; i++) {\n            if (i % 7 == 0) count++;\n        }\n        System.out.println(\"Count: \" + count);\n    }\n}",
      "explanation": [
        "Counts all 14 multiples of 7 between 1 and 100."
      ],
      "xpReward": 35
    },
    {
      "id": 28,
      "stageId": 5,
      "isBoss": false,
      "title": "Factorial Equation (Ref: Q243-Q244)",
      "scenario": "In class Q244, calculate N! and print the multiplication breakdown: \"5 * 4 * 3 * 2 * 1 = 120\". If N == 0, print \"0! : 1\".",
      "task": "Read N. If N == 0 print \"0! : 1\". Else loop from N down to 1, print \"i * \", multiply fact *= i, and print \"\\b\\b = \" + fact.",
      "sampleInput": "5",
      "sampleOutput": "5 * 4 * 3 * 2 * 1 = 120",
      "expectedOutput": "5 * 4 * 3 * 2 * 1 = 120",
      "testCases": [
        {
          "input": "5",
          "expectedOutput": "5 * 4 * 3 * 2 * 1 = 120"
        },
        {
          "input": "0",
          "expectedOutput": "0! : 1"
        }
      ],
      "thinkFirst": [
        "1. int fact = 1;",
        "2. if (num == 0) print \"0! : 1\"",
        "3. else loop from num down to 1: print i + \" * \", fact *= i",
        "4. print \"\\b\\b = \" + fact;"
      ],
      "syntaxReminder": "int fact = 1;\nif (num == 0) {\n    System.out.print(\"0! : 1\");\n} else {\n    for (int i = num; i > 0; i--) {\n        System.out.print(i + \" * \");\n        fact *= i;\n    }\n    System.out.print(\"\\b\\b = \" + fact);\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Remember product accumulator starts at 1 (fact = 1), not 0!",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int num = input.nextInt();\n        int fact = 1;\n        if (num == 0) {\n            System.out.print(\"0! : 1\");\n        } else {\n            for (int i = num; i > 0; i--) {\n                System.out.print(i + \" * \");\n                fact *= i;\n            }\n            System.out.print(\"\\b\\b= \" + fact);\n        }\n    }\n}",
      "explanation": [
        "Multiplication accumulator pattern computing factorial."
      ],
      "xpReward": 35
    },
    {
      "id": 29,
      "stageId": 5,
      "isBoss": false,
      "title": "Power of 2 Without Math.pow",
      "scenario": "Calculate 2 to the power N (e.g. N = 4 -> 2^4 = 16) by multiplying 2 in a loop without using Math.pow.",
      "task": "Read int n = input.nextInt(). Calculate 2^n using a loop and print \"Result: \" + result.",
      "sampleInput": "4",
      "sampleOutput": "Result: 16",
      "expectedOutput": "Result: 16",
      "testCases": [
        {
          "input": "4",
          "expectedOutput": "Result: 16"
        },
        {
          "input": "6",
          "expectedOutput": "Result: 64"
        }
      ],
      "thinkFirst": [
        "1. int result = 1;",
        "2. for (int i = 1; i <= n; i++) result *= 2;",
        "3. print \"Result: \" + result;"
      ],
      "syntaxReminder": "int result = 1;\nfor (int i = 1; i <= n; i++) {\n    result *= 2;\n}\nSystem.out.println(\"Result: \" + result);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        // Compute 2^n without Math.pow\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Multiply result by 2 each round: result *= 2;",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int result = 1;\n        for (int i = 1; i <= n; i++) {\n            result *= 2;\n        }\n        System.out.println(\"Result: \" + result);\n    }\n}",
      "explanation": [
        "Repeated multiplication is the foundation of integer exponentiation."
      ],
      "xpReward": 35
    },
    {
      "id": 30,
      "stageId": 5,
      "isBoss": true,
      "title": "👑 Stage 5 Boss: Average of 1 to N",
      "scenario": "Read integer N. Calculate the sum of 1 to N, and compute the floating-point average (double)avg = (double)sum / N.",
      "task": "Read N (e.g. 10). Compute sum and average. Print \"Sum: \" + sum and \"Average: \" + (sum / (double)n).",
      "sampleInput": "10",
      "sampleOutput": "Sum: 55\nAverage: 5.5",
      "expectedOutput": "Sum: 55\nAverage: 5.5",
      "testCases": [
        {
          "input": "10",
          "expectedOutput": "Sum: 55\nAverage: 5.5"
        },
        {
          "input": "4",
          "expectedOutput": "Sum: 10\nAverage: 2.5"
        }
      ],
      "thinkFirst": [
        "1. int sum = 0;",
        "2. for (int i = 1; i <= n; i++) sum += i;",
        "3. double avg = (double)sum / n;",
        "4. print Sum and Average."
      ],
      "syntaxReminder": "int sum = 0;\nfor (int i = 1; i <= n; i++) sum += i;\ndouble avg = (double)sum / n;\nSystem.out.println(\"Sum: \" + sum);\nSystem.out.println(\"Average: \" + avg);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Cast to double: (double)sum / n to avoid integer truncation (e.g. 5.5 instead of 5.0)!",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int sum = 0;\n        for (int i = 1; i <= n; i++) {\n            sum += i;\n        }\n        double avg = (double)sum / n;\n        System.out.println(\"Sum: \" + sum);\n        System.out.println(\"Average: \" + avg);\n    }\n}",
      "explanation": [
        "Combining integer accumulation with double type casting for precision."
      ],
      "xpReward": 45
    },
    {
      "id": 31,
      "stageId": 6,
      "isBoss": false,
      "title": "Read 10 Integers Sum (Ref: Q245-Q246)",
      "scenario": "In class Q246, read 10 integers from Scanner inside a for-loop and accumulate their total.",
      "task": "Using for (int i = 0; i < 10; i++), read int num = input.nextInt(), add to total, and print \"Total : \" + total.",
      "sampleInput": "10 20 30 40 50 60 70 80 90 100",
      "sampleOutput": "Total : 550",
      "expectedOutput": "Total : 550",
      "testCases": [
        {
          "input": "10 20 30 40 50 60 70 80 90 100",
          "expectedOutput": "Total : 550"
        }
      ],
      "thinkFirst": [
        "1. int total = 0;",
        "2. for (int i = 0; i < 10; i++) { int num = input.nextInt(); total += num; }",
        "3. print \"Total : \" + total;"
      ],
      "syntaxReminder": "int total = 0;\nfor (int i = 0; i < 10; i++) {\n    int num = input.nextInt();\n    total += num;\n}\nSystem.out.println(\"Total : \" + total);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        // Read 10 numbers in loop and print total\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Put input.nextInt() INSIDE the loop so it reads 10 times!",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int total = 0;\n        for (int i = 0; i < 10; i++) {\n            int num = input.nextInt();\n            total += num;\n        }\n        System.out.println(\"Total : \" + total);\n    }\n}",
      "explanation": [
        "Calls input.nextInt() 10 times in sequence to process each value."
      ],
      "xpReward": 35
    },
    {
      "id": 32,
      "stageId": 6,
      "isBoss": false,
      "title": "Prompt Counter Inside Loop (Ref: Q247)",
      "scenario": "In class Q247, before reading each number, show a prompt displaying the round number: \"Input number 1 : \", \"Input number 2 : \"... then print \"Total : \" + total.",
      "task": "For 5 iterations, print \"Input number \" + (i+1) + \" : \", read input.nextInt(), add to total, then print \"Total : \" + total.",
      "sampleInput": "10 20 30 40 50",
      "sampleOutput": "Input number 1 : Input number 2 : Input number 3 : Input number 4 : Input number 5 : Total : 150",
      "expectedOutput": "Input number 1 : Input number 2 : Input number 3 : Input number 4 : Input number 5 : Total : 150",
      "testCases": [
        {
          "input": "10 20 30 40 50",
          "expectedOutput": "Input number 1 : Input number 2 : Input number 3 : Input number 4 : Input number 5 : Total : 150"
        }
      ],
      "thinkFirst": [
        "1. int total = 0;",
        "2. for (int i = 0; i < 5; i++) {",
        "       System.out.print(\"Input number \" + (i+1) + \" : \");",
        "       int num = input.nextInt();",
        "       total += num;",
        "   }",
        "3. print \"Total : \" + total;"
      ],
      "syntaxReminder": "int total = 0;\nfor (int i = 0; i < 5; i++) {\n    System.out.print(\"Input number \" + (i + 1) + \" : \");\n    int num = input.nextInt();\n    total += num;\n}\nSystem.out.println(\"Total : \" + total);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Use (i + 1) in parentheses so it adds 1 before string concatenation!",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int total = 0;\n        for (int i = 0; i < 5; i++) {\n            System.out.print(\"Input number \" + (i + 1) + \" : \");\n            int num = input.nextInt();\n            total += num;\n        }\n        System.out.println(\"Total : \" + total);\n    }\n}",
      "explanation": [
        "Dynamic prompt formatting inside input loops."
      ],
      "xpReward": 35
    },
    {
      "id": 33,
      "stageId": 6,
      "isBoss": false,
      "title": "Exam Marks: Max, Min and Total (Ref: Q248-Q250)",
      "scenario": "In class Q249, Niroth sir showed how to find Maximum, Minimum, and Total across 5 student marks by initializing max and min from the first mark.",
      "task": "Read first mark to initialize total, max, and min. Loop for remaining 4 marks, updating max, min, and total. Print Maximum, Minimum, and Total.",
      "sampleInput": "75 88 52 94 63",
      "sampleOutput": "Maximum : 94\nMinimum : 52\nTotal : 372",
      "expectedOutput": "Maximum : 94\nMinimum : 52\nTotal : 372",
      "testCases": [
        {
          "input": "75 88 52 94 63",
          "expectedOutput": "Maximum : 94\nMinimum : 52\nTotal : 372"
        }
      ],
      "thinkFirst": [
        "1. int first = input.nextInt();",
        "2. int total = first, max = first, min = first;",
        "3. for (int i = 1; i < 5; i++) { int n = input.nextInt(); total += n; if (n > max) max = n; if (n < min) min = n; }",
        "4. print Maximum, Minimum, Total."
      ],
      "syntaxReminder": "int num = input.nextInt();\nint total = num, max = num, min = num;\nfor (int i = 1; i < 5; i++) {\n    num = input.nextInt();\n    total += num;\n    if (num > max) max = num;\n    if (num < min) min = num;\n}\nSystem.out.println(\"Maximum : \" + max);\nSystem.out.println(\"Minimum : \" + min);\nSystem.out.println(\"Total : \" + total);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Initialize max and min with the first input value!",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int num = input.nextInt();\n        int total = num, max = num, min = num;\n        for (int i = 1; i < 5; i++) {\n            num = input.nextInt();\n            total += num;\n            if (num > max) max = num;\n            if (num < min) min = num;\n        }\n        System.out.println(\"Maximum : \" + max);\n        System.out.println(\"Minimum : \" + min);\n        System.out.println(\"Total : \" + total);\n    }\n}",
      "explanation": [
        "The gold standard algorithm for finding extrema from streaming input."
      ],
      "xpReward": 40
    },
    {
      "id": 34,
      "stageId": 6,
      "isBoss": false,
      "title": "Kargills Supermarket Bill & Most Expensive Item",
      "scenario": "You buy 5 items at a supermarket in Kandy. Read each item price, accumulate the bill total, and find the most expensive item.",
      "task": "Read 5 prices. Print \"Bill Total: Rs. \" + total and \"Most Expensive: Rs. \" + max.",
      "sampleInput": "120 450 80 950 300",
      "sampleOutput": "Bill Total: Rs. 1900\nMost Expensive: Rs. 950",
      "expectedOutput": "Bill Total: Rs. 1900\nMost Expensive: Rs. 950",
      "testCases": [
        {
          "input": "120 450 80 950 300",
          "expectedOutput": "Bill Total: Rs. 1900\nMost Expensive: Rs. 950"
        }
      ],
      "thinkFirst": [
        "1. int total = 0, max = 0;",
        "2. Loop 5 times: read price, total += price, if (price > max) max = price;",
        "3. Print Bill Total and Most Expensive."
      ],
      "syntaxReminder": "int total = 0, max = 0;\nfor (int i = 0; i < 5; i++) {\n    int price = input.nextInt();\n    total += price;\n    if (price > max) max = price;\n}\nSystem.out.println(\"Bill Total: Rs. \" + total);\nSystem.out.println(\"Most Expensive: Rs. \" + max);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Keep track of both total and highest price.",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int total = 0, max = 0;\n        for (int i = 0; i < 5; i++) {\n            int price = input.nextInt();\n            total += price;\n            if (price > max) max = price;\n        }\n        System.out.println(\"Bill Total: Rs. \" + total);\n        System.out.println(\"Most Expensive: Rs. \" + max);\n    }\n}",
      "explanation": [
        "Tracking running totals alongside extrema."
      ],
      "xpReward": 35
    },
    {
      "id": 35,
      "stageId": 6,
      "isBoss": true,
      "title": "👑 Stage 6 Boss: Cricket Batting Scores (Fifties Count)",
      "scenario": "In an 8-match tournament, a Sri Lankan batsman scores 8 innings. Count how many times the batsman scored 50 or more (fifties).",
      "task": "Read 8 scores. If score >= 50, increment fifties++. Print \"Fifties Scored: \" + fifties.",
      "sampleInput": "45 82 12 56 61 30 102 49",
      "sampleOutput": "Fifties Scored: 4",
      "expectedOutput": "Fifties Scored: 4",
      "testCases": [
        {
          "input": "45 82 12 56 61 30 102 49",
          "expectedOutput": "Fifties Scored: 4"
        }
      ],
      "thinkFirst": [
        "1. int fifties = 0;",
        "2. for (int i = 0; i < 8; i++) { int s = input.nextInt(); if (s >= 50) fifties++; }",
        "3. print \"Fifties Scored: \" + fifties;"
      ],
      "syntaxReminder": "int fifties = 0;\nfor (int i = 0; i < 8; i++) {\n    int score = input.nextInt();\n    if (score >= 50) fifties++;\n}\nSystem.out.println(\"Fifties Scored: \" + fifties);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Filter condition: score >= 50",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int fifties = 0;\n        for (int i = 0; i < 8; i++) {\n            int score = input.nextInt();\n            if (score >= 50) fifties++;\n        }\n        System.out.println(\"Fifties Scored: \" + fifties);\n    }\n}",
      "explanation": [
        "Filter counter combining conditional testing with iterative input."
      ],
      "xpReward": 45
    },
    {
      "id": 36,
      "stageId": 7,
      "isBoss": false,
      "title": "Cricket Over: SIX on Ball 6!",
      "scenario": "In an exciting T20 over at R. Premadasa Stadium, print balls 1 to 6. On ball 6, the crowd roars \"SIX!\".",
      "task": "Loop i from 1 to 6. Print \"Ball \" + i. If i == 6, print \"SIX!\".",
      "sampleOutput": "Ball 1\nBall 2\nBall 3\nBall 4\nBall 5\nBall 6\nSIX!",
      "expectedOutput": "Ball 1\nBall 2\nBall 3\nBall 4\nBall 5\nBall 6\nSIX!",
      "thinkFirst": [
        "1. for (int i = 1; i <= 6; i++) {",
        "       System.out.println(\"Ball \" + i);",
        "       if (i == 6) System.out.println(\"SIX!\");",
        "   }"
      ],
      "syntaxReminder": "for (int i = 1; i <= 6; i++) {\n    System.out.println(\"Ball \" + i);\n    if (i == 6) System.out.println(\"SIX!\");\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Use if (i == 6) inside the loop.",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 1; i <= 6; i++) {\n            System.out.println(\"Ball \" + i);\n            if (i == 6) System.out.println(\"SIX!\");\n        }\n    }\n}",
      "explanation": [
        "Branching logic inside a loop executing special actions on specific iterations."
      ],
      "xpReward": 35
    },
    {
      "id": 37,
      "stageId": 7,
      "isBoss": false,
      "title": "School Game: FizzBuzz (1 to 15)",
      "scenario": "A popular counting classroom game. For numbers 1 to 15: if divisible by both 3 and 5, print \"FizzBuzz\". If divisible by 3, print \"Fizz\". If divisible by 5, print \"Buzz\". Else print the number.",
      "task": "Implement FizzBuzz for 1 to 15.",
      "sampleOutput": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
      "expectedOutput": "1\n2\nFizz\n4\nBuzz\nFizz\n7\n8\nFizz\nBuzz\n11\nFizz\n13\n14\nFizzBuzz",
      "thinkFirst": [
        "1. for (int i = 1; i <= 15; i++)",
        "2. Check (i % 15 == 0) first -> FizzBuzz",
        "3. else if (i % 3 == 0) -> Fizz",
        "4. else if (i % 5 == 0) -> Buzz",
        "5. else -> i"
      ],
      "syntaxReminder": "for (int i = 1; i <= 15; i++) {\n    if (i % 15 == 0) System.out.println(\"FizzBuzz\");\n    else if (i % 3 == 0) System.out.println(\"Fizz\");\n    else if (i % 5 == 0) System.out.println(\"Buzz\");\n    else System.out.println(i);\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Always check the combined condition (i % 15 == 0) first!",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        for (int i = 1; i <= 15; i++) {\n            if (i % 15 == 0) System.out.println(\"FizzBuzz\");\n            else if (i % 3 == 0) System.out.println(\"Fizz\");\n            else if (i % 5 == 0) System.out.println(\"Buzz\");\n            else System.out.println(i);\n        }\n    }\n}",
      "explanation": [
        "The most famous programming interview challenge testing conditional precedence."
      ],
      "xpReward": 35
    },
    {
      "id": 38,
      "stageId": 7,
      "isBoss": false,
      "title": "Odd Numbers Between Bounds",
      "scenario": "Read lower and upper bound (e.g. 10 and 20). Print all ODD numbers between them on separate lines.",
      "task": "Read lower and upper. Loop from lower to upper; if (i % 2 != 0) print i.",
      "sampleInput": "10 20",
      "sampleOutput": "11\n13\n15\n17\n19",
      "expectedOutput": "11\n13\n15\n17\n19",
      "testCases": [
        {
          "input": "10 20",
          "expectedOutput": "11\n13\n15\n17\n19"
        }
      ],
      "thinkFirst": [
        "1. for (int i = lower; i <= upper; i++) { if (i % 2 != 0) print i; }"
      ],
      "syntaxReminder": "for (int i = lower; i <= upper; i++) {\n    if (i % 2 != 0) System.out.println(i);\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Odd check: i % 2 != 0",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int lower = input.nextInt();\n        int upper = input.nextInt();\n        for (int i = lower; i <= upper; i++) {\n            if (i % 2 != 0) System.out.println(i);\n        }\n    }\n}",
      "explanation": [
        "Filtering odd numbers using modulo test inside bound-constrained loop."
      ],
      "xpReward": 35
    },
    {
      "id": 39,
      "stageId": 7,
      "isBoss": false,
      "title": "Count Vowels in Name",
      "scenario": "Read a name (e.g. \"Colombo\"). Loop through its characters using name.charAt(i) and count how many vowels (A, E, I, O, U, a, e, i, o, u) it contains.",
      "task": "Read String name = input.next(). Count vowels and print \"Vowels: \" + count.",
      "sampleInput": "Colombo",
      "sampleOutput": "Vowels: 3",
      "expectedOutput": "Vowels: 3",
      "testCases": [
        {
          "input": "Colombo",
          "expectedOutput": "Vowels: 3"
        },
        {
          "input": "SriLanka",
          "expectedOutput": "Vowels: 3"
        }
      ],
      "thinkFirst": [
        "1. String name = input.next();",
        "2. int count = 0;",
        "3. for (int i = 0; i < name.length(); i++) { char c = name.charAt(i); if (isVowel(c)) count++; }",
        "4. print \"Vowels: \" + count;"
      ],
      "syntaxReminder": "int count = 0;\nfor (int i = 0; i < name.length(); i++) {\n    char c = Character.toLowerCase(name.charAt(i));\n    if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') count++;\n}\nSystem.out.println(\"Vowels: \" + count);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Check charAt(i) against vowels",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        String name = input.next();\n        int count = 0;\n        for (int i = 0; i < name.length(); i++) {\n            char c = name.charAt(i);\n            if (c=='a'||c=='e'||c=='i'||c=='o'||c=='u'||c=='A'||c=='E'||c=='I'||c=='O'||c=='U') {\n                count++;\n            }\n        }\n        System.out.println(\"Vowels: \" + count);\n    }\n}",
      "explanation": [
        "Iterating over characters in a String using index and length."
      ],
      "xpReward": 35
    },
    {
      "id": 40,
      "stageId": 7,
      "isBoss": false,
      "title": "Multiplication Table Generator",
      "scenario": "Read a number N (e.g. 7). Print its multiplication table from 1 up to 10 in standard format: \"7 x 1 = 7\" ... \"7 x 10 = 70\".",
      "task": "Read N. Print lines in format: num + \" x \" + i + \" = \" + (num * i) for i = 1 to 10.",
      "sampleInput": "7",
      "sampleOutput": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
      "expectedOutput": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70",
      "testCases": [
        {
          "input": "7",
          "expectedOutput": "7 x 1 = 7\n7 x 2 = 14\n7 x 3 = 21\n7 x 4 = 28\n7 x 5 = 35\n7 x 6 = 42\n7 x 7 = 49\n7 x 8 = 56\n7 x 9 = 63\n7 x 10 = 70"
        }
      ],
      "thinkFirst": [
        "1. int num = input.nextInt();",
        "2. for (int i = 1; i <= 10; i++) print num + \" x \" + i + \" = \" + (num * i);"
      ],
      "syntaxReminder": "for (int i = 1; i <= 10; i++) {\n    System.out.println(num + \" x \" + i + \" = \" + (num * i));\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        \n    }\n}",
      "hints": [
        "Think carefully about the loop counter start and stop boundaries.",
        "Format: num + \" x \" + i + \" = \" + (num * i)",
        "Check the exact spelling and spacing in your System.out.println statement."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int num = input.nextInt();\n        for (int i = 1; i <= 10; i++) {\n            System.out.println(num + \" x \" + i + \" = \" + (num * i));\n        }\n    }\n}",
      "explanation": [
        "Classic multiplication table generator."
      ],
      "xpReward": 35
    },
    {
      "id": 41,
      "stageId": 7,
      "isBoss": true,
      "title": "👑 ULTIMATE FOR LOOP BOSS: Mini ATM Statement",
      "scenario": "You are programming an ATM mini-statement in Sri Lanka! The user has 10 bank transactions (positive numbers are deposits, negative numbers are withdrawals). Balance starts at Rs. 10000. For each transaction, print the running balance. At the end, print total deposits and total withdrawals.",
      "task": "Initialize balance = 10000, totalDeposits = 0, totalWithdrawals = 0. For 10 transactions: read amount. Update balance += amount. If amount > 0 totalDeposits += amount; else totalWithdrawals += Math.abs(amount). Print \"Balance : Rs. \" + balance after each transaction. Finally print \"Total Deposits : Rs. \" + totalDeposits and \"Total Withdrawals : Rs. \" + totalWithdrawals.",
      "sampleInput": "2000 -500 1000 -1500 5000 -2000 500 -100 200 -100",
      "sampleOutput": "Balance : Rs. 12000\nBalance : Rs. 11500\nBalance : Rs. 12500\nBalance : Rs. 11000\nBalance : Rs. 16000\nBalance : Rs. 14000\nBalance : Rs. 14500\nBalance : Rs. 14400\nBalance : Rs. 14600\nBalance : Rs. 14500\nTotal Deposits : Rs. 8700\nTotal Withdrawals : Rs. 4200",
      "expectedOutput": "Balance : Rs. 12000\nBalance : Rs. 11500\nBalance : Rs. 12500\nBalance : Rs. 11000\nBalance : Rs. 16000\nBalance : Rs. 14000\nBalance : Rs. 14500\nBalance : Rs. 14400\nBalance : Rs. 14600\nBalance : Rs. 14500\nTotal Deposits : Rs. 8700\nTotal Withdrawals : Rs. 4200",
      "testCases": [
        {
          "input": "2000 -500 1000 -1500 5000 -2000 500 -100 200 -100",
          "expectedOutput": "Balance : Rs. 12000\nBalance : Rs. 11500\nBalance : Rs. 12500\nBalance : Rs. 11000\nBalance : Rs. 16000\nBalance : Rs. 14000\nBalance : Rs. 14500\nBalance : Rs. 14400\nBalance : Rs. 14600\nBalance : Rs. 14500\nTotal Deposits : Rs. 8700\nTotal Withdrawals : Rs. 4200"
        }
      ],
      "thinkFirst": [
        "1. int balance = 10000, totalDeposits = 0, totalWithdrawals = 0;",
        "2. for (int i = 0; i < 10; i++) {",
        "       int txn = input.nextInt();",
        "       balance += txn;",
        "       if (txn > 0) totalDeposits += txn; else totalWithdrawals += (-txn);",
        "       System.out.println(\"Balance : Rs. \" + balance);",
        "   }",
        "3. print Total Deposits and Total Withdrawals."
      ],
      "syntaxReminder": "int balance = 10000, deposits = 0, withdrawals = 0;\nfor (int i = 0; i < 10; i++) {\n    int txn = input.nextInt();\n    balance += txn;\n    if (txn > 0) deposits += txn;\n    else withdrawals += -txn;\n    System.out.println(\"Balance : Rs. \" + balance);\n}\nSystem.out.println(\"Total Deposits : Rs. \" + deposits);\nSystem.out.println(\"Total Withdrawals : Rs. \" + withdrawals);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // WRITE YOUR CODE HERE:\n        // 10 transactions starting at balance 10000\n        \n    }\n}",
      "hints": [
        "Start by tracing what happens in the very first iteration.",
        "Subtract negative withdrawals to make them positive: -txn or Math.abs(txn)",
        "Print running balance after each of the 10 transactions"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int balance = 10000;\n        int totalDeposits = 0;\n        int totalWithdrawals = 0;\n        for (int i = 0; i < 10; i++) {\n            int txn = input.nextInt();\n            balance += txn;\n            if (txn > 0) {\n                totalDeposits += txn;\n            } else {\n                totalWithdrawals += -txn;\n            }\n            System.out.println(\"Balance : Rs. \" + balance);\n        }\n        System.out.println(\"Total Deposits : Rs. \" + totalDeposits);\n        System.out.println(\"Total Withdrawals : Rs. \" + totalWithdrawals);\n    }\n}",
      "explanation": [
        "Comprehensive real-life banking simulator combining iteration, state accumulation, and conditional branching."
      ],
      "xpReward": 60
    }
  ]
};
