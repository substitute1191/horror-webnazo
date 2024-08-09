import useSoundMenu from "./useSoundMenu"

const SoundMenu = () => {
  const {
    isVisible,
    isPlayable,
    menuRef,
    seVol,
    bgmVol,
    handleSEChange,
    handleBGMChange,
    handleIsPlayableChange,
  } = useSoundMenu()

  return (
    <>
      {isVisible ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            ref={menuRef}
            className="flex flex-col p-4 bg-black rounded w-40"
          >
            <span className="text-white">サウンドメニュー</span>
            <label className="text-white">
              <input
                type="checkbox"
                name=""
                id=""
                checked={!isPlayable}
                onChange={handleIsPlayableChange}
              />
              ミュートにする
            </label>
            <label htmlFor="se-volume" className="text-white">
              SE音量
            </label>
            <input
              type="range"
              id="se-volume"
              name="se-volume"
              min="0"
              max="1"
              step="0.01"
              value={seVol}
              onChange={(e) => handleSEChange(e)}
            />
            <label htmlFor="bgm-volume" className="text-white">
              BGM音量
            </label>
            <input
              type="range"
              id="bgm-volume"
              name="bgm-volume"
              min="0"
              max="1"
              step="0.01"
              value={bgmVol}
              onChange={(e) => handleBGMChange(e)}
            />
          </div>
        </div>
      ) : null}
    </>
  )
}

export default SoundMenu
