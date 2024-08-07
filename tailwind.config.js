/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        calora: ['Calora', 'sans-serif'],
        'calora-italic': ['Calora Italic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}