import CollectableChara from "./CollectableChara"

const SiteDescription = () => {
  return (
    <>
      <h2 className="pb-5 text-center text-6xl tracking-widest">
        このサイトは？
      </h2>
      <p className="bg-teal-100 p-8 text-left text-2xl">
        このサイトでは毎週所定の時間に「
        <span className="text-red-500">ナゾトキランクマッチ</span>
        」が開催される！
        <br />
        <CollectableChara chara="み" />
        んなで一斉に同じ謎解き問題に参加して、解くまでの時間を競うのだ！解くのが早ければ早いほどレーティングが上がっていくぞ！
        <br />
        <span className="text-red-500">全国の謎解きマニアたちと勝負せよ！</span>
      </p>
    </>
  )
}

export default SiteDescription
