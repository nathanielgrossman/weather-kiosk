import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

import DashboardModule from './DashboardModule'

import StationContext from '../contexts/StationContext'

import COLORS from '../constants/Colors'

const OutdoorModule = () => {
  const { outdoorDashboardData } = useContext(StationContext)
  return (
    <DashboardModule color={COLORS.blue1}>
      <>
        <Text style={{ color: COLORS.tan }}>OutdoorModule</Text>
        <Text style={{ color: COLORS.tan }}>
          {JSON.stringify(outdoorDashboardData, null, 2)}
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

export default OutdoorModule

