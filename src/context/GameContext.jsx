import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { loadGameState, saveGameState, getLevelInfo, isStageUnlocked } from '../utils/storage.js';
import { sounds } from '../utils/audio.js';
import { runJavaCode, normalizeOutput } from '../utils/javaRunner.js';

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [state, setState] = useState(() => loadGameState());
  const [levelUpModal, setLevelUpModal] = useState({ isOpen: false, level: 1, name: '' });

  // Sync state changes to localStorage
  useEffect(() => {
    saveGameState(state);
  }, [state]);

  // Check and update daily streak
  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    if (state.lastActiveDate !== today) {
      const lastDate = new Date(state.lastActiveDate);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate - lastDate);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      setState(prev => ({
        ...prev,
        lastActiveDate: today,
        dailyStreak: diffDays === 1 ? prev.dailyStreak + 1 : 1,
      }));
    }
  }, []);

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  const checkBadges = (newState) => {
    const newBadges = [...newState.badges];
    const addBadge = (id) => {
      if (!newBadges.includes(id)) newBadges.push(id);
    };

    if (newState.completedChallenges.length >= 1) addBadge('first_loop');
    if (newState.streak >= 3) addBadge('streak_3');

    // Stage Clear Badges (10 challenges per stage)
    const checkRange = (start, end) => {
      for (let i = start; i <= end; i++) {
        if (!newState.completedChallenges.includes(i)) return false;
      }
      return true;
    };

    if (checkRange(1, 10)) addBadge('stage_1_clear');
    if (checkRange(11, 20)) addBadge('stage_2_clear');
    if (checkRange(21, 30)) addBadge('stage_3_clear');
    if (checkRange(31, 40)) addBadge('stage_4_clear');
    if (checkRange(41, 50)) addBadge('stage_5_clear');
    if (checkRange(51, 60)) addBadge('stage_6_clear');
    if (newState.completedChallenges.length >= 60) addBadge('loop_master');
    if (newState.reviewsCompleted >= 3) addBadge('memory_pro');

    return newBadges;
  };

  const answerChallenge = (challenge, userCode, hintsCount = 0) => {
    // 1. Save user code draft
    setState(prev => ({
      ...prev,
      savedCode: { ...prev.savedCode, [challenge.id]: userCode }
    }));

    // 2. Run in-browser Java simulation
    const execution = runJavaCode(userCode);

    if (!execution.success) {
      sounds.playFailure();
      setState(prev => ({ ...prev, streak: 0 }));
      return {
        passed: false,
        error: execution.error || 'Code compilation or execution error.',
        userOutput: execution.output || '',
        expectedOutput: challenge.expectedOutput,
      };
    }

    if (!execution.hasForLoop) {
      sounds.playFailure();
      setState(prev => ({ ...prev, streak: 0 }));
      return {
        passed: false,
        error: 'Missing for-loop! The goal of this arena is to write a Java for-loop.',
        userOutput: execution.output || '',
        expectedOutput: challenge.expectedOutput,
      };
    }

    const normActual = normalizeOutput(execution.output);
    const normExpected = normalizeOutput(challenge.expectedOutput);

    if (normActual !== normExpected) {
      sounds.playFailure();
      setState(prev => ({ ...prev, streak: 0 }));
      return {
        passed: false,
        error: 'Output does not match expected output yet. Compare line-by-line below.',
        userOutput: normActual,
        expectedOutput: normExpected,
      };
    }

    // 3. PASS! Output matches expected!
    const isFirstTime = !state.completedChallenges.includes(challenge.id);
    const newStreak = state.streak + 1;
    const streakBonus = newStreak >= 3 ? 10 : (newStreak === 2 ? 5 : 0);
    const noHintBonus = hintsCount === 0 ? 10 : 0;

    const baseReward = challenge.xpReward || 30;
    const hintPenalty = hintsCount * 5;
    const challengeXP = Math.max(10, baseReward - hintPenalty);
    const earnedXP = isFirstTime ? (challengeXP + streakBonus + noHintBonus) : 10; // Repeat gives 10 review XP

    const oldLevel = getLevelInfo(state.xp).level;
    const newTotalXP = state.xp + earnedXP;
    const newLevelInfo = getLevelInfo(newTotalXP);

    const newCompleted = isFirstTime
      ? [...state.completedChallenges, challenge.id]
      : state.completedChallenges;

    const updatedState = {
      ...state,
      xp: newTotalXP,
      streak: newStreak,
      bestStreak: Math.max(state.bestStreak, newStreak),
      completedChallenges: newCompleted,
      savedCode: { ...state.savedCode, [challenge.id]: userCode },
    };

    if (hintsCount === 0 && !updatedState.badges.includes('no_hints')) {
      updatedState.badges.push('no_hints');
    }
    updatedState.badges = checkBadges(updatedState);

    setState(updatedState);

    // Audio & celebratory visual triggers
    if (newLevelInfo.level > oldLevel) {
      sounds.playLevelUp();
      triggerConfetti();
      setLevelUpModal({
        isOpen: true,
        level: newLevelInfo.level,
        name: newLevelInfo.name,
      });
    } else if (newStreak >= 2) {
      sounds.playCombo();
    } else {
      sounds.playSuccess();
    }

    return {
      passed: true,
      earnedXP,
      streakBonus,
      noHintBonus,
      userOutput: normActual,
      expectedOutput: normExpected,
      newStreak,
      isFirstTime,
    };
  };

  const saveDraftCode = (challengeId, code) => {
    setState(prev => ({
      ...prev,
      savedCode: { ...prev.savedCode, [challengeId]: code }
    }));
  };

  const recordHintUsed = (challengeId) => {
    setState(prev => {
      const current = prev.hintsUsed[challengeId] || 0;
      return {
        ...prev,
        hintsUsed: {
          ...prev.hintsUsed,
          [challengeId]: Math.min(3, current + 1),
        }
      };
    });
  };

  const recordReviewCompleted = () => {
    sounds.playSuccess();
    setState(prev => {
      const newReviews = prev.reviewsCompleted + 1;
      const updated = {
        ...prev,
        reviewsCompleted: newReviews,
        xp: prev.xp + 25, // Bonus XP for full review rewrite
      };
      updated.badges = checkBadges(updated);
      return updated;
    });
  };

  const resetProgress = () => {
    const fresh = {
      xp: 0,
      streak: 0,
      bestStreak: 0,
      dailyStreak: 1,
      lastActiveDate: new Date().toISOString().split('T')[0],
      completedChallenges: [],
      hintsUsed: {},
      savedCode: {},
      badges: [],
      reviewsCompleted: 0,
      lastLevel: 1,
    };
    setState(fresh);
    saveGameState(fresh);
  };

  const closeLevelUpModal = () => {
    setLevelUpModal(prev => ({ ...prev, isOpen: false }));
  };

  const levelInfo = getLevelInfo(state.xp);

  return (
    <GameContext.Provider
      value={{
        state,
        levelInfo,
        levelUpModal,
        closeLevelUpModal,
        answerChallenge,
        saveDraftCode,
        recordHintUsed,
        recordReviewCompleted,
        resetProgress,
        isStageUnlocked: (stageId) => isStageUnlocked(stageId, state.completedChallenges),
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
}
