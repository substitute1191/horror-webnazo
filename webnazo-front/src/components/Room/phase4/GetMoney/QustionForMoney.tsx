import useCloseHundred from "./hooks/useCloseGetMoney"
import GetMoneyImgManager from "./GetMoneyImgManager"

export default function QuestionForMoney() {
  const bgRef = useCloseHundred()

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 z-10 h-screen w-screen text-white"
    >
      <div
        className={`fixed left-[50%] top-[50%] z-[15] flex h-[85vh] w-[70vw] -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center rounded bg-slate-800 px-12 py-8 text-black`}
      >
        <GetMoneyImgManager />
      </div>
    </div>
  )
}
