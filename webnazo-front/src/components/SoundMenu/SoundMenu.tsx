import useSoundMenu from "./useSoundMenu"

const SoundMenu = () => {
  const {
    isVisible,
    menuRef,
    seVol,
    bgmVol,
    handleSEChange,
    handleBGMChange,
    handleMute,
  } = useSoundMenu()

  return (
    <>
      {isVisible ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={menuRef}
            className="flex w-40 flex-col rounded bg-black p-4"
          >
            <div className="text-white">サウンドメニュー</div>
            <div>
              <button onClick={handleMute} className="text-white">
                ミュートにする
              </button>
            </div>
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
