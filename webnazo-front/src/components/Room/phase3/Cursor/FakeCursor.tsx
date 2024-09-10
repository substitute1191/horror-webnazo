import cursorSrc from "@/assets/image/cursor.png"
import useFakeCursor from "./useFakeCursor"
import { forwardRef } from "react"

const FakeCursor = forwardRef<HTMLImageElement>((_, ref) => {
  const { isHideCursor, cursorPos } = useFakeCursor()

  if (!isHideCursor) return null

  return (
    <img
      ref={ref}
      style={{
        top: `${cursorPos.y}px`,
        left: `${cursorPos.x}px`,
      }}
      className={`absolute z-20 w-[2rem]`}
      src={cursorSrc}
      alt=""
    />
  )
})

FakeCursor.displayName = "FakeCursor"

export default FakeCursor
