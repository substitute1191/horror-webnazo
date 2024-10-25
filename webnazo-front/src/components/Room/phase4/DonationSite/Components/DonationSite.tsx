import useBGM from "@/SoundManager/useBGM"
import useCloseAdv from "../../hooks/useCloseAdv"
import Crayons from "./Crayons"
import useIsShowDonationSite from "../Hooks/useIsShowDonation"
import gline from "@/assets/sound/imprisonment/gline.mp3"
import { useEffect } from "react"

export default function DonationSite() {
  const { setIsShowDonationSite } = useIsShowDonationSite()
  const bgRef = useCloseAdv(setIsShowDonationSite)

  const { play: playG, stop: stopG } = useBGM(gline)

  useEffect(() => {
    playG()

    return () => {
      stopG()
    }
  }, [playG, stopG])

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 z-10 h-screen w-screen text-white"
    >
      <div
        className={`fixed left-[50%] top-[50%] z-[15] flex h-[85vh] w-[85vw] -translate-x-[50%] -translate-y-[50%] rounded bg-slate-50 px-12 py-8 text-black`}
      >
        <Crayons />
      </div>
    </div>
  )
}
