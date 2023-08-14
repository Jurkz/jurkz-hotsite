const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    fontFamily: {
      'raleway': ['Raleway', 'sans-serif'],
      'cabin': ['Cabin', 'sans-serif'],
    },
    extend: {},
  },
}

