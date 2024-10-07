import { useCallback, useEffect, useRef, useState } from "react"

type Props = {
  text: string
  interval?: number
  classNames?: string
}

export default function CharacterScrambler({
  text,
  interval = 50,
  classNames,
}: Props) {
  const [displayChara, setDisplayChara] = useState(text[0])
  const [_, setCurrentIdx] = useState(0)
  const raf = useRef<number>()
  const lastTime = useRef<number>(0)

  const changeChara = useCallback(
    (currentTime: number) => {
      if (currentTime - lastTime.current > interval) {
        lastTime.current = currentTime
        setCurrentIdx((prev) => {
          const nextIdx = (prev + 1) % text.length
          setDisplayChara(text[nextIdx])
          return nextIdx
        })
      }
    },
    [interval, text]
  )

  useEffect(() => {
    const animate = (currentTime: number) => {
      changeChara(currentTime)
      raf.current = requestAnimationFrame(animate)
    }

    raf.current = requestAnimationFrame(animate)

    return () => {
      if (raf.current !== undefined) {
        cancelAnimationFrame(raf.current)
      }
    }
  }, [changeChara])

  return <span className={`absolute z-50 ${classNames}`}>{displayChara}</span>
}
