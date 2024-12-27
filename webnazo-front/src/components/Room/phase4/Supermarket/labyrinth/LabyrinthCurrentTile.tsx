interface TileType {
  chara: string
}

const LabyrinthCurrentTile = (props: TileType): JSX.Element => {
  return (
    <div className="font-onryou flex aspect-square items-center justify-center bg-blue-900 text-5xl text-white">
      {props.chara}
    </div>
  )
}

export default LabyrinthCurrentTile
