import { Position } from "@/types/RoomType"
import { atom } from "jotai"

export const ohakaPositionAtom = atom<Position>({
  x: 10000,
  y: 10000,
})
