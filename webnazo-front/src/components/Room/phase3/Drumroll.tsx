import { useEffect, useState } from "react"
import ShuffleNumber from "./ShuffleNumber"
import usePhase3AnimStep from "./usePhase3AnimStep"
import api from "@/utils/api"
import { useParams } from "react-router-dom"

const Drumroll = () => {
  const { roomId } = useParams()
  const [rank, setRank] = useState(0)
  useEffect(() => {
    api
      .get(`/room/${roomId}/getRank`)
      .then((res) => {
        setRank(res.data as number)
      })
      .catch((e) => {
        console.error(e)
      })
  }, [roomId])

  const { animStep, handleAnimEnd } = usePhase3AnimStep()
  return (
    <div
      className="mt-20 w-[50%] animate-[fadein-up_0.7s_linear] rounded border border-slate-50 bg-slate-50 bg-opacity-70 p-12 text-center"
      onAnimationEnd={handleAnimEnd}
    >
      <span className="text-3xl">気になる順位は？</span>
      {animStep >= 2 ? <ShuffleNumber display={rank} /> : null}
    </div>
  )
}

export default Drumroll
