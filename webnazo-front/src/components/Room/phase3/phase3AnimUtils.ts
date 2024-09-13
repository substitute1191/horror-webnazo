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
      isCursorAtTarget: false,
    }
  }
  return {
    x: closeBtnPos.x,
    y: closeBtnPos.y,
    distance,
    isCursorAtTarget: true,
  }
}

/* eslint-disable complexity */
export const setWaringLines = (distance: number) => {
  const warningLines = [
    "ちょっと何してるの！？",
    "人の話聞いてる！？",
    "ヤバイヤバイヤバイって！",
    "あわわわわわわわわわわわわ",
  ]

  if (300 < distance && distance < 330) {
    return warningLines[0]
  }

  if (240 < distance && distance < 250) {
    return warningLines[1]
  }

  if (130 < distance && distance < 150) {
    return warningLines[2]
  }

  if (70 < distance && distance < 80) {
    return warningLines[3]
  }

  return null
}

export const getAdvTransitionPhrases = (currentImg: number) => {
  const advTransitionPhrases = [
    "あ！",
    "何この声！？",
    "何かバグってるよ！？",
    "何が起こってるの！？",
    "こ、怖いよ！！",
    "コワイコワイコワイコワイコワイコワイコワイ",
    "いやだいやだいやだいやだいやだいやだ",
    "死んじゃう死んじゃう死んじゃう死んじゃう",
    "死にたくない死にたくない死にたくない",
    "あなたは生きたいですか……？",
  ]

  switch (currentImg) {
    case 2:
      return advTransitionPhrases[0]
    case 3:
      return advTransitionPhrases[1]
    case 4:
      return advTransitionPhrases[2]
    case 5:
      return advTransitionPhrases[3]
    case 6:
      return advTransitionPhrases[4]
    case 7:
      return advTransitionPhrases[5]
    case 8:
      return advTransitionPhrases[6]
    case 9:
      return advTransitionPhrases[7]
    case 10:
      return advTransitionPhrases[8]
    case 11:
      return advTransitionPhrases[9]
    default:
      return null
  }
}
