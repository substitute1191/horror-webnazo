import { atom, useAtom } from "jotai"
import { useEffect } from "react"
import { evaluate } from "mathjs"

const OPERATORS = ["+", "-", "*", "/"]
const expressionAnsAtom = atom(0)
const baseExpressionAtom = atom(["4", "+", "8", "+", "6", "+", "3"])
const expressionDerivedAtom = atom(
  (get) => get(baseExpressionAtom),
  // 演算子をクリックしたら変更する
  (get, set, target: number) => {
    const expression = get(baseExpressionAtom)
    const newOpIdx = (OPERATORS.indexOf(expression[target]) + 1) % 4
    const newOp = OPERATORS[newOpIdx]
    const newExpression = expression.map((prev, index) =>
      index !== target ? prev : newOp
    )
    set(baseExpressionAtom, newExpression)
  }
)

export default function useExpression() {
  const [expressionAns, setExpressionAns] = useAtom(expressionAnsAtom)
  const [expression, updateExpression] = useAtom(expressionDerivedAtom)

  useEffect(() => {
    const newValue = evaluate(expression.join("")) as number
    setExpressionAns(newValue)
  }, [expression, setExpressionAns])

  return {
    expressionAns,
    setExpressionAns,
    expression,
    updateExpression,
  }
}
