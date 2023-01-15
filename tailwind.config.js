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
      screens: {},
      colors: {
        orange: '#fb7e14',
        bgColor: '@apply bg-white',
        bgColorDark: '@apply bg-black',
      },
      transitionProperty: {
        navbar: 'padding, background-color, backdrop-filter',
      },
      fontFamily: {
        sans: ['var(--font-global)'],
        header: ['var(--font-header)'],
      },
      animation: {
        'slide-up': 'slideUpAndFade 400ms ease',
        'slide-right': 'slideRightAndFade 500ms ease',
        'slide-left': 'slideLeftAndFade 400ms ease',
        'slide-down': 'slideDownAndFade 400ms ease',
      },
      keyframes: {
        slideUpAndFade: {
          from: { opacity: 0, transform: 'translateY(2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: 0, transform: 'translateX(-10px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: 0, transform: 'translateX(2px)' },
          to: { opacity: 1, transform: 'translateX(0)' },
        },
        slideDownAndFade: {
          from: { opacity: 0, transform: 'translateY(-2px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    require('@headlessui/tailwindcss'),

    // Or with a custom prefix:
    require('@headlessui/tailwindcss')({ prefix: 'ui' }),

    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus']);
    }),
  ],
};
