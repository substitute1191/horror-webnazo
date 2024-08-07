import { useNavigate } from "react-router-dom"
import NoiseOverlay from "./NoiseOverlay/NoiseOverlay"
import api from "@/utils/api"

interface ResType {
  roomId: string
}

const StartButton: React.FC = () => {
  const navigate = useNavigate()

  const enterRoom = (): void => {
    api
      .get<ResType>("/createRoom")
      .then((res) => {
        const roomId = res.data.roomId
        navigate(`/room/${roomId}`)
      })
      .catch((e: Error) => {
        console.error(e)
      })
  }

  return (
    <button
      className="font-onryou relative mt-14 h-24 self-center overflow-hidden bg-black bg-center bg-no-repeat px-8 text-5xl text-white"
      onClick={enterRoom}
    >
      <NoiseOverlay />
      <span className="animate-irregular-blink hover:animate-none hover:font-semibold">
        部屋を作成する
      </span>
    </button>
  )
}

export default StartButton
