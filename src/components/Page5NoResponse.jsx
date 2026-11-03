import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Mail, RotateCcw, ShieldCheck } from 'lucide-react';

export default function Page5NoResponse({ config, onReset }) {
  const [isNoteRevealed, setIsNoteRevealed] = useState(false);
  const data = config.noExperience;

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#FFFDFE] rounded-3xl p-6 sm:p-10 shadow-letter-lg border border-rosePastel-border/70 relative overflow-hidden text-center"
      >
        {/* Tender Gentle Icon */}
        <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="w-16 h-16 rounded-full bg-rose-50 border border-rose-200/80 shadow-sm flex items-center justify-center text-3xl"
          >
            🥺🤍
          </motion.div>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl text-ink-heading font-bold mb-2">
          {data.heading}
        </h2>

        {/* Subheading */}
        <p className="font-serif italic text-rose-500 text-lg sm:text-xl font-medium mb-4">
          {data.subheading}
        </p>

        {/* Respectful Paragraphs */}
        <div className="space-y-3 text-ink-body font-sans text-base sm:text-lg mb-6 max-w-md mx-auto leading-relaxed">
          {data.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Reveal Button (if not already opened) */}
        {!isNoteRevealed && (
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => setIsNoteRevealed(true)}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-white font-sans font-semibold text-base sm:text-lg shadow-lg shadow-pink-300/40 bg-gradient-to-r from-pink-400 via-rose-400 to-rose-500 hover:from-pink-500 hover:to-rose-600 transition-all duration-300 mb-4"
          >
            <Heart className="w-5 h-5 text-rose-100 fill-rose-100" />
            <span>{data.revealButtonText}</span>
          </motion.button>
        )}

        {/* Revealed Respectful Handwritten Note */}
        <AnimatePresence>
          {isNoteRevealed && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: 20 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mt-6 text-left bg-gradient-to-b from-[#FFFDFC] to-[#FFF5F7] rounded-2xl p-6 sm:p-8 border border-rose-200/70 shadow-inner relative"
            >
              {/* Note Stamp */}
              <div className="absolute top-4 right-4 flex items-center gap-1 text-rose-400">
                <ShieldCheck className="w-4 h-4 text-rose-400" />
                <span className="font-script text-base text-rose-500 font-bold">Unconditional Love</span>
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
