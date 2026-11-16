/**
 * ============================================================================
 * MODULE 3: DO-WHILE LOOP MASTERY (Sri Lankan Scenario & ICD/iCET Q260-Q262 Edition)
 * ============================================================================
 * 3 Progressive Stages • 15 Real-Life Scenarios • 3 In-Depth Lessons
 * ============================================================================
 */

export const doWhileLoopModule = {
  "id": "dowhile-loop",
  "title": "Do-While Loop Mastery",
  "icon": "Zap",
  "description": "Master guaranteed first runs, user input validation loops, and interactive ATM console systems.",
  "badge": "Module 3",
  "totalChallenges": 15,
  "stages": [
    {
      "id": 1,
      "title": "Stage 1: Guaranteed First Run & Comparisons",
      "description": "Understand post-test execution: Hello 5 times (Q260), False condition showdown (Q261), Menu intro, and Q262 0-digit counting.",
      "minChallengeId": 201,
      "maxChallengeId": 205
    },
    {
      "id": 2,
      "title": "Stage 2: Real-World Input Validation & Retries",
      "description": "Keep prompting until valid: age limits (1-100), 3-attempt PIN retry, dice rolls, and continue-loop calculators.",
      "minChallengeId": 206,
      "maxChallengeId": 210
    },
    {
      "id": 3,
      "title": "Stage 3: Mixed Algorithms & Ultimate ATM Boss",
      "description": "Negative sum gates, zero-safe countdowns, decimal to binary, digital root, and the Ultimate Mini ATM Menu Boss.",
      "minChallengeId": 211,
      "maxChallengeId": 215
    }
  ],
  "lessons": [
    {
      "id": "dowhile-lesson-1",
      "title": "The Guaranteed First Run (Ref: Q260)",
      "summary": "The do-while loop is a post-test loop. It executes the body first, then checks the condition.",
      "content": "### Post-Test Execution\n\nUnlike `for` and `while` loops which evaluate their condition **before** entering the body, a `do-while` loop always executes its body **at least once** before checking if it should repeat.\n\n```java\nint i = 1;\ndo {\n    System.out.println(\"Hello \" + i);\n    i++;\n} while (i <= 5);\n```\n\n> [!IMPORTANT] Semicolon Rule\n> Always end the `while (condition);` with a semicolon `;`! Forgetting this semicolon is a common beginner compiler error."
    },
    {
      "id": "dowhile-lesson-2",
      "title": "While vs Do-While Showdown (Ref: Q261 vs Q262)",
      "summary": "When the initial condition is FALSE, while runs 0 times, but do-while runs 1 time.",
      "content": "### Classroom Proof (ICD/iCET Notes Q261 & Q262)\n\nConsider what happens when `int i = 12;` and the condition is `i < 10`:\n\n```java\n// WHILE: Checks (12 < 10) -> false -> Runs 0 times!\nint i = 12;\nwhile (i < 10) {\n    System.out.println(i);\n    i++;\n}\n\n// DO-WHILE: Prints 12 FIRST, then checks (13 < 10) -> false -> Runs 1 time!\nint i = 12;\ndo {\n    System.out.println(i);\n    i++;\n} while (i < 10);\n```\n\n### The Zero-Digit Mystery (Q262)\nIf you count digits of input `0`:\n- A `while (n > 0)` loop never enters because `0 > 0` is false, giving **0 digits** (incorrect!).\n- A `do { count++; n /= 10; } while (n > 0);` loop counts the single digit **0** once, giving **1 digit** (correct!)."
    },
    {
      "id": "dowhile-lesson-3",
      "title": "The Interactive Menu & Validation Pattern",
      "summary": "When you must prompt the user before knowing whether to continue, do-while is the most natural choice.",
      "content": "### Real-Life Application\n\n```java\nint choice;\ndo {\n    System.out.println(\"1. Deposit\\n2. Withdraw\\n3. Exit\");\n    choice = input.nextInt();\n} while (choice != 3);\n```"
    }
  ],
  "challenges": [
    {
      "id": 201,
      "stageId": 1,
      "title": "Print \"Hello\" 5 Times (Ref: Q260)",
      "scenario": "In lecture note Q260, Sir Niroth introduces the do-while loop by printing \"Hello\" 5 times.",
      "task": "Write a do-while loop starting with int i = 1. Print \"Hello\" on each line, increment i, and loop while i <= 5.",
      "sampleOutput": "Hello\nHello\nHello\nHello\nHello",
      "expectedOutput": "Hello\nHello\nHello\nHello\nHello",
      "thinkFirst": "1. int i = 1;\n2. do {\n3.   System.out.println(\"Hello\");\n4.   i++;\n5. } while (i <= 5);",
      "syntaxReminder": "int i = 1;\ndo {\n    System.out.println(\"Hello\");\n    i++;\n} while (i <= 5);",
      "starterCode": "class Example {\n    public static void main(String args[]) {\n        int i = 1;\n        // Write do-while loop\n        \n    }\n}",
      "hints": [
        "Start with int i = 1; before the do block.",
        "Inside the do { ... } block: print \"Hello\" and increment i++.",
        "Condition at the end must be: while (i <= 5); with a trailing semicolon!"
      ],
      "modelSolution": "class Example {\n    public static void main(String args[]) {\n        int i = 1;\n        do {\n            System.out.println(\"Hello\");\n            i++;\n        } while (i <= 5);\n    }\n}",
      "explanation": "The loop body runs 5 times for i = 1, 2, 3, 4, 5. After printing when i=5, i becomes 6, and 6 <= 5 is false.",
      "xpReward": 25
    },
    {
      "id": 202,
      "stageId": 1,
      "type": "concept-lab",
      "title": "🧪 Concept Lab: While vs Do-While with False Condition (Ref: Q261)",
      "scenario": "In Q261, we compare while vs do-while when the condition is false from the start: int i = 12; condition i < 10.\nWhile loop executes 0 times (prints nothing).\nWhat does the do-while loop print?",
      "task": "Type the exact integer that the following do-while loop prints to the console:\nint i = 12;\ndo {\n    System.out.println(i);\n    i++;\n} while (i < 10);",
      "sampleOutput": "12",
      "expectedOutput": "12",
      "thinkFirst": "1. do-while executes the body FIRST before checking condition.\n2. So it prints the initial value of i (12).\n3. Then it increments i to 13 and checks (13 < 10), which is false.\n4. Therefore, it printed: 12.",
      "syntaxReminder": "Type: 12",
      "starterCode": "// Concept Lab: Type your answer below",
      "hints": [
        "The do block executes before the while condition is checked even once.",
        "What was the value of i when System.out.println(i) executed?",
        "Type just the single number: 12"
      ],
      "modelSolution": "12",
      "explanation": "Because do-while is post-test, it executes the body once and prints 12 before testing the condition.",
      "xpReward": 30
    },
    {
      "id": 203,
      "stageId": 1,
      "title": "Game Menu Shown at Least Once",
      "scenario": "A board game must display its menu at least once. If the user enters 1, it prints \"Playing...\" and shows menu again. If user enters 2, it prints \"Goodbye!\" and exits.",
      "task": "Read choice from Scanner in a do-while loop. Inside loop, print \"1. Play  2. Exit\". If choice == 1, print \"Playing...\". Loop while choice != 2. After loop, print \"Goodbye!\".",
      "testCases": [
        {
          "input": "1 1 2",
          "expectedOutput": "1. Play  2. Exit\nPlaying...\n1. Play  2. Exit\nPlaying...\n1. Play  2. Exit\nGoodbye!"
        },
        {
          "input": "2",
          "expectedOutput": "1. Play  2. Exit\nGoodbye!"
        }
      ],
      "thinkFirst": "1. int choice;\n2. do {\n3.   print 1. Play  2. Exit\n4.   choice = input.nextInt();\n5.   if (choice == 1) print Playing...\n6. } while (choice != 2);\n7. print Goodbye!",
      "syntaxReminder": "int choice;\ndo {\n    // menu\n    choice = input.nextInt();\n} while (choice != 2);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int choice;\n        // Write do-while menu\n        \n    }\n}",
      "hints": [
        "Declare int choice before the do block.",
        "Inside do block, print \"1. Play  2. Exit\" and read choice = input.nextInt();",
        "Check if choice == 1 to print \"Playing...\". Loop while choice != 2;."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int choice;\n        do {\n            System.out.println(\"1. Play  2. Exit\");\n            choice = input.nextInt();\n            if (choice == 1) {\n                System.out.println(\"Playing...\");\n            }\n        } while (choice != 2);\n        System.out.println(\"Goodbye!\");\n    }\n}",
      "explanation": "The menu is guaranteed to show at least once even if the user exits immediately with option 2.",
      "xpReward": 30
    },
    {
      "id": 204,
      "stageId": 1,
      "title": "Zero-Proof Digit Counter (Ref: Q262)",
      "scenario": "In lecture note Q262, Sir Niroth explains: if a user enters 0, a while (n > 0) loop gives 0 digits! But with do-while, input 0 correctly produces 1 digit!",
      "task": "Read integer N from Scanner. Using a do-while loop: increment count, divide N by 10, loop while N > 0. Print \"Digits: X\".",
      "testCases": [
        {
          "input": "0",
          "expectedOutput": "Digits: 1"
        },
        {
          "input": "4587",
          "expectedOutput": "Digits: 4"
        },
        {
          "input": "7",
          "expectedOutput": "Digits: 1"
        }
      ],
      "thinkFirst": "1. int count = 0;\n2. do {\n3.   count++;\n4.   n /= 10;\n5. } while (n > 0);\n6. print Digits: X",
      "syntaxReminder": "int count = 0;\ndo {\n    count++;\n    n /= 10;\n} while (n > 0);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int count = 0;\n        // Count digits with do-while\n        \n    }\n}",
      "hints": [
        "Initialize count = 0.",
        "Inside do block: count++; n /= 10;",
        "Condition: while (n > 0); ensures 0 executes exactly once."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        int count = 0;\n        do {\n            count++;\n            n /= 10;\n        } while (n > 0);\n        System.out.println(\"Digits: \" + count);\n    }\n}",
      "explanation": "Because the body executes first, n = 0 increments count to 1 and becomes 0 / 10 = 0. The condition 0 > 0 terminates, correctly yielding 1 digit!",
      "xpReward": 35
    },
    {
      "id": 205,
      "stageId": 1,
      "type": "concept-lab",
      "title": "🧪 Concept Lab Boss: When is Do-While Preferred?",
      "scenario": "Think about the architectural difference between pre-test and post-test loops.",
      "task": "Why do we choose a do-while loop over a while loop? Type the key reason (Type: \"Runs at least once\"):",
      "sampleOutput": "Runs at least once",
      "expectedOutput": "Runs at least once",
      "thinkFirst": "The unique feature of do-while is that the body is guaranteed to execute at least once before checking the condition.",
      "syntaxReminder": "Type: Runs at least once",
      "starterCode": "// Type: Runs at least once",
      "hints": [
        "Think about how many times the loop body is guaranteed to run.",
        "It always runs at least once regardless of the condition.",
        "Type: Runs at least once"
      ],
      "modelSolution": "Runs at least once",
      "explanation": "A do-while loop guarantees execution of the body at least once.",
      "xpReward": 35
    },
    {
      "id": 206,
      "stageId": 2,
      "title": "Age Input Validation (1 to 100)",
      "scenario": "A movie booking app in Colombo requires entering an age between 1 and 100. If the user enters an invalid age (<= 0 or > 100), prompt \"Invalid age! Try again.\" and ask again.",
      "task": "Prompt and read age with a do-while loop. If age < 1 or age > 100, print \"Invalid age! Try again.\". Loop while age < 1 || age > 100. When valid, print \"Valid age: X accepted.\".",
      "testCases": [
        {
          "input": "-5 150 24",
          "expectedOutput": "Invalid age! Try again.\nInvalid age! Try again.\nValid age: 24 accepted."
        },
        {
          "input": "18",
          "expectedOutput": "Valid age: 18 accepted."
        }
      ],
      "thinkFirst": "1. int age;\n2. do {\n3.   age = input.nextInt();\n4.   if (age < 1 || age > 100) print Invalid age! Try again.\n5. } while (age < 1 || age > 100);\n6. print Valid age: accepted.",
      "syntaxReminder": "int age;\ndo {\n    age = input.nextInt();\n    if (age < 1 || age > 100) ...\n} while (age < 1 || age > 100);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int age;\n        // Write age validation loop\n        \n    }\n}",
      "hints": [
        "Read age inside the do block: age = input.nextInt();",
        "Check if invalid: if (age < 1 || age > 100) System.out.println(\"Invalid age! Try again.\");",
        "Loop while invalid: while (age < 1 || age > 100);"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int age;\n        do {\n            age = input.nextInt();\n            if (age < 1 || age > 100) {\n                System.out.println(\"Invalid age! Try again.\");\n            }\n        } while (age < 1 || age > 100);\n        System.out.println(\"Valid age: \" + age + \" accepted.\");\n    }\n}",
      "explanation": "Input validation pattern: keeps repeating the prompt until valid data is supplied.",
      "xpReward": 35
    },
    {
      "id": 207,
      "stageId": 2,
      "title": "PIN Entry with 3-Attempt Guard",
      "scenario": "Enter PIN with do-while. Stop if correct PIN 1234 is entered, or if 3 attempts are reached.",
      "task": "Using do-while, read pin. Increment attempts. If pin != 1234 and attempts < 3, print \"Wrong PIN!\". Loop while pin != 1234 && attempts < 3. If pin == 1234 print \"Welcome!\" else print \"Blocked!\".",
      "testCases": [
        {
          "input": "0000 1234",
          "expectedOutput": "Wrong PIN!\nWelcome!"
        },
        {
          "input": "1111 2222 3333",
          "expectedOutput": "Wrong PIN!\nWrong PIN!\nBlocked!"
        },
        {
          "input": "1234",
          "expectedOutput": "Welcome!"
        }
      ],
      "thinkFirst": "1. int attempts = 0, pin;\n2. do {\n3.   pin = input.nextInt();\n4.   attempts++;\n5.   if (pin != 1234 && attempts < 3) print Wrong PIN!\n6. } while (pin != 1234 && attempts < 3);\n7. if (pin == 1234) print Welcome! else print Blocked!",
      "syntaxReminder": "do {\n    pin = input.nextInt();\n    attempts++;\n} while (pin != 1234 && attempts < 3);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int attempts = 0;\n        int pin;\n        // Write do-while PIN check\n        \n    }\n}",
      "hints": [
        "Read pin and increment attempts inside do block.",
        "If incorrect and attempts < 3, print \"Wrong PIN!\".",
        "After loop, check if pin == 1234 to print \"Welcome!\" or \"Blocked!\"."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int attempts = 0;\n        int pin;\n        do {\n            pin = input.nextInt();\n            attempts++;\n            if (pin != 1234 && attempts < 3) {\n                System.out.println(\"Wrong PIN!\");\n            }\n        } while (pin != 1234 && attempts < 3);\n        if (pin == 1234) {\n            System.out.println(\"Welcome!\");\n        } else {\n            System.out.println(\"Blocked!\");\n        }\n    }\n}",
      "explanation": "Guarantees at least 1 attempt, stopping early on success or cutting off at 3 attempts.",
      "xpReward": 35
    },
    {
      "id": 208,
      "stageId": 2,
      "title": "Dice Game: Roll Until 6 Appears",
      "scenario": "In Ludo, you keep rolling the die until you roll a 6 to enter the board. Count how many rolls it took!",
      "task": "Read roll integers from Scanner. Inside do-while, read roll and increment rolls count. Loop while roll != 6. Print \"Got a 6 after X rolls!\".",
      "testCases": [
        {
          "input": "3 2 5 6",
          "expectedOutput": "Got a 6 after 4 rolls!"
        },
        {
          "input": "6",
          "expectedOutput": "Got a 6 after 1 rolls!"
        }
      ],
      "thinkFirst": "1. int rolls = 0, roll;\n2. do {\n3.   roll = input.nextInt();\n4.   rolls++;\n5. } while (roll != 6);\n6. print Got a 6 after X rolls!",
      "syntaxReminder": "int rolls = 0, roll;\ndo {\n    roll = input.nextInt();\n    rolls++;\n} while (roll != 6);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int rolls = 0;\n        int roll;\n        // Write dice roll loop\n        \n    }\n}",
      "hints": [
        "Increment rolls count on every roll inside do.",
        "Read next roll: roll = input.nextInt();",
        "Condition: while (roll != 6);"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int rolls = 0;\n        int roll;\n        do {\n            roll = input.nextInt();\n            rolls++;\n        } while (roll != 6);\n        System.out.println(\"Got a 6 after \" + rolls + \" rolls!\");\n    }\n}",
      "explanation": "Every game requires at least one roll, making do-while the exact match for simulation games.",
      "xpReward": 30
    },
    {
      "id": 209,
      "stageId": 2,
      "title": "Number Guessing with Higher/Lower Hints",
      "scenario": "The secret number is 42. Read guesses from Scanner. If guess < 42 print \"Higher!\". If guess > 42 print \"Lower!\". Loop until correct.",
      "task": "Loop with do-while: read guess. If guess < 42 print \"Higher!\". If guess > 42 print \"Lower!\". Loop while guess != 42. When 42 is reached, print \"Correct! You win!\".",
      "testCases": [
        {
          "input": "20 50 42",
          "expectedOutput": "Higher!\nLower!\nCorrect! You win!"
        },
        {
          "input": "42",
          "expectedOutput": "Correct! You win!"
        }
      ],
      "thinkFirst": "1. int guess;\n2. do {\n3.   guess = input.nextInt();\n4.   if (guess < 42) print Higher!\n5.   else if (guess > 42) print Lower!\n6. } while (guess != 42);\n7. print Correct! You win!",
      "syntaxReminder": "do {\n    guess = input.nextInt();\n    if (guess < 42) ...\n} while (guess != 42);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int guess;\n        // Write guessing game loop\n        \n    }\n}",
      "hints": [
        "Read guess inside do.",
        "Compare with secret 42 and print \"Higher!\" or \"Lower!\".",
        "Loop while guess != 42 and print win message outside."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int guess;\n        do {\n            guess = input.nextInt();\n            if (guess < 42) {\n                System.out.println(\"Higher!\");\n            } else if (guess > 42) {\n                System.out.println(\"Lower!\");\n            }\n        } while (guess != 42);\n        System.out.println(\"Correct! You win!\");\n    }\n}",
      "explanation": "Binary-style guidance loop that runs until the player hits the target.",
      "xpReward": 35
    },
    {
      "id": 210,
      "stageId": 2,
      "isBoss": true,
      "title": "👑 Stage 2 Boss: Calculator with \"Continue?\" Prompt",
      "scenario": "A shop cash register calculator adds two numbers, prints their sum, then asks \"Continue? (1=yes, 0=no)\".",
      "task": "Inside do-while: read two integers a and b, print \"Sum: \" + (a + b). Then read continueFlag (1 or 0). Loop while continueFlag == 1. After loop print \"Calculator closed.\".",
      "testCases": [
        {
          "input": "10 20 1 50 30 0",
          "expectedOutput": "Sum: 30\nSum: 80\nCalculator closed."
        },
        {
          "input": "5 7 0",
          "expectedOutput": "Sum: 12\nCalculator closed."
        }
      ],
      "thinkFirst": "1. int cont;\n2. do {\n3.   int a = input.nextInt(); int b = input.nextInt();\n4.   print Sum:  + (a + b);\n5.   cont = input.nextInt();\n6. } while (cont == 1);\n7. print Calculator closed.",
      "syntaxReminder": "do {\n    // calculate\n    cont = input.nextInt();\n} while (cont == 1);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int cont;\n        // Write calculator loop\n        \n    }\n}",
      "hints": [
        "Read a and b, calculate and print their sum.",
        "Read the continue flag: cont = input.nextInt();",
        "Loop while cont == 1; and print \"Calculator closed.\" after exit."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int cont;\n        do {\n            int a = input.nextInt();\n            int b = input.nextInt();\n            System.out.println(\"Sum: \" + (a + b));\n            cont = input.nextInt();\n        } while (cont == 1);\n        System.out.println(\"Calculator closed.\");\n    }\n}",
      "explanation": "Guarantees at least 1 calculation round, querying user continuation on each cycle.",
      "xpReward": 45
    },
    {
      "id": 211,
      "stageId": 3,
      "title": "Sum Until Negative Number",
      "scenario": "Keep summing numbers entered by the user until a negative number (< 0) is encountered. Do NOT include the negative number in the sum!",
      "task": "Read numbers in a do-while loop. If number >= 0, add to sum. Loop while number >= 0. Print \"Positive sum: X\".",
      "testCases": [
        {
          "input": "10 20 30 -1",
          "expectedOutput": "Positive sum: 60"
        },
        {
          "input": "-5",
          "expectedOutput": "Positive sum: 0"
        }
      ],
      "thinkFirst": "1. int sum = 0, n;\n2. do {\n3.   n = input.nextInt();\n4.   if (n >= 0) sum += n;\n5. } while (n >= 0);\n6. print Positive sum: X",
      "syntaxReminder": "do {\n    n = input.nextInt();\n    if (n >= 0) sum += n;\n} while (n >= 0);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int sum = 0;\n        int n;\n        // Sum until negative\n        \n    }\n}",
      "hints": [
        "Read n inside do.",
        "Only add to sum if n >= 0.",
        "Loop condition: while (n >= 0);"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int sum = 0;\n        int n;\n        do {\n            n = input.nextInt();\n            if (n >= 0) {\n                sum += n;\n            }\n        } while (n >= 0);\n        System.out.println(\"Positive sum: \" + sum);\n    }\n}",
      "explanation": "Terminates on the first negative sentinel, keeping sum clean.",
      "xpReward": 35
    },
    {
      "id": 212,
      "stageId": 3,
      "title": "Zero-Safe Rocket Countdown",
      "scenario": "Print a countdown from N down to 0, followed by \"Launch!\". Must work safely even if N = 0 (printing \"0\" then \"Launch!\").",
      "task": "Read integer N from Scanner. Using do-while, print N, decrement N, and loop while N >= 0. Then print \"Launch!\".",
      "testCases": [
        {
          "input": "3",
          "expectedOutput": "3\n2\n1\n0\nLaunch!"
        },
        {
          "input": "0",
          "expectedOutput": "0\nLaunch!"
        }
      ],
      "thinkFirst": "1. int n = input.nextInt();\n2. do {\n3.   print n;\n4.   n--;\n5. } while (n >= 0);\n6. print Launch!",
      "syntaxReminder": "do {\n    System.out.println(n);\n    n--;\n} while (n >= 0);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        // Zero-safe countdown\n        \n    }\n}",
      "hints": [
        "Inside do: print n, then n--;",
        "Condition: while (n >= 0);",
        "Print \"Launch!\" outside the loop."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        do {\n            System.out.println(n);\n            n--;\n        } while (n >= 0);\n        System.out.println(\"Launch!\");\n    }\n}",
      "explanation": "For N = 0, prints 0, n becomes -1, condition -1 >= 0 is false, then prints Launch!.",
      "xpReward": 30
    },
    {
      "id": 213,
      "stageId": 3,
      "title": "Convert Decimal to Binary",
      "scenario": "Convert a decimal number to binary by repeatedly dividing by 2 and collecting remainders. Must handle 0 correctly (0 in binary is \"0\")!",
      "task": "Read N from Scanner. Using do-while, prepend (N % 2) to a String binary: binary = (N % 2) + binary; N /= 2; loop while N > 0. Print \"Binary: \" + binary.",
      "testCases": [
        {
          "input": "13",
          "expectedOutput": "Binary: 1101"
        },
        {
          "input": "0",
          "expectedOutput": "Binary: 0"
        },
        {
          "input": "8",
          "expectedOutput": "Binary: 1000"
        }
      ],
      "thinkFirst": "1. String bin = \"\";\n2. do {\n3.   bin = (n % 2) + bin;\n4.   n /= 2;\n5. } while (n > 0);\n6. print Binary:  + bin",
      "syntaxReminder": "String bin = \"\";\ndo {\n    bin = (n % 2) + bin;\n    n /= 2;\n} while (n > 0);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        String bin = \"\";\n        // Convert to binary with do-while\n        \n    }\n}",
      "hints": [
        "Prepend remainder to string: bin = (n % 2) + bin;",
        "Divide by 2: n /= 2;",
        "Loop while n > 0. Because of do-while, input 0 naturally gives \"0\"!"
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        String bin = \"\";\n        do {\n            bin = (n % 2) + bin;\n            n /= 2;\n        } while (n > 0);\n        System.out.println(\"Binary: \" + bin);\n    }\n}",
      "explanation": "13 / 2 gives remainders 1, 0, 1, 1 -> \"1101\". Handled 0 cleanly because do-while runs first.",
      "xpReward": 40
    },
    {
      "id": 214,
      "stageId": 3,
      "title": "Digital Root (Repeated Digit Sum)",
      "scenario": "Repeatedly sum digits until the result is a single digit (0-9). E.g. 9875 -> 9+8+7+5 = 29 -> 2+9 = 11 -> 1+1 = 2.",
      "task": "Read N from Scanner. Using do-while, repeatedly compute sum of digits of N while N >= 10. Print \"Digital root: X\".",
      "testCases": [
        {
          "input": "9875",
          "expectedOutput": "Digital root: 2"
        },
        {
          "input": "456",
          "expectedOutput": "Digital root: 6"
        },
        {
          "input": "7",
          "expectedOutput": "Digital root: 7"
        }
      ],
      "thinkFirst": "1. do {\n2.   int sum = 0;\n3.   while (n > 0) { sum += n % 10; n /= 10; }\n4.   n = sum;\n5. } while (n >= 10);\n6. print Digital root:  + n",
      "syntaxReminder": "do {\n    // sum digits of n\n    n = sum;\n} while (n >= 10);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        // Calculate digital root\n        \n    }\n}",
      "hints": [
        "Outer do-while checks: while (n >= 10);",
        "Inner loop calculates digit sum of current n.",
        "Assign n = sum and repeat until single digit."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int n = input.nextInt();\n        do {\n            int sum = 0;\n            int temp = n;\n            while (temp > 0) {\n                sum += temp % 10;\n                temp /= 10;\n            }\n            n = sum;\n        } while (n >= 10);\n        System.out.println(\"Digital root: \" + n);\n    }\n}",
      "explanation": "9875 -> 29 -> 11 -> 2. The outer do-while runs until n is less than 10.",
      "xpReward": 40
    },
    {
      "id": 215,
      "stageId": 3,
      "isBoss": true,
      "title": "👑 ULTIMATE DO-WHILE BOSS: Mini ATM Menu",
      "scenario": "Build a full Bank of Ceylon Mini ATM simulation! Balance starts at Rs. 5000. Loop menu until user chooses 4 (Exit):\n1 Deposit (read amount, add to balance)\n2 Withdraw (read amount; if amount <= balance deduct, else print \"Insufficient balance!\")\n3 Check balance (print \"Current Balance: Rs. X\")\n4 Exit (print \"Thank you for using BOC ATM. Goodbye!\")",
      "task": "Implement the full ATM menu with balance starting at 5000. Follow the exact prompts and prints.",
      "testCases": [
        {
          "input": "1 2000 3 2 1000 3 4",
          "expectedOutput": "Deposited: Rs. 2000\nCurrent Balance: Rs. 7000\nWithdrawn: Rs. 1000\nCurrent Balance: Rs. 6000\nThank you for using BOC ATM. Goodbye!"
        },
        {
          "input": "2 8000 3 4",
          "expectedOutput": "Insufficient balance!\nCurrent Balance: Rs. 5000\nThank you for using BOC ATM. Goodbye!"
        }
      ],
      "thinkFirst": "1. int bal = 5000, choice;\n2. do {\n3.   choice = input.nextInt();\n4.   if (choice == 1) { int amt = input.nextInt(); bal += amt; print Deposited: Rs.  + amt; }\n5.   else if (choice == 2) { int amt = input.nextInt(); if (amt <= bal) { bal -= amt; print Withdrawn: Rs.  + amt; } else print Insufficient balance!; }\n6.   else if (choice == 3) print Current Balance: Rs.  + bal;\n7. } while (choice != 4);\n8. print Thank you for using BOC ATM. Goodbye!",
      "syntaxReminder": "do {\n    choice = input.nextInt();\n    // handle 1, 2, 3\n} while (choice != 4);",
      "starterCode": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int balance = 5000;\n        int choice;\n        // Write the Ultimate Mini ATM Boss solution!\n        \n    }\n}",
      "hints": [
        "Initialize balance = 5000.",
        "Read choice each cycle. Handle 1 (Deposit), 2 (Withdraw with balance check), and 3 (Check balance).",
        "Loop while choice != 4 and print exit message when 4 is entered."
      ],
      "modelSolution": "import java.util.Scanner;\n\nclass Example {\n    public static void main(String args[]) {\n        Scanner input = new Scanner(System.in);\n        int balance = 5000;\n        int choice;\n        do {\n            choice = input.nextInt();\n            if (choice == 1) {\n                int amt = input.nextInt();\n                balance += amt;\n                System.out.println(\"Deposited: Rs. \" + amt);\n            } else if (choice == 2) {\n                int amt = input.nextInt();\n                if (amt <= balance) {\n                    balance -= amt;\n                    System.out.println(\"Withdrawn: Rs. \" + amt);\n                } else {\n                    System.out.println(\"Insufficient balance!\");\n                }\n            } else if (choice == 3) {\n                System.out.println(\"Current Balance: Rs. \" + balance);\n            }\n        } while (choice != 4);\n        System.out.println(\"Thank you for using BOC ATM. Goodbye!\");\n    }\n}",
      "explanation": "The classic ATM post-test menu loop: keeps interacting with the customer until they explicitly exit with option 4.",
      "xpReward": 60
    }
  ]
};
