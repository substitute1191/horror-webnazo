import PortalGirlHead from "@/components/Room/phase4/DonationSite/Components/Crayon/PortalGirlHead"
import DonationAdv from "@/components/Room/phase4/DonationSite/Components/DonationSite/DonationAdv"
import GetMoneyAdv from "@/components/Room/phase4/GetMoney/GetMoneyAdv"
import Memo from "@/components/Room/phase4/Phase4Top/memo/Memo"
import useIsShowMemo from "@/components/Room/phase4/Phase4Top/memo/useIsShowMemo"
import useDetectKeyDown from "@/components/Room/phase4/Phase4Top/useDetectKeys"
import useDetectMaximize from "@/components/Room/phase4/Phase4Top/useDetectMaximize"

export default function Phase4Top() {
  const { isShowMemo, handleClickMemo } = useIsShowMemo()

  useDetectKeyDown()
  useDetectMaximize()

  return (
    <div className="text-white" id="phase4Top">
      <GetMoneyAdv />
      <DonationAdv />
      <button className="text-white" onClick={() => handleClickMemo(1)}>
        メモ1を開く
      </button>
      <PortalGirlHead />
      {isShowMemo === 1 ? <Memo title="◆◆◆◇◇◇◆◆◆" text="memo" /> : null}
    </div>
  )
}
