import redWithBlackBole from "@/assets/image/imprisonment/赤背景に黒玉がぽつぽつピンポン.gif"
import mourou from "@/assets/image/imprisonment/n22_朦朧.png"
import MoaiSuicide from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/MoaiSuicide"

export default function MoaiCount() {
  return (
    <div className="absolute z-[100] h-full w-full">
      <MoaiSuicide />
      <img src={mourou} className="absolute h-full w-full opacity-40" alt="" />
      <img src={redWithBlackBole} className="z-[100] h-full w-full" alt="" />
    </div>
  )
}
