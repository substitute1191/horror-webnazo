import { useCallback, useEffect, useRef } from "react"
import useAnimationState from "../useAnimationState"
import useTextManager from "../useTextManager"
import { getAdvTransitionPhrases } from "../../phase3AnimUtils"
import usePhase3Title from "../usePhase3Title"
import useScreenEffect from "@/hooks/useScreenEffect"
import useAdvAnimSE from "./useAdvAnimSE"
import useAdvImageManager from "./useAdvImageManager"
import useTimingState from "../useTimingState"

const usePhase3AdvAnim = () => {
  const { setBgMode, setSpeakingTime } = useAnimationState()
  const { isCursorAtCloseBtn, setIsEndAdvAnim } = useTimingState()
  const { setShowText } = useTextManager()
  const { currentImg, setCurrentImg, currentImgInc, setCurrentImgInc } =
    useAdvImageManager()
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
          if (prev + 1 === 11) {
            setSpeakingTime(500)
            setIsEndAdvAnim(true)
          }
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
      setIsEndAdvAnim,
      setIsRotateScreen,
      setShowText,
      setSpeakingTime,
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

  useAdvAnimSE(currentImg)
}

export default usePhase3AdvAnim
