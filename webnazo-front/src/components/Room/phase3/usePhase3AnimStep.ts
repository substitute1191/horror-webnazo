import { atom, useAtom } from "jotai"

const animAtom = atom(0)

const usePhase3AnimStep = () => {
  const [animStep, setAnimStep] = useAtom(animAtom)

  const handleAnimEnd = () => {
    setAnimStep((prev) => prev + 1)
  }

  return { animStep, handleAnimEnd }
}

export default usePhase3AnimStep
