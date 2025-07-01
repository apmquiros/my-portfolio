/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#1A1A2E',
          darker: '#16213E',
          accent: '#0F3460',
          highlight: '#E94560',
          light: '#F9F9F9',
        },
      },
    },
  },
  plugins: [],
}