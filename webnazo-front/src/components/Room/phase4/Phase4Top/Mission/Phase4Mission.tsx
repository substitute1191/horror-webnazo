import MemoList from "@/components/Room/phase4/Phase4Top/memo/MemoList"
import MemoManager from "@/components/Room/phase4/Phase4Top/memo/MemoManager"
import useMemoFlags from "@/components/Room/phase4/Phase4Top/memo/useMemoFlags"
import MemoMissionMsg from "@/components/Room/phase4/Phase4Top/Mission/MemoMissionMsg"
import { useEffect, useState } from "react"

export default function Phase4Mission() {
  const { memoFlags } = useMemoFlags()
  const [hasGetAllMemo, setHasGetAllMemo] = useState(false)

  useEffect(() => {
    if (memoFlags.every(Boolean)) {
      setHasGetAllMemo(true)
    }
  }, [memoFlags])

  return (
    <div className="absolute left-[50%] top-[50%] -translate-x-[50%]">
      <div>
        {hasGetAllMemo ? (
          "Mission: サイコロと電子レンジを入手せよ"
        ) : (
          <MemoMissionMsg />
        )}
      </div>
      <MemoList />
      <MemoManager />
    </div>
  )
}
