import axios from 'axios'
import moment from 'moment'
import _ from 'lodash'

// @ts-ignore
import { MAC_ADDRESS } from 'react-native-dotenv'

import { StationData } from 'types/StationData'

const STATION_URL = 'https://api.netatmo.com/api/getstationsdata'
const MEASURE_URL = 'https://api.netatmo.com/api/getmeasure'

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
    console.log('getStationDataError', error)
  }
  return null
}

export const getYesterdayRain = async (token: string, module_id: string) => {
  const date_begin = moment()
    .endOf('day')
    .utcOffset(0)
    .subtract(2, 'days')
    .format('X')
  const params = {
    device_id: MAC_ADDRESS,
    scale: '1day',
    type: 'sum_rain',
    module_id,
    date_begin,
  }
  const headers = {
    Authorization: `Bearer ${token}`,
  }
  try {
    const response = await axios.get(MEASURE_URL, { headers, params })
    return _.get(response, 'data.body[0].value[0][0]')
  } catch (error) {
    console.log('getMeasureError', error)
  }
  return -1
}
