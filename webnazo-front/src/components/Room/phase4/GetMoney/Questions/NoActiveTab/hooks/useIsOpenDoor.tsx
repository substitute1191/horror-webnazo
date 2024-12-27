import { atom, useAtom } from "jotai"

const isOpenDoorAtom = atom(false)

export default function useIsOpenDoor() {
  const [isOpenDoor, setIsOpenDoor] = useAtom(isOpenDoorAtom)

  return {
    isOpenDoor,
    setIsOpenDoor,
  }
}
