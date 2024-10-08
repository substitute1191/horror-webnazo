import { useEffect, useRef, useState } from "react"
import { io, Socket } from "socket.io-client"

export const useSocket = () => {
  const socketRef = useRef<Socket | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const url = "http://localhost:4000"

  useEffect(() => {
    if (socketRef.current === null) {
      socketRef.current = io(url)
    }

    const socket = socketRef.current
    socket.on("connect", () => {
      setIsConnected(true)
    })

    socket.on("disconnect", () => {
      setIsConnected(false)
    })

    return () => {
      if (socket !== null) {
        socket.disconnect()
      }
    }
  }, [])

  const connect = () => {
    if (socketRef.current !== null) {
      socketRef.current.connect()
    }
  }

  const disconnect = () => {
    if (socketRef.current !== null) {
      socketRef.current.disconnect()
    }
  }

  return { socket: socketRef.current, isConnected, connect, disconnect }
}
