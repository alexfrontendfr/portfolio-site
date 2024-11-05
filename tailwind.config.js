/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD700",
        dark: {
          DEFAULT: "#131313",
          lighter: "#1c1c1c",
          darker: "#070707",
        },
        light: {
          DEFAULT: "#ffffff",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
