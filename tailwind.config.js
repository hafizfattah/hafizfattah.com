/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './layouts/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        hfg: {
          white: '#f1f1f1',
          black: '#1A1A1A',
          gray: 'rgb(26, 26, 26)',
        },
      },
    },
  },
  plugins: [],
};
