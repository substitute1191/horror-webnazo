import nazo5 from "@/assets/image/imprisonment/謎5.jpg"
import useWhichQuestion from "./hooks/useWhichQuestion"
import PochiRoom from "./PochiRoom"
import NEWS from "@/components/Room/phase4/GetMoney/NEWS"
import GetMoneyTitle from "@/components/Room/phase4/GetMoney/GetMoneyTitle"
import PhoneTranslate from "@/components/Room/phase4/GetMoney/PhoneTranslate"

export default function GetMoneyImgManager() {
  const { whichQuestion, handleClick } = useWhichQuestion()

  return (
    <>
      <GetMoneyTitle />
      <div className="flex h-full w-full items-center justify-between px-12">
        <button
          className={`relative z-20 h-10 w-10 -rotate-45 rounded border-l-4 border-t-4 border-slate-400 hover:animate-[hover-l-cursor_0.5s_infinite_ease-out] hover:border-slate-50`}
          onClick={() => handleClick(-1)}
        ></button>
        {whichQuestion === 0 ? <NEWS /> : null}
        {whichQuestion === 1 ? <PhoneTranslate /> : null}
        {whichQuestion === 2 ? <PochiRoom /> : null}
        {whichQuestion === 4 ? <img src={nazo5} alt="" /> : null}
        <button
          className={`relative z-20 h-10 w-10 rotate-45 rounded border-r-4 border-t-4 border-slate-400 hover:animate-[hover-r-cursor_0.5s_infinite_ease-out] hover:border-slate-50`}
          onClick={() => handleClick(1)}
        ></button>
      </div>
    </>
  )
}
