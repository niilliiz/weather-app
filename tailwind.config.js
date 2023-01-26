/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // fontSize: {},
    colors: {
      light_blue: "#355773",
      dark_blue: "#022D50",
      gray_100: "#fff",
      gray_900: "#333",
    },
    extend: {
      lineHeight: {
        "extra-packed": "0.5",
      },
    },
  },
  plugins: [],
};
