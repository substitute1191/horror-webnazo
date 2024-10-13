import { useState, useEffect, useCallback, useContext } from "react"
import useRecentFourKeys from "./useRecentFourKeys"
import api from "@/utils/api"
import { Room } from "@/types/RoomType"
import { useAtomValue, useSetAtom } from "jotai"
import { roomAtom, roomIdAtom } from "@/atoms/roomAtoms"
import { SocketContext } from "../../socketContext"

interface WindowState {
  isMaximized: boolean
  previousWidth: number
  previousHeight: number
}

// 最大化の検出
export default function useDetectMaximize() {
  const [windowState, setWindowState] = useState<WindowState>({
    isMaximized: false,
    previousWidth: window.innerWidth,
    previousHeight: window.innerHeight,
  })
  const { recentFourKeys } = useRecentFourKeys()
  const roomId = useAtomValue(roomIdAtom)
  const setRoom = useSetAtom(roomAtom)
  const { socket, isConnected } = useContext(SocketContext)

  const detectMaximize = useCallback(() => {
    const { innerWidth, innerHeight, outerWidth, outerHeight, screen } = window

    // 方法1: 内部サイズと外部サイズの比較
    const isMaximizedBySize =
      innerWidth === outerWidth && innerHeight === outerHeight

    // 方法2: プライマリディスプレイとの比較（余裕を持たせる）
    const tolerance = 5 // ピクセル単位の許容差
    const isMaximizedByScreen =
      Math.abs(outerWidth - screen.availWidth) <= tolerance &&
      Math.abs(outerHeight - screen.availHeight) <= tolerance

    // 急激なサイズ変更の検出
    const hasSignificantChange =
      Math.abs(innerWidth - windowState.previousWidth) > 20 ||
      Math.abs(innerHeight - windowState.previousHeight) > 20

    const isMaximized =
      (isMaximizedBySize || isMaximizedByScreen) && hasSignificantChange

    const postMillionaire = async () => {
      const { data } = await api.post<Room>(
        `/room/${roomId}/updateConfinedField`,
        {
          fieldName: "isMillionaire",
          newValue: true,
        }
      )
      if (socket !== null && isConnected) {
        socket.emit("updateRoom", { roomId })
      }
      setRoom(data)
    }

    setWindowState((prev) => {
      if (isMaximized !== prev.isMaximized && recentFourKeys === "aksd") {
        void postMillionaire()
      }
      return {
        isMaximized,
        previousWidth: innerWidth,
        previousHeight: innerHeight,
      }
    })
  }, [
    windowState.previousWidth,
    windowState.previousHeight,
    roomId,
    socket,
    isConnected,
    setRoom,
    recentFourKeys,
  ])

  useEffect(() => {
    window.addEventListener("resize", detectMaximize)
    return () => window.removeEventListener("resize", detectMaximize)
  }, [detectMaximize])

  return windowState.isMaximized
}
