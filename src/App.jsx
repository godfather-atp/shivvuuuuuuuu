import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { letterConfig } from './config/letterConfig';
import { audioPlayer } from './utils/audioPlayer';
import BackgroundEffects from './components/BackgroundEffects';
import NavigationControls from './components/NavigationControls';
import Page1Opening from './components/Page1Opening';
import Page2Feelings from './components/Page2Feelings';
import Page3OneLastThing from './components/Page3OneLastThing';
import Page4TheBigQuestion from './components/Page4TheBigQuestion';
import Page5YesResponse from './components/Page5YesResponse';
import Page5NoResponse from './components/Page5NoResponse';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [choice, setChoice] = useState(null); // 'yes', 'no', or null
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  // Initialize audio player on load
  useEffect(() => {
    audioPlayer.init(letterConfig.music.customAudioUrl);
    if (letterConfig.music.defaultPlaying) {
      audioPlayer.play();
      setIsPlayingMusic(true);
    }
  }, []);

  const toggleMusic = () => {
    const isNowPlaying = audioPlayer.toggle();
    setIsPlayingMusic(isNowPlaying);
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, 4));
  };

  const handlePrevPage = () => {
    if (choice) {
      // If on answer screen, return to question screen
      setChoice(null);
      setCurrentPage(4);
    } else {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
    }
  };

  const handleSelectChoice = (selectedChoice) => {
    setChoice(selectedChoice);
    setCurrentPage(5);
  };

  const handleReset = () => {
    setChoice(null);
    setCurrentPage(1);
  };

  // Page animation variants
  const pageVariants = {
    initial: { opacity: 0, y: 18, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -18, scale: 0.98 },
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center px-4 py-16 sm:py-20 overflow-x-hidden bg-babyPink-200">
      {/* Dynamic Background: Ambient Glow, Floating Hearts & Sparkles */}
      <BackgroundEffects />

      {/* Floating Navigation, Progress Indicator & Music Toggle */}
      <NavigationControls
        currentPage={currentPage}
        totalPages={4}
        onBack={handlePrevPage}
        onReset={handleReset}
        isPlaying={isPlayingMusic}
        onToggleMusic={toggleMusic}
        choice={choice}
      />

      {/* Main Centered Content Container */}
      <main className="relative z-10 w-full max-w-2xl flex-1 flex flex-col justify-center items-center my-auto">
        <AnimatePresence mode="wait">
          {/* PAGE 1: Opening Letter */}
          {currentPage === 1 && (
            <motion.div
              key="page-1"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="w-full"
            >
              <Page1Opening config={letterConfig} onNext={handleNextPage} />
            </motion.div>
          )}

          {/* PAGE 2: My Feelings */}
          {currentPage === 2 && (
            <motion.div
              key="page-2"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="w-full"
            >
              <Page2Feelings config={letterConfig} onNext={handleNextPage} />
            </motion.div>
          )}

          {/* PAGE 3: One Last Thing */}
          {currentPage === 3 && (
            <motion.div
              key="page-3"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="w-full"
            >
              <Page3OneLastThing config={letterConfig} onNext={handleNextPage} />
            </motion.div>
          )}

          {/* PAGE 4: The Big Question */}
          {currentPage === 4 && (
            <motion.div
              key="page-4"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="w-full"
            >
              <Page4TheBigQuestion
                config={letterConfig}
                onSelectChoice={handleSelectChoice}
              />
            </motion.div>
          )}

          {/* PAGE 5: YES Response */}
          {currentPage === 5 && choice === 'yes' && (
            <motion.div
              key="page-5-yes"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full"
            >
              <Page5YesResponse config={letterConfig} onReset={handleReset} />
            </motion.div>
          )}

          {/* PAGE 5: NO Response */}
          {currentPage === 5 && choice === 'no' && (
            <motion.div
              key="page-5-no"
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full"
            >
              <Page5NoResponse config={letterConfig} onReset={handleReset} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Romantic Footer */}
      <footer className="relative z-10 mt-8 text-center text-xs text-rose-500/80 font-medium tracking-wide flex items-center justify-center gap-1.5">
        <span>Handcrafted with all my love for</span>
        <span className="font-semibold text-rose-600 underline decoration-pink-300 decoration-wavy underline-offset-4">
          {letterConfig.recipientName}
        </span>
        <span>🌸</span>
      </footer>
    </div>
  );
}
