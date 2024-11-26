import { atom, useAtom } from "jotai"

const isShowQuestionForDiceAtom = atom(false)

export default function useIsShowQuestionForDice() {
  const [isShowQuestionForDice, setIsShowQuestionForDice] = useAtom(
    isShowQuestionForDiceAtom
  )

  return {
    isShowQuestionForDice,
    setIsShowQuestionForDice,
  }
}
