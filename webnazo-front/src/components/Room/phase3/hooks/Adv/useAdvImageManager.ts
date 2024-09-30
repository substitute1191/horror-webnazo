import { atom, useAtom } from "jotai"

const currentImgAtom = atom(1)
const currentImgIncAtom = atom(1)

const useAdvImageManager = () => {
  const [currentImg, setCurrentImg] = useAtom(currentImgAtom)
  const [currentImgInc, setCurrentImgInc] = useAtom(currentImgIncAtom)

  return {
    currentImg,
    setCurrentImg,
    currentImgInc,
    setCurrentImgInc,
  }
}

export default useAdvImageManager
