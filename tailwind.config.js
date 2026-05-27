/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1121', // Dark blue/black background
        secondary: '#1E293B', // Lighter card background
        accent: '#3B82F6', // Blue accent for buttons/links
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Standard clean font
      }
    },
  },
  plugins: [],
}