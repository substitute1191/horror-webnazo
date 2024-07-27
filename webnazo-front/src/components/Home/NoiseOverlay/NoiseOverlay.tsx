import * as React from "react"

export interface NoiseOverlayProps {
  opacity?: number
  scale?: number
  baseFrequency?: number
}

const NoiseOverlay: React.FC<NoiseOverlayProps> = ({
  opacity = 0.5,
  scale = 1.5,
  baseFrequency = 0.75,
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none animate-noise`}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='${baseFrequency}' numOctaves='1' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noise)' opacity='${opacity}'/%3E%3C/svg%3E")`,
        transform: `scale(${scale})`,
      }}
    />
  )
}

export default NoiseOverlay
