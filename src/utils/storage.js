const STORAGE_KEY = 'java_loops_arena_v1';

export const LEVELS = [
  { level: 1, name: 'Rookie', minXP: 0, maxXP: 149, color: 'text-emerald-400', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  { level: 2, name: 'Learner', minXP: 150, maxXP: 349, color: 'text-sky-400', badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30' },
  { level: 3, name: 'Coder', minXP: 350, maxXP: 599, color: 'text-indigo-400', badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' },
  { level: 4, name: 'Loop Warrior', minXP: 600, maxXP: 899, color: 'text-purple-400', badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  { level: 5, name: 'Loop Master', minXP: 900, maxXP: 9999, color: 'text-amber-400', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
];

export const BADGES_CONFIG = [
  { id: 'first_loop', title: 'First Loop', description: 'Solve your very first challenge', icon: 'Flame', color: 'from-amber-500 to-orange-500' },
  { id: 'streak_3', title: '3-Streak Fire', description: 'Get 3 challenges correct in a row', icon: 'Zap', color: 'from-orange-500 to-red-500' },
  { id: 'streak_5', title: 'Unstoppable', description: 'Get 5 challenges correct in a row', icon: 'Sparkles', color: 'from-red-500 to-pink-500' },
  { id: 'no_hints', title: 'Pure Logic', description: 'Solve a challenge without using any hints', icon: 'Brain', color: 'from-cyan-500 to-blue-500' },
  { id: 'ten_correct', title: '10 Completed', description: 'Solve 10 different challenges', icon: 'Award', color: 'from-emerald-500 to-teal-500' },
  { id: 'twenty_correct', title: '20 Completed', description: 'Solve 20 different challenges', icon: 'Trophy', color: 'from-indigo-500 to-purple-500' },
  { id: 'loop_master', title: 'Master of Loops', description: 'Solve all 25 For Loop challenges', icon: 'Crown', color: 'from-amber-400 to-yellow-500' },
  { id: 'memory_pro', title: 'Memory Pro', description: 'Complete 3 Review sessions', icon: 'Repeat', color: 'from-pink-500 to-rose-500' },
];

export function getLevelInfo(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) {
      const currentLevel = LEVELS[i];
      const nextLevel = LEVELS[i + 1] || null;
      const progressXP = xp - currentLevel.minXP;
      const span = nextLevel ? nextLevel.minXP - currentLevel.minXP : 300;
      const progressPercent = nextLevel ? Math.min(100, Math.round((progressXP / span) * 100)) : 100;
      return {
        ...currentLevel,
        nextLevel,
        progressXP,
        span,
        progressPercent,
      };
    }
  }
  return { ...LEVELS[0], progressXP: xp, span: 150, progressPercent: 0 };
}

export function loadGameState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed = JSON.parse(raw);
    return {
      ...getDefaultState(),
      ...parsed,
    };
  } catch (e) {
    return getDefaultState();
  }
}

export function saveGameState(state) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

export function getDefaultState() {
  const today = new Date().toISOString().split('T')[0];
  return {
    xp: 0,
    streak: 0,
    bestStreak: 0,
    dailyStreak: 1,
    lastActiveDate: today,
    completedChallenges: [],
    hintsUsed: {}, // { [challengeId]: count }
    badges: [],
    reviewsCompleted: 0,
    lastLevel: 1,
  };
}
