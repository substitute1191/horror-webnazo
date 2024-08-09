const Precautions = () => {
  return (
    <div className="bg-orange-100 p-12">
      <h3 className="mb-10 text-center text-5xl">注意事項</h3>
      <ul className="text-2xl">
        <li className="list-inside list-disc">
          シーズン中は謎の回答をSNSなどでネタバレしないようにしてください。
        </li>
        <br />
        <li className="list-inside list-disc">
          このサイトは同時に多くのユーザーが閲覧しています。過度な更新を行うとサーバーに過剰な負荷がかかる恐れがあるため、ページが表示されない時にたくさん更新はしないでください。
        </li>
        <br />
        <li className="list-inside list-disc">
          サイトが落ちてしまったときは、5分程度で正常に戻りますので更新せずにそのままお待ちください。
        </li>
        <br />
        <li className="list-inside list-disc">
          ソースコードを閲覧して解く行為はお控えください。
        </li>
      </ul>
    </div>
  )
}

export default Precautions
