import { hasDiceAtom, roomAtom, roomIdAtom } from "@/atoms/roomAtoms"
import useAssembledNumber from "@/components/Room/phase4/GetDice/Questions/AssembleNumber/useAssembledNumber"
import useIsBarActive from "@/components/Room/phase4/GetDice/Questions/Bar/useIsBarActive"
import useBuildWordsAns from "@/components/Room/phase4/GetDice/Questions/BuildWords/Hooks/useBuildWordsAns"
import useExpression from "@/components/Room/phase4/GetDice/Questions/Expression/useExpression"
import useLegCountAnswer from "@/components/Room/phase4/GetDice/Questions/LegCount/hooks/useLegCountAnswer"
import useViewer from "@/components/Room/phase4/GetDice/Questions/TV/useViewer"
import useMemoFlags from "@/components/Room/phase4/Phase4Top/memo/useMemoFlags"
import { SocketContext } from "@/components/Room/socketContext"
import { Room } from "@/types/RoomType"
import api from "@/utils/api"
import { useAtomValue, useSetAtom } from "jotai"
import { useContext, useEffect } from "react"

function isDiceCreated(
  barNumber: string,
  expressionAns: number,
  buildWordsAns: string,
  legCountAnswer: string,
  viewer: number,
  assembledNumber: string
) {
  if (
    barNumber === "3" &&
    expressionAns === 1 &&
    buildWordsAns === "2" &&
    legCountAnswer === "6" &&
    viewer === 5 &&
    assembledNumber === "4"
  ) {
    return true
  } else {
    return false
  }
}

export default function useGetDice() {
  const { expressionAns } = useExpression()
  const { barNumber } = useIsBarActive()
  const { viewer } = useViewer()
  const { legCountAnswer } = useLegCountAnswer()
  const { buildWordsAns } = useBuildWordsAns()
  const { assembledNumber } = useAssembledNumber()
  const setRoom = useSetAtom(roomAtom)
  const hasDice = useAtomValue(hasDiceAtom)
  const roomId = useAtomValue(roomIdAtom)
  const { socket, isConnected } = useContext(SocketContext)
  const { setMemoFlags } = useMemoFlags()

  useEffect(() => {
    if (
      isDiceCreated(
        barNumber,
        expressionAns,
        buildWordsAns,
        legCountAnswer,
        viewer,
        assembledNumber
      )
    ) {
      const getDice = async () => {
        const { data } = await api.patch<Room>(`/room/${roomId}/confined`, {
          fieldName: "hasDice",
          newValue: true,
        })
        setRoom(data)
        setMemoFlags("hasDice")
      }

      try {
        void getDice()

        if (socket !== null && isConnected && !hasDice) {
          socket.emit("updateRoom", { roomId })
          socket.emit("submitAlert", {
            roomId,
            alertMsg: "サイコロを入手しました！",
          })
        }
      } catch (e) {
        console.error(e)
      }
    }
  }, [
    assembledNumber,
    barNumber,
    buildWordsAns,
    expressionAns,
    hasDice,
    isConnected,
    legCountAnswer,
    roomId,
    setMemoFlags,
    setRoom,
    socket,
    viewer,
  ])

  return {
    barNumber,
    expressionAns,
    buildWordsAns,
    legCountAnswer,
    viewer,
    assembledNumber,
  }
}
