import { Position } from "@/types/RoomType"
import { atom } from "jotai"

export const ohakaPositionAtom = atom<Position>({
  x: 0,
  y: 0,
})
