import useIsShowQuestionForMoney from "../../hooks/useIsShowQuestionForMoney"
import useWhichQuestion from "../Room/phase4/GetMoney/hooks/useWhichQuestion"
import PochiApproachingSoundMenu from "./PochiApproachingSoundMenu"
import StandardSoundMenu from "./StardardSoundMenu"

// ポチが出てくる条件を満たしているかによって表示するサウンドメニューを切り替える
export default function ToggleSoundMenu() {
  const { isShowQuestionForMoney } = useIsShowQuestionForMoney()

  const { whichQuestion } = useWhichQuestion()

  return (
    <>
      {isShowQuestionForMoney && whichQuestion === 2 ? (
        <PochiApproachingSoundMenu />
      ) : (
        <StandardSoundMenu />
      )}
    </>
  )
}
