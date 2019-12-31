import React, { useContext, useEffect, useMemo, useState } from 'react'
import { StyleSheet, View } from 'react-native'

import DashboardModule from './DashboardModule'
import UIText from './ui/UIText'

import StationContext from '../contexts/StationContext'
import AuthContext from '../contexts/AuthContext'

import { mmToIn } from '../utils/conversions'

import COLORS from '../constants/colors'
import { getCurrentDay } from '../utils/station'
import { getYesterdayRain } from '../api/station'

const RainModule = () => {
  const { rainDashboardData } = useContext(StationContext)
  const { accessToken } = useContext(AuthContext)
  const { sum_rain_1, sum_rain_24 = 0, _id } = rainDashboardData || {}
  const [sumYesterday, setSumYesterday] = useState(-1)

  const day = useMemo(() => getCurrentDay(), [rainDashboardData])

  const sum1 = useMemo(() => mmToIn(sum_rain_1), [sum_rain_1])

  const sum24 = useMemo(() => mmToIn(sum_rain_24), [sum_rain_24])

  useEffect(() => {
    const request = async () => {
      if (!accessToken || !_id) return
      const response = await getYesterdayRain(accessToken, _id)
      setSumYesterday(response)
    }

    request()
  }, [day])

  const sumBoth = useMemo(() => mmToIn(sum_rain_24 + sumYesterday), [
    sum_rain_24,
    sumYesterday,
  ])

  return (
    <DashboardModule color={COLORS.blue3}>
      <>
        <UIText color="tan" size="medium" font="plexLight">
          Rain
        </UIText>
        <UIText color="tan" size="xl" font="eczar" style={STYLES.mainReadout}>
          {sum1}"
        </UIText>
        <UIText color="tan" size="medium" font="plexBold">
          Past 1h
        </UIText>
        <View>
          <UIText color="tan" size="small" font="plexBold">
            {sum24}" Today
          </UIText>
          <UIText color="tan" size="small" font="plexBold">
            {sumBoth}" Past 2 days
          </UIText>
        </View>
      </>
    </DashboardModule>
  )
}

const STYLES = StyleSheet.create({
  flex: {
    flex: 1,
  },
  mainReadout: {
    marginBottom: -80,
    marginTop: -50,
    lineHeight: 172,
  },
})

export default RainModule
