import useIsShowQuestionForDice from "@/components/Room/phase4/GetDice/hooks/useIsShowQuestionForDice"
import QuestionForDice from "@/components/Room/phase4/GetDice/QuestionForDice"

export default function GetDiceAdv() {
  const { isShowQuestionForDice, setIsShowQuestionForDice } =
    useIsShowQuestionForDice()

  return (
    <>
      <button
        onClick={() => setIsShowQuestionForDice(true)}
        className="absolute bottom-0 right-0"
      >
        サイコロを入手する
      </button>
      {isShowQuestionForDice ? <QuestionForDice /> : null}
    </>
  )
}
