import useStopSound from "@/components/Room/phase4/hooks/useStopSound"
import JumpScare1 from "@/components/Room/phase4/Supermarket/labyrinth/JumpScare/JumpScare1"
import JumpScare2 from "@/components/Room/phase4/Supermarket/labyrinth/JumpScare/JumpScare2"
import JumpScare3 from "@/components/Room/phase4/Supermarket/labyrinth/JumpScare/JumpScare3"
import { useMemo } from "react"
import { createPortal } from "react-dom"

export default function MissJumpScares() {
  useStopSound()

  const components = [JumpScare1, JumpScare2, JumpScare3]
  const randomIdx = useMemo(
    () => Math.floor(Math.random() * components.length),
    [components.length]
  )
  const RandomJumpScare = components[randomIdx]

  return createPortal(
    <>
      <RandomJumpScare />
    </>,
    document.body
  )
}
