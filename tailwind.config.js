/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'moobucks-green': '#006241',
        'moobucks-dark': '#1e3932',
        'moobucks-light': '#4c9c81',
        'moobucks-cream': '#f9f5eb',
        'moobucks-gold': '#cba258',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
    },
  },
  plugins: [],
}