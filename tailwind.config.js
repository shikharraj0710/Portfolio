/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      heading : ['Montserrat', 'sans-serif'],
      content : ['Helvetica', 'sans-serif'],
      logoFont : ["Cinzel", "serif"]
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
