import { useState, useEffect, useCallback, useContext } from "react"
import useRecentFourKeys from "./useRecentFourKeys"
import api from "@/utils/api"
import { Room } from "@/types/RoomType"
import { useAtomValue, useSetAtom } from "jotai"
import { isMillionaireAtom, roomAtom, roomIdAtom } from "@/atoms/roomAtoms"
import { SocketContext } from "@/components/Room/socketContext"
import useAlert from "@/components/Room/phase4/Alert/useAlert"
import calcIsMaximized from "@/components/Room/phase4/Phase4Top/calcIsMaximized"
import useMemoFlags from "@/components/Room/phase4/Phase4Top/memo/useMemoFlags"

interface WindowState {
  isMaximized: boolean
  previousWidth: number
  previousHeight: number
}

const alert100msg = "100万円をゲットしました！"

// 最大化の検出
export default function useDetectMaximize() {
  const [windowState, setWindowState] = useState<WindowState>({
    isMaximized: false,
    previousWidth: window.innerWidth,
    previousHeight: window.innerHeight,
  })
  const [preIsMaximized, setPreIsMaximized] = useState(false)
  const { recentFourKeys } = useRecentFourKeys()
  const roomId = useAtomValue(roomIdAtom)
  const setRoom = useSetAtom(roomAtom)
  const { socket, isConnected } = useContext(SocketContext)
  const { setIsAlert, setAlertMsg } = useAlert()
  const isMillionaire = useAtomValue(isMillionaireAtom)
  const { setMemoFlags } = useMemoFlags()

  // データの更新とソケット送信
  const postMillionaire = useCallback(async () => {
    try {
      const { data } = await api.patch<Room>(`/room/${roomId}/confined`, {
        fieldName: "isMillionaire",
        newValue: true,
      })
      setRoom(data)
      // 100万円ゲットと共に一部メモを解禁
      setMemoFlags("isMillionaire")
    } catch (e) {
      console.error(e)
    }
    if (socket !== null && isConnected) {
      socket.emit("updateRoom", { roomId })
      socket.emit("submitAlert", { roomId, alertMsg: alert100msg })
    }
  }, [isConnected, roomId, setMemoFlags, setRoom, socket])

  const detectMaximize = useCallback(() => {
    const isMaximized = calcIsMaximized(windowState)

    setWindowState({
      isMaximized,
      previousWidth: innerWidth,
      previousHeight: innerHeight,
    })
    // 以前の状態を保持
    setPreIsMaximized(windowState.isMaximized)
  }, [windowState])

  useEffect(() => {
    // 謎解きの条件が初めて満たされたらデータを更新
    if (
      preIsMaximized !== windowState.isMaximized &&
      recentFourKeys === "aksd" &&
      !isMillionaire
    ) {
      void postMillionaire()
      setIsAlert(true)
      setAlertMsg(alert100msg)
    }
  }, [
    isMillionaire,
    postMillionaire,
    preIsMaximized,
    recentFourKeys,
    setAlertMsg,
    setIsAlert,
    windowState,
  ])

  useEffect(() => {
    window.addEventListener("resize", detectMaximize)
    return () => window.removeEventListener("resize", detectMaximize)
  }, [detectMaximize])

  return windowState.isMaximized
}
