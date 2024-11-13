export interface Room {
  id: string
  phase: number
  character1: string | null
  character2: string | null
  createdAt: Date
  updatedAt: Date
  rankMatch?: RankMatch
  confined?: Confined
}

export interface RankMatch {
  id: number
  roomId: string
  teamName: string | null
  isDone: boolean[]
  q2sentence: Record<string, boolean>
  room: Room
}

export interface Confined {
  id: number
  roomId: string
  isMillionaire: boolean
  reachedShop: boolean
  hasMicrowave: boolean
  isDonated: boolean
  hasStolen: boolean
  hasDice: boolean
}

export interface Position {
  x: number
  y: number
}

export interface Positions {
  [key: string]: Position
}
