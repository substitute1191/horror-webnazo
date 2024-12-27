import { useState } from "react"

export default function Player2LabyrinthOverlay() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // マウスの位置を取得して更新
  const handleMouseMove = (e: React.MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      className="absolute inset-0 bg-black"
      style={{
        maskImage: `radial-gradient(circle 20px at ${position.x}px ${position.y}px, transparent 30px, black 100px)`,
      }}
      onMouseMove={handleMouseMove}
    ></div>
  )
}
