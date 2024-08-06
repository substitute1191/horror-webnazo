import { phaseAtom } from "@/atoms/atoms"
import Phase0 from "./phase0/Phase0"
import Phase1 from "./phase1/Phase1"
import { useAtom } from "jotai"

const Room = () => {
  const [phase] = useAtom(phaseAtom)

  return (
    <div>
      {phase === 0 ? <Phase0 /> : null}
      {phase === 1 ? <Phase1 /> : null}
    </div>
  )
}

export default Room
