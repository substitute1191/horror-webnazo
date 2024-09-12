import { useCallback, useEffect, useRef } from "react"
import useFakeCursor from "./Cursor/useFakeCursor"
import useTextManager from "./hooks/useTextManager"
import useAnimationState from "./hooks/useAnimationState"
import { calculateNewPosition, setWaringLines } from "./phase3AnimUtils"

// カーソルを自動的に動かすアニメーションを行うカスタムフック
const usePhase3CursorAnim = () => {
  const cursorRef = useRef<HTMLImageElement>(null)
  const { setCursorPos } = useFakeCursor()
  const { setShowText } = useTextManager()
  const { isApproachingCloseBtn, setIsCursorAtCloseBtn } = useAnimationState()
  const animationRef = useRef<number>()

  const animate = useCallback(() => {
    const closeBtn = document.getElementById("closeBtn")
    if (closeBtn === null || cursorRef.current === null) return
    const cursorPos = cursorRef.current.getBoundingClientRect()
    const closeBtnPos = closeBtn.getBoundingClientRect()

    const { x, y, distance, isCursorAtTarget } = calculateNewPosition(
      cursorPos,
      closeBtnPos,
      1.5
    )

    // 距離に応じてセリフを変更する
    const line = setWaringLines(distance)
    if (line !== null) setShowText(line)

    setCursorPos({ x, y })
    if (isCursorAtTarget) {
      setIsCursorAtCloseBtn(true)
    }
    animationRef.current = requestAnimationFrame(animate)
  }, [setCursorPos, setIsCursorAtCloseBtn, setShowText])

  useEffect(() => {
    if (isApproachingCloseBtn) {
      animationRef.current = requestAnimationFrame(animate)

      return () => {
        if (animationRef.current !== undefined)
          cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, isApproachingCloseBtn, setCursorPos])

  return { cursorRef }
}

export default usePhase3CursorAnim
