import {
  myCharaAtom,
  otherCharaAtom,
  userIdAtom,
  checkAllSelectedAtom,
} from "@/atoms/roomAtoms"
import api from "@/utils/api"
import { useAtom, useAtomValue } from "jotai"
import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { SocketContext } from "../socketContext"

const useCharaSelect = () => {
  const { roomId } = useParams()
  const [myChara, setMyChara] = useAtom(myCharaAtom)
  const [otherChara, setOtherChara] = useAtom(otherCharaAtom)
  const userId = useAtomValue(userIdAtom)
  const { socket, isConnected } = useContext(SocketContext)
  const [isAllSelected, checkAllSelected] = useAtom(checkAllSelectedAtom)

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

  return {
    myChara,
    otherChara,
    handleChange,
    isAllSelected,
  }
}

export default useCharaSelect
