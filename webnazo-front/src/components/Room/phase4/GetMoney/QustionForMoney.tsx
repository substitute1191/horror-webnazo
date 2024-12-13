import GetMoneyImgManager from "@/components/Room/phase4/GetMoney/GetMoneyImgManager"
import useCloseAdv from "@/components/Room/phase4/hooks/useCloseAdv"
import useIsShowQuestionForMoney from "@/hooks/useIsShowQuestionForMoney"
import fog from "@/assets/image/imprisonment/fog_pattern03.png"

export default function QuestionForMoney() {
  const { setIsShowQuestionForMoney } = useIsShowQuestionForMoney()
  const bgRef = useCloseAdv(setIsShowQuestionForMoney)

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 z-10 h-screen w-screen text-white"
    >
      <div
        className={`fixed left-[50%] top-[50%] z-[15] flex h-[85vh] w-[70vw] -translate-x-[50%] -translate-y-[50%] flex-col items-center justify-center rounded bg-slate-800 px-12 py-8 text-black`}
      >
        <img
          src={fog}
          alt=""
          className="pointer-events-none absolute z-10 h-full w-full opacity-30"
        />
        <GetMoneyImgManager />
      </div>
    </div>
  )
}
