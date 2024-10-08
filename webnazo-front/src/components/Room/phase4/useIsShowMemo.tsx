import { atom, useAtom } from "jotai"
import { useCallback } from "react"

const isShowMemoAtom = atom(0)

export default function useIsShowMemo() {
  const [isShowMemo, setIsShowMemo] = useAtom(isShowMemoAtom)

  const handleClickMemo = (memo: number) => {
    console.log("handleClickMemo called!")
    setIsShowMemo(memo)
  }

  const resetMemo = useCallback(() => {
    if (isShowMemo !== 0) {
      console.log("resetMemo called!")
      setIsShowMemo(0)
    }
  }, [isShowMemo, setIsShowMemo])

  return {
    isShowMemo,
    setIsShowMemo,
    handleClickMemo,
    resetMemo,
  }
}
