import useIsShowQuestionForDice from "@/components/Room/phase4/GetDice/hooks/useIsShowQuestionForDice"
import QuestionForDice from "@/components/Room/phase4/GetDice/QuestionForDice"
import diceAdv from "@/assets/image/imprisonment/サイコロ広告.jpg"

export default function GetDiceAdv() {
  const { isShowQuestionForDice, setIsShowQuestionForDice } =
    useIsShowQuestionForDice()

  return (
    <>
      <button
        onClick={() => setIsShowQuestionForDice(true)}
        className="absolute bottom-0 right-0 w-[30vw]"
      >
        <img src={diceAdv} alt="" />
      </button>
      {isShowQuestionForDice ? <QuestionForDice /> : null}
    </>
  )
}
