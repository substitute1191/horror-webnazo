import BlueArrow from "@/components/Room/phase4/GetDice/Questions/LegCount/Arrows/BlueArrow"
import GreenArrow from "@/components/Room/phase4/GetDice/Questions/LegCount/Arrows/GreenAllow"
import RedArrow from "@/components/Room/phase4/GetDice/Questions/LegCount/Arrows/RedArrow"
import useLegCountAnswer from "@/components/Room/phase4/GetDice/Questions/LegCount/hooks/useLegCountAnswer"
import LegCountAnswer from "@/components/Room/phase4/GetDice/Questions/LegCount/LegCountAnswer"
import TextShakeTiltScale from "@/components/Room/phase4/TextAnim/TextShakeTiltScale"

export default function LegCount() {
  useLegCountAnswer()

  return (
    <div>
      <div className="flex flex-col items-center">
        <h3 className="text-2xl font-bold">
          <TextShakeTiltScale text="法則性を見破れ！" />
        </h3>
      </div>
      <div className="mt-4 flex flex-col items-center text-3xl font-normal">
        <p>
          <TextShakeTiltScale text="カメ" /> <RedArrow />{" "}
          <TextShakeTiltScale text="ヨン" />
        </p>
        <p>
          <TextShakeTiltScale text="カメ" /> <BlueArrow />{" "}
          <TextShakeTiltScale text="サメ" /> <RedArrow />{" "}
          <TextShakeTiltScale text="ゼロ" />
        </p>
        <p>
          <TextShakeTiltScale text="ハト" /> <RedArrow />{" "}
          <TextShakeTiltScale text="ニ" />
        </p>
        <p>
          <TextShakeTiltScale text="ハト" /> <GreenArrow />{" "}
          <TextShakeTiltScale text="ヒト" /> <RedArrow />{" "}
          <TextShakeTiltScale text="ニ" />
        </p>
      </div>
      <LegCountAnswer />
    </div>
  )
}
