/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "orange-checkout": "#F2994A",
        white: "#ffffff",
        "gray-title": "#4E5150",
        "gray-1": "#333333",
        "gray-2": "#4F4F4F",
        "gray-3": "#828282",
        "gray-4": "#BDBDBD",
        "gray-5": "#E0E0E0",
      },
      fontFamily: {
        montserrat: ['"Montserrat"', "sans-serif"],
      },
      backgroundImage: {
        "arrow-down": "url('/src/utils/arrow-down.svg')",
        "arrow-up": "url('/src/utils/arrow-up.svg')",
      },
    },
  },
  plugins: [],
};
