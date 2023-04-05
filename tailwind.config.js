// #region Colors
const colors = {
  black: '#020202',
  'grey-darkest': '#191414',
  'grey-darker': '#222',
  'grey-dark': '#74777c',
  'grey': '#666',
  'grey-light': '#a5aebc',
  'grey-lighter': '#e4e4e4',
  'grey-lightest': '#f3f4fa',
  white: '#ffffff',
  red: '#e74c3c',

};
//#endregion

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: (theme) => ({
        center: true,
        padding: {
          DEFAULT: theme('spacing.6'),
          xl: theme('spacing.20'),
        }
      }),
      colors,
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
        serif: ["var(--font-lora)", "serif"],
      },
    },
  }
};
