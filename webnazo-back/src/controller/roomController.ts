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

export const getRank = async (req: Request, res: Response) => {
  const { roomId } = req.params
  const { timeRecord } = await db.room.findUniqueOrThrow({
    where: {
      id: roomId,
    },
    select: {
      timeRecord: true,
    },
  })
  const timeRecords = await db.room.findMany({
    select: {
      timeRecord: true,
    },
    where: {
      timeRecord: {
        not: null,
      },
    },
  })
  const resultsArray = timeRecords.map(({ timeRecord }) =>
    parseInt(timeRecord as string)
  )
  const sortedResults = resultsArray.sort((a, b) => a - b)
  const rank =
    sortedResults.indexOf(parseInt(timeRecord as unknown as string)) + 1
  res.status(200).json(rank)
}
