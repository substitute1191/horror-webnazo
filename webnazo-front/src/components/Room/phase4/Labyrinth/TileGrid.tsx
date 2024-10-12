import LabyrinthCurrentTile from "./LabyrinthCurrentTile"
import LabyrinthTile from "./LabyrinthTile"
import useLabyrinth from "./useLabyrinth"

const TileGrid = (): JSX.Element => {
  const { map, currentPoint } = useLabyrinth()

  const col = currentPoint.col
  const row = currentPoint.row

  return (
    <div className={`grid aspect-square h-2/3 grid-cols-3 gap-4`}>
      <LabyrinthTile chara={map[col - 1][row - 1]} />
      <LabyrinthTile chara={map[col][row - 1]} />
      <LabyrinthTile chara={map[col + 1][row - 1]} />
      <LabyrinthTile chara={map[col - 1][row]} />
      <LabyrinthCurrentTile chara={map[col][row]} />
      <LabyrinthTile chara={map[col + 1][row]} />
      <LabyrinthTile chara={map[col - 1][row + 1]} />
      <LabyrinthTile chara={map[col][row + 1]} />
      <LabyrinthTile chara={map[col + 1][row + 1]} />
    </div>
  )
}

export default TileGrid
