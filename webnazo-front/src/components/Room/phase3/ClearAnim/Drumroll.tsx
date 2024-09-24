import ShuffleNumber from "./ShuffleNumber"
import { AnimationEvent, useEffect, useState } from "react"
import useAnimationState from "../hooks/useAnimationState"
import api from "@/utils/api"
import { useParams } from "react-router-dom"

const Drumroll = () => {
  const { isShowDrumroll, setIsShowDrumroll } = useAnimationState()
  const { roomId } = useParams()
  const [rank, setRank] = useState(0)

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

  return (
    <div
      className="mt-12 w-[50%] animate-[fadein-up_0.7s_linear] rounded border border-slate-50 bg-slate-50 bg-opacity-70 p-12 text-center"
      onAnimationEnd={(e) => handleAnimationEnd(e)}
    >
      <span className="text-3xl">気になる順位は？</span>
      {isShowDrumroll ? <ShuffleNumber display={rank} /> : null}
    </div>
  )
}

export default Drumroll
