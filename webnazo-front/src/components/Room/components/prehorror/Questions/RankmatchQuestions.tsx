import FlipTile from "./Question1/FlipTile"
import { useAtomValue } from "jotai"
import { q2sentenceAtom } from "@/atoms/roomAtoms"
import mapSrc from "@/assets/image/map.png"

// eslint-disable-next-line complexity
const RankmatchQuestions = () => {
  const q2sentence = useAtomValue(q2sentenceAtom)

  return (
    <>
      <div className="text-3xl">
        問題：「Q1の答え」の「Q2の答え」を「Q3の答え」せよ
      </div>
      <FlipTile />
      <div className="text-3xl">
        Q2 「<span className="font-gothic text-[0.95em] font-bold">これ</span>
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
      <div className="text-3xl">Q3 地図を完成させろ！</div>
      <div>
        <img src={mapSrc} alt="" />
      </div>
    </>
  )
}

export default RankmatchQuestions
