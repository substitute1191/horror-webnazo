import { Request, Response } from "express"
import { db } from "lib/prisma"
import { z } from "zod"

const collectSchema = z.object({
  chara: z.string(),
})

const q2SentenceSchema = z.record(z.string(), z.boolean())

export const collectQ2Sentence = async (req: Request, res: Response) => {
  const { roomId } = req.params
  const { chara } = collectSchema.parse(req.body)
  const rankMatch = await db.rankMatch.findUnique({
    where: { roomId: roomId },
  })

  if (rankMatch === null) {
    res.status(404).json({ message: "RankMatch not found" })
    return
  }

  const currentQ2sentence = q2SentenceSchema.parse(rankMatch.q2sentence)
  const newQ2sentence = { ...currentQ2sentence, [chara]: true }

  await db.rankMatch.update({
    where: { roomId: roomId },
    data: { q2sentence: newQ2sentence },
  })

  res.status(200).json(newQ2sentence)
}

const checkQ3Schema = z.record(z.string(), z.string())

export const checkQ3 = async (req: Request, res: Response) => {
  const { roomId } = req.params
  const { selectA, selectB, selectC, selectD, selectE, selectF, selectG } =
    checkQ3Schema.parse(req.body)
  if (
    selectA === "学校" &&
    selectB === "公園" &&
    selectC === "カフェ" &&
    selectD === "スーパー" &&
    selectE === "郵便局" &&
    selectF === "ビル" &&
    selectG === "墓地"
  ) {
    const room = await db.room.findUnique({
      where: { id: roomId },
      include: {
        rankMatch: {
          select: {
            isDone: true,
          },
        },
      },
    })

    const oldIsDone = room?.rankMatch?.isDone

    if (oldIsDone === undefined) {
      res.status(404).json({ message: "データが見つかりません" })
      return
    }

    const newIsDone = oldIsDone.map((value, index) =>
      index === 2 ? true : value
    )

    const updatedRoom = await db.room.update({
      where: {
        id: roomId,
      },
      data: {
        rankMatch: {
          update: {
            isDone: newIsDone,
          },
        },
      },
      include: {
        rankMatch: true,
      },
    })

    res.status(200).json({ ...updatedRoom, message: "correct" })
  } else {
    res.status(200).json({
      message: "答えが正しくありません",
    })
  }
}
