import DonationSite from "../DonationSite/Components/DonationSite/DonationAdv"
import GetMoneyAdv from "../GetMoney/GetMoneyAdv"
import Memo from "./memo/Memo"
import useIsShowMemo from "./memo/useIsShowMemo"
import useDetectKeyDown from "./useDetectKeys"
import useDetectMaximize from "./useDetectMaximize"

export default function Player1Phase4() {
  const { isShowMemo, handleClickMemo } = useIsShowMemo()

  useDetectKeyDown()
  useDetectMaximize()

  return (
    <div className="text-white">
      <GetMoneyAdv />
      <DonationSite />
      <button className="text-white" onClick={() => handleClickMemo(1)}>
        メモ1を開く
      </button>
      {isShowMemo === 1 ? <Memo title="◆◆◆◇◇◇◆◆◆" text="memo" /> : null}
    </div>
  )
}
