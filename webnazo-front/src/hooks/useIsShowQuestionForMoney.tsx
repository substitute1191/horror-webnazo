import { atom, useAtom } from "jotai"

const isShowQuestionForMoneyAtom = atom(false)

export default function useIsShowQuestionForMoney() {
  const [isShowQuestionForMoney, setIsShowQuestionForMoney] = useAtom(
    isShowQuestionForMoneyAtom
  )

  return {
    isShowQuestionForMoney,
    setIsShowQuestionForMoney,
  }
}
