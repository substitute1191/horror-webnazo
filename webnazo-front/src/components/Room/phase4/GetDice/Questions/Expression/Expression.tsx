import useDiceQ1 from "@/components/Room/phase4/GetDice/Questions/Expression/useExpression"

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

export default function Expression() {
  const { expression, updateExpression } = useDiceQ1()

  return (
    <div className="">
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
