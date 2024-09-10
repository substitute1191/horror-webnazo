import adv1 from "@/assets/image/adv/広告背景.png"
import adv2 from "@/assets/image/adv/広告背景2.png"
import adv3 from "@/assets/image/adv/広告背景3.png"
import adv4 from "@/assets/image/adv/広告背景4.png"
import adv5 from "@/assets/image/adv/広告背景5.png"
import adv6 from "@/assets/image/adv/広告背景6.png"
import adv7 from "@/assets/image/adv/広告背景7.png"
import adv8 from "@/assets/image/adv/広告背景8.png"
import adv9 from "@/assets/image/adv/広告背景9.png"
import adv10 from "@/assets/image/adv/広告背景10.png"
import useSE from "@/SoundManager/useSE"
import windowSE from "@/assets/sound/ビープ音1.mp3"
import { useCallback, useContext, useEffect } from "react"
import CloseButton from "./CloseButton"
import readout1 from "@/assets/sound/読み上げ/読み上げ1.mp3"
import readout2 from "@/assets/sound/読み上げ/読み上げ2.mp3"
import readout3 from "@/assets/sound/読み上げ/読み上げ3.mp3"
import readout4 from "@/assets/sound/読み上げ/読み上げ4.mp3"
import useAnimationState from "../hooks/useAnimationState"
import clickSE from "@/assets/sound/PC-Mouse05-mp3/PC-Mouse05-1.mp3"
import useCloseButton from "../hooks/useCloseButton"
import { Phase3Context } from "../Phase3BGMProvider"

/* eslint-disable complexity*/
const Advertisement = ({ currentImg }: { currentImg: number }) => {
  const { play: playWindow, stop: stopWindow } = useSE(windowSE)
  const { play: playReadOut1, stop: _stopReadOut1 } = useSE(readout1)
  const { play: playReadOut2, stop: _stopReadOut2 } = useSE(readout2)
  const { play: playReadOut3, stop: _stopReadOut3 } = useSE(readout3)
  const { play: playReadOut4, stop: _stopReadOut4 } = useSE(readout4)
  const { play: playClick } = useSE(clickSE)
  const { isCursorAtCloseBtn } = useAnimationState()
  const { setIsClickedCloseBtn } = useCloseButton()
  const { stopKinshiku } = useContext(Phase3Context)

  useEffect(() => {
    playWindow()

    if (currentImg <= 3) playReadOut1()
    else if (currentImg <= 6) playReadOut2()
    else if (currentImg <= 8) playReadOut3()
    else playReadOut4()

    return () => {
      stopWindow()
    }
  }, [
    currentImg,
    playReadOut1,
    playReadOut2,
    playReadOut3,
    playReadOut4,
    playWindow,
    stopWindow,
  ])

  const clickCloseBtnAnim = useCallback(() => {
    playClick()
    setIsClickedCloseBtn(true)
    setTimeout(() => setIsClickedCloseBtn(false), 100)
    stopKinshiku()
  }, [playClick, setIsClickedCloseBtn, stopKinshiku])

  useEffect(() => {
    let raf: number
    if (isCursorAtCloseBtn) {
      raf = requestAnimationFrame(clickCloseBtnAnim)
    }

    return () => {
      cancelAnimationFrame(raf)
    }
  }, [
    currentImg,
    clickCloseBtnAnim,
    isCursorAtCloseBtn,
    playClick,
    setIsClickedCloseBtn,
  ])

  return (
    <div className="absolute top-[15rem] z-10">
      {currentImg !== 0 ? <CloseButton /> : null}
      {currentImg === 1 ? (
        <img src={adv1} alt="" className="z-5 relative" />
      ) : null}
      {currentImg === 2 ? (
        <img src={adv2} alt="" className="z-5 relative" />
      ) : null}
      {currentImg === 3 ? (
        <img src={adv3} alt="" className="z-5 relative" />
      ) : null}
      {currentImg === 4 ? (
        <img src={adv4} alt="" className="z-5 relative" />
      ) : null}
      {currentImg === 5 ? (
        <img src={adv5} alt="" className="z-5 relative" />
      ) : null}
      {currentImg === 6 ? (
        <img src={adv6} alt="" className="z-5 relative" />
      ) : null}
      {currentImg === 7 ? (
        <img src={adv7} alt="" className="z-5 relative" />
      ) : null}
      {currentImg === 8 ? (
        <img src={adv8} alt="" className="z-5 relative" />
      ) : null}
      {currentImg === 9 ? (
        <img src={adv9} alt="" className="z-5 relative" />
      ) : null}
      {currentImg === 10 ? (
        <img src={adv10} alt="" className="z-5 relative" />
      ) : null}
    </div>
  )
}

export default Advertisement
