import { Request, Response } from "express"
import { db } from "../lib/prisma"

export const createRoom = async (_req: Request, res: Response) => {
  const result = await db.$transaction(async (prisma) => {
    const room = await prisma.room.create({
      data: {
        phase: 0,
      },
    })

    await prisma.rankMatch.create({
      data: {
        roomId: room.id,
        isDone: [false, false, false],
        q2sentence: {
          や: false,
          に: false,
          ざ: false,
          き: false,
          の: false,
          み: false,
          ぎ: false,
          は: false,
          // eslint-disable-next-line @typescript-eslint/naming-convention
          "？": false,
        },
      },
    })

    return { room }
  })

  res.status(201).json({
    roomId: result.room.id,
  })
}

export const getRoomData = async (req: Request, res: Response) => {
  const { roomId } = req.params
  const room = await db.room.findUnique({
    where: { id: roomId },
    include: {
      rankMatch: true,
    },
  })
  res.status(200).json(room)
}

export const getQ2sentence = async (req: Request, res: Response) => {
  const { roomId } = req.params
  const rankMatch = await db.rankMatch.findUnique({
    where: { roomId: roomId },
  })

  if (rankMatch === null) {
    res.status(404).json({ message: "RankMatch not found" })
    return
  }

  res.status(200).json(rankMatch.q2sentence)
}
