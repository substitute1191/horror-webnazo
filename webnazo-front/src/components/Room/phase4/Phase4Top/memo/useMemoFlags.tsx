import {
  hasDiceAtom,
  hasMicrowaveAtom,
  hasStolenAtom,
  isMillionaireAtom,
  reachedShopAtom,
} from "@/atoms/roomAtoms"
import { atom, useAtomValue } from "jotai"

const memoFlagsAtom = atom((get) => {
  const isMillionaire = get(isMillionaireAtom)
  const reachedShop = get(reachedShopAtom)
  const hasStolen = get(hasStolenAtom)
  const hasDice = get(hasDiceAtom)
  const hasMicrowave = get(hasMicrowaveAtom)

  return [
    true,
    isMillionaire || hasMicrowave,
    isMillionaire || hasMicrowave,
    reachedShop,
    reachedShop,
    hasStolen,
    hasStolen,
    hasDice,
    hasDice,
  ]
})

export default function useMemoFlags() {
  const memoFlags = useAtomValue(memoFlagsAtom)

  return {
    memoFlags,
  }
}
