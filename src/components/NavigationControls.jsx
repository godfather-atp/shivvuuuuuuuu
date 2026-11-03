import React from 'react';
import { Volume2, VolumeX, ArrowLeft, RotateCcw, Heart, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NavigationControls({
  currentPage,
  totalPages = 4,
  onBack,
  onReset,
  isPlaying,
  onToggleMusic,
  choice, // 'yes', 'no', or null
}) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 p-4 sm:p-6 flex items-center justify-between pointer-events-none">
      {/* Left Action: Back button if past page 1 */}
      <div className="pointer-events-auto flex items-center gap-2">
        {currentPage > 1 && (
          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onBack}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-rosePastel-border/60 text-ink-heading shadow-soft hover:bg-white hover:border-pink-300 transition-all text-xs sm:text-sm font-medium"
            title="Go to previous page"
            aria-label="Previous page"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-rosePastel-accent" />
            <span>Back</span>
          </motion.button>
        )}

        {/* Replay button if on final response */}
        {choice && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onReset}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-rosePastel-border/60 text-ink-heading shadow-soft hover:bg-white hover:border-pink-300 transition-all text-xs sm:text-sm font-medium"
            title="Read from the beginning"
          >
            <RotateCcw className="w-3.5 h-3.5 text-pink-500" />
            <span className="hidden sm:inline">Start Over</span>
          </motion.button>
        )}
      </div>

      {/* Center: Heart Progress Indicator */}
      <div className="pointer-events-auto flex items-center gap-2 bg-white/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-rosePastel-border/40 shadow-soft">
        {!choice ? (
          <>
            <span className="text-[11px] sm:text-xs font-semibold text-rose-500/80 uppercase tracking-widest mr-1">
              Page {currentPage} of {totalPages}
            </span>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4].map((step) => {
                const isActive = step === currentPage;
                const isCompleted = step < currentPage;
                return (
                  <motion.div
                    key={step}
                    className={`transition-all duration-300 flex items-center justify-center ${
                      isActive
                        ? 'text-rose-500 scale-125'
                        : isCompleted
                        ? 'text-pink-400'
                        : 'text-rose-200'
                    }`}
                    animate={{ scale: isActive ? [1, 1.25, 1.15] : 1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Heart
                      className="w-3.5 h-3.5"
                      fill={isActive || isCompleted ? 'currentColor' : 'none'}
                      strokeWidth={isActive ? 2.5 : 2}
                    />
                  </motion.div>
                );
              })}
            </div>
          </>
        ) : (
          <div className="flex items-center gap-1.5 text-xs font-medium text-pink-600">
            <Sparkles className="w-3.5 h-3.5 text-rose-500 animate-spin" style={{ animationDuration: '6s' }} />
            <span>A Special Note 💌</span>
          </div>
        )}
      </div>

      {/* Right Action: Music Player Toggle */}
      <div className="pointer-events-auto flex items-center gap-2">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onToggleMusic}
          className={`relative group flex items-center gap-2 px-3.5 py-1.5 rounded-full backdrop-blur-md border transition-all text-xs sm:text-sm font-medium shadow-soft ${
            isPlaying
              ? 'bg-rose-50 border-pink-400 text-rose-600 shadow-glow'
              : 'bg-white/80 border-rosePastel-border/60 text-ink-muted hover:bg-white hover:text-ink-heading'
          }`}
          title={isPlaying ? 'Pause romantic melody' : 'Play soft romantic melody'}
          aria-label={isPlaying ? 'Mute background music' : 'Play background music'}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-4 h-4 text-rose-500 animate-pulse" />
              <span className="hidden sm:inline text-rose-600 text-xs font-semibold">Music On</span>
              {/* Sound wave animated bars */}
              <div className="flex items-end gap-0.5 h-3 ml-0.5">
                <span className="w-0.5 bg-rose-400 rounded-full animate-bounce h-2" style={{ animationDuration: '0.6s' }} />
                <span className="w-0.5 bg-rose-500 rounded-full animate-bounce h-3" style={{ animationDuration: '0.8s', animationDelay: '0.2s' }} />
                <span className="w-0.5 bg-rose-400 rounded-full animate-bounce h-1.5" style={{ animationDuration: '0.7s', animationDelay: '0.4s' }} />
              </div>
            </>
          ) : (
            <>
              <VolumeX className="w-4 h-4 text-ink-muted group-hover:text-rose-400" />
              <span className="hidden sm:inline text-xs text-ink-muted group-hover:text-ink-heading">Music Off</span>
            </>
          )}
        </motion.button>
      </div>
    </header>
  );
}
