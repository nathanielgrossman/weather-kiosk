import axios from 'axios'

// @ts-ignore
import { MAC_ADDRESS } from 'react-native-dotenv'

import { StationData } from 'types/StationData'

const STATION_URL = 'https://api.netatmo.com/api/getstationsdata'

export const getStationsData = async (token: string) => {
  const params = {
    device_id: MAC_ADDRESS,
    get_favorites: 'false',
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  try {
    const response = await axios.get(STATION_URL, { headers, params })
    return response.data as StationData
  } catch (error) {
    console.log('tokenGrantError', error)
  }
  return null
}