/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        onlyOne1: '#CCF2FF',
        onlyOne2: '#B9CAFF',
        onlyOne3: '#FFB2C5',
      },
      fontSize: {
        xxs: [
          '0.625rem',
          {
            lineHeight: '0.75rem',
            fontWeight: '400',
          },
        ],
      },
    },
  },
  plugins: [],
};
