import moment from 'moment'

export const cToF = (celsius?: number) => {
  if (!celsius) return -1
  return ((celsius * 9) / 5 + 32).toFixed(1)
}

export const mmToIn = (mm?: number) => {
  if (!mm) return 0.0
  return (mm * 0.0393701).toFixed(2)
}

export const kmhToMph = (mm?: number) => {
  if (!mm) return 0.0
  return (mm * 0.621371).toFixed(2)
}

const DIRECTIONS = [
  'N',
  'NNE',
  'NE',
  'ENE',
  'E',
  'ESE',
  'SE',
  'SSE',
  'S',
  'SSW',
  'SW',
  'WSW',
  'W',
  'WNW',
  'NW',
  'NNW',
  'N',
]

export const moduloDegrees = (degrees?: number) => {
  if (degrees === undefined) return 0
  return degrees % 360
}

export const degToDirection = (degrees?: number) => {
  if (degrees === undefined) return '~'
  const degMod = moduloDegrees(degrees)
  const index = Math.round(degMod / 22.5)
  return DIRECTIONS[index]
}

export const getPPMColor = (ppm?: number) => {
  if (ppm === undefined) return 'tan'
  else if (ppm < 350) return 'ppm0'
  else if (ppm < 750) return 'ppm350'
  else if (ppm < 1500) return 'ppm750'
  else return 'ppm1500'
}

export const utcToTime = (utc?: string) => {
  if (!utc) return 'error'
  return moment.unix(Number(utc)).format('hh:mm a')
}

export const utcToDate = (utc?: string) => {
  if (!utc) return ''
  return moment.unix(Number(utc)).format('MMM DD, YYYY')
}
