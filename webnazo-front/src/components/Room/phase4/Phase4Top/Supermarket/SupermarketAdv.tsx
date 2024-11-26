import SupermarketPicture from "@/assets/image/imprisonment/ショッピングセンター広告.jpg"
import useIsShowLabyrinth from "./labyrinth/useIsShowLabyrinth"

export default function SupermarketAdv() {
  const { handleClickLabyrinth } = useIsShowLabyrinth()

  return (
    <button
      onClick={() => handleClickLabyrinth(1)}
      className="absolute right-0 top-0 block w-[30vw]"
    >
      <img src={SupermarketPicture} alt="" />
    </button>
  )
}
