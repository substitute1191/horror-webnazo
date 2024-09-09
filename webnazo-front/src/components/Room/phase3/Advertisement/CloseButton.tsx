import { useEffect, useRef } from "react"
import useCloseButtonPos from "../hooks/useCloseButtonPos"

const CloseButton = () => {
  const closeBtnRef = useRef<HTMLDivElement | null>(null)
  const { setCloseButtonPos } = useCloseButtonPos()

  useEffect(() => {
    if (closeBtnRef.current !== null) {
      const { top, left } = closeBtnRef.current.getBoundingClientRect()

      setCloseButtonPos({
        top: top,
        left: left,
      })
    }
  }, [closeBtnRef, setCloseButtonPos])

  return (
    <div
      ref={closeBtnRef}
      className="absolute right-3 top-[1rem] z-10 w-[1.6rem] border border-slate-100 bg-red-500 text-center shadow-md"
    >
      ✕
    </div>
  )
}

export default CloseButton
