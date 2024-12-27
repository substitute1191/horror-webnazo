import { useEffect, useRef } from "react"

type Props = {
  src: string
  classNames?: string
}

export default function LoopVideo({ src, classNames }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current !== null) {
      void videoRef.current.play()
    }
  }, [])

  return (
    // eslint-disable-next-line jsx-a11y/media-has-caption
    <video loop className={`${classNames}`} ref={videoRef}>
      <source src={src} />
    </video>
  )
}
