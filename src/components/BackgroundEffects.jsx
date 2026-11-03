import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Pre-defined heart particles for gentle ambient floating
const STATIC_HEARTS = [
  { id: 1, x: '10%', size: 18, duration: 18, delay: 0, opacity: 0.35, rotate: 12 },
  { id: 2, x: '25%', size: 24, duration: 22, delay: 3, opacity: 0.25, rotate: -15 },
  { id: 3, x: '40%', size: 16, duration: 16, delay: 1, opacity: 0.3, rotate: 8 },
  { id: 4, x: '60%', size: 28, duration: 24, delay: 5, opacity: 0.2, rotate: -20 },
  { id: 5, x: '75%', size: 20, duration: 19, delay: 2, opacity: 0.35, rotate: 14 },
  { id: 6, x: '88%', size: 22, duration: 21, delay: 4, opacity: 0.25, rotate: -10 },
  { id: 7, x: '18%', size: 14, duration: 17, delay: 6, opacity: 0.3, rotate: 25 },
  { id: 8, x: '50%', size: 15, duration: 20, delay: 7, opacity: 0.25, rotate: -8 },
  { id: 9, x: '82%', size: 19, duration: 15, delay: 8, opacity: 0.3, rotate: 18 },
];

// Sparkle stars
const SPARKLES = [
  { id: 1, top: '15%', left: '12%', size: 14, delay: 0 },
  { id: 2, top: '28%', right: '14%', size: 16, delay: 1.2 },
  { id: 3, top: '65%', left: '8%', size: 12, delay: 0.8 },
  { id: 4, top: '78%', right: '18%', size: 18, delay: 2.1 },
  { id: 5, top: '42%', left: '85%', size: 15, delay: 1.5 },
  { id: 6, top: '8%', right: '35%', size: 13, delay: 0.4 },
];

export default function BackgroundEffects() {
  const [clickHearts, setClickHearts] = useState([]);

  // Cute interactive heart bloom on click anywhere
  const handleGlobalClick = (e) => {
    // Only spawn if not clicking an interactive button
    const target = e.target;
    if (target.tagName === 'BUTTON' || target.closest('button')) {
      // Still spawn a small burst!
    }

    const newHeart = {
      id: Date.now() + Math.random(),
      x: e.clientX,
      y: e.clientY,
      color: ['#F472B6', '#FB7185', '#E11D48', '#FDA4AF'][Math.floor(Math.random() * 4)],
      rotation: (Math.random() - 0.5) * 40,
      scale: 0.8 + Math.random() * 0.5,
    };

    setClickHearts((prev) => [...prev.slice(-12), newHeart]);
  };

  useEffect(() => {
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Soft Romantic Ambient Lighting Blobs */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-rosePastel-medium/60 blur-3xl"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      <div 
        className="absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-babyPink-300/40 blur-3xl"
        style={{ transform: 'translate3d(0, 0, 0)' }}
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] rounded-full bg-white/40 blur-3xl pointer-events-none"
      />

      {/* Floating Ambient Hearts */}
      {STATIC_HEARTS.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-rosePastel-border/80 drop-shadow-sm"
          style={{
            left: heart.x,
            bottom: '-40px',
            opacity: heart.opacity,
          }}
          animate={{
            y: ['0vh', '-115vh'],
            x: [0, Math.sin(heart.id) * 28, 0, -Math.sin(heart.id) * 24, 0],
            rotate: [heart.rotate, heart.rotate + 15, heart.rotate - 15, heart.rotate],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: 'linear',
          }}
        >
          <svg
            width={heart.size}
            height={heart.size}
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="rgba(255,255,255,0.7)"
            strokeWidth="0.5"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}

      {/* Twinkling Sparkles */}
      {SPARKLES.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute text-rose-300"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            right: sparkle.right,
          }}
          animate={{
            scale: [0.6, 1.2, 0.6],
            opacity: [0.2, 0.85, 0.2],
            rotate: [0, 45, 90],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: sparkle.delay,
            ease: 'easeInOut',
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
          </svg>
        </motion.div>
      ))}

      {/* Floating Hearts spawned on user click */}
      <AnimatePresence>
        {clickHearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{
              x: h.x - 12,
              y: h.y - 12,
              scale: 0.2,
              opacity: 1,
              rotate: h.rotation,
            }}
            animate={{
              y: h.y - 70,
              scale: h.scale,
              opacity: 0,
              rotate: h.rotation + 20,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute pointer-events-none drop-shadow-md z-50"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill={h.color}
              stroke="white"
              strokeWidth="0.8"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
