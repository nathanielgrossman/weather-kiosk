import React, { useContext, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import DashboardModule from './DashboardModule'

import StationContext from '../contexts/StationContext'
import { cToF } from '../utils/conversions'

import COLORS from '../constants/colors'
import UIText from './ui/UIText'

const IndoorModule = () => {
  const { indoorDashboardData } = useContext(StationContext)
const { Temperature, max_temp, min_temp } = indoorDashboardData || {}

const temp = useMemo(() => cToF(Temperature), [Temperature])

const max = useMemo(() => cToF(max_temp), [max_temp])

const min = useMemo(() => cToF(min_temp), [min_temp])

  return (
    <DashboardModule color={COLORS.blue4}>
      <>
        <UIText color="tan" size="large" font="plexLight">
          Indoor
        </UIText>
        <UIText color="tan" size="xxl" font="eczar" style={STYLES.mainReadout}>
          {temp}°
        </UIText>
        <View>
          <UIText color="high" size="medium" font="plexBold">
            {max}° High
          </UIText>
          <UIText color="low" size="medium" font="plexBold">
            {min}° Low
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
    marginBottom: -60,
    marginTop: -50,
    lineHeight: 172,
  },
})

export default IndoorModule
