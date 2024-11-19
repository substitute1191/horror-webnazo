import { atom, useAtom } from "jotai"
import { useEffect } from "react"
import { evaluate } from "mathjs"

const OPERATORS = ["+", "-", "*", "/"]
const q1AnsAtom = atom(0)
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

export default function useQ1Ans() {
  const [q1Ans, setQ1Ans] = useAtom(q1AnsAtom)
  const [expression, updateExpression] = useAtom(expressionDerivedAtom)

  useEffect(() => {
    const newValue = evaluate(expression.join("")) as number
    setQ1Ans(newValue)
  }, [expression, setQ1Ans])

  return {
    q1Ans,
    setQ1Ans,
    expression,
    updateExpression,
  }
}
