// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: { ...colors, onlyOne1: '#CCF2FF', onlyOne2: '#B9CAFF', onlyOne3: '#FFB2C5' },
  },
  plugins: [],
};
