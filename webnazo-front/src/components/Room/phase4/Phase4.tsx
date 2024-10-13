import { useAtomValue } from "jotai"
import { myCharaAtom } from "@/atoms/roomAtoms"
import Player1Phase4 from "./Phase4Top/Player1Phase4"
import Player2Phase4 from "./Phase4Top/Player2Phase4"
import { useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { SocketContext } from "../socketContext"
import useFakeCursor from "../phase3/Cursor/useFakeCursor"

const Phase4 = () => {
  const myChara = useAtomValue(myCharaAtom)
  const { socket, isConnected } = useContext(SocketContext)
  const location = useLocation()
  const navigate = useNavigate()
  const { setIsHideCursor } = useFakeCursor()

  // カーソル表示を元に戻す
  useEffect(() => {
    setIsHideCursor(false)
  }, [setIsHideCursor])

  // 相方がメモを開いたときにそのタイトルを履歴にプッシュする
  useEffect(() => {
    if (socket !== null && isConnected) {
      socket.on("peerMemoShow", (peerTitle: string) => {
        const newPath = `${location.pathname}#${Date.now()}`
        document.title = peerTitle
        navigate(newPath, {
          replace: false,
          state: {},
        })
      })
    }

    return () => {
      if (socket !== null) {
        socket.off("peerMemoShow")
      }
    }
  }, [isConnected, location.pathname, navigate, socket])

  return (
    <div className="relative h-screen w-screen bg-black">
      {myChara === 1 ? <Player1Phase4 /> : null}
      {myChara === 2 ? <Player2Phase4 /> : null}
    </div>
  )
}

export default Phase4
