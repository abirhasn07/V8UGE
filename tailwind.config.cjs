/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "outfit": `'Outfit', sans-serif;`
      }

      ,
      colors: {
        "black": '#1e1e1e',
        'orange': '#EE3D25'
      }
    },
  },
  plugins: [require("daisyui")],
}