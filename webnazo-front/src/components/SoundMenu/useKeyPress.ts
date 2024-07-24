// useKeyPress.ts
import { useState, useEffect } from "react"

export function useKeyPress(targetKey: string) {
  const [isKeyPressed, setIsKeyPressed] = useState<boolean>(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === targetKey) {
        console.debug("pressed key ", targetKey)
        event.preventDefault() // デフォルトの動作を防止
        setIsKeyPressed(true)
      }
    }

    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === targetKey) {
        setIsKeyPressed(false)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    window.addEventListener("keyup", handleKeyUp)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [targetKey])

  return isKeyPressed
}
