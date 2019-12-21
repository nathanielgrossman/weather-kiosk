import React, { useContext, useMemo } from 'react'
import { StyleSheet, Text } from 'react-native'

import DashboardModule from './DashboardModule'
import UIText from './ui/UIText'

import StationContext from '../contexts/StationContext'
import { mmToIn } from '../utils/conversions'

import COLORS from '../constants/colors'

const RainModule = () => {
  const { rainDashboardData } = useContext(StationContext)
  const { sum_rain_1, sum_rain_24 } = rainDashboardData || {}

  const sum1 = useMemo(() => mmToIn(sum_rain_1), [sum_rain_1])

  const sum24 = useMemo(() => mmToIn(sum_rain_24), [sum_rain_24])

  return (
    <DashboardModule color={COLORS.blue3}>
      <>
        <UIText color="tan" size="medium" font="plexLight">
          Rain
        </UIText>
        <UIText color="tan" size="xl" font="eczar" style={STYLES.mainReadout}>
          {sum1}"
        </UIText>
        <UIText color="tan" size="small" font="plexBold">
          Past 1h
        </UIText>
        <UIText color="tan" size="xl" font="eczar" style={STYLES.mainReadout}>
          {sum24}"
        </UIText>
        <UIText color="tan" size="small" font="plexBold">
          Past 24h
        </UIText>
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
