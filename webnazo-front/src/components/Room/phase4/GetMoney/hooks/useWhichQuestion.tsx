import { atom, useAtom } from "jotai"

const whichQuestionAtom = atom(0)

export default function useWhichQuestion() {
  const [whichQuestion, setWhichQuestion] = useAtom(whichQuestionAtom)

  // 画像の移動 5を足せばマイナスにも対応できる
  const handleClick = (move: number) => {
    setWhichQuestion((prev) => (prev + move + 5) % 5)
  }

  return {
    whichQuestion,
    handleClick,
  }
}
