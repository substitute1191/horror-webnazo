import api from "@/utils/api"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import { Room } from "@/types/RoomType"
import { useCallback, useEffect } from "react"
import { useAtom } from "jotai"
import { roomAtom } from "@/atoms/roomAtoms"

const fetchRoom = async (roomId: string): Promise<Room> => {
  const { data } = await api.get<Room>(`/room/${roomId}`)
  return data
}

const collectQ2Sentence = async ({
  roomId,
  chara,
}: {
  roomId: string
  chara: string
}) => {
  const { data } = await api.post<Room>(`/room/${roomId}/collectQ2Sentence`, {
    chara,
  })
  return data
}

export const useRoomOperation = () => {
  const { roomId } = useParams() as { roomId: string }
  const queryClient = useQueryClient()
  const [room, setRoom] = useAtom(roomAtom)

  const roomQuery = useQuery({
    queryKey: ["room", roomId],
    queryFn: () => fetchRoom(roomId),
  })

  useEffect(() => {
    console.debug(roomQuery.data)
    if (roomQuery.data !== undefined) {
      setRoom(roomQuery.data)
    }
  }, [roomQuery.data, setRoom])

  const collectQ2SentenceMutation = useMutation({
    mutationFn: collectQ2Sentence,
    onMutate: async (_variables) => {
      await queryClient.cancelQueries({ queryKey: ["room", roomId] })
      const previousRoom = queryClient.getQueryData<Room>(["room", roomId])
      return { previousRoom }
    },
    onSuccess: (updatedRoom, _variables) => {
      queryClient.setQueryData<Room | undefined>(
        ["room", roomId],
        (_oldRoom) => {
          setRoom(updatedRoom)
          return updatedRoom
        }
      )
    },
    onError: (err, variables, context) => {
      if (context?.previousRoom !== null) {
        queryClient.setQueryData(["room", roomId], context?.previousRoom)
      }
    },
    onSettled: () => {
      void queryClient.invalidateQueries({ queryKey: ["room", roomId] })
    },
  })

  const collectQ2 = useCallback(
    (chara: string) => {
      if (roomId) {
        collectQ2SentenceMutation.mutate({ roomId, chara })
      }
    },
    [roomId, collectQ2SentenceMutation]
  )

  return {
    room,
    ...roomQuery,
    collectQ2,
    isCollecting: collectQ2SentenceMutation.isPending,
    collectError: collectQ2SentenceMutation.error,
  }
}
