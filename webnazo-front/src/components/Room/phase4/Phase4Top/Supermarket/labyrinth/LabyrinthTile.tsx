interface TileType {
  chara: string
}

const LabyrinthTile = (props: TileType): JSX.Element => {
  const bgColor = props.chara === "止" ? "bg-rose-800" : "bg-black"

  return (
    <div
      className={`font-onryou flex aspect-square items-center justify-center ${bgColor} text-5xl text-white`}
    >
      {props.chara}
    </div>
  )
}

export default LabyrinthTile
