import redWithBlackBole from "@/assets/image/imprisonment/赤背景に黒玉がぽつぽつピンポン.gif"
import mourou from "@/assets/image/imprisonment/n22_朦朧.png"
import RandomShakeXChar from "@/components/Room/phase4/TextAnim/RandomShakeXChar"
import RandomShakeYChar from "@/components/Room/phase4/TextAnim/RandomShakeYChar"
import MoaiSuicide from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/MoaiSuicide"
import useCountupMsgEnd from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useCountUpMsgEnd"

export default function MoaiCount() {
  const { setCountupMsgEnd } = useCountupMsgEnd()

  const handleTitleAnimationEnd = (
    e: React.AnimationEvent<HTMLImageElement>
  ) => {
    if (e.animationName === "fadein-up") {
      setCountupMsgEnd(true)
    }
  }

  return (
    <div className="absolute z-[100] h-full w-full">
      <div
        className="absolute left-[10vw] top-[5vh] animate-[fadein-up_1.5s] text-8xl text-blue-800"
        onAnimationEnd={handleTitleAnimationEnd}
      >
        {"".split("").map((char, idx) => {
          return idx % 2 !== 0 ? (
            <RandomShakeXChar
              key={idx}
              char={char}
              origin="text-blue-900"
              probability={0}
            />
          ) : (
            <RandomShakeYChar
              key={idx}
              char={char}
              origin="text-blue-900"
              probability={0}
            />
          )
        })}
      </div>
      <MoaiSuicide />
      <img src={mourou} className="absolute h-full w-full opacity-40" alt="" />
      <img src={redWithBlackBole} className="z-[100] h-full w-full" alt="" />
    </div>
  )
}
