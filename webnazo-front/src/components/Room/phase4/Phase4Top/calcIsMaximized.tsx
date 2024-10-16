interface WindowState {
  isMaximized: boolean
  previousWidth: number
  previousHeight: number
}

// ウインドウの状態を取得し、最大化ボタンが押されたかを判定
export default function calcIsMaximized(windowState: WindowState) {
  const { innerWidth, innerHeight, outerWidth, outerHeight, screen } = window

  // 方法1: 内部サイズと外部サイズの比較
  const isMaximizedBySize =
    innerWidth === outerWidth && innerHeight === outerHeight

  // 方法2: プライマリディスプレイとの比較（余裕を持たせる）
  const tolerance = 5 // ピクセル単位の許容差
  const isMaximizedByScreen =
    Math.abs(outerWidth - screen.availWidth) <= tolerance &&
    Math.abs(outerHeight - screen.availHeight) <= tolerance

  // 急激なサイズ変更の検出
  const hasSignificantChange =
    Math.abs(innerWidth - windowState.previousWidth) > 20 ||
    Math.abs(innerHeight - windowState.previousHeight) > 20

  const isMaximized =
    (isMaximizedBySize || isMaximizedByScreen) && hasSignificantChange

  return isMaximized
}
