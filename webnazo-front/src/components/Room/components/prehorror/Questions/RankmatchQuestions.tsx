import FlipTile from "./Question1/FlipTile"
import { useAtomValue } from "jotai"
import { roomAtom } from "@/atoms/roomAtoms"
import Question3 from "./Question3/Question3"
import Question2 from "./Question2/Question2"

// * この複雑度の無視は仕方ない
// eslint-disable-next-line complexity
const RankmatchQuestions = () => {
  const room = useAtomValue(roomAtom)

  return (
    <>
      <div className="text-3xl">
        問題： 「{room.isDone[0] ? "このページ" : "Q1の答え"}」の 「
        {room.isDone[1] ? "まちがい" : "Q2の答え"}」を 「
        {room.isDone[2] ? "クリック" : "Q3の答え"}」せよ
      </div>
      <FlipTile />
      <Question2 />
      <Question3 />
    </>
  )
}

export default RankmatchQuestions
