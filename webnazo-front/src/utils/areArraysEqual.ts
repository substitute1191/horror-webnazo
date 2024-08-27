type NestedArray<T> = T | NestedArray<T>[]

/* eslint-disable complexity */
export function areArraysEqual<T>(
  arr1: NestedArray<T>[],
  arr2: NestedArray<T>[]
): boolean {
  if (arr1.length !== arr2.length) return false

  for (let i = 0; i < arr1.length; i++) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (
        !areArraysEqual(
          arr1[i] as NestedArray<T>[],
          arr2[i] as NestedArray<T>[]
        )
      )
        return false
    } else if (
      !Array.isArray(arr1[i]) &&
      !Array.isArray(arr2[i]) &&
      arr1[i] !== arr2[i]
    ) {
      return false
    }
  }

  return true
}
