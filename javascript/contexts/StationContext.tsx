import React, { createContext, useContext, useEffect, useState } from 'react'

import { getStationsData } from '../api/station'
import { StationData } from 'types/StationData'
import AuthContext from './AuthContext'
import { parseRawData } from '../utils/station'
import { DashboardData } from 'types/DashboardData'

type AuthContextValues = DashboardData & {
  rawData: StationData | null
}

const initialValues: AuthContextValues = {
  indoorDashboardData: null,
  outdoorDashboardData: null,
  auxiliaryDashboardData: null,
  humidityDashboardData: null,
  rainDashboardData: null,
  windDashboardData: null,
  universalData: null,
  rawData: null,
}

const StationContext = createContext(initialValues)

export default StationContext

type Props = {
  children: React.ReactNode
}

export const StationContextProvider = ({ children }: Props) => {
  const [value, setValue] = useState(initialValues)

  const { accessToken } = useContext(AuthContext)

  useEffect(() => {
    if (!accessToken) return
    let refreshTimeout: number
    const request = async () => {
      const response = await getStationsData(accessToken)
      if (response) {
        const stationData = response
        const parsedData = parseRawData(stationData)
        if (stationData && parsedData) {
          setValue({
            rawData: stationData,
            ...parsedData,
          })
        }
      }
      refreshTimeout = setTimeout(request, 30000)
    }

    request()
    return () => {
      refreshTimeout && clearTimeout(refreshTimeout)
    }
  }, [accessToken])

  return (
    <StationContext.Provider value={value}>{children}</StationContext.Provider>
  )
}
