import ShuffleNumber from "./ShuffleNumber"
import { AnimationEvent, useContext, useEffect, useState } from "react"
import api from "@/utils/api"
import { useParams } from "react-router-dom"
import useVisibilityState from "../hooks/useVisibilityState"
import { Phase3Context } from "../Phase3BGMProvider"
import useTimingState from "../hooks/useTimingState"

const Drumroll = () => {
  const { isShowDrumroll, setIsShowDrumroll } = useVisibilityState()
  const { roomId } = useParams()
  const [rank, setRank] = useState(0)
  const { playEndroll, stopEndroll } = useContext(Phase3Context)
  const { isEndShuffleNumber } = useTimingState()

  const handleAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    if (e.animationName === "fadein-up") {
      setIsShowDrumroll(true)
    }
  }

  useEffect(() => {
    api
      .get(`/room/${roomId}/getRank`)
      .then((res) => setRank(res.data as number))
      .catch((e) => console.error(e))
  }, [roomId])

  useEffect(() => {
    if (isEndShuffleNumber) {
      setTimeout(() => playEndroll(), 1000)
    }

    return () => {
      stopEndroll()
    }
  }, [isEndShuffleNumber, playEndroll, stopEndroll])

  return (
    <div
      className="mt-12 w-[50%] animate-[fadein-up_0.7s_linear] rounded border border-slate-50 bg-slate-50 bg-opacity-70 p-12 text-center"
      onAnimationEnd={(e) => handleAnimationEnd(e)}
    >
      <span className="text-3xl">気になる順位は？</span>
      {isShowDrumroll ? (
        <ShuffleNumber display={rank} classNames="text-9xl" />
      ) : null}
    </div>
  )
}

export default Drumroll
