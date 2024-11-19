import useQ1Ans from "@/components/Room/phase4/GetDice/hooks/Answers/useQ1Ans"

// 引き算、掛け算、割り算は演算子の表示を変える
function formatOprator(target: string) {
  if (target === "-") {
    return "ー"
  } else if (target === "*") {
    return "×"
  } else if (target === "/") {
    return "÷"
  } else {
    return target
  }
}

export default function Question1() {
  const { expression, updateExpression } = useQ1Ans()

  return (
    <div className="-mt-12">
      {expression.map((term, index) => {
        return (
          <>
            {index % 2 !== 0 ? (
              <button
                className="mr-4 text-7xl text-orange-300"
                onClick={() => updateExpression(index)}
              >
                {formatOprator(term)}
              </button>
            ) : (
              <span className="mr-4 text-7xl">{term}</span>
            )}
          </>
        )
      })}
    </div>
  )
}
