/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'love-ya': ['Love Ya Like A Sister', 'cursive'],
      },
      animation: {
        shine: "shine 1s",
      },
      keyframes: {
        shine: {
          "0%": { opacity: 0 },
          "50%": { opacity: 0.4 },
          "100%": { left: "125%" },
        },
      },

    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
}

