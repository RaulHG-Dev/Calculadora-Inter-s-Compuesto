/** @type {import('tailwindcss').Config} */
// module.exports = {
//   darkMode: 'class',
// }

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins' : ["Poppins", 'sans-serif']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

