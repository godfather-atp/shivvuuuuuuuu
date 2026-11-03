import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Smile, Sparkles } from 'lucide-react';

export default function Page4TheBigQuestion({ config, onSelectChoice }) {
  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: -20 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-white/95 backdrop-blur-sm rounded-3xl p-7 sm:p-11 shadow-letter-lg border border-rosePastel-border/70 relative overflow-hidden text-center"
      >
        {/* Decorative subtle badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rosePastel-light border border-rose-200/80 mb-5 text-xs font-semibold uppercase tracking-wider text-rose-500">
          <Sparkles className="w-3.5 h-3.5" />
          <span>{config.page4.badge}</span>
        </div>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-4xl text-ink-heading font-bold mb-4 leading-snug">
          {config.page4.heading}
        </h2>

        {/* Subheading */}
        <p className="text-ink-muted font-sans text-base sm:text-lg max-w-md mx-auto mb-10 leading-relaxed">
          {config.page4.subheading}
        </p>

        {/* Two Large Interactive Buttons Side by Side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-8">
          {/* YES Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSelectChoice('yes')}
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-gradient-to-br from-pink-500 via-rose-500 to-rose-600 text-white shadow-lg shadow-rose-400/30 hover:shadow-xl hover:shadow-rose-400/40 border border-white/20 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 fill-white text-white drop-shadow-sm" />
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide">
              {config.page4.yesButtonText}
            </span>
            <span className="text-xs text-rose-100 font-sans mt-1 opacity-90">
              I'm ready to forgive you
            </span>
          </motion.button>

          {/* NO Button */}
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onSelectChoice('no')}
            className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white hover:bg-rose-50/70 text-ink-heading shadow-md shadow-rose-200/50 hover:shadow-lg border-2 border-rose-200 hover:border-pink-300 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-rose-100/80 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🥺</span>
            </div>
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-wide text-ink-heading group-hover:text-rose-600 transition-colors">
              {config.page4.noButtonText}
            </span>
            <span className="text-xs text-ink-muted font-sans mt-1">
              I still need some time
            </span>
          </motion.button>
        </div>

        {/* Honest helper note */}
        <p className="text-xs text-rose-400/90 font-medium">
          {config.page4.helpNote}
        </p>
      </motion.div>
    </div>
  );
}
