import GameClearMessage from "./ClearAnim/GameClearMessage"
import Drumroll from "./ClearAnim/Drumroll"
import usePhase3AnimStep from "./hooks/usePhase3AnimStep"
import Phase3Pyramid from "./Pyramid/Phase3Pyramid"
import Phase3BGMProvider from "./Phase3BGMProvider"
import Advertisement from "./Advertisement/Advertisement"
import useAnimationState from "./hooks/useAnimationState"
import FakeCursor from "./Cursor/FakeCursor"
import { useCallback, useEffect, useMemo, useRef } from "react"
import useFakeCursor from "./Cursor/useFakeCursor"
import useTextManager from "./hooks/useTextManager"

const Phase3 = () => {
  const { animStep, handleAnimEnd } = usePhase3AnimStep()
  const { setShowText } = useTextManager()
  const { isShowAdv, isApproachingCloseBtn } = useAnimationState()
  const cursorRef = useRef<HTMLImageElement>(null)
  const { setCursorPos } = useFakeCursor()
  const animationRef = useRef<number>()

  const warningLines = useMemo(
    () => ["人の話聞いてる！？", "バチボコにヤバいよ！", "あわわわわわわ"],
    []
  )

  const animate = useCallback(() => {
    const closeBtn = document.getElementById("closeBtn")
    if (closeBtn === null || cursorRef.current === null) return
    const cursorPos = cursorRef.current.getBoundingClientRect()
    const closeBtnPos = closeBtn.getBoundingClientRect()

    const dx = closeBtnPos.x - cursorPos.x
    const dy = closeBtnPos.y - cursorPos.y

    const speed = 1.5
    const distance = Math.sqrt(dx * dx + dy * dy)

    if (240 < distance && distance < 250) {
      setShowText(warningLines[0])
    }

    if (130 < distance && distance < 150) {
      setShowText(warningLines[1])
    }

    if (70 < distance && distance < 80) {
      setShowText(warningLines[2])
    }

    if (distance > speed) {
      const ratio = speed / distance
      const newX = cursorPos.x + dx * ratio
      const newY = cursorPos.y + dy * ratio
      setCursorPos({
        x: newX,
        y: newY,
      })
      animationRef.current = requestAnimationFrame(animate)
    } else {
      setCursorPos(closeBtnPos)
    }
  }, [setCursorPos, setShowText, warningLines])

  useEffect(() => {
    if (isApproachingCloseBtn) {
      animationRef.current = requestAnimationFrame(animate)

      return () => {
        if (animationRef.current !== undefined)
          cancelAnimationFrame(animationRef.current)
      }
    }
  }, [animate, isApproachingCloseBtn, setCursorPos])

  return (
    <Phase3BGMProvider>
      <div
        id="phase2"
        className="bg-yumekawa relative bg-white/40 bg-cover bg-blend-color"
      >
        <div className="font-pop mx-auto flex h-screen w-full flex-col items-center border-2 border-solid border-fuchsia-200 bg-gradient-to-t from-orange-200 via-lime-300 to-emerald-200 pb-52 pt-7 lg:w-3/5">
          <Phase3Pyramid />
          <GameClearMessage onAnimationComplete={handleAnimEnd} />
          {animStep >= 1 ? <Drumroll /> : null}
          {isShowAdv ? <Advertisement /> : null}
          <FakeCursor ref={cursorRef} />
        </div>
      </div>
    </Phase3BGMProvider>
  )
}

export default Phase3
