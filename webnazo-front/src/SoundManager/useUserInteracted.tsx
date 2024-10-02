import { atom, useAtom } from "jotai"
import { useEffect } from "react"

// クリックやキー操作に反応してユーザーのインタラクションを管理する
const hasUserInteractedAtom = atom(false)

export default function useUserInteracted() {
  const [hasUserInteracted, setHasUserInteracted] = useAtom(
    hasUserInteractedAtom
  )

  useEffect(() => {
    const handleUserInteraction = () => {
      if (!hasUserInteracted) {
        setHasUserInteracted(true)
      }
    }

    window.addEventListener("click", handleUserInteraction)
    window.addEventListener("touchstart", handleUserInteraction)
    window.addEventListener("keydown", handleUserInteraction)

    return () => {
      window.removeEventListener("click", handleUserInteraction)
      window.removeEventListener("touchstart", handleUserInteraction)
      window.removeEventListener("keydown", handleUserInteraction)
    }
  }, [hasUserInteracted, setHasUserInteracted])

  return {
    hasUserInteracted,
    setHasUserInteracted,
  }
}
