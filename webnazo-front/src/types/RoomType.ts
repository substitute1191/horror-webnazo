export interface Room {
  id: string
  phase: number
  character1: string | null
  character2: string | null
  createdAt: Date
  updatedAt: Date
  rankMatch?: RankMatch
}

export interface RankMatch {
  id: number
  roomId: string
  teamName: string | null
  isDone: boolean[]
  q2sentence: Record<string, boolean>
  room: Room
}
