/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'newRed' : '#EE6352',
        'newYellow': '#FAC05E',
        'newGreen': '#59CD90',
        'newBlue': '#3FA7D6'
      }
    },
  },
  plugins: [],
}