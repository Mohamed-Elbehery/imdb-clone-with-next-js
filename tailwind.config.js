/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    //todo for if using `src` directory
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
  darkMode: "class",
}
