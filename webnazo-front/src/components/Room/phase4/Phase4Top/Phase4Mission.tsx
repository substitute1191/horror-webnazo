import MemoList from "@/components/Room/phase4/Phase4Top/memo/MemoList"
import MemoManager from "@/components/Room/phase4/Phase4Top/memo/MemoManager"

export default function Phase4Mission() {
  return (
    <div className="absolute left-[50%] top-[50%] -translate-x-[50%]">
      <div>Mission: サイコロと電子レンジを入手せよ</div>
      <MemoList />
      <MemoManager />
    </div>
  )
}
