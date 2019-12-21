export const cToF = (celsius?: number) => {
  if (!celsius) return -1
  return ((celsius * 9) / 5 + 32).toFixed(1)
}

export const mmToIn = (mm?: number) => {
  if (!mm) return 0.00
  return (mm * 0.0393701).toFixed(2)
}
