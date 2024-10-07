import { Request, Response } from "express"
import { findRoom } from "lib/findRoom"
import { db } from "lib/prisma"
import { z } from "zod"

const proceedSchema = z.object({
  phase: z.number(),
})

export const proceed = async (req: Request, res: Response) => {
  const { roomId } = req.params
  const { phase } = proceedSchema.parse(req.body)
  const room = await db.room.update({
    where: { id: roomId },
    data: {
      phase: phase,
    },
  })
  res.status(200).json(room)
}

export const startGameTimer = async (req: Request, res: Response) => {
  const { roomId } = req.params
  const gameStartTimeString = Date.now().toString()
  await db.room.update({
    where: { id: roomId },
    data: {
      startTime: gameStartTimeString,
    },
  })
  res.status(204).send()
}

interface FinishTimeType {
  finishTime: number
}

export const stopGameTimer = async (req: Request, res: Response) => {
  const { roomId } = req.params
  const { finishTime } = req.body as FinishTimeType
  const { startTime } = await db.room.findUniqueOrThrow({
    where: {
      id: roomId,
    },
    select: {
      startTime: true,
    },
  })
  const result = finishTime - parseInt(startTime as string, 10)
  await db.room.update({
    where: {
      id: roomId,
    },
    data: {
      finishTime: finishTime.toString(),
      timeRecord: result.toString(),
    },
  })
  res.status(200).json(result)
}

const SelectPlayerSchema = z.object({
  userId: z.string(),
  chara: z.number(),
})

type Character = "character1" | "character2"

export const selectPlayer = async (req: Request, res: Response) => {
  try {
    const { roomId } = req.params
    const { userId, chara } = SelectPlayerSchema.parse(req.body)

    const character = chara === 1 ? "character1" : "character2"
    const other = chara === 1 ? "character2" : "character1"

    const currentRoom = await findRoom(roomId)

    // 更新データを作成
    const updateData: Partial<Record<Character, string | null>> = {
      [character]: userId,
    }

    // 他のキャラクターを自分が選択済みならそれをnullにする
    if (currentRoom[other] === userId) {
      updateData[other] = null
    }

    const newRoom = await db.room.update({
      where: {
        id: roomId,
      },
      data: updateData,
      select: {
        id: true,
        character1: true,
        character2: true,
      },
    })

    res.status(200).json(newRoom)
  } catch (e) {
    console.error(e)
    res.status(400).json({ error: "無効なリクエストボディです" })
    return
  }
}
