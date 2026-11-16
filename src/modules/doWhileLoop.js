/**
 * ============================================================================
 * MODULE: Do-While Loop Mastery (Real-Life Scenario Edition)
 * ============================================================================
 * Guaranteed Execution Repetition • 3 Progressive Stages • 15 Real-Life Scenarios
 * ============================================================================
 */

export const doWhileLoopModule = {
  id: 'do-while',
  title: 'Do-While Loop Mastery',
  icon: 'RotateCw',
  badge: 'Guaranteed First Run',
  description: 'Master post-test loops guaranteed to execute at least once: ATM menus, user retry prompts, dice rolling, and input validation.',
  loopType: 'do-while',
  totalChallenges: 15,

  stages: [
    { id: 1, title: 'Stage 1: Guaranteed First Run & Retries', description: 'Experience the core power of do-while: always executing once before checking conditions.', minChallengeId: 201, maxChallengeId: 205 },
    { id: 2, title: 'Stage 2: Validation & Accumulators', description: 'Real-world counters, temperature regulators, and checkout totals with at least one cycle.', minChallengeId: 206, maxChallengeId: 210 },
    { id: 3, title: 'Stage 3: Interactive Simulations', description: 'Simulate seat bookings, elevator descent, telemetry pings, and coin refund dispensers.', minChallengeId: 211, maxChallengeId: 215 },
  ],

  lessons: [
    {
      id: 'dowhile-lesson-1',
      title: 'Post-Test vs Pre-Test: The Big Difference',
      duration: '3 min read',
      summary: 'Why do-while is unique among all Java loops.',
      content: `
### What Makes Do-While Special?
- **\`for\` & \`while\` loops** are **pre-test** loops. They test the condition **FIRST**. If the condition is false right away, the loop body runs **0 times**.
- A **\`do-while\` loop** is a **post-test** loop. It executes the body **FIRST**, and only checks the condition at the end.
- **Guarantee:** A \`do-while\` loop is guaranteed to execute **at least once**, no matter what!

\`\`\`java
int score = 0;

// Even though score == 0, this will run 1 time!
do {
    System.out.println("Welcome to the Game!");
} while (score > 100);
\`\`\`
      `
    },
    {
      id: 'dowhile-lesson-2',
      title: 'Anatomy of a Do-While Loop',
      duration: '3 min read',
      summary: 'The structure and the famous semicolon trap.',
      content: `
\`\`\`java
int count = 1; // 1. Initialization (before loop)

do {
    System.out.println(count);
    count++;   // 2. State update inside body
} while (count <= 3); // 3. Condition + MANDATORY SEMICOLON (;)
\`\`\`

> ⚠️ **THE #1 JAVA BEGINNER MISTAKE:**
> Notice the **semicolon \`;\`** at the very end of \`while (condition);\`!
> \`for\` and \`while\` loops do NOT end with a semicolon, but \`do-while\` **MUST** have a semicolon at the end!
      `
    },
    {
      id: 'dowhile-lesson-3',
      title: 'The Real-World "Prompt & Retry" Pattern',
      duration: '4 min read',
      summary: 'Where professional software engineers use do-while.',
      content: `
In real software, you frequently need to:
1. Show a menu to a user.
2. Ask for input / attempt a login.
3. Validate if the input was correct.
4. If wrong, repeat!

Because you **must ask the user at least once** before checking their answer, \`do-while\` is the natural real-world choice:

\`\`\`java
int attempt = 1;
do {
    System.out.println("PIN Check: Attempt " + attempt);
    attempt++;
} while (attempt <= 3);
\`\`\`
      `
    }
  ],

  challenges: [
    // ------------------------------------------------------------------------
    // STAGE 1: GUARANTEED FIRST RUN & RETRIES (201 to 205)
    // ------------------------------------------------------------------------
    {
      id: 201,
      stageId: 1,
      isBoss: false,
      loopType: 'do-while',
      title: 'ATM Welcome Menu',
      scenario: 'An ATM terminal must always show the welcome menu to a customer at least once when their card is inserted, even if they immediately exit (choice = 0).',
      task: 'Initialize int choice = 0. Using a do-while loop, print "ATM Menu Displayed". In the while condition, check choice != 0. Notice that even though choice is 0 from the start, the menu executes once!',
      sampleOutput: `ATM Menu Displayed`,
      expectedOutput: `ATM Menu Displayed`,
      thinkFirst: [
        '1. Initialize choice: int choice = 0;',
        '2. Open do block: do { ... }',
        '3. Inside do: System.out.println("ATM Menu Displayed");',
        '4. While condition with trailing semicolon: while (choice != 0);'
      ],
      syntaxReminder: `int choice = 0;\ndo {\n    System.out.println("ATM Menu Displayed");\n} while (choice != 0);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Demonstrate do-while executing once even when condition is false!\n        \n    }\n}`,
      hints: [
        'Start with: int choice = 0;',
        'Inside do { ... }: print "ATM Menu Displayed"',
        'End with: } while (choice != 0); (Do not forget the semicolon!)'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int choice = 0;\n        do {\n            System.out.println("ATM Menu Displayed");\n        } while (choice != 0);\n    }\n}`,
      explanation: [
        'The do block executes first before condition evaluation.',
        'choice != 0 evaluates to false immediately, ending the loop after 1 run.'
      ],
      xpReward: 35
    },

    {
      id: 202,
      stageId: 1,
      isBoss: false,
      loopType: 'do-while',
      title: 'Board Game Dice Roll',
      scenario: 'In a board game, a player must roll the dice at least once. If the roll value is under 4, they roll again (simulating rolls 1, 2, 3).',
      task: 'Initialize int roll = 1. Inside a do-while loop, print "Rolled: " + roll. Increment roll++. Keep looping while roll < 4. After the loop, print "Turn finished!".',
      sampleOutput: `Rolled: 1\nRolled: 2\nRolled: 3\nTurn finished!`,
      expectedOutput: `Rolled: 1\nRolled: 2\nRolled: 3\nTurn finished!`,
      thinkFirst: [
        '1. int roll = 1;',
        '2. do { print "Rolled: " + roll; roll++; }',
        '3. while (roll < 4);',
        '4. Outside the loop: print "Turn finished!";'
      ],
      syntaxReminder: `int roll = 1;\ndo {\n    System.out.println("Rolled: " + roll);\n    roll++;\n} while (roll < 4);\nSystem.out.println("Turn finished!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Simulate dice rolls 1 to 3 with do-while, then finish turn\n        \n    }\n}`,
      hints: [
        'Initialize: int roll = 1;',
        'Inside do block: roll++;',
        'Condition: while (roll < 4); then print "Turn finished!" after.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int roll = 1;\n        do {\n            System.out.println("Rolled: " + roll);\n            roll++;\n        } while (roll < 4);\n        System.out.println("Turn finished!");\n    }\n}`,
      explanation: [
        'Rolls 1, 2, and 3 are printed.',
        'When roll becomes 4, the condition roll < 4 is false and the loop terminates.'
      ],
      xpReward: 35
    },

    {
      id: 203,
      stageId: 1,
      isBoss: false,
      loopType: 'do-while',
      title: 'Coffee Machine Dispenser',
      scenario: 'An espresso barista machine brews cups of coffee on demand. It must brew at least 1 cup, and continues until cup count reaches 3.',
      task: 'Initialize int cup = 1. Using a do-while loop, print "Brewing cup " + cup and increment cup++. Continue while cup <= 3. Finally print "Order ready!".',
      sampleOutput: `Brewing cup 1\nBrewing cup 2\nBrewing cup 3\nOrder ready!`,
      expectedOutput: `Brewing cup 1\nBrewing cup 2\nBrewing cup 3\nOrder ready!`,
      thinkFirst: [
        '1. int cup = 1;',
        '2. do { print "Brewing cup " + cup; cup++; }',
        '3. while (cup <= 3);',
        '4. Print "Order ready!" after the loop.'
      ],
      syntaxReminder: `int cup = 1;\ndo {\n    System.out.println("Brewing cup " + cup);\n    cup++;\n} while (cup <= 3);\nSystem.out.println("Order ready!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Brew cups 1 through 3, then announce order ready\n        \n    }\n}`,
      hints: [
        'Condition is cup <= 3',
        'Increment cup inside the loop: cup++;',
        'Print "Order ready!" after the while condition semicolon.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int cup = 1;\n        do {\n            System.out.println("Brewing cup " + cup);\n            cup++;\n        } while (cup <= 3);\n        System.out.println("Order ready!");\n    }\n}`,
      explanation: [
        'The loop iterates for cup = 1, 2, 3.',
        'After cup reaches 4, condition fails and Order ready! is output.'
      ],
      xpReward: 35
    },

    {
      id: 204,
      stageId: 1,
      isBoss: false,
      loopType: 'do-while',
      title: 'Speaker Volume Knob',
      scenario: 'You turn the volume button on a Bluetooth speaker. It boosts the volume from level 10 up to level 14 in increments of 1.',
      task: 'Initialize int volume = 10. Using a do-while loop, print "Volume: " + volume, then add 1 to volume (volume++). Continue while volume <= 14.',
      sampleOutput: `Volume: 10\nVolume: 11\nVolume: 12\nVolume: 13\nVolume: 14`,
      expectedOutput: `Volume: 10\nVolume: 11\nVolume: 12\nVolume: 13\nVolume: 14`,
      thinkFirst: [
        '1. int volume = 10;',
        '2. do { System.out.println("Volume: " + volume); volume++; }',
        '3. while (volume <= 14);'
      ],
      syntaxReminder: `int volume = 10;\ndo {\n    System.out.println("Volume: " + volume);\n    volume++;\n} while (volume <= 14);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Increase volume from 10 to 14 using do-while\n        \n    }\n}`,
      hints: [
        'Start volume at 10.',
        'Print "Volume: " + volume inside the do block.',
        'While condition: volume <= 14'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int volume = 10;\n        do {\n            System.out.println("Volume: " + volume);\n            volume++;\n        } while (volume <= 14);\n    }\n}`,
      explanation: [
        'Outputs volume levels from 10 through 14 inclusive.'
      ],
      xpReward: 35
    },

    {
      id: 205,
      stageId: 1,
      isBoss: true,
      loopType: 'do-while',
      title: '👑 Boss: Cinema Age Verification',
      scenario: 'A movie theater gate checks customer age eligibility for a PG-13 film. The prompt runs at least once, testing age increments from 11 up until age reaches 14.',
      task: 'Initialize int age = 11. Using a do-while loop, print "Age " + age + ": Underage retry". Increment age++. Continue while age < 14. Once the loop ends, print "Age 14: Access granted!".',
      sampleOutput: `Age 11: Underage retry\nAge 12: Underage retry\nAge 13: Underage retry\nAge 14: Access granted!`,
      expectedOutput: `Age 11: Underage retry\nAge 12: Underage retry\nAge 13: Underage retry\nAge 14: Access granted!`,
      thinkFirst: [
        '1. int age = 11;',
        '2. do { print "Age " + age + ": Underage retry"; age++; }',
        '3. while (age < 14);',
        '4. Print "Age 14: Access granted!" outside loop.'
      ],
      syntaxReminder: `int age = 11;\ndo {\n    System.out.println("Age " + age + ": Underage retry");\n    age++;\n} while (age < 14);\nSystem.out.println("Age 14: Access granted!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Check age from 11 while < 14, then print Access granted!\n        \n    }\n}`,
      hints: [
        'Initial value: int age = 11;',
        'Loop condition: while (age < 14);',
        'Final message prints after loop ends: "Age 14: Access granted!"'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int age = 11;\n        do {\n            System.out.println("Age " + age + ": Underage retry");\n            age++;\n        } while (age < 14);\n        System.out.println("Age 14: Access granted!");\n    }\n}`,
      explanation: [
        'The loop repeats for ages 11, 12, 13.',
        'At age 14, condition fails and access is granted!'
      ],
      xpReward: 45
    },

    // ------------------------------------------------------------------------
    // STAGE 2: VALIDATION & ACCUMULATORS (206 to 210)
    // ------------------------------------------------------------------------
    {
      id: 206,
      stageId: 2,
      isBoss: false,
      loopType: 'do-while',
      title: 'Supermarket Basket Scanner',
      scenario: 'A cashier scans items into the shopping cart. Each item costs Rs. 150. Track the running total for 3 items (item 1 to 3).',
      task: 'Initialize int item = 1, int total = 0. Using a do-while loop, add 150 to total, print "Item " + item + " Total: Rs. " + total, and increment item++. Continue while item <= 3.',
      sampleOutput: `Item 1 Total: Rs. 150\nItem 2 Total: Rs. 300\nItem 3 Total: Rs. 450`,
      expectedOutput: `Item 1 Total: Rs. 150\nItem 2 Total: Rs. 300\nItem 3 Total: Rs. 450`,
      thinkFirst: [
        '1. int item = 1; int total = 0;',
        '2. do { total += 150; print Item and total; item++; }',
        '3. while (item <= 3);'
      ],
      syntaxReminder: `int item = 1;\nint total = 0;\ndo {\n    total += 150;\n    System.out.println("Item " + item + " Total: Rs. " + total);\n    item++;\n} while (item <= 3);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Accumulate 3 items at Rs. 150 each using do-while\n        \n    }\n}`,
      hints: [
        'Keep two variables: item = 1 and total = 0.',
        'Add 150 to total on each iteration: total += 150;',
        'Condition: while (item <= 3);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int item = 1;\n        int total = 0;\n        do {\n            total += 150;\n            System.out.println("Item " + item + " Total: Rs. " + total);\n            item++;\n        } while (item <= 3);\n    }\n}`,
      explanation: [
        'Item 1: total = 150',
        'Item 2: total = 300',
        'Item 3: total = 450'
      ],
      xpReward: 35
    },

    {
      id: 207,
      stageId: 2,
      isBoss: false,
      loopType: 'do-while',
      title: 'Smart Thermostat Cooling',
      scenario: 'An air conditioner turns on to lower a room temperature from 26°C down to 20°C, dropping 2°C per cooling cycle.',
      task: 'Initialize int temp = 26. In a do-while loop, print "Temp: " + temp + "C". Decrement temp by 2 (temp -= 2). Continue while temp >= 20. After the loop, print "Target temp reached!".',
      sampleOutput: `Temp: 26C\nTemp: 24C\nTemp: 22C\nTemp: 20C\nTarget temp reached!`,
      expectedOutput: `Temp: 26C\nTemp: 24C\nTemp: 22C\nTemp: 20C\nTarget temp reached!`,
      thinkFirst: [
        '1. int temp = 26;',
        '2. do { print "Temp: " + temp + "C"; temp -= 2; }',
        '3. while (temp >= 20);',
        '4. Print "Target temp reached!" after the loop.'
      ],
      syntaxReminder: `int temp = 26;\ndo {\n    System.out.println("Temp: " + temp + "C");\n    temp -= 2;\n} while (temp >= 20);\nSystem.out.println("Target temp reached!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Cool room from 26C to 20C by 2C steps, then print reached\n        \n    }\n}`,
      hints: [
        'Initialize temp = 26.',
        'Step down: temp -= 2;',
        'Loop condition: while (temp >= 20);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int temp = 26;\n        do {\n            System.out.println("Temp: " + temp + "C");\n            temp -= 2;\n        } while (temp >= 20);\n        System.out.println("Target temp reached!");\n    }\n}`,
      explanation: [
        'Prints temperatures: 26C, 24C, 22C, 20C.',
        'After 20C, temp drops to 18, so temp >= 20 is false.'
      ],
      xpReward: 35
    },

    {
      id: 208,
      stageId: 2,
      isBoss: false,
      loopType: 'do-while',
      title: 'Game Level Retry Counter',
      scenario: 'A player fails a tricky platformer jump and uses retry lives. They start on Attempt 1 and get up to Attempt 4 before losing.',
      task: 'Initialize int attempt = 1. Using a do-while loop, print "Attempt " + attempt + ": Try again". Increment attempt++. Keep looping while attempt <= 4. Afterwards print "Game Over!".',
      sampleOutput: `Attempt 1: Try again\nAttempt 2: Try again\nAttempt 3: Try again\nAttempt 4: Try again\nGame Over!`,
      expectedOutput: `Attempt 1: Try again\nAttempt 2: Try again\nAttempt 3: Try again\nAttempt 4: Try again\nGame Over!`,
      thinkFirst: [
        '1. int attempt = 1;',
        '2. do { print "Attempt " + attempt + ": Try again"; attempt++; }',
        '3. while (attempt <= 4);',
        '4. Print "Game Over!" after loop.'
      ],
      syntaxReminder: `int attempt = 1;\ndo {\n    System.out.println("Attempt " + attempt + ": Try again");\n    attempt++;\n} while (attempt <= 4);\nSystem.out.println("Game Over!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Count attempts 1 to 4, then print Game Over!\n        \n    }\n}`,
      hints: [
        'Initialize attempt = 1',
        'Increment attempt++ inside the do body',
        'Condition: while (attempt <= 4);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int attempt = 1;\n        do {\n            System.out.println("Attempt " + attempt + ": Try again");\n            attempt++;\n        } while (attempt <= 4);\n        System.out.println("Game Over!");\n    }\n}`,
      explanation: [
        'Runs for attempts 1, 2, 3, and 4.',
        'Prints Game Over! once the retry limit is exhausted.'
      ],
      xpReward: 35
    },

    {
      id: 209,
      stageId: 2,
      isBoss: false,
      loopType: 'do-while',
      title: 'Fuel Injection Pulse',
      scenario: 'An engine fuel injector sends measured fuel pulses of 5ml. Start with int fuel = 5. Pulse until total fuel reaches 25ml.',
      task: 'Initialize int fuel = 5. Using a do-while loop, print "Fuel injected: " + fuel + "ml". Add 5 to fuel (fuel += 5). Continue while fuel <= 25.',
      sampleOutput: `Fuel injected: 5ml\nFuel injected: 10ml\nFuel injected: 15ml\nFuel injected: 20ml\nFuel injected: 25ml`,
      expectedOutput: `Fuel injected: 5ml\nFuel injected: 10ml\nFuel injected: 15ml\nFuel injected: 20ml\nFuel injected: 25ml`,
      thinkFirst: [
        '1. int fuel = 5;',
        '2. do { print "Fuel injected: " + fuel + "ml"; fuel += 5; }',
        '3. while (fuel <= 25);'
      ],
      syntaxReminder: `int fuel = 5;\ndo {\n    System.out.println("Fuel injected: " + fuel + "ml");\n    fuel += 5;\n} while (fuel <= 25);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Inject fuel from 5ml to 25ml by 5ml steps using do-while\n        \n    }\n}`,
      hints: [
        'Initialize fuel = 5',
        'Increment by 5: fuel += 5;',
        'Condition: while (fuel <= 25);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int fuel = 5;\n        do {\n            System.out.println("Fuel injected: " + fuel + "ml");\n            fuel += 5;\n        } while (fuel <= 25);\n    }\n}`,
      explanation: [
        'Increments by 5: 5, 10, 15, 20, 25.'
      ],
      xpReward: 35
    },

    {
      id: 210,
      stageId: 2,
      isBoss: true,
      loopType: 'do-while',
      title: '👑 Boss: Security PIN Validator',
      scenario: 'A bank vault PIN keypad gives the user up to 3 tries. Simulate entering incorrect attempts 1, 2, and 3, then locking out the keypad.',
      task: 'Initialize int attempt = 1. Using a do-while loop, print "Attempt " + attempt + ": Incorrect PIN". Increment attempt++. Continue while attempt <= 3. After the loop, print "Keypad locked! Contact security.". ',
      sampleOutput: `Attempt 1: Incorrect PIN\nAttempt 2: Incorrect PIN\nAttempt 3: Incorrect PIN\nKeypad locked! Contact security.`,
      expectedOutput: `Attempt 1: Incorrect PIN\nAttempt 2: Incorrect PIN\nAttempt 3: Incorrect PIN\nKeypad locked! Contact security.`,
      thinkFirst: [
        '1. int attempt = 1;',
        '2. do { print "Attempt " + attempt + ": Incorrect PIN"; attempt++; }',
        '3. while (attempt <= 3);',
        '4. Print "Keypad locked! Contact security." after loop.'
      ],
      syntaxReminder: `int attempt = 1;\ndo {\n    System.out.println("Attempt " + attempt + ": Incorrect PIN");\n    attempt++;\n} while (attempt <= 3);\nSystem.out.println("Keypad locked! Contact security.");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Print attempts 1 to 3 with Incorrect PIN, then lockout warning\n        \n    }\n}`,
      hints: [
        'Condition is while (attempt <= 3);',
        'Increment attempt inside the loop body',
        'The lockout message prints after the while loop curly braces and semicolon'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int attempt = 1;\n        do {\n            System.out.println("Attempt " + attempt + ": Incorrect PIN");\n            attempt++;\n        } while (attempt <= 3);\n        System.out.println("Keypad locked! Contact security.");\n    }\n}`,
      explanation: [
        'Attempts 1, 2, and 3 are logged.',
        'When attempt reaches 4, the condition attempt <= 3 is false and lockout triggers.'
      ],
      xpReward: 45
    },

    // ------------------------------------------------------------------------
    // STAGE 3: INTERACTIVE SIMULATIONS (211 to 215)
    // ------------------------------------------------------------------------
    {
      id: 211,
      stageId: 3,
      isBoss: false,
      loopType: 'do-while',
      title: 'Cinema Seat Reservation',
      scenario: 'A ticket agent reserves 4 cinema seats one by one starting from Seat 1 up to Seat 4.',
      task: 'Initialize int seat = 1. Using a do-while loop, print "Seat " + seat + " reserved". Increment seat++. Continue while seat <= 4.',
      sampleOutput: `Seat 1 reserved\nSeat 2 reserved\nSeat 3 reserved\nSeat 4 reserved`,
      expectedOutput: `Seat 1 reserved\nSeat 2 reserved\nSeat 3 reserved\nSeat 4 reserved`,
      thinkFirst: [
        '1. int seat = 1;',
        '2. do { print "Seat " + seat + " reserved"; seat++; }',
        '3. while (seat <= 4);'
      ],
      syntaxReminder: `int seat = 1;\ndo {\n    System.out.println("Seat " + seat + " reserved");\n    seat++;\n} while (seat <= 4);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Reserve seats 1 to 4 using do-while\n        \n    }\n}`,
      hints: [
        'Initialize seat = 1',
        'Inside do: seat++',
        'Condition: while (seat <= 4);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int seat = 1;\n        do {\n            System.out.println("Seat " + seat + " reserved");\n            seat++;\n        } while (seat <= 4);\n    }\n}`,
      explanation: [
        'Prints reservations for seats 1, 2, 3, 4.'
      ],
      xpReward: 35
    },

    {
      id: 212,
      stageId: 3,
      isBoss: false,
      loopType: 'do-while',
      title: 'Radio Telemetry Ping',
      scenario: 'A satellite dish sends recurring telemetry pings every 50ms from 50ms to 200ms.',
      task: 'Initialize int ping = 50. Using a do-while loop, print "Ping: " + ping + "ms". Add 50 to ping (ping += 50). Continue while ping <= 200. After the loop, print "Sync complete!".',
      sampleOutput: `Ping: 50ms\nPing: 100ms\nPing: 150ms\nPing: 200ms\nSync complete!`,
      expectedOutput: `Ping: 50ms\nPing: 100ms\nPing: 150ms\nPing: 200ms\nSync complete!`,
      thinkFirst: [
        '1. int ping = 50;',
        '2. do { print "Ping: " + ping + "ms"; ping += 50; }',
        '3. while (ping <= 200);',
        '4. Print "Sync complete!" after the loop.'
      ],
      syntaxReminder: `int ping = 50;\ndo {\n    System.out.println("Ping: " + ping + "ms");\n    ping += 50;\n} while (ping <= 200);\nSystem.out.println("Sync complete!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Ping every 50ms up to 200ms, then print Sync complete!\n        \n    }\n}`,
      hints: [
        'Start with ping = 50',
        'Step by 50: ping += 50;',
        'Condition: while (ping <= 200);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int ping = 50;\n        do {\n            System.out.println("Ping: " + ping + "ms");\n            ping += 50;\n        } while (ping <= 200);\n        System.out.println("Sync complete!");\n    }\n}`,
      explanation: [
        'Pings at 50ms, 100ms, 150ms, 200ms.',
        'At 250ms, the loop ends and announces Sync complete!'
      ],
      xpReward: 35
    },

    {
      id: 213,
      stageId: 3,
      isBoss: false,
      loopType: 'do-while',
      title: 'Elevator Floor Descent',
      scenario: 'An elevator on floor 5 travels down floor by floor until floor 1, announcing each floor along the way.',
      task: 'Initialize int floor = 5. In a do-while loop, print "Floor: " + floor. Decrement floor--. Continue while floor >= 1. Afterwards print "Ground floor reached!".',
      sampleOutput: `Floor: 5\nFloor: 4\nFloor: 3\nFloor: 2\nFloor: 1\nGround floor reached!`,
      expectedOutput: `Floor: 5\nFloor: 4\nFloor: 3\nFloor: 2\nFloor: 1\nGround floor reached!`,
      thinkFirst: [
        '1. int floor = 5;',
        '2. do { print "Floor: " + floor; floor--; }',
        '3. while (floor >= 1);',
        '4. Print "Ground floor reached!" after loop.'
      ],
      syntaxReminder: `int floor = 5;\ndo {\n    System.out.println("Floor: " + floor);\n    floor--;\n} while (floor >= 1);\nSystem.out.println("Ground floor reached!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Descend from floor 5 down to 1, then announce arrival\n        \n    }\n}`,
      hints: [
        'Initialize floor = 5',
        'Decrement floor inside loop: floor--;',
        'Condition: while (floor >= 1);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int floor = 5;\n        do {\n            System.out.println("Floor: " + floor);\n            floor--;\n        } while (floor >= 1);\n        System.out.println("Ground floor reached!");\n    }\n}`,
      explanation: [
        'Countdown from 5 down to 1.',
        'When floor becomes 0, floor >= 1 is false.'
      ],
      xpReward: 35
    },

    {
      id: 214,
      stageId: 3,
      isBoss: false,
      loopType: 'do-while',
      title: 'EV Fast Charger Voltage',
      scenario: 'A smart electric car charger delivers power in blocks of 2V, starting from 10V until reaching 18V.',
      task: 'Initialize int volt = 10. Using a do-while loop, print "Charge level: " + volt + "V". Increment volt by 2 (volt += 2). Continue while volt <= 18.',
      sampleOutput: `Charge level: 10V\nCharge level: 12V\nCharge level: 14V\nCharge level: 16V\nCharge level: 18V`,
      expectedOutput: `Charge level: 10V\nCharge level: 12V\nCharge level: 14V\nCharge level: 16V\nCharge level: 18V`,
      thinkFirst: [
        '1. int volt = 10;',
        '2. do { print "Charge level: " + volt + "V"; volt += 2; }',
        '3. while (volt <= 18);'
      ],
      syntaxReminder: `int volt = 10;\ndo {\n    System.out.println("Charge level: " + volt + "V");\n    volt += 2;\n} while (volt <= 18);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Charge from 10V to 18V by 2V steps using do-while\n        \n    }\n}`,
      hints: [
        'Initialize volt = 10',
        'Step by 2: volt += 2;',
        'Condition: while (volt <= 18);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int volt = 10;\n        do {\n            System.out.println("Charge level: " + volt + "V");\n            volt += 2;\n        } while (volt <= 18);\n    }\n}`,
      explanation: [
        'Increments 10, 12, 14, 16, 18.'
      ],
      xpReward: 35
    },

    {
      id: 215,
      stageId: 3,
      isBoss: true,
      loopType: 'do-while',
      title: '👑 ULTIMATE BOSS: Vending Machine Refund',
      scenario: 'A customer cancels a transaction. The vending machine has Rs. 40 in balance to refund, dispensing Rs. 10 coins one by one until the balance reaches 0.',
      task: 'Initialize int balance = 40. Using a do-while loop, print "Dispensed Rs. 10 coin | Remaining: Rs. " + (balance - 10). Subtract 10 from balance (balance -= 10). Continue while balance > 0. Finally print "Refund complete! Have a nice day!".',
      sampleOutput: `Dispensed Rs. 10 coin | Remaining: Rs. 30\nDispensed Rs. 10 coin | Remaining: Rs. 20\nDispensed Rs. 10 coin | Remaining: Rs. 10\nDispensed Rs. 10 coin | Remaining: Rs. 0\nRefund complete! Have a nice day!`,
      expectedOutput: `Dispensed Rs. 10 coin | Remaining: Rs. 30\nDispensed Rs. 10 coin | Remaining: Rs. 20\nDispensed Rs. 10 coin | Remaining: Rs. 10\nDispensed Rs. 10 coin | Remaining: Rs. 0\nRefund complete! Have a nice day!`,
      thinkFirst: [
        '1. int balance = 40;',
        '2. do {',
        '     print "Dispensed Rs. 10 coin | Remaining: Rs. " + (balance - 10);',
        '     balance -= 10;',
        '   } while (balance > 0);',
        '3. Print "Refund complete! Have a nice day!" outside loop.'
      ],
      syntaxReminder: `int balance = 40;\ndo {\n    System.out.println("Dispensed Rs. 10 coin | Remaining: Rs. " + (balance - 10));\n    balance -= 10;\n} while (balance > 0);\nSystem.out.println("Refund complete! Have a nice day!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Dispense Rs. 10 coins from 40 down to 0, then announce completion!\n        \n    }\n}`,
      hints: [
        'Initialize balance = 40;',
        'Remaining balance to print is (balance - 10)',
        'Subtract 10: balance -= 10; inside the loop body',
        'Condition: while (balance > 0);'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int balance = 40;\n        do {\n            System.out.println("Dispensed Rs. 10 coin | Remaining: Rs. " + (balance - 10));\n            balance -= 10;\n        } while (balance > 0);\n        System.out.println("Refund complete! Have a nice day!");\n    }\n}`,
      explanation: [
        'Dispenses 4 coins: 30 remaining, 20 remaining, 10 remaining, 0 remaining.',
        'When balance hits 0, while (balance > 0) becomes false and loop finishes.'
      ],
      xpReward: 50
    }
  ]
};
