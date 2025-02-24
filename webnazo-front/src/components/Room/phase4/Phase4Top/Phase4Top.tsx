import Labyrinth from "@/components/Room/phase4/Supermarket/labyrinth/Labyrinth"
import useIsShowLabyrinth from "@/components/Room/phase4/Supermarket/labyrinth/useIsShowLabyrinth"
import PortalGirlHead from "@/components/Room/phase4/DonationSite/Components/Crayon/PortalGirlHead"
import DonationAdv from "@/components/Room/phase4/DonationSite/Components/DonationSite/DonationAdv"
import GetMoneyAdv from "@/components/Room/phase4/GetMoney/GetMoneyAdv"
import { reachedShopAtom } from "@/atoms/roomAtoms"
import { useAtomValue } from "jotai"
import SupermarketModal from "@/components/Room/phase4/Supermarket/SupermarketModal"
import useDetectKeyDown from "@/components/Room/phase4/Phase4Top/hooks/useDetectKeys"
import useDetectMaximize from "@/components/Room/phase4/Phase4Top/hooks/useDetectMaximize"
import Phase4Mission from "@/components/Room/phase4/Phase4Top/Mission/Phase4Mission"
import GetDiceAdv from "@/components/Room/phase4/GetDice/GetDiceAdv"
import SupermarketAdv from "@/components/Room/phase4/Supermarket/SupermarketAdv"
import bg from "@/assets/image/imprisonment/抽象色リバース.gif"
import { useContext, useEffect } from "react"
import { Phase4BGMContext } from "@/components/Room/phase4/Phase4BGMProvider"
import RandomSE from "@/components/Room/phase4/Phase4Top/RandomSE"

export default function Phase4Top() {
  const { isShowLabyrinth } = useIsShowLabyrinth()
  const hasBeenShop = useAtomValue(reachedShopAtom)
  const { playBGM, stopBGM } = useContext(Phase4BGMContext)

  useEffect(() => {
    playBGM()

    return () => {
      stopBGM()
    }
  }, [playBGM, stopBGM])

  useDetectKeyDown()
  useDetectMaximize()

  return (
    <div className="text-white" id="phase4Top">
      <RandomSE />
      <img className="absolute z-0 h-full w-full opacity-40" src={bg} alt="" />
      {/* <img
      className="absolute z-[200] w-full h-full pointer-events-none opacity-40"
      src={fog} 
      alt="" /> */}
      <GetMoneyAdv />
      <DonationAdv />
      <GetDiceAdv />
      <SupermarketAdv />

      <Phase4Mission />
      {/* 転がった後に残る少女の頭 */}
      <PortalGirlHead />
      {isShowLabyrinth === 1 ? (
        hasBeenShop ? (
          <SupermarketModal />
        ) : (
          <Labyrinth />
        )
      ) : null}
    </div>
  )
}
