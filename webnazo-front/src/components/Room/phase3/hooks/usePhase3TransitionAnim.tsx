import { useCallback, useEffect, useRef } from "react"
import useAnimationState from "./useAnimationState"
import useTextManager from "./useTextManager"
import clsx from "clsx"
import useTimingState from "./useTimingState"
import rise from "@/assets/sound/Horror_Accent-Rise02-2(Long).mp3"
import useSE from "@/SoundManager/useSE"

const text = `
  蜒輔?逕溘″縺溘＞縺ｧ縺吶?ょヵ縺ｯ逕溘″縺溘＞縺ｧ縺吶?ょヵ縺ｯ菴輔→縺励※縺ｧ繧ら函縺阪◆縺?〒縺吶?
繧ｺ繝ｫ繧偵＠縺ｦ縺ｧ繧ら函縺阪◆縺?〒縺吶?ゆｻ紋ｺｺ繧定ｹｴ關ｽ縺ｨ縺励※縺ｧ繧ら函縺阪◆縺?〒縺吶?
萓九∴雹ｴ關ｽ縺ｨ縺励◆莉紋ｺｺ縺梧ｭｻ繧薙〒縺励∪縺｣縺溘→縺励※繧ら函縺阪◆縺?〒縺吶?
蜃ｺ譚･繧後?莉紋ｺｺ縺ｮ豁ｻ縺ｯ驕?縺上〒襍ｷ縺阪※縺ｻ縺励＞縺ｧ縺吶?
驕?縺上〒襍ｷ縺阪ｋ蛻?↓縺ｯ蜒輔?豌励↓縺励∪縺帙ｓ縲
霑代￥縺ｧ襍ｷ縺阪◆繧牙ｰ代＠縺ｯ蠑輔″縺壹ｋ縺九ｂ縺励ｌ縺ｾ縺帙ｓ縺後◎繧後ｒ豁｣蠖灘喧縺励∪縺吶?
蠕後〒鄒手ｫ?↓縺吶ｊ譖ｿ縺医ｋ縺九ｂ縺励ｌ縺ｾ縺帙ｓ縲
縺輔＞縺薙ｍ繧貞刈辭ｱ縺励◆繧蛾㍾蠢?′蛛上ｊ縺ｾ縺吶?
逶ｮ繧呈桃菴懊＠縺ｦ逕溘″谿九ｌ繧九↑繧牙ヵ縺ｯ縺?°縺輔∪繧ゅ＠縺ｾ縺吶?
蜒輔?逕溘″縺溘＞縺ｧ縺吶?ょヵ縺ｯ逕溘″縺溘＞縺ｧ縺吶?ょヵ縺ｯ菴輔→縺励※縺ｧ繧ら函縺阪◆縺?〒縺吶?
繧ｺ繝ｫ繧偵＠縺ｦ縺ｧ繧ら函縺阪◆縺?〒縺吶?ゆｻ紋ｺｺ繧定ｹｴ關ｽ縺ｨ縺励※縺ｧ繧ら函縺阪◆縺?〒縺吶?
萓九∴雹ｴ關ｽ縺ｨ縺励◆莉紋ｺｺ縺梧ｭｻ繧薙〒縺励∪縺｣縺溘→縺励※繧ら函縺阪◆縺?〒縺吶?
蜃ｺ譚･繧後?莉紋ｺｺ縺ｮ豁ｻ縺ｯ驕?縺上〒襍ｷ縺阪※縺ｻ縺励＞縺ｧ縺吶?
驕?縺上〒襍ｷ縺阪ｋ蛻?↓縺ｯ蜒輔?豌励↓縺励∪縺帙ｓ縲
霑代￥縺ｧ襍ｷ縺阪◆繧牙ｰ代＠縺ｯ蠑輔″縺壹ｋ縺九ｂ縺励ｌ縺ｾ縺帙ｓ縺後◎繧後ｒ豁｣蠖灘喧縺励∪縺吶?
蠕後〒鄒手ｫ?↓縺吶ｊ譖ｿ縺医ｋ縺九ｂ縺励ｌ縺ｾ縺帙ｓ縲
縺輔＞縺薙ｍ繧貞刈辭ｱ縺励◆繧蛾㍾蠢?′蛛上ｊ縺ｾ縺吶?
逶ｮ繧呈桃菴懊＠縺ｦ逕溘″谿九ｌ繧九↑繧牙ヵ縺ｯ縺?°縺輔∪繧ゅ＠縺ｾ縺吶?
`

const usePhase3TransitionAnim = () => {
  const { setSpeakingTime, setSpeechBubbleClassName } = useAnimationState()
  const {
    isEndAdvAnim,
    isStartPhase3TransitionAnim,
    setIsStartPhase3TransitionAnim,
    setIsStartErrorScene,
  } = useTimingState()
  const { setShowText } = useTextManager()
  const { play: playRise, stop: stopRise } = useSE(rise)
  const raf = useRef<number>()
  const lastTime = useRef<number>(0)

  const update = useCallback(
    (currentTime: number) => {
      if (currentTime - lastTime.current > 100) {
        lastTime.current = currentTime
        const random = Math.floor(Math.random() * 11)
        const classNames = clsx({
          ["text-red-500"]: random === 1,
          ["text-blue-400"]: random === 2,
          ["text-green-500"]: random === 3,
          ["text-purple-100"]: random === 4,
          ["text-slate-100"]: random === 5,
          ["-skew-x-[20deg]"]: random === 6,
          ["skew-x-[20deg]"]: random === 7,
        })
        setSpeechBubbleClassName(classNames)
      }
    },
    [setSpeechBubbleClassName]
  )

  useEffect(() => {
    const animate = (currentTime: number) => {
      update(currentTime)
      requestAnimationFrame(animate)
    }

    //広告アニメーションが終了してから5秒後に文字化けテキストをスタート
    if (isEndAdvAnim) {
      setTimeout(() => {
        setSpeakingTime(0)
        setShowText(text)
        raf.current = requestAnimationFrame(animate)
        setIsStartPhase3TransitionAnim(true)
        playRise()
        setTimeout(() => {
          setIsStartErrorScene(true)
        }, 7000)
      }, 5000)
    }

    return () => {
      if (raf.current !== undefined) cancelAnimationFrame(raf.current)
      stopRise()
    }
  }, [
    isEndAdvAnim,
    playRise,
    setIsStartErrorScene,
    setIsStartPhase3TransitionAnim,
    setShowText,
    setSpeakingTime,
    stopRise,
    update,
  ])

  return {
    isStartPhase3TransitionAnim,
  }
}

export default usePhase3TransitionAnim
