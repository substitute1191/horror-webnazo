import { atom, useAtom } from "jotai"

const doorPosAtom = atom({
  top: 0,
  left: 0,
  right: 0,
})

export default function useDoorPos() {
  const [doorPos, setDoorPos] = useAtom(doorPosAtom)

  return {
    doorPos,
    setDoorPos,
  }
}
