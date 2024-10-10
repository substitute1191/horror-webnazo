import Labyrinth from "./Labyrinth/Labyrinth"
import Memo from "./Memo"
import useIsShowLabyrinth from "./Labyrinth/useIsShowLabyrinth"
import useIsShowMemo from "./useIsShowMemo"

export default function Player1Phase4() {
  const { isShowMemo, handleClickMemo } = useIsShowMemo()
  const { isShowLabyrinth, handleClickLabyrinth } = useIsShowLabyrinth()

  return (
    <div className="flex justify-between text-white">
      私はPlayer1です。
      <button className="text-white" onClick={() => handleClickMemo(1)}>
        メモ1を開く
      </button>
      <button className="text-white" onClick={() => handleClickLabyrinth(1)}>
        ショッピングセンターへ行く
      </button>
      {isShowMemo === 1 ? <Memo title="◆◆◆◇◇◇◆◆◆" text="memo" /> : null}
      {isShowLabyrinth === 1 ? <Labyrinth /> : null}
    </div>
  )
}
