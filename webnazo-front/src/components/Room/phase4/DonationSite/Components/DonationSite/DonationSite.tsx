import useBGM from "@/SoundManager/useBGM"
import useCloseAdv from "@/components/Room/phase4/hooks/useCloseAdv"
import Crayons from "@/components/Room/phase4/DonationSite/Components/Crayon/Crayons"
import useIsShowDonationSite from "@/components/Room/phase4/DonationSite/Hooks/useIsShowDonation"
import gline from "@/assets/sound/imprisonment/gline.mp3"

import { useEffect } from "react"
import { useAtomValue } from "jotai"
import { isDonatedAtom } from "@/atoms/roomAtoms"
import CrayonsAfterDonation from "@/components/Room/phase4/DonationSite/Components/Crayon/CrayonsAfterDonation"
import useGirlDeathState from "@/components/Room/phase4/DonationSite/Components/Crayon/Hooks/useGirlDeathState"

export default function DonationSite() {
  const { setIsShowDonationSite } = useIsShowDonationSite()
  const bgRef = useCloseAdv(setIsShowDonationSite)
  const { isGirlDying } = useGirlDeathState()

  // G線上のアリアを再生
  const { play: playG, stop: stopG } = useBGM(gline)

  useEffect(() => {
    if (!isGirlDying) {
      playG()
    }

    return () => {
      stopG()
    }
  }, [isGirlDying, playG, stopG])

  const isDonated = useAtomValue(isDonatedAtom)

  return (
    <div
      ref={bgRef}
      className="fixed inset-0 z-10 h-screen w-screen text-white"
    >
      <div
        className={`fixed left-[50%] top-[50%] z-[15] flex h-[85vh] w-[85vw] -translate-x-[50%] -translate-y-[50%] rounded bg-slate-50 px-12 py-8 text-black`}
      >
        {isDonated ? <CrayonsAfterDonation /> : <Crayons />}
      </div>
    </div>
  )
}
