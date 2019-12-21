import React, { useContext, useMemo } from 'react'
import { View, StyleSheet } from 'react-native'

import DashboardModule from './DashboardModule'
import UIText from './ui/UIText'

import StationContext from '../contexts/StationContext'
import { getPPMColor } from '../utils/conversions'

import COLORS from '../constants/colors'

const AuxiliaryModule = () => {
  const { auxiliaryDashboardData } = useContext(StationContext)
  const { Pressure, CO2, Noise } = auxiliaryDashboardData || {}

  const ppmColor = useMemo(() => getPPMColor(CO2), [CO2])

  return (
    <DashboardModule color={COLORS.blue5}>
      <>
        <View>
          <UIText color="tan" size="medium" font="plexLight">
            Pressure
          </UIText>
          <UIText color="tan" size="medium" font="plexBold">
            {Pressure} mbar
          </UIText>
        </View>
        <View>
          <View style={STYLES.rowWithSub}>
            <UIText color="tan" size="medium" font="plexLight">
              CO
            </UIText>
            <UIText color="tan" size="subScript" font="plexLight">
              2
            </UIText>
          </View>
          <UIText color={ppmColor} size="medium" font="plexBold">
            {CO2} ppm
          </UIText>
        </View>
        <View>
          <UIText color="tan" size="medium" font="plexLight">
            Noise
          </UIText>
          <UIText color="tan" size="medium" font="plexBold">
            {Noise} db
          </UIText>
        </View>
      </>
    </DashboardModule>
  )
}

const STYLES = StyleSheet.create({
  rowWithSub: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
})

export default AuxiliaryModule
