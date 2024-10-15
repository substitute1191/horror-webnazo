import { atom, useAtom } from "jotai"
import { useCallback } from "react"

const isShowMemoAtom = atom(0)

export default function useIsShowMemo() {
  const [isShowMemo, setIsShowMemo] = useAtom(isShowMemoAtom)

  const handleClickMemo = (memo: number) => {
    setIsShowMemo(memo)
  }

  const resetMemo = useCallback(
    (e: MouseEvent) => {
      if (isShowMemo !== 0 && e.target === e.currentTarget) {
        setIsShowMemo(0)
      }
    },
    [isShowMemo, setIsShowMemo]
  )

  return {
    isShowMemo,
    setIsShowMemo,
    handleClickMemo,
    resetMemo,
  }
}
