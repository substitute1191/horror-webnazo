import { Server, Socket } from "socket.io"
import { Server as HttpServer } from "http"

export function setupSocketServer(httpServer: HttpServer) {
  const io = new Server(httpServer, {
    cors: {
      origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
      methods: ["GET", "POST"],
      credentials: true,
      allowedHeaders: ["Content-Type", "Authorization"],
    },
  })

  io.on("connection", (socket: Socket) => {
    console.log("user connected!")

    socket.on("joinRoom", async ({ roomId }: { roomId: string }) => {
      await socket.join(roomId)
      console.debug("joined room:", roomId)
    })

    socket.on(
      "selectChara",
      ({ roomId, playerNumber }: { roomId: string; playerNumber: number }) => {
        console.debug("selectChara event")
        io.to(roomId).emit("selected", playerNumber)
      }
    )

    socket.on("disconnect", () => {
      console.log("user disconnected!")
    })
  })

  return io
}
