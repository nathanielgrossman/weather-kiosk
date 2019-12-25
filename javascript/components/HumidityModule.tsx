import React, { useContext, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import DashboardModule from './DashboardModule'
import UIText from './ui/UIText'
import GraphicsSelector from './GraphicsSelector'

import StationContext from '../contexts/StationContext'

import COLORS from '../constants/colors'

const HumidityModule = () => {
  const { humidityDashboardData } = useContext(StationContext)
  const { outdoor, indoor } = humidityDashboardData || {}
  return (
    <DashboardModule color={COLORS.tan}>
      <>
        <View>
          <UIText color="blue3" size="medium" font="plexLight">
            Humidity
          </UIText>
          <UIText color="blue1" size="medium" font="plexBold">
            {outdoor}% Out
          </UIText>
          <UIText color="blue4" size="medium" font="plexBold">
            {indoor}% in
          </UIText>
        </View>
        <GraphicsSelector size={150} />
      </>
    </DashboardModule>
  )
}

const STYLES = StyleSheet.create({
  universalText: {
    textAlign: 'right',
    lineHeight: 36,
    marginRight: 30,
    marginBottom: -6,
  },
})

export default HumidityModule
