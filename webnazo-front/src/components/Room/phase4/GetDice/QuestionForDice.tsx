import DiceQuestionManager from "@/components/Room/phase4/GetDice/DiceQuestionManager"
import useIsShowQuestionForDice from "@/components/Room/phase4/GetDice/hooks/useIsShowQuestionForDice"
import useCloseAdv from "@/components/Room/phase4/hooks/useCloseAdv"

export default function QuestionForDice() {
  const { setIsShowQuestionForDice } = useIsShowQuestionForDice()
  const bgRef = useCloseAdv(setIsShowQuestionForDice)

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 z-10 h-screen w-screen text-white"
    >
      <div
        className={`fixed left-[50%] top-[50%] z-[15] flex h-[85vh] w-[70vw] -translate-x-[50%] -translate-y-[50%] flex-col items-center rounded bg-slate-800 px-12 py-8 text-5xl font-extrabold text-slate-50`}
      >
        <h2 className="mt-12">サイコロを作成せよ！</h2>
        <DiceQuestionManager />
      </div>
    </div>
  )
}