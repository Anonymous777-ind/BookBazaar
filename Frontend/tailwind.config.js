/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom-white":"#ffffff",
        "custom-blue":"#2f4858"
      },
      
      fontFamily:{
        "custom-heading":["Philosopher", "sans-serif"]

      }
    },
  },
  plugins: [],
}

