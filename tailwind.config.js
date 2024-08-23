/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        Desktop: "1024px",
        Laptop: "769px",
        Tablet: "481px",
        Phone: "320px",
      },
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
        420: "420px",
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
      padding: {
        100: "100px",
        110: "110px",
        120: "120px",

        150: "150px",
        200: "200px",
      },
    },
  },
  patterns: {
    opacities: {
      100: "1",
      80: ".80",
      60: ".60",
      40: ".40",
      20: ".20",
      10: ".10",
      5: ".05",
    },
    sizes: {
      1: "0.25rem",
      2: "0.5rem",
      4: "1rem",
      6: "1.5rem",
      8: "2rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
    },
  },
  plugins: [require("tailwindcss-bg-patterns")],
};
