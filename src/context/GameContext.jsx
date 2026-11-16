import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { loadGameState, saveGameState, getLevelInfo, BADGES_CONFIG } from '../utils/storage.js';
import { sounds } from '../utils/audio.js';

const GameContext = createContext(null);

export function GameProvider({ children }) {
  const [state, setState] = useState(() => loadGameState());
  const [levelUpModal, setLevelUpModal] = useState({ isOpen: false, level: 1, name: '' });

  // Sync to localStorage whenever state changes
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
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {}
  };

  const checkBadges = (newState) => {
    const newBadges = [...newState.badges];
    const addBadge = (id) => {
      if (!newBadges.includes(id)) {
        newBadges.push(id);
      }
    };

    if (newState.completedChallenges.length >= 1) addBadge('first_loop');
    if (newState.completedChallenges.length >= 10) addBadge('ten_correct');
    if (newState.completedChallenges.length >= 20) addBadge('twenty_correct');
    if (newState.completedChallenges.length >= 25) addBadge('loop_master');
    if (newState.streak >= 3) addBadge('streak_3');
    if (newState.streak >= 5) addBadge('streak_5');
    if (newState.reviewsCompleted >= 3) addBadge('memory_pro');

    return newBadges;
  };

  const answerChallenge = (challenge, isCorrect, hintsCount) => {
    if (!isCorrect) {
      sounds.playFailure();
      setState(prev => ({
        ...prev,
        streak: 0,
      }));
      return { passed: false, earnedXP: 0, streakBonus: 0 };
    }

    // Correct Answer!
    const isFirstTime = !state.completedChallenges.includes(challenge.id);
    const newStreak = state.streak + 1;
    const streakBonus = newStreak >= 3 ? 10 : (newStreak === 2 ? 5 : 0);

    const baseReward = challenge.xpReward || 30;
    const hintPenalty = (hintsCount || 0) * 5;
    const challengeXP = Math.max(10, baseReward - hintPenalty);
    const earnedXP = isFirstTime ? (challengeXP + streakBonus) : 5; // Repeat gives 5 XP review bonus

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
      badges: checkBadges({
        ...state,
        completedChallenges: newCompleted,
        streak: newStreak,
      }),
    };

    if (hintsCount === 0 && !updatedState.badges.includes('no_hints')) {
      updatedState.badges.push('no_hints');
    }

    setState(updatedState);

    // Audio & Visual celebratory triggers
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
      newStreak,
      isFirstTime,
    };
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
        xp: prev.xp + 15, // Bonus XP for review
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
        recordHintUsed,
        recordReviewCompleted,
        resetProgress,
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
