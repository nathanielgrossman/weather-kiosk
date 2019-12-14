import axios from 'axios'

import {
  NETATMO_ID,
  NETATMO_SECRET,
  NETATMO_USERNAME,
  NETATMO_PASSWORD,
  // @ts-ignore
} from 'react-native-dotenv'

import { generateFormdata } from '../utils/api'

const AUTH_URL = 'https://api.netatmo.com/oauth2/token'

type TokenGrantResponse = {
  access_token: string
  refresh_token: string
  expire_in: number
  expires_in: number
  scope: string[]
}

export const tokenGrant = async () => {
  const data = generateFormdata({
    grant_type: 'password',
    client_id: NETATMO_ID,
    client_secret: NETATMO_SECRET,
    username: NETATMO_USERNAME,
    password: NETATMO_PASSWORD,
  })
  try {
    const response = await axios.post(AUTH_URL, data)
    return response.data as TokenGrantResponse
  } catch (error) {
    console.log('tokenGrantError', error)
  }
  return null
}

type TokenRefreshResponse = {
  access_token: string
  refresh_token: string
  expires_in: number
}

export const tokenRefresh = async (refresh_token: string) => {
  const data = generateFormdata({
    grant_type: 'refresh_token',
    client_id: NETATMO_ID,
    client_secret: NETATMO_SECRET,
    refresh_token
  })
  try {
    const response = await axios.post(AUTH_URL, data)
    return response.data as TokenRefreshResponse
  } catch (error) {
    console.log('tokenRefreshError', error)
  }
  return null
}