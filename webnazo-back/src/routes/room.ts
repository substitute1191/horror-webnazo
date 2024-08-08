import { Router } from "express"
import { createRoom, getRoomData } from "controller/roomController"
import { proceed, selectPlayer } from "controller/roomActionController"
import asyncHandler from "express-async-handler"

const router = Router()

router.get("/createRoom", asyncHandler(createRoom))
router.get("/room/:roomId", asyncHandler(getRoomData))
router.post("/room/:roomId/selectPlayer", asyncHandler(selectPlayer))
router.post("/room/:roomId/proceed", asyncHandler(proceed))

export default router
