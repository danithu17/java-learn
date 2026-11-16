// Canonical persistent key that stays permanent across all future updates
const CANONICAL_STORAGE_KEY = 'java_loops_arena_persistent_master';

// Historical keys across previous versions to auto-merge and preserve all users' progress
const HISTORICAL_STORAGE_KEYS = [
  'java_loops_arena_persistent_master',
  'java_loops_arena_real_scenarios_v4',
  'java_loops_arena_real_scenarios_v3',
  'java_loops_arena_real_scenarios_v2',
  'java_loops_arena_real_scenarios_v1',
  'java_loops_arena_v1',
  'java_loops_progress',
  'java_arena_state',
];

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

/**
 * Loads game state with automatic backwards-compatibility.
 * Checks all historical localStorage keys and dynamically merges any past completed
 * progress, XP, streaks, and saved code so users never lose their data on updates.
 */
export function loadGameState() {
  try {
    const merged = getDefaultState();
    const candidateKeys = new Set(HISTORICAL_STORAGE_KEYS);

    // Dynamically check any key in localStorage matching our app patterns
    if (typeof localStorage !== 'undefined') {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && (key.includes('java_loop') || key.includes('loops_arena') || key.includes('java_arena'))) {
          candidateKeys.add(key);
        }
      }
    }

    for (const key of candidateKeys) {
      try {
        const raw = localStorage.getItem(key);
        if (!raw) continue;
        const data = JSON.parse(raw);
        if (!data || typeof data !== 'object') continue;

        // Merge completed challenges without duplicates
        if (Array.isArray(data.completedChallenges)) {
          for (const id of data.completedChallenges) {
            if (!merged.completedChallenges.includes(id)) {
              merged.completedChallenges.push(id);
            }
          }
        }

        // Keep highest XP achieved
        if (typeof data.xp === 'number' && data.xp > merged.xp) {
          merged.xp = data.xp;
        }

        // Keep highest streaks
        if (typeof data.bestStreak === 'number' && data.bestStreak > merged.bestStreak) {
          merged.bestStreak = data.bestStreak;
        }
        if (typeof data.streak === 'number' && data.streak > merged.streak) {
          merged.streak = data.streak;
        }
        if (typeof data.dailyStreak === 'number' && data.dailyStreak > merged.dailyStreak) {
          merged.dailyStreak = data.dailyStreak;
        }

        // Keep highest review counter
        if (typeof data.reviewsCompleted === 'number' && data.reviewsCompleted > merged.reviewsCompleted) {
          merged.reviewsCompleted = data.reviewsCompleted;
        }

        // Merge badges
        if (Array.isArray(data.badges)) {
          for (const b of data.badges) {
            if (!merged.badges.includes(b)) {
              merged.badges.push(b);
            }
          }
        }

        // Merge saved code snippets
        if (data.savedCode && typeof data.savedCode === 'object') {
          merged.savedCode = { ...data.savedCode, ...merged.savedCode };
        }

        // Merge hint usage records
        if (data.hintsUsed && typeof data.hintsUsed === 'object') {
          merged.hintsUsed = { ...data.hintsUsed, ...merged.hintsUsed };
        }
      } catch (innerErr) {
        // Skip unparseable single items
      }
    }

    return merged;
  } catch (e) {
    return getDefaultState();
  }
}

/**
 * Saves game state across both canonical permanent key and legacy keys
 * so that any tab, historical build, or future update maintains state safely.
 */
export function saveGameState(state) {
  try {
    const serialized = JSON.stringify(state);
    localStorage.setItem(CANONICAL_STORAGE_KEY, serialized);
    // Mirror to v4 & v3 to ensure backwards-compatibility
    localStorage.setItem('java_loops_arena_real_scenarios_v4', serialized);
    localStorage.setItem('java_loops_arena_real_scenarios_v3', serialized);
  } catch (e) {}
}

/**
 * Exports player progress as a JSON download for backup across devices.
 */
export function exportProgressAsJson(state) {
  try {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(state, null, 2));
    const dlAnchor = document.createElement('a');
    dlAnchor.setAttribute('href', dataStr);
    dlAnchor.setAttribute('download', `java_loops_progress_backup_${new Date().toISOString().split('T')[0]}.json`);
    dlAnchor.click();
    dlAnchor.remove();
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Imports player progress from uploaded JSON string and merges with current state.
 */
export function importProgressFromJson(jsonString, currentState) {
  try {
    const imported = JSON.parse(jsonString);
    if (!imported || typeof imported !== 'object') throw new Error('Invalid backup file');

    const merged = {
      ...currentState,
      ...imported,
      xp: Math.max(currentState.xp || 0, imported.xp || 0),
      bestStreak: Math.max(currentState.bestStreak || 0, imported.bestStreak || 0),
      completedChallenges: Array.from(new Set([...(currentState.completedChallenges || []), ...(imported.completedChallenges || [])])),
      badges: Array.from(new Set([...(currentState.badges || []), ...(imported.badges || [])])),
      savedCode: { ...(currentState.savedCode || {}), ...(imported.savedCode || {}) },
      hintsUsed: { ...(currentState.hintsUsed || {}), ...(imported.hintsUsed || {}) },
    };

    saveGameState(merged);
    return { success: true, mergedState: merged };
  } catch (err) {
    return { success: false, error: err.message };
  }
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
