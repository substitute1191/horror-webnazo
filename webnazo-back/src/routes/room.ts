import { Router } from "express"
import {
  createRoom,
  getRoomData,
  proceed,
  selectPlayer,
  joinGame,
} from "controller/roomController"
import asyncHandler from "express-async-handler"

const router = Router()

router.get("/createRoom", asyncHandler(createRoom))
router.get("/room/:roomId", asyncHandler(getRoomData))
router.post("/room/:roomId/selectPlayer", asyncHandler(selectPlayer))
router.get("/room/:roomId/proceed", asyncHandler(proceed))
router.post("/room/:roomId/joinGame", joinGame)

export default router
