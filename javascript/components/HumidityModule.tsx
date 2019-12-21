import React, { useContext, useMemo } from 'react'
import { StyleSheet, View } from 'react-native'

import DashboardModule from './DashboardModule'
import UIText from './ui/UIText'

import StationContext from '../contexts/StationContext'
import { utcToTime, utcToDate } from '../utils/conversions'

import COLORS from '../constants/colors'

const HumidityModule = () => {
  const { humidityDashboardData, universalData } = useContext(StationContext)
  const { outdoor, indoor } = humidityDashboardData || {}
  const { time_utc, station_name } = universalData || {}

  const time = useMemo(() => utcToTime(time_utc), [time_utc])

  const date = useMemo(() => utcToDate(time_utc), [time_utc])

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
        <View>
          <UIText
            color="blue3"
            size="small"
            font="eczar"
            style={STYLES.universalText}>
            {time}
          </UIText>
          <UIText
            color="blue3"
            size="small"
            font="eczar"
            style={STYLES.universalText}>
            {date}
          </UIText>
          <UIText
            color="blue3"
            size="small"
            font="eczar"
            style={STYLES.universalText}>
            {station_name}
          </UIText>
        </View>
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
