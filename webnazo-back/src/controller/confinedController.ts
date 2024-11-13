import { Request, Response } from "express"
import { db } from "lib/prisma"
import { z } from "zod"

const fieldNameSchema = z.object({
  fieldName: z.string(),
  newValue: z.boolean(),
})

export const updateConfinedField = async (req: Request, res: Response) => {
  console.log("updateConfinedField called")
  const { roomId } = req.params
  const { fieldName, newValue } = fieldNameSchema.parse(req.body)

  const updatedRoom = await db.room.update({
    where: { id: roomId },
    data: {
      confined: {
        update: {
          [fieldName]: newValue,
        },
      },
    },
    include: {
      confined: true,
    },
  })

  console.dir(updatedRoom)

  res.status(200).send(updatedRoom)
}
