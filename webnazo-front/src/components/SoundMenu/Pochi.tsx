import pochi from "@/assets/image/imprisonment/怖い顔.png"
import monster1 from "@/assets/sound/imprisonment/se_dragon03.mp3"
import monster2 from "@/assets/sound/imprisonment/se_dragon05.mp3"
import splash from "@/assets/sound/imprisonment/血が飛び散る.mp3"
import crash from "@/assets/sound/imprisonment/打撃6.mp3"
import useSE from "@/SoundManager/useSE"
import { AnimationEvent, Dispatch, useEffect, useState } from "react"
import { SetStateAction } from "jotai"

// ポチの要件
// TODO サウンドメニュー表示後2秒後にポチが現れる
// TODO 上から降ってくる
// TODO モンスターの声を発しながら登場する
// TODO ポチが居なくなった後、部屋の画像を血文字で答えが記入されたものに差し替える

export default function Pochi({
  setIsVisible,
}: {
  setIsVisible: Dispatch<SetStateAction<boolean>>
}) {
  const { play: playMonster1, stop: stopMonster1 } = useSE(monster1)
  const { play: playMonster2 } = useSE(monster2)
  const { play: playCrash } = useSE(crash)
  const { play: playSplash } = useSE(splash)
  const [isEndDropin, setIsEndDropin] = useState(false)

  // 唸り声
  useEffect(() => {
    playMonster1()

    return () => {
      stopMonster1()
    }
  }, [playMonster1, stopMonster1])

  const handlePochiAnimManager = (event: AnimationEvent<HTMLImageElement>) => {
    if (event.animationName === "pochi-drop-in") {
      setIsEndDropin(true)
      playCrash()
      setTimeout(() => {
        playSplash()
      }, 750)
      setTimeout(() => {
        playMonster2()
      }, 500)
    }
    if (event.animationName === "pochi-roll-around") {
      setIsVisible(false)
    }
  }

  return (
    <img
      src={pochi}
      alt=""
      className={`absolute w-[80vw] ${isEndDropin ? "animate-[pochi-roll-around_2s_ease-in-out_forwards]" : "animate-[pochi-drop-in_0.1s_ease-out]"} `}
      onAnimationEnd={handlePochiAnimManager}
    />
  )
}
