import { useEffect, useState } from "react"
import drumrollSE from "@/assets/sound/ドラムロール.mp3"
import drumrollEndSE from "@/assets/sound/ロールの閉め.mp3"
import useSE from "@/SoundManager/useSE"

const ShuffleNumber = ({ display }: { display: number }) => {
  const [currentNumber, setCurrentNumber] = useState(0)
  const { play: drumrollPlay, stop: drumrollStop } = useSE(drumrollSE)
  const { play: drumrollEndPlay, stop: _drumrollEndStop } = useSE(drumrollEndSE)

  useEffect(() => {
    drumrollPlay()
    const intervalId = setInterval(() => {
      setCurrentNumber(Math.floor(Math.random() * 100))
    }, 50)

    setTimeout(() => {
      drumrollStop()
      clearInterval(intervalId)
      setCurrentNumber(display)
      drumrollEndPlay()
    }, 3000)

    return () => {
      drumrollStop()
      clearInterval(intervalId)
    }
  }, [display, drumrollEndPlay, drumrollPlay, drumrollStop])

  return (
    <div className={`text-3xl`}>
      <span>{currentNumber}</span>位
    </div>
  )
}

export default ShuffleNumber
