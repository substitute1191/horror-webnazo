import { useCallback, useEffect } from "react"
import useRecentFourKeys from "./useRecentFourKeys"

export default function useDetectKeyDown() {
  const { setRecentFourKeys } = useRecentFourKeys()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      setRecentFourKeys(e.key)
    },
    [setRecentFourKeys]
  )

  // 入力されたキーの値を取得
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])
}
