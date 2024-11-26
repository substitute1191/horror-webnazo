import src from "@/assets/image/imprisonment/テレビ.png"
import useViewer from "@/components/Room/phase4/GetDice/Questions/TV/useViewer"
import { useCallback, useEffect } from "react"

export default function TV() {
  const { setViewer } = useViewer()

  const decViewer = useCallback(() => {
    setViewer((prev) => prev - 1)
  }, [setViewer])

  useEffect(() => {
    setViewer((prev) => prev + 1)
    window.addEventListener("beforeunload", decViewer)

    return () => {
      setViewer((prev) => prev - 1)
      window.removeEventListener("beforeunload", decViewer)
    }
  }, [decViewer, setViewer])

  return (
    <div className="flex flex-col items-center">
      <img src={src} alt="" className="min-w-[400px] max-w-[400px]" />
      <p className="font-gothic mt-8 text-xl">テレビの視聴者数が答え</p>
    </div>
  )
}
