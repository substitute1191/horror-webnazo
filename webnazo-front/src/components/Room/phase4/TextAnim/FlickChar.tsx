import useRandomFont from "@/components/Room/phase4/TextAnim/hooks/useRandomFont"
import clsx from "clsx"
import { useState, useRef, useCallback, useEffect } from "react"

type Props = {
  char: string
  classNames?: string
  origin: string
  sometime: string
}

export default function FlickChar({
  char,
  classNames,
  origin,
  sometime,
}: Props) {
  const [whichColor, setWhichColor] = useState(0)
  const rafId = useRef<number | null>(null)
  const lastTime = useRef<number>(0)

  const { randomFont } = useRandomFont()

  const updateColor = useCallback((currentTime: number) => {
    if (currentTime - lastTime.current >= 200) {
      lastTime.current = currentTime
      setWhichColor((prev) => (prev + 1) % 2)
    }
  }, [])

  useEffect(() => {
    const animate = (currentTime: number) => {
      updateColor(currentTime)
      requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [updateColor])

  const randomColor = clsx(classNames, randomFont, {
    [origin]: whichColor % 2 === 0,
    [sometime]: whichColor % 2 !== 0,
  })

  return <span className={randomColor}>{char}</span>
}
