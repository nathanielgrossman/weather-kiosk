import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

import DashboardModule from './DashboardModule'

import StationContext from '../contexts/StationContext'

import COLORS from '../constants/colors'

const IndoorModule = () => {
  const { indoorDashboardData } = useContext(StationContext)
  return (
    <DashboardModule color={COLORS.blue4}>
      <>
        <Text style={{ color: COLORS.tan }}>IndoorModule</Text>
        <Text style={{ color: COLORS.tan }}>
          {JSON.stringify(indoorDashboardData, null, 2)}
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

export default IndoorModule
