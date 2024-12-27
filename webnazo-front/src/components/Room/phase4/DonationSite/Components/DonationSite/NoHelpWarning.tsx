import { createPortal } from "react-dom"
import cell from "@/assets/image/imprisonment/cell_bk-shake.gif"
import useStopSound from "@/components/Room/phase4/hooks/useStopSound"
import BlameMsg from "@/components/Room/phase4/DonationSite/Components/DonationSite/BlameMsg"
import useSE from "@/SoundManager/useSE"
import { useEffect } from "react"
import boo from "@/assets/sound/imprisonment/nc134317_ブーイングのガヤ.wav"

export default function NoHelpWarning() {
  useStopSound()

  const { play: playBoo, stop: stopBoo } = useSE(boo)

  useEffect(() => {
    playBoo()

    return () => {
      stopBoo()
    }
  }, [playBoo, stopBoo])

  return createPortal(
    <div className="absolute z-[50] h-full w-full bg-slate-900">
      <div className="bg-crayongirlhead absolute inset-0 min-h-[5000px] min-w-[5000px] animate-[slide-crayon_20s_linear_infinite] bg-[length:100px_100px] bg-repeat"></div>
      <div className="absolute text-5xl font-bold tracking-tight">
        {Array.from({ length: 4000 }, (_, idx) => (
          <BlameMsg key={idx} />
        ))}
      </div>
      <img
        src={cell}
        className="absolute z-[100] h-full w-full opacity-50"
        alt=""
      />
    </div>,
    document.getElementById("phase4")
  )
}
