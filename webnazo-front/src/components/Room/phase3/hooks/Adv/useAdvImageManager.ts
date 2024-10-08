import clsx from "clsx"
import { atom, useAtom } from "jotai"

const currentImgAtom = atom(1)
const currentImgIncAtom = atom(1)

const useAdvImageManager = () => {
  const [currentImg, setCurrentImg] = useAtom(currentImgAtom)
  const [currentImgInc, setCurrentImgInc] = useAtom(currentImgIncAtom)

  const bgClasses = clsx({
    ["bg-white/20"]: currentImg === 1,
    ["bg-blue-400"]: currentImg === 2,
    ["bg-slate-400"]: currentImg === 3,
    ["bg-slate-500"]: currentImg === 4,
    ["bg-slate-600"]: currentImg === 5,
    ["bg-slate-700"]: currentImg === 6,
    ["bg-slate-800"]: currentImg === 7,
    ["bg-slate-900"]: currentImg >= 8,
  })

  const bgGradClasses = clsx({
    ["grad1"]: currentImg === 1,
    ["grad2"]: currentImg === 2,
    ["grad3"]: currentImg === 3,
    ["grad4"]: currentImg === 4,
    ["grad5"]: currentImg === 5,
    ["grad6"]: currentImg === 6,
    ["grad7"]: currentImg === 7,
    ["grad8"]: currentImg >= 8,
  })

  return {
    currentImg,
    setCurrentImg,
    currentImgInc,
    setCurrentImgInc,
    bgClasses,
    bgGradClasses,
  }
}

export default useAdvImageManager
