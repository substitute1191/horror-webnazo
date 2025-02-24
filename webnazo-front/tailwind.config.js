import { rotate } from "three/webgpu"

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
        "crayon-bg": "url('/src/assets/image/imprisonment/crayon/背景.png')",
        "cell-purple": "url('/src/assets/image/imprisonment/cell_purple.gif')",
        "memo-paper": "url('/src/assets/image/imprisonment/紙.jpg')",
        crayongirlhead:
          "url('/src/assets/image/imprisonment/crayon/クレヨンガール顔.png')",
      },
      transformStyle: {
        "3d": "preserve-3d",
      },
      animation: {
        "irregular-blink": "irregular-blink 5s steps(5,jump-none) infinite",
        noise: "noise 0.2s infinite",
        float: "float 3s ease-in-out infinite",
        runaway: "runaway 0.5s linear forwards",
        "blur-enter": "blurIn 0.3s ease-out",
        "blur-exit": "blurOut 0.3s ease-in forwards",
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
        fadein: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
        shake: {
          "0%,100%": {
            transform: "translateX(0)",
          },
          "20%,60%": {
            transform: "translateX(1px)",
          },
          "40%,80%": {
            transform: "translateX(-1px)",
          },
        },
        "shake-y": {
          "0%,100%": {
            transform: "translateY(0)",
          },
          "20%,60%": {
            transform: "translateY(1px)",
          },
          "40%,80%": {
            transform: "translateY(-1px)",
          },
        },
        skew: {
          "0%,100%": {
            transform: "skew(0deg,0deg)",
          },
          "33%": {
            transform: "skew(15deg,15deg)",
          },
          "66%": {
            transform: "skew(-15deg,15deg)",
          },
        },
        "rotate-char": {
          "0%": {
            transform: "rotateZ(0deg)",
          },
          "100%": {
            transform: "rotateZ(360deg)",
          },
        },
        "shake-crayon-bg": {
          "0%": {
            transform: "translateX(-50%) translateY(-50.5%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-49.5%)",
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
        "fadein-family": {
          "0%": {
            transform: "translateY(-40%) translateX(-50%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(-50%) translateX(-50%)",
            opacity: 1,
          },
        },
        "fadein-alert": {
          "0%": {
            transform: "translateY(-40px) translateX(-50%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0) translateX(-50%)",
            opacity: 1,
          },
        },
        "fadein-left": {
          "0%": {
            transform: "translateX(-1000px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: 1,
          },
        },
        "fadein-right": {
          "0%": {
            transform: "translateX(1000px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0px)",
            opacity: 1,
          },
        },
        fadeout: {
          "0%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
        "fadein-left-fadeout": {
          "0%": {
            opacity: 0,
            transform: "translateX(-200px)",
          },
          "20%": {
            opacity: 1,
            transform: "translateX(0)",
          },
          "80%": {
            opacity: 1,
          },
          "90%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 0,
          },
        },
        "fadein-right-fadeout": {
          "0%": {
            opacity: 0,
            transform: "translateX(200px)",
          },
          "20%": {
            opacity: 1,
            transform: "translateX(0)",
          },
          "80%": {
            opacity: 1,
          },
          "90%": {
            opacity: 0.5,
          },
          "100%": {
            opacity: 0,
          },
        },
        "text-pulse": {
          "0%": {
            transform: "scale(1.0)",
          },
          "80%": {
            transform: "scale(2.5)",
          },
          "100%": {
            transform: "scale(2)",
          },
        },
        "text-inpulse": {
          "0%": {
            transform: "scale(2.0)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        swing: {
          "0%,100%": {
            transform: "rotateZ(-10deg)",
          },
          "25%": {
            transform: "rotateZ(10deg)",
          },
          "50%": {
            transform: "rotateZ(-10deg)",
          },
          "75%": {
            transform: "rotateZ(10deg)",
          },
        },
        blurIn: {
          from: { opacity: "0", filter: "blur(20px)" },
          to: { opacity: "1", filter: "blur(0)" },
        },
        blurOut: {
          from: { opacity: "1", filter: "blur(0)" },
          to: { opacity: "0", filter: "blur(20px)" },
        },
        "hover-r-cursor": {
          "0%": {
            transform: "translateX(0) rotate(45deg)",
          },
          "100%": {
            transform: "translateX(3px) rotate(45deg)",
          },
        },
        "hover-l-cursor": {
          "0%": {
            transform: "translateX(0) rotate(-45deg)",
          },
          "100%": {
            transform: "translateX(-3px) rotate(-45deg)",
          },
        },
        "pochi-drop-in": {
          "0%": {
            transform: "translateY(-200px)",
          },
          "100%": {
            transform: "translateY(0px)",
          },
        },
        "pochi-roll-around": {
          "10%": {
            transform: "rotate(15deg)",
          },
          "20%": {
            transform: "translateX(20%) rotate(60deg)",
          },
          "40%": {
            transform: "rotate(-10deg) skewX(30deg)",
          },
          "42%": {
            transform: "translateX(20%) rotate(30deg)",
          },
          "45%": {
            transform: "translateY(20%) rotate(80deg)",
          },
          "50%": {
            transform: "translateX(-20%) skewX(0) rotate(-10deg)",
          },
          "52%": {
            transform: "rotate(10deg)",
          },
          "53%": {
            transform: "rotate(-10deg)",
          },
          "54%": {
            transform: "rotate(10deg)",
          },
          "55%": {
            transform: "rotate(-10deg)",
          },
          "56%": {
            transform: "rotate(10deg)",
          },
          "63%": {
            transform: "rotate(-10deg)",
          },
          "64%": {
            transform: "rotate(10deg)",
          },
          "65%": {
            transform: "rotate(-10deg)",
          },
          "66%": {
            transform: "rotate(10deg)",
          },
          "100%": {
            transform: "translateX(-100%) skewY(20deg) rotate(0deg)",
          },
        },
        "menu-blow-spin": {
          "0%": {
            transform: "rotate3d(1,0,0,60deg)",
          },
          "100%": {
            transform: "rotate3d(1,0,0,120deg)",
          },
        },
        "menu-blow-away": {
          "0%": {
            transform: "rotate3d(1,0,0,60deg) scale(1) translate(0,0)",
          },
          "20%": {
            transform:
              "rotate3d(1,0,0,120deg) scale(1.2) translate(20px,-20px)",
          },
          "25%": {
            transform:
              "rotate3d(1,0,0,135deg) scale(1.3) translate(25px,-25px)",
          },
          "30%": {
            transform: "rotate3d(1,0,0,150deg) scale(1.4) translate(26px,50px)",
          },
          "35%": {
            transform: "rotate3d(1,0,0,165deg) scale(1.5) translate(27px,75px)",
          },
          "40%": {
            transform:
              "rotate3d(1,0,0,180deg) scale(1.6) translate(28px,100px)",
          },
          "45%": {
            transform:
              "rotate3d(1,0,0,195deg) scale(1.6) translate(28px,150px)",
          },
          "50%": {
            transform:
              "rotate3d(1,0,0,195deg) scale(1.6) translate(28px,200px)",
          },
          "55%": {
            transform:
              "rotate3d(1,0,0,210deg) scale(1.7) translate(28px,250px)",
          },
          "55%": {
            transform:
              "rotate3d(1,0,0,235deg) scale(1.8) translate(29px,300px)",
          },
          "60%": {
            transform:
              "rotate3d(1,0,0,250deg) scale(1.8) translate(29px,400px)",
          },
          "65%": {
            transform:
              "rotate3d(1,0,0,265deg) scale(1.8) translate(30px,500px)",
          },
          "100%": {
            transform:
              "rotate3d(1,0,0,360deg) scale(1.7) translate(29px,800px)",
          },
        },
        bounce: {
          "0%": {
            transform: "translateY(0px)",
          },
          "10%": {
            transform: "translateY(-10px)",
          },
          "20%": {
            transform: "translateY(0px)",
          },
        },
        "wobble-face": {
          "0%": {
            transform: "rotate(15deg)",
          },
          "50%": {
            transform: "rotate(-15deg)",
          },
          "100%": {
            transform: "rotate(15deg)",
          },
        },
        "skew-face": {
          "0%": {
            transform: "skewY(10deg)",
          },
          "50%": {
            transform: "skewY(-10deg)",
          },
          "100%": {
            transform: "skewY(10deg)",
          },
        },
        "neck-break": {
          "0%": {
            transform: "translateX(0)",
          },
          "1%": {
            transform: "translateX(-10px) translateY(50px) rotate(-10deg)",
          },
          "100%": {
            transform: "translateX(-340px) translateY(50px) rotate(-507deg)",
          },
        },
        "neck-rotate": {
          "0%": {
            transform: "rotateZ(0deg)",
          },
          "100%": {
            transform: "rotateZ(170deg)",
          },
        },
        "neck-rotate2": {
          "0%": {
            transform: "rotateZ(0deg)",
          },
          "100%": {
            transform: "rotateZ(-100deg)",
          },
        },
        "neck-rotate3": {
          "0%": {
            transform: "rotateZ(0deg)",
          },
          "100%": {
            transform: "rotateZ(75deg)",
          },
        },
        "body-falldown": {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "100%": {
            transform: "rotateX(120deg)",
          },
        },
        "body-falldown-backward": {
          "0%": {
            transform: "rotateX(0deg)",
          },
          "100%": {
            transform: "rotateX(-120deg)",
          },
        },
        "slide-crayon": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(-200px) translateY(-200px)" },
        },
        "scale-anim1": {
          "0%,100%": {
            transform: "scale(0.9)",
          },
          "25%": {
            transform: "scale(1.1)",
          },
          "50%": {
            transform: "scale(0.9)",
          },
          "75%": {
            transform: "scale(1.1)",
          },
        },
        "scale-anim2": {
          "0%,100%": {
            transform: "scale(1.3)",
          },
          "25%": {
            transform: "scale(0.7)",
          },
          "50%": {
            transform: "scale(1.3)",
          },
          "75%": {
            transform: "scale(0.7)",
          },
        },
        "scaleup-mama": {
          "0%": {
            transform: "scale(1) rotateZ(-90deg)",
          },
          "100%": {
            transform: "scale(20) rotateZ(-90deg)",
          },
        },
        "scaleup-mama-body": {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(25)",
          },
        },
        "move-updown": {
          "0%,100%": {
            transform: "translateY(500px)",
          },
          "50%": {
            transform: "translateY(-500px)",
          },
        },
        "move-rightleft": {
          "0%,100%": {
            transform: "translateX(500px)",
          },
          "50%": {
            transform: "translateX(-500px)",
          },
        },
        "move-diagonal": {
          "0%,100%": {
            transform: "translate(500px,500px)",
          },
          "50%": {
            transform: "translate(-500px,-500px)",
          },
        },
        rotation: {
          "0%,100%": {
            transform: "rotate(0)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
        },
      },
    },
    fontFamily: {
      hiragino: ["Hiragino Sans", "ヒラギノ角ゴシック"],
      MSPgothic: ["MS PGothic"],
      mincho: ["MS PMincho"],
      gothic: ["メイリオ", "Yu Gothic"],
      onryou: ["onryou", "sans-serif"],
      pop: ['"Yusei Magic"', "cursive"],
      ibaraji: ["ibaraji", "MS PGothic"],
      DelaGothicOne: ["DelaGothicOne", "MS PGothic"],
      ZeroGothic: ["ZeroGothic"],
      ad: ["Shrikhand", "serif"],
      productName: ["Dela Gothic One", "sans-serif"],
    },
  },
  plugins: [],
}
