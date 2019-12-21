import React, { createContext, useEffect, useState } from 'react'

import { tokenGrant, tokenRefresh } from '../api/auth'

const ONE_HOUR = 60 * 60 * 1000

type AuthContextValues = {
  accessToken: string | null
  refreshToken: string | null
  refreshing: boolean
}

const initialValues: AuthContextValues = {
  accessToken: null,
  refreshToken: null,
  refreshing: true,
}

const AuthContext = createContext(initialValues)

export default AuthContext

type Props = {
  children: React.ReactNode
}

export const AuthContextProvider = ({ children }: Props) => {
  const [accessToken, setAccessToken] = useState(initialValues.accessToken)
  const [refreshToken, setRefreshToken] = useState(initialValues.refreshToken)
  const [refreshing, setRefreshing] = useState(initialValues.refreshing)

  useEffect(() => {
    const request = async () => {
      setRefreshing(true)
      const response = await tokenGrant()
      if (response) {
        const { access_token, refresh_token } = response
        setAccessToken(access_token)
        setRefreshToken(refresh_token)
      }
      setRefreshing(false)
    }

    request()
  }, [])

  useEffect(() => {
    if (!refreshToken) return
    let refreshTimeout: number
    const request = async () => {
      setRefreshing(true)
      const response = await tokenRefresh(refreshToken)
      if (response) {
        const { access_token } = response
        setAccessToken(access_token)
      }
      setRefreshing(false)
      refreshTimeout = setTimeout(request, ONE_HOUR)
    }

    request()
    return () => {
      refreshTimeout && clearTimeout(refreshTimeout)
    }
  }, [refreshToken])

  const contextValues = {
    accessToken,
    refreshToken,
    refreshing,
  }

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  )
}
