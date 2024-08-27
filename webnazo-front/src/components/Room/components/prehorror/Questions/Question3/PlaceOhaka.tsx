import { Position } from "@/types/RoomType"
import { useSetAtom } from "jotai"
import { useCallback, useEffect, useRef, useState } from "react"
import { ohakaPositionAtom } from "./OhakaPositionAtom"

// eslint-disable-next-line max-lines-per-function
const PlaceOhaka = ({
  imgSrc,
  initialPosition,
}: {
  imgSrc: string
  initialPosition: Position
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [position, setPosition] = useState(initialPosition)
  const setOhakaPosition = useSetAtom(ohakaPositionAtom)

  const ref = useRef<HTMLImageElement>(null)
  const lastPosition = useRef<Position>({
    x: 0,
    y: 0,
  })

  const updateAbsolutePosition = useCallback(() => {
    if (ref.current !== null) {
      const rect = ref.current.getBoundingClientRect()
      const scrollLeft = window.scrollX
      const scrollTop = window.scrollY

      const absolutePosition = {
        x: rect.left + scrollLeft,
        y: rect.top + scrollTop,
      }
      setOhakaPosition(absolutePosition)
    }
  }, [setOhakaPosition])

  useEffect(() => {
    updateAbsolutePosition()
  }, [position, updateAbsolutePosition])

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!isDragging) return
      // movementXとmovementYを使用して相対的な移動を計算
      setPosition((prevPosition) => ({
        x: prevPosition.x + event.movementX,
        y: prevPosition.y + event.movementY,
      }))
    },
    [isDragging]
  )

  const handleTouchMove = useCallback(
    (event: TouchEvent) => {
      if (!isDragging || event.touches.length < 1) return
      const touch = event.touches[0]
      const deltaX = touch.clientX - lastPosition.current.x
      const deltaY = touch.clientY - lastPosition.current.y
      setPosition((prevPosition) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }))
      lastPosition.current = { x: touch.clientX, y: touch.clientY }
    },
    [isDragging]
  )

  const handleEnd = () => {
    setIsDragging(false)
  }

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove)
      window.addEventListener("touchmove", handleTouchMove)
      window.addEventListener("mouseup", handleEnd)
      window.addEventListener("touchend", handleEnd)
    } else {
      // ドラッグ終了時にイベントリスナーを削除
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("mouseup", handleEnd)
      window.removeEventListener("touchend", handleEnd)
    }

    // クリーンアップ関数
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      window.removeEventListener("mouseup", handleEnd)
      window.removeEventListener("touchend", handleEnd)
    }
  }, [isDragging, handleMouseMove, handleTouchMove])

  const handleStart = (clientX: number, clientY: number) => {
    setIsDragging(true)
    lastPosition.current = { x: clientX, y: clientY }
  }

  const handleMouseDown = (event: React.MouseEvent) => {
    event.preventDefault()
    handleStart(event.clientX, event.clientY)
  }

  const handleTouchStart = (event: React.TouchEvent) => {
    event.preventDefault()
    const touch = event.touches[0]
    handleStart(touch.clientX, touch.clientY)
  }

  return (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <img
      ref={ref}
      src={imgSrc}
      alt="カフェ"
      className={`absolute w-20 touch-none select-none rounded-lg border border-blue-500 bg-blue-200 bg-opacity-50 p-1 ${isDragging ? "cursor-grabbing" : "cursor-grab"} `}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
    />
  )
}

export default PlaceOhaka
