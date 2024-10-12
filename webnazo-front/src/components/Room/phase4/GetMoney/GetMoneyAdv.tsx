import adv100 from "@/assets/image/imprisonment/100万円ゲット謎の広告.jpg"
import useIsShowQuestionForMoney from "../../../../hooks/useIsShowQuestionForMoney"
import QuestionForMoney from "./QustionForMoney"

export default function GetMoneyAdv() {
  const { isShowQuestionForMoney, setIsShowQuestionForMoney } =
    useIsShowQuestionForMoney()

  const handleClick = () => setIsShowQuestionForMoney(true)

  return (
    <>
      <button className="block w-[25vw]" onClick={handleClick}>
        <img src={adv100} alt="" className="object-cover" />
      </button>
      {isShowQuestionForMoney ? <QuestionForMoney /> : null}
    </>
  )
}
