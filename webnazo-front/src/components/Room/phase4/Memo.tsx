import { useContext, useEffect, useRef } from "react"
import { Helmet } from "react-helmet-async"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import useIsShowMemo from "./useIsShowMemo"
import { SocketContext } from "../socketContext"

type Props = {
  title: string
  text: string
}

export default function Memo({ title, text }: Props) {
  const location = useLocation()
  const navigate = useNavigate()
  const { roomId } = useParams()
  const { resetMemo } = useIsShowMemo()
  const memoBackgroundRef = useRef<HTMLDivElement | null>(null)
  const memoRef = useRef<HTMLDivElement | null>(null)
  const { socket, isConnected } = useContext(SocketContext)

  // メモを開いたときに相方にイベントを発行する
  useEffect(() => {
    if (socket !== null && isConnected) {
      socket.emit("memoShow", { roomId, title })
    }

    return () => {
      if (socket !== null) {
        socket.off("memoShow")
      }
    }
  }, [isConnected, roomId, socket, title])

  // メモを開いたときに履歴にプッシュする
  useEffect(() => {
    // 現時点のフラグメントをURLに付与することで、履歴に同一パスを何度も追加できるようにする
    const newPath = `${location.pathname}#${Date.now()}`
    navigate(newPath, {
      replace: false,
      state: { id: Date.now() },
    })
  }, [location.pathname, navigate])

  // メモ以外の部分がクリックされたらメモを閉じる
  useEffect(() => {
    const currentBgRef = memoBackgroundRef.current

    if (currentBgRef !== null) {
      currentBgRef.addEventListener("click", resetMemo)
    }

    return () => {
      if (currentBgRef !== null) {
        currentBgRef.removeEventListener("click", resetMemo)
      }
    }
  }, [resetMemo])

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <div
        ref={memoBackgroundRef}
        className="fixed inset-0 z-10 h-screen w-screen text-white"
      >
        <div
          ref={memoRef}
          className={`fixed left-[50%] top-[50%] z-[15] h-[80vh] w-[50vw] -translate-x-[50%] -translate-y-[50%] rounded bg-slate-50 px-12 py-8 text-black`}
        >
          {text}
        </div>
      </div>
    </>
  )
}
