import {
  phaseAtom,
  myCharaAtom,
  otherCharaAtom,
  userIdAtom,
  checkAllSelectedAtom,
  isAllSelectedAtom,
} from "@/atoms/roomAtoms"
import api from "@/utils/api"
import { useAtom, useSetAtom, useAtomValue } from "jotai"
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { Room } from "shared-types"
import { SocketContext } from "../socketContext"

const useCharaSelect = () => {
  const { roomId } = useParams()
  const setPhase = useSetAtom(phaseAtom)
  const [myChara, setMyChara] = useAtom(myCharaAtom)
  const [otherChara, setOtherChara] = useAtom(otherCharaAtom)
  const userId = useAtomValue(userIdAtom)
  const { socket, isConnected } = useContext(SocketContext)
  const isAllSelected = useAtomValue(isAllSelectedAtom)
  const checkAllSelected = useSetAtom(checkAllSelectedAtom)

  useEffect(() => {
    if (socket !== null) {
      socket.on("selected", (number: number) => {
        setOtherChara(number)
      })
    }

    return () => {
      if (socket !== null) {
        socket.off("selected")
      }
    }
  }, [socket, isConnected, roomId, setOtherChara])

  useEffect(() => {
    checkAllSelected()
  }, [myChara, otherChara, checkAllSelected])

  const handleChange = (chara: number) => {
    api
      .post(`/room/${roomId}/selectPlayer`, {
        userId: userId,
        chara: chara,
      })
      .then()
      .catch((e) => {
        console.error(e)
      })
    if (socket !== null) {
      socket.emit("selectChara", {
        roomId: roomId,
        chara: chara,
      })
    }
    setMyChara(chara)
  }

  const startGame = () => {
    api
      .get<Room>(`/room/${roomId}/proceed`)
      .then(({ data }) => {
        setPhase(data.phase)
      })
      .catch((e) => {
        console.error(e)
      })
  }

  return {
    myChara,
    otherChara,
    handleChange,
    startGame,
    isAllSelected,
  }
}

export default useCharaSelect
