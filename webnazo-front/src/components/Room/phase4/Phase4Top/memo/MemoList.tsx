import useIsShowMemo from "@/components/Room/phase4/Phase4Top/memo/useIsShowMemo"
import useMemoFlags from "@/components/Room/phase4/Phase4Top/memo/useMemoFlags"
import NoteIcon from "@mui/icons-material/Note"

export default function MemoList() {
  const { memoFlags } = useMemoFlags()

  const { setIsShowMemo } = useIsShowMemo()

  const handleClickMemo = (memoIdx: number) => {
    console.log("handleClickMemo called!")
    setIsShowMemo(memoIdx)
  }

  return (
    <div className="">
      <h3 className="font-onryou mt-2 text-2xl">入手したメモ一覧</h3>
      <div className="flex justify-between gap-2 border border-blue-600 bg-blue-400 bg-opacity-30 px-4 py-2">
        {memoFlags.map((memoFlag, idx) => {
          return (
            <NoteIcon
              key={idx}
              className={`${memoFlag ? "" : "pointer-events-none opacity-20"}`}
              onClick={() => handleClickMemo(idx + 1)}
            />
          )
        })}
      </div>
    </div>
  )
}
