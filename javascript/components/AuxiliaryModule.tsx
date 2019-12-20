import React, { useContext } from 'react'
import { StyleSheet, Text } from 'react-native'

import DashboardModule from './DashboardModule'

import StationContext from '../contexts/StationContext'

import COLORS from '../constants/colors'

const AuxiliaryModule = () => {
  const { auxiliaryDashboardData } = useContext(StationContext)
  return (
    <DashboardModule color={COLORS.blue5}>
      <>
        <Text style={{ color: COLORS.tan }}>AuxiliaryModule</Text>
        <Text style={{ color: COLORS.tan }}>
          {JSON.stringify(auxiliaryDashboardData, null, 2)}
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

export default AuxiliaryModule
