import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

import DashboardModule from './DashboardModule'

import StationContext from '../contexts/StationContext'

import COLORS from '../constants/Colors'

const WindModule = () => {
  const { windDashboardData } = useContext(StationContext)
  return (
    <DashboardModule color={COLORS.blue2}>
      <>
        <Text style={{ color: COLORS.tan }}>WindModule</Text>
        <Text style={{ color: COLORS.tan }}>
          {JSON.stringify(windDashboardData, null, 2)}
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

export default WindModule
