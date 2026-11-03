/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        babyPink: {
          50: '#FFF5F7',
          100: '#FDECEF',
          200: '#FADADD', // Primary background requested
          300: '#F7C5CC',
          400: '#F29FAD',
          500: '#E86F85',
        },
        rosePastel: {
          light: '#FFF0F5',
          medium: '#FFE4E8',
          border: '#F8B4C0',
          accent: '#E63946',
          deep: '#D81B60',
        },
        paper: {
          cream: '#FFFDF9',
          letter: '#FFFEFA',
          border: '#F5D3D9',
        },
        ink: {
          heading: '#4A2830',
          body: '#604149',
          muted: '#8E6F76',
          romantic: '#9F2E4A',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        script: ['"Caveat"', '"Dancing Script"', 'cursive'],
        sans: ['"Quicksand"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'letter': '0 20px 40px -15px rgba(224, 112, 137, 0.18), 0 0 0 1px rgba(248, 180, 192, 0.3)',
        'letter-lg': '0 25px 60px -12px rgba(216, 27, 96, 0.15), 0 0 0 1px rgba(248, 180, 192, 0.4)',
        'envelope': '0 20px 50px rgba(190, 80, 105, 0.18)',
        'wax': '0 4px 14px rgba(180, 20, 50, 0.3)',
        'soft': '0 10px 25px -5px rgba(244, 114, 182, 0.15)',
        'glow': '0 0 25px rgba(244, 114, 182, 0.4)',
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-2deg)' },
        },
        pulseGentle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
};
