const colors = require('tailwindcss/colors')
module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   primary: '#f5831e',
    //   secondary: '#e56923',
    //   tpbank: '#552583',

    //   // ...
    // },
    fontFamily: {
      display: ['Noto Sans', 'sans-serif'],
      body: ['Noto Sans', 'sans-serif'],
    },
    extend: {
      colors: {
        tpbank: '#552583',
        primary: '#f5831e',
        secondary: '#e56923',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
