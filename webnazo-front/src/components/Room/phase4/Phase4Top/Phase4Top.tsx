import Labyrinth from "./labyrinth/Labyrinth"
import useIsShowLabyrinth from "./labyrinth/useIsShowLabyrinth"
import PortalGirlHead from "@/components/Room/phase4/DonationSite/Components/Crayon/PortalGirlHead"
import DonationAdv from "@/components/Room/phase4/DonationSite/Components/DonationSite/DonationAdv"
import GetMoneyAdv from "@/components/Room/phase4/GetMoney/GetMoneyAdv"
import Memo from "@/components/Room/phase4/Phase4Top/memo/Memo"
import useIsShowMemo from "@/components/Room/phase4/Phase4Top/memo/useIsShowMemo"
import { reachedShopAtom } from "@/atoms/roomAtoms"
import { useAtomValue } from "jotai"
import Supermarket from "./Supermarket/SupermarketModal"
import SupermarketAdv from "@/assets/image/imprisonment/ショッピングセンター広告.jpg"

import useDetectKeyDown from "@/components/Room/phase4/Phase4Top/hooks/useDetectKeys"
import useDetectMaximize from "@/components/Room/phase4/Phase4Top/hooks/useDetectMaximize"
import Phase4Mission from "@/components/Room/phase4/Phase4Top/Phase4Mission"
import { memo1p1 } from "@/components/Room/phase4/Phase4Top/memo/MemoText"
import GetDiceAdv from "@/components/Room/phase4/GetDice/GetDiceAdv"

export default function Phase4Top() {
  const { isShowMemo } = useIsShowMemo()
  const { isShowLabyrinth, handleClickLabyrinth } = useIsShowLabyrinth()
  const hasBeenShop = useAtomValue(reachedShopAtom)

  useDetectKeyDown()
  useDetectMaximize()

  return (
    <div className="text-white" id="phase4Top">
      <GetMoneyAdv />
      <DonationAdv />
      <GetDiceAdv />

      <Phase4Mission />
      <button
        onClick={() => handleClickLabyrinth(1)}
        className="absolute right-0 top-0 block w-[30vw]"
      >
        <img src={SupermarketAdv} alt="" />
      </button>
      {/* 転がった後に残る少女の頭 */}
      <PortalGirlHead />
      {isShowMemo === 1 ? <Memo title="◆◆◆◇◇◇◆◆◆" text={memo1p1} /> : null}
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
