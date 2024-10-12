import { atom, useAtom } from "jotai"

const isShowPochiAtom = atom(false)

export default function useIsShowPochi() {
  const [isShowPochi, setIsShowPochi] = useAtom(isShowPochiAtom)

  return {
    isShowPochi,
    setIsShowPochi,
  }
}
