import { atom, useAtom } from "jotai"

const isShowJumpScareAtom = atom(false)
const toggleJumpScareAtom = atom(
  (get) => get(isShowJumpScareAtom),
  (_get, set) => {
    set(isShowJumpScareAtom, true)
    const randomSec = Math.floor(Math.random() * 1000) + 1000

    setTimeout(() => {
      set(isShowJumpScareAtom, false)
    }, randomSec)
  }
)

export default function useIsShowJumpScare() {
  const [isShowJumpScare, toggleIsShowJumpScare] = useAtom(toggleJumpScareAtom)

  return {
    isShowJumpScare,
    toggleIsShowJumpScare,
  }
}
