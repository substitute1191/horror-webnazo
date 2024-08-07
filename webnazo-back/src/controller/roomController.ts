import { NextFunction, Request, Response } from "express"
import { db } from "../lib/prisma"

export const createRoom = (
  _req: Request,
  res: Response,
  next: NextFunction
) => {
  void (async () => {
    try {
      const newRoom = await db.room.create({
        data: {
          phase: 0,
        },
      })
      console.debug(newRoom)
      res.send({ roomId: newRoom.id })
    } catch (e) {
      console.error(e)
      next(e)
    }
  })()
}

export const selectPlayer = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  void (async () => {
    const roomId = req.params.roomId
    try {
      await db.room.update({
        where: {
          id: roomId,
        },
        data: {
          phase: 1,
        },
      })
      console.log("update ok")
      res.sendStatus(204)
    } catch (err) {
      console.error(err)
      next(err)
    }
  })()
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
