import useIsShowQuestionForDice from "@/components/Room/phase4/GetDice/hooks/useIsShowQuestionForDice"
import QuestionForDice from "@/components/Room/phase4/GetDice/QuestionForDice"
import diceAdv from "@/assets/image/imprisonment/サイコロ広告.jpg"
import dark from "@/assets/image/imprisonment/n12_周辺減光黒.png"
import noise from "@/assets/image/imprisonment/n09_グリッチノイズ中.png"

export default function GetDiceAdv() {
  const { isShowQuestionForDice, setIsShowQuestionForDice } =
    useIsShowQuestionForDice()

  return (
    <>
      <button
        onClick={() => setIsShowQuestionForDice(true)}
        className="absolute bottom-0 right-0 h-[36vh] w-[30vw]"
      >
        <img src={dark} className="absolute h-full w-full" alt="" />
        <img src={noise} className="absolute h-full w-full" alt="" />
        <img src={diceAdv} className="h-full w-full" alt="" />
      </button>
      {isShowQuestionForDice ? <QuestionForDice /> : null}
    </>
  )
}
