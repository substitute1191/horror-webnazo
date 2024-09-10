import { useEffect, useRef } from "react"
import useCloseButton from "../hooks/useCloseButton"

const CloseButton = () => {
  const closeBtnRef = useRef<HTMLDivElement | null>(null)
  const { setcloseButton, isClickedCloseBtn } = useCloseButton()

  useEffect(() => {
    if (closeBtnRef.current !== null) {
      const { top, left } = closeBtnRef.current.getBoundingClientRect()

      setcloseButton({
        top: top,
        left: left,
      })
    }
  }, [closeBtnRef, setcloseButton])

  return (
    <div
      id="closeBtn"
      ref={closeBtnRef}
      className={`absolute right-3 top-[1rem] z-10 w-[1.6rem] border border-slate-100 bg-red-500 text-center shadow-md ${isClickedCloseBtn ? "scale-95" : ""} `}
    >
      ✕
    </div>
  )
}

export default CloseButton
