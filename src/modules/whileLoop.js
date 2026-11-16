/**
 * ============================================================================
 * MODULE: While Loop Mastery (Real-Life Scenario Edition)
 * ============================================================================
 * Condition-Driven Repetition • 4 Progressive Stages • 20 Real-Life Scenarios
 * ============================================================================
 */

export const whileLoopModule = {
  id: 'while-loop',
  title: 'While Loop Mastery',
  icon: 'RefreshCw',
  badge: 'Condition Driven',
  description: 'Master repetition when you do NOT know the exact count in advance: digit slicing, battery drain, investment doubling, and sentinel checks.',
  loopType: 'while',
  totalChallenges: 20,

  stages: [
    { id: 1, title: 'Stage 1: Draining & Condition Counting', description: 'Depleting resources, countdowns, and bank withdrawals while resources remain.', minChallengeId: 101, maxChallengeId: 105 },
    { id: 2, title: 'Stage 2: Digit Processing & Slicing', description: 'Essential number manipulation: counting digits, summing digits, and reversing numbers.', minChallengeId: 106, maxChallengeId: 110 },
    { id: 3, title: 'Stage 3: Targets & Doubling Limits', description: 'Looping until a threshold is reached: investment doubling, boiling points, and Collatz paths.', minChallengeId: 111, maxChallengeId: 115 },
    { id: 4, title: 'Stage 4: Classic While Algorithms', description: 'Euclidean GCD, coin change dispensing, power bounds, and prime factors.', minChallengeId: 116, maxChallengeId: 120 },
  ],

  lessons: [
    {
      id: 'while-lesson-1',
      title: 'When to Use While vs For',
      duration: '3 min read',
      summary: 'The golden rule for choosing between for and while.',
      content: `
### The Golden Rule
- Use a **\`for\` loop** when you **know how many times** to repeat in advance (e.g. "repeat 10 times", "for each item in an array").
- Use a **\`while\` loop** when you **don't know how many times**, but you have a **condition to check** (e.g. "while the battery is above 0%", "while the number has digits left", "while balance >= 500").

\`\`\`java
// WHILE: Keeps running as long as fuel remains
int fuel = 30;
while (fuel > 0) {
    System.out.println("Fuel left: " + fuel + "L");
    fuel -= 10; // Must update condition variable!
}
\`\`\`
      `
    },
    {
      id: 'while-lesson-2',
      title: 'Anatomy of a While Loop',
      duration: '3 min read',
      summary: 'The 3 parts of a while loop.',
      content: `
\`\`\`java
int counter = 1; // 1. Initialization (OUTSIDE before the loop)

while (counter <= 5) { // 2. Condition (Checked at the start of every round)
    System.out.println(counter);
    counter++; // 3. Update (INSIDE the loop body!)
}
\`\`\`

> ⚠️ **CRITICAL:** If you forget to update \`counter++\` inside the while loop, the condition will stay true forever, causing an **Infinite Loop**!
      `
    },
    {
      id: 'while-lesson-3',
      title: 'The Digit Stripper Pattern (% and /)',
      duration: '4 min read',
      summary: 'The most famous while loop pattern in Java interview questions.',
      content: `
To process any positive integer digit by digit from right to left:
1. **Get last digit:** \`int digit = num % 10;\` (e.g. \`123 % 10 = 3\`)
2. **Remove last digit:** \`num = num / 10;\` (e.g. \`123 / 10 = 12\`)
3. Repeat **\`while (num > 0)\`**!

\`\`\`java
int num = 456;
while (num > 0) {
    int lastDigit = num % 10;
    System.out.println("Digit: " + lastDigit);
    num /= 10; // strips off last digit
}
\`\`\`
      `
    }
  ],

  challenges: [
    // ------------------------------------------------------------------------
    // STAGE 1: DRAINING & CONDITION COUNTING (101 to 105)
    // ------------------------------------------------------------------------
    {
      id: 101,
      stageId: 1,
      isBoss: false,
      title: 'Water Tank Leak',
      scenario: 'A storage tank contains 50 liters of water. A leak loses 10 liters every hour. Track the remaining water level until the tank is completely dry.',
      task: 'Using a while loop, initialize int level = 50. While level > 0, print "Tank level: " + level + "L" and subtract 10. After the loop, print "Tank empty!".',
      sampleOutput: `Tank level: 50L\nTank level: 40L\nTank level: 30L\nTank level: 20L\nTank level: 10L\nTank empty!`,
      expectedOutput: `Tank level: 50L\nTank level: 40L\nTank level: 30L\nTank level: 20L\nTank level: 10L\nTank empty!`,
      thinkFirst: [
        '1. int level = 50;',
        '2. while (level > 0) { ... }',
        '3. Inside loop: print "Tank level: " + level + "L" and level -= 10;',
        '4. Outside loop: print "Tank empty!";'
      ],
      syntaxReminder: `int level = 50;\nwhile (level > 0) {\n    System.out.println("Tank level: " + level + "L");\n    level -= 10;\n}\nSystem.out.println("Tank empty!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Use a while loop to drain 50L by 10L, then print "Tank empty!"\n        \n    }\n}`,
      hints: [
        'Condition: while (level > 0)',
        'Remember to decrease level: level -= 10;',
        'Print "Tank empty!" after the while loop curly brace.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int level = 50;\n        while (level > 0) {\n            System.out.println("Tank level: " + level + "L");\n            level -= 10;\n        }\n        System.out.println("Tank empty!");\n    }\n}`,
      explanation: [
        'while (level > 0) checks the water level before each hour.',
        'level -= 10 updates the state toward zero.',
        'Tank empty! runs when condition becomes false.'
      ],
      xpReward: 35
    },

    {
      id: 102,
      stageId: 1,
      isBoss: false,
      title: 'Smartphone Battery Drain',
      scenario: 'You are playing high-graphics 3D games on your phone. The battery starts at 100% and drains by 20% every hour. Stop and warn when battery drops to 20% or lower.',
      task: 'Initialize int battery = 100. While battery > 20, print "Battery: " + battery + "%" and drain 20. Then print "Low Battery Warning!".',
      sampleOutput: `Battery: 100%\nBattery: 80%\nBattery: 60%\nBattery: 40%\nLow Battery Warning!`,
      expectedOutput: `Battery: 100%\nBattery: 80%\nBattery: 60%\nBattery: 40%\nLow Battery Warning!`,
      thinkFirst: [
        '1. int battery = 100;',
        '2. while (battery > 20) { ... }',
        '3. Print and subtract 20: battery -= 20;',
        '4. After loop: print "Low Battery Warning!";'
      ],
      syntaxReminder: `int battery = 100;\nwhile (battery > 20) {\n    System.out.println("Battery: " + battery + "%");\n    battery -= 20;\n}\nSystem.out.println("Low Battery Warning!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Drain battery from 100% while > 20, then print warning\n        \n    }\n}`,
      hints: [
        'Condition is: battery > 20 (stops when battery reaches 20).',
        'Inside loop: battery -= 20;'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int battery = 100;\n        while (battery > 20) {\n            System.out.println("Battery: " + battery + "%");\n            battery -= 20;\n        }\n        System.out.println("Low Battery Warning!");\n    }\n}`,
      explanation: [
        'Iterates for 100, 80, 60, 40. When battery becomes 20, the condition fails.'
      ],
      xpReward: 35
    },

    {
      id: 103,
      stageId: 1,
      isBoss: false,
      title: 'Rocket Fuel Burn',
      scenario: 'A rocket engine has 32 tons of fuel and burns 8 tons each firing pulse as long as at least 8 tons remain.',
      task: 'int fuel = 32. While fuel >= 8, print "Pulse: " + fuel + " tons remaining" and subtract 8. After loop, print "Engines cutoff!".',
      sampleOutput: `Pulse: 32 tons remaining\nPulse: 24 tons remaining\nPulse: 16 tons remaining\nPulse: 8 tons remaining\nEngines cutoff!`,
      expectedOutput: `Pulse: 32 tons remaining\nPulse: 24 tons remaining\nPulse: 16 tons remaining\nPulse: 8 tons remaining\nEngines cutoff!`,
      thinkFirst: [
        '1. int fuel = 32;',
        '2. while (fuel >= 8);',
        '3. fuel -= 8;',
        '4. Print cutoff message.'
      ],
      syntaxReminder: `int fuel = 32;\nwhile (fuel >= 8) {\n    System.out.println("Pulse: " + fuel + " tons remaining");\n    fuel -= 8;\n}\nSystem.out.println("Engines cutoff!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Burn fuel by 8 while >= 8\n        \n    }\n}`,
      hints: [
        'Condition: while (fuel >= 8)',
        'Inside: fuel -= 8;'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int fuel = 32;\n        while (fuel >= 8) {\n            System.out.println("Pulse: " + fuel + " tons remaining");\n            fuel -= 8;\n        }\n        System.out.println("Engines cutoff!");\n    }\n}`,
      explanation: [
        'Fires 4 pulses (32, 24, 16, 8) then cuts off.'
      ],
      xpReward: 35
    },

    {
      id: 104,
      stageId: 1,
      isBoss: false,
      title: 'Elevator Descent to Lobby',
      scenario: 'An elevator descends from Floor 4 down to Floor 1 using a while loop. When reaching the bottom, announce arrival at the Lobby.',
      task: 'int floor = 4. While floor >= 1, print "Descending: Floor " + floor and decrease floor. Print "Welcome to the Lobby!" after.',
      sampleOutput: `Descending: Floor 4\nDescending: Floor 3\nDescending: Floor 2\nDescending: Floor 1\nWelcome to the Lobby!`,
      expectedOutput: `Descending: Floor 4\nDescending: Floor 3\nDescending: Floor 2\nDescending: Floor 1\nWelcome to the Lobby!`,
      thinkFirst: [
        '1. int floor = 4;',
        '2. while (floor >= 1) { ... floor--; }',
        '3. Print lobby message after loop.'
      ],
      syntaxReminder: `int floor = 4;\nwhile (floor >= 1) {\n    System.out.println("Descending: Floor " + floor);\n    floor--;\n}\nSystem.out.println("Welcome to the Lobby!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Descend floor 4 down to 1 using while\n        \n    }\n}`,
      hints: [
        'Use floor-- to step down.',
        'Condition: floor >= 1'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int floor = 4;\n        while (floor >= 1) {\n            System.out.println("Descending: Floor " + floor);\n            floor--;\n        }\n        System.out.println("Welcome to the Lobby!");\n    }\n}`,
      explanation: [
        'Descends through floors 4, 3, 2, 1 and arrives at lobby.'
      ],
      xpReward: 35
    },

    {
      id: 105,
      stageId: 1,
      isBoss: true,
      title: '👑 Stage 1 Boss: ATM Cash Withdrawal Loop',
      scenario: 'Your bank account has Rs. 4000. You make repeated ATM withdrawals of Rs. 1000 as long as your balance has at least Rs. 1000.',
      task: 'int bal = 4000. While bal >= 1000, subtract 1000 and print "Withdrew Rs. 1000. Remaining: Rs. " + bal. At the end, print "Balance below minimum withdrawal limit!".',
      sampleOutput: `Withdrew Rs. 1000. Remaining: Rs. 3000\nWithdrew Rs. 1000. Remaining: Rs. 2000\nWithdrew Rs. 1000. Remaining: Rs. 1000\nWithdrew Rs. 1000. Remaining: Rs. 0\nBalance below minimum withdrawal limit!`,
      expectedOutput: `Withdrew Rs. 1000. Remaining: Rs. 3000\nWithdrew Rs. 1000. Remaining: Rs. 2000\nWithdrew Rs. 1000. Remaining: Rs. 1000\nWithdrew Rs. 1000. Remaining: Rs. 0\nBalance below minimum withdrawal limit!`,
      thinkFirst: [
        '1. int bal = 4000;',
        '2. while (bal >= 1000);',
        '3. bal -= 1000;',
        '4. Print withdrawal line with new balance;',
        '5. After loop: print limit message.'
      ],
      syntaxReminder: `int bal = 4000;\nwhile (bal >= 1000) {\n    bal -= 1000;\n    System.out.println("Withdrew Rs. 1000. Remaining: Rs. " + bal);\n}\nSystem.out.println("Balance below minimum withdrawal limit!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // STAGE 1 BOSS (While Loop):\n        // Withdraw Rs. 1000 while bal >= 1000\n        \n    }\n}`,
      hints: [
        'Subtract 1000 before printing the remaining balance.',
        'Condition: while (bal >= 1000)'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int bal = 4000;\n        while (bal >= 1000) {\n            bal -= 1000;\n            System.out.println("Withdrew Rs. 1000. Remaining: Rs. " + bal);\n        }\n        System.out.println("Balance below minimum withdrawal limit!");\n    }\n}`,
      explanation: [
        'Performs 4 successive withdrawals of 1000 until balance reaches 0.'
      ],
      xpReward: 50
    },

    // ------------------------------------------------------------------------
    // STAGE 2: DIGIT PROCESSING & SLICING (106 to 110)
    // ------------------------------------------------------------------------
    {
      id: 106,
      stageId: 2,
      isBoss: false,
      title: 'Count Digits of an Account ID',
      scenario: 'A banking validator needs to know how many digits are in account ID 98452 using division.',
      task: 'int num = 98452. Using a while (num > 0) loop, divide num by 10 in each step and increment count. Print "Digits: " + count.',
      sampleOutput: `Digits: 5`,
      expectedOutput: `Digits: 5`,
      thinkFirst: [
        '1. int num = 98452; int count = 0;',
        '2. while (num > 0): num /= 10; count++;',
        '3. Print "Digits: " + count;'
      ],
      syntaxReminder: `int count = 0;\nwhile (num > 0) {\n    num /= 10;\n    count++;\n}\nSystem.out.println("Digits: " + count);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int num = 98452;\n        // WRITE YOUR CODE HERE:\n        // Count digits using while loop, print "Digits: 5"\n        \n    }\n}`,
      hints: [
        'In Java, integer division by 10 removes the last digit.',
        'Repeat while num > 0.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int num = 98452;\n        int count = 0;\n        while (num > 0) {\n            num /= 10;\n            count++;\n        }\n        System.out.println("Digits: " + count);\n    }\n}`,
      explanation: [
        '98452 -> 9845 -> 984 -> 98 -> 9 -> 0 (5 divisions = 5 digits).'
      ],
      xpReward: 40
    },

    {
      id: 107,
      stageId: 2,
      isBoss: false,
      title: 'Sum of Digits of an Invoice Number',
      scenario: 'An accounting checksum algorithm adds all digits of invoice number 13579 (1 + 3 + 5 + 7 + 9 = 25).',
      task: 'int num = 13579. While num > 0, extract last digit (num % 10), add to sum, and strip it (num /= 10). Print "Sum: " + sum.',
      sampleOutput: `Sum: 25`,
      expectedOutput: `Sum: 25`,
      thinkFirst: [
        '1. int num = 13579; int sum = 0;',
        '2. while (num > 0):',
        '   sum += (num % 10);',
        '   num /= 10;',
        '3. Print "Sum: " + sum;'
      ],
      syntaxReminder: `int sum = 0;\nwhile (num > 0) {\n    sum += num % 10;\n    num /= 10;\n}\nSystem.out.println("Sum: " + sum);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int num = 13579;\n        // WRITE YOUR CODE HERE:\n        // Sum digits using while loop, print "Sum: 25"\n        \n    }\n}`,
      hints: [
        'Get last digit with: num % 10',
        'Remove last digit with: num /= 10'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int num = 13579;\n        int sum = 0;\n        while (num > 0) {\n            sum += num % 10;\n            num /= 10;\n        }\n        System.out.println("Sum: " + sum);\n    }\n}`,
      explanation: [
        'Extracts 9, 7, 5, 3, 1 and adds them to sum (25).'
      ],
      xpReward: 45
    },

    {
      id: 108,
      stageId: 2,
      isBoss: false,
      title: 'Reverse a 4-Digit Security Code',
      scenario: 'A cryptographic key scrambler reverses the 4-digit code 4821 so it becomes 1284.',
      task: 'int num = 4821. Using while (num > 0), build rev = rev * 10 + (num % 10) and num /= 10. Print "Reversed: " + rev.',
      sampleOutput: `Reversed: 1284`,
      expectedOutput: `Reversed: 1284`,
      thinkFirst: [
        '1. int num = 4821; int rev = 0;',
        '2. while (num > 0):',
        '   rev = rev * 10 + (num % 10);',
        '   num /= 10;',
        '3. Print "Reversed: " + rev;'
      ],
      syntaxReminder: `int rev = 0;\nwhile (num > 0) {\n    rev = rev * 10 + (num % 10);\n    num /= 10;\n}\nSystem.out.println("Reversed: " + rev);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int num = 4821;\n        // WRITE YOUR CODE HERE:\n        // Reverse 4821 using while loop, print "Reversed: 1284"\n        \n    }\n}`,
      hints: [
        'Multiplying rev by 10 shifts existing digits to the left.',
        'Then add the new last digit: num % 10.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int num = 4821;\n        int rev = 0;\n        while (num > 0) {\n            rev = rev * 10 + (num % 10);\n            num /= 10;\n        }\n        System.out.println("Reversed: " + rev);\n    }\n}`,
      explanation: [
        'Reconstructs the reversed number mathematically.'
      ],
      xpReward: 45
    },

    {
      id: 109,
      stageId: 2,
      isBoss: false,
      title: 'Computer Memory Halving',
      scenario: 'An embedded microchip tests memory bus downscaling, starting at 128 MB and halving until 1 MB.',
      task: 'int ram = 128. While ram >= 1, print "RAM: " + ram + "MB" and divide ram by 2.',
      sampleOutput: `RAM: 128MB\nRAM: 64MB\nRAM: 32MB\nRAM: 16MB\nRAM: 8MB\nRAM: 4MB\nRAM: 2MB\nRAM: 1MB`,
      expectedOutput: `RAM: 128MB\nRAM: 64MB\nRAM: 32MB\nRAM: 16MB\nRAM: 8MB\nRAM: 4MB\nRAM: 2MB\nRAM: 1MB`,
      thinkFirst: [
        '1. int ram = 128;',
        '2. while (ram >= 1):',
        '   print line;',
        '   ram /= 2;'
      ],
      syntaxReminder: `int ram = 128;\nwhile (ram >= 1) {\n    System.out.println("RAM: " + ram + "MB");\n    ram /= 2;\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Halve RAM from 128 down to 1MB\n        \n    }\n}`,
      hints: [
        'Condition: while (ram >= 1)',
        'Halve using: ram /= 2;'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int ram = 128;\n        while (ram >= 1) {\n            System.out.println("RAM: " + ram + "MB");\n            ram /= 2;\n        }\n    }\n}`,
      explanation: [
        'Halves the value each iteration (128, 64, 32, 16, 8, 4, 2, 1).'
      ],
      xpReward: 40
    },

    {
      id: 110,
      stageId: 2,
      isBoss: true,
      title: '👑 Stage 2 Boss: Palindrome Serial Check',
      scenario: 'A warehouse scanner verifies whether the serial number 12321 reads identically backwards using a while loop.',
      task: 'int orig = 12321. Reverse a copy of orig using while loop. If orig == rev, print "12321 is PALINDROME".',
      sampleOutput: `12321 is PALINDROME`,
      expectedOutput: `12321 is PALINDROME`,
      thinkFirst: [
        '1. int orig = 12321; int temp = orig; int rev = 0;',
        '2. while (temp > 0) { rev = rev * 10 + (temp % 10); temp /= 10; }',
        '3. if (orig == rev) print orig + " is PALINDROME";'
      ],
      syntaxReminder: `int temp = orig, rev = 0;\nwhile (temp > 0) {\n    rev = rev * 10 + (temp % 10);\n    temp /= 10;\n}\nif (orig == rev) System.out.println(orig + " is PALINDROME");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int orig = 12321;\n        // STAGE 2 BOSS (While Loop):\n        // Reverse and check palindrome using while loop\n        \n    }\n}`,
      hints: [
        'Use temp copy so you do not destroy orig during division.',
        'Compare orig with rev.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int orig = 12321;\n        int temp = orig;\n        int rev = 0;\n        while (temp > 0) {\n            rev = rev * 10 + (temp % 10);\n            temp /= 10;\n        }\n        if (orig == rev) {\n            System.out.println(orig + " is PALINDROME");\n        }\n    }\n}`,
      explanation: [
        '12321 reversed is 12321, confirming symmetry.'
      ],
      xpReward: 55
    },

    // ------------------------------------------------------------------------
    // STAGE 3: TARGETS & DOUBLING LIMITS (111 to 115)
    // ------------------------------------------------------------------------
    {
      id: 111,
      stageId: 3,
      isBoss: false,
      title: 'ATM 3-PIN Attempts Lockout',
      scenario: 'An ATM card reader allows up to 3 failed PIN attempts. Track attempts 1, 2, 3 and then lock the card.',
      task: 'int attempt = 1. While attempt <= 3, print "Failed attempt: " + attempt and increment. After loop, print "Card Lockout Activated!".',
      sampleOutput: `Failed attempt: 1\nFailed attempt: 2\nFailed attempt: 3\nCard Lockout Activated!`,
      expectedOutput: `Failed attempt: 1\nFailed attempt: 2\nFailed attempt: 3\nCard Lockout Activated!`,
      thinkFirst: [
        '1. int attempt = 1;',
        '2. while (attempt <= 3) { print; attempt++; }',
        '3. After loop: print lockout notice.'
      ],
      syntaxReminder: `int attempt = 1;\nwhile (attempt <= 3) {\n    System.out.println("Failed attempt: " + attempt);\n    attempt++;\n}\nSystem.out.println("Card Lockout Activated!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Loop attempts 1 to 3, then print lockout\n        \n    }\n}`,
      hints: [
        'Condition: attempt <= 3',
        'Print lockout message after loop.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int attempt = 1;\n        while (attempt <= 3) {\n            System.out.println("Failed attempt: " + attempt);\n            attempt++;\n        }\n        System.out.println("Card Lockout Activated!");\n    }\n}`,
      explanation: [
        'Simulates security retry threshold limits.'
      ],
      xpReward: 35
    },

    {
      id: 112,
      stageId: 3,
      isBoss: false,
      title: 'Doubling Investment Goal',
      scenario: 'You invest Rs. 1000 in a high-yield fund that doubles in value every fixed period. Track it until reaching at least Rs. 8000.',
      task: 'int money = 1000. While money < 8000, print "Fund value: Rs. " + money and multiply by 2. After loop, print "Target Reached: Rs. " + money.',
      sampleOutput: `Fund value: Rs. 1000\nFund value: Rs. 2000\nFund value: Rs. 4000\nTarget Reached: Rs. 8000`,
      expectedOutput: `Fund value: Rs. 1000\nFund value: Rs. 2000\nFund value: Rs. 4000\nTarget Reached: Rs. 8000`,
      thinkFirst: [
        '1. int money = 1000;',
        '2. while (money < 8000):',
        '   print fund value;',
        '   money *= 2;',
        '3. Print target reached after loop.'
      ],
      syntaxReminder: `int money = 1000;\nwhile (money < 8000) {\n    System.out.println("Fund value: Rs. " + money);\n    money *= 2;\n}\nSystem.out.println("Target Reached: Rs. " + money);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Double money from 1000 while < 8000, print target reached\n        \n    }\n}`,
      hints: [
        'Condition is money < 8000',
        'Inside loop: money *= 2;'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int money = 1000;\n        while (money < 8000) {\n            System.out.println("Fund value: Rs. " + money);\n            money *= 2;\n        }\n        System.out.println("Target Reached: Rs. " + money);\n    }\n}`,
      explanation: [
        'Runs for 1000, 2000, 4000. When money doubles to 8000, the condition stops and target prints.'
      ],
      xpReward: 40
    },

    {
      id: 113,
      stageId: 3,
      isBoss: false,
      title: 'Boiling Water Heating',
      scenario: 'A tea kettle temperature sensor starts at 20 degrees C and heats up by 20 degrees each check until reaching the boiling point of 100 degrees C.',
      task: 'int temp = 20. While temp < 100, print "Heating: " + temp + "C" and add 20. After loop, print "Boiling Point 100C Reached!".',
      sampleOutput: `Heating: 20C\nHeating: 40C\nHeating: 60C\nHeating: 80C\nBoiling Point 100C Reached!`,
      expectedOutput: `Heating: 20C\nHeating: 40C\nHeating: 60C\nHeating: 80C\nBoiling Point 100C Reached!`,
      thinkFirst: [
        '1. int temp = 20;',
        '2. while (temp < 100): print and temp += 20;',
        '3. Print boiling point reached.'
      ],
      syntaxReminder: `int temp = 20;\nwhile (temp < 100) {\n    System.out.println("Heating: " + temp + "C");\n    temp += 20;\n}\nSystem.out.println("Boiling Point 100C Reached!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Heat from 20C while < 100, stepping by +20\n        \n    }\n}`,
      hints: [
        'temp starts at 20, increments by 20 each round.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int temp = 20;\n        while (temp < 100) {\n            System.out.println("Heating: " + temp + "C");\n            temp += 20;\n        }\n        System.out.println("Boiling Point 100C Reached!");\n    }\n}`,
      explanation: [
        'Heats through 20, 40, 60, 80 and terminates at 100.'
      ],
      xpReward: 40
    },

    {
      id: 114,
      stageId: 3,
      isBoss: false,
      title: 'Car Speed Deceleration',
      scenario: 'A self-driving vehicle decelerates from 80 km/h by applying brakes to reduce speed by 15 km/h while speed is strictly above 20.',
      task: 'int speed = 80. While speed > 20, print "Speed: " + speed + " km/h" and subtract 15. Then print "Safe Cruising Speed Reached!".',
      sampleOutput: `Speed: 80 km/h\nSpeed: 65 km/h\nSpeed: 50 km/h\nSpeed: 35 km/h\nSafe Cruising Speed Reached!`,
      expectedOutput: `Speed: 80 km/h\nSpeed: 65 km/h\nSpeed: 50 km/h\nSpeed: 35 km/h\nSafe Cruising Speed Reached!`,
      thinkFirst: [
        '1. int speed = 80;',
        '2. while (speed > 20): print and speed -= 15;',
        '3. Print safe speed reached.'
      ],
      syntaxReminder: `int speed = 80;\nwhile (speed > 20) {\n    System.out.println("Speed: " + speed + " km/h");\n    speed -= 15;\n}\nSystem.out.println("Safe Cruising Speed Reached!");`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Decelerate from 80 km/h while > 20 by -15\n        \n    }\n}`,
      hints: [
        'Step is speed -= 15;',
        'Runs for 80, 65, 50, 35.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int speed = 80;\n        while (speed > 20) {\n            System.out.println("Speed: " + speed + " km/h");\n            speed -= 15;\n        }\n        System.out.println("Safe Cruising Speed Reached!");\n    }\n}`,
      explanation: [
        'Reduces speed in 15 km/h intervals down to 20 km/h threshold.'
      ],
      xpReward: 40
    },

    {
      id: 115,
      stageId: 3,
      isBoss: true,
      title: '👑 Stage 3 Boss: Collatz Hailstone Path',
      scenario: 'The Collatz conjecture states that starting from any positive integer: if even, divide by 2; if odd, 3*n + 1. It eventually reaches 1. Trace the path starting from 6.',
      task: 'int n = 6. Print n. While n != 1, if (n % 2 == 0) n /= 2 else n = 3*n + 1; print " -> " + n. All on one line.',
      sampleOutput: `6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1`,
      expectedOutput: `6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1`,
      thinkFirst: [
        '1. int n = 6;',
        '2. System.out.print(n);',
        '3. while (n != 1):',
        '   if (n % 2 == 0) n /= 2; else n = 3 * n + 1;',
        '   System.out.print(" -> " + n);'
      ],
      syntaxReminder: `int n = 6;\nSystem.out.print(n);\nwhile (n != 1) {\n    if (n % 2 == 0) n /= 2; else n = 3 * n + 1;\n    System.out.print(" -> " + n);\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // STAGE 3 BOSS (While Loop):\n        // Trace Collatz path starting at 6 until 1\n        \n    }\n}`,
      hints: [
        'Print starting 6 first.',
        'Inside while (n != 1), branch even/odd, then print " -> " + n.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int n = 6;\n        System.out.print(n);\n        while (n != 1) {\n            if (n % 2 == 0) {\n                n /= 2;\n            } else {\n                n = 3 * n + 1;\n            }\n            System.out.print(" -> " + n);\n        }\n    }\n}`,
      explanation: [
        '6 is even (3), 3 is odd (10), 10 is even (5), 5 is odd (16), 16->8->4->2->1.'
      ],
      xpReward: 55
    },

    // ------------------------------------------------------------------------
    // STAGE 4: CLASSIC WHILE ALGORITHMS (116 to 120)
    // ------------------------------------------------------------------------
    {
      id: 116,
      stageId: 4,
      isBoss: false,
      title: 'Euclidean GCD Algorithm (GCD of 54 & 24)',
      scenario: 'Euclid discovered that the GCD of two numbers can be found by repeatedly replacing (a, b) with (b, a % b) until b becomes 0.',
      task: 'int a = 54, b = 24. While b != 0, int rem = a % b; a = b; b = rem; Print "GCD: " + a.',
      sampleOutput: `GCD: 6`,
      expectedOutput: `GCD: 6`,
      thinkFirst: [
        '1. int a = 54, b = 24;',
        '2. while (b != 0):',
        '   int rem = a % b;',
        '   a = b;',
        '   b = rem;',
        '3. Print "GCD: " + a;'
      ],
      syntaxReminder: `while (b != 0) {\n    int rem = a % b;\n    a = b;\n    b = rem;\n}\nSystem.out.println("GCD: " + a);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int a = 54, b = 24;\n        // WRITE YOUR CODE HERE:\n        // Find GCD using Euclid while loop, print "GCD: 6"\n        \n    }\n}`,
      hints: [
        'Store remainder in a temporary variable: int rem = a % b;',
        'Then a becomes b, and b becomes rem.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int a = 54, b = 24;\n        while (b != 0) {\n            int rem = a % b;\n            a = b;\n            b = rem;\n        }\n        System.out.println("GCD: " + a);\n    }\n}`,
      explanation: [
        '54 % 24 = 6; 24 % 6 = 0 -> GCD is 6.'
      ],
      xpReward: 50
    },

    {
      id: 117,
      stageId: 4,
      isBoss: false,
      title: 'Smallest Power of 2 Above 500',
      scenario: 'A server memory allocator requires a power of 2 that is strictly greater than 500 bytes.',
      task: 'int p = 1. While p <= 500, multiply p by 2. Print "Smallest Power: " + p.',
      sampleOutput: `Smallest Power: 512`,
      expectedOutput: `Smallest Power: 512`,
      thinkFirst: [
        '1. int p = 1;',
        '2. while (p <= 500) p *= 2;',
        '3. Print "Smallest Power: " + p;'
      ],
      syntaxReminder: `int p = 1;\nwhile (p <= 500) {\n    p *= 2;\n}\nSystem.out.println("Smallest Power: " + p);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Double p from 1 while <= 500, print "Smallest Power: 512"\n        \n    }\n}`,
      hints: [
        'Powers of 2: 1, 2, 4, 8, ... 256, 512.',
        '512 is the first to exceed 500.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int p = 1;\n        while (p <= 500) {\n            p *= 2;\n        }\n        System.out.println("Smallest Power: " + p);\n    }\n}`,
      explanation: [
        'Stops at 512 as it violates p <= 500.'
      ],
      xpReward: 45
    },

    {
      id: 118,
      stageId: 4,
      isBoss: false,
      title: 'Integer Square Root Approximation',
      scenario: 'Without using Math.sqrt(), find the largest integer whose square is less than or equal to 50.',
      task: 'int i = 1. While ((i + 1) * (i + 1) <= 50) i++; Print "Floor Sqrt of 50: " + i.',
      sampleOutput: `Floor Sqrt of 50: 7`,
      expectedOutput: `Floor Sqrt of 50: 7`,
      thinkFirst: [
        '1. int i = 1;',
        '2. while ((i + 1) * (i + 1) <= 50) i++;',
        '3. Print "Floor Sqrt of 50: " + i;'
      ],
      syntaxReminder: `int i = 1;\nwhile ((i + 1) * (i + 1) <= 50) {\n    i++;\n}\nSystem.out.println("Floor Sqrt of 50: " + i);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Find integer square root of 50, print "Floor Sqrt of 50: 7"\n        \n    }\n}`,
      hints: [
        '7*7 = 49 <= 50, but 8*8 = 64 > 50.',
        'The answer is 7.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int i = 1;\n        while ((i + 1) * (i + 1) <= 50) {\n            i++;\n        }\n        System.out.println("Floor Sqrt of 50: " + i);\n    }\n}`,
      explanation: [
        'Calculates 7 as 49 <= 50.'
      ],
      xpReward: 45
    },

    {
      id: 119,
      stageId: 4,
      isBoss: false,
      title: 'Coin Change Note Dispenser',
      scenario: 'A vending machine owes a customer Rs. 65 in change. It dispenses as many Rs. 20 notes as possible.',
      task: 'int change = 65. While change >= 20, print "Dispensing Rs. 20 note" and change -= 20. Print "Remaining change: Rs. " + change after.',
      sampleOutput: `Dispensing Rs. 20 note\nDispensing Rs. 20 note\nDispensing Rs. 20 note\nRemaining change: Rs. 5`,
      expectedOutput: `Dispensing Rs. 20 note\nDispensing Rs. 20 note\nDispensing Rs. 20 note\nRemaining change: Rs. 5`,
      thinkFirst: [
        '1. int change = 65;',
        '2. while (change >= 20): print dispensing and change -= 20;',
        '3. Print remaining change.'
      ],
      syntaxReminder: `int change = 65;\nwhile (change >= 20) {\n    System.out.println("Dispensing Rs. 20 note");\n    change -= 20;\n}\nSystem.out.println("Remaining change: Rs. " + change);`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        // WRITE YOUR CODE HERE:\n        // Dispense Rs. 20 notes while change >= 20\n        \n    }\n}`,
      hints: [
        'Dispenses 3 notes (Rs. 60 total), leaving Rs. 5.'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int change = 65;\n        while (change >= 20) {\n            System.out.println("Dispensing Rs. 20 note");\n            change -= 20;\n        }\n        System.out.println("Remaining change: Rs. " + change);\n    }\n}`,
      explanation: [
        'Greedy change-dispensing while loop.'
      ],
      xpReward: 45
    },

    {
      id: 120,
      stageId: 4,
      isBoss: true,
      title: '👑 Stage 4 ULTIMATE BOSS: Prime Factor Slicer',
      scenario: 'Decompose the number 12 into its prime factors using while loops: 12 divided by 2 gives 6, divided by 2 gives 3, divided by 3 gives 1.',
      task: 'int n = 12. Using while loop: while (n % 2 == 0) { System.out.println("Factor: 2"); n /= 2; } while (n % 3 == 0) { System.out.println("Factor: 3"); n /= 3; }',
      sampleOutput: `Factor: 2\nFactor: 2\nFactor: 3`,
      expectedOutput: `Factor: 2\nFactor: 2\nFactor: 3`,
      thinkFirst: [
        '1. int n = 12;',
        '2. while (n % 2 == 0) { System.out.println("Factor: 2"); n /= 2; }',
        '3. while (n % 3 == 0) { System.out.println("Factor: 3"); n /= 3; }'
      ],
      syntaxReminder: `int n = 12;\nwhile (n % 2 == 0) {\n    System.out.println("Factor: 2");\n    n /= 2;\n}\nwhile (n % 3 == 0) {\n    System.out.println("Factor: 3");\n    n /= 3;\n}`,
      starterCode: `public class Main {\n    public static void main(String[] args) {\n        int n = 12;\n        // ULTIMATE WHILE BOSS:\n        // Extract prime factors 2, 2, 3 using while loops\n        \n    }\n}`,
      hints: [
        'First divide out all factors of 2 with while (n % 2 == 0).',
        'Then divide out factors of 3 with while (n % 3 == 0).'
      ],
      modelSolution: `public class Main {\n    public static void main(String[] args) {\n        int n = 12;\n        while (n % 2 == 0) {\n            System.out.println("Factor: 2");\n            n /= 2;\n        }\n        while (n % 3 == 0) {\n            System.out.println("Factor: 3");\n            n /= 3;\n        }\n    }\n}`,
      explanation: [
        '12 = 2 * 2 * 3. Both while loops divide out factors.'
      ],
      xpReward: 65
    }
  ]
};
