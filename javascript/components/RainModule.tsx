import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

import DashboardModule from './DashboardModule'

import StationContext from '../contexts/StationContext'

import COLORS from '../constants/Colors'

const RainModule = () => {
  const { rainDashboardData } = useContext(StationContext)
  return (
    <DashboardModule color={COLORS.blue3}>
      <>
        <Text style={{ color: COLORS.tan }}>RainModule</Text>
        <Text style={{ color: COLORS.tan }}>
          {JSON.stringify(rainDashboardData, null, 2)}
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

export default RainModule
