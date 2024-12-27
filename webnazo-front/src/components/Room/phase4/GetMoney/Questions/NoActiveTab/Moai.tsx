/* eslint-disable max-lines-per-function */
import { useRef, useCallback, useEffect, useState } from "react"
import moai from "@/assets/image/imprisonment/モアイ像.png"
import useDoorPos from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useDoorPos"
import useIsOpenDoor from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useIsOpenDoor"
import doorSE from "@/assets/sound/imprisonment/ドアを開ける2.mp3"
import choke from "@/assets/sound/imprisonment/締め付ける1.mp3"
import useSE from "@/SoundManager/useSE"
import useMorikumaRate from "@/components/Room/phase4/GetMoney/Questions/NoActiveTab/hooks/useMorikumaRate"

export default function Moai() {
  const { doorPos } = useDoorPos()
  const moaiRef = useRef<HTMLImageElement>(null)
  const rafId = useRef<number | null>(null)
  const lastTime = useRef<number>(0)
  const [left, setLeft] = useState(0)
  const [top, setTop] = useState(0)
  const [hasReachedDoor, setHasReachedDoor] = useState(false)
  const { setIsOpenDoor } = useIsOpenDoor()
  const { setMorikumaRate } = useMorikumaRate()
  const { play: playOpenDoor } = useSE(doorSE)
  const { play: playChoke } = useSE(choke)

  const approachingDoor = useCallback(
    (currentTime: number) => {
      if (currentTime - lastTime.current >= 1) {
        lastTime.current = currentTime
        setLeft((prev) => {
          if (moaiRef.current !== null) {
            const center = prev + moaiRef.current.width / 2
            if (doorPos.left < center && center < doorPos.right) {
              return prev
            }
          }
          return prev - 30
        })
        rafId.current = requestAnimationFrame(approachingDoor)
      }
    },
    [doorPos.left, doorPos.right]
  )

  // モアイの位置の初期化
  const handleMoaiLoad = () => {
    if (moaiRef.current !== null) {
      setTop(doorPos.top - moaiRef.current.height)
      setLeft(window.innerWidth)
    }
  }

  // アニメーション
  useEffect(() => {
    const animate = (currentTime: number) => {
      approachingDoor(currentTime)
      requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [approachingDoor])

  // 首吊りアニメーション
  useEffect(() => {
    if (moaiRef.current !== null) {
      const center = left + moaiRef.current.width / 2
      if (doorPos.left < center && center < doorPos.right) {
        setIsOpenDoor(true)
        setHasReachedDoor(true)
        playOpenDoor()
        setTimeout(() => {
          setIsOpenDoor(false)
          playChoke()
          setMorikumaRate((prev) => prev - 0.1)
        }, 500)
      }
    }
  }, [
    doorPos.left,
    doorPos.right,
    left,
    playChoke,
    playOpenDoor,
    setIsOpenDoor,
    setMorikumaRate,
  ])

  if (hasReachedDoor) return null

  return (
    <img
      ref={moaiRef}
      style={{
        width: "200px",
        position: "absolute",
        top: top,
        left: left,
      }}
      src={moai}
      onLoad={handleMoaiLoad}
      alt=""
    />
  )
}
