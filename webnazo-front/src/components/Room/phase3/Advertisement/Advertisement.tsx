import adv1 from "@/assets/image/adv/広告背景.png"
import adv2 from "@/assets/image/adv/広告背景2.png"
import useSE from "@/SoundManager/useSE"
import windowSE from "@/assets/sound/ビープ音1.mp3"
import { useCallback, useContext, useEffect } from "react"
import CloseButton from "./CloseButton"
import readout1 from "@/assets/sound/読み上げ/読み上げ1.mp3"
import useAnimationState from "../hooks/useAnimationState"
import clickSE from "@/assets/sound/PC-Mouse05-mp3/PC-Mouse05-1.mp3"
import { atom, useAtom } from "jotai"
import useCloseButton from "../hooks/useCloseButton"
import { Phase3Context } from "../Phase3BGMProvider"

const currentImgAtom = atom(0)

const Advertisement = () => {
  const { play: playWindow, stop: stopWindow } = useSE(windowSE)
  const { play: playReadOut1, stop: _stopReadOut1 } = useSE(readout1)
  const { play: playClick } = useSE(clickSE)
  const { isCursorAtCloseBtn } = useAnimationState()
  const { setIsClickedCloseBtn } = useCloseButton()
  const { stopKinshiku } = useContext(Phase3Context)
  const [currentImg, setCurrentImg] = useAtom(currentImgAtom)

  useEffect(() => {
    playWindow()
    playReadOut1()

    return () => {
      stopWindow()
    }
  }, [playReadOut1, playWindow, stopWindow])

  const clickCloseBtnAnim = useCallback(() => {
    playClick()
    setIsClickedCloseBtn(true)
    setTimeout(() => setIsClickedCloseBtn(false), 100)
    stopKinshiku()
    setCurrentImg(-1)
    setTimeout(() => setCurrentImg(1), 100)
  }, [playClick, setCurrentImg, setIsClickedCloseBtn, stopKinshiku])

  useEffect(() => {
    let raf: number
    if (isCursorAtCloseBtn) {
      raf = requestAnimationFrame(clickCloseBtnAnim)
    }

    return () => {
      cancelAnimationFrame(raf)
    }
  }, [clickCloseBtnAnim, isCursorAtCloseBtn, playClick, setIsClickedCloseBtn])

  return (
    <div className="absolute top-[15rem] z-10">
      <CloseButton />
      {currentImg === 0 ? (
        <img src={adv1} alt="" className="z-5 relative" />
      ) : null}
      {currentImg === 1 ? (
        <img src={adv2} alt="" className="z-5 relative" />
      ) : null}
    </div>
  )
}

export default Advertisement
