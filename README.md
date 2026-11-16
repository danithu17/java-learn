# 🎮 Java Loops Arena

A complete, beginner-friendly gamified practice platform built with **React + Vite + Tailwind CSS** to help you turn loop logic into Java code and build muscle memory through repetition.

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
Open PowerShell or your terminal in this directory and run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser at the displayed local URL (usually **`http://localhost:5173`**).

---

## 📂 Project Architecture

```
├── index.html                   # Entry HTML with modern dark theme fonts
├── package.json                 # Project dependencies & scripts
├── vite.config.js               # Vite bundler configuration
├── tailwind.config.js           # Tailwind CSS styling system
├── src/
│   ├── main.jsx                 # React root renderer
│   ├── App.jsx                  # Main application router & modal manager
│   ├── index.css                # Global styles & custom scrollbars
│   ├── context/
│   │   └── GameContext.jsx      # Gamification engine (XP, streaks, badges, sound triggers)
│   ├── modules/                 # ⭐ DATA-DRIVEN MODULE SYSTEM
│   │   ├── index.js             # Module registry (add new modules with 1 line!)
│   │   └── forLoop.js           # For Loop Module (6 lessons + 25 interactive challenges)
│   ├── components/
│   │   ├── Navbar.jsx           # Top bar: XP progress bar, level badge, streak flames
│   │   ├── CodeBlock.jsx        # Java code syntax highlighter with copy button
│   │   ├── ThinkFirstBox.jsx    # Plain English logic steps box (trains logic-to-code)
│   │   ├── SyntaxReminder.jsx   # Collapsible loop skeleton reminder box
│   │   ├── HintAccordion.jsx    # 3-tier hints with XP reduction indicator
│   │   ├── LevelUpModal.jsx     # Celebratory rank-up modal with confetti
│   │   └── QuestionCard.jsx     # Handles the 6 question types
│   ├── pages/
│   │   ├── HomePage.jsx         # Modules dashboard & player stats overview
│   │   ├── ModulePage.jsx       # Subtab switcher (Lessons vs. Challenges)
│   │   ├── LessonViewer.jsx     # Interactive stepper, visual anatomy & explanations
│   │   ├── ChallengeArena.jsx   # 25-challenge practice arena with number picker
│   │   ├── ReviewMode.jsx       # Memory training quiz from passed challenges
│   │   └── ProfilePage.jsx      # Badges showcase, player rank, stats & reset
│   └── utils/
│       ├── audio.js             # Web Audio API sound synthesizer (100% offline)
│       └── storage.js           # localStorage persistence helpers & levels
├── Main.java                    # Bonus: Standalone Java console engine
└── Challenges.java              # Bonus: Standalone Java practice file
```

---

## 🧩 Adding New Modules (Plug-and-Play)

The app is completely data-driven. To add a new loop module (e.g. `whileLoop.js`):

1. Create `src/modules/whileLoop.js`:
   ```javascript
   export const whileLoopModule = {
     id: 'while-loop',
     title: 'While Loop Mastery',
     icon: 'RefreshCw',
     badge: 'Unlocked',
     description: 'Master condition-driven loops!',
     lessons: [ /* array of lesson objects */ ],
     challenges: [ /* array of challenge objects */ ]
   };
   ```
2. Open `src/modules/index.js` and add **one line** to import and register it:
   ```javascript
   import { whileLoopModule } from './whileLoop.js';

   export const modules = [
     forLoopModule,
     whileLoopModule, // <-- Added here!
     // ...
   ];
   ```
The home page, progress trackers, and challenge arena will automatically recognize and render it!

---

## 🎯 6 Challenge Question Types Included

1. **Predict the output** (Multiple Choice)
2. **Fill in the blank** (Code snippet completion)
3. **Arrange the lines** (Drag / click to put scrambled code lines in correct order)
4. **Find the bug** (Identify off-by-one errors, infinite loops, and misplaced semicolons)
5. **Trace table** (Step-by-step table filling the values of `i` or `sum` each round)
6. **Write it yourself** (Full code typing with key syntax verification & model answers)

---

## 🏆 Gamification & XP System

- **XP Progression**:
  - Level 1: **Rookie** (0 - 149 XP)
  - Level 2: **Learner** (150 - 349 XP)
  - Level 3: **Coder** (350 - 599 XP)
  - Level 4: **Loop Warrior** (600 - 899 XP)
  - Level 5: **Loop Master** (900+ XP)
- **Streak & Combo Bonus**: Consecutive correct answers grant bonus XP.
- **Hints System**: 3 progressive hints per challenge (using hints deducts 5 XP).
- **Sound Effects**: Offline synthesized Web Audio chimes for level-ups, combos, and passes.
- **Confetti**: Celebratory full-screen confetti on leveling up.
- **Review Mode**: Randomly quizzes you on solved challenges to cement long-term muscle memory.
- **Persistence**: Automatically saved to your browser's `localStorage`.

---

## ☕ Bonus: Java Console Game
You can also run the console game anytime directly in your terminal:
```bash
javac Main.java Challenges.java
java Main
```
