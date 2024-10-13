import { Router } from "express"
import {
  createRoom,
  setTeamName,
  getQ2sentence,
  getRoomData,
  getRank,
} from "controller/roomController"
import {
  proceed,
  selectPlayer,
  startGameTimer,
  stopGameTimer,
} from "controller/roomActionController"
import asyncHandler from "express-async-handler"
import {
  clearQ1,
  clearQ2,
  checkQ3,
  collectQ2Sentence,
} from "controller/questionsController"
import { updateConfinedField } from "controller/confinedController"

const router = Router()

router.get("/createRoom", asyncHandler(createRoom))
router.get("/room/:roomId", asyncHandler(getRoomData))
router.get("/room/:roomId/getQ2sentence", asyncHandler(getQ2sentence))
router.post("/room/:roomId/selectPlayer", asyncHandler(selectPlayer))
router.post("/room/:roomId/setTeamName", asyncHandler(setTeamName))
router.post("/room/:roomId/proceed", asyncHandler(proceed))
router.post("/room/:roomId/startGameTimer", asyncHandler(startGameTimer))
router.post("/room/:roomId/stopGameTimer", asyncHandler(stopGameTimer))
router.get("/room/:roomId/getRank", asyncHandler(getRank))
router.post("/room/:roomId/collectQ2Sentence", asyncHandler(collectQ2Sentence))
router.post("/room/:roomId/clearQ1", asyncHandler(clearQ1))
router.post("/room/:roomId/clearQ2", asyncHandler(clearQ2))
router.post("/room/:roomId/checkQ3", asyncHandler(checkQ3))
router.post(
  "/room/:roomId/updateConfinedField",
  asyncHandler(updateConfinedField)
)

export default router
