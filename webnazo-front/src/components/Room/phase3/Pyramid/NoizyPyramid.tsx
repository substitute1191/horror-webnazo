import pyramid1 from "@/assets/image/mascot/noizy/合成ピラミッド10.png"
import pyramid2 from "@/assets/image/mascot/noizy/合成ピラミッド9-8.png"
import pyramid3 from "@/assets/image/mascot/noizy/合成ピラミッド8-8.png"
import pyramid4 from "@/assets/image/mascot/noizy/合成ピラミッド7-8.png"
import pyramid5 from "@/assets/image/mascot/noizy/合成ピラミッド5-8.png"
import pyramid6 from "@/assets/image/mascot/noizy/合成ピラミッド6-8.png"

const NoizyPyramid = ({ imgIdx }: { imgIdx: number }) => {
  return (
    <>
      {imgIdx === 0 ? (
        <img className="-ml-12 w-64" src={pyramid1} alt="" />
      ) : null}
      {imgIdx === 1 ? (
        <img className="-ml-12 w-64" src={pyramid2} alt="" />
      ) : null}
      {imgIdx === 2 ? (
        <img className="-ml-12 w-64" src={pyramid3} alt="" />
      ) : null}
      {imgIdx === 3 ? (
        <img className="-ml-12 w-64" src={pyramid4} alt="" />
      ) : null}
      {imgIdx === 4 ? (
        <img className="-ml-12 w-64" src={pyramid5} alt="" />
      ) : null}
      {imgIdx === 5 ? (
        <img className="-ml-12 w-64" src={pyramid6} alt="" />
      ) : null}
    </>
  )
}

export default NoizyPyramid
