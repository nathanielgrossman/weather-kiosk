import React, { useContext, useMemo } from 'react'
import { View } from 'react-native'

import DashboardModule from './DashboardModule'
import UIText from './ui/UIText'

import StationContext from '../contexts/StationContext'
import { kmhToMph, degToDirection } from '../utils/conversions'

import COLORS from '../constants/colors'

const WindModule = () => {
  const { windDashboardData } = useContext(StationContext)
  const { WindStrength, WindAngle, max_wind_str, max_wind_angle} = windDashboardData || {}

  const strength = useMemo(() => kmhToMph(WindStrength), [WindStrength])

  const angle = useMemo(() => degToDirection(WindAngle), [WindAngle])

  const maxStrength = useMemo(() => kmhToMph(max_wind_str), [max_wind_str])

  const maxAngle = useMemo(() => degToDirection(max_wind_angle), [max_wind_angle])

  return (
    <DashboardModule color={COLORS.blue2}>
      <>
        <UIText color="tan" size="medium" font="plexLight">
          Wind
        </UIText>
        <View style={{ width: 100, height: 100, backgroundColor: COLORS.blue3 }} />
        <View>
          <UIText color="tan" size="medium" font="plexBold">
            {strength} mph
          </UIText>
          <UIText color="tan" size="medium" font="plexBold">
            {angle}
          </UIText>
        </View>
        <View>
          <UIText color="high" size="small" font="plexBold">
            Max
          </UIText>
          <UIText color="high" size="small" font="plexBold">
            {maxStrength} {maxAngle}
          </UIText>
        </View>
      </>
    </DashboardModule>
  )
}

export default WindModule
