import SupermarketPicture from "@/assets/image/imprisonment/ショッピングセンター広告.jpg"
import useIsShowLabyrinth from "./labyrinth/useIsShowLabyrinth"
import dark from "@/assets/image/imprisonment/n12_周辺減光黒.png"
import noise from "@/assets/image/imprisonment/n03_ドットノイズ黒.png"
export default function SupermarketAdv() {
  const { handleClickLabyrinth } = useIsShowLabyrinth()

  return (
    <button
      onClick={() => handleClickLabyrinth(1)}
      className="absolute right-0 top-0 block h-[36vh] w-[30vw]"
    >
      <img src={dark} alt="" className="absolute h-full w-full" />
      <img src={noise} alt="" className="absolute h-full w-full" />
      <img src={SupermarketPicture} alt="" className="h-full w-full" />
    </button>
  )
}
