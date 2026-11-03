import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Feather, ArrowRight, Eye } from 'lucide-react';

export default function Page2Feelings({ config, onNext }) {
  // Join the paragraphs into a continuous string with paragraph markers or stream paragraphs
  const paragraphs = config.page2.paragraphs;
  const fullText = paragraphs.join('\n\n');

  const [displayedLength, setDisplayedLength] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    // If all text is displayed, stop
    if (displayedLength >= fullText.length) {
      setIsTypingComplete(true);
      return;
    }

    // Dynamic typing speed: punctuation pauses, faster for normal characters
    const nextChar = fullText[displayedLength];
    let delay = 22; // smooth typing pace
    if (nextChar === '.' || nextChar === '!' || nextChar === '?') {
      delay = 240; // thoughtful breath pause
    } else if (nextChar === ',') {
      delay = 120;
    } else if (nextChar === '\n') {
      delay = 180;
    }

    const timer = setTimeout(() => {
      setDisplayedLength((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [displayedLength, fullText]);

  const handleSkipTyping = () => {
    setDisplayedLength(fullText.length);
    setIsTypingComplete(true);
  };

  const currentText = fullText.slice(0, displayedLength);
  const paragraphsToShow = currentText.split('\n\n');

  return (
    <div className="w-full max-w-xl mx-auto flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -15 }}
        transition={{ duration: 0.5 }}
        className="w-full bg-[#FFFDFE] rounded-3xl p-6 sm:p-10 shadow-letter-lg border border-rosePastel-border/70 relative overflow-hidden"
      >
        {/* Subtle decorative letter paper watermark */}
        <div className="absolute right-4 bottom-4 text-rose-100/50 pointer-events-none select-none">
          <Heart className="w-36 h-36 stroke-[0.8]" fill="currentColor" />
        </div>

        {/* Top Header & Quill Accent */}
        <div className="flex items-center justify-between border-b border-rose-100 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-rosePastel-light flex items-center justify-center text-rose-500 border border-rose-200/60">
              <Feather className="w-4 h-4 text-rose-500" />
            </div>
            <div>
              <span className="text-[11px] font-sans uppercase tracking-widest text-rose-400 font-semibold block">
                {config.page2.badge}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl text-ink-heading font-bold">
                {config.page2.title}
              </h2>
            </div>
          </div>

          {/* Quick Skip button if user wants to read all at once */}
          {!isTypingComplete && (
            <button
              onClick={handleSkipTyping}
              className="text-xs text-rose-400 hover:text-rose-600 transition-colors flex items-center gap-1 px-2.5 py-1 rounded-full bg-rose-50 border border-rose-100"
              title="Show full message immediately"
            >
              <Eye className="w-3 h-3" />
              <span>Show all</span>
            </button>
          )}
        </div>

        {/* Letter Body Area with Soft Lined Paper Aesthetic */}
        <div className="relative min-h-[220px] sm:min-h-[250px] font-sans text-ink-body text-base sm:text-lg leading-relaxed space-y-4">
          {paragraphsToShow.map((para, idx) => {
            const isLastParagraph = idx === paragraphsToShow.length - 1;
            return (
              <p
                key={idx}
                className={`transition-opacity duration-300 ${
                  idx === 0 ? 'text-ink-heading font-medium' : ''
                }`}
              >
                {para}
                {/* Blinking quill cursor at the end of active typing */}
                {isLastParagraph && !isTypingComplete && (
                  <span className="inline-block w-2 h-4 ml-1 bg-rose-500 animate-pulse align-middle rounded-sm" />
                )}
              </p>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="mt-8 pt-6 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-rose-400 font-medium italic">
            Written with pure sincerity 💗
          </p>

          <motion.button
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={onNext}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-white font-sans font-semibold text-base shadow-md shadow-rose-400/25 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-600 hover:to-rose-700 transition-all duration-300"
          >
            <span>{config.page2.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
