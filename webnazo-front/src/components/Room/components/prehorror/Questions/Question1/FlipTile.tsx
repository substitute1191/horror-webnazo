import useFlipTile from "./useFlipTile"

// eslint-disable-next-line max-lines-per-function
const FlipTile = () => {
  const { idx, puzzle, answer, isClear, reset, flip } = useFlipTile()

  const containerStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "4px",
    width: "160px",
  }

  const tileStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    paddingBottom: "100%",
    perspective: "1000px",
  }

  const flipperStyle = (isFlipped: boolean): React.CSSProperties => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    transformStyle: "preserve-3d",
    transition: "transform 0.4s",
    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
  })

  const faceStyle: React.CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "1.5rem",
    fontWeight: "bold",
    cursor: "pointer",
  }

  return (
    <div>
      <h1 style={{ fontSize: "1.875rem", marginBottom: "1rem" }}>
        Q1 左のパズルを右図と一致させろ！（最短で3手）
      </h1>
      <div className="flex justify-center">
        <button
          className="mb-3 transform rounded-2xl border-b-4 border-pink-500 bg-pink-400 px-4 py-2 text-3xl text-white shadow-lg transition duration-150 ease-in-out hover:-translate-y-0.5 hover:border-pink-400 hover:shadow-inner active:border-pink-600"
          onClick={reset}
        >
          初期盤面に戻す
        </button>
      </div>
      <div className="flex justify-center gap-12">
        <div style={containerStyle}>
          {idx.map((rowIdx) =>
            idx.map((colIdx) => (
              <button
                key={colIdx + rowIdx * 4}
                style={tileStyle}
                onClick={() => flip(rowIdx, colIdx)}
              >
                <div
                  className="border-gray border shadow-md"
                  style={flipperStyle(puzzle[rowIdx][colIdx] === 1)}
                >
                  <div style={{ ...faceStyle, backgroundColor: "#6B7280" }}>
                    {colIdx + rowIdx * 4}
                  </div>
                  <div
                    style={{
                      ...faceStyle,
                      backgroundColor: "#F8FAFC",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    {colIdx + rowIdx * 4}
                  </div>
                </div>
              </button>
            ))
          )}
        </div>
        <div className="grid w-40 grid-cols-4 gap-1">
          {idx.map((rowIdx) =>
            idx.map((colIdx) => (
              <div
                key={`answer${colIdx + rowIdx * 4}`}
                className={`border-gray flex items-center justify-center border text-xl font-bold shadow-md ${answer[rowIdx][colIdx] === 0 ? "bg-gray-500" : "bg-slate-50"}`}
              >
                {colIdx + rowIdx * 4}
              </div>
            ))
          )}
        </div>
      </div>
      {isClear ? <div>正解！</div> : null}
    </div>
  )
}

export default FlipTile
