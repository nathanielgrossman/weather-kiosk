import React, { useContext, useMemo } from 'react'
import { StyleSheet } from 'react-native'

import DashboardModule from './DashboardModule'

import StationContext from '../contexts/StationContext'
import { cToF } from '../utils/conversions'

import COLORS from '../constants/colors'
import UIText from './ui/UIText'

const OutdoorModule = () => {
  const { outdoorDashboardData } = useContext(StationContext)

  const temp = useMemo(
    () => (outdoorDashboardData ? cToF(outdoorDashboardData.Temperature) : -1),
    [outdoorDashboardData],
  )

  const max = useMemo(
    () => (outdoorDashboardData ? cToF(outdoorDashboardData.max_temp) : 0),
    [outdoorDashboardData],
  )

  const min = useMemo(
    () => (outdoorDashboardData ? cToF(outdoorDashboardData.min_temp) : 0),
    [outdoorDashboardData],
  )

  return (
    <DashboardModule color={COLORS.blue1}>
      <>
        <UIText color="tan" size="medium" font="plexLight">
          Outdoor
        </UIText>
        <UIText color="tan" size="xxl" font="eczar">
          {`${temp}°`}
        </UIText>
        <UIText color="high" size="medium" font="plexBold">
          {`${max}° High`}
        </UIText>
        <UIText color="low" size="medium" font="plexBold">
          {`${min}° Low`}
        </UIText>
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
