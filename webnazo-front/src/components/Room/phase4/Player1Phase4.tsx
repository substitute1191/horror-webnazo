import Memo from "./Memo"
import useIsShowMemo from "./useIsShowMemo"

export default function Player1Phase4() {
  const { isShowMemo, handleClickMemo } = useIsShowMemo()

  return (
    <div className="text-white">
      私はPlayer1です。
      <button className="text-white" onClick={() => handleClickMemo(1)}>
        メモ1を開く
      </button>
      {isShowMemo === 1 ? <Memo title="◆◆◆◇◇◇◆◆◆" text="memo" /> : null}
    </div>
  )
}
