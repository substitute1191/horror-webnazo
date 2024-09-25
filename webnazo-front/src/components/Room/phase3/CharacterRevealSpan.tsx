import React, { useCallback, useEffect, useRef, useState } from "react"

type Props = {
  text: string
  interval: number
  classNames?: string
}

const CharacterRevealSpan: React.FC<Props> = ({
  text,
  interval,
  classNames,
}) => {
  const [textIdx, setTextIdx] = useState(0)
  const [spanText, setSpanText] = useState("")
  const raf = useRef<number>()
  const lastTime = useRef<number>(0)

  const updateText = useCallback(
    (currentTime: number) => {
      if (currentTime - lastTime.current > interval) {
        lastTime.current = currentTime
        if (textIdx < text.length) {
          setSpanText((prev) => `${prev}${text[textIdx]}`)
          setTextIdx((prev) => prev + 1)
        } else if (textIdx === text.length) {
          setTextIdx((prev) => prev + 1)
        }
      }
    },
    [interval, text, textIdx]
  )

  useEffect(() => {
    const animate = (currentTime: number) => {
      updateText(currentTime)
      raf.current = requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)

    return () => {
      if (raf.current !== undefined) {
        cancelAnimationFrame(raf.current)
      }
    }
  }, [updateText])

  return (
    <>
      <div className={`absolute ${classNames}`}>
        <span className={`absolute whitespace-nowrap`}>{spanText}</span>
      </div>
    </>
  )
}

export default CharacterRevealSpan
