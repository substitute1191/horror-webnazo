import FlipTile from "./Question1/FlipTile"
import { useAtomValue } from "jotai"
import { q2sentenceAtom, roomAtom } from "@/atoms/roomAtoms"
import Question3 from "./Question3/Question3"

// * この複雑度の無視は仕方ない
// eslint-disable-next-line complexity
const RankmatchQuestions = () => {
  const q2sentence = useAtomValue(q2sentenceAtom)
  const room = useAtomValue(roomAtom)

  return (
    <>
      <div className="text-3xl">
        問題：「Q1の答え」の「Q2の答え」を「
        {room.isDone[2] ? "クリック" : "Q3の答え"}」せよ
      </div>
      <FlipTile />
      <div className="text-3xl">
        Q2 「
        <span className="font-gothic text-[0.95em] font-bold">この文字</span>
        」を集めろ！
      </div>
      <div className="text-2xl">
        {q2sentence["や"] ? "や" : "？"}
        {q2sentence["に"] ? "に" : "？"}
        {q2sentence["ざ"] ? "ざ" : "？"}
        {q2sentence["き"] ? "き" : "？"}
        {q2sentence["の"] ? "の" : "？"}
        {q2sentence["み"] ? "み" : "？"}
        {q2sentence["ぎ"] ? "ぎ" : "？"}
        {q2sentence["は"] ? "は" : "？"}？
      </div>
      <Question3 />
    </>
  )
}

export default RankmatchQuestions
