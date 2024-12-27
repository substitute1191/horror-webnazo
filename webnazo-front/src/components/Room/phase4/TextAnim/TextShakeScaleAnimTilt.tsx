import RandomColor from "@/components/Room/phase4/TextAnim/RandomColor"
import RandomFont from "@/components/Room/phase4/TextAnim/RandomFont"
import RandomScaleAnim from "@/components/Room/phase4/TextAnim/RandomScaleAnim"
import RandomShakeXChar from "@/components/Room/phase4/TextAnim/RandomShakeXChar"
import RandomShakeYChar from "@/components/Room/phase4/TextAnim/RandomShakeYChar"
import RandomTilt from "@/components/Room/phase4/TextAnim/RandomTilt"

export default function TextShakeScaleAnimTilt({
  text,
  classNames,
}: {
  text: string
  classNames?: string
}) {
  return (
    <div className={classNames}>
      {text.split("").map((char, idx) =>
        idx % 2 !== 0 ? (
          <RandomShakeXChar key={idx}>
            <RandomTilt>
              <RandomScaleAnim>
                <RandomFont>
                  <RandomColor>{char}</RandomColor>
                </RandomFont>
              </RandomScaleAnim>
            </RandomTilt>
          </RandomShakeXChar>
        ) : (
          <RandomShakeYChar key={idx}>
            <RandomTilt>
              <RandomScaleAnim>
                <RandomFont>
                  <RandomColor>{char}</RandomColor>
                </RandomFont>
              </RandomScaleAnim>
            </RandomTilt>
          </RandomShakeYChar>
        )
      )}
    </div>
  )
}
