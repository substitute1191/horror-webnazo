import express from "express"
import cors from "cors"
import roomRoutes from "routes/room"
import { createServer } from "http"
import { setupSocketServer } from "setupSocketServer"

const app: express.Express = express()
const server = createServer(app)
const port = 4000

//ミドルウェア
app.use(
  cors({
    origin: ["http://localhost:5173", "http://127.0.0.1:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
)

// コントローラーの設定
app.use("/api", roomRoutes)

// socketサーバーの設定
setupSocketServer(server)

server.listen(port, () => {
  console.debug(`Express Listening on port ${port}`)
})
