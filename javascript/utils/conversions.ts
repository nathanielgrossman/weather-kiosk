export const cToF = (celsius?: number) => {
  if (!celsius) return -1
  return ((celsius * 9) / 5 + 32).toFixed(1)
}
