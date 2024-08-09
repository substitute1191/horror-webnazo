import { atomWithStorage } from "jotai/utils"

export const isPlayableAtom = atomWithStorage("isPlayable", false)
export const seVolumeAtom = atomWithStorage("seVol", 0.5)
export const bgmVolumeAtom = atomWithStorage("bgmVol", 0.5)
