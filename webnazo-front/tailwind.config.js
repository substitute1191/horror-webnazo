/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "home-bg": "url('/public/images/homebg.jpg')",
        "home-button": "url('/public/images/homebutton.png')",
        yumekawa: "url('/src/assets/image/yumekawa.jpg')",
        yumekawa2: "url('/src/assets/image/yumekawa2.jpg')",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      animation: {
        "irregular-blink": "irregular-blink 5s steps(5,jump-none) infinite",
        noise: "noise 0.2s infinite",
        float: "float 3s ease-in-out infinite",
        runaway: "runaway 0.5s linear forwards",
      },
      keyframes: {
        "irregular-blink": {
          "0%, 100%": { opacity: "1" },
          "20%": { opacity: "0.4" },
          "40%": { opacity: "1" },
          "60%": { opacity: "0.4" },
          "80%": { opacity: "1" },
        },
        noise: {
          "0%, 100%": { transform: "translate(0,0) scale(1.5)" },
          "10%": { transform: "translate(-2%,-2%) scale(1.5)" },
          "20%": { transform: "translate(-4%,2%) scale(1.5)" },
          "30%": { transform: "translate(2%,-4%) scale(1.5)" },
          "40%": { transform: "translate(-2%,6%) scale(1.5)" },
          "50%": { transform: "translate(-4%,2%) scale(1.5)" },
          "60%": { transform: "translate(6%,0) scale(1.5)" },
          "70%": { transform: "translate(0,4%) scale(1.5)" },
          "80%": { transform: "translate(-6%,0) scale(1.5)" },
          "90%": { transform: "translate(4%,2%) scale(1.5)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        runaway: {
          "0%": { transform: "translateX(0)", opacity: "1" },
          "100%": { transform: "translateX(-200%)", opacity: "0" },
        },
        fadeout: {
          "0%": { transform: "translate(1px, 1px) rotate(0deg)", opacity: 1 },
          "10%": { transform: "translate(-1px, -2px) rotate(-1deg)" },
          "20%": { transform: "translate(-3px, 0px) rotate(1deg)" },
          "30%": { transform: "translate(3px, 2px) rotate(0deg)" },
          "40%": { transform: "translate(1px, -1px) rotate(1deg)" },
          "50%": {
            transform: "translate(-1px, 2px) rotate(-1deg)",
            opacity: 0.5,
          },
          "60%": { transform: "translate(-3px, 1px) rotate(0deg)" },
          "70%": { transform: "translate(3px, 1px) rotate(-1deg)" },
          "80%": { transform: "translate(-1px, -1px) rotate(1deg)" },
          "90%": { transform: "translate(1px, 2px) rotate(0deg)" },
          "100%": { opacity: 0, display: "none" },
        },
        scaleup: {
          "0%": {
            transform: "scale(0)",
            opacity: 0,
          },
          "80%": {
            transform: "scale(1.2)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(1)",
            opacity: 1,
          },
        },
        "fadein-up": {
          "0%": {
            transform: "translateY(40px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
    fontFamily: {
      gothic: ["メイリオ", "Yu Gothic"],
      onryou: ["onryou", "sans-serif"],
      pop: ['"Yusei Magic"', "cursive"],
    },
  },
  plugins: [],
}
