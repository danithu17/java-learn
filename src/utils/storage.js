const STORAGE_KEY = 'java_loops_arena_real_scenarios_v4';

export const LEVELS = [
  { level: 1, name: 'Rookie', minXP: 0, maxXP: 399, color: 'text-emerald-400', badgeColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' },
  { level: 2, name: 'Learner', minXP: 400, maxXP: 899, color: 'text-sky-400', badgeColor: 'bg-sky-500/20 text-sky-300 border-sky-500/30' },
  { level: 3, name: 'Coder', minXP: 900, maxXP: 1499, color: 'text-indigo-400', badgeColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30' },
  { level: 4, name: 'Loop Warrior', minXP: 1500, maxXP: 2499, color: 'text-purple-400', badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30' },
  { level: 5, name: 'Loop Master', minXP: 2500, maxXP: 9999, color: 'text-amber-400', badgeColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30' },
];

export const BADGES_CONFIG = [
  { id: 'first_loop', title: 'First Code Written', description: 'Solve your first real-life Java scenario', icon: 'Flame', color: 'from-amber-500 to-orange-500' },
  { id: 'no_hints', title: 'Pure Logic Mastery', description: 'Pass a scenario with 0 hints used', icon: 'Brain', color: 'from-cyan-500 to-blue-500' },
  { id: 'streak_3', title: '3-Streak Fire', description: 'Pass 3 scenarios in a row', icon: 'Zap', color: 'from-orange-500 to-red-500' },
  { id: 'stage_1_clear', title: 'Stage 1 Cleared', description: 'Mastered all basic counting scenarios', icon: 'Award', color: 'from-emerald-500 to-teal-500' },
  { id: 'while_master', title: 'While Loop Conquered', description: 'Mastered condition-driven loops and digits', icon: 'RefreshCw', color: 'from-sky-500 to-blue-500' },
  { id: 'dowhile_master', title: 'Do-While Specialist', description: 'Mastered post-test guaranteed execution loops', icon: 'RotateCw', color: 'from-purple-500 to-indigo-500' },
  { id: 'loop_master', title: 'Triple Loop Grandmaster', description: 'Mastered For, While, and Do-While loops!', icon: 'Crown', color: 'from-amber-400 to-yellow-500' },
  { id: 'memory_pro', title: 'Memory Review Pro', description: 'Completed 3 scratch review rewrites', icon: 'Repeat', color: 'from-rose-500 to-red-500' },
];

export function getLevelInfo(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].minXP) {
      const currentLevel = LEVELS[i];
      const nextLevel = LEVELS[i + 1] || null;
      const progressXP = xp - currentLevel.minXP;
      const span = nextLevel ? nextLevel.minXP - currentLevel.minXP : 600;
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
  return { ...LEVELS[0], progressXP: xp, span: 400, progressPercent: 0 };
}

export function getDefaultState() {
  const today = new Date().toISOString().split('T')[0];
  return {
    xp: 0,
    streak: 0,
    bestStreak: 0,
    dailyStreak: 1,
    lastActiveDate: today,
    completedChallenges: [], // array of challenge IDs
    hintsUsed: {}, // { [challengeId]: count }
    savedCode: {}, // { [challengeId]: codeString }
    badges: [],
    reviewsCompleted: 0,
    lastLevel: 1,
  };
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

/**
 * Checks if a stage is unlocked based on completed challenges.
 * Stage 1 is always unlocked.
 * Stage N (N > 1) checks that all challenges in Stage N-1 are passed.
 */
export function isStageUnlocked(stageId, completedChallenges = [], stagesList = []) {
  if (stageId === 1) return true;

  if (stagesList && stagesList.length > 0) {
    const prevStage = stagesList.find(s => s.id === stageId - 1);
    if (prevStage) {
      for (let id = prevStage.minChallengeId; id <= prevStage.maxChallengeId; id++) {
        if (!completedChallenges.includes(id)) {
          return false;
        }
      }
      return true;
    }
  }

  // Fallback: 10 per stage
  const previousStageMax = (stageId - 1) * 10;
  const previousStageMin = previousStageMax - 9;
  for (let id = previousStageMin; id <= previousStageMax; id++) {
    if (!completedChallenges.includes(id)) {
      return false;
    }
  }
  return true;
}
