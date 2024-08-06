import { Router } from "express"
import { createRoom, selectPlayer } from "controller/roomController"

const router = Router()

router.get("/createRoom", createRoom)
router.post("/room/:roomId/selectPlayer", selectPlayer)

export default router
