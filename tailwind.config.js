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
      12: "0.75rem",
      14: "0.875rem",
      base: "1rem",
      18: "1.125rem",
      20: "1.25rem",
      24: "1.5rem",
    },
    colors: {
      light_blue: "#355773",
      dark_blue: "#022D50",
      gray_100: "#fff",
      gray_300: "#7e7e7e",
      gray_900: "#333",
    },
    extend: {
      lineHeight: {
        "extra-packed": "0.5",
      },
      boxShadow: {
        "shadow-top": "0 -2px 10px rgba(0, 0, 0, 0.1)",
      },
      width: {
        logo: "5.5rem",
      },
    },
  },
  plugins: [],
};
