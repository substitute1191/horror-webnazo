import { useNavigate } from "react-router-dom"
import NoiseOverlay from "./NoiseOverlay"
import api from "@/api"

interface ResType {
  roomId: string
}

const StartButton: React.FC = () => {
  const navigate = useNavigate()

  const enterRoom = (): void => {
    api
      .get<ResType>("/api/createRoom")
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
      className="overflow-hidden relative bg-black self-center mt-14 text-5xl font-onryou text-white px-8 h-24 bg-no-repeat bg-center"
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
