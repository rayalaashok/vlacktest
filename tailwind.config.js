/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      customWhite: 'rgba(244, 246, 252, 1)',
      customBlue: 'rgba(36, 5, 242, 1)'
    },

  },
  },
  plugins: [],
}
