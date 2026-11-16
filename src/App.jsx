import React, { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext.jsx';
import { Navbar } from './components/Navbar.jsx';
import { LevelUpModal } from './components/LevelUpModal.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { ModulePage } from './pages/ModulePage.jsx';
import { ReviewMode } from './pages/ReviewMode.jsx';
import { ProfilePage } from './pages/ProfilePage.jsx';
import { ComparePage } from './pages/ComparePage.jsx';
import { WeakSpotsPage } from './pages/WeakSpotsPage.jsx';

function AppContent() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'module' | 'compare' | 'review' | 'weak-spots' | 'profile'
  const [selectedModuleId, setSelectedModuleId] = useState('for-loop');
  const [initialChallengeId, setInitialChallengeId] = useState(null);
  const { levelUpModal, closeLevelUpModal } = useGame();

  const handleSelectModule = (moduleId, challengeId = null) => {
    setSelectedModuleId(moduleId);
    setInitialChallengeId(challengeId);
    setActiveTab('module');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTab = (tab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-['Inter',sans-serif]">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} onSelectTab={handleSelectTab} />

      {/* Main Content Router */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <HomePage
            onSelectModule={handleSelectModule}
            onStartReview={() => handleSelectTab('review')}
          />
        )}

        {activeTab === 'module' && (
          <ModulePage
            moduleId={selectedModuleId}
            initialChallengeId={initialChallengeId}
            onBack={() => handleSelectTab('home')}
          />
        )}

        {activeTab === 'compare' && (
          <ComparePage
            onGoToModule={handleSelectModule}
          />
        )}

        {activeTab === 'review' && (
          <ReviewMode
            onGoToChallenges={() => handleSelectModule('for-loop')}
          />
        )}

        {activeTab === 'weak-spots' && (
          <WeakSpotsPage
            onOpenChallenge={(item) => handleSelectModule(item.moduleId || 'for-loop', item.id)}
          />
        )}

        {activeTab === 'profile' && <ProfilePage />}
      </main>

      {/* Celebratory Level-Up Popup Modal */}
      <LevelUpModal
        isOpen={levelUpModal.isOpen}
        level={levelUpModal.level}
        levelName={levelUpModal.name}
        onClose={closeLevelUpModal}
      />

      {/* App Footer */}
      <footer className="border-t border-slate-900 bg-slate-950 py-6 px-4 text-center text-xs text-slate-500">
        <p className="font-mono">
          Java Loops Arena • Designed for Beginners • Think Logic First, Then Code 🚀
        </p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <AppContent />
    </GameProvider>
  );
}
