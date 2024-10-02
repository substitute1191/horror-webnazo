import { atom, useAtom } from "jotai"

const isRotateScreenAtom = atom(false)
const derivedIsRotateScreenAtom = atom(
  (get) => get(isRotateScreenAtom),
  (_get, set, currentImg: number) => {
    if (currentImg === 5) {
      set(isRotateScreenAtom, true)
    } else {
      set(isRotateScreenAtom, false)
    }
  }
)

const useScreenEffect = () => {
  const [isRotateScreen, setIsRotateScreen] = useAtom(derivedIsRotateScreenAtom)

  return {
    isRotateScreen,
    setIsRotateScreen,
  }
}

export default useScreenEffect
