import AnswerZone from "@/components/Room/phase4/GetDice/Questions/BuildWords/Components/AnswerZone"
import OwnedWordZone from "@/components/Room/phase4/GetDice/Questions/BuildWords/Components/OwnedWordZone"
import ResetButton from "@/components/Room/phase4/GetDice/Questions/BuildWords/Components/ResetButton"
import UnusedWordsZone from "@/components/Room/phase4/GetDice/Questions/BuildWords/Components/UnusedWordsZone"

export default function BuildWords() {
  return (
    <div className="flex flex-col items-center font-normal">
      <OwnedWordZone />
      <UnusedWordsZone />
      <AnswerZone />
      <ResetButton />
    </div>
  )
}
