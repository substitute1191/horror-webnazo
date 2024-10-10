interface TileType {
  chara: string
}

const LabyrinthTile = (props: TileType): JSX.Element => {
  return (
    <div className="font-onryou flex aspect-square items-center justify-center bg-black text-5xl text-white">
      {props.chara}
    </div>
  )
}

export default LabyrinthTile
