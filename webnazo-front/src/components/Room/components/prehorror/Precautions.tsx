import CollectableChara from "./CollectableChara"

const Precautions = () => {
  return (
    <div className="bg-orange-100 p-12">
      <h3 className="mb-10 text-center text-5xl">注意事項</h3>
      <ul className="text-2xl">
        <li className="list-inside list-disc">
          シーズン中
          <CollectableChara chara="は" />
          謎の回答をSNSなどでネタバレしないようにしてください。
        </li>
        <br />
        <li className="list-inside list-disc">
          このサイトは同時
          <CollectableChara chara="に" />
          多くのユーザーが閲覧しています。過度な更新を行うとサーバーに過剰な負荷がかかって
          <CollectableChara chara="や" />
          ばいです。 ページが表示されない時でもたくさん更新はしないでください。
        </li>
        <br />
        <li className="list-inside list-disc">
          サイトが落ちてしまったと
          <CollectableChara chara="き" />
          は、5分程度で正常に戻ります
          <CollectableChara chara="の" />
          で更新せずにそのままお待ちください。
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
