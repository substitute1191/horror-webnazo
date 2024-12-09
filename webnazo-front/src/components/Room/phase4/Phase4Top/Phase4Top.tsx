import Labyrinth from "./Supermarket/labyrinth/Labyrinth"
import useIsShowLabyrinth from "./Supermarket/labyrinth/useIsShowLabyrinth"
import PortalGirlHead from "@/components/Room/phase4/DonationSite/Components/Crayon/PortalGirlHead"
import DonationAdv from "@/components/Room/phase4/DonationSite/Components/DonationSite/DonationAdv"
import GetMoneyAdv from "@/components/Room/phase4/GetMoney/GetMoneyAdv"
import { reachedShopAtom } from "@/atoms/roomAtoms"
import { useAtomValue } from "jotai"
import Supermarket from "./Supermarket/SupermarketModal"
import useDetectKeyDown from "@/components/Room/phase4/Phase4Top/hooks/useDetectKeys"
import useDetectMaximize from "@/components/Room/phase4/Phase4Top/hooks/useDetectMaximize"
import Phase4Mission from "@/components/Room/phase4/Phase4Top/Phase4Mission"
import GetDiceAdv from "@/components/Room/phase4/GetDice/GetDiceAdv"
import SupermarketAdv from "./Supermarket/SupermarketAdv"

export default function Phase4Top() {
  const { isShowLabyrinth } = useIsShowLabyrinth()
  const hasBeenShop = useAtomValue(reachedShopAtom)

  useDetectKeyDown()
  useDetectMaximize()

  return (
    <div className="text-white" id="phase4Top">
      <GetMoneyAdv />
      <DonationAdv />
      <GetDiceAdv />
      <SupermarketAdv />

      <Phase4Mission />
      {/* 転がった後に残る少女の頭 */}
      <PortalGirlHead />
      {isShowLabyrinth === 1 ? (
        hasBeenShop ? (
          <Supermarket />
        ) : (
          <Labyrinth />
        )
      ) : null}
    </div>
  )
}
