import useSpeechBubbleAnim from "./useSpeechBubbleAnim"

type Props = {
  text: string
  handleComplete: () => void
  firstAnimate: boolean
}

const SpeechBubble: React.FC<Props> = ({
  text,
  handleComplete,
  firstAnimate,
}) => {
  const { showText } = useSpeechBubbleAnim({ text, handleComplete })

  return (
    <div
      className={`flex w-[80%] ${firstAnimate ? "animate-[fadein_1s_linear]" : ""}`}
    >
      <div className="-bottom-4 left-4 mt-20 h-0 w-0 rotate-90 transform border-l-[10px] border-r-[10px] border-t-[30px] border-l-transparent border-r-transparent border-t-slate-50"></div>
      <div className="h-full w-full rounded-xl bg-slate-50 p-8 text-4xl opacity-90">
        {text !== "" ? showText : ""}
      </div>
    </div>
  )
}

export default SpeechBubble
