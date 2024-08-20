import { Router } from "express"
import {
  createRoom,
  getQ2sentence,
  getRoomData,
} from "controller/roomController"
import { proceed, selectPlayer } from "controller/roomActionController"
import asyncHandler from "express-async-handler"
import { collectQ2Sentence } from "controller/questionsController"

const router = Router()

router.get("/createRoom", asyncHandler(createRoom))
router.get("/room/:roomId", asyncHandler(getRoomData))
router.get("/room/:roomId/getQ2sentence", asyncHandler(getQ2sentence))
router.post("/room/:roomId/selectPlayer", asyncHandler(selectPlayer))
router.post("/room/:roomId/proceed", asyncHandler(proceed))
router.post("/room/:roomId/collectQ2Sentence", asyncHandler(collectQ2Sentence))

export default router
