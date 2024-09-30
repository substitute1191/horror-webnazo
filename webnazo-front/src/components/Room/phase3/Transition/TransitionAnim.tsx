import { useRef, useState } from "react"
import CharacterScrambler from "./CharacterScrambler"
import useSlider from "../hooks/useSlider"

/* eslint-disable max-lines,max-lines-per-function,complexity */
export default function TransitionAnim() {
  const raf = useRef<number>()
  const lastTime = useRef<number>(0)
  const [imgCnt, setImgCnt] = useState(0)

  useSlider({ raf, lastTime, interval: 950, setImgCnt })

  return (
    <>
      <CharacterScrambler
        text="死無虚空%絶獄"
        classNames="text-[49rem] font-black top-[10vh] left-[5vw]"
      />
      <CharacterScrambler
        text="死無虚空%絶獄"
        classNames="text-[39rem] font-black"
      />
      <CharacterScrambler
        text="死無虚空%絶獄"
        classNames="text-[59rem] font-black -top-[10vh] left-[90vw]"
      />
      {imgCnt >= 2 ? (
        <>
          <CharacterScrambler
            text="縺翫?繧医≧縺斐＊縺?∪縺"
            classNames="text-[35rem] font-black -top-[15vh] left-[20vw]"
          />
          <CharacterScrambler
            text="縺翫?繧贅?∪縺"
            classNames="text-[45rem] font-black -top-[20vh] left-[40vw]"
          />
          <CharacterScrambler
            text="縺翫?繧医≧縺斐＊縺?∪縺"
            classNames="text-[35rem] font-black -top-[20vh] left-[23vw]"
          />
          <CharacterScrambler
            text="縺翫?繧贅?∪縺"
            classNames="text-[45rem] font-black -top-[25vh] left-[42vw]"
          />
          <CharacterScrambler
            text="縺翫?繧贅?∪縺"
            classNames="text-[45rem] font-black top-[2vh] -left-[12vw]"
          />
        </>
      ) : null}
      {imgCnt >= 3 ? (
        <>
          <CharacterScrambler
            text="豁ｻ縺ｫ縺溘￥縺ｪ縺"
            classNames="text-[35rem] font-black top-[15vh] left-[80vw]"
          />
          <CharacterScrambler
            text="豁ｻ縺ｫ縺溘￥縺ｪ縺"
            classNames="text-[35rem] font-black -top-[30vh] left-[70vw]"
          />
          <CharacterScrambler
            text="費ｾ暦ｾ夲ｾ呻ｾ擾ｽｴｾ費ｾ"
            classNames="text-[35rem] font-black -top-[32vh]"
          />
          <CharacterScrambler
            text="費ｾ暦ｾ夲ｾ呻ｾ擾ｽｴｾ費ｾ"
            classNames="text-[45rem] font-black top-[32vh] -left-[5vw]"
          />
        </>
      ) : null}
      {imgCnt >= 3 ? (
        <>
          <CharacterScrambler
            text="豁ｻ縺ｫ縺溘￥縺ｪ縺"
            classNames="text-[35rem] font-black -top-[35vh]"
          />
          <CharacterScrambler
            text="豁ｻ縺ｫ縺溘￥縺ｪ縺"
            classNames="text-[35rem] font-black -top-[30vh] left-[90vw]"
          />
          <CharacterScrambler
            text="費ｾ暦ｾ夲ｾ呻ｾ擾ｽｴｾ費ｾ"
            classNames="text-[35rem] font-black top-[32vh] left-[40vw]"
          />
          <CharacterScrambler
            text="費ｾ暦ｾ夲ｾ呻ｾ擾ｽｴｾ費ｾ"
            classNames="text-[35rem] font-black top-[45vh] -left-[10vw]"
          />
        </>
      ) : null}
      {imgCnt >= 4 ? (
        <>
          <CharacterScrambler
            text="閾ｪ蟾ｱ荳ｭ蠢?噪"
            classNames="text-[20rem] font-black top-[15vh]"
          />
          <CharacterScrambler
            text="閾ｪ蟾ｱ荳ｭ蠢?噪"
            classNames="text-[20rem] font-black -top-[310vh] left-[90vw]"
          />
          <CharacterScrambler
            text="閾ｪ蟾ｱ荳ｭ蠢?噪"
            classNames="text-[20rem] font-black top-[15vh] left-[30vw]"
          />
          <CharacterScrambler
            text="閾ｪ蟾ｱ荳ｭ蠢?噪"
            classNames="text-[24rem] font-black -top-[15vh] left-[50vw]"
          />
          <CharacterScrambler
            text="閾ｪ蟾ｱ荳ｭ蠢?噪"
            classNames="text-[24rem] font-black -top-[15vh] left-[45vw]"
          />
        </>
      ) : null}
      {imgCnt >= 5 ? (
        <>
          <CharacterScrambler
            text="閾ｪ蟾ｱ荳ｭ蠢?噪"
            classNames="text-[22rem] font-black top-[15vh] left-[10vw]"
          />
          <CharacterScrambler
            text="閾ｪ蟾ｱ荳ｭ蠢?噪"
            classNames="text-[22rem] font-black -top-[310vh] left-[85vw]"
          />
          <CharacterScrambler
            text="閾ｪ蟾ｱ荳ｭ蠢?噪"
            classNames="text-[22rem] font-black top-[16vh] left-[33vw]"
          />
          <CharacterScrambler
            text="閾ｪ蟾ｱ荳ｭ蠢?噪"
            classNames="text-[22rem] font-black -top-[16vh] left-[52vw]"
          />
          <CharacterScrambler
            text="閾ｪ蟾ｱ荳ｭ蠢?噪"
            classNames="text-[22rem] font-black -top-[15vh] left-[47vw]"
          />
        </>
      ) : null}
      {imgCnt >= 6 ? (
        <>
          <CharacterScrambler
            text="遘√ｒ隕区ｮｺ縺励↓縺吶ｋ縺ｮ"
            classNames="text-[22rem] font-black top-[12vh] -left-[10vw]"
          />
          <CharacterScrambler
            text="遘√ｒ隕区ｮｺ縺励↓縺吶ｋ縺ｮ"
            classNames="text-[22rem] font-black -top-[5vh] left-[80vw]"
          />
          <CharacterScrambler
            text="遘√ｒ隕区ｮｺ縺励↓縺吶ｋ縺ｮ"
            classNames="text-[42rem] font-black top-[22vh] -left-[10vw]"
          />
          <CharacterScrambler
            text="遘√ｒ隕区ｮｺ縺励↓縺吶ｋ縺ｮ"
            classNames="text-[32rem] font-black top-[30vh]"
          />
          <CharacterScrambler
            text="遘√ｒ隕区ｮｺ縺励↓縺吶ｋ縺ｮ"
            classNames="text-[22rem] font-black top-[35vh] left-[10vw]"
          />
          <CharacterScrambler
            text="遘√ｒ隕区ｮｺ縺励↓縺吶ｋ縺ｮ"
            classNames="text-[40rem] font-black top-[35vh] left-[70vw]"
          />
          <CharacterScrambler
            text="遘√ｒ隕区ｮｺ縺励↓縺吶ｋ縺ｮ"
            classNames="text-[40rem] font-black top-[35vh] left-[60vw]"
          />
          <CharacterScrambler
            text="遘√ｒ隕区ｮｺ縺励↓縺吶ｋ縺ｮ"
            classNames="text-[40rem] font-black top-[40vh] left-[55vw]"
          />
          <CharacterScrambler
            text="遘√ｒ隕区ｮｺ縺励↓縺吶ｋ縺ｮ"
            classNames="text-[40rem] font-black top-[40vh] left-[50vw]"
          />
        </>
      ) : null}
      {imgCnt >= 7 ? (
        <>
          <CharacterScrambler
            text="縺昴≧縺槭≧繧偵●縺｣縺吶ｋ縺上▽縺"
            classNames="text-[22rem] font-black top-[12vh] -left-[10vw]"
          />
          <CharacterScrambler
            text="縺昴≧縺槭≧繧偵●縺｣縺吶ｋ縺上▽縺"
            classNames="text-[22rem] font-black -top-[5vh] left-[80vw]"
          />
          <CharacterScrambler
            text="縺昴≧縺槭≧繧偵●縺｣縺吶ｋ縺上▽縺"
            classNames="text-[22rem] font-black top-[12vh] -left-[1vw]"
          />
          <CharacterScrambler
            text="縺昴≧縺槭≧繧偵●縺｣縺吶ｋ縺上▽縺"
            classNames="text-[22rem] font-black -top-[16vh] left-[40vw]"
          />
          <CharacterScrambler
            text="縺昴≧縺槭≧繧偵●縺｣縺吶ｋ縺上▽縺"
            classNames="text-[22rem] font-black top-[25vh] left-[30vw]"
          />
          <CharacterScrambler
            text="縺昴≧縺槭≧繧偵●縺｣縺吶ｋ縺上▽縺"
            classNames="text-[40rem] font-black top-[30vh] left-[25vw]"
          />
          <CharacterScrambler
            text="縺昴≧縺槭≧繧偵●縺｣縺吶ｋ縺上▽縺"
            classNames="text-[40rem] font-black top-[30vh] left-[30vw]"
          />
          <CharacterScrambler
            text="縺昴≧縺槭≧繧偵●縺｣縺吶ｋ縺上▽縺"
            classNames="text-[40rem] font-black top-[30vh] left-[35vw]"
          />
          <CharacterScrambler
            text="遘√ｒ隕区ｮｺ縺励↓縺吶ｋ縺ｮ"
            classNames="text-[40rem] font-black top-[30vh] left-[45vw]"
          />
        </>
      ) : null}
      {imgCnt >= 8 ? (
        <>
          <span className="font-onryou fixed -top-[20vh] z-[55] text-[35rem] font-bold text-red-600">
            タ
          </span>
          <span className="font-onryou fixed -top-[2vh] left-[50vw] z-[55] text-[25rem] font-black text-red-600">
            ス
          </span>
          <span className="fixed left-[30vw] top-[15vh] z-[55] text-[30rem] font-black text-red-600">
            ケ
          </span>
          <span className="font-pop fixed left-[60vw] top-[21vh] z-[55] text-[32rem] font-extrabold text-red-400">
            テ
          </span>
        </>
      ) : null}
    </>
  )
}
