import { useState, useRef, useCallback, useEffect } from "react"

export default function useDynamicRandom(interval: number = 500) {
  const [dynamicRandom, setDynamicRandom] = useState(0)
  const rafId = useRef<number | null>(null)
  const lastTime = useRef<number>(0)

  const updatedynamicRandom = useCallback(
    (currentTime: number) => {
      if (currentTime - lastTime.current >= interval) {
        lastTime.current = currentTime
        setDynamicRandom(Math.random())
        rafId.current = requestAnimationFrame(updatedynamicRandom)
      }
    },
    [interval]
  )

  useEffect(() => {
    const animate = (currentTime: number) => {
      updatedynamicRandom(currentTime)
      requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    return () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current)
      }
    }
  }, [updatedynamicRandom])

  return {
    dynamicRandom,
  }
}
