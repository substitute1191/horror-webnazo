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
      },
    },
    fontFamily: {
      gothic: ["YuGothic", "Yu Gothic"],
      onryou: ["onryou", "sans-serif"],
      pop: ['"Yusei Magic"', "cursive"],
    },
  },
  plugins: [],
}
