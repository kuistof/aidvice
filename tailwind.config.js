/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: '#38bdf8', // sky-500
          light: '#7dd3fc', // sky-400
          dark: '#0ea5e9',  // sky-600
        },
        neutral: {
          100: '#f8fafc', // slate-50
          200: '#f1f5f9', // slate-100
          300: '#e2e8f0', // slate-200
          400: '#cbd5e1', // slate-300
          500: '#94a3b8', // slate-400
          600: '#64748b', // slate-500
          700: '#475569', // slate-600
          800: '#334155', // slate-700
          900: '#1e293b', // slate-800
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        'xl': '0.75rem', // 12px
        '2xl': '1rem',    // 16px
        '3xl': '1.5rem',  // 24px
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -2px rgba(0, 0, 0, 0.05)',
        'soft-md': '0 10px 15px -3px rgba(0, 0, 0, 0.07), 0 4px 6px -4px rgba(0, 0, 0, 0.05)',
      },
      keyframes: {
        fadeIn: { 
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        fadeOut: { 
          '0%': { opacity: '1', transform: 'translateY(0px)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
        // For reverse animations (handleBack)
        fadeInReverse: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
        fadeOutReverse: {
          '0%': { opacity: '1', transform: 'translateY(0px)' },
          '100%': { opacity: '0', transform: 'translateY(10px)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        fadeOut: 'fadeOut 0.3s ease-in',
        fadeInReverse: 'fadeInReverse 0.3s ease-out',
        fadeOutReverse: 'fadeOutReverse 0.3s ease-in',
      },
    },
  },
  plugins: [],
} 