/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        main_color: "#c61f1f",
        secondary: "#e0a100",
        concierge: "#009fd0",
        green: "#088157",
        textcolor: "#a1a1a1",
        text_janr: "#4d4d4d",
        swiper_bg: "#1d1d1d",
        main_bg_color:" #111",
        button_color:"#2d2d2d",
      },
    },
  },
  plugins: [],
};
