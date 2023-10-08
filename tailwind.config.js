/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      neutral: {
        200: "#E5E5E5",
      },
      grey: "#C4C4C4",
      offwhite: "#E5E5E5",
      purple: "#F748EA",
      green: "#8BF602",
      veeblack: "#161616",
      offgrey: "#F9F9F9",
      dark: {
        50: "#edeced",
        100: "#c6c5c8",
        200: "#aba9ae",
        300: "#848289",
        400: "#6d6972",
        500: "#48444f",
        600: "#423e48",
        700: "#333038",
        800: "#28252b",
        900: "#1e1d21",
      },
      black: "#000",
      error: "#DC0000",
    },
    fontFamily: {
      Rozha: ["Rozha"],
    },
    extend: {},
  },
  plugins: [],
};
