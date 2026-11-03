import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, HelpCircle } from 'lucide-react';

export default function Page3OneLastThing({ config, onNext }) {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -15 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#FFFDFE] rounded-3xl p-6 sm:p-10 shadow-letter-lg border border-rosePastel-border/70 relative overflow-hidden text-center"
      >
        {/* Animated Cute Beating Heart Illustration */}
        <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
          {/* Pulsing Aura Rings */}
          <motion.div
            className="absolute inset-0 rounded-full bg-rose-200/50"
            animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute inset-2 rounded-full bg-pink-100/60"
            animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0.2, 0.8] }}
            transition={{ duration: 2.2, delay: 0.3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Central Heart Icon with Heartbeat Animation */}
          <motion.div
            animate={{
              scale: [1, 1.15, 1, 1.22, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              times: [0, 0.15, 0.3, 0.45, 1],
              ease: 'easeInOut',
            }}
            className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-rose-500 via-pink-500 to-rose-400 shadow-lg shadow-rose-500/30 flex items-center justify-center text-white cursor-pointer"
            whileHover={{ scale: 1.25, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Heart className="w-9 h-9 fill-white text-white drop-shadow-sm" />
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-amber-200 animate-spin" style={{ animationDuration: '4s' }} />
          </motion.div>
        </div>

        {/* Lead In Heading */}
        <p className="font-serif italic text-rose-500 text-lg sm:text-xl font-medium mb-3">
          {config.page3.leadIn}
        </p>

        {/* Letter Paragraphs */}
        <div className="space-y-4 text-ink-body font-sans text-base sm:text-lg leading-relaxed max-w-lg mx-auto mb-6">
          {config.page3.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        {/* Highlighted Conclusion */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="inline-block px-5 py-2.5 rounded-2xl bg-rose-50/80 border border-rose-200/80 text-rose-600 font-serif font-bold text-xl sm:text-2xl mb-8 shadow-sm"
        >
          {config.page3.conclusion}
        </motion.div>

        {/* Action Button */}
        <div>
          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-sans font-semibold text-base sm:text-lg shadow-lg shadow-rose-400/30 bg-gradient-to-r from-pink-500 via-rose-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 transition-all duration-300"
          >
            <span>{config.page3.buttonText}</span>
            <HelpCircle className="w-5 h-5 text-rose-100" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
