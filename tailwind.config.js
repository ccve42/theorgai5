/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        foreground: '#000000',
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        glow: {
          white: 'rgba(255, 255, 255, 0.8)',
          blue: 'rgba(59, 130, 246, 0.6)',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'pattern': "url('/bg_altsection2.png')",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spotlight': 'spotlight 2s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        spotlight: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        },
        glow: {
          '0%, 100%': { filter: 'brightness(1)' },
          '50%': { filter: 'brightness(1.2)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 5px 0 rgba(255, 255, 255, 0.3)',
        'glow': '0 0 15px 0 rgba(255, 255, 255, 0.5)',
        'glow-lg': '0 0 25px 5px rgba(255, 255, 255, 0.4)',
        'inner-glow': 'inset 0 0 15px 0 rgba(255, 255, 255, 0.2)',
      },
    },
  },
  plugins: [],
};