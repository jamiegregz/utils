export type TryCatch = <R, E>(tryMethod: () => R) => { result: R; error: null } | { result: null; error: E | null }

export const tryCatch: TryCatch = <R, E>(tryMethod: () => R) => {
  try {
    const result = tryMethod()
    return { result, error: null }
  } catch (e) {
    const error = e as E
    return { result: null, error }
  }
}
