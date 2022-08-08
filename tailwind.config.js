const defaultTheme = require('tailwindcss/defaultTheme')

// tailwind.config.js
module.exports = {
  future: {},
  purge: [],
  theme: {
    extend: {
      colors: {
        'background-home': '#E5E5E5',
        'color-text-card': '#092A5E'       
      },
      width: {
        'width-default': '1000px',
      }
    },
    screens: {
      'xs': '275px',
      ...defaultTheme.screens,
    },
  },
  variants: {},
  content: [
    "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    require('flowbite/plugin')
  ],
}