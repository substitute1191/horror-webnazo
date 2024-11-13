import Labyrinth from "./labyrinth/Labyrinth"
import useIsShowLabyrinth from "./labyrinth/useIsShowLabyrinth"
import GetMoneyAdv from "../GetMoney/GetMoneyAdv"
import Memo from "./memo/Memo"
import useIsShowMemo from "./memo/useIsShowMemo"
import useDetectKeyDown from "./useDetectKeys"
import useDetectMaximize from "./useDetectMaximize"
import { reachedShopAtom } from "@/atoms/roomAtoms"
import { useAtomValue } from "jotai"
import Supermarket from "./Supermarket/SupermarketModal"

export default function Player1Phase4() {
  const { isShowMemo, handleClickMemo } = useIsShowMemo()
  const { isShowLabyrinth, handleClickLabyrinth } = useIsShowLabyrinth()
  const hasBeenShop = useAtomValue(reachedShopAtom)

  useDetectKeyDown()
  useDetectMaximize()

  return (
    <div className="flex justify-between text-white">
      私はPlayer1
      <GetMoneyAdv />
      <button className="text-white" onClick={() => handleClickMemo(1)}>
        メモ1を開く
      </button>
      <button className="text-white" onClick={() => handleClickLabyrinth(1)}>
        ショッピングセンターへ行く
      </button>
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
