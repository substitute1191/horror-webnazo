import useIsShowMemo from "@/components/Room/phase4/Phase4Top/memo/useIsShowMemo"

export default function Phase4Mission() {
  const { handleClickMemo } = useIsShowMemo()

  return (
    <div className="absolute left-[50%] top-[50%] -translate-x-[50%]">
      <div>Mission: サイコロと電子レンジを入手せよ</div>
      <button className="text-white" onClick={() => handleClickMemo(1)}>
        メモ1を開く
      </button>
    </div>
  )
}
