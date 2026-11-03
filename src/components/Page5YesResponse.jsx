import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Mail, RotateCcw, Check } from 'lucide-react';

export default function Page5YesResponse({ config, onReset }) {
  const [isNoteRevealed, setIsNoteRevealed] = useState(false);
  const data = config.yesExperience;

  // Trigger romantic celebration confetti
  useEffect(() => {
    // Pastel heart & confetti burst
    const end = Date.now() + 2.5 * 1000;
    const colors = ['#F472B6', '#FB7185', '#FDA4AF', '#FFF1F2', '#FBBF24'];

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  const handleRevealNote = () => {
    setIsNoteRevealed(true);
    // Extra mini confetti burst upon opening
    confetti({
      particleCount: 40,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F472B6', '#FB7185', '#E11D48'],
    });
  };

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#FFFDFE] rounded-3xl p-6 sm:p-10 shadow-letter-lg border border-rosePastel-border/70 relative overflow-hidden text-center"
      >
        {/* Celebration Header Icon */}
        <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-rose-300"
          />
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-pink-400 to-rose-500 shadow-md shadow-pink-300/50 flex items-center justify-center text-white text-3xl">
            🥹💗
          </div>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl text-ink-heading font-bold mb-2">
          {data.heading}
        </h2>

        {/* Subheading */}
        <p className="font-serif italic text-rose-600 text-lg sm:text-xl font-medium mb-3">
          {data.subheading}
        </p>

        {/* Intro */}
        <p className="text-ink-body font-sans text-base sm:text-lg mb-6 max-w-md mx-auto">
          {data.introText}
        </p>

        {/* Reveal Button (if not already opened) */}
        {!isNoteRevealed && (
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleRevealNote}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-white font-sans font-semibold text-base sm:text-lg shadow-lg shadow-rose-400/30 bg-gradient-to-r from-pink-500 via-rose-500 to-rose-600 hover:from-pink-600 hover:via-rose-600 hover:to-rose-700 transition-all duration-300 mb-4"
          >
            <Mail className="w-5 h-5 text-rose-100" />
            <span>{data.revealButtonText}</span>
          </motion.button>
        )}

        {/* Revealed Personalized Handwritten Note */}
        <AnimatePresence>
          {isNoteRevealed && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-6 text-left bg-gradient-to-b from-[#FFF9FA] to-[#FFF0F4] rounded-2xl p-6 sm:p-8 border border-rose-200/80 shadow-inner relative"
            >
              {/* Note Stamp */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-rose-400">
                <Sparkles className="w-4 h-4" />
                <span className="font-script text-base text-rose-500 font-bold">Personal Note</span>
              </div>

              {/* Note Title */}
              <h3 className="font-serif text-xl sm:text-2xl text-rose-700 font-bold mb-4 flex items-center gap-2">
                <span>{data.personalNote.title}</span>
              </h3>

              {/* Note Content in Handwritten Font */}
              <div className="font-script text-ink-heading text-xl sm:text-2xl leading-relaxed space-y-4 mb-6 tracking-wide">
                {data.personalNote.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Sign-off & Signature */}
              <div className="pt-4 border-t border-rose-200/60 font-script text-right">
                <p className="text-rose-500 text-lg">{data.personalNote.signOff}</p>
                <p className="text-2xl sm:text-3xl font-bold text-rose-700 mt-1">
                  {data.personalNote.signature}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Replay action */}
        <div className="mt-8 pt-4 border-t border-rose-100 flex items-center justify-center">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-rose-500 hover:text-rose-700 hover:underline transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{config.replayButtonText}</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
}
