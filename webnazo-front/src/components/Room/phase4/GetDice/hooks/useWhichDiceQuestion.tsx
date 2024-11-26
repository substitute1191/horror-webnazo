import { atom, useAtom } from "jotai"

const QUESTION_COUNT = 7
const whichQuestionAtom = atom(0)

export default function useWhichDiceQuestion() {
  const [whichQuestion, setWhichQuestion] = useAtom(whichQuestionAtom)

  // 問題の移動
  const handleClick = (move: number) => {
    setWhichQuestion((prev) => (prev + move + QUESTION_COUNT) % QUESTION_COUNT)
  }

  return {
    whichQuestion,
    handleClick,
  }
}
