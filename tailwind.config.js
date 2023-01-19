/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '350px',
      },
      colors: {
        primary: '#fb7e14',
        secondary: '#fc8e06',
      },
      fontFamily: {
        sans: ['var(--font-global)'],
        header: ['var(--font-header)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'slide-up': 'slideUpAndFade 500ms ease',
        'slide-right': 'slideRightAndFade 500ms ease',
        'slide-left': 'slideLeftAndFade 500ms ease',
        'slide-down': 'slideDownAndFade 500ms ease',
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-10px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(10px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-10px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),

    // Custom variant for focus OR hover: called "hocus"
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
};
