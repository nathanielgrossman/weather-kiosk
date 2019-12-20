import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

import DashboardModule from './DashboardModule'

import StationContext from '../contexts/StationContext'

import COLORS from '../constants/Colors'

const HumidityModule = () => {
  const { humidityDashboardData, universalData } = useContext(StationContext)
  return (
    <DashboardModule color={COLORS.tan}>
      <>
        <Text style={{ color: COLORS.blue3 }}>HumidityModule</Text>
        <Text style={{ color: COLORS.blue3 }}>
          {JSON.stringify(humidityDashboardData, null, 2)}
        </Text>
        <Text style={{ color: COLORS.blue3 }}>
          {JSON.stringify(universalData, null, 2)}
        </Text>
      </>
    </DashboardModule>
  )
}

const STYLES = StyleSheet.create({
  flex: {
    flex: 1,
  },
})

export default HumidityModule
