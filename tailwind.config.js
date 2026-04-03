/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./resources/js/**/*.{js,ts,jsx,tsx}",  // ← must be this
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}