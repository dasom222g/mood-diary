/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'mood-gray-700': '#383737',
        'mood-purple': '#E7E3FF',
      },
      fontSize: {
        none: 0,
      },
    },
  },
  plugins: [],
};
