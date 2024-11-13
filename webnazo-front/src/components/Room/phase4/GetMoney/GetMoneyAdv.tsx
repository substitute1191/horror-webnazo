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
        {isMillionaire ? (
          <img src={adv100clear} alt="" className="object-cover" />
        ) : (
          <img src={adv100} alt="" className="object-cover" />
        )}
        {isMillionaire && myChara === 2 && !isDonated ? (
          <MillionaireMsg />
        ) : null}
      </button>
      {isShowQuestionForMoney ? <QuestionForMoney /> : null}
    </>
  )
}
