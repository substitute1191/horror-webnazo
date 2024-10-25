import { useState, useEffect, useCallback, useContext } from "react"
import useRecentFourKeys from "./useRecentFourKeys"
import api from "@/utils/api"
import { Room } from "@/types/RoomType"
import { useAtomValue, useSetAtom } from "jotai"
import { isMillionaireAtom, roomAtom, roomIdAtom } from "@/atoms/roomAtoms"
import { SocketContext } from "../../socketContext"
import useAlert from "../Alert/useAlert"
import calcIsMaximized from "./calcIsMaximized"

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

  // データの更新とソケット送信
  const postMillionaire = useCallback(async () => {
    try {
      const { data } = await api.patch<Room>(`/room/${roomId}/confined`, {
        fieldName: "isMillionaire",
        newValue: true,
      })
      setRoom(data)
    } catch (e) {
      console.error(e)
    }
    if (socket !== null && isConnected) {
      socket.emit("updateRoom", { roomId })
      socket.emit("submitAlert", { roomId, alertMsg: alert100msg })
    }
  }, [isConnected, roomId, setRoom, socket])

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
