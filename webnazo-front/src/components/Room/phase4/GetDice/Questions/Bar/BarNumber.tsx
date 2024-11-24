import Bar from "@/components/Room/phase4/GetDice/Questions/Bar/Bar"

export default function BarNumber() {
  return (
    <div className="relative h-full min-h-[500px] w-full">
      <Bar id={0} classNames="rotate-90 left-[40%] top-[35%]" />
      <Bar id={1} classNames="rotate-90 left-[40%] top-[55%]" />
      <Bar id={2} classNames="left-[52%] top-[28.5%]" />
      <Bar id={3} classNames="rotate-90 left-[47%] top-[37%]" />
      <Bar id={4} classNames="left-[52%] top-[45%]" />
      <Bar id={5} classNames="rotate-90 left-[57%] top-[53%]" />
      <Bar id={6} classNames="left-[52%] top-[62%]" />
    </div>
  )
}
