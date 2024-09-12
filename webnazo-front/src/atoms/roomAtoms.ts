import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"
import { Room } from "@/types/RoomType"
import { v4 as uuidv4 } from "uuid"

export const userIdAtom = atom<string>(() => {
  const storedUserId = localStorage.getItem("userId")
  if (storedUserId !== null) {
    return storedUserId
  } else {
    const newUserId = uuidv4()
    localStorage.setItem("userId", newUserId)
    return newUserId
  }
})

export const phaseAtom = atomWithStorage("phase", 0)
export const myCharaAtom = atomWithStorage("myChara", 0)
export const otherCharaAtom = atomWithStorage("otherChara", 0)
export const isAllSelectedAtom = atomWithStorage("isAllSelected", false)
export const roomIdAtom = atomWithStorage("roomId", "")
export const isDoneAtom = atomWithStorage("isDone", [false, false, false])
export const q2sentenceAtom = atomWithStorage<Record<string, boolean>>(
  "q2sentence",
  {
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
  }
)

export const roomAtom = atom(
  (get) => ({
    phase: get(phaseAtom),
    myChara: get(myCharaAtom),
    otherChara: get(otherCharaAtom),
    isDone: get(isDoneAtom),
    q2sentence: get(q2sentenceAtom),
  }),
  (get, set, room: Room) => {
    const { phase, character1, character2, rankMatch } = room
    if (rankMatch !== undefined) {
      const { isDone, q2sentence } = rankMatch
      set(isDoneAtom, isDone)
      set(q2sentenceAtom, q2sentence)
    }
    set(phaseAtom, phase)

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
  }
)

export const checkAllSelectedAtom = atom(
  (get) => get(isAllSelectedAtom),
  (get, set) => {
    const myChara = get(myCharaAtom)
    const otherChara = get(otherCharaAtom)
    if (myChara !== 0 && otherChara !== 0) {
      set(isAllSelectedAtom, true)
    } else {
      set(isAllSelectedAtom, false)
    }
  }
)

export const tabInPhase2Atom = atomWithStorage("tabInPhase2", 0)
export const clearTimeAtom = atomWithStorage("clearTime", 0, undefined, {
  getOnInit: true,
})
