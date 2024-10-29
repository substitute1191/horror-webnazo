export default function DonationMsg({ classNames }: { classNames?: string }) {
  return (
    <div className={`${classNames} font-mincho mt-10 text-xl font-bold`}>
      <div className="text-center">
        これらのイラストは現実を描いたものではありません。
        ある難病を患った女の子が病室で、彼女の夢を絵にしたものです。
      </div>
      <div className="text-center">
        絵を本当に夢のまま終わらせて良いのでしょうか？
        女の子を助けるために、あなたの優しさを少し分けてください。
      </div>
    </div>
  )
}
