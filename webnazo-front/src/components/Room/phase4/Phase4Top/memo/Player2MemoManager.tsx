/* eslint-disable complexity */
import useIsShowMemo from "@/components/Room/phase4/Phase4Top/memo/useIsShowMemo"
import Memo from "@/components/Room/phase4/Phase4Top/memo/Memo"
import {
  memo1p2,
  memo2p2,
  memo3p2,
  memo4p2,
  memo5p2,
  memo6p2,
  memo7p2,
  memo8p2,
  memo9p2,
  title1p2,
  title2p2,
  title3p2,
  title4p2,
  title5p2,
  title6p2,
  title7p2,
  title8p2,
  title9p2,
} from "@/components/Room/phase4/Phase4Top/memo/MemoTextPlayer2"

export default function Player2MemoManager() {
  const { isShowMemo } = useIsShowMemo()

  return (
    <>
      {isShowMemo === 1 ? <Memo title={title2p2} text={memo2p2} /> : null}
      {isShowMemo === 2 ? <Memo title={title9p2} text={memo9p2} /> : null}
      {isShowMemo === 3 ? <Memo title={title3p2} text={memo3p2} /> : null}
      {isShowMemo === 4 ? <Memo title={title5p2} text={memo5p2} /> : null}
      {isShowMemo === 5 ? <Memo title={title7p2} text={memo7p2} /> : null}
      {isShowMemo === 6 ? <Memo title={title1p2} text={memo1p2} /> : null}
      {isShowMemo === 7 ? <Memo title={title8p2} text={memo8p2} /> : null}
      {isShowMemo === 8 ? <Memo title={title6p2} text={memo6p2} /> : null}
      {isShowMemo === 9 ? <Memo title={title4p2} text={memo4p2} /> : null}
    </>
  )
}
