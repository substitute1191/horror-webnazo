import nazo1 from "@/assets/image/imprisonment/謎1.png"
import nazo2 from "@/assets/image/imprisonment/謎2.png"
import nazo5 from "@/assets/image/imprisonment/謎5.jpg"
import useWhichQuestion from "./hooks/useWhichQuestion"
import PochiRoom from "./PochiRoom"

export default function GetMoneyImgManager() {
  const { whichQuestion, handleClick } = useWhichQuestion()

  return (
    <>
      <h2 className="font-DelaGothicOne mb-12 text-4xl text-white">
        100万円をゲットせよ！
      </h2>
      <div className="flex items-center justify-center">
        <button
          className={`h-10 w-10 -rotate-45 rounded border-l-4 border-t-4 border-slate-400 hover:animate-[hover-l-cursor_0.5s_infinite_ease-out] hover:border-slate-50`}
          onClick={() => handleClick(-1)}
        ></button>
        {whichQuestion === 0 ? <img src={nazo1} alt="" /> : null}
        {whichQuestion === 1 ? <img src={nazo2} alt="" /> : null}
        {whichQuestion === 2 ? <PochiRoom /> : null}
        {whichQuestion === 4 ? <img src={nazo5} alt="" /> : null}
        <button
          className={`h-10 w-10 rotate-45 rounded border-r-4 border-t-4 border-slate-400 hover:animate-[hover-r-cursor_0.5s_infinite_ease-out] hover:border-slate-50`}
          onClick={() => handleClick(1)}
        ></button>
      </div>
    </>
  )
}
