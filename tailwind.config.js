/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFCD4B",
        secondary: "#4F4A45",
        white: "#ffffff",
      },
    },
  },
  plugins: [],
};
