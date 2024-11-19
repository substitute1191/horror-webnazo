import Labyrinth from "./labyrinth/Labyrinth"
import useIsShowLabyrinth from "./labyrinth/useIsShowLabyrinth"
import PortalGirlHead from "@/components/Room/phase4/DonationSite/Components/Crayon/PortalGirlHead"
import DonationAdv from "@/components/Room/phase4/DonationSite/Components/DonationSite/DonationAdv"
import GetMoneyAdv from "@/components/Room/phase4/GetMoney/GetMoneyAdv"
import Memo from "@/components/Room/phase4/Phase4Top/memo/Memo"
import useIsShowMemo from "@/components/Room/phase4/Phase4Top/memo/useIsShowMemo"
import useDetectKeyDown from "@/components/Room/phase4/Phase4Top/useDetectKeys"
import useDetectMaximize from "@/components/Room/phase4/Phase4Top/useDetectMaximize"
import { reachedShopAtom } from "@/atoms/roomAtoms"
import { useAtomValue } from "jotai"
import Supermarket from "./Supermarket/SupermarketModal"
import SupermarketAdv from "@/assets/image/imprisonment/ショッピングセンター広告.jpg"

export default function Phase4Top() {
  const { isShowMemo, handleClickMemo } = useIsShowMemo()
  const { isShowLabyrinth, handleClickLabyrinth } = useIsShowLabyrinth()
  const hasBeenShop = useAtomValue(reachedShopAtom)

  useDetectKeyDown()
  useDetectMaximize()

  return (
    <div className="text-white" id="phase4Top">
      <GetMoneyAdv />
      <DonationAdv />
      <button className="text-white" onClick={() => handleClickMemo(1)}>
        メモ1を開く
      </button>
      <button
        onClick={() => handleClickLabyrinth(1)}
        className="absolute right-0 top-0 block w-[30vw]"
      >
        <img src={SupermarketAdv} alt="" />
      </button>
      <PortalGirlHead />
      {isShowMemo === 1 ? <Memo title="◆◆◆◇◇◇◆◆◆" text="memo" /> : null}
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
