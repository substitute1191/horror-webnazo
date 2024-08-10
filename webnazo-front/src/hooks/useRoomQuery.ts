import api from "@/utils/api"
import { useQuery } from "@tanstack/react-query"
import { Room } from "shared-types"

const fetchRoom = async (roomId: string): Promise<Room> => {
  const { data } = await api.get<Room>(`/room/${roomId}`)
  return data
}

export const useRoomQuery = (roomId: string) => {
  return useQuery({
    queryKey: ["room", roomId],
    queryFn: () => fetchRoom(roomId),
  })
}
