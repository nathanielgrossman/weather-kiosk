type RawData = {
  [key: string]: string
}

export const generateFormdata = (rawData: RawData) => {
  const formData = new FormData()

  for (let key in rawData) {
    formData.append(key, rawData[key])
  }

  return formData
}