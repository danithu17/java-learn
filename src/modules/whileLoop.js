/**
 * ============================================================================
 * MODULE 2: WHILE LOOP MASTERY (Sri Lankan Scenario & ICD/iCET Q251-Q259 Edition)
 * ============================================================================
 * 4 Progressive Stages • 25 Real-Life Scenarios • 3 In-Depth Lessons
 * ============================================================================
 */

export const whileLoopModule = {
  "id": "while-loop",
  "title": "While Loop Mastery",
  "icon": "RefreshCw",
  "description": "Master condition-controlled loops, indefinite sentinel inputs, and digit-slicing algorithms (% 10 and / 10).",
  "badge": "Module 2",
  "totalChallenges": 25,
  "stages": [
    {
      "id": 1,
      "title": "Stage 1: When We Don’t Know the End (Draining & Intro)",
      "description": "Learn condition-based repetition: leaking water tanks, battery drain, rocket fuel, and temp factorials (Q251).",
      "minChallengeId": 101,
      "maxChallengeId": 105
    },
    {
      "id": 2,
      "title": "Stage 2: Sentinel & Indefinite Input Loops",
      "description": "Loops that react to unknown input lengths: halving steps, password gates, sum-until-zero, and savings goals.",
      "minChallengeId": 106,
      "maxChallengeId": 111
    },
    {
      "id": 3,
      "title": "Stage 3: Working with Digits (% 10 and / 10)",
      "description": "Master the classroom toolkit: right-to-left digit printing, digit counts, digit sums, and number reversing (Q253-Q259).",
      "minChallengeId": 112,
      "maxChallengeId": 117
    },
    {
      "id": 4,
      "title": "Stage 4: Advanced While Algorithms & Ultimate Boss",
      "description": "Palindrome checks, Euclid GCD, Collatz hailstone, prime checks, and the Ultimate Digit Toolkit Boss.",
      "minChallengeId": 118,
      "maxChallengeId": 125
    }
  ],
  "lessons": [
    {
      "id": "while-lesson-1",
      "title": "When to Use While vs For",
      "summary": "Use for when you know how many times in advance. Use while when you only know WHEN to stop (a condition).",
      "content": "### The Core Difference\n\n- **`for` loop**: Ideal when the number of iterations is known before entering the loop (e.g., counting from 1 to 20, looping through an array of length N).\n- **`while` loop**: Ideal when the termination depends on an external condition or dynamic state (e.g., waiting for correct user input, draining a battery, processing digits until the number reaches 0).\n\n```java\n// FOR: Count 1 to 10\nfor (int i = 1; i <= 10; i++) {\n    System.out.println(i);\n}\n\n// WHILE: Keep looping while battery is above 20%\nint battery = 100;\nwhile (battery >= 20) {\n    System.out.println(\"Battery: \" + battery + \"%\");\n    battery -= 15;\n}\n```"
    },
    {
      "id": "while-lesson-2",
      "title": "Anatomy of a While Loop",
      "summary": "The while loop tests its condition BEFORE each round. If false at the beginning, it executes 0 times.",
      "content": "### Syntax Structure\n\n```java\ninitialization; // 1. Set up before the loop\nwhile (condition) { // 2. Test condition\n    // statements to repeat\n    update; // 3. MUST change variable, or infinite loop!\n}\n```\n\n> [!WARNING] The Infinite Loop Trap\n> If you forget to update the variable inside the `while` loop body (e.g., forgetting `n /= 10;` or `count++;`), the condition stays true forever! Our sandbox will stop it after 10,000 rounds."
    },
    {
      "id": "while-lesson-3",
      "title": "The Digit Stripper Pattern (% 10 and / 10)",
      "summary": "The secret weapon for number algorithms: % 10 gives the last digit, / 10 removes it.",
      "content": "### Slicing Digits in Java (Ref: Q253-Q259)\n\nEvery integer in base 10 can be sliced from right to left using simple math:\n\n1. **Get the last digit**: `int lastDigit = num % 10;`\n   - `4587 % 10 = 7`\n2. **Remove the last digit**: `num = num / 10;` (or `num /= 10;`)\n   - `4587 / 10 = 458`\n3. **Repeat while `num > 0`**!\n\n```java\nint num = 4587;\nwhile (num > 0) {\n    int digit = num % 10;\n    System.out.println(\"Digit: \" + digit);\n    num /= 10;\n}\n```"
    }
  ],
  "challenges": [
    {
      "id": 101,
      "stageId": 1,
      "title": "Water Tank Leak",
      "scenario": "An overhead Sintex water tank in Kandy starts with 50 Liters of water. It leaks 10 Liters every hour until it is completely empty (0 Liters).",
      "task": "Write a while loop starting at 50. While water is greater than 0, print \"Water left: X L\" and decrease water by 10. After the loop ends, print \"Tank is empty!\".",
      "sampleOutput": "Water left: 50 L\nWater left: 40 L\nWater left: 30 L\nWater left: 20 L\nWater left: 10 L\nTank is empty!",
      "expectedOutput": "Water left: 50 L\nWater left: 40 L\nWater left: 30 L\nWater left: 20 L\nWater left: 10 L\nTank is empty!",
      "thinkFirst": "1. Start variable water = 50\n2. while (water > 0)\n3. Inside: print water, then water -= 10\n4. Outside after loop: print Tank is empty!",
      "syntaxReminder": "int water = 50;\nwhile (water > 0) {\n    // print\n    water -= 10;\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        int water = 50;\n        // Write your while loop here\n        \n    }\n}",
      "hints": [
        "Initialize water = 50 before the loop.",
        "Loop condition is while (water > 0). Inside, decrease water by 10.",
        "Print \"Tank is empty!\" after the while loop closing brace."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int water = 50;\n        while (water > 0) {\n            System.out.println(\"Water left: \" + water + \" L\");\n            water -= 10;\n        }\n        System.out.println(\"Tank is empty!\");\n    }\n}",
      "explanation": "The loop executes 5 times while water > 0. Once water hits 0, the condition is false and the final message prints.",
      "xpReward": 25
    },
    {
      "id": 102,
      "stageId": 1,
      "title": "Smartphone Battery Drain",
      "scenario": "Your phone starts at 100% battery. You are watching cricket on Dialog ViU. Battery drops by 15% every hour. Stop as soon as battery falls below 20%.",
      "task": "Start battery at 100. While battery >= 20, print \"Battery: X%\". Then decrease battery by 15. After the loop, print \"Low battery! Please recharge.\"",
      "sampleOutput": "Battery: 100%\nBattery: 85%\nBattery: 70%\nBattery: 55%\nBattery: 40%\nBattery: 25%\nLow battery! Please recharge.",
      "expectedOutput": "Battery: 100%\nBattery: 85%\nBattery: 70%\nBattery: 55%\nBattery: 40%\nBattery: 25%\nLow battery! Please recharge.",
      "thinkFirst": "1. int battery = 100\n2. while (battery >= 20)\n3. print Battery: X%\n4. battery -= 15\n5. print Low battery message outside.",
      "syntaxReminder": "int battery = 100;\nwhile (battery >= 20) {\n    battery -= 15;\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        int battery = 100;\n        // Write while loop\n        \n    }\n}",
      "hints": [
        "Check if battery is greater than or equal to 20: while (battery >= 20).",
        "Reduce battery by 15 inside the loop using battery -= 15;.",
        "Print the final warning message outside the loop."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int battery = 100;\n        while (battery >= 20) {\n            System.out.println(\"Battery: \" + battery + \"%\");\n            battery -= 15;\n        }\n        System.out.println(\"Low battery! Please recharge.\");\n    }\n}",
      "explanation": "Battery drops from 100 down to 25. The next drop makes it 10, which violates battery >= 20, so the loop terminates.",
      "xpReward": 25
    },
    {
      "id": 103,
      "stageId": 1,
      "title": "Rocket Fuel Burn",
      "scenario": "A NASA rocket starts with 4 units of booster fuel. Each burn consumes 1 unit of fuel. Countdown fuel until 0, then launch!",
      "task": "Start fuel at 4. While fuel > 0, print \"Fuel remaining: X\". Decrease fuel by 1. After the loop, print \"Boosters detached! Orbit achieved!\"",
      "sampleOutput": "Fuel remaining: 4\nFuel remaining: 3\nFuel remaining: 2\nFuel remaining: 1\nBoosters detached! Orbit achieved!",
      "expectedOutput": "Fuel remaining: 4\nFuel remaining: 3\nFuel remaining: 2\nFuel remaining: 1\nBoosters detached! Orbit achieved!",
      "thinkFirst": "1. int fuel = 4\n2. while (fuel > 0)\n3. print fuel, fuel--\n4. print launch message.",
      "syntaxReminder": "int fuel = 4;\nwhile (fuel > 0) {\n    fuel--;\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        int fuel = 4;\n        // Write code here\n        \n    }\n}",
      "hints": [
        "Start with fuel = 4.",
        "Loop while fuel > 0 and decrement fuel by 1 each round.",
        "Print the detachment message after the loop."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int fuel = 4;\n        while (fuel > 0) {\n            System.out.println(\"Fuel remaining: \" + fuel);\n            fuel--;\n        }\n        System.out.println(\"Boosters detached! Orbit achieved!\");\n    }\n}",
      "explanation": "Classic while countdown: fuel decrements until zero.",
      "xpReward": 25
    },
    {
      "id": 104,
      "stageId": 1,
      "title": "Elevator Descent to Lobby",
      "scenario": "An elevator at Majestic City starts at Floor 6 and descends to Floor 1 step by step, then opens doors at Lobby.",
      "task": "Start floor at 6. While floor > 0, print \"Descending... Floor X\". Decrease floor by 1. After the loop, print \"Doors opening at Lobby!\".",
      "sampleOutput": "Descending... Floor 6\nDescending... Floor 5\nDescending... Floor 4\nDescending... Floor 3\nDescending... Floor 2\nDescending... Floor 1\nDoors opening at Lobby!",
      "expectedOutput": "Descending... Floor 6\nDescending... Floor 5\nDescending... Floor 4\nDescending... Floor 3\nDescending... Floor 2\nDescending... Floor 1\nDoors opening at Lobby!",
      "thinkFirst": "1. int floor = 6\n2. while (floor > 0)\n3. print Descending... Floor X\n4. floor--\n5. print Doors opening outside.",
      "syntaxReminder": "int floor = 6;\nwhile (floor > 0) {\n    floor--;\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        int floor = 6;\n        // Write elevator loop\n        \n    }\n}",
      "hints": [
        "Condition is while (floor > 0).",
        "Inside loop: System.out.println(\"Descending... Floor \" + floor); then floor--;",
        "Outside loop: print doors opening message."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int floor = 6;\n        while (floor > 0) {\n            System.out.println(\"Descending... Floor \" + floor);\n            floor--;\n        }\n        System.out.println(\"Doors opening at Lobby!\");\n    }\n}",
      "explanation": "Descending countdown until 0.",
      "xpReward": 25
    },
    {
      "id": 105,
      "stageId": 1,
      "isBoss": true,
      "title": "👑 Stage 1 Boss: Factorial of N with Temp Variable (Ref: Q251/Q252)",
      "scenario": "In lecture note Q251, Sir Niroth teaches factorial using a while loop where we must NOT destroy N, so we copy N into a temp variable!",
      "task": "Read integer N from Scanner. Copy N into temp: int temp = N; int fact = 1; while (temp > 0) { fact *= temp; temp--; } Print \"Factorial of N = fact\" preserving the original N!",
      "testCases": [
        {
          "input": "5",
          "expectedOutput": "Factorial of 5 = 120"
        },
        {
          "input": "4",
          "expectedOutput": "Factorial of 4 = 24"
        },
        {
          "input": "1",
          "expectedOutput": "Factorial of 1 = 1"
        }
      ],
      "thinkFirst": "1. int n = input.nextInt();\n2. int temp = n; int fact = 1;\n3. while (temp > 0) { fact *= temp; temp--; }\n4. Print Factorial of + n +  =  + fact",
      "syntaxReminder": "int temp = n;\nint fact = 1;\nwhile (temp > 0) {\n    fact *= temp;\n    temp--;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        // Write your while loop with temp variable\n        \n    }\n}",
      "hints": [
        "Copy n into temp: int temp = n; so n is preserved.",
        "Multiply fact by temp and decrement temp in each round.",
        "Format output exactly: \"Factorial of \" + n + \" = \" + fact"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int temp = n;\n        int fact = 1;\n        while (temp > 0) {\n            fact *= temp;\n            temp--;\n        }\n        System.out.println(\"Factorial of \" + n + \" = \" + fact);\n    }\n}",
      "explanation": "By copying n into temp, the original value of n is retained for printing the final report.",
      "xpReward": 40
    },
    {
      "id": 106,
      "stageId": 2,
      "title": "Halving Steps (Binary Search Foundation)",
      "scenario": "A computer memory buffer starts at 100 MB. It is repeatedly halved (integer division / 2) until it reaches 0.",
      "task": "Start n = 100. While n > 0, print \"Memory: X MB\" and update n = n / 2.",
      "sampleOutput": "Memory: 100 MB\nMemory: 50 MB\nMemory: 25 MB\nMemory: 12 MB\nMemory: 6 MB\nMemory: 3 MB\nMemory: 1 MB\nCleared!",
      "expectedOutput": "Memory: 100 MB\nMemory: 50 MB\nMemory: 25 MB\nMemory: 12 MB\nMemory: 6 MB\nMemory: 3 MB\nMemory: 1 MB\nCleared!",
      "thinkFirst": "1. int n = 100\n2. while (n > 0)\n3. print Memory: X MB\n4. n = n / 2 (or n /= 2)\n5. print Cleared! outside",
      "syntaxReminder": "int n = 100;\nwhile (n > 0) {\n    n /= 2;\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        int n = 100;\n        // Write while loop\n        \n    }\n}",
      "hints": [
        "Condition is while (n > 0).",
        "Update n using n = n / 2; or n /= 2;.",
        "Print \"Cleared!\" after the loop."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int n = 100;\n        while (n > 0) {\n            System.out.println(\"Memory: \" + n + \" MB\");\n            n /= 2;\n        }\n        System.out.println(\"Cleared!\");\n    }\n}",
      "explanation": "Integer division drops the fractional part: 25 / 2 becomes 12, 12 / 2 becomes 6, until 1 / 2 becomes 0.",
      "xpReward": 30
    },
    {
      "id": 107,
      "stageId": 2,
      "title": "Password Gate Sentinel",
      "scenario": "A high-security lab door requires entering the password code 9999 to unlock. Keep reading integers from Scanner until 9999 is entered!",
      "task": "Read integers from Scanner. While the entered number is NOT 9999, print \"Access Denied! Try again.\" and read the next integer. When 9999 is entered, print \"Access Granted! Welcome, Agent.\"",
      "testCases": [
        {
          "input": "1111 2222 9999",
          "expectedOutput": "Access Denied! Try again.\nAccess Denied! Try again.\nAccess Granted! Welcome, Agent."
        },
        {
          "input": "9999",
          "expectedOutput": "Access Granted! Welcome, Agent."
        }
      ],
      "thinkFirst": "1. int pin = input.nextInt();\n2. while (pin != 9999) {\n3.   print Access Denied!\n4.   pin = input.nextInt();\n5. }\n6. print Access Granted!",
      "syntaxReminder": "int pin = input.nextInt();\nwhile (pin != 9999) {\n    pin = input.nextInt();\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // Write password sentinel loop\n        \n    }\n}",
      "hints": [
        "Read the first guess before the loop: int pin = input.nextInt();",
        "Loop while pin != 9999. Inside, print error and read next guess.",
        "Print the success message after the loop finishes."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int pin = input.nextInt();\n        while (pin != 9999) {\n            System.out.println(\"Access Denied! Try again.\");\n            pin = input.nextInt();\n        }\n        System.out.println(\"Access Granted! Welcome, Agent.\");\n    }\n}",
      "explanation": "A prime example of a sentinel loop: the loop runs until a specific sentinel value (9999) appears in the input stream.",
      "xpReward": 30
    },
    {
      "id": 108,
      "stageId": 2,
      "title": "Sum Until Zero (Sentinel Accumulator)",
      "scenario": "Keep reading numbers from the user and adding them to a total, until the user enters 0 to stop.",
      "task": "Read integers from Scanner until 0 is entered. Print \"Total sum: X\".",
      "testCases": [
        {
          "input": "10 25 15 0",
          "expectedOutput": "Total sum: 50"
        },
        {
          "input": "5 5 0",
          "expectedOutput": "Total sum: 10"
        },
        {
          "input": "0",
          "expectedOutput": "Total sum: 0"
        }
      ],
      "thinkFirst": "1. int sum = 0;\n2. int n = input.nextInt();\n3. while (n != 0) { sum += n; n = input.nextInt(); }\n4. print Total sum:  + sum",
      "syntaxReminder": "int n = input.nextInt();\nwhile (n != 0) {\n    sum += n;\n    n = input.nextInt();\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int sum = 0;\n        // Read until 0\n        \n    }\n}",
      "hints": [
        "Read first integer before the loop: int n = input.nextInt();",
        "While n != 0, add n to sum and read the next integer.",
        "Print \"Total sum: \" + sum after the loop."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int sum = 0;\n        int n = input.nextInt();\n        while (n != 0) {\n            sum += n;\n            n = input.nextInt();\n        }\n        System.out.println(\"Total sum: \" + sum);\n    }\n}",
      "explanation": "The loop terminates as soon as 0 is read, leaving sum with the exact total of all prior numbers.",
      "xpReward": 30
    },
    {
      "id": 109,
      "stageId": 2,
      "title": "Savings Goal Counter",
      "scenario": "Kasun saves Rs. 500 into his bank account every month. How many months will it take him to reach or exceed Rs. 10,000?",
      "task": "Start savings = 0 and months = 0. While savings < 10000, add 500 to savings and increment months. After the loop, print \"Goal reached in X months! Total: Rs. Y\".",
      "sampleOutput": "Goal reached in 20 months! Total: Rs. 10000",
      "expectedOutput": "Goal reached in 20 months! Total: Rs. 10000",
      "thinkFirst": "1. int savings = 0, months = 0;\n2. while (savings < 10000) {\n3.   savings += 500;\n4.   months++;\n5. }\n6. print report",
      "syntaxReminder": "while (savings < 10000) {\n    savings += 500;\n    months++;\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        int savings = 0;\n        int months = 0;\n        // Write savings loop\n        \n    }\n}",
      "hints": [
        "Condition: while (savings < 10000).",
        "Each round: savings += 500; months++;",
        "Format output: \"Goal reached in \" + months + \" months! Total: Rs. \" + savings"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int savings = 0;\n        int months = 0;\n        while (savings < 10000) {\n            savings += 500;\n            months++;\n        }\n        System.out.println(\"Goal reached in \" + months + \" months! Total: Rs. \" + savings);\n    }\n}",
      "explanation": "500 * 20 = 10,000. It takes exactly 20 iterations to satisfy the goal.",
      "xpReward": 30
    },
    {
      "id": 110,
      "stageId": 2,
      "title": "Bacteria Doubling Simulation",
      "scenario": "In a medical lab at University of Peradeniya, a single bacterial cell doubles every hour (1 -> 2 -> 4 -> 8...). How many hours until the population exceeds 1,000?",
      "task": "Start count = 1 and hours = 0. While count <= 1000, multiply count by 2 and increment hours. After the loop, print \"Population: X after Y hours\".",
      "sampleOutput": "Population: 1024 after 10 hours",
      "expectedOutput": "Population: 1024 after 10 hours",
      "thinkFirst": "1. int count = 1, hours = 0\n2. while (count <= 1000)\n3. count *= 2, hours++\n4. print Population: X after Y hours",
      "syntaxReminder": "while (count <= 1000) {\n    count *= 2;\n    hours++;\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        int count = 1;\n        int hours = 0;\n        // Write bacteria doubling loop\n        \n    }\n}",
      "hints": [
        "Start count at 1, hours at 0.",
        "Loop while count <= 1000. Each round: count *= 2; hours++;",
        "Print formatted output matching the sample."
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int count = 1;\n        int hours = 0;\n        while (count <= 1000) {\n            count *= 2;\n            hours++;\n        }\n        System.out.println(\"Population: \" + count + \" after \" + hours + \" hours\");\n    }\n}",
      "explanation": "2^10 = 1024, so it takes 10 doublings to exceed 1000.",
      "xpReward": 30
    },
    {
      "id": 111,
      "stageId": 2,
      "isBoss": true,
      "title": "👑 Stage 2 Boss: ATM 3-PIN Attempts Lockout",
      "scenario": "Commercial Bank ATM security rules: The correct PIN is 1234. The user has at most 3 attempts. Stop immediately if correct, or lock card after 3 failures.",
      "task": "Read integers from Scanner. Loop while PIN is not 1234 AND attempts < 3. If correct, print \"PIN Accepted! Welcome.\". If attempts reach 3 and PIN is still wrong, print \"Card Locked! 3 Failed Attempts.\".",
      "testCases": [
        {
          "input": "1111 2222 1234",
          "expectedOutput": "Wrong PIN. Attempts left: 2\nWrong PIN. Attempts left: 1\nPIN Accepted! Welcome."
        },
        {
          "input": "1111 2222 3333",
          "expectedOutput": "Wrong PIN. Attempts left: 2\nWrong PIN. Attempts left: 1\nCard Locked! 3 Failed Attempts."
        },
        {
          "input": "1234",
          "expectedOutput": "PIN Accepted! Welcome."
        }
      ],
      "thinkFirst": "1. int attempts = 0;\n2. int pin = input.nextInt();\n3. while (pin != 1234 && attempts < 2) {\n   attempts++;\n   print Wrong PIN...; pin = input.nextInt();\n4. }\n5. Check if pin == 1234 or attempts >= 3",
      "syntaxReminder": "while (pin != 1234 && attempts < 2) {\n    // check\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        // Write ATM 3-attempt PIN retry loop\n        \n    }\n}",
      "hints": [
        "Read the first pin before the loop.",
        "Loop while pin != 1234 and attempts < 2 (since attempt 1 was already used).",
        "If correct, print \"PIN Accepted! Welcome.\" else print \"Card Locked! 3 Failed Attempts.\""
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int attempts = 1;\n        int pin = input.nextInt();\n        while (pin != 1234 && attempts < 3) {\n            System.out.println(\"Wrong PIN. Attempts left: \" + (3 - attempts));\n            attempts++;\n            pin = input.nextInt();\n        }\n        if (pin == 1234) {\n            System.out.println(\"PIN Accepted! Welcome.\");\n        } else {\n            System.out.println(\"Card Locked! 3 Failed Attempts.\");\n        }\n    }\n}",
      "explanation": "Multi-condition while loop: loop terminates either when PIN matches or when retry limit is exhausted.",
      "xpReward": 45
    },
    {
      "id": 112,
      "stageId": 3,
      "title": "Print Digits Right to Left (Ref: Q253-Q254)",
      "scenario": "In lecture note Q253, Sir Niroth demonstrates extracting digits one by one from the right using modulo 10 and division 10.",
      "task": "Read integer N from Scanner. While N > 0, print the rightmost digit (N % 10), then remove it (N /= 10).",
      "testCases": [
        {
          "input": "4587",
          "expectedOutput": "7\n8\n5\n4"
        },
        {
          "input": "120",
          "expectedOutput": "0\n2\n1"
        }
      ],
      "thinkFirst": "1. int n = input.nextInt();\n2. while (n > 0) {\n3.   System.out.println(n % 10);\n4.   n /= 10;\n5. }",
      "syntaxReminder": "while (n > 0) {\n    System.out.println(n % 10);\n    n /= 10;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        // Print digits from right to left\n        \n    }\n}",
      "hints": [
        "Get last digit with n % 10.",
        "Remove last digit with n /= 10; or n = n / 10;.",
        "Loop while n > 0."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        while (n > 0) {\n            System.out.println(n % 10);\n            n /= 10;\n        }\n    }\n}",
      "explanation": "4587 % 10 = 7, then 4587 / 10 = 458. Repeating this extracts each digit from right to left.",
      "xpReward": 30
    },
    {
      "id": 113,
      "stageId": 3,
      "title": "Count Digits of a Number (Ref: Q255)",
      "scenario": "Given an account number or national identity code, count how many digits it contains.",
      "task": "Read integer N from Scanner. While N > 0, increment count and divide N by 10. Print \"Digit count: X\".",
      "testCases": [
        {
          "input": "45872",
          "expectedOutput": "Digit count: 5"
        },
        {
          "input": "9",
          "expectedOutput": "Digit count: 1"
        },
        {
          "input": "100000",
          "expectedOutput": "Digit count: 6"
        }
      ],
      "thinkFirst": "1. int count = 0;\n2. while (n > 0) { count++; n /= 10; }\n3. print Digit count: X",
      "syntaxReminder": "int count = 0;\nwhile (n > 0) {\n    count++;\n    n /= 10;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int count = 0;\n        // Count digits\n        \n    }\n}",
      "hints": [
        "Initialize count = 0.",
        "In each round: count++; n /= 10;",
        "Print \"Digit count: \" + count"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int count = 0;\n        while (n > 0) {\n            count++;\n            n /= 10;\n        }\n        System.out.println(\"Digit count: \" + count);\n    }\n}",
      "explanation": "Each division by 10 eliminates one digit until the number becomes 0.",
      "xpReward": 30
    },
    {
      "id": 114,
      "stageId": 3,
      "title": "Sum of Digits (Ref: Q256-Q257)",
      "scenario": "Calculate the checksum of an invoice number by finding the sum of all its individual digits.",
      "task": "Read integer N from Scanner. While N > 0, add (N % 10) to sum, then divide N by 10. Print \"Digit sum: X\".",
      "testCases": [
        {
          "input": "4587",
          "expectedOutput": "Digit sum: 24"
        },
        {
          "input": "12345",
          "expectedOutput": "Digit sum: 15"
        }
      ],
      "thinkFirst": "1. int sum = 0;\n2. while (n > 0) {\n3.   sum += n % 10;\n4.   n /= 10;\n5. }\n6. print Digit sum: X",
      "syntaxReminder": "while (n > 0) {\n    sum += n % 10;\n    n /= 10;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int sum = 0;\n        // Sum digits\n        \n    }\n}",
      "hints": [
        "Use sum += n % 10; to add the last digit.",
        "Divide by 10: n /= 10;",
        "Print \"Digit sum: \" + sum"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int sum = 0;\n        while (n > 0) {\n            sum += n % 10;\n            n /= 10;\n        }\n        System.out.println(\"Digit sum: \" + sum);\n    }\n}",
      "explanation": "4 + 5 + 8 + 7 = 24.",
      "xpReward": 30
    },
    {
      "id": 115,
      "stageId": 3,
      "title": "Count Even Digits (Ref: Q258)",
      "scenario": "Count how many even digits (0, 2, 4, 6, 8) are inside a customer phone number.",
      "task": "Read integer N from Scanner. While N > 0, extract the last digit. If digit % 2 == 0, increment evenCount. Divide N by 10. Print \"Even digits: X\".",
      "testCases": [
        {
          "input": "48251",
          "expectedOutput": "Even digits: 3"
        },
        {
          "input": "13579",
          "expectedOutput": "Even digits: 0"
        },
        {
          "input": "2468",
          "expectedOutput": "Even digits: 4"
        }
      ],
      "thinkFirst": "1. int evenCount = 0;\n2. while (n > 0) {\n3.   int d = n % 10;\n4.   if (d % 2 == 0) evenCount++;\n5.   n /= 10;\n6. }\n7. print Even digits: X",
      "syntaxReminder": "if ((n % 10) % 2 == 0) {\n    evenCount++;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int evenCount = 0;\n        // Count even digits\n        \n    }\n}",
      "hints": [
        "Extract last digit: int d = n % 10;",
        "Check if even: if (d % 2 == 0) evenCount++;",
        "Always divide by 10: n /= 10;"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int evenCount = 0;\n        while (n > 0) {\n            int d = n % 10;\n            if (d % 2 == 0) {\n                evenCount++;\n            }\n            n /= 10;\n        }\n        System.out.println(\"Even digits: \" + evenCount);\n    }\n}",
      "explanation": "48251 has 4, 8, 2 which are even, so count is 3.",
      "xpReward": 35
    },
    {
      "id": 116,
      "stageId": 3,
      "title": "Reverse a Number (Ref: Q259)",
      "scenario": "Build a reversed number using arithmetic: rev = rev * 10 + (num % 10).",
      "task": "Read integer N from Scanner. While N > 0, shift rev left by 10 and add the last digit: rev = rev * 10 + (N % 10), then N /= 10. Print \"Reversed: X\".",
      "testCases": [
        {
          "input": "1234",
          "expectedOutput": "Reversed: 4321"
        },
        {
          "input": "98701",
          "expectedOutput": "Reversed: 10789"
        }
      ],
      "thinkFirst": "1. int rev = 0;\n2. while (n > 0) {\n3.   rev = rev * 10 + (n % 10);\n4.   n /= 10;\n5. }\n6. print Reversed: X",
      "syntaxReminder": "int rev = 0;\nwhile (n > 0) {\n    rev = rev * 10 + (n % 10);\n    n /= 10;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int rev = 0;\n        // Reverse number\n        \n    }\n}",
      "hints": [
        "Formula: rev = rev * 10 + (n % 10);",
        "Remove last digit: n /= 10;",
        "Print \"Reversed: \" + rev"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int rev = 0;\n        while (n > 0) {\n            rev = rev * 10 + (n % 10);\n            n /= 10;\n        }\n        System.out.println(\"Reversed: \" + rev);\n    }\n}",
      "explanation": "Multiplying rev by 10 pushes earlier digits to higher place values.",
      "xpReward": 35
    },
    {
      "id": 117,
      "stageId": 3,
      "isBoss": true,
      "title": "👑 Stage 3 Boss: Find the Largest Digit",
      "scenario": "Given an ID number, find the single largest digit (0-9) present in the number.",
      "task": "Read integer N from Scanner. Find the maximum digit using a while loop. Print \"Largest digit: X\".",
      "testCases": [
        {
          "input": "48259",
          "expectedOutput": "Largest digit: 9"
        },
        {
          "input": "321",
          "expectedOutput": "Largest digit: 3"
        },
        {
          "input": "777",
          "expectedOutput": "Largest digit: 7"
        }
      ],
      "thinkFirst": "1. int max = 0;\n2. while (n > 0) {\n3.   int d = n % 10;\n4.   if (d > max) max = d;\n5.   n /= 10;\n6. }\n7. print Largest digit: X",
      "syntaxReminder": "int max = 0;\nwhile (n > 0) {\n    if (n % 10 > max) max = n % 10;\n    n /= 10;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int max = 0;\n        // Find largest digit\n        \n    }\n}",
      "hints": [
        "Initialize max = 0.",
        "In each round, compare n % 10 with max: if (d > max) max = d;",
        "Print \"Largest digit: \" + max"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int max = 0;\n        while (n > 0) {\n            int d = n % 10;\n            if (d > max) {\n                max = d;\n            }\n            n /= 10;\n        }\n        System.out.println(\"Largest digit: \" + max);\n    }\n}",
      "explanation": "Scans every digit from right to left, keeping track of the largest seen.",
      "xpReward": 45
    },
    {
      "id": 118,
      "stageId": 4,
      "title": "Palindrome Number Check",
      "scenario": "A number is a palindrome if it reads the same backwards as forwards (e.g. 121, 4554). Save original N in temp, reverse it, and compare!",
      "task": "Read integer N from Scanner. If N is equal to its reversed number, print \"Palindrome\". Otherwise print \"Not Palindrome\".",
      "testCases": [
        {
          "input": "121",
          "expectedOutput": "Palindrome"
        },
        {
          "input": "123",
          "expectedOutput": "Not Palindrome"
        },
        {
          "input": "4554",
          "expectedOutput": "Palindrome"
        }
      ],
      "thinkFirst": "1. int original = n;\n2. int rev = 0, temp = n;\n3. while (temp > 0) { rev = rev * 10 + (temp % 10); temp /= 10; }\n4. if (original == rev) print Palindrome else print Not Palindrome",
      "syntaxReminder": "if (original == rev) {\n    System.out.println(\"Palindrome\");\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        // Check palindrome\n        \n    }\n}",
      "hints": [
        "Save n in original: int original = n;",
        "Reverse n into rev using while loop.",
        "Check if original == rev."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int original = n;\n        int rev = 0;\n        int temp = n;\n        while (temp > 0) {\n            rev = rev * 10 + (temp % 10);\n            temp /= 10;\n        }\n        if (original == rev) {\n            System.out.println(\"Palindrome\");\n        } else {\n            System.out.println(\"Not Palindrome\");\n        }\n    }\n}",
      "explanation": "121 reversed is 121, so original == rev is true.",
      "xpReward": 35
    },
    {
      "id": 119,
      "stageId": 4,
      "title": "Euclidean GCD Algorithm",
      "scenario": "Find the Greatest Common Divisor of two numbers using Euclid’s algorithm: while b != 0, temp = b; b = a % b; a = temp;",
      "task": "Read two integers a and b from Scanner. Loop while b != 0: int temp = b; b = a % b; a = temp; Print \"GCD: \" + a.",
      "testCases": [
        {
          "input": "54 24",
          "expectedOutput": "GCD: 6"
        },
        {
          "input": "48 18",
          "expectedOutput": "GCD: 6"
        },
        {
          "input": "100 25",
          "expectedOutput": "GCD: 25"
        }
      ],
      "thinkFirst": "1. while (b != 0) {\n2.   int temp = b;\n3.   b = a % b;\n4.   a = temp;\n5. }\n6. print GCD:  + a",
      "syntaxReminder": "while (b != 0) {\n    int temp = b;\n    b = a % b;\n    a = temp;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int a = input.nextInt();\n        int b = input.nextInt();\n        // Euclid GCD\n        \n    }\n}",
      "hints": [
        "Store b in a temporary variable: int temp = b;",
        "Update b = a % b; and a = temp;",
        "Print \"GCD: \" + a after loop terminates."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int a = input.nextInt();\n        int b = input.nextInt();\n        while (b != 0) {\n            int temp = b;\n            b = a % b;\n            a = temp;\n        }\n        System.out.println(\"GCD: \" + a);\n    }\n}",
      "explanation": "Fastest ancient algorithm: repeatedly takes remainders until remainder is 0.",
      "xpReward": 35
    },
    {
      "id": 120,
      "stageId": 4,
      "title": "Fibonacci Sequence Up to N Terms",
      "scenario": "Print the first N Fibonacci numbers (0, 1, 1, 2, 3, 5, 8...) on separate lines.",
      "task": "Read N from Scanner. Start a = 0, b = 1, count = 0. While count < N, print a, then int next = a + b; a = b; b = next; count++;",
      "testCases": [
        {
          "input": "5",
          "expectedOutput": "0\n1\n1\n2\n3"
        },
        {
          "input": "3",
          "expectedOutput": "0\n1\n1"
        }
      ],
      "thinkFirst": "1. int a = 0, b = 1, count = 0;\n2. while (count < n) {\n3.   print a;\n4.   int next = a + b; a = b; b = next;\n5.   count++;\n6. }",
      "syntaxReminder": "while (count < n) {\n    System.out.println(a);\n    int next = a + b;\n    a = b;\n    b = next;\n    count++;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int a = 0, b = 1, count = 0;\n        // Fibonacci loop\n        \n    }\n}",
      "hints": [
        "Print a in each round.",
        "Compute next = a + b, shift a = b, and b = next;",
        "Increment count and loop while count < n."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int a = 0;\n        int b = 1;\n        int count = 0;\n        while (count < n) {\n            System.out.println(a);\n            int next = a + b;\n            a = b;\n            b = next;\n            count++;\n        }\n    }\n}",
      "explanation": "Each term is the sum of the preceding two terms.",
      "xpReward": 35
    },
    {
      "id": 121,
      "stageId": 4,
      "title": "Collatz Hailstone Game",
      "scenario": "The Collatz Conjecture: Take any integer N. If N is even, divide by 2. If N is odd, multiply by 3 and add 1. Count steps until N reaches 1.",
      "task": "Read integer N from Scanner. While N != 1, if N % 2 == 0 then N /= 2 else N = 3 * N + 1. Count steps. Print \"Steps to reach 1: X\".",
      "testCases": [
        {
          "input": "6",
          "expectedOutput": "Steps to reach 1: 8"
        },
        {
          "input": "11",
          "expectedOutput": "Steps to reach 1: 14"
        }
      ],
      "thinkFirst": "1. int steps = 0;\n2. while (n != 1) {\n3.   if (n % 2 == 0) n /= 2; else n = 3 * n + 1;\n4.   steps++;\n5. }\n6. print Steps to reach 1: X",
      "syntaxReminder": "while (n != 1) {\n    if (n % 2 == 0) n /= 2;\n    else n = 3 * n + 1;\n    steps++;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int steps = 0;\n        // Collatz loop\n        \n    }\n}",
      "hints": [
        "Condition is while (n != 1).",
        "Check if even: if (n % 2 == 0) n /= 2; else n = 3 * n + 1;",
        "Increment steps each iteration and print the result."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int steps = 0;\n        while (n != 1) {\n            if (n % 2 == 0) {\n                n /= 2;\n            } else {\n                n = 3 * n + 1;\n            }\n            steps++;\n        }\n        System.out.println(\"Steps to reach 1: \" + steps);\n    }\n}",
      "explanation": "For 6: 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1 (8 steps).",
      "xpReward": 35
    },
    {
      "id": 122,
      "stageId": 4,
      "title": "Check Prime Using While Loop",
      "scenario": "Determine if integer N is a prime number (greater than 1, divisible only by 1 and itself) using a while loop test divisor.",
      "task": "Read N from Scanner. If N <= 1, print \"Not Prime\". Else test divisors starting at i = 2 while i * i <= N. If N % i == 0, not prime. If no divisor found, print \"Prime\".",
      "testCases": [
        {
          "input": "17",
          "expectedOutput": "Prime"
        },
        {
          "input": "15",
          "expectedOutput": "Not Prime"
        },
        {
          "input": "1",
          "expectedOutput": "Not Prime"
        }
      ],
      "thinkFirst": "1. if (n <= 1) print Not Prime\n2. boolean isPrime = true; int i = 2;\n3. while (i * i <= n) { if (n % i == 0) { isPrime = false; break; } i++; }\n4. if (isPrime) print Prime else print Not Prime",
      "syntaxReminder": "while (i * i <= n) {\n    if (n % i == 0) { isPrime = false; break; }\n    i++;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        // Check prime\n        \n    }\n}",
      "hints": [
        "Numbers <= 1 are not prime.",
        "Check divisibility: while (i * i <= n) { if (n % i == 0) isPrime = false; i++; }",
        "Print \"Prime\" or \"Not Prime\"."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        if (n <= 1) {\n            System.out.println(\"Not Prime\");\n        } else {\n            boolean isPrime = true;\n            int i = 2;\n            while (i * i <= n) {\n                if (n % i == 0) {\n                    isPrime = false;\n                    break;\n                }\n                i++;\n            }\n            if (isPrime) {\n                System.out.println(\"Prime\");\n            } else {\n                System.out.println(\"Not Prime\");\n            }\n        }\n    }\n}",
      "explanation": "Testing up to sqrt(N) is the efficient prime checking algorithm.",
      "xpReward": 40
    },
    {
      "id": 123,
      "stageId": 4,
      "title": "Smallest Power of 2 Above 500",
      "scenario": "Find the first power of 2 (1, 2, 4, 8, 16...) that strictly exceeds 500.",
      "task": "Start val = 1. While val <= 500, multiply val by 2. Print \"Power: \" + val.",
      "sampleOutput": "Power: 512",
      "expectedOutput": "Power: 512",
      "thinkFirst": "1. int val = 1;\n2. while (val <= 500) val *= 2;\n3. print Power:  + val",
      "syntaxReminder": "int val = 1;\nwhile (val <= 500) {\n    val *= 2;\n}",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        int val = 1;\n        // Write power loop\n        \n    }\n}",
      "hints": [
        "Initialize val = 1.",
        "Loop while val <= 500 and multiply by 2.",
        "Print \"Power: \" + val"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int val = 1;\n        while (val <= 500) {\n            val *= 2;\n        }\n        System.out.println(\"Power: \" + val);\n    }\n}",
      "explanation": "2^9 = 512, which is the smallest power of 2 strictly greater than 500.",
      "xpReward": 30
    },
    {
      "id": 124,
      "stageId": 4,
      "title": "Integer Square Root Approximation",
      "scenario": "Calculate the floor integer square root of N without using Math.sqrt.",
      "task": "Read N from Scanner. Start i = 1. While i * i <= N, increment i. The answer is (i - 1). Print \"sqrt(N) = \" + (i - 1).",
      "testCases": [
        {
          "input": "25",
          "expectedOutput": "sqrt(25) = 5"
        },
        {
          "input": "30",
          "expectedOutput": "sqrt(30) = 5"
        },
        {
          "input": "49",
          "expectedOutput": "sqrt(49) = 7"
        }
      ],
      "thinkFirst": "1. int i = 1;\n2. while (i * i <= n) i++;\n3. print sqrt( + n + ) =  + (i - 1)",
      "syntaxReminder": "while (i * i <= n) {\n    i++;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int i = 1;\n        // Integer square root\n        \n    }\n}",
      "hints": [
        "Loop while i * i <= n: i++;",
        "The greatest integer is i - 1.",
        "Print formatted: \"sqrt(\" + n + \") = \" + (i - 1)"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int i = 1;\n        while (i * i <= n) {\n            i++;\n        }\n        System.out.println(\"sqrt(\" + n + \") = \" + (i - 1));\n    }\n}",
      "explanation": "For 30: 5*5=25 <= 30, but 6*6=36 > 30, so floor square root is 5.",
      "xpReward": 35
    },
    {
      "id": 125,
      "stageId": 4,
      "isBoss": true,
      "title": "👑 ULTIMATE WHILE LOOP BOSS: Digit Toolkit",
      "scenario": "Build the ultimate classroom number inspection toolkit from Sri Lankan lecture notes! Read integer N and output: Digit Count, Digit Sum, Reversed Number, and Palindrome status!",
      "task": "Read N from Scanner. Using while loops, calculate:\n1. Count of digits\n2. Sum of digits\n3. Reversed number\n4. Palindrome status (true/false)\nPrint all 4 lines exactly as formatted in the sample.",
      "testCases": [
        {
          "input": "1221",
          "expectedOutput": "Digits: 4\nSum: 6\nReversed: 1221\nPalindrome: true"
        },
        {
          "input": "4587",
          "expectedOutput": "Digits: 4\nSum: 24\nReversed: 7854\nPalindrome: false"
        }
      ],
      "thinkFirst": "1. int original = n;\n2. int count = 0, sum = 0, rev = 0, temp = n;\n3. while (temp > 0) {\n     int d = temp % 10;\n     count++;\n     sum += d;\n     rev = rev * 10 + d;\n     temp /= 10;\n   }\n4. boolean pal = (original == rev);\n5. Print all 4 lines.",
      "syntaxReminder": "while (temp > 0) {\n    int d = temp % 10;\n    count++;\n    sum += d;\n    rev = rev * 10 + d;\n    temp /= 10;\n}",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        // Write the Ultimate Digit Toolkit Boss solution!\n        \n    }\n}",
      "hints": [
        "Preserve original n in a variable before modifying temp.",
        "Inside one single while loop (temp > 0), you can compute count, sum, and rev all at once!",
        "Print all 4 required lines: Digits, Sum, Reversed, and Palindrome."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int original = n;\n        int count = 0;\n        int sum = 0;\n        int rev = 0;\n        int temp = n;\n        while (temp > 0) {\n            int d = temp % 10;\n            count++;\n            sum += d;\n            rev = rev * 10 + d;\n            temp /= 10;\n        }\n        boolean isPal = (original == rev);\n        System.out.println(\"Digits: \" + count);\n        System.out.println(\"Sum: \" + sum);\n        System.out.println(\"Reversed: \" + rev);\n        System.out.println(\"Palindrome: \" + isPal);\n    }\n}",
      "explanation": "Combines digit extraction, counting, summing, arithmetic reversal, and boolean logic in one master algorithm.",
      "xpReward": 60
    }
  ]
};
