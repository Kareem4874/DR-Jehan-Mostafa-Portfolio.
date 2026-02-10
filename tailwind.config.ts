import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8FBC8F',
          light: '#A8D5A8',
          dark: '#6B9A6B',
          50: '#F0F7F0',
          100: '#E1EFE1',
          200: '#C3DFC3',
          300: '#A8D5A8',
          400: '#8FBC8F',
          500: '#6B9A6B',
          600: '#568056',
          700: '#426642',
          800: '#2D4D2D',
          900: '#193319',
        },
        secondary: {
          DEFAULT: '#D4AF37',
          light: '#E5C864',
          dark: '#B8941D',
          50: '#FDF9ED',
          100: '#FBF3DB',
          200: '#F7E7B7',
          300: '#F3DB93',
          400: '#EFCF6F',
          500: '#D4AF37',
          600: '#B8941D',
          700: '#8A6F16',
          800: '#5C4A0F',
          900: '#2E2507',
        },
        accent: {
          DEFAULT: '#F5F5DC',
          light: '#FEFEF5',
          dark: '#E8E5CC',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-poppins)', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.8s ease-out',
        'slide-down': 'slideDown 0.8s ease-out',
        'scale-up': 'scaleUp 0.5s ease-out',
        'spin-slow': 'spin 3s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 10px 40px rgba(143, 188, 143, 0.4), 0 4px 15px rgba(212, 175, 55, 0.3)',
          },
          '50%': { 
            boxShadow: '0 15px 60px rgba(143, 188, 143, 0.6), 0 8px 30px rgba(212, 175, 55, 0.5), 0 0 40px rgba(143, 188, 143, 0.4)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
