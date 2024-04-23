/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["montserrat", "sans-serif"],
      },
      color: {
        primary:"#00C2FF",
        secondary: "#DD0BFF",
        dark: "#111111"
      },
      container: {
        center: true,
        padding: {
          Default: "1rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
}

