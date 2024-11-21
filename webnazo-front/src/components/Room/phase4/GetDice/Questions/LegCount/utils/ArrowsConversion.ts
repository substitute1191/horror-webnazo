const table = [
  ["ア", "イ", "ウ", "エ", "オ"],
  ["カ", "キ", "ク", "ケ", "コ"],
  ["サ", "シ", "ス", "セ", "ソ"],
  ["タ", "チ", "ツ", "テ", "ト"],
  ["ナ", "ニ", "ヌ", "ネ", "ノ"],
  ["ハ", "ヒ", "フ", "ヘ", "ホ"],
  ["マ", "ミ", "ム", "メ", "モ"],
  ["ヤ", "", "ユ", "", "ヨ"],
  ["ラ", "リ", "ル", "レ", "ロ"],
  ["ワ", "", "", "", "ヲ"],
  ["ン"],
]

export function shiftToDown50Table(char: string) {
  for (const row of table) {
    const index = row.indexOf(char)
    if (index === -1) continue
    if (index + 1 < row.length) {
      return row[index + 1]
    } else {
      return char
    }
  }

  return char
}

export function shiftToLeft50Table(char: string) {
  for (let i = 0; i < table.length - 1; i++) {
    const row = table[i]
    const index = row.indexOf(char)
    if (index === -1) continue
    const nextRow = table[i + 1]
    if (index < nextRow.length && nextRow[index] !== "") {
      return nextRow[index]
    } else {
      return char
    }
  }

  return char
}

export function convertLegCount(animal: string) {
  switch (animal) {
    case "ネコ":
      return "ヨン"
    case "ハチ":
      return "ロク"
    case "タコ":
      return "ハチ"
    default:
      return animal
  }
}

export function kanaToNum(kana: string) {
  switch (kana) {
    case "ニ":
      return "2"
    case "ハチ":
      return "8"
    case "ヨン":
      return "4"
    case "ロク":
      return "6"
    default:
      return "?"
  }
}

console.log(shiftToDown50Table("カ"))
