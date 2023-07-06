/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ['./index.html'],
  theme: {
    colors: {
      grey: {
        100: '#F9FAFF',
        200: '#F7F7F7',
        300: '#DFDFDF',
        400: '#A9A8A8',
        500: '#5B5B5B',
        600: '#363636',
        700: '#2b2b2b'
      },
      blue: {
        100: '#ECEFFF',
        500: '#0D51A0',
      },
      teal: {
        200: '#00CAA7'
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      green: colors.green,
      red: colors.red
    },
    extend: {
      fontFamily: {
        'primary': "Galano Grotesque",
        'bebas-neue': 'Bebas Neue'
      }
    },
  },
  plugins: [],
}

