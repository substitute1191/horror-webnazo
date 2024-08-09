import { Room } from "@prisma/client"
import { db } from "./prisma"

export const findRoom = async (roomId: string): Promise<Room> => {
  const room = await db.room.findUnique({
    where: { id: roomId },
  })
  if (room === null) {
    throw new Error("指定された部屋が存在しません")
  }
  return room
}
