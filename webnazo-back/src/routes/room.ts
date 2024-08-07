import { Router } from "express"
import { createRoom, selectPlayer, joinGame } from "controller/roomController"

const router = Router()

router.get("/createRoom", createRoom)
router.post("/room/:roomId/selectPlayer", selectPlayer)
router.post("/room/:roomId/joinGame", joinGame)

export default router
