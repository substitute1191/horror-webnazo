import { atom, useAtom } from "jotai"
import { useCallback, useEffect, useRef } from "react"
import useAnimationState from "./hooks/useAnimationState"

const currentImgAtom = atom(1)
const currentImgIncAtom = atom(1)

const usePhase3AdvAnim = () => {
  const { isCursorAtCloseBtn } = useAnimationState()
  const [currentImg, setCurrentImg] = useAtom(currentImgAtom)
  const [currentImgInc, setCurrentImgInc] = useAtom(currentImgIncAtom)
  const rafRef = useRef<number>()
  const lastTime = useRef<number>(0)

  const clickAdv = useCallback(
    (currentTime: number) => {
      if (currentTime - lastTime.current > 800) {
        lastTime.current = currentTime
        setCurrentImg(0)
        setCurrentImgInc((prev) => {
          return prev === 11 ? 10 : prev + 1
        })
        setTimeout(() => {
          setCurrentImg(currentImgInc)
        }, 100)
      }
    },
    [currentImgInc, setCurrentImg, setCurrentImgInc]
  )

  useEffect(() => {
    const animate = (currentTime: number) => {
      clickAdv(currentTime)
      if (currentImgInc <= 10) rafRef.current = requestAnimationFrame(animate)
    }

    if (isCursorAtCloseBtn) {
      rafRef.current = requestAnimationFrame(animate)
    }

    return () => {
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current)
    }
  }, [clickAdv, currentImgInc, isCursorAtCloseBtn])

  return {
    currentImg,
    setCurrentImg,
  }
}

export default usePhase3AdvAnim
