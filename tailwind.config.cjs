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
      backgroundImage: {
        'newsletter': "url('https://ik.imagekit.io/abirhasan/v8uge_cloth_store/Banner/newsletter_atnLltTdi.png?ik-sdk-version=javascript-1.4.3&updatedAt=1667674225656')"
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