/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontSize: {
      10: "0.625rem",
      12: "0.75rem",
      14: "0.875rem",
      base: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
    },
    colors: {
      transparent: "transparent",
      blue_100: "#D8EEEE",
      blue_200: "#337a9e",
      blue_600: "#005986",
      blue_700: "#1b4de4",
      blue_900: "#003550",
      gray_100: "#fff",
      gray_200: "#ececec",
      gray_300: "#7e7e7e",
      gray_900: "#333",
      red: "#ff66ee",
    },
    extend: {
      lineHeight: {
        "extra-packed": "1",
      },
      boxShadow: {
        "shadow-top": "0 -2px 10px rgba(0, 0, 0, 0.1)",
      },
      width: {
        logo: "5.5rem",
      },
      margin: {
        "home-sm": "6.2rem",
        "home-lg": "11.2rem",
      },
    },
  },
  plugins: [],
};
