import { Request, Response, NextFunction } from "express"
import { db } from "../lib/prisma"
import { z } from "zod"

export const createRoom = async (_req: Request, res: Response) => {
  const newRoom = await db.room.create({
    data: {
      phase: 0,
    },
  })
  console.debug(newRoom)
  res.send({ roomId: newRoom.id })
}

export const getRoomData = async (req: Request, res: Response) => {
  const { roomId } = req.params
  const room = await db.room.findUnique({
    where: { id: roomId },
  })
  res.status(200).json(room)
}

export const proceed = async (req: Request, res: Response) => {
  const { roomId } = req.params
  const room = await db.room.update({
    where: { id: roomId },
    data: {
      phase: {
        increment: 1,
      },
    },
  })
  res.status(200).json(room)
}

const SelectPlayerSchema = z.object({
  userId: z.string(),
  chara: z.number(),
})

type Character = "character1" | "character2"

/* eslint-disable max-lines-per-function,complexity*/
export const selectPlayer = async (req: Request, res: Response) => {
  try {
    console.log("Received request body:", req.body)
    const { roomId } = req.params
    const { userId, chara } = SelectPlayerSchema.parse(req.body)

    const character = chara === 1 ? "character1" : "character2"
    const other = chara === 1 ? "character2" : "character1"

    const currentRoom = await db.room.findUnique({
      where: { id: roomId },
      select: { character1: true, character2: true },
    })

    if (currentRoom === null) {
      res.status(404).json({ error: "指定された部屋が存在しません" })
      return
    }

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

export const joinGame = (req: Request, res: Response, next: NextFunction) => {
  void (async () => {
    const roomId = req.params.roomId
    try {
      await db.room.update({
        where: {
          id: roomId,
        },
        data: {
          phase: 2,
        },
      })
      res.sendStatus(204)
    } catch (err) {
      console.error(err)
      next(err)
    }
  })()
}
