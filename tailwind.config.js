/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#40aa54',
        'sec': '#0a4305',
        'cta1': '#82d6d8',
        'cta2': '#49a4a7',
        'text': '#0c0100'
      }
    },
  },
  plugins: [],
}