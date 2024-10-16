import adv100 from "@/assets/image/imprisonment/100万円ゲット謎の広告.jpg"
import adv100clear from "@/assets/image/imprisonment/100万円ゲット謎の広告クリア後.jpg"
import useIsShowQuestionForMoney from "../../../../hooks/useIsShowQuestionForMoney"
import QuestionForMoney from "./QustionForMoney"
import { useAtomValue } from "jotai"
import { isMillionaireAtom } from "@/atoms/roomAtoms"

export default function GetMoneyAdv() {
  const { isShowQuestionForMoney, setIsShowQuestionForMoney } =
    useIsShowQuestionForMoney()

  const handleClick = () => setIsShowQuestionForMoney(true)
  const isMillionaire = useAtomValue(isMillionaireAtom)

  return (
    <>
      <button className="block w-[25vw]" onClick={handleClick}>
        {isMillionaire ? (
          <img src={adv100clear} alt="" className="object-cover" />
        ) : (
          <img src={adv100} alt="" className="object-cover" />
        )}
      </button>
      {isShowQuestionForMoney ? <QuestionForMoney /> : null}
    </>
  )
}
