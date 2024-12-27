import RandomScale from "@/components/Room/phase4/TextAnim/RandomScale"
import RandomShakeXChar from "@/components/Room/phase4/TextAnim/RandomShakeXChar"
import RandomShakeYChar from "@/components/Room/phase4/TextAnim/RandomShakeYChar"
import RandomTilt from "@/components/Room/phase4/TextAnim/RandomTilt"

const kaigyo = ["。", "」"]

export default function MemoTextWrapper({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, idx) => {
        return idx % 2 !== 0 ? (
          <>
            <RandomShakeXChar origin="text-slate-800">
              <RandomTilt>
                <RandomScale>{char}</RandomScale>
              </RandomTilt>
            </RandomShakeXChar>
            {kaigyo.includes(char) ? (
              <>
                <br />
                <br />
              </>
            ) : null}
          </>
        ) : (
          <>
            <RandomShakeYChar origin="text-slate-800">
              <RandomTilt>
                <RandomScale>{char}</RandomScale>
              </RandomTilt>
            </RandomShakeYChar>
            {kaigyo.includes(char) ? (
              <>
                <br />
                <br />
              </>
            ) : null}
          </>
        )
      })}
    </>
  )
}
