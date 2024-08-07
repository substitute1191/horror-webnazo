import api from "@/utils/api"
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { Room } from "shared-types"
import { v4 as uuidv4 } from "uuid"

export const userIdAtom = atomWithStorage("userId", uuidv4())
export const phaseAtom = atomWithStorage("phase", 0)
export const myCharaAtom = atomWithStorage("myChara", 0)
export const otherCharaAtom = atomWithStorage("otherChara", 0)

export const initializeRoomAtom = atom(
  null,
  async (get, set, roomId: string) => {
    try {
      const { data } = await api.get<Room>(`/room/${roomId}`)
      const { character1, character2 } = data
      const userId = get(userIdAtom)
      let myChara = 0
      let otherChara = 0

      if (character1 !== null) {
        if (character1 === userId) {
          myChara = 1
        } else {
          otherChara = 1
        }
      }

      if (character2 !== null) {
        if (character2 === userId) {
          myChara = 2
        } else {
          otherChara = 2
        }
      }

      set(myCharaAtom, myChara)
      set(otherCharaAtom, otherChara)
    } catch (e) {
      console.error(e)
    }
  }
)
