# 🎮 Java Loops Arena (Real-Life Scenario Edition)

A complete, beginner-friendly gamified practice platform built with **React + Vite + Tailwind CSS** designed specifically to help you turn logic thoughts into Java code by solving **real-life scenarios**.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser at:
👉 **`http://localhost:3000`** *(configured in `vite.config.js`)*

---

## 🎯 How It Works: Writing Real Code (No Quizzes!)

- **No multiple choice, no fill-in-the-blank, no drag-and-drop.**
- Every single challenge is a **real-life scenario story** (classroom roll calls, rocket launches, highway toll stops, piggy banks, grocery cashier bills, ATM PIN ciphers).
- You write the Java code directly in the code editor box on the page.
- The **In-Browser Java Simulator** tests your loop code safely in real-time, captures `System.out.println` and `System.out.print`, checks loop syntax, and compares your console output with the expected output!
- If it matches: **PASS!** Earn XP, maintain streak combos, unlock the next scenario, and view the **Model Java Solution** with a line-by-line explanation!

---

## 🏆 6 Progressive Stages & 30 Scenarios

### Stage 1: Basic Counting
1. **Classroom Roll Call**: Call student numbers 1 to 20
2. **Rocket Launch Countdown**: Count backwards 10 to 1, then "Liftoff!"
3. **Fence Painting**: Announce planks 1 to 8 being painted
4. **City Bus Stops**: Announce stops 1 to 15 on Route 42
5. **👑 Stage 1 Boss: Birthday Candles**: Place 7 candles on cake, then print "Happy Birthday!"

### Stage 2: Skipping & Steps
6. **Even House Numbers**: Deliver mail to even houses 2, 4, 6 ... 30 (`i += 2`)
7. **Express Highway Milestones**: Announce mile markers 5, 10, 15 ... 50 km (`i += 5`)
8. **Odd Concert Tickets**: Raffle odd numbers 1, 3, 5 ... 21
9. **Countdown by 3s**: Fitness intervals 30, 27, 24 ... 3 (`sec -= 3`)
10. **👑 Stage 2 Boss: Snooze Alarm Clock**: Chime every 15 mins (0, 15, 30, 45, 60), then "Wake up!"

### Stage 3: Accumulating Totals
11. **Daily Piggy Bank Savings**: Save Rs. 10 each day for 30 days (total Rs. 300)
12. **Marks Total (Gauss Sum)**: Sum numbers 1 to 100 (Sum: 5050)
13. **Cashier Running Bill**: Print running total after each of 4 items at Rs. 120 each
14. **Lucky Sevens Counter**: Count how many numbers in 1..100 are divisible by 7 (Count: 14)
15. **👑 Stage 3 Boss: Grade Average Calculator**: Sum 1 to 10, divide by 10.0, print "Average: 5.5"

### Stage 4: Loops with Decisions (for + if)
16. **Cricket Over Thriller**: Print balls 1 to 5, and "Ball 6 - SIX!" on ball 6
17. **Exam Pass Count**: Count students scoring >= 50 in a marks array (Passed: 5)
18. **Classroom FizzBuzz Game**: Loop 1 to 15 with 3/5/both FizzBuzz checks
19. **Top High Score Finder**: Find the maximum score in an array
20. **👑 Stage 4 Boss: Vowel Detective**: Count vowels in String "INDONESIA" (Vowels: 5)

### Stage 5: Patterns & Tables
21. **Exam Times Table**: Multiplication table of 7 from 1 to 10
22. **Staircase Star Pyramid**: 5 rows of stars (`*` to `*****`)
23. **Counting Number Triangle**: Rows 1, 12, 123, 1234
24. **Chess Board Row Pattern**: Alternating "B W B W B W B W" (8 squares)
25. **👑 Stage 5 Boss: Word Reversal Mirror**: Reverse "JAVA" backwards to "AVAJ"

### Stage 6: Mini Problem Solving
26. **ATM PIN Permutations**: Factorial of 5 (5! = 120)
27. **Memory Chip Capacity**: Compute 2^10 without Math.pow (Power: 1024)
28. **City Population Projection**: 1000 residents growing 10% each year for 3 years
29. **Bank Loan Yearly Balance**: Rs. 10000 loan with Rs. 500 annual charge for 3 years
30. **👑 Stage 6 ULTIMATE BOSS: Prime Number Sentinel**: Loop 2 to 28 to test if 29 is prime!

---

## 🧠 Learning Features for Beginners

1. **"Think First" Box**: Step-by-step logic in plain English before coding.
2. **"Syntax Reminder" Skeleton**: Collapsible loop skeleton template.
3. **In-Browser Java Simulator**: Real output execution with infinite loop safeguards.
4. **3-Tier Hint Accordion**: Progressive hints (Idea ➔ Key Line ➔ Structure).
5. **Model Solution & Breakdown**: Compare your code with teacher's solution after passing.
6. **Review Mode**: Rewrite past scenarios completely from scratch without peeking.
7. **Stage Unlocking**: Each stage unlocks only after clearing the previous stage's 5 scenarios.

---

## 🏆 XP & Gamification

- **XP Progression**:
  - Level 1: **Rookie** (0 - 249 XP)
  - Level 2: **Learner** (250 - 549 XP)
  - Level 3: **Coder** (550 - 899 XP)
  - Level 4: **Loop Warrior** (900 - 1299 XP)
  - Level 5: **Loop Master** (1300+ XP)
- **Bonuses**:
  - Pure Logic Bonus (+10 XP for passing with 0 hints)
  - Combo Streak Bonus (+5 to +10 XP for consecutive passes)
  - Boss Challenge XP (+45 to +70 XP)
- **Audio & Visual**:
  - Offline Web Audio synthesizers for level-ups and passes
  - Full-screen confetti on rank-ups
- **Persistence**: Code drafts, XP, streaks, and trophies automatically save in `localStorage`.
