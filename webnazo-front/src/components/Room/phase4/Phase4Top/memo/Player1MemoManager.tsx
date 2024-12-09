/* eslint-disable complexity */
import useIsShowMemo from "@/components/Room/phase4/Phase4Top/memo/useIsShowMemo"
import {
  memo1p1,
  memo2p1,
  memo3p1,
  memo4p1,
  memo5p1,
  memo6p1,
  memo7p1,
  memo8p1,
  memo9p1,
  title1p1,
  title2p1,
  title3p1,
  title4p1,
  title5p1,
  title6p1,
  title7p1,
  title8p1,
  title9p1,
} from "@/components/Room/phase4/Phase4Top/memo/MemoTextPlayer1"
import Memo from "@/components/Room/phase4/Phase4Top/memo/Memo"

export default function Player1MemoManager() {
  const { isShowMemo } = useIsShowMemo()

  return (
    <>
      {isShowMemo === 1 ? <Memo title={title2p1} text={memo2p1} /> : null}
      {isShowMemo === 2 ? <Memo title={title9p1} text={memo9p1} /> : null}
      {isShowMemo === 3 ? <Memo title={title3p1} text={memo3p1} /> : null}
      {isShowMemo === 4 ? <Memo title={title5p1} text={memo5p1} /> : null}
      {isShowMemo === 5 ? <Memo title={title7p1} text={memo7p1} /> : null}
      {isShowMemo === 6 ? <Memo title={title1p1} text={memo1p1} /> : null}
      {isShowMemo === 7 ? <Memo title={title8p1} text={memo8p1} /> : null}
      {isShowMemo === 8 ? <Memo title={title6p1} text={memo6p1} /> : null}
      {isShowMemo === 9 ? <Memo title={title4p1} text={memo4p1} /> : null}
    </>
  )
}
