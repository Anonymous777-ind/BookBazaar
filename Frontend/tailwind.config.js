/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#2f4858",
        "custom-green": "#5a8f7b",
        "custom-gray": "#676768",
      },

      fontFamily: {
        "custom-heading": ["Philosopher", "sans-serif"],
        "custom-sub-heading-para": ["Poppins", "sans-serif"]
      },
      padding: {
        "padding-sm": "0.875rem"
      }
    },
  },
  plugins: [],
}

