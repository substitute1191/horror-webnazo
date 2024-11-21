import BlueArrow from "@/components/Room/phase4/GetDice/Questions/LegCount/Arrows/BlueArrow"
import GreenArrow from "@/components/Room/phase4/GetDice/Questions/LegCount/Arrows/GreenAllow"
import RedArrow from "@/components/Room/phase4/GetDice/Questions/LegCount/Arrows/RedArrow"
import useLegCountAnswer from "@/components/Room/phase4/GetDice/Questions/LegCount/hooks/useLegCountAnswer"
import LegCountAnswer from "@/components/Room/phase4/GetDice/Questions/LegCount/LegCountAnswer"

export default function LegCount() {
  useLegCountAnswer()

  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold">法則性を見破れ！</h3>
        <p className="text-lg font-thin">
          ?には単語が隠されています。同一の単語ではありません
        </p>
      </div>
      <div className="mt-4 flex flex-col items-center text-3xl font-normal">
        <p>
          カメ <RedArrow /> ヨン
        </p>
        <p>
          カメ <BlueArrow /> ? <RedArrow /> ゼロ
        </p>
        <p>
          ハト <RedArrow /> ニ
        </p>
        <p>
          ハト <GreenArrow /> ? <RedArrow /> ニ
        </p>
      </div>
      <LegCountAnswer />
    </div>
  )
}
