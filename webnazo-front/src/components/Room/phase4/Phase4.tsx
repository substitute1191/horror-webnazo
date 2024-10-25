import Player1Phase4 from "./Phase4Top/Player1Phase4"
import { useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { SocketContext } from "../socketContext"
import useFakeCursor from "../phase3/Cursor/useFakeCursor"
import Alert from "./Alert/Alert"
import useAlert from "./Alert/useAlert"

const Phase4 = () => {
  const { socket, isConnected } = useContext(SocketContext)
  const location = useLocation()
  const navigate = useNavigate()
  const { setIsHideCursor } = useFakeCursor()
  const { setIsAlert, setAlertMsg } = useAlert()

  // カーソル表示を元に戻す
  useEffect(() => {
    setIsHideCursor(false)
  }, [setIsHideCursor])

  // アラートを受け取る
  useEffect(() => {
    if (socket !== null && isConnected) {
      socket.on("receiveAlert", (alertMsg: string) => {
        setIsAlert(true)
        setAlertMsg(alertMsg)
      })
    }
  }, [isConnected, setAlertMsg, setIsAlert, socket])

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
      <Alert />
      <Player1Phase4 />
    </div>
  )
}

export default Phase4
