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

    socket.on("updateRoom", ({ roomId }: { roomId: string }) => {
      console.debug("updateRoom event")
      socket.broadcast.to(roomId).emit("roomUpdated")
    })

    socket.on(
      "selectChara",
      ({ roomId, chara }: { roomId: string; chara: number }) => {
        console.debug("selectChara event")
        socket.broadcast.to(roomId).emit("selected", chara)
      }
    )

    socket.on(
      "proceed",
      ({ roomId, phase }: { roomId: string; phase: number }) => {
        socket.broadcast.to(roomId).emit("updatePhase", phase)
      }
    )

    socket.on(
      "registerClearTime",
      ({ roomId, clearTime }: { clearTime: number; roomId: string }) => {
        socket.broadcast.to(roomId).emit("setClearTime", clearTime)
      }
    )

    socket.on(
      "setTeamName",
      ({ roomId, teamName }: { roomId: string; teamName: string }) => {
        socket.broadcast.to(roomId).emit("setTeamNameToStorage", teamName)
      }
    )

    socket.on(
      "memoShow",
      ({ roomId, title }: { roomId: string; title: string }) => {
        console.log("memoShow fired!")
        socket.to(roomId).emit("peerMemoShow", title)
      }
    )

    socket.on(
      "clearQuestion",
      ({
        roomId,
        questionNo,
        room,
      }: {
        roomId: string
        questionNo: number
        room: unknown
      }) => {
        socket.broadcast.to(roomId).emit(`partnerClearedQ${questionNo}`, room)
      }
    )

    socket.on(
      "collectChara",
      ({
        characters,
        roomId,
      }: {
        characters: Record<string, boolean>
        roomId: string
      }) => {
        socket.broadcast.to(roomId).emit("partnerCollectChara", characters)
      }
    )

    socket.on("disconnect", () => {
      console.log("user disconnected!")
    })
  })

  return io
}
