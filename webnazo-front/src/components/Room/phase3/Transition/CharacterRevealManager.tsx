import { useEffect, useState } from "react"
import CharacterRevealSpan from "./CharacterRevealSpan"
import useAdvImageManager from "../hooks/Adv/useAdvImageManager"
import realeye from "@/assets/image/realeye.png"
import handanim1 from "@/assets/image/gif/tekubiani01.gif"
import KidImageSlider from "./Slider/KidImageSlider"
import TVImageSlider from "./Slider/TVGifSlider"
import EyeGifSlider from "./Slider/EyeGifSlider"

/* eslint-disable max-lines-per-function,max-lines */
const CharacterRevealManager = () => {
  const { currentImg } = useAdvImageManager()
  const [isShowGroup1, setIsShowGroup1] = useState(false)
  const [isShowGroup2, setIsShowGroup2] = useState(false)
  const [isShowGroup3, setIsShowGroup3] = useState(false)
  const [isShowGroup4, setIsShowGroup4] = useState(false)
  const [isShowGroup5, setIsShowGroup5] = useState(false)
  const [isShowGroup6, setIsShowGroup6] = useState(false)

  useEffect(() => {
    if (currentImg >= 2 && !isShowGroup1) {
      setIsShowGroup1(true)
    } else if (currentImg >= 3 && !isShowGroup2) {
      setIsShowGroup2(true)
    } else if (currentImg >= 4 && !isShowGroup3) {
      setIsShowGroup3(true)
    } else if (currentImg >= 5 && !isShowGroup4) {
      setIsShowGroup4(true)
    } else if (currentImg >= 6 && !isShowGroup5) {
      setIsShowGroup5(true)
    } else if (currentImg >= 7 && !isShowGroup6) {
      setIsShowGroup6(true)
    }
  }, [
    currentImg,
    isShowGroup1,
    isShowGroup2,
    isShowGroup3,
    isShowGroup4,
    isShowGroup5,
    isShowGroup6,
  ])

  return (
    <>
      {isShowGroup1 ? (
        <>
          <CharacterRevealSpan
            text="イカサマ大好き"
            interval={100}
            classNames="text-[15rem] font-black text-black font-onryou rotate-45 z-30 top-[10vh]"
          />
          <CharacterRevealSpan
            text="誰かを押しのけても生き残りたいの？"
            interval={50}
            classNames="text-[15rem] font-black text-red-800 font-onryou z-30 top-[14vh] left-[3vw]"
          />
          <CharacterRevealSpan
            text="練炭自殺 楽な死に方"
            interval={50}
            classNames="text-[12rem] font-black text-red-800 rotate-[65deg] font-onryou z-30 -top-[15vh] left-[80vw]"
          />
        </>
      ) : null}
      {isShowGroup2 ? (
        <>
          <img
            src={realeye}
            alt=""
            className="fixed left-[2vh] top-[10vh] w-32"
          />
          <img
            src={realeye}
            alt=""
            className="fixed bottom-[10vh] right-[2vh] w-20"
          />
          <CharacterRevealSpan
            text="二人いるから一人くらい良いよね？"
            interval={80}
            classNames="text-[5rem] text-black font-onryou rotate-[10deg] z-30 -top-[5vh]"
          />
          <CharacterRevealSpan
            text="許して許して許して許して許して許して許して"
            interval={40}
            classNames="text-[20rem] font-black text-black font-onryou rotate-[5deg] z-30 top-[33rem]"
          />
          <CharacterRevealSpan
            text="諦ｍｍめＥﾃ位諦諦めて"
            interval={100}
            classNames="text-[15rem] text-black rotate-90 font-onryou z-30 -top-[40vh] left-[50vw]"
          />
        </>
      ) : null}

      {isShowGroup3 ? (
        <>
          <img
            src={handanim1}
            alt=""
            className="fixed top-[20vh] z-40 w-[10vw]"
          />
          <img
            src={handanim1}
            alt=""
            className="fixed left-[2vw] top-[21vh] z-40 w-[10vw]"
          />
          <img
            src={handanim1}
            alt=""
            className="fixed left-[4vw] top-[25vh] z-40 w-[10vw]"
          />
          <CharacterRevealSpan
            text="私を置いていかないで"
            interval={50}
            classNames="text-[25rem] font-black text-black font-onryou rotate-[35deg] z-30 top-[15vh] -left-[10vw]"
          />
        </>
      ) : null}

      {isShowGroup4 ? (
        <>
          <CharacterRevealSpan
            text="%ぅア誤縺タヒにヵ；＆！・"
            interval={70}
            classNames="text-[8rem] text-blue-800 font-black font-gothic -rotate-[5deg] z-30 top-[25vh] left-[35vw]"
            spanClassNames="-tracking-[1rem]"
          />
        </>
      ) : null}

      {isShowGroup5 ? (
        <>
          <CharacterRevealSpan
            text="鬱鬱鬱鬱鬱鬱鬱鬱"
            interval={35}
            classNames="text-[31rem] font-extrabold text-slate-800 font-onryou z-30 top-[8vh] left-[5vw]"
            spanClassNames="inline-block origin-center rotate-180"
          />
        </>
      ) : null}

      {isShowGroup6 ? (
        <>
          <KidImageSlider />
          <TVImageSlider />
          <EyeGifSlider />
        </>
      ) : null}

      {/* 
          
      
      
      <CharacterRevealSpan
        text="あーあ。あーあ。あーあ。あーあ。あーあ。"
        interval={120}
        classNames="text-[12rem] text-black font-bold font-onryou z-30 -left-[21rem] -top-[5rem]"
      />
      <CharacterRevealSpan
        text="うめき声。うめき声。うめき声。うめき声。うめき声。"
        interval={120}
        classNames="text-[13rem] text-black font-black font-onryou z-30 left-[8rem] -top-[6rem]"
      />
      <CharacterRevealSpan
        text="友情なんて机上の空論だよ"
        interval={100}
        classNames="text-[12rem] text-black font-bold font-onryou z-30 -top-[2rem]"
      />
      
      <CharacterRevealSpan
        text="全員死ﾝぢゃE幡いー！"
        interval={10}
        classNames="text-[12rem] text-black font-black font-onryou -rotate-[20deg] z-30 top-[40rem]"
      />
      <CharacterRevealSpan
        text="ごめんなさいごめんなさいごめんなさいごめんなさい"
        interval={40}
        classNames="text-[15rem] text-black font-extrabold font-onryou rotate-[5deg] z-30 top-[6rem]"
      />
      
      <CharacterRevealSpan
        text="許されない許されない許されない許されない許されない許されない"
        interval={40}
        classNames="text-[20rem] font-black text-black font-onryou rotate-[5deg] z-30 top-[34rem] left-[2rem]"
      />
      <CharacterRevealSpan
        text="絶対に絶対に絶対に絶対に絶対に絶対に絶対に"
        interval={70}
        classNames="text-[20rem] font-black text-black font-onryou rotate-[5deg] z-30 top-[34rem] -left-[10rem]"
      />
      <CharacterRevealSpan
        text="臭いものには蓋をせよ"
        interval={130}
        classNames="text-[25rem] font-bold text-black font-onryou rotate-[1deg] z-30 -left-[80rem]"
      />
      <CharacterRevealSpan
        text="世の中どんどん悪くなるだけ"
        interval={100}
        classNames="text-[25rem] text-black font-onryou -rotate-[30deg] z-30 left-[3rem]"
      />
      <CharacterRevealSpan
        text="お前の心の中は空虚だね"
        interval={500}
        classNames="text-[25rem] text-black font-onryou -rotate-[1deg] z-30 -top-[5rem] left-[5rem]"
      />
      <CharacterRevealSpan
        text="大人になれ大人になれ大人になれ"
        interval={20}
        classNames="text-[30rem] text-black font-onryou rotate-90 z-30 top-[10rem] left-[50rem]"
      />
      <CharacterRevealSpan
        text="ﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐﾐ"
        interval={100}
        classNames="text-[10rem] text-black font-onryou rotate-[1deg] z-30 top-[2rem] left-[20rem]"
      />
      <CharacterRevealSpan
        text="溶けてなくなりたい溶けてなくなりたい"
        interval={500}
        classNames="text-[40rem] text-black font-onryou -rotate-[1deg] z-30 top-[2rem] left-[20rem]"
      />
      <CharacterRevealSpan
        text="自分の傲慢さに気付いていないだけだよね"
        interval={200}
        classNames="text-[31rem] font-bold text-black font-onryou -rotate-[1deg] z-30 top-[12rem] -left-[20rem]"
      />
      
      <CharacterRevealSpan
        text="自分が良い人間だなんて思ってるの？"
        interval={40}
        classNames="text-[31rem] font-extrabold text-black font-onryou -rotate-[10deg] z-30 -top-[50vh]"
      />
      <CharacterRevealSpan
        text="瀬界壊れゃェ場ｍ。！"
        interval={40}
        classNames="text-[31rem] font-extrabold text-black font-onryou -top-[10vh]"
      />
      <CharacterRevealSpan
        text="◆◆◆◇◇■■■----~~~~~~"
        interval={40}
        classNames="text-[20rem] font-extrabold -rotate-[80deg] text-black font-onryou left-[10vw]"/> */}
    </>
  )
}

export default CharacterRevealManager
