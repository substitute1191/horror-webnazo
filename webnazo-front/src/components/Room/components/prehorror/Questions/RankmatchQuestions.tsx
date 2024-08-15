import FlipTile from "./Question1/FlipTile"

const RankmatchQuestions = () => {
  return (
    <>
      <div className="text-3xl">
        問題：「Q1の答え」の「Q2の答え」を「Q3の答え」せよ
      </div>
      <FlipTile />
      <div className="text-3xl">Q2</div>
      <div className="text-3xl">Q3</div>
    </>
  )
}

export default RankmatchQuestions
