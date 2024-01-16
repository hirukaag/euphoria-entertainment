/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#FFFFFF",
        complementary: "#75B2DF"
      },
      fontFamily: {
        outfit: ['Outfit', "sans-serif"]
      }
    },
  },
  plugins: [],
}

