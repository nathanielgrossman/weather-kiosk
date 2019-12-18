import React, { createContext, useContext, useEffect, useState } from 'react'

import { getStationsData } from '../api/station'
import { StationData } from 'types/StationData'
import AuthContext from './AuthContext'

type AuthContextValues = {
  data: StationData | null
}

const initialValues: AuthContextValues = {
  data: null
}

const StationContext = createContext(initialValues)

export default StationContext

type Props = {
  children: React.ReactNode
}

export const StationContextProvider = ({ children }: Props) => {
  const [data, setData] = useState(initialValues.data)

  const {accessToken} = useContext(AuthContext)

  useEffect(() => {
    if (!accessToken) return
    let refreshTimeout: number
    const request = async () => {
      const response = await getStationsData(accessToken)
      if (response) {
        const stationData = response
        setData(stationData)
      }
      refreshTimeout = setTimeout(request, 10000)
    }

    request()
    return () => {
      refreshTimeout && clearTimeout(refreshTimeout)
    }
  }, [accessToken])

  const contextValues = {
    data,
  }

  return (
    <StationContext.Provider value={contextValues}>
      {children}
    </StationContext.Provider>
  )
}
