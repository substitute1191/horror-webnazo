export const calculateNewPosition = (
  cursorPos: DOMRect,
  closeBtnPos: DOMRect,
  speed: number
) => {
  const dx = closeBtnPos.x - cursorPos.x
  const dy = closeBtnPos.y - cursorPos.y

  const distance = Math.sqrt(dx * dx + dy * dy)

  if (distance > speed) {
    const ratio = speed / distance
    return {
      x: cursorPos.x + dx * ratio,
      y: cursorPos.y + dy * ratio,
      distance,
    }
  }
  return { x: closeBtnPos.x, y: closeBtnPos.y, distance }
}

export const setWaringLines = (distance: number, warningLines: string[]) => {
  if (240 < distance && distance < 250) {
    return warningLines[0]
  }

  if (130 < distance && distance < 150) {
    return warningLines[1]
  }

  if (70 < distance && distance < 80) {
    return warningLines[2]
  }

  return null
}
