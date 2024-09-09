import cursorSrc from "@/assets/image/cursor.png"
import useFakeCursor from "./useFakeCursor"

const FakeCursor = () => {
  const { isHideCursor, cursorPos } = useFakeCursor()

  if (!isHideCursor) return null

  return (
    <img
      style={{
        top: `${cursorPos.y}px`,
        left: `${cursorPos.x}px`,
      }}
      className={`absolute z-20 w-[2rem]`}
      src={cursorSrc}
      alt=""
    />
  )
}

export default FakeCursor
