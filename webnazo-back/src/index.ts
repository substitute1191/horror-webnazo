import express from "express"
import cors from "cors"
// * db: データベースを操作するためのPrismaクライアント
import { db } from "./lib/prisma"

const app: express.Express = express()
const port = 4000

app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
)

// * 部屋を作成する方法の例
app.get("/api/createRoom", (_req, res, next) => {
  void (async () => {
    try {
      const newRoom = await db.room.create({
        data: {
          phase: 0,
        },
      })
      console.debug(newRoom)
      res.send({ message: "Room Created!" })
    } catch (e) {
      console.error(e)
      next(e)
    }
  })()
})

app.get("/apitest", (req, res) => {
  res.json({ message: "Welcome to API!" })
})

app.listen(port, () => {
  console.log(`Express Listening on port ${port}`)
})
