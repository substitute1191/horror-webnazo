import adv100 from "@/assets/image/imprisonment/100万円ゲット謎の広告.jpg"
import adv100clear from "@/assets/image/imprisonment/100万円ゲット謎の広告クリア後.jpg"
import useIsShowQuestionForMoney from "../../../../hooks/useIsShowQuestionForMoney"
import QuestionForMoney from "./QustionForMoney"
import { useAtomValue } from "jotai"
import {
  isDonatedAtom,
  isMillionaireAtom,
  myCharaAtom,
} from "@/atoms/roomAtoms"
import MillionaireMsg from "./MillionaireMsg"
import noise from "@/assets/image/imprisonment/n12_周辺減光黒.png"

export default function GetMoneyAdv() {
  const { isShowQuestionForMoney, setIsShowQuestionForMoney } =
    useIsShowQuestionForMoney()

  const handleClick = () => setIsShowQuestionForMoney(true)
  const isMillionaire = useAtomValue(isMillionaireAtom)
  const isDonated = useAtomValue(isDonatedAtom)
  const myChara = useAtomValue(myCharaAtom)

  return (
    <>
      <button className="relative block w-[30vw]" onClick={handleClick}>
        <img
          src={noise}
          className="pointer-events-none absolute z-10 h-[36vh] w-[30vw]"
          alt=""
        />
        {isMillionaire ? (
          <img
            src={adv100clear}
            alt=""
            className="absolute h-[36vh] w-[30vw]"
          />
        ) : (
          <img src={adv100} alt="" className="absolute h-[36vh] w-[30vw]" />
        )}
        {isMillionaire && myChara === 2 && !isDonated ? (
          <MillionaireMsg />
        ) : null}
      </button>
      {isShowQuestionForMoney ? <QuestionForMoney /> : null}
    </>
  )
}
