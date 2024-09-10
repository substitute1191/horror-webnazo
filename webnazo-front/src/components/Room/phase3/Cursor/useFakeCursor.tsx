import { atom, useAtom } from "jotai"
import { useCallback, useEffect, useRef } from "react"
import useAnimationState from "../hooks/useAnimationState"

const cursorPosAtom = atom<{ x: number; y: number }>({
  x: 0,
  y: 0,
})
const isHideCursorAtom = atom(false)

const useFakeCursor = () => {
  const [cursorPos, setCursorPos] = useAtom(cursorPosAtom)
  const [isHideCursor, setIsHideCursor] = useAtom(isHideCursorAtom)
  const { isApproachingCloseBtn } = useAnimationState()
  const rafId = useRef<number | null>(null)
  const currentMousePos = useRef({ x: 0, y: 0 })

  const updateCursorPosition = useCallback(() => {
    if (!isApproachingCloseBtn) {
      setCursorPos({
        x: currentMousePos.current.x,
        y: currentMousePos.current.y,
      })
    }
    rafId.current = requestAnimationFrame(updateCursorPosition)
  }, [isApproachingCloseBtn, setCursorPos])

  const handleMouseMove = useCallback((e: MouseEvent) => {
    currentMousePos.current = {
      x: e.clientX,
      y: e.clientY,
    }
  }, [])

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove)
    rafId.current = requestAnimationFrame(updateCursorPosition)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [handleMouseMove, updateCursorPosition])

  return {
    isHideCursor,
    setIsHideCursor,
    cursorPos,
    setCursorPos,
  }
}

export default useFakeCursor
