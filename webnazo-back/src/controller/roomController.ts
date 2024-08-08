import { Request, Response } from "express"
import { db } from "../lib/prisma"

export const createRoom = async (_req: Request, res: Response) => {
  const newRoom = await db.room.create({
    data: {
      phase: 0,
    },
  })
  res.send({ roomId: newRoom.id })
}

export const getRoomData = async (req: Request, res: Response) => {
  const { roomId } = req.params
  const room = await db.room.findUnique({
    where: { id: roomId },
  })
  res.status(200).json(room)
}
