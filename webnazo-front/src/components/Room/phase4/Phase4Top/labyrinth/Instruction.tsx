import { memo } from "react"
import Keyboard from "./Keyboard"
const Instructions = (): JSX.Element => {
  return (
    <div className="w-1/6 text-black">
      <h2 className="text-4xl">操作方法</h2>
      <ol className="my-10 text-2xl">
        <li className="my-6">
          <Keyboard str={"W"} /> / <Keyboard str={"↑"} />
          ：上へ移動
        </li>
        <li className="my-6">
          <Keyboard str={"A"} /> / <Keyboard str={"←"} />
          ：左へ移動
        </li>
        <li className="my-6">
          <Keyboard str={"S"} /> / <Keyboard str={"↓"} />
          ：下へ移動
        </li>
        <li className="my-6">
          <Keyboard str={"D"} /> / <Keyboard str={"→"} />
          ：右へ移動
        </li>
      </ol>
    </div>
  )
}

export default memo(Instructions)
