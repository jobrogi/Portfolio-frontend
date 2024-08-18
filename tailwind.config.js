/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ccDark: "#181818",
        ccGray: "#1f1f1f",
        ccBlack: "#0f0f0f",
        ccOffWhite: "#ecd9ba",
      },
      spacing: {
        "1/2": "0.5rem", // Or any other desired value
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Merriweather: ["Merriweather", "serif"],
      },
      height: {
        400: "400px",
        410: "410px",
        500: "500px",

        81: "81rem",

        100: "100 rem",
        108: "108 rem",
        120: "120 rem",
      },
      width: {
        320: "320px",
        330: "330px",
      },
    },
  },
  plugins: [],
};
