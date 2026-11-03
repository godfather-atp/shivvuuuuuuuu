import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Send } from 'lucide-react';

export default function Page1Opening({ config, onNext }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Give time for envelope opening animation before navigating
    setTimeout(() => {
      onNext();
    }, 750);
  };

  return (
    <div className="w-full max-w-lg mx-auto flex flex-col items-center">
      {/* Interactive Envelope Graphic with Wax Seal */}
      <motion.div
        className="relative w-72 sm:w-80 h-44 mb-6 cursor-pointer select-none"
        onClick={handleOpen}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        title="Click to open the letter"
      >
        {/* Envelope Base Body */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5F7] to-[#FCE7F3] rounded-2xl shadow-envelope border border-rosePastel-border/50 overflow-hidden">
          {/* Envelope Pocket fold lines */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-32 bg-[#FDE2E8]/60 border-t border-rose-200/50"
            style={{
              clipPath: 'polygon(0 100%, 50% 35%, 100% 100%)',
            }}
          />
          <div 
            className="absolute inset-0 bg-[#FFF0F5]/40"
            style={{
              clipPath: 'polygon(0 0, 50% 60%, 0 100%)',
            }}
          />
          <div 
            className="absolute inset-0 bg-[#FFF0F5]/40"
            style={{
              clipPath: 'polygon(100% 0, 50% 60%, 100% 100%)',
            }}
          />

          {/* Letter Peeking Out Inside */}
          <motion.div
            className="absolute left-6 right-6 top-4 h-28 bg-white rounded-lg shadow-sm border border-rose-100 flex flex-col items-center justify-center p-3 text-center"
            animate={isOpening ? { y: -50, opacity: 0.9, scale: 1.05 } : { y: 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
          >
            <div className="w-16 h-1 bg-rose-200 rounded-full mb-2" />
            <div className="w-24 h-1 bg-rose-100 rounded-full mb-1.5" />
            <div className="w-20 h-1 bg-rose-100 rounded-full" />
            <span className="font-script text-rose-500 text-lg mt-1 font-bold">For {config.recipientName || 'You'} 💕</span>
          </motion.div>
        </div>

        {/* Envelope Flap (Top triangle) */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-24 origin-top z-10"
          animate={isOpening ? { rotateX: 180, zIndex: 0 } : { rotateX: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div 
            className="w-full h-full bg-gradient-to-b from-[#FCE7F3] to-[#FADADD] border-b border-rose-200/70 rounded-t-2xl shadow-sm"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            }}
          />
        </motion.div>

        {/* Wax Seal with Heart */}
        <motion.div
          className="absolute top-[4.6rem] left-1/2 -translate-x-1/2 z-20"
          animate={isOpening ? { scale: 1.3, opacity: 0 } : { scale: [1, 1.06, 1] }}
          transition={isOpening ? { duration: 0.3 } : { duration: 2.5, repeat: Infinity }}
        >
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E11D48] to-[#9F1239] shadow-wax flex items-center justify-center border-2 border-rose-200/60 ring-2 ring-rose-400/30">
            <Heart className="w-6 h-6 text-white fill-white drop-shadow-sm" />
          </div>
        </motion.div>
      </motion.div>

      {/* Main Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full bg-white/95 backdrop-blur-sm rounded-3xl p-6 sm:p-9 shadow-letter border border-rosePastel-border/60 relative overflow-hidden text-center"
      >
        {/* Decorative corner ribbons/stamps */}
        <div className="absolute top-3 right-4 flex items-center gap-1 text-rose-300">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span className="text-[11px] font-sans font-medium tracking-wider uppercase text-rose-400">
            {config.page1.badge}
          </span>
        </div>

        {/* Little decorative postmark */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rosePastel-light border border-rose-200/80 mb-4 text-xs font-medium text-rose-600">
          <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" />
          <span>To: {config.recipientName}</span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl text-ink-heading font-bold mb-4 tracking-tight leading-snug">
          {config.page1.greeting}
        </h1>

        {/* Letter Paragraphs */}
        <div className="space-y-3.5 text-ink-body font-sans text-base sm:text-lg leading-relaxed max-w-md mx-auto mb-8">
          {config.page1.paragraphs.map((p, idx) => (
            <p key={idx} className={idx === config.page1.paragraphs.length - 1 ? "font-medium text-rose-700 italic font-serif text-lg sm:text-xl" : ""}>
              {p}
            </p>
          ))}
        </div>

        {/* Primary Action Button */}
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleOpen}
          disabled={isOpening}
          className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full text-white font-sans font-semibold text-base sm:text-lg shadow-lg shadow-rose-400/30 overflow-hidden bg-gradient-to-r from-pink-500 via-rose-500 to-rose-600 hover:from-pink-600 hover:via-rose-600 hover:to-rose-700 transition-all duration-300"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span>{config.page1.buttonText}</span>
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </motion.button>

        {/* Helpful soft subtitle */}
        <p className="mt-4 text-xs text-ink-muted">
          {config.page1.hintText}
        </p>
      </motion.div>
    </div>
  );
}
