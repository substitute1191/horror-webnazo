import Phase4Top from "@/components/Room/phase4/Phase4Top/Phase4Top"
import { useContext, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { SocketContext } from "@/components/Room/socketContext"
import useFakeCursor from "@/components/Room/phase3/Cursor/useFakeCursor"
import Alert from "@/components/Room/phase4/Alert/Alert"
import useAlert from "@/components/Room/phase4/Alert/useAlert"
import Phase4BGMProvider from "@/components/Room/phase4/Phase4BGMProvider"

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
        console.log("peerMemoShow received!")
        const newPath = `${location.pathname}#${Date.now()}`
        navigate(newPath, {
          replace: true,
          state: {},
        })
        document.title = peerTitle
      })
    }

    return () => {
      if (socket !== null) {
        socket.off("peerMemoShow")
      }
    }
  }, [isConnected, location.pathname, navigate, socket])

  return (
    <Phase4BGMProvider>
      <div className="relative h-screen w-screen bg-black">
        <Alert />
        <Phase4Top />
      </div>
    </Phase4BGMProvider>
  )
}

export default Phase4
