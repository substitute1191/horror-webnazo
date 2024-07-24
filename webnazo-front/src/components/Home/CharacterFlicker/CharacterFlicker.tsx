import * as React from "react"
import { useCharacterFlicker } from "./useCharacterFlicker"

interface CharacterFlickerProps {
  origin: string
  sometime: string[]
  sometimeClassName?: string[]
  probability?: number
}

const CharacterFlicker: React.FC<CharacterFlickerProps> = ({
  origin,
  sometime,
  sometimeClassName = [""],
  probability = 0.1,
}) => {
  const { result, classNames } = useCharacterFlicker(
    origin,
    sometime,
    sometimeClassName,
    probability
  )

  return (
    <span className={`inline-block w-[1em] text-center ${classNames}`}>
      {result}
    </span>
  )
}

export default CharacterFlicker
