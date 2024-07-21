import * as React from "react"

interface FoggyImageProps {
  src: string
  alt?: string
}

const FoggyImage: React.FC<FoggyImageProps> = ({ src, alt = "" }) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <img src={src} alt={alt} className={`w-full h-full object-cover`} />
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="darkFog">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.01"
              numOctaves="3"
            />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0
                                                 0 0 0 0 0
                                                 0 0 0 0 0
                                                 0 0 0 1 0"
            />
            <feComponentTransfer>
              <feFuncR type="linear" slope="0.2" intercept="0" />
              <feFuncG type="linear" slope="0.2" intercept="0" />
              <feFuncB type="linear" slope="0.2" intercept="0" />
              <feFuncA type="linear" slope="0.3" intercept="0" />
            </feComponentTransfer>
          </filter>
        </defs>
        <g className="fog-container">
          <rect
            width="200%"
            height="200%"
            filter="url(#darkFog)"
            opacity="0.7"
            className="fog-layer fog-layer-1"
          />
          <rect
            width="200%"
            height="200%"
            filter="url(#darkFog)"
            opacity="0.7"
            className="fog-layer fog-layer-2"
          />
          <rect
            width="200%"
            height="200%"
            filter="url(#darkFog)"
            opacity="0.7"
            className="fog-layer fog-layer-3"
          />
        </g>
      </svg>
      <style>{`
        .fog-container {
          transform: scale(1.1);
        }
        @keyframes moveFog1 {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-50%, -50%); }
        }
        @keyframes moveFog2 {
          0% { transform: translate(-25%, 0); }
          100% { transform: translate(-75%, -50%); }
        }
        @keyframes moveFog3 {
          0% { transform: translate(-50%, 0); }
          100% { transform: translate(-100%, -50%); }
        }
        .fog-layer {
          transform-origin: center;
        }
        .fog-layer-1 {
          animation: moveFog1 60s ease-in-out infinite alternate;
        }
        .fog-layer-2 {
          animation: moveFog2 75s ease-in-out infinite alternate;
        }
        .fog-layer-3 {
          animation: moveFog3 90s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  )
}

export default FoggyImage
