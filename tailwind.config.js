/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "spin-slow-reverse": "spin 15s linear infinite reverse",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
