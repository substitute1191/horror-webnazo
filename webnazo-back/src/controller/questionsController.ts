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
