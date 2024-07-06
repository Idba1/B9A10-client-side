/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    theme: {
      extend: {
        colors: {
          'royal-blue': '#4169E1',
          'gold': '#FFD700',
          'coral': '#FF7F50',
          'charcoal': '#333333',
          'gray-500': '#888888',
          'sky-800': '#2C5282',
        }
      }
    }
  },
}

