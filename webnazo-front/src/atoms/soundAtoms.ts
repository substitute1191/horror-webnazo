import { atomWithStorage } from "jotai/utils"

export const isPlayableAtom = atomWithStorage("isPlayable", false)
export const seVolumeAtom = atomWithStorage("seVol", 1)
export const bgmVolumeAtom = atomWithStorage("bgmVol", 1)
