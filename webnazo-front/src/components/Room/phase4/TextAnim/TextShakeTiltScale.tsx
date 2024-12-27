import RandomFont from "@/components/Room/phase4/TextAnim/RandomFont"
import RandomScale from "@/components/Room/phase4/TextAnim/RandomScale"
import RandomShakeXChar from "@/components/Room/phase4/TextAnim/RandomShakeXChar"
import RandomShakeYChar from "@/components/Room/phase4/TextAnim/RandomShakeYChar"
import RandomTilt from "@/components/Room/phase4/TextAnim/RandomTilt"

export default function TextShakeTiltScale({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((char, idx) =>
        idx % 2 !== 0 ? (
          <RandomShakeXChar key={idx}>
            <RandomTilt>
              <RandomScale>
                <RandomFont>{char}</RandomFont>
              </RandomScale>
            </RandomTilt>
          </RandomShakeXChar>
        ) : (
          <RandomShakeYChar key={idx}>
            <RandomTilt>
              <RandomScale>
                <RandomFont>{char}</RandomFont>
              </RandomScale>
            </RandomTilt>
          </RandomShakeYChar>
        )
      )}
    </>
  )
}
