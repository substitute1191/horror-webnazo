import { atom, useAtom } from "jotai"
import { useCallback, useEffect, useRef } from "react"
import useAnimationState from "../hooks/useAnimationState"

const cursorPosAtom = atom<{ x: number; y: number }>({
  x: 0,
  y: 0,
})
const isHideCursorAtom = atom(false)

const useFakeCursor = (throttleInterval = 1000) => {
  const [cursorPos, setCursorPos] = useAtom(cursorPosAtom)
  const [isHideCursor, setIsHideCursor] = useAtom(isHideCursorAtom)
  const { isApproachingCloseBtn } = useAnimationState()
  const lastUpdateTime = useRef(0)

  const updateMousePosition = useCallback(
    (e: MouseEvent) => {
      if (isApproachingCloseBtn) return
      const now = Date.now()
      if (now - lastUpdateTime.current >= throttleInterval) {
        setCursorPos({
          x: e.clientX,
          y: e.clientY,
        })
        lastUpdateTime.current = now
      }
    },
    [isApproachingCloseBtn, setCursorPos, throttleInterval]
  )

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [updateMousePosition])

  return {
    isHideCursor,
    setIsHideCursor,
    cursorPos,
    setCursorPos,
  }
}

export default useFakeCursor
