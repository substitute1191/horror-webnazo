import { atom, useAtom } from "jotai"

const morikumaRateAtom = atom(1)

export default function useMorikumaRate() {
  const [morikumaRate, setMorikumaRate] = useAtom(morikumaRateAtom)

  return {
    morikumaRate,
    setMorikumaRate,
  }
}
