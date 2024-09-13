import { atom, useAtom } from "jotai"
import { useCallback, useEffect, useRef } from "react"
import useAnimationState from "./hooks/useAnimationState"
import useTextManager from "./hooks/useTextManager"
import { getAdvTransitionPhrases } from "./phase3AnimUtils"
import usePhase3Title from "./usePhase3Title"
import useScreenEffect from "@/hooks/useScreenEffect"

const currentImgAtom = atom(1)
const currentImgIncAtom = atom(1)

const usePhase3AdvAnim = () => {
  const { isCursorAtCloseBtn, setBgMode } = useAnimationState()
  const { setShowText } = useTextManager()
  const [currentImg, setCurrentImg] = useAtom(currentImgAtom)
  const [currentImgInc, setCurrentImgInc] = useAtom(currentImgIncAtom)
  const { changePhase3Title } = usePhase3Title()
  const { setIsRotateScreen } = useScreenEffect()
  const rafRef = useRef<number>()
  const lastTime = useRef<number>(0)

  const clickAdv = useCallback(
    (currentTime: number) => {
      // 指定した間隔でアニメーションを切り替える
      if (currentTime - lastTime.current > 600) {
        lastTime.current = currentTime
        // 一瞬広告を非表示にする
        setCurrentImg(0)
        setBgMode((prev) => prev + 1)
        // 実際に表示する広告の番号をこちらで管理する
        setCurrentImgInc((prev) => {
          const phrase = getAdvTransitionPhrases(prev + 1)
          if (phrase !== null) setShowText(phrase)
          changePhase3Title(prev + 1)
          setIsRotateScreen(prev + 1)
          return prev === 11 ? 10 : prev + 1
        })
        // 一瞬消した後、100ms後に広告を表示する
        setTimeout(() => {
          setCurrentImg(currentImgInc)
        }, 100)
      }
    },
    [
      changePhase3Title,
      currentImgInc,
      setBgMode,
      setCurrentImg,
      setCurrentImgInc,
      setIsRotateScreen,
      setShowText,
    ]
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
